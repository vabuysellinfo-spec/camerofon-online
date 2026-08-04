"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "uk" | "en";

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 7.5 8.4 5h7.2L17 7.5h2A2 2 0 0 1 21 9.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2Z" />
    <circle cx="12" cy="13" r="3.3" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
  </svg>
);

export default function NotFound() {
  const [language, setLanguage] = useState<Language>("uk");
  const t = (uk: string, en: string) => (language === "uk" ? uk : en);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("camerofon-language");
    if (savedLanguage === "uk" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t(
      "404 — сторінку не знайдено | Camerofon",
      "404 — page not found | Camerofon",
    );
  }, [language]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("camerofon-language", nextLanguage);
  };

  return (
    <main className="not-found-page">
      <div className="not-found-ambient not-found-ambient-one" aria-hidden="true" />
      <div className="not-found-ambient not-found-ambient-two" aria-hidden="true" />

      <header className="not-found-header">
        <Link className="brand" href="/" aria-label={t("Camerofon — на головну", "Camerofon — home")}>
          <span className="brand-mark"><CameraIcon /></span>
          <span>Camerofon</span>
        </Link>
        <div className="not-found-header-tools">
          <div className="not-found-language-switcher" role="group" aria-label={t("Мова сторінки", "Page language")}>
            <button type="button" className={language === "uk" ? "active" : ""} onClick={() => changeLanguage("uk")} aria-pressed={language === "uk"}>UA</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <span className="not-found-badge">{t("Помилка 404", "Error 404")}</span>
        </div>
      </header>

      <section className="not-found-content">
        <div className="not-found-copy">
          <div className="not-found-code" aria-label={t("Помилка 404", "Error 404")}>
            <span>4</span>
            <span className="not-found-code-lens" aria-hidden="true">
              <i />
            </span>
            <span>4</span>
          </div>

          <p className="not-found-kicker">
            <span className="not-found-status-dot" />
            {t("Сигнал є · сторінки немає", "Signal found · page missing")}
          </p>
          <h1 className="not-found-title">
            {t("Упс! Камера загубила цю сторінку.", "Oops! The camera lost this page.")}
          </h1>
          <p className="not-found-lead">
            {t(
              "Ми попросили об’єктив уважно озирнутися, але тут порожньо. Можливо, адреса змінилася або сторінка пішла перевіряти іншу кімнату.",
              "We asked the lens to look around carefully, but there is nothing here. The address may have changed, or the page went to check another room.",
            )}
          </p>

          <div className="not-found-actions">
            <Link className="primary-button" href="/">
              <HomeIcon />
              {t("На головну", "Back home")}
            </Link>
            <Link className="secondary-button" href="/#download">
              <DownloadIcon />
              {t("Завантажити застосунок", "Download the app")}
            </Link>
          </div>
        </div>

        <div className="lost-camera-scene" aria-hidden="true">
          <div className="camera-speech">{t("Сторінка? Яка сторінка?", "Page? What page?")}</div>
          <div className="wifi-search">
            <i />
            <i />
            <i />
          </div>
          <div className="search-cone" />
          <div className="camera-mascot">
            <span className="camera-antenna"><i /></span>
            <div className="camera-mascot-body">
              <span className="camera-flash" />
              <span className="camera-lens">
                <i />
              </span>
              <span className="camera-smile" />
            </div>
            <span className="camera-foot camera-foot-left" />
            <span className="camera-foot camera-foot-right" />
          </div>
          <div className="question-mark question-mark-one">?</div>
          <div className="question-mark question-mark-two">?</div>
          <div className="camera-shadow" />
        </div>
      </section>

      <footer className="not-found-footer">
        <span>Camerofon</span>
        <span>{t("Старий телефон — нова домашня камера", "Your old phone — a new home camera")}</span>
      </footer>
    </main>
  );
}
