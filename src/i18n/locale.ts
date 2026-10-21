import { useRouterState } from "@tanstack/react-router";

export type Locale = "en" | "uz" | "ru";
export type TranslatedLocale = Exclude<Locale, "en">;
export const localizedPaths = [
  "/",
  "/about",
  "/orders",
  "/masters",
  "/library",
  "/orders/yasaviyya",
] as const;

export function resolveLocale(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/(uz|ru)(\/.*)?$/);
  return match
    ? { locale: match[1] as Locale, path: (match[2] || "/").replace(/\/$/, "") || "/" }
    : { locale: "en", path: pathname.replace(/\/$/, "") || "/" };
}

export function localeHref(path: string, locale: Locale): string {
  const normalized = path.replace(/\/$/, "") || "/";
  if (locale === "en" || !localizedPaths.some((candidate) => candidate === normalized))
    return normalized;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function useLocale() {
  return resolveLocale(useRouterState({ select: (state) => state.location.pathname }));
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  uz: "O‘zbekcha",
  ru: "Русский",
};

export const chrome = {
  en: {
    subtitle: "Central Asian Sufi Houses",
    skip: "Skip to content",
    menu: "Menu",
    language: "Language",
    portals: "Portals",
    explore: "Explore",
    about: "About the Atlas",
    footer:
      "A living archive of Central Asian Sufi orders, masters, sacred geography, manuscripts, and contemporary practice, gathered with scholarly care and reverence.",
    copyright: "an educational and cultural archive",
    notice: "AI-assisted translation; editorial language review pending.",
    english: "English source",
    fallback: "This page is currently available in English.",
    nav: [
      "Orders",
      "Masters",
      "Khwajagan",
      "Silsila",
      "Library",
      "Translations",
      "Sacred Sites",
      "Timeline",
      "Map",
      "Nursafardiyya",
      "About",
      "Academy",
    ],
  },
  uz: {
    subtitle: "Markaziy Osiyo tasavvuf maktablari",
    skip: "Asosiy mazmunga o‘tish",
    menu: "Menyu",
    language: "Til",
    portals: "Bo‘limlar",
    explore: "Kashf eting",
    about: "Atlas haqida",
    footer:
      "Markaziy Osiyo tariqatlari, ustozlari, muqaddas maskanlari, qo‘lyozmalari va bugungi an’analariga bag‘ishlangan, ilmiy e’tibor va ehtirom bilan tuzilgan tirik arxiv.",
    copyright: "ta’limiy va madaniy arxiv",
    notice: "Sun’iy intellekt yordamidagi tarjima; adabiy tahrir va til tekshiruvi kutilmoqda.",
    english: "Inglizcha asl matn",
    fallback: "Bu sahifa hozircha ingliz tilida mavjud.",
    nav: [
      "Tariqatlar",
      "Ustozlar",
      "Xojagon",
      "Silsila",
      "Kutubxona",
      "Tarjimalar",
      "Muqaddas maskanlar",
      "Davrlar",
      "Xarita",
      "Nursafardiya",
      "Atlas haqida",
      "Akademiya",
    ],
  },
  ru: {
    subtitle: "Суфийские школы Центральной Азии",
    skip: "Перейти к содержанию",
    menu: "Меню",
    language: "Язык",
    portals: "Разделы",
    explore: "Исследуйте",
    about: "Об Атласе",
    footer:
      "Живой архив суфийских орденов, наставников, священной географии, рукописей и современных традиций Центральной Азии, составленный с научным вниманием и уважением.",
    copyright: "образовательный и культурный архив",
    notice: "Перевод с помощью ИИ; редакционная языковая проверка ещё предстоит.",
    english: "Английский оригинал",
    fallback: "Эта страница пока доступна на английском языке.",
    nav: [
      "Тарикаты",
      "Наставники",
      "Хваджаган",
      "Силсила",
      "Библиотека",
      "Переводы",
      "Священные места",
      "Хронология",
      "Карта",
      "Нурсафардийя",
      "Об Атласе",
      "Академия",
    ],
  },
} as const;
