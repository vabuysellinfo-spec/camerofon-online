import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Купити Basic-код — Camerofon",
  description:
    "Купівля одноразового Basic-коду Camerofon на 30 днів через Telegram Stars.",
  alternates: { canonical: "/buy/" },
  robots: { index: true, follow: true },
};

const icons = {
  camera: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7.5 8.4 5h7.2L17 7.5h2A2 2 0 0 1 21 9.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8-8m-3 3 2 2m-5 1 2 2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10 5h4m-3 13.5h2" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M6.1 8.2A7 7 0 0 1 18.4 7L20 12M4 12l1.6 5A7 7 0 0 0 18 15.8" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5.5 5.5v5.7c0 4.3 2.7 7.7 6.5 9.8 3.8-2.1 6.5-5.5 6.5-9.8V5.5L12 3Z" />
      <path d="m9.2 12 1.8 1.8 3.9-4" />
    </svg>
  ),
};

type PurchaseCardProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
};

function PurchaseCard({
  icon,
  eyebrow,
  title,
  description,
  buttonLabel,
}: PurchaseCardProps) {
  return (
    <article className="purchase-card">
      <span className="purchase-icon">{icon}</span>
      <span className="card-eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price-placeholder">
        <span>Ціна / Price</span>
        <strong>100 ⭐️ Telegram Stars</strong>
      </div>
      <a href="https://t.me/CamerofonBot" target="_blank" rel="noopener noreferrer" className="buy-button">
        {buttonLabel}
      </a>
    </article>
  );
}

