import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності та правила користування — Camerofon",
  description:
    "Політика конфіденційності, правила законного використання, умови активації та обмеження відповідальності Camerofon.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Camerofon — на головну">
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span>Camerofon</span>
        </a>
        <a className="back-link" href="/">
          ← На головну
        </a>
      </header>

      <article className="privacy-document">
        <span className="section-kicker">Camerofon</span>
        <h1>Політика конфіденційності та правила користування</h1>
        <p className="privacy-updated">Останнє оновлення: 2 серпня 2026 року</p>

        <p>
          <a className="back-link" href="#uk">
            Українська
          </a>
          {" · "}
          <a className="back-link" href="#en">
            English
          </a>
        </p>

        <section id="uk" lang="uk">
          <p>
            Цей єдиний документ одночасно є Політикою конфіденційності та
            Правилами користування мобільним застосунком і сервісом Camerofon
            (далі — «Camerofon», «застосунок», «сервіс»). Встановлюючи,
            активуючи або використовуючи Camerofon, ви підтверджуєте, що
            прочитали цей документ і погоджуєтеся з ним. Якщо ви не згодні — не
            встановлюйте, не активуйте та не використовуйте застосунок.
          </p>

          <p>
            <strong>Важливо:</strong> Camerofon можна встановлювати лише на
            власний пристрій або за попередньою, чіткою та поінформованою згодою
            його власника чи законного користувача. Приховане або незаконне
            спостереження та прослуховування заборонені.
          </p>

          <h2>1. Призначення Camerofon</h2>
          <p>
            Camerofon перетворює один Android-пристрій на телефон-камеру, а
            інший — на телефон-пульт. Сервіс призначений для законного й
            відкритого спостереження за власним майном, приміщеннями, домашніми
            тваринами або для інших дозволених законом цілей.
          </p>
          <p>
            Camerofon не є професійною охоронною, пожежною, медичною чи
            аварійною системою, не викликає екстрені служби та не повинен бути
            єдиним засобом захисту людей або майна.
          </p>

          <h2>2. Згода власника пристрою та людей у кадрі</h2>
          <ul>
            <li>
              Заборонено встановлювати або налаштовувати Camerofon на чужому
              смартфоні без попередньої чіткої згоди його власника чи законного
              користувача.
            </li>
            <li>
              Користувач самостійно відповідає за отримання всіх необхідних згод
              від людей, чиє зображення, голос або приватна діяльність можуть
              потрапити у відеопотік чи запис.
            </li>
            <li>
              Якщо закон вимагає попередження, таблички, письмової згоди або
              іншого повідомлення про відео- чи аудіоспостереження, користувач
              зобов’язаний виконати ці вимоги до початку роботи камери.
            </li>
            <li>
              Для пристроїв неповнолітніх або використання у місцях, де можуть
              перебувати діти, потрібні законні повноваження та належна згода
              батьків, опікунів або інших відповідальних осіб.
            </li>
          </ul>

          <h2>3. Заборонене використання</h2>
          <p>Забороняється використовувати Camerofon для:</p>
          <ul>
            <li>
              прихованого спостереження або прослуховування без законної
              підстави;
            </li>
            <li>
              переслідування, залякування, шантажу, домагання чи домашнього
              насильства;
            </li>
            <li>
              спостереження в місцях із підвищеним очікуванням приватності;
            </li>
            <li>
              несанкціонованого контролю працівників, партнерів, дітей або інших
              осіб;
            </li>
            <li>
              отримання доступу до чужого пристрою, відео, аудіо або облікових
              даних;
            </li>
            <li>
              обходу системних дозволів, індикаторів чи повідомлень Android;
            </li>
            <li>
              будь-якої діяльності, що порушує закон, приватність або права
              інших осіб.
            </li>
          </ul>
          <p>
            Користувач несе повну відповідальність за місце встановлення
            телефона-камери, режим роботи, законність запису, зберігання,
            передавання, публікацію та інше використання отриманих матеріалів.
          </p>

          <h2>4. Дозволи пристрою</h2>
          <p>
            Camerofon може запитувати доступ до камери, мікрофона, мережевого
            з’єднання, локального сховища та сповіщень. Дозволи використовуються
            лише для відповідних функцій застосунку. Ви можете відкликати їх у
            налаштуваннях Android, але після цього окремі функції або весь
            сервіс можуть не працювати.
          </p>

          <h2>5. Які дані можуть оброблятися</h2>
          <p>Для роботи Camerofon можуть оброблятися:</p>
          <ul>
            <li>
              технічні ідентифікатори застосунку та пристрою, роль пристрою,
              дані сполучення камер із пультом і маркери відкликання доступу;
            </li>
            <li>
              токени push-сповіщень, стан мережі, статус підключення, рівень
              заряду, версія застосунку та службові сигнали виклику;
            </li>
            <li>
              IP-адреса, тип пристрою, версія Android, діагностичні та безпекові
              дані, які можуть автоматично обробляти постачальники
              інфраструктури;
            </li>
            <li>
              відео й аудіо під час активного сеансу, необхідні для передавання
              між сполученими пристроями.
            </li>
          </ul>
          <p>
            Camerofon не використовує рекламні ідентифікатори, не продає
            персональні дані та не використовує відео чи аудіо для реклами або
            побудови рекламних профілів.
          </p>

          <h2>6. Для чого використовуються дані</h2>
          <p>Дані обробляються, щоб:</p>
          <ul>
            <li>підключати й розпізнавати сполучені пристрої;</li>
            <li>встановлювати та підтримувати відео- й аудіоз’єднання;</li>
            <li>надсилати службові push-сигнали та показувати стан камери;</li>
            <li>
              запобігати повторному використанню кодів і несанкціонованому
              доступу;
            </li>
            <li>забезпечувати безпеку, стабільність і діагностику помилок;</li>
            <li>
              виконувати вимоги законодавства та захищати права користувачів і
              сервісу.
            </li>
          </ul>

          <h2>7. Відео, аудіо та локальні записи</h2>
          <p>
            Відео й аудіо передаються між сполученими пристроями через WebRTC.
            Коли пряме з’єднання неможливе, мережевий трафік може тимчасово
            маршрутизуватися через технічні сервери передавання. Це не означає
            створення серверного архіву записів.
          </p>
          <p>
            Camerofon не зберігає відео або аудіозаписи у Firestore. Запис
            запускається користувачем із телефона-пульта й зберігається локально
            на цьому телефоні. Користувач відповідає за захист, резервне
            копіювання, видалення та законне використання локальних записів.
          </p>

          <h2>8. Хмарна інфраструктура та треті сторони</h2>
          <p>
            Для сполучення пристроїв, сигналізації, стану та push-сповіщень
            Camerofon може використовувати Firebase, Firestore, Firebase Cloud
            Messaging, WebRTC, STUN/TURN та іншу необхідну мережеву
            інфраструктуру. Такі постачальники можуть обробляти технічні дані у
            своїх центрах обробки даних відповідно до власних правил і вимог
            законодавства.
          </p>
          <p>
            Camerofon не відповідає за незалежні сервіси третіх сторін, але
            прагне передавати їм лише дані, необхідні для роботи відповідної
            функції.
          </p>

          <h2>9. Зберігання та видалення даних</h2>
          <p>
            Технічні дані зберігаються лише стільки, скільки потрібно для
            активного сполучення, роботи сервісу, безпеки та виконання юридичних
            вимог. Одноразовий QR-код або код сполучення має обмежений строк дії
            та після використання не повинен підключати іншу камеру. Після
            видалення камери із пульта її активне сполучення та пов’язані
            налаштування видаляються; мінімальний технічний маркер відкликання
            може тимчасово зберігатися для безпеки й недопущення повторного
            доступу.
          </p>
          <p>Користувач може:</p>
          <ul>
            <li>від’єднати або видалити камеру з пульта;</li>
            <li>видалити локальні записи;</li>
            <li>
              очистити дані застосунку або видалити Camerofon через Android;
            </li>
            <li>
              звернутися через офіційний канал підтримки щодо доступних запитів
              стосовно даних.
            </li>
          </ul>
          <p>
            Видалення застосунку з одного телефона не гарантує автоматичного
            видалення локальних копій записів, які користувач перемістив,
            скопіював або зберіг в іншому місці.
          </p>

          <h2>10. Безпека та обов’язки користувача</h2>
          <p>
            Camerofon використовує доступні механізми Android, захищене
            сполучення пристроїв і транспортне шифрування. Водночас жоден
            застосунок або спосіб передавання даних не може гарантувати
            абсолютну безпеку.
          </p>
          <ul>
            <li>
              Не передавайте іншим людям PIN, QR-коди, коди активації чи доступ
              до пульта.
            </li>
            <li>
              Використовуйте блокування екрана та актуальні оновлення Android.
            </li>
            <li>Не встановлюйте змінені APK із неофіційних джерел.</li>
            <li>
              Негайно від’єднайте втрачений або скомпрометований пристрій, якщо
              це технічно можливо.
            </li>
          </ul>

          <h2>11. Пристрій, живлення та умови експлуатації</h2>
          <p>
            Користувач самостійно оцінює придатність смартфона, акумулятора,
            зарядного пристрою, кабелю, кріплення, температури та місця
            встановлення. Тривала робота камери може збільшувати нагрівання,
            споживання енергії та зношування акумулятора. Не використовуйте
            пошкоджені пристрої чи зарядні аксесуари та не розміщуйте телефон у
            небезпечних умовах.
          </p>

          <h2>12. Активаційні коди, платний доступ і повернення коштів</h2>
          <p>
            Якщо певні функції Camerofon надаються за плату, строк, кількість
            пристроїв, спосіб активації та інші суттєві умови повідомляються до
            придбання. Активаційні коди можуть бути одноразовими, персональними
            та прив’язувати право доступу до визначеного пристрою або
            сполучення. Коди не можна перепродавати, публікувати чи передавати
            без дозволу Camerofon.
          </p>
          <p>
            Видалення застосунку, очищення даних, скидання налаштувань,
            відкликання дозволів, втрата коду, втрата доступу, поломка,
            крадіжка, втрата або заміна смартфона з причин, що не залежать від
            Camerofon, не є самостійною підставою для повернення коштів або
            безкоштовної видачі нового коду.
          </p>
          <p>
            Платежі за активовані коди та вже використані періоди доступу не
            повертаються, крім випадків, коли повернення прямо вимагається
            застосовним законодавством, обов’язковими правами споживача або
            правилами платіжного сервісу. Ніщо в цьому документі не обмежує
            права, від яких споживач не може відмовитися за законом.
          </p>

          <h2>13. Доступність сервісу та відсутність гарантій</h2>
          <p>
            Camerofon надається за принципом «як є» та «за наявності». У межах,
            дозволених законом, не гарантуються безперервна чи безпомилкова
            робота, сумісність з усіма моделями смартфонів, постійна якість
            відео, збереження з’єднання або відсутність затримок. Робота може
            залежати від Android, виробника пристрою, стану акумулятора,
            дозволів, локальної мережі, мобільного оператора, інтернету,
            Firebase та інших сторонніх сервісів.
          </p>

          <h2>14. Обмеження відповідальності</h2>
          <p>
            У максимальних межах, дозволених законом, Camerofon і його власник,
            розробники та постачальники не несуть відповідальності за:
          </p>
          <ul>
            <li>
              незаконне, приховане, несанкціоноване або неналежне використання
              застосунку;
            </li>
            <li>
              штрафи, претензії чи збитки через відсутність необхідної згоди або
              порушення приватності;
            </li>
            <li>
              пропущені події, переривання відео, затримки, помилки мережі чи
              недоступність сторонніх сервісів;
            </li>
            <li>
              втрату, пошкодження, крадіжку, перегрівання, розрядження чи
              зношування смартфона або аксесуарів;
            </li>
            <li>
              втрату записів, налаштувань, доступу, PIN-коду, QR-коду чи коду
              активації;
            </li>
            <li>
              несанкціонований доступ, спричинений діями користувача, слабким
              захистом пристрою або передаванням кодів третім особам;
            </li>
            <li>
              непрямі, випадкові, спеціальні або наслідкові збитки, втрату
              прибутку, даних чи очікуваної вигоди.
            </li>
          </ul>
          <p>
            Якщо відповідальність Camerofon не може бути повністю виключена, її
            сукупний розмір обмежується сумою, фактично сплаченою користувачем
            за спірний код або період доступу, якщо інший мінімум не
            встановлений обов’язковою нормою закону. Це обмеження не діє у
            випадках, коли закон прямо забороняє його застосування.
          </p>

          <h2>15. Блокування доступу</h2>
          <p>
            Camerofon може відхилити, призупинити або заблокувати активаційний
            код чи доступ до сервісу у разі шахрайства, спроб обходу захисту,
            несанкціонованого розповсюдження коду, загрози безпеці, порушення
            цього документа або обґрунтованої підозри на незаконне використання.
            Це не обмежує обов’язкові права добросовісного споживача.
          </p>

          <h2>16. Зміни документа</h2>
          <p>
            Актуальна версія завжди публікується за адресою
            camerofon.online/privacy/ із датою оновлення. Зміни застосовуються з
            дати публікації або з іншої прямо зазначеної дати. Якщо зміни
            істотно впливають на права користувача, про них може бути
            повідомлено в застосунку або на сайті. Подальше використання сервісу
            означає прийняття оновлених правил у межах, дозволених законом.
          </p>

          <h2>17. Звернення щодо даних і правил</h2>
          <p>
            Запити щодо персональних даних, видалення доступних серверних даних,
            активації або цих правил можна надіслати через офіційний канал
            підтримки Camerofon, повідомлений на сайті або під час придбання
            коду. Не надсилайте PIN-коди, активні QR-коди, приватні записи чи
            інші секретні дані у відкритих повідомленнях.
          </p>
        </section>

        <hr />

        <section id="en" lang="en">
          <h2>Privacy Policy and Terms of Use</h2>
          <p className="privacy-updated">Last updated: 2 August 2026</p>
          <p>
            This single document is both the Privacy Policy and the Terms of Use
            for the Camerofon mobile application and service. By installing,
            activating or using Camerofon, you confirm that you have read and
            accepted it. If you disagree, do not install, activate or use the
            application.
          </p>
          <p>
            <strong>Important:</strong> Camerofon may be installed only on your
            own device or with the prior, explicit and informed consent of its
            owner or lawful user. Covert or unlawful surveillance and
            eavesdropping are prohibited.
          </p>

          <h2>1. Intended purpose</h2>
          <p>
            Camerofon turns one Android device into a camera phone and another
            into a controller. It is intended for lawful and transparent
            monitoring of your own property, premises, pets or other purposes
            permitted by law. It is not a professional security, fire, medical
            or emergency system and must not be the only means used to protect
            people or property.
          </p>

          <h2>2. Consent</h2>
          <ul>
            <li>
              Do not install or configure Camerofon on another person&apos;s
              device without the owner&apos;s or lawful user&apos;s prior
              explicit consent.
            </li>
            <li>
              You are responsible for obtaining every consent required from
              people whose image, voice or private activities may be streamed or
              recorded.
            </li>
            <li>
              You must provide notices, signs, written consent or other
              disclosures whenever applicable law requires them.
            </li>
            <li>
              Use involving a minor&apos;s device or areas where children may be
              present requires lawful authority and appropriate parental or
              guardian consent.
            </li>
          </ul>

          <h2>3. Prohibited use</h2>
          <p>
            You may not use Camerofon for covert surveillance or eavesdropping
            without a lawful basis; stalking, intimidation, blackmail,
            harassment or domestic abuse; monitoring in places with a high
            expectation of privacy; unauthorised monitoring of employees,
            partners, children or other people; accessing another person&apos;s
            device, media or credentials; bypassing Android permissions,
            indicators or notifications; or any activity that violates law,
            privacy or third-party rights.
          </p>
          <p>
            You are solely responsible for camera placement, operating mode, the
            lawfulness of recording, and the storage, disclosure, publication
            and other use of captured material.
          </p>

          <h2>4. Device permissions</h2>
          <p>
            Camerofon may request access to the camera, microphone, network,
            local storage and notifications. Permissions are used only for the
            corresponding application features. You may revoke them in Android
            settings, but some or all features may then stop working.
          </p>

          <h2>5. Data processed</h2>
          <p>Camerofon may process:</p>
          <ul>
            <li>
              technical application and device identifiers, device role, pairing
              data and access-revocation markers;
            </li>
            <li>
              push tokens, network and connection status, battery level, app
              version and call signalling;
            </li>
            <li>
              IP address, device type, Android version, diagnostics and security
              data automatically processed by infrastructure providers;
            </li>
            <li>
              video and audio required to transmit an active session between
              paired devices.
            </li>
          </ul>
          <p>
            Camerofon does not use advertising identifiers, sell personal data,
            or use video or audio for advertising profiles.
          </p>

          <h2>6. Purposes of processing</h2>
          <p>
            Data is used to pair and identify devices, establish and maintain
            video and audio sessions, deliver service push signals, display
            camera status, prevent code reuse and unauthorised access, maintain
            security and reliability, diagnose errors, comply with law and
            protect users and the service.
          </p>

          <h2>7. Video, audio and recordings</h2>
          <p>
            Video and audio are transmitted between paired devices using WebRTC.
            If a direct connection is unavailable, traffic may be temporarily
            routed through relay infrastructure. This does not create a
            server-side recording archive.
          </p>
          <p>
            Camerofon does not store video or audio recordings in Firestore. A
            recording is started by the user on the controller phone and is
            stored locally on that phone. The user is responsible for securing,
            backing up, deleting and lawfully using local recordings.
          </p>

          <h2>8. Service providers</h2>
          <p>
            Camerofon may use Firebase, Firestore, Firebase Cloud Messaging,
            WebRTC, STUN/TURN and other necessary network infrastructure for
            pairing, signalling, status and notifications. Providers may process
            technical data in their data centres under their own terms and
            applicable law. Camerofon seeks to share only data necessary for the
            relevant function.
          </p>

          <h2>9. Retention and deletion</h2>
          <p>
            Technical data is retained only as long as needed for an active
            pairing, operation, security and legal obligations. A one-time QR or
            pairing code has a limited validity period and must not connect
            another camera after use. Removing a camera from the controller
            deletes its active pairing and related settings; a minimal
            revocation marker may be retained temporarily to prevent renewed
            unauthorised access.
          </p>
          <p>
            You can unpair or delete a camera, delete local recordings, clear
            application data, uninstall Camerofon, or contact the official
            support channel concerning available data requests. Uninstalling the
            app does not automatically delete recordings you have copied or
            moved elsewhere.
          </p>

          <h2>10. Security and user duties</h2>
          <p>
            Camerofon uses available Android protections, secure device pairing
            and encrypted transport, but no application or transmission method
            can guarantee absolute security. Do not share PINs, QR codes,
            activation codes or controller access. Use screen locking and
            current Android updates, avoid modified APKs from unofficial
            sources, and disconnect a lost or compromised device where
            technically possible.
          </p>

          <h2>11. Device safety</h2>
          <p>
            You are responsible for assessing the suitability of the phone,
            battery, charger, cable, mounting, temperature and location.
            Extended camera operation can increase heat, energy use and battery
            wear. Do not use damaged devices or charging equipment or place the
            phone in unsafe conditions.
          </p>

          <h2>12. Activation codes, paid access and refunds</h2>
          <p>
            If Camerofon features are offered for a fee, the duration, device
            limits, activation method and other material conditions will be
            disclosed before purchase. Activation codes may be single-use,
            personal and tied to a specified device or pairing. Codes may not be
            resold, published or transferred without Camerofon&apos;s
            permission.
          </p>
          <p>
            Uninstalling the application, clearing data, resetting settings,
            revoking permissions, losing a code or access, or losing, damaging,
            replacing or having a phone stolen for reasons outside
            Camerofon&apos;s control does not by itself create a right to a
            refund or a free replacement code.
          </p>
          <p>
            Payments for activated codes and access periods already used are
            non-refundable except where a refund is required by applicable law,
            mandatory consumer rights or payment-provider rules. Nothing in this
            document limits rights that a consumer cannot waive by law.
          </p>

          <h2>13. Availability and disclaimer</h2>
          <p>
            Camerofon is provided “as is” and “as available”. To the extent
            permitted by law, uninterrupted or error-free operation,
            compatibility with every phone, constant video quality, connection
            continuity and the absence of delays are not guaranteed. Operation
            may depend on Android, the device manufacturer, battery condition,
            permissions, local networks, mobile operators, internet access,
            Firebase and other third-party services.
          </p>

          <h2>14. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Camerofon and its owner,
            developers and providers are not liable for unlawful, covert,
            unauthorised or improper use; claims, penalties or damage caused by
            missing consent or privacy violations; missed events, interrupted
            video, delays, network failures or third-party outages; loss,
            damage, theft, overheating, discharge or wear of devices and
            accessories; loss of recordings, settings, access, PINs, QR codes or
            activation codes; unauthorised access caused by the user&apos;s acts
            or weak device security; or indirect, incidental, special or
            consequential loss, including loss of profit, data or expected
            benefit.
          </p>
          <p>
            Where liability cannot be fully excluded, total liability is limited
            to the amount actually paid for the disputed code or access period
            unless mandatory law requires a different minimum. This limitation
            does not apply where prohibited by law.
          </p>

          <h2>15. Suspension</h2>
          <p>
            Camerofon may reject, suspend or block a code or access in cases of
            fraud, attempted circumvention, unauthorised code distribution,
            security threats, breach of this document or a reasonable suspicion
            of unlawful use. Mandatory rights of good-faith consumers remain
            unaffected.
          </p>

          <h2>16. Changes</h2>
          <p>
            The current version is always published at camerofon.online/privacy/
            with its update date. Changes apply from publication or another
            stated effective date. Material changes may be announced in the
            application or on the website. Continued use constitutes acceptance
            to the extent allowed by law.
          </p>

          <h2>17. Data and terms requests</h2>
          <p>
            Requests concerning personal data, deletion of available server
            data, activation or these terms may be sent through Camerofon&apos;s
            official support channel provided on the website or when purchasing
            a code. Never post PINs, active QR codes, private recordings or
            other secrets in public messages.
          </p>
        </section>
      </article>
    </main>
  );
}
