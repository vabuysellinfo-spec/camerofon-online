"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── Configuration ──────────────────────────────────────────
const API_BASE = "https://camerofon-pay.va-buysell-info.workers.dev";
const POLL_INTERVAL = 3000;   // 3 seconds
const POLL_TIMEOUT = 600000;  // 10 minutes

// ─── Types ──────────────────────────────────────────────────
type PaymentState =
  | { step: "idle" }
  | { step: "creating" }
  | { step: "redirecting" }
  | { step: "polling"; orderId: string; token: string }
  | { step: "paid"; code: string }
  | { step: "timeout" }
  | { step: "error"; message: string };

const i18n = {
  uk: {
    or: "або",
    payBtn: "Оплатити криптовалютою",
    note: "Оплата через OxaPay · $1 USD",
    creatingTitle: "Створюємо рахунок…",
    creatingSub: "Зачекайте кілька секунд",
    redirectingTitle: "Перенаправляємо на оплату…",
    redirectingSub: "Ви будете перенаправлені на сторінку OxaPay",
    pollingTitle: "Очікуємо підтвердження…",
    pollingSub: "Як тільки оплата буде підтверджена в мережі, ваш Basic-код з'явиться тут автоматично.",
    paidTitle: "Оплата підтверджена!",
    copied: "Скопійовано ✓",
    copy: "Скопіювати код",
    paidSub: "Збережіть цей код — він одноразовий. Введіть його в застосунку Camerofon на екрані активації.",
    close: "Закрити",
    timeoutTitle: "Оплату ще обробляють",
    timeoutSub: "Підтвердження може зайняти деякий час. Якщо ви вже оплатили, спробуйте повернутися на цю сторінку пізніше — код буде видано автоматично.",
    errorTitle: "Помилка",
    tryAgain: "Спробувати знову",
  },
  en: {
    or: "or",
    payBtn: "Pay with cryptocurrency",
    note: "Powered by OxaPay · $1 USD",
    creatingTitle: "Creating invoice…",
    creatingSub: "Please wait a few seconds",
    redirectingTitle: "Redirecting to payment…",
    redirectingSub: "You will be redirected to the OxaPay page",
    pollingTitle: "Waiting for confirmation…",
    pollingSub: "Once the payment is confirmed on the network, your Basic code will appear here automatically.",
    paidTitle: "Payment confirmed!",
    copied: "Copied ✓",
    copy: "Copy code",
    paidSub: "Save this code — it is single-use. Enter it in the Camerofon app on the activation screen.",
    close: "Close",
    timeoutTitle: "Payment is still processing",
    timeoutSub: "Confirmation may take some time. If you have already paid, try returning to this page later — the code will be issued automatically.",
    errorTitle: "Error",
    tryAgain: "Try again",
  }
};

type CryptoPayButtonProps = {
  lang?: "uk" | "en";
};