export default function BuyPage() {
  return (
    <main className="buy-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header buy-header">
        <a className="brand" href="/" aria-label="Camerofon — на головну">
          <span className="brand-mark" aria-hidden="true">
            <img src="/camerofon-icon-512.png" alt="" width="40" height="40" />
          </span>
          <span>Camerofon</span>
        </a>
        <nav className="language-nav" aria-label="Вибір мови">
          <a href="#uk">Українська</a>
          <span aria-hidden="true">·</span>
          <a href="#en">English</a>
        </nav>
        <a className="back-link" href="/">
          ← На головну
        </a>
      </header>

      <section className="buy-hero" id="uk" lang="uk">
        <div className="buy-hero-copy">

          <h1>
            Basic-код для <span>Camerofon</span>
          </h1>
          <p>
            Один одноразовий код активує доступ на 30 днів. Після покупки ви
            зможете застосувати його для нового пульта, додаткової камери або
            продовження вже підключеної камери.
          </p>
          <div className="hero-facts" aria-label="Основні умови Basic-коду">
            <span>{icons.clock} 30 днів</span>
            <span>{icons.key} Одноразовий код</span>
            <span>{icons.shield} Без автосписань</span>
          </div>
        </div>

        <div className="code-preview" aria-label="Приклад Basic-коду">
          <div className="code-preview-top">
            <span className="purchase-icon">{icons.key}</span>
            <span className="preview-status" style={{color: "var(--blue)", borderColor: "var(--blue)", background: "rgba(0, 102, 255, 0.1)"}}>Доступно зараз</span>
          </div>
          <small>CAMEROFON BASIC</small>
          <strong>XXXX-XXXX-XXXX</strong>
          <div className="code-details">
            <span><b>30</b><small>днів доступу</small></span>
            <i />
            <span><b>1</b><small>використання</small></span>
          </div>
          <a href="https://t.me/CamerofonBot" target="_blank" rel="noopener noreferrer" className="buy-button preview-button">
            Купити через Telegram
          </a>
        </div>
      </section>

      <section className="buy-content" lang="uk">
        <div className="section-heading buy-heading">
          <span className="section-kicker">Один код · три варіанти</span>
          <h2>Виберіть дію під час активації</h2>
          <p>
            У всіх випадках використовується той самий Basic-код. Варіант
            обирається безпосередньо в застосунку Camerofon.
          </p>
        </div>

        <div className="purchase-grid">
          <PurchaseCard
            icon={icons.phone}
            eyebrow="Перший запуск"
            title="Активувати новий пульт"
            description="Активує один телефон-пульт та одне місце для камери на 30 днів."
            buttonLabel="Купити код"
          />
          <PurchaseCard
            icon={icons.plus}
            eyebrow="Ще одна камера"
            title="Додати місце для камери"
            description="Додає до активованого пульта ще одне місце для підключення камери."
            buttonLabel="Купити код"
          />
          <PurchaseCard
            icon={icons.refresh}
            eyebrow="Продовження"
            title="Продовжити вибрану камеру"
            description="Продовжує доступ для вибраної підключеної камери ще на 30 днів."
            buttonLabel="Купити код"
          />
        </div>

        <div className="how-panel">
          <div>
            <span className="section-kicker">Як це працюватиме</span>
            <h2>Від покупки до активації</h2>
          </div>
          <ol>
            <li><span>1</span><p><strong>Оберіть Basic-код</strong><small>Код один, а дію ви виберете пізніше в застосунку.</small></p></li>
            <li><span>2</span><p><strong>Оплатіть у Telegram</strong><small>Перейдіть у нашого офіційного бота та оплатіть код за допомогою Telegram Stars. Код буде видано миттєво.</small></p></li>
            <li><span>3</span><p><strong>Введіть у Camerofon</strong><small>Відкрийте екран активації та введіть 12 символів коду.</small></p></li>
          </ol>
        </div>

        <aside className="important-note">
          <span>{icons.shield}</span>
          <div>
            <strong>Важливо перед активацією</strong>
            <p>
              Basic-код є одноразовим. Видалення застосунку, втрата коду,
              поломка або заміна телефона не відновлюють використаний код
              автоматично. Детальні умови зазначені у
              {" "}<a href="/privacy/">Політиці конфіденційності та правилах користування</a>.
            </p>
          </div>
        </aside>
      </section>

      <section className="english-block" id="en" lang="en">
        <span className="section-kicker">English</span>
        <h2>Buy a Camerofon Basic code</h2>
        <p>
          One single-use Basic code provides 30 days of access. In the app, it
          can activate a new controller with one camera slot, add another camera
          slot, or extend access for a selected camera by 30 days.
        </p>
        <div className="english-facts">
          <span>{icons.clock}<b>30 days</b></span>
          <span>{icons.key}<b>Single use</b></span>
          <span>{icons.shield}<b>No auto-renewal</b></span>
        </div>
        <a href="https://t.me/CamerofonBot" target="_blank" rel="noopener noreferrer" className="buy-button english-button">
          Buy via Telegram
        </a>
        <small>Payments are processed securely via Telegram Stars.</small>
      </section>

      <footer className="buy-footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <img src="/camerofon-icon-512.png" alt="" width="40" height="40" />
          </span>
          <span>Camerofon</span>
        </a>
        <p>© 2026 Camerofon</p>
        <nav aria-label="Юридична інформація">
          <a href="/privacy/">Політика та правила</a>
          <a href="/">Головна</a>
        </nav>
      </footer>

      <style>{`
        .buy-page { overflow: hidden; }
        .buy-header { max-width: 1184px; }
        .language-nav { align-items: center; color: #7b879d; display: flex; font-size: 13px; font-weight: 650; gap: 8px; }
        .language-nav a:hover, .language-nav a:focus-visible { color: var(--blue); }
        .buy-hero { align-items: center; display: grid; gap: 72px; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .72fr); margin: 0 auto; max-width: 1184px; min-height: 610px; padding: 54px 28px 90px; position: relative; z-index: 2; }
        .buy-hero-copy > p { color: var(--muted); font-size: 18px; line-height: 1.72; margin: 0; max-width: 670px; }
        .hero-facts { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .hero-facts span { align-items: center; background: rgba(255,255,255,.72); border: 1px solid rgba(255,255,255,.92); border-radius: 13px; box-shadow: 6px 7px 18px rgba(44,68,112,.07); color: #58667e; display: inline-flex; font-size: 12px; font-weight: 680; gap: 8px; padding: 11px 13px; }
        .hero-facts svg { color: var(--blue); }
        .code-preview { background: linear-gradient(155deg, rgba(255,255,255,.96), rgba(239,244,255,.9)); border: 1px solid white; border-radius: 30px; box-shadow: var(--shadow); min-height: 420px; overflow: hidden; padding: 34px; position: relative; }
        .code-preview::after { background: radial-gradient(circle, rgba(56,103,245,.18), transparent 68%); border-radius: 50%; content: ""; height: 280px; position: absolute; right: -125px; top: -120px; width: 280px; }
        .code-preview-top { align-items: center; display: flex; justify-content: space-between; position: relative; z-index: 1; }
        .preview-status { background: #e8f7f2; border-radius: 999px; color: #25866a; font-size: 10px; font-weight: 740; padding: 7px 10px; }
        .code-preview > small { color: #8792a6; display: block; font-size: 10px; font-weight: 760; letter-spacing: 2px; margin-top: 48px; }
        .code-preview > strong { display: block; font-size: clamp(25px, 3vw, 34px); letter-spacing: 2px; margin-top: 11px; }
        .code-details { align-items: center; background: rgba(255,255,255,.72); border: 1px solid white; border-radius: 17px; display: grid; grid-template-columns: 1fr 1px 1fr; margin: 35px 0 22px; padding: 17px; text-align: center; }
        .code-details span { display: flex; flex-direction: column; gap: 3px; }
        .code-details b { font-size: 18px; }
        .code-details small { color: #8a95a8; font-size: 9px; }
        .code-details i { background: var(--line); height: 34px; }
        
        /* Виправлені стилі для активних кнопок! */
        .buy-button { align-items: center; background: #0066ff; border: 0; border-radius: 13px; color: #ffffff; cursor: pointer; display: flex; font-family: inherit; font-size: 14px; font-weight: 700; justify-content: center; min-height: 46px; padding: 13px 18px; text-decoration: none; transition: transform 0.2s, background 0.2s; width: 100%; position: relative; z-index: 10; }
        .buy-button:hover { background: #0052cc; transform: translateY(-1px); color: #ffffff; }
        .buy-button:active { transform: scale(0.98); }
        .english-button { background: #ffffff; color: #000000; max-width: 340px; }
        .english-button:hover { background: #f0f2f6; color: #000000; }
        
        .buy-content { margin: 0 auto; max-width: 1184px; padding: 40px 28px 100px; position: relative; z-index: 2; }
        .buy-heading { margin: 0 auto 44px; text-align: center; }
        .buy-heading h2, .how-panel h2, .english-block h2 { font-size: clamp(34px, 4vw, 50px); letter-spacing: -2.1px; margin: 12px 0 15px; }
        .buy-heading p { color: var(--muted); font-size: 16px; line-height: 1.7; margin: 0 auto; max-width: 690px; }
        .purchase-grid { display: grid; gap: 18px; grid-template-columns: repeat(3, 1fr); }
        .purchase-card { background: rgba(255,255,255,.74); border: 1px solid rgba(255,255,255,.94); border-radius: 25px; box-shadow: 10px 12px 28px rgba(44,68,112,.08), -8px -8px 22px rgba(255,255,255,.9); display: flex; flex-direction: column; min-height: 450px; padding: 28px; }
        .purchase-icon { align-items: center; background: #eef4ff; border-radius: 14px; color: #0066ff; display: inline-flex; height: 48px; justify-content: center; width: 48px; }
        .purchase-icon svg { height: 24px; width: 24px; }
        .card-eyebrow { color: #0066ff; font-size: 10px; font-weight: 760; letter-spacing: .7px; margin-top: 24px; text-transform: uppercase; }
        .purchase-card h3 { font-size: 22px; letter-spacing: -.7px; line-height: 1.24; margin: 10px 0 12px; }
        .purchase-card > p { color: var(--muted); font-size: 13px; line-height: 1.65; margin: 0; min-height: 66px; }
        .price-placeholder { border-top: 1px solid var(--line, #e9ecef); display: flex; flex-direction: column; gap: 5px; margin-top: auto; padding: 22px 0 17px; }
        .price-placeholder span { color: #98a2b3; font-size: 9px; font-weight: 700; text-transform: uppercase; }
        .price-placeholder strong { font-size: 16px; }
        .purchase-card > small { color: #9aa4b5; font-size: 8px; line-height: 1.45; margin-top: 10px; text-align: center; }
        .how-panel { align-items: start; background: linear-gradient(145deg, #edf3ff, #e7eeff); border: 1px solid rgba(255,255,255,.88); border-radius: 31px; box-shadow: 16px 18px 44px rgba(45,69,119,.11), -12px -12px 30px white; display: grid; gap: 65px; grid-template-columns: .8fr 1.2fr; margin-top: 72px; padding: 48px; }
        .how-panel ol { display: grid; gap: 18px; list-style: none; margin: 0; padding: 0; }
        .how-panel li { align-items: flex-start; display: flex; gap: 14px; }
        .how-panel li > span { align-items: center; background: white; border-radius: 12px; box-shadow: 5px 6px 15px rgba(55,78,126,.09); color: #0066ff; display: flex; flex: 0 0 auto; font-size: 12px; font-weight: 760; height: 38px; justify-content: center; width: 38px; }
        .how-panel p { display: flex; flex-direction: column; gap: 5px; margin: 1px 0 0; }
        .how-panel strong { font-size: 13px; }
        .how-panel small { color: #74829a; font-size: 11px; line-height: 1.5; }
        .important-note { align-items: flex-start; background: rgba(255,255,255,.7); border: 1px solid rgba(255,255,255,.92); border-radius: 22px; display: flex; gap: 18px; margin-top: 24px; padding: 24px; }
        .important-note > span { align-items: center; background: #e8f7f2; border-radius: 12px; color: #278b6d; display: flex; flex: 0 0 auto; height: 42px; justify-content: center; width: 42px; }
        .important-note strong { font-size: 13px; }
        .important-note p { color: var(--muted); font-size: 11px; line-height: 1.65; margin: 6px 0 0; }
        .important-note a { color: #0066ff; font-weight: 680; text-decoration: underline; text-decoration-color: rgba(56,103,245,.3); text-underline-offset: 3px; }
        .english-block { background: radial-gradient(circle at 80% 20%, rgba(128,158,255,.45), transparent 34%), linear-gradient(135deg, #183466, #2e58cd 62%, #3867ef); border-radius: 34px; box-shadow: 0 30px 70px rgba(33,66,152,.24); color: white; margin: 0 auto 100px; max-width: 1128px; padding: 56px; position: relative; z-index: 2; }
        .english-block .section-kicker { color: #bed0ff; }
        .english-block > p { color: #d6dff8; font-size: 15px; line-height: 1.7; max-width: 760px; }
        .english-facts { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0; }
        .english-facts span { align-items: center; background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.17); border-radius: 12px; display: inline-flex; font-size: 11px; gap: 8px; padding: 10px 12px; }
        
        .english-block > small { color: #aebeea; display: block; font-size: 9px; margin-top: 10px; }
        .buy-footer { align-items: center; border-top: 1px solid var(--line, #e9ecef); display: grid; gap: 24px; grid-template-columns: auto 1fr auto; margin: 0 auto; max-width: 1184px; padding: 40px 28px 50px; position: relative; z-index: 2; }
        .buy-footer p { color: #8b95a7; font-size: 11px; margin: 0; }
        .buy-footer nav { display: flex; gap: 20px; }
        .buy-footer nav a { color: #68758c; font-size: 11px; font-weight: 620; }
        @media (max-width: 900px) {
          .buy-hero { gap: 40px; grid-template-columns: 1fr; }
          .code-preview { margin: 0 auto; max-width: 430px; width: 100%; }
          .purchase-grid { grid-template-columns: 1fr; }
          .purchase-card { min-height: 390px; }
          .how-panel { gap: 36px; grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .buy-header { height: 78px; padding: 0 20px; }
          .language-nav { display: none; }
          .buy-header .back-link { font-size: 12px; }
          .buy-hero { min-height: auto; padding: 50px 20px 72px; text-align: center; }
          .buy-hero h1 { font-size: clamp(42px, 13vw, 58px); letter-spacing: -3px; }
          .buy-hero-copy > p { font-size: 16px; }
          .hero-facts { justify-content: center; }
          .code-preview { padding: 27px; text-align: left; }
          .buy-content { padding: 28px 20px 76px; }
          .purchase-card { min-height: 410px; padding: 25px; text-align: left; }
          .how-panel { padding: 32px 24px; text-align: left; }
          .important-note { text-align: left; }
          .english-block { border-radius: 27px; margin: 0 20px 72px; padding: 36px 24px; text-align: left; }
          .english-facts { align-items: stretch; flex-direction: column; }
          .english-button { max-width: none; }
          .buy-footer { display: flex; flex-direction: column; margin: 0 20px; text-align: center; }
          .buy-footer nav { flex-wrap: wrap; justify-content: center; }
        }
        @media (max-width: 410px) {
          .buy-header .brand > span:last-child { display: none; }
          .test-badge { font-size: 10px; }
          .hero-facts { align-items: stretch; flex-direction: column; }
          .hero-facts span { justify-content: center; }
          .code-preview > strong { font-size: 23px; }
        }
      `}</style>
    </main>
  );
}
