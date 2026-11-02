import type { TranslatedLocale } from "./locale";

export const translationIndexCopy = {
  uz: {
    title: "O‘zbekcha manba kitoblardan inglizcha mutolaa sahifalarigacha",
    intro:
      "Nursafardiyaning rasmiy nashrlari bilan inglizcha portal o‘rtasidagi, manbalarga tayanuvchi ko‘prik. Har bir kitob bibliografik kontekst, atamalar, tarjima va tahririy tekshiruv orqali o‘rganiladi.",
    metadata:
      "Nursafardiyaning o‘zbekcha kitob arxivi uchun manbalarga tayangan inglizcha mutolaa dasturi: rasmiy nashrlar, atamalar, kontekst va puxta tayyorlangan ochiq sahifalar.",
    library: "Tarjima kutubxonasi",
    metrics: ["tayanch loyiha", "asosiy bilim sohasi", "Qatron yo‘nalishi", "ochiq qatlam"],
    english: "Inglizcha",
    method: "Tahririy usul",
    methodTitle: "Manbadan o‘quvchigacha — izchil yo‘l",
    methodBody:
      "Har bir ochiq sahifa manba nashrdan boshlanadi va matnlarni qiyoslash, atamalarni aniqlashtirish, tarjima hamda tekshiruv bosqichlaridan o‘tadi. Maqsad — manbalarga sodiq qoladigan va tahririy yondashuvini ochiq ko‘rsatadigan, o‘qish uchun ravon inglizcha portal yaratish.",
    steps: [
      "Manba nashr",
      "Matnni tayyorlash",
      "O‘zbekcha matnlarni qiyoslash",
      "Atamalar lug‘ati",
      "Inglizcha sharh",
      "Adabiy tarjima",
      "Tahririy tekshiruv",
      "Ochiq mutolaa sahifasi",
    ],
    step: "Bosqich",
    sequence: "Tayanch loyihalar ketma-ketligi",
    sequenceTitle: "Inglizcha bilim poydevorini yaratish",
    sequenceBody:
      "Birinchi inglizcha qatlam nafas, shifo va jang san’ati intizomini qamrab oladi. Bu sohalar keyinchalik she’riyat, tarix va maxsus harakat qo‘llanmalari ustida ishlash uchun yaxlit atamalar tizimini yaratadi.",
    source: "Manba nashrlar",
    scripts: { Latin: "Lotin yozuvi", Cyrillic: "Kirill yozuvi" },
    open: "Loyihani ochish",
    englishPage: "sahifa ingliz tilida",
    principles: [
      [
        "Tarjima tamoyili",
        "Avval ma’noni tushunarli yetkazing, so‘ng ifodani sayqallang; atamalar lug‘ati aniqlashguncha noaniq atamalarni ochiq ko‘rsating.",
      ],
      [
        "Veb-sayt tamoyili",
        "Har bir tarjima ochiq bilim bo‘limini boyitishi kerak: nafas, tabobat, Zurmergan, Qatron yo‘nalishlari, ustozlar yoki manbalar arxivi.",
      ],
    ],
    directions: {
      respiration: "Nafas",
      "meditation-zikr": "Muroqaba va zikr",
      medicine: "Tabobat",
      cleanliness: "Poklik",
      lifestyle: "Turmush tarzi",
      "martial-arts": "Jang san’ati",
      "movement-system": "Harakat tizimi",
      "choreography-dance": "Xoreografiya va raqs",
    },
    projects: {
      "nursafardiyya-nafasiyoti": {
        title: "Nursafardiya nafasiyoti",
        priority: "1-bosqich",
        status: "Tarjima uchun tanlangan",
        focus: "Nafas, zikr, diqqat va jismoniy amaliyot usuli",
        rationale:
          "Nafas zikr, muroqaba, shifo, harakat va Zurmergan jang san’ati intizomini bog‘lagani uchun nafasiyot inglizcha bilim poydevorining birinchi qismi bo‘lishi kerak.",
        role: "Bu sinov kitobi portalda nafas amaliyotlariga oid atamalarni belgilaydi va keyingi tarjima kitob sahifalari uchun namuna bo‘ladi.",
      },
      "sufiy-tabobati": {
        title: "So‘fiy tabobati",
        priority: "2-bosqich",
        status: "Boshlang‘ich bob tarjima qilingan",
        focus:
          "An’anaviy salomatlik qarashlari, shifo atamalari, giyohlar va tabobatning madaniy konteksti",
        rationale:
          "Tabobat nafasiyotdan keyin kelishi kerak: u Nursafardiyaning jamoatchilikka qaratilgan eng faol sohalaridan biri bo‘lib, ingliz tilida ehtiyotkor bayon etilishini talab qiladi.",
        role: "Bu kitob So‘fiy tabobati bo‘limining tayanchi bo‘lib, madaniy kontekst, atamalar lug‘ati va materiallar tibbiy maslahat emasligini bildiruvchi aniq chegaralarni ta’minlaydi.",
      },
      "nursafardiyya-sufiy-jang-sanati": {
        title: "Nursafardiya so‘fiy jang san’ati",
        priority: "3-bosqich",
        status: "Manba tayyorlanmoqda",
        focus: "Zurmergan, harakat, intizom, xizmat va jismoniy amaliyotdagi hushyorlik",
        rationale:
          "Jang san’ati kitobi nafas va tabobatdan keyin kelishi kerak; shunda Zurmerganni nafas, intizom, axloq va xavfsizlik orqali tushuntirish mumkin bo‘ladi.",
        role: "Bu kitob rasmli qo‘llanma va harakat darajalari tarjima qilinishidan oldin Zurmergan bilan tanishish uchun asosiy inglizcha kirish manbasi bo‘ladi.",
      },
      "zurmergan-illustrated-introduction": {
        title: "So‘fiyona Zurmergan jang san’atlari rasmlarda",
        priority: "4-bosqich",
        status: "Inglizcha sharh ishlab chiqilmoqda",
        focus:
          "Rasmlarda ko‘rsatilgan harakat, tasvirlar, tana holatlari atamalari va mashg‘ulot ketma-ketligi",
        rationale:
          "Rasmli Zurmergan kitobi tasvir jihatidan ta’sirli, ammo u jang san’atining asosiy atamalari aniqlashtirilgandan keyin kelishi kerak.",
        role: "Bu kitob tasvirlar, izohlar va amaliyotning ehtiyotkorlik bilan belgilangan chegaralarini o‘z ichiga olgan birinchi boy tasvirli tarjima moduliga aylanishi mumkin.",
      },
    },
  },
  ru: {
    title: "От узбекских книг-источников к страницам для чтения на английском",
    intro:
      "Связующее звено между официальными изданиями Нурсафардийи и англоязычным порталом, выстроенное с опорой на источники. Работа с каждой книгой включает библиографический контекст, терминологию, перевод и редакционную проверку.",
    metadata:
      "Программа чтения на английском языке, основанная на узбекском книжном архиве Нурсафардийи: официальные издания, терминология, контекст и тщательно подготовленные открытые страницы.",
    library: "Библиотека переводов",
    metrics: ["базовых проекта", "основные области знания", "направлений Катрон", "открытый слой"],
    english: "Английский",
    method: "Редакционный метод",
    methodTitle: "Последовательный путь от источника к читателю",
    methodBody:
      "Каждая открытая страница начинается с исходного издания и проходит последовательные этапы сверки текстов, уточнения терминологии, перевода и проверки. Цель — создать удобный для чтения англоязычный портал, верный своим источникам и ясно обозначающий редакционную рамку.",
    steps: [
      "Исходное издание",
      "Подготовка текста",
      "Сверка узбекских текстов",
      "Терминологический словарь",
      "Обзор на английском",
      "Литературный перевод",
      "Редакционная проверка",
      "Открытая страница для чтения",
    ],
    step: "Этап",
    sequence: "Последовательность базовых проектов",
    sequenceTitle: "Создать англоязычную основу",
    sequenceBody:
      "Первый англоязычный слой охватывает дыхание, целительство и боевую дисциплину. Вместе эти области создают согласованную терминологию для дальнейшей работы с поэзией, историей и специальными руководствами по движению.",
    source: "Исходные издания",
    scripts: { Latin: "Латиница", Cyrillic: "Кириллица" },
    open: "Открыть проект",
    englishPage: "страница на английском",
    principles: [
      [
        "Принцип перевода",
        "Сначала переводить ради понимания, затем оттачивать красоту выражения; сохранять неопределённые термины видимыми, пока словарь не будет уточнён.",
      ],
      [
        "Принцип сайта",
        "Каждый перевод должен обогащать открытый раздел знаний: дыхание, табобат, Зурмерган, направления Катрон, наставников или архив источников.",
      ],
    ],
    directions: {
      respiration: "Дыхание",
      "meditation-zikr": "Созерцание и зикр",
      medicine: "Табобат",
      cleanliness: "Чистота",
      lifestyle: "Образ жизни",
      "martial-arts": "Боевые искусства",
      "movement-system": "Система движений",
      "choreography-dance": "Хореография и танец",
    },
    projects: {
      "nursafardiyya-nafasiyoti": {
        title: "Дыхание в Нурсафардийе",
        priority: "Этап 1",
        status: "Выбрано для перевода",
        focus: "Дыхание, зикр, внимание и телесный метод",
        rationale:
          "Работа о дыхании должна стать первой англоязычной основой, поскольку дыхание связывает зикр, созерцание, целительство, движение и боевую дисциплину Зурмерган.",
        role: "Эта пилотная книга определит терминологию дыхательных практик на портале и станет образцом для страниц последующих переводимых книг.",
      },
      "sufiy-tabobati": {
        title: "Суфийская медицина",
        priority: "Этап 2",
        status: "Начальная глава переведена",
        focus:
          "Традиционные представления об оздоровлении, терминология целительства, травы и медицина в культурном контексте",
        rationale:
          "Медицина должна следовать за дыханием, поскольку это одна из наиболее активных публичных областей Нурсафардийи, требующая осторожного изложения на английском языке.",
        role: "Эта книга станет опорой раздела суфийской медицины: даст культурный контекст, словарь и ясно обозначенные границы, отделяющие материал от медицинских рекомендаций.",
      },
      "nursafardiyya-sufiy-jang-sanati": {
        title: "Суфийское боевое искусство Нурсафардийи",
        priority: "Этап 3",
        status: "Подготовка источника",
        focus: "Зурмерган, движение, дисциплина, служение и бдительность в телесной практике",
        rationale:
          "Книга о боевых искусствах должна следовать за дыханием и медициной, чтобы Зурмерган можно было объяснить через дыхание, дисциплину, этику и безопасность.",
        role: "Эта книга станет основным англоязычным введением в Зурмерган до перевода иллюстрированного руководства и уровней движения.",
      },
      "zurmergan-illustrated-introduction": {
        title: "Суфийские боевые искусства Зурмерган в иллюстрациях",
        priority: "Этап 4",
        status: "Обзор на английском в разработке",
        focus:
          "Иллюстрированное движение, изображения, терминология положений тела и последовательность обучения",
        rationale:
          "Иллюстрированная книга о Зурмергане обладает большой визуальной силой, однако к ней следует перейти после согласования основной терминологии боевого искусства.",
        role: "Эта книга может стать первым насыщенным изображениями переводным модулем с иллюстрациями, подписями и тщательно обозначенными границами практики.",
      },
    },
  },
} satisfies Record<TranslatedLocale, object>;
