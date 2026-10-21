import type { TranslatedLocale } from "./locale";

export const orderNames: Record<TranslatedLocale, Record<string, string>> = {
  uz: {
    kubrawiyya: "Kubraviya",
    yasaviyya: "Yassaviya",
    khwajagan: "Xojagon",
    naqshbandiyya: "Naqshbandiya",
    mujaddidiyya: "Mujaddidiya",
    nurbakhshiyya: "Nurbaxshiya",
    bektashiyya: "Bektoshiya",
    chishtiyya: "Chishtiya",
    nursafardiyya: "Nursafardiya",
    general: "Umumiy tasavvuf",
  },
  ru: {
    kubrawiyya: "Кубравийя",
    yasaviyya: "Ясавийя",
    khwajagan: "Хваджаган",
    naqshbandiyya: "Накшбандийя",
    mujaddidiyya: "Муджаддидийя",
    nurbakhshiyya: "Нурбахшийя",
    bektashiyya: "Бекташийя",
    chishtiyya: "Чиштийя",
    nursafardiyya: "Нурсафардийя",
    general: "Суфизм в целом",
  },
};

export const orderSummaries: Record<string, [string, string]> = {
  kubrawiyya: [
    "Avlodlari Ipak yo‘llari bo‘ylab yoyilgan Xorazm tariqati",
    "Хорезмский путь, чьи преемники прошли по Шёлковым дорогам",
  ],
  yasaviyya: [
    "She’riyat, jamoalar, ziyoratgohlar va muqaddas xotiraga aylangan turkiy ovoz",
    "Тюркский голос, ставший поэзией, общинами, святынями и священной памятью",
  ],
  khwajagan: [
    "Ustozlar yo‘li va sakkiz muqaddas kalima",
    "Путь наставников и восемь священных изречений",
  ],
  naqshbandiyya: [
    "Qalbga naqsh bo‘lgan xufiy zikr yo‘li",
    "Путь безмолвного поминания, запечатлённого в сердце",
  ],
  mujaddidiyya: [
    "Ikkinchi ming yillikning naqshbandiy yangilanishi",
    "Накшбандийское обновление второго тысячелетия",
  ],
  nurbakhshiyya: [
    "Muhammadiy nurga bog‘liq kubraviy tarmoq",
    "Кубравийская ветвь, связанная с Мухаммадовым светом",
  ],
  bektashiyya: [
    "Anadoludagi an’ana; yassaviy dasht merosi bilan aloqasi keyingi rivoyatlarda saqlangan",
    "Анатолийская традиция, чья связь с ясавийской степью сохраняется в поздних преданиях",
  ],
  chishtiyya: [
    "Samo‘, mehmondorchilik va muhabbat yo‘li",
    "Путь духовного слушания, гостеприимства и любви",
  ],
  nursafardiyya: [
    "Shifo, jang san’ati va zikrga oid tirik Markaziy Osiyo an’anasi",
    "Живая центральноазиатская традиция исцеления, боевых искусств и зикра",
  ],
};

