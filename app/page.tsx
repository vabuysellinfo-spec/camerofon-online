"use client";

import { useEffect, useState } from "react";

type Language = "uk" | "en";

const pageMetadata = {
  uk: {
    title: "Camerofon — перетворіть старий телефон на камеру",
    description: "Camerofon перетворює запасний Android-смартфон на домашню камеру спостереження з віддаленим доступом.",
  },
  en: {
    title: "Camerofon — turn an old phone into a camera",
    description: "Camerofon turns a spare Android smartphone into a home monitoring camera with remote access.",
  },
} as const;

const icons = {
  download: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7.5 8.4 5h7.2L17 7.5h2A2 2 0 0 1 21 9.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5.5 5.5v5.7c0 4.3 2.7 7.7 6.5 9.8 3.8-2.1 6.5-5.5 6.5-9.8V5.5L12 3Z" />
      <path d="m9.2 12 1.8 1.8 3.9-4" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9.5a12.7 12.7 0 0 1 16 0M7 13a8 8 0 0 1 10 0M10.2 16.4a3 3 0 0 1 3.6 0" />
      <circle cx="12" cy="19" r=".7" className="fill" />
    </svg>
  ),
  microphone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4m-3 0h6" />
    </svg>
  ),
  switchCamera: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7.5 8.4 5h7.2L17 7.5h2A2 2 0 0 1 21 9.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2Z" />
      <path d="M9 11a4 4 0 0 1 6.2-.7l1 .7M15 15a4 4 0 0 1-6.2.7l-1-.7m8.4-6v2h-2m-6.4 6v-2h2" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.2 14.7a6 6 0 1 1 7.6 0c-.8.6-1.3 1.3-1.5 2.3H9.7c-.2-1-.7-1.7-1.5-2.3ZM9.5 20h5" />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 10v4M7 10v4m3-4v4m3-4v4" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </svg>
  ),
  qr: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm11 0h2v2h-2v-2Zm3 0h2v4h-2v-4Zm-4 4h3v2h-3v-2Zm5 1h1v1h-1v-1Z" />
    </svg>
  ),
};

