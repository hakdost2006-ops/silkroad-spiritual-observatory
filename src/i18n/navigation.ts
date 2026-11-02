import type { Locale } from "./locale";

export type NavigationItem = {
  label: string;
  description: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href?: string;
  items: NavigationItem[];
};

const hrefs = {
  traditions: ["/orders", "/masters", "/lineages"],
  atlas: ["/map", "/timeline"],
  library: ["/library", "/studies", "/translations"],
  living: ["/nursafardiyya"],
} as const;

export const navigationCopy: Record<
  Locale,
  {
    groups: NavigationGroup[];
    about: string;
    search: string;
    searchPlaceholder: string;
    noResults: string;
    support: { label: string; href: string }[];
  }
> = {
  en: {
    groups: [
      {
        label: "Traditions",
        items: [
          {
            label: "Orders",
            description: "The Sufi houses of Central Asia",
            href: hrefs.traditions[0],
          },
          {
            label: "Masters",
            description: "The lives of the friends of God",
            href: hrefs.traditions[1],
          },
          {
            label: "Lineages",
            description: "Chains of transmission, with the certainty of each link",
            href: hrefs.traditions[2],
          },
        ],
      },
      {
        label: "Atlas",
        items: [
          {
            label: "Map",
            description: "Shrines and cities, with a list view",
            href: hrefs.atlas[0],
          },
          { label: "Timeline", description: "From Khurasan to today", href: hrefs.atlas[1] },
        ],
      },
      {
        label: "Library",
        items: [
          {
            label: "Catalogue",
            description: "Texts, manuscripts, and scholarship",
            href: hrefs.library[0],
          },
          {
            label: "Studies",
            description: "Long-form readings on Yasawi, Kubra, and their worlds",
            href: hrefs.library[1],
          },
          {
            label: "Translations",
            description: "Source-led work in progress",
            href: hrefs.library[2],
          },
        ],
      },
      {
        label: "Living Traditions",
        items: [
          {
            label: "Nursafardiyya",
            description: "A present-day tradition in Uzbekistan",
            href: hrefs.living[0],
          },
        ],
      },
      { label: "Academy", href: "/academy", items: [] },
    ],
    about: "About",
    search: "Search",
    searchPlaceholder: "Search masters, orders, sites, and books",
    noResults: "No atlas records match this search.",
    support: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/about#contact" },
      { label: "Corrections", href: "/about#corrections" },
      { label: "Method", href: "/about#method" },
    ],
  },
  uz: {
    groups: [
      {
        label: "An’analar",
        items: [
          {
            label: "Tariqatlar",
            description: "Markaziy Osiyo so‘fiylik maktablari",
            href: hrefs.traditions[0],
          },
          {
            label: "Ustozlar",
            description: "Alloh do‘stlarining hayoti",
            href: hrefs.traditions[1],
          },
          {
            label: "Silsilalar",
            description: "Uzatish zanjirlari va har bir bog‘liqlikning dalil darajasi",
            href: hrefs.traditions[2],
          },
        ],
      },
      {
        label: "Atlas",
        items: [
          {
            label: "Xarita",
            description: "Ziyoratgohlar va shaharlar, ro‘yxat ko‘rinishi bilan",
            href: hrefs.atlas[0],
          },
          {
            label: "Vaqt jadvali",
            description: "Xurosondan bugungi kungacha",
            href: hrefs.atlas[1],
          },
        ],
      },
      {
        label: "Kutubxona",
        items: [
          {
            label: "Katalog",
            description: "Matnlar, qo‘lyozmalar va tadqiqotlar",
            href: hrefs.library[0],
          },
          {
            label: "Tadqiqotlar",
            description: "Yassaviy, Kubra va ularning dunyosi haqida batafsil o‘qishlar",
            href: hrefs.library[1],
          },
          {
            label: "Tarjimalar",
            description: "Manbalarga tayangan davom etayotgan ishlar",
            href: hrefs.library[2],
          },
        ],
      },
      {
        label: "Jonli an’analar",
        items: [
          {
            label: "Nursafardiya",
            description: "O‘zbekistondagi zamonaviy an’ana",
            href: hrefs.living[0],
          },
        ],
      },
      { label: "Akademiya", href: "/academy", items: [] },
    ],
    about: "Biz haqimizda",
    search: "Qidiruv",
    searchPlaceholder: "Ustozlar, tariqatlar, ziyoratgohlar va kitoblarni qidiring",
    noResults: "Bu qidiruvga mos atlas yozuvi topilmadi.",
    support: [
      { label: "Biz haqimizda", href: "/about" },
      { label: "Aloqa", href: "/about#contact" },
      { label: "Tuzatishlar", href: "/about#corrections" },
      { label: "Usul", href: "/about#method" },
    ],
  },
  ru: {
    groups: [
      {
        label: "Традиции",
        items: [
          {
            label: "Ордены",
            description: "Суфийские школы Центральной Азии",
            href: hrefs.traditions[0],
          },
          { label: "Мастера", description: "Жизни друзей Божьих", href: hrefs.traditions[1] },
          {
            label: "Линии преемственности",
            description: "Цепи передачи с оценкой достоверности связей",
            href: hrefs.traditions[2],
          },
        ],
      },
      {
        label: "Атлас",
        items: [
          {
            label: "Карта",
            description: "Святыни и города, также в виде списка",
            href: hrefs.atlas[0],
          },
          { label: "Хронология", description: "От Хорасана до наших дней", href: hrefs.atlas[1] },
        ],
      },
      {
        label: "Библиотека",
        items: [
          {
            label: "Каталог",
            description: "Тексты, рукописи и исследования",
            href: hrefs.library[0],
          },
          {
            label: "Исследования",
            description: "Подробные материалы о Ясави, Кубра и их мире",
            href: hrefs.library[1],
          },
          {
            label: "Переводы",
            description: "Текущая работа с указанием источников",
            href: hrefs.library[2],
          },
        ],
      },
      {
        label: "Живые традиции",
        items: [
          {
            label: "Нурсафардийя",
            description: "Современная традиция Узбекистана",
            href: hrefs.living[0],
          },
        ],
      },
      { label: "Академия", href: "/academy", items: [] },
    ],
    about: "О проекте",
    search: "Поиск",
    searchPlaceholder: "Искать мастеров, ордены, святыни и книги",
    noResults: "По вашему запросу ничего не найдено.",
    support: [
      { label: "О проекте", href: "/about" },
      { label: "Контакты", href: "/about#contact" },
      { label: "Исправления", href: "/about#corrections" },
      { label: "Метод", href: "/about#method" },
    ],
  },
};
