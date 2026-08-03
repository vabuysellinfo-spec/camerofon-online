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
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Camerofon — на головну">
          <span className="brand-mark">{icons.camera}</span>
          <span>Camerofon</span>
        </a>

        <nav className="main-nav" aria-label="Основна навігація">
          <a href="#features">Можливості</a>
          <a href="#setup">Як підключити</a>
          <a href="#devices">Сумісність</a>
          <a href="#privacy">Конфіденційність</a>
        </nav>

        <a className="header-action" href="#download">
          {icons.download}
          Завантажити
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Стабільна версія 1.25.24
          </div>

          <h1>
            Старий телефон —<br />
            <span>нова домашня камера.</span>
          </h1>

          <p className="hero-lead">
            Camerofon перетворює запасний Android-смартфон на камеру
            спостереження, а ваш основний телефон — на зручний пульт.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#download">
              {icons.download}
              Завантажити APK
            </a>
            <a className="secondary-button" href="#setup">
              <span className="play-icon">{icons.play}</span>
              Як це працює
            </a>
          </div>

          <div className="hero-meta" aria-label="Основні переваги">
            <span>{icons.shield} Без реклами</span>
            <span>{icons.wifi} Через інтернет і Wi-Fi</span>
            <span>Android 6.0+</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Приклад екрана Camerofon">
          <div className="signal-pill">
            <span className="live-dot" />
            Камера у мережі
          </div>

          <div className="phone-shell">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="app-topbar">
                <span className="mini-brand">C</span>
                <span>Вітальня</span>
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
                <div className="recording-time">Наживо · 12:42</div>
              </div>

              <div className="camera-controls">
                <button type="button" aria-label="Мікрофон вимкнений">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v6a3 3 0 0 0 5.6 1.5M15 9V5a3 3 0 0 0-5.8-1M5 5l14 14M7 11v1a5 5 0 0 0 8.4 3.7M12 17v3m-3 0h6" /></svg>
                </button>
                <button type="button" className="control-main" aria-label="Відкрити відео">
                  {icons.camera}
                </button>
                <button type="button" aria-label="Увімкнути ліхтарик">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 3 6 0 1 6-2 3v8h-4v-8L8 9l1-6Zm-1 6h8" /></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="quality-card">
            <span>Якість відео</span>
            <strong>HD</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip" id="features" aria-label="Можливості Camerofon">
        <article>
          <span className="feature-icon">{icons.camera}</span>
          <div><strong>Відео наживо</strong><small>Коли потрібно</small></div>
        </article>
        <article>
          <span className="feature-icon">{icons.wifi}</span>
          <div><strong>Віддалений доступ</strong><small>З іншого телефона</small></div>
        </article>
        <article>
          <span className="feature-icon">{icons.shield}</span>
          <div><strong>Ваші записи</strong><small>Зберігаються на пульті</small></div>
        </article>
        <article>
          <span className="version-number">1.25</span>
          <div><strong>Стабільний реліз</strong><small>Перевірено на 4 пристроях</small></div>
        </article>
      </section>

      <section className="section roles-section">
        <div className="section-heading">
          <span className="section-kicker">Просто і зрозуміло</span>
          <h2>Один застосунок. Дві ролі.</h2>
          <p>
            Встановіть Camerofon на два телефони й виберіть, який із них буде
            камерою, а який — пультом керування.
          </p>
        </div>

        <div className="roles-grid">
          <article className="role-card role-camera">
            <div className="role-copy">
              <span className="role-label">Телефон-камера</span>
              <h3>Залиште там, де хочете спостерігати</h3>
              <p>
                Запасний смартфон передає відео, звук і стан акумулятора.
                Екран можна вимкнути після підключення.
              </p>
              <ul>
                <li><span>✓</span> Основна або фронтальна камера</li>
                <li><span>✓</span> Дистанційний ліхтарик</li>
                <li><span>✓</span> Автоматичне відновлення зв’язку</li>
              </ul>
            </div>
            <div className="role-phone camera-role-phone" aria-hidden="true">
              <div className="role-phone-top" />
              <div className="lens-ring"><i /></div>
              <div className="role-status"><span /> У мережі</div>
            </div>
          </article>

          <article className="role-card role-remote">
            <div className="role-copy">
              <span className="role-label">Телефон-пульт</span>
              <h3>Дивіться й керуйте звідки зручно</h3>
              <p>
                Відкривайте відео лише коли потрібно, говоріть через камеру та
                зберігайте записи безпосередньо на пульті.
              </p>
              <ul>
                <li><span>✓</span> Захист входу 4-значним PIN</li>
                <li><span>✓</span> Керування якістю відео</li>
                <li><span>✓</span> Підключення кількох камер</li>
              </ul>
            </div>
            <div className="role-phone remote-role-phone" aria-hidden="true">
              <div className="role-phone-top" />
              <div className="remote-video"><span>Вітальня</span><i /></div>
              <div className="remote-actions"><b /> <b className="active" /> <b /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="section-heading compact-heading">
          <span className="section-kicker">Усе необхідне</span>
          <h2>Контроль без зайвої складності</h2>
          <p>Основні функції доступні просто з екрана пульта.</p>
        </div>

        <div className="capabilities-grid">
          <article className="capability-card">
            <span className="capability-icon">{icons.camera}</span>
            <h3>Відео наживо</h3>
            <p>Одностороннє відео з камери на пульт у потрібний момент.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.microphone}</span>
            <h3>Голосовий зв’язок</h3>
            <p>Мікрофон і динамік запускаються лише після вашої команди.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>Якість відео</h3>
            <p>Авто, економний режим, HD або Full HD — залежно від мережі.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.switchCamera}</span>
            <h3>Перемикання камер</h3>
            <p>Змінюйте основну та фронтальну камеру під час сеансу.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.bulb}</span>
            <h3>Віддалений ліхтарик</h3>
            <p>Увімкніть підсвічування на камерному телефоні з пульта.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.battery}</span>
            <h3>Рівень заряду</h3>
            <p>Бачте актуальний заряд кожного підключеного пристрою.</p>
          </article>
        </div>
      </section>

      <section className="section capabilities-section" id="release-12538" aria-labelledby="release-12538-title">
        <div className="section-heading compact-heading">
          <span className="section-kicker">Camerofon 1.25.38</span>
          <h2 id="release-12538-title">Пробний доступ і нові можливості</h2>
          <p>
            У версії 1.25.38 додано гнучку активацію, зручніше підключення
            камер і більше налаштувань перегляду.
          </p>
        </div>

        <div className="capabilities-grid">
          <article className="capability-card">
            <span className="capability-icon">{icons.play}</span>
            <h3>24 години безкоштовно</h3>
            <p>Одноразовий пробний період для одного пульта й однієї камери.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.shield}</span>
            <h3>Basic-код на 30 днів</h3>
            <p>Один Basic-код надає доступ на 30 днів після активації.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>Три варіанти активації</h3>
            <p>Новий пульт, додаткова камера або продовження вибраної камери.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.qr}</span>
            <h3>QR або ручний код</h3>
            <p>Підключайте камери через QR-код або вручну за 6-значним кодом.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.layers}</span>
            <h3>Українська та English</h3>
            <p>Інтерфейс застосунку доступний українською й англійською мовами.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.bulb}</span>
            <h3>Світла й темна теми</h3>
            <p>Вибирайте зручне оформлення застосунку в налаштуваннях.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.camera}</span>
            <h3>Масштабування до 4×</h3>
            <p>Збільшуйте відео до чотирьох разів під час перегляду.</p>
          </article>
          <article className="capability-card">
            <span className="capability-icon">{icons.microphone}</span>
            <h3>Безпечний початок сеансу</h3>
            <p>Кожен відеосеанс починається з вимкненими мікрофоном, звуком і динаміком.</p>
          </article>
        </div>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="secondary-button" href="/buy/">
            {icons.shield}
            Дізнатися про Basic-код
          </a>
        </div>
      </section>

      <section className="section setup-section" id="setup">
        <div className="setup-panel">
          <div className="section-heading setup-heading">
            <span className="section-kicker">Підключення за кілька хвилин</span>
            <h2>Як почати користуватися</h2>
            <p>Потрібні лише два Android-телефони та доступ до інтернету.</p>
          </div>

          <ol className="steps-list">
            <li>
              <span className="step-number">1</span>
              <div><strong>Встановіть APK</strong><p>Встановіть Camerofon на обидва телефони.</p></div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div><strong>Виберіть ролі</strong><p>Один телефон зробіть камерою, другий — пультом.</p></div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div><strong>Відскануйте QR-код</strong><p>На пульті відкрийте додавання камери та відскануйте код.</p></div>
            </li>
            <li>
              <span className="step-number">4</span>
              <div><strong>Підтвердьте камеру</strong><p>Підтвердьте пристрій — і він з’явиться у вашому списку.</p></div>
            </li>
          </ol>

          <div className="setup-visual" aria-hidden="true">
            <div className="qr-card">
              <span className="qr-icon">{icons.qr}</span>
              <b>Підключення камери</b>
              <small>Наведіть камеру на QR-код</small>
              <div className="fake-qr">
                <i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <span className="confirmed-badge">✓ Камеру підтверджено</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section devices-section" id="devices">
        <div className="section-heading compact-heading">
          <span className="section-kicker">Сумісність</span>
          <h2>Працює навіть на старих телефонах</h2>
          <p>
            Мінімальна версія — Android 6.0. Для стабільного відео потрібні
            справна камера, мікрофон і підключення до мережі.
          </p>
        </div>

        <div className="devices-panel">
          <div className="android-badge">
            <span className="android-head"><i /><i /></span>
            <div><strong>Android 6.0+</strong><small>Сумісна версія системи</small></div>
          </div>
          <div className="tested-devices">
            <span>Перевірено на пристроях</span>
            <div className="device-chips">
              <b>Samsung A21s</b>
              <b>Samsung A11</b>
              <b>Samsung A12</b>
              <b>Lenovo YT3-850M</b>
            </div>
          </div>
          <div className="device-note">
            <strong>Lenovo · Android 6.0.1</strong>
            <small>Відео, звук і керування перевірені</small>
          </div>
        </div>
      </section>

      <section className="section download-section" id="download">
        <div className="download-panel">
          <div className="download-copy">
            <span className="section-kicker light-kicker">Остання стабільна версія</span>
            <h2>Camerofon 1.25.24</h2>
            <p>
              Підписаний APK для Android 6.0 і новіших версій. Реліз перевірено
              на чотирьох реальних пристроях.
            </p>
            <div className="release-facts">
              <span><b>31.07.2026</b><small>Дата релізу</small></span>
              <span><b>APK</b><small>Формат файла</small></span>
              <span><b>SHA-256</b><small>Контрольна сума</small></span>
            </div>
          </div>
          <div className="download-card">
            <span className="download-card-icon">{icons.download}</span>
            <strong>Camerofon-1.25.24.apk</strong>
            <p id="download-note">
              Файл підготовлено. Завантаження відкриється після публікації
              релізу в офіційному сховищі.
            </p>
            <span className="pending-button" aria-disabled="true">APK готується до публікації</span>
            <small>Не завантажуйте Camerofon зі сторонніх сайтів.</small>
          </div>
        </div>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-intro">
          <span className="privacy-shield">{icons.shield}</span>
          <span className="section-kicker">Конфіденційність</span>
          <h2>Ваше відео залишається вашим</h2>
          <p>
            Camerofon створений без реклами. Записи запускаються лише з пульта
            та зберігаються локально на ньому.
          </p>
        </div>

        <div className="privacy-grid">
          <article>
            <strong>Що використовує застосунок</strong>
            <p>
              Камеру, мікрофон, мережеве з’єднання та, за вашим бажанням,
              сповіщення. Дозволи потрібні лише для відповідних функцій.
            </p>
          </article>
          <article>
            <strong>Технічні дані підключення</strong>
            <p>
              Для пошуку пристроїв і встановлення WebRTC-зв’язку обробляються
              технічні ідентифікатори, статус пристрою та службові сигнали.
            </p>
          </article>
          <article>
            <strong>Відео та записи</strong>
            <p>
              Відеопотік передається через захищене WebRTC-з’єднання. Відео й
              аудіозаписи не зберігаються у Firestore.
            </p>
          </article>
          <article>
            <strong>Керування даними</strong>
            <p>
              Ви можете від’єднати камери, видалити локальні записи або стерти
              дані застосунку через налаштування Android.
            </p>
          </article>
        </div>
        <p className="policy-date">
          Політику оновлено 31 липня 2026 року. <a href="/privacy/">Відкрити повну політику</a>
        </p>
      </section>

      <section className="section faq-section">
        <div className="section-heading compact-heading">
          <span className="section-kicker">Поширені запитання</span>
          <h2>Коротко про головне</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Чи працює Camerofon поза домашньою мережею?</summary>
            <p>Так. Камера й пульт можуть бути підключені до різних Wi-Fi мереж або мобільного інтернету.</p>
          </details>
          <details>
            <summary>Чи можна підключити кілька камер?</summary>
            <p>Так. На пульт можна додати кілька камерних телефонів і дати кожному зрозуміле ім’я.</p>
          </details>
          <details>
            <summary>Чи ведеться запис постійно?</summary>
            <p>Ні. Запис починається лише після вашої команди на пульті та зберігається на ньому.</p>
          </details>
          <details>
            <summary>Чи потрібен обліковий запис?</summary>
            <p>Для підключення пристроїв використовується захищене сполучення камер із вашим пультом.</p>
          </details>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">{icons.camera}</span>
          <span>Camerofon</span>
        </a>
        <p>Запасний телефон може бути корисним щодня.</p>
        <nav aria-label="Навігація у підвалі">
          <a href="#setup">Інструкція</a>
          <a href="#devices">Сумісність</a>
          <a href="/privacy/">Конфіденційність</a>
        </nav>
        <small>© 2026 Camerofon · camerofon.online</small>
      </footer>
    </main>
  );
}
