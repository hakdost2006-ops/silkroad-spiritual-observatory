import { chrome, localeHref, type Locale, type TranslatedLocale } from "./locale";
import { pageCopy } from "./copy";

export function localizedHead(locale: TranslatedLocale, path: string) {
  const copy = pageCopy[locale];
  const title =
    path === "/"
      ? copy.homeTitle
      : path === "/about"
        ? copy.aboutTitle
        : path === "/orders"
          ? copy.ordersTitle
          : path === "/masters"
            ? copy.mastersTitle
            : path === "/library"
              ? copy.libraryTitle
              : copy.yasawiTitle;
  const description =
    path === "/"
      ? copy.homeIntro
      : path === "/about"
        ? copy.aboutIntro
        : path === "/orders"
          ? copy.ordersIntro
          : path === "/masters"
            ? copy.mastersIntro
            : path === "/library"
              ? copy.libraryIntro
              : copy.yasawiIntro;
  return {
    meta: [
      { title: `${title} | Silk Road Sufi Atlas` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: locale === "uz" ? "uz_UZ" : "ru_RU" },
      { property: "og:url", content: `https://sufiatlas.com${localeHref(path, locale)}` },
      { name: "twitter:title", content: `${title} | Silk Road Sufi Atlas` },
      { name: "twitter:description", content: description },
    ],
    links: localeLinks(path, locale),
  };
}

export function localeLinks(path: string, locale: Locale = "en") {
  return [
    { rel: "canonical", href: `https://sufiatlas.com${localeHref(path, locale)}` },
    ...(["en", "uz", "ru"] as const).map((code) => ({
      rel: "alternate",
      hrefLang: code,
      href: `https://sufiatlas.com${localeHref(path, code)}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `https://sufiatlas.com${path}` },
  ];
}

export function localizedErrorTitle(locale: TranslatedLocale) {
  return `${pageCopy[locale].notFound} | ${chrome[locale].subtitle}`;
}