// ─── Component ──────────────────────────────────────────────
export default function CryptoPayButton({ lang = "uk" }: CryptoPayButtonProps) {
  const t = i18n[lang];
  const [state, setState] = useState<PaymentState>({ step: "idle" });
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Check URL params on mount (returning from OxaPay)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    const orderId = params.get("orderId");
    const token = params.get("token");

    if (payment === "pending" && orderId && token) {
      setState({ step: "polling", orderId, token });
      setShowModal(true);

      // Clean URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete("payment");
      url.searchParams.delete("orderId");
      url.searchParams.delete("token");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
  }, []);

  // Polling logic
  useEffect(() => {
    if (state.step !== "polling") return;

    const { orderId, token } = state;

    const checkPayment = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/check-payment?orderId=${encodeURIComponent(orderId)}&token=${encodeURIComponent(token)}`
        );
        if (!res.ok) return;
        const data = await res.json();

        if (data.status === "paid" && data.code) {
          setState({ step: "paid", code: data.code });
        }
      } catch {
        // Silently retry on next interval
      }
    };

    // Check immediately
    checkPayment();

    // Then poll every 3 seconds
    pollRef.current = setInterval(checkPayment, POLL_INTERVAL);

    // Timeout after 10 minutes
    timeoutRef.current = setTimeout(() => {
      setState({ step: "timeout" });
    }, POLL_TIMEOUT);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state.step, state.step === "polling" ? (state as { orderId: string }).orderId : null]);

  // Stop polling when paid
  useEffect(() => {
    if (state.step === "paid" || state.step === "timeout" || state.step === "error") {
      if (pollRef.current) clearInterval(pollRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [state.step]);

  // ─── Create invoice ───────────────────────────────────────
  const handleCryptoPayment = useCallback(async () => {
    setState({ step: "creating" });
    setShowModal(true);

    try {
      const res = await fetch(`${API_BASE}/create-invoice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to create invoice");
      }

      const data = await res.json();

      if (!data.payLink) {
        throw new Error("No payment link received");
      }

      // Save to sessionStorage as backup
      sessionStorage.setItem("camerofon_orderId", data.orderId);
      sessionStorage.setItem("camerofon_token", data.customerToken);

      setState({ step: "redirecting" });

      // Redirect to OxaPay payment page
      window.location.href = data.payLink;
    } catch (err) {
      setState({
        step: "error",
        message: err instanceof Error ? err.message : "Payment failed",
      });
    }
  }, []);

  // ─── Copy code ────────────────────────────────────────────
  const handleCopy = useCallback((code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // ─── Close modal ──────────────────────────────────────────
  const handleClose = useCallback(() => {
    if (state.step !== "polling" && state.step !== "creating" && state.step !== "redirecting") {
      setShowModal(false);
      if (state.step !== "paid") {
        setState({ step: "idle" });
      }
    }
  }, [state.step]);

  return (
    <>
      {/* ─── Crypto Pay Button ─── */}
      <div className="crypto-pay-section">
        <div className="crypto-divider">
          <span>{t.or}</span>
        </div>
        <button
          className="crypto-pay-button"
          onClick={handleCryptoPayment}
          disabled={state.step !== "idle" && state.step !== "paid" && state.step !== "error" && state.step !== "timeout"}
        >
          <span className="crypto-icons" aria-hidden="true">₿</span>
          <span>{t.payBtn}</span>
          <span className="crypto-badge">USDT · BTC · ETH</span>
        </button>
        <small className="crypto-note">
          {t.note}
        </small>
      </div>

      {/* ─── Modal ─── */}
      {showModal && (
        <div className="crypto-modal-overlay" onClick={handleClose}>
          <div className="crypto-modal" onClick={(e) => e.stopPropagation()}>
            {/* Creating */}
            {state.step === "creating" && (
              <div className="crypto-modal-body">
                <div className="crypto-spinner" />
                <p className="crypto-modal-title">{t.creatingTitle}</p>
                <p className="crypto-modal-sub">{t.creatingSub}</p>
              </div>
            )}

            {/* Redirecting */}
            {state.step === "redirecting" && (
              <div className="crypto-modal-body">
                <div className="crypto-spinner" />
                <p className="crypto-modal-title">{t.redirectingTitle}</p>
                <p className="crypto-modal-sub">{t.redirectingSub}</p>
              </div>
            )}

            {/* Polling */}
            {state.step === "polling" && (
              <div className="crypto-modal-body">
                <div className="crypto-spinner" />
                <p className="crypto-modal-title">{t.pollingTitle}</p>
                <p className="crypto-modal-sub">
                  {t.pollingSub}
                </p>
              </div>
            )}

            {/* Paid — show code! */}
            {state.step === "paid" && (
              <div className="crypto-modal-body crypto-success">
                <div className="crypto-success-icon">✓</div>
                <p className="crypto-modal-title">{t.paidTitle}</p>
                <div className="crypto-code-display">
                  <small>CAMEROFON BASIC</small>
                  <strong>{state.code}</strong>
                  <button className="crypto-copy-btn" onClick={() => handleCopy(state.code)}>
                    {copied ? t.copied : t.copy}
                  </button>
                </div>
                <p className="crypto-modal-sub">
                  {t.paidSub}
                </p>
                <button className="crypto-close-btn" onClick={handleClose}>{t.close}</button>
              </div>
            )}

            {/* Timeout */}
            {state.step === "timeout" && (
              <div className="crypto-modal-body">
                <p className="crypto-modal-title">{t.timeoutTitle}</p>
                <p className="crypto-modal-sub">
                  {t.timeoutSub}
                </p>
                <button className="crypto-close-btn" onClick={handleClose}>{t.close}</button>
              </div>
            )}

            {/* Error */}
            {state.step === "error" && (
              <div className="crypto-modal-body">
                <p className="crypto-modal-title">{t.errorTitle}</p>
                <p className="crypto-modal-sub">{state.message}</p>
                <button
                  className="crypto-close-btn"
                  onClick={() => {
                    setShowModal(false);
                    setState({ step: "idle" });
                  }}
                >
                  {t.tryAgain}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Styles ─── */}
      <style>{`
        .crypto-pay-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          width: 100%;
        }
        .crypto-divider {
          align-items: center;
          display: flex;
          gap: 14px;
          width: 100%;
        }
        .crypto-divider::before,
        .crypto-divider::after {
          background: var(--line, #e2e6ed);
          content: "";
          flex: 1;
          height: 1px;
        }
        .crypto-divider span {
          color: #98a2b3;
          font-size: 11px;
          font-weight: 650;
          text-transform: uppercase;
        }
        .crypto-pay-button {
          align-items: center;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 13px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          gap: 8px;
          justify-content: center;
          min-height: 46px;
          padding: 13px 18px;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 100%;
        }
        .crypto-pay-button:hover:not(:disabled) {
          box-shadow: 0 6px 24px rgba(26, 26, 46, 0.35);
          transform: translateY(-1px);
        }
        .crypto-pay-button:active:not(:disabled) {
          transform: scale(0.98);
        }
        .crypto-pay-button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .crypto-icons {
          font-size: 16px;
        }
        .crypto-badge {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 9px;
          font-weight: 680;
          letter-spacing: 0.3px;
          margin-left: 4px;
          padding: 4px 7px;
        }
        .crypto-note {
          color: #98a2b3;
          font-size: 9px;
          font-weight: 600;
        }

        /* ─── Modal ─── */
        .crypto-modal-overlay {
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          display: flex;
          inset: 0;
          justify-content: center;
          position: fixed;
          z-index: 9999;
        }
        .crypto-modal {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
          margin: 20px;
          max-width: 420px;
          overflow: hidden;
          width: 100%;
        }
        .crypto-modal-body {
          align-items: center;
          display: flex;
          flex-direction: column;
          padding: 40px 32px;
          text-align: center;
        }
        .crypto-modal-title {
          font-size: 18px;
          font-weight: 740;
          letter-spacing: -0.5px;
          margin: 16px 0 8px;
        }
        .crypto-modal-sub {
          color: #6b7a94;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
          max-width: 320px;
        }

        /* Spinner */
        .crypto-spinner {
          animation: spin 1s linear infinite;
          border: 3px solid #e2e6ed;
          border-radius: 50%;
          border-top-color: #0066ff;
          height: 40px;
          width: 40px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success */
        .crypto-success-icon {
          align-items: center;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 50%;
          color: #fff;
          display: flex;
          font-size: 22px;
          font-weight: 800;
          height: 52px;
          justify-content: center;
          width: 52px;
        }
        .crypto-code-display {
          background: linear-gradient(155deg, rgba(240, 245, 255, 1), rgba(230, 238, 255, 0.9));
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 16px 0;
          padding: 24px;
          width: 100%;
        }
        .crypto-code-display small {
          color: #8792a6;
          font-size: 9px;
          font-weight: 760;
          letter-spacing: 2px;
        }
        .crypto-code-display strong {
          font-size: 26px;
          letter-spacing: 2px;
        }
        .crypto-copy-btn {
          background: #0066ff;
          border: 0;
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          margin-top: 4px;
          padding: 10px;
          transition: background 0.2s;
        }
        .crypto-copy-btn:hover {
          background: #0052cc;
        }
        .crypto-close-btn {
          background: transparent;
          border: 1px solid #e2e6ed;
          border-radius: 10px;
          color: #58667e;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 650;
          margin-top: 16px;
          padding: 10px 24px;
          transition: background 0.2s;
        }
        .crypto-close-btn:hover {
          background: #f4f6f9;
        }
      `}</style>
    </>
  );
}