export const masterImpacts: Record<string, [string, string]> = {
  "arslan-baba": [
    "Yassaviy haqidagi muqaddas xotiraning tayanch siymosi. Uning ziyoratgohi O‘tror vohasini Turkiston ziyorat manzarasi bilan bog‘laydi.",
    "Основополагающая фигура священной памяти о Ясави; его святыня связывает Отрарский оазис с паломническим ландшафтом Туркестана.",
  ],
  "sufi-muhammad-danishmand": [
    "Yassaviya ta’limotining og‘zaki suhbatdan qalb haqidagi nasriy merosga o‘tishini aks ettiruvchi muhim ilk matniy xotira siymosi.",
    "Важная фигура ранней текстовой памяти Ясавийи, связанная с переходом её учения от устного общения к прозаическому наследию о сердце.",
  ],
  "hakim-ata": [
    "Yassaviyning Xorazmdagi ulug‘ shoir vorisi. Uning merosi orqali turkiy hikmat ma’naviy ta’lim, muqaddas tarix va jamoaviy xotiraning mintaqaviy xazinasiga aylangan.",
    "Великий хорезмский поэтический преемник Ясави, через чьё наследие тюркский хикмет стал региональной сокровищницей духовного наставления, священной истории и общинной памяти.",
  ],
  "zangi-ata": [
    "Yassaviy an’anasining ziyoratgoh bilan bog‘liq yirik vorisi; uning xotirasi bu yo‘lni Toshkentning ma’naviy geografiyasida mustahkam o‘rnatgan.",
    "Крупный преемник ясавийской традиции, чья память и святыня прочно укоренили этот путь в духовной географии Ташкента.",
  ],
  "anbar-ana": [
    "Xotirada saqlangan yassaviy silsiladagi nomi ma’lum kam sonli ayollardan biri. Uning ziyoratgohi an’ananing muqaddas geografiyasida ayollar xotirasini saqlaydi.",
    "Одна из немногих поимённо известных женщин в памяти о ясавийской преемственности; её святыня сохраняет женскую священную память в публичной географии традиции.",
  ],
  "ismail-ata": [
    "Xotirada saqlangan safarlari Yassaviyani ilm olish, ijozat, oilaviy uzatish va mahalliy ta’lim tarmog‘i sifatida namoyon qiluvchi mintaqaviy voris.",
    "Региональный преемник, чьи запомнившиеся путешествия раскрывают Ясавийю как сеть обучения, духовного разрешения, семейной передачи и местного наставничества.",
  ],
  "ishaq-khwaja": [
    "Yassaviy tarixiy xotirasining saqlovchisi. U bilan bog‘liq matn an’ananing og‘zaki silsiladan yozma kelib chiqish bayoniga qanday o‘tganini yoritadi.",
    "Хранитель ясавийской исторической памяти; связанный с ним текст помогает понять, как традиция превращала устную преемственность в письменный рассказ о своих истоках.",
  ],
  "ahmad-yasawi": [
    "Turkiy tasavvufning asosiy siymolaridan va Yassaviya an’anasining markaziy ustozidir. Amir Temur qayta barpo ettirgan Yasi ziyoratgohi turkiy dunyoning ziyorat markazidir.",
    "Одна из основополагающих фигур тюркского суфизма и центральный наставник ясавийской традиции. Его святыня в Ясы, перестроенная Тимуром, стала центром паломничества тюркского мира.",
  ],
  "najm-al-din-kubra": [
    "Kubraviya asoschisi; Xorazmning mo‘g‘ullar tomonidan zabt etilishi paytida shahid bo‘lgan. Shogirdlari Eron, Hindiston va Kashmir bo‘ylab tarqalgan.",
    "Основатель Кубравийи, погибший при монгольском завоевании Хорезма. Его ученики распространились по Персии, Индии и Кашмиру.",
  ],
  "yusuf-hamadani": [
    "Xojagonning muhim ilk ustozlaridan. Keyingi tarjimai hol an’analari uning vorislari orasida Yassaviy va G‘ijduvoniyni ham nomlaydi.",
    "Важный ранний наставник Хваджаган; поздние биографические традиции называют Ясави и Гиждувани среди его преемников.",
  ],
  "abd-al-khaliq-ghujdawani": [
    "Keyingi Xojagon va Naqshbandiya xotirasiga ta’limoti singgan, naqshbandiylikdan oldingi shakllanish davrining nufuzli ustozidir.",
    "Влиятельный наставник периода формирования до Накшбандийи, чьи учения вошли в позднюю память Хваджаган и накшбандийцев.",
  ],
  "bahauddin-naqshband": [
    "Naqshbandiya nomi bilan bog‘langan ustoz va islom Sharqining eng ta’sirli so‘fiylaridan biri.",
    "Наставник, давший имя Накшбандийе, и один из наиболее влиятельных суфиев исламского Востока.",
  ],
  "khwaja-ahrar": [
    "Ijtimoiy va siyosiy ta’siri Hirotdan Qashqargacha yetgan Temuriylar davri ustozi.",
    "Наставник эпохи Тимуридов, чьё общественное и политическое влияние простиралось от Герата до Кашгара.",
  ],
  "sayf-al-din-bakharzi": [
    "Najmiddin Kubroning yetakchi shogirdi va Buxoro tasavvufining muhim siymosi.",
    "Ведущий ученик Наджм ад-Дина Кубры и ключевая фигура бухарского суфизма.",
  ],
  "ali-hamadani": [
    "Kubraviy tasavvufni Kashmirga yetkazgan; Kashmir islom tamaddunining shakllanishiga ta’sir ko‘rsatgan siymo.",
    "Передал кубравийский суфизм Кашмиру и сыграл важную роль в становлении кашмирской исламской цивилизации.",
  ],
  "arif-riwgari": [
    "G‘ijduvon va keyingi Buxoro ustozlari orasida Xojagon an’anasini saqlagan zot sifatida yodga olinadi.",
    "Памятен как хранитель течения Хваджаган между Гиждуваном и позднейшими бухарскими наставниками.",
  ],
  "mahmud-faghnawi": [
    "Buxoroning Xojagon xotirasida kam ko‘zga tashlansa-da, muhim vorislik siymosi.",
    "Негромкая, но существенная фигура преемственности в бухарской памяти Хваджаган.",
  ],
  "azizan-ali-ramitani": [
    "Odobga oid so‘zlari keyingi naqshbandiy tasavvurni hanuz shakllantirgan, xotirada ulug‘langan Xojagon ustozi.",
    "Крупный наставник Хваджаган, чьё учение об адабе продолжает формировать позднейшее накшбандийское воображение.",
  ],
  "muhammad-baba-samasi": [
    "Xojagondan Naqshbandiya olamiga o‘tishning xotirada saqlangan bo‘sag‘a ustozi.",
    "Наставник на пороге памятного перехода от Хваджаган к накшбандийскому миру.",
  ],
  "sayyid-amir-kulal": [
    "Naqshbandiya shakllanishi bo‘sag‘asidagi ulug‘ ustoz; Buxoroning tirik ziyoratgoh manzarasida uning xotirasi davom etadi.",
    "Великий наставник у истоков Накшбандийи, память о котором живёт в бухарском ландшафте святынь.",
  ],
  "yaqub-charkhi": [
    "Ilk naqshbandiy ta’limotga barqaror forsiy matn shaklini bergan adabiy va ilmiy uzatuvchi.",
    "Литературный и учёный передатчик, придавший раннему накшбандийскому учению долговечную персидскую текстовую форму.",
  ],
  "abd-al-rahman-jami": [
    "Asarlari Markaziy Osiyo ma’naviy madaniyatini uning shaharlaridan uzoqda ham tushunarli qilgan shoir va tasavvuf xotirasi tarixchisi.",
    "Поэт и историк суфийской памяти, чьи сочинения сделали духовную культуру Центральной Азии понятной далеко за пределами её городов.",
  ],
};

export function paired(value: [string, string] | undefined, locale: TranslatedLocale): string {
  return value?.[locale === "uz" ? 0 : 1] ?? "";
}