export default function Home() {
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
    document.title = pageMetadata[language].title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", pageMetadata[language].description);
  }, [language]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("camerofon-language", nextLanguage);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={t("Camerofon — на головну", "Camerofon — home")}>
          <span className="brand-mark">{icons.camera}</span>
          <span>Camerofon</span>
        </a>

        <nav className="main-nav" aria-label={t("Основна навігація", "Main navigation")}>
          <a href="#features">{t("Можливості", "Features")}</a>
          <a href="#setup">{t("Як підключити", "Setup")}</a>
          <a href="#devices">{t("Сумісність", "Compatibility")}</a>
          <a href="#privacy">{t("Конфіденційність", "Privacy")}</a>
        </nav>

        <div className="header-tools">
          <div className="language-switcher" role="group" aria-label={t("Мова сторінки", "Page language")}>
            <button type="button" className={language === "uk" ? "active" : ""} onClick={() => changeLanguage("uk")} aria-pressed={language === "uk"}>UA</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <a className="header-action" href="#download">
            {icons.download}
            {t("Завантажити", "Download")}
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            {t("Стабільна версія 1.25.38", "Stable version 1.25.38")}
          </div>

          <h1>
            {t("Старий телефон —", "Your old phone —")}<br />
            <span>{t("нова домашня камера.", "a new home camera.")}</span>
          </h1>

          <p className="hero-lead">
            {t(
              "Camerofon перетворює запасний Android-смартфон на камеру спостереження, а ваш основний телефон — на зручний пульт.",
              "Camerofon turns a spare Android smartphone into a monitoring camera and your main phone into a convenient remote controller."
            )}
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#download">
              {icons.download}
              {t("Завантажити APK", "Download APK")}
            </a>
            <a className="secondary-button" href="#setup">
              <span className="play-icon">{icons.play}</span>
              {t("Як це працює", "How it works")}
            </a>
          </div>

          <div className="hero-meta" aria-label={t("Основні переваги", "Key benefits")}>
            <span>{icons.shield} {t("Без реклами", "Ad-free")}</span>
            <span>{icons.wifi} {t("Через інтернет і Wi-Fi", "Internet and Wi-Fi")}</span>
            <span>Android 6.0+</span>
          </div>
        </div>

        <div className="hero-visual" aria-label={t("Приклад екрана Camerofon", "Camerofon screen example")}>
          <div className="signal-pill">
            <span className="live-dot" />
            {t("Камера у мережі", "Camera online")}
          </div>

          <div className="phone-shell">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="app-topbar">
                <span className="mini-brand">C</span>
                <span>{t("Вітальня", "Living room")}</span>
                <span className="battery">82%</span>
              </div>

              <div className="camera-scene">
                <div className="scene-wall">
                  <div className="scene-frame" />
                  <div className="scene-window">
                    <i />
                    <i />
                  </div>
                </div>
                <div className="scene-sofa">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="scene-plant">
                  <i />
                  <i />
                  <i />
                  <b />
                </div>
                <div className="recording-time">{t("Наживо", "Live")} · 12:42</div>
              </div>

              <div className="camera-controls">
                <button type="button" aria-label={t("Мікрофон вимкнений", "Microphone off")}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v6a3 3 0 0 0 5.6 1.5M15 9V5a3 3 0 0 0-5.8-1M5 5l14 14M7 11v1a5 5 0 0 0 8.4 3.7M12 17v3m-3 0h6" /></svg>
                </button>
                <button type="button" className="control-main" aria-label={t("Відкрити відео", "Open video")}>
                  {icons.camera}
                </button>
                <button type="button" aria-label={t("Увімкнути ліхтарик", "Turn on flashlight")}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 3 6 0 1 6-2 3v8h-4v-8L8 9l1-6Zm-1 6h8" /></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="quality-card">
            <span>{t("Якість відео", "Video quality")}</span>
            <strong>HD</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip" id="features" aria-label={t("Можливості Camerofon", "Camerofon features")}>
        <article>
          <span className="feature-icon">{icons.camera}</span>
          <div><strong>{t("Відео наживо", "Live video")}</strong><small>{t("Коли потрібно", "Whenever you need it")}</small></div>
        </article>
        <article>
          <span className="feature-icon">{icons.wifi}</span>
          <div><strong>{t("Віддалений доступ", "Remote access")}</strong><small>{t("З іншого телефона", "From another phone")}</small></div>
        </article>
        <article>
          <span className="feature-icon">{icons.shield}</span>
          <div><strong>{t("Ваші записи", "Your recordings")}</strong><small>{t("Зберігаються на пульті", "Stored on the controller")}</small></div>
        </article>
        <article>
          <span className="version-number">1.25</span>
          <div><strong>{t("Стабільний реліз", "Stable release")}</strong><small>{t("Перевірено на реальних пристроях", "Tested on real devices")}</small></div>
        </article>
      </section>

      <section className="section roles-section">
        <div className="section-heading">
          <span className="section-kicker">{t("Просто і зрозуміло", "Simple and clear")}</span>
          <h2>{t("Один застосунок. Дві ролі.", "One app. Two roles.")}</h2>
          <p>{t("Встановіть Camerofon на два телефони й виберіть, який із них буде камерою, а який — пультом керування.", "Install Camerofon on two phones and choose which one will be the camera and which one will be the remote controller.")}</p>
        </div>

        <div className="roles-grid">
          <article className="role-card role-camera">
            <div className="role-copy">
              <span className="role-label">{t("Телефон-камера", "Camera phone")}</span>
              <h3>{t("Залиште там, де хочете спостерігати", "Leave it where you want to monitor")}</h3>
              <p>{t("Запасний смартфон передає відео, звук і стан акумулятора. Екран можна вимкнути після підключення.", "The spare smartphone streams video and audio and reports its battery level. You can turn off the screen after connecting.")}</p>
              <ul>
                <li><span>✓</span> {t("Основна або фронтальна камера", "Rear or front camera")}</li>
                <li><span>✓</span> {t("Дистанційний ліхтарик", "Remote flashlight")}</li>
                <li><span>✓</span> {t("Автоматичне відновлення зв’язку", "Automatic reconnection")}</li>
              </ul>
            </div>
            <div className="role-phone camera-role-phone" aria-hidden="true">
              <div className="role-phone-top" />
              <div className="lens-ring"><i /></div>
              <div className="role-status"><span /> {t("У мережі", "Online")}</div>
            </div>
          </article>

          <article className="role-card role-remote">
            <div className="role-copy">
              <span className="role-label">{t("Телефон-пульт", "Controller phone")}</span>
              <h3>{t("Дивіться й керуйте звідки зручно", "View and control from wherever you are")}</h3>
              <p>{t("Відкривайте відео лише коли потрібно, говоріть через камеру та зберігайте записи безпосередньо на пульті.", "Open video only when needed, speak through the camera and save recordings directly on the controller phone.")}</p>
              <ul>
                <li><span>✓</span> {t("Захист входу 4-значним PIN", "Access protected by a 4-digit PIN")}</li>
                <li><span>✓</span> {t("Керування якістю відео", "Video quality controls")}</li>
                <li><span>✓</span> {t("Підключення кількох камер", "Multiple camera support")}</li>
              </ul>
            </div>
            <div className="role-phone remote-role-phone" aria-hidden="true">
              <div className="role-phone-top" />
              <div className="remote-video"><span>{t("Вітальня", "Living room")}</span><i /></div>
              <div className="remote-actions"><b /> <b className="active" /> <b /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="section-heading compact-heading">
          <span className="section-kicker">{t("Усе необхідне", "Everything you need")}</span>
          <h2>{t("Контроль без зайвої складності", "Control without unnecessary complexity")}</h2>
          <p>{t("Основні функції доступні просто з екрана пульта.", "Core features are available directly from the controller screen.")}</p>
        </div>

        <div className="capabilities-grid">
          <article className="capability-card">
            <span className="capability-icon">{icons.camera}</span>
            <h3>{t("Відео наживо", "Live video")}</h3>
            <p>{t("Одностороннє відео з камери на пульт у потрібний момент.", "One-way video from the camera to the controller whenever you need it.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.microphone}</span>
            <h3>{t("Голосовий зв’язок", "Voice communication")}</h3>
            <p>{t("Мікрофон і динамік запускаються лише після вашої команди.", "The microphone and speaker activate only after your command.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>{t("Якість відео", "Video quality")}</h3>
            <p>{t("Авто, економний режим, HD або Full HD — залежно від мережі.", "Auto, Data Saver, HD or Full HD — depending on your network.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.switchCamera}</span>
            <h3>{t("Перемикання камер", "Camera switching")}</h3>
            <p>{t("Змінюйте основну та фронтальну камеру під час сеансу.", "Switch between the rear and front cameras during a session.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.bulb}</span>
            <h3>{t("Віддалений ліхтарик", "Remote flashlight")}</h3>
            <p>{t("Увімкніть підсвічування на камерному телефоні з пульта.", "Turn on the camera phone's flashlight from the controller.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.battery}</span>
            <h3>{t("Рівень заряду", "Battery level")}</h3>
            <p>{t("Бачте актуальний заряд кожного підключеного пристрою.", "View the current battery level of every connected device.")}</p>
          </article>
        </div>
      </section>

      <section className="section capabilities-section" id="release-12538" aria-labelledby="release-12538-title">
        <div className="section-heading compact-heading">
          <span className="section-kicker">Camerofon 1.25.38</span>
          <h2 id="release-12538-title">{t("Пробний доступ і нові можливості", "Trial access and new features")}</h2>
          <p>{t("У версії 1.25.38 додано гнучку активацію, зручніше підключення камер і більше налаштувань перегляду.", "Version 1.25.38 adds flexible activation, easier camera pairing and more viewing controls.")}</p>
        </div>

        <div className="capabilities-grid">
          <article className="capability-card">
            <span className="capability-icon">{icons.play}</span>
            <h3>{t("24 години безкоштовно", "24 hours free")}</h3>
            <p>{t("Одноразовий пробний період для одного пульта й однієї камери.", "A one-time trial for one controller and one camera.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.shield}</span>
            <h3>{t("Basic-код на 30 днів", "30-day Basic code")}</h3>
            <p>{t("Один Basic-код надає доступ на 30 днів після активації.", "One Basic code provides 30 days of access after activation.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>{t("Три варіанти активації", "Three activation options")}</h3>
            <p>{t("Новий пульт, додаткова камера або продовження вибраної камери.", "A new controller, an additional camera or an extension for a selected camera.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.qr}</span>
            <h3>{t("QR або ручний код", "QR or manual code")}</h3>
            <p>{t("Підключайте камери через QR-код або вручну за 6-значним кодом.", "Pair cameras with a QR code or manually using a 6-digit code.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>{t("Українська та English", "Ukrainian and English")}</h3>
            <p>{t("Інтерфейс застосунку доступний українською й англійською мовами.", "The app interface is available in Ukrainian and English.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.bulb}</span>
            <h3>{t("Світла й темна теми", "Light and dark themes")}</h3>
            <p>{t("Вибирайте зручне оформлення застосунку в налаштуваннях.", "Choose your preferred app appearance in Settings.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.camera}</span>
            <h3>{t("Масштабування до 4×", "Zoom up to 4×")}</h3>
            <p>{t("Збільшуйте відео до чотирьох разів під час перегляду.", "Zoom the video up to four times while viewing.")}</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.microphone}</span>
            <h3>{t("Безпечний початок сеансу", "Safe session start")}</h3>
            <p>{t("Кожен відеосеанс починається з вимкненими мікрофоном, звуком і динаміком.", "Every video session starts with the microphone, sound and speaker turned off.")}</p>
          </article>
        </div>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="secondary-button" href="/buy/">
            {icons.shield}
            {t("Дізнатися про Basic-код", "Learn about the Basic code")}
          </a>
        </div>
      </section>

      <section className="section setup-section" id="setup">
        <div className="setup-panel">
          <div className="section-heading setup-heading">
            <span className="section-kicker">{t("Підключення за кілька хвилин", "Connect in a few minutes")}</span>
            <h2>{t("Як почати користуватися", "How to get started")}</h2>
            <p>{t("Потрібні лише два Android-телефони та доступ до інтернету.", "All you need is two Android phones and internet access.")}</p>
          </div>

          <ol className="steps-list">
            <li>
              <span className="step-number">1</span>
              <div><strong>{t("Встановіть APK", "Install the APK")}</strong><p>{t("Встановіть Camerofon на обидва телефони.", "Install Camerofon on both phones.")}</p></div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div><strong>{t("Виберіть ролі", "Choose the roles")}</strong><p>{t("Один телефон зробіть камерою, другий — пультом.", "Set one phone as the camera and the other as the controller.")}</p></div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div><strong>{t("Покажіть QR-код", "Show the QR code")}</strong><p>{t("На пульті натисніть «Показати QR».", "On the controller, tap “Show QR”.")}</p></div>
            </li>
            <li>
              <span className="step-number">4</span>
              <div><strong>{t("Підключіть телефон-камеру", "Connect the camera phone")}</strong><p>{t("На телефоні-камері виберіть «Підключити за QR-кодом» або введіть 6-значний код.", "On the camera phone, choose “Connect with QR code” or enter the 6-digit code.")}</p></div>
            </li>
            <li>
              <span className="step-number">5</span>
              <div><strong>{t("Підтвердьте камеру", "Confirm the camera")}</strong><p>{t("На пульті натисніть «Підтвердити камеру».", "On the controller, tap “Confirm camera”.")}</p></div>
            </li>
          </ol>

          <div className="setup-visual" aria-hidden="true">
            <div className="qr-card">
              <span className="qr-icon">{icons.qr}</span>
              <b>{t("Підключення камери", "Camera connection")}</b>
              <small>{t("Наведіть камеру на QR-код", "Point the camera at the QR code")}</small>
              <div className="fake-qr">
                <i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <span className="confirmed-badge">✓ {t("Камеру підтверджено", "Camera confirmed")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section devices-section" id="devices">
        <div className="section-heading compact-heading">
          <span className="section-kicker">{t("Сумісність", "Compatibility")}</span>
          <h2>{t("Працює навіть на старих телефонах", "Works even on older phones")}</h2>
          <p>{t("Мінімальна версія — Android 6.0. Для стабільного відео потрібні справна камера, мікрофон і підключення до мережі.", "The minimum version is Android 6.0. Stable video requires a working camera, microphone and network connection.")}</p>
        </div>

        <div className="devices-panel">
          <div className="android-badge">
            <span className="android-head"><i /><i /></span>
            <div><strong>Android 6.0+</strong><small>{t("Сумісна версія системи", "Compatible system version")}</small></div>
          </div>
          <div className="tested-devices">
            <span>{t("Перевірено на реальних пристроях", "Tested on real devices")}</span>
            <div className="device-chips">
              <b>Samsung</b>
              <b>Lenovo</b>
              <b>{t("Інші виробники", "Other manufacturers")}</b>
            </div>
          </div>
          <div className="device-note">
            <strong>{t("Реальні умови використання", "Real-world use")}</strong>
            <small>{t("Відео, звук і керування перевірені", "Video, audio and controls tested")}</small>
          </div>
        </div>
      </section>

      <section className="section download-section" id="download">
        <div className="download-panel">
          <div className="download-copy">
            <span className="section-kicker light-kicker">{t("Остання стабільна версія", "Latest stable version")}</span>
            <h2>Camerofon 1.25.38</h2>
            <p>{t("Підписаний APK для Android 6.0 і новіших версій. Реліз перевірено на реальних пристроях.", "Signed APK for Android 6.0 and later. The release has been tested on physical devices.")}</p>
            <div className="release-facts">
              <span><b>04.08.2026</b><small>{t("Дата релізу", "Release date")}</small></span>
              <span><b>{t("66,4 МБ", "66.4 MB")}</b><small>{t("Розмір файла", "File size")}</small></span>
              <span><b>Android 6.0+</b><small>{t("Сумісність", "Compatibility")}</small></span>
            </div>
          </div>
          <div className="download-card">
            <span className="download-card-icon">{icons.download}</span>
            <strong>Camerofon-1.25.38-release.apk</strong>
            <p id="download-note">{t("Офіційний підписаний release APK. Після завантаження Android може попросити дозволити встановлення застосунків із браузера.", "Official signed release APK. After downloading, Android may ask you to allow app installation from your browser.")}</p>
            <a
              className="download-button"
              href="https://github.com/vabuysellinfo-spec/camerofon-online/releases/download/v1.25.38/Camerofon-1.25.38-release.apk"
              aria-describedby="download-note"
            >
              {icons.download}
              {t("Завантажити APK", "Download APK")}
            </a>
            <code className="release-hash" title={t("SHA-256 контрольна сума файла", "SHA-256 file checksum")}>
              SHA-256: 9220ad84b65bad407d6be79f9d00bc5b20fee6fa21d213b3df2bb6e9dffc62f4
            </code>
            <small>{t("Не завантажуйте Camerofon зі сторонніх сайтів.", "Do not download Camerofon from third-party websites.")}</small>
          </div>
        </div>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-intro">
          <span className="privacy-shield">{icons.shield}</span>
          <span className="section-kicker">{t("Конфіденційність", "Privacy")}</span>
          <h2>{t("Ваше відео залишається вашим", "Your video stays yours")}</h2>
          <p>{t("Camerofon створений без реклами. Записи запускаються лише з пульта та зберігаються локально на ньому.", "Camerofon is ad-free. Recordings are started only from the controller and stored locally on it.")}</p>
        </div>

        <div className="privacy-grid">
          <article>
            <strong>{t("Що використовує застосунок", "What the app uses")}</strong>
            <p>{t("Камеру, мікрофон, мережеве з’єднання та, за вашим бажанням, сповіщення. Дозволи потрібні лише для відповідних функцій.", "The camera, microphone, network connection and, if you choose, notifications. Permissions are used only for the corresponding features.")}</p>
          </article>
          <article>
            <strong>{t("Технічні дані підключення", "Technical connection data")}</strong>
            <p>{t("Для пошуку та сполучення пристроїв обробляються технічні ідентифікатори, статус пристрою та службові сигнали. Для цього можуть використовуватися сторонні сервіси.", "Technical identifiers, device status and service signals are processed to find and pair devices. Third-party services may be used for this purpose.")}</p>
          </article>
          <article>
            <strong>{t("Відео та записи", "Video and recordings")}</strong>
            <p>{t("Відео й аудіо передаються між сполученими пристроями. Для роботи цієї функції можуть використовуватися незалежні постачальники інфраструктури. Camerofon не зберігає відео або аудіозаписи.", "Video and audio are transmitted between paired devices. Independent infrastructure providers may be used to support this feature. Camerofon does not store video or audio recordings.")}</p>
          </article>
          <article>
            <strong>{t("Керування даними", "Data controls")}</strong>
            <p>{t("Ви можете від’єднати камери, видалити локальні записи або стерти дані застосунку через налаштування Android.", "You can disconnect cameras, delete local recordings or clear app data through Android settings.")}</p>
          </article>
        </div>
        <p className="policy-date">
          {t("Політику оновлено 31 липня 2026 року.", "Policy updated on 31 July 2026.")}{" "}
          <a href="/privacy/">{t("Відкрити повну політику", "Open the full policy")}</a>
        </p>
      </section>

      <section className="section faq-section">
        <div className="section-heading compact-heading">
          <span className="section-kicker">{t("Поширені запитання", "Frequently asked questions")}</span>
          <h2>{t("Коротко про головне", "The essentials at a glance")}</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>{t("Чи працює Camerofon поза домашньою мережею?", "Does Camerofon work outside the home network?")}</summary>
            <p>{t("Так. Камера й пульт можуть бути підключені до різних Wi-Fi мереж або мобільного інтернету.", "Yes. The camera and controller can use different Wi-Fi networks or mobile data.")}</p>
          </details>
          <details>
            <summary>{t("Чи можна підключити кілька камер?", "Can I connect multiple cameras?")}</summary>
            <p>{t("Так. На пульт можна додати кілька камерних телефонів і дати кожному зрозуміле ім’я.", "Yes. You can add multiple camera phones to one controller and give each one a clear name.")}</p>
          </details>
          <details>
            <summary>{t("Чи ведеться запис постійно?", "Does Camerofon record continuously?")}</summary>
            <p>{t("Ні. Запис починається лише після вашої команди на пульті та зберігається на ньому.", "No. Recording starts only after your command on the controller and is stored on that device.")}</p>
          </details>
          <details>
            <summary>{t("Чи потрібен обліковий запис?", "Do I need an account?")}</summary>
            <p>{t("Для підключення пристроїв використовується захищене сполучення камер із вашим пультом.", "Devices are connected through secure pairing between the cameras and your controller.")}</p>
          </details>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">{icons.camera}</span>
          <span>Camerofon</span>
        </a>
        <p>{t("Запасний телефон може бути корисним щодня.", "A spare phone can be useful every day.")}</p>
        <nav aria-label={t("Навігація у підвалі", "Footer navigation")}>
          <a href="#setup">{t("Інструкція", "Instructions")}</a>
          <a href="#devices">{t("Сумісність", "Compatibility")}</a>
          <a href="/privacy/">{t("Конфіденційність", "Privacy")}</a>
        </nav>
        <small>© 2026 Camerofon · camerofon.online</small>
      </footer>

      <style>{`
        .header-tools {
          align-items: center;
          display: flex;
          gap: 12px;
        }

        .language-switcher {
          align-items: center;
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 12px;
          box-shadow: 6px 6px 18px rgba(48, 72, 125, 0.08), -6px -6px 18px rgba(255, 255, 255, 0.92);
          color: #9aa5b9;
          display: inline-flex;
          gap: 2px;
          padding: 4px;
        }

        .language-switcher button {
          background: transparent;
          border: 0;
          border-radius: 8px;
          color: #78849b;
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 750;
          min-height: 30px;
          min-width: 32px;
          padding: 0 7px;
        }

        .language-switcher button.active {
          background: #ffffff;
          box-shadow: 3px 3px 9px rgba(48, 72, 125, 0.12);
          color: #2f5de0;
        }

        .language-switcher button:focus-visible {
          outline: 2px solid #4d78ff;
          outline-offset: 2px;
        }

        @media (max-width: 760px) {
          .header-tools { gap: 8px; }
          .language-switcher { padding: 3px; }
          .language-switcher button {
            min-height: 28px;
            min-width: 29px;
            padding: 0 5px;
          }
        }

        @media (max-width: 430px) {
          .site-header { gap: 8px; }
          .header-tools { gap: 6px; }
          .language-switcher span { display: none; }
          .language-switcher button {
            min-width: 27px;
            padding: 0 4px;
          }
        }
      `}</style>
    </main>
  );
}
