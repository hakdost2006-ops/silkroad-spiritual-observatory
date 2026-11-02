import {
  chrome,
  localeHref,
  localizedPaths,
  resolveLocale,
  type Locale,
  type TranslatedLocale,
} from "./locale";
import { pageCopy } from "./copy";
import { translationIndexCopy } from "./translation-index";

export function localizedHead(locale: TranslatedLocale, path: string) {
  const copy = pageCopy[locale];
  const title =
    path === "/translations"
      ? translationIndexCopy[locale].library
      : path === "/"
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
    path === "/translations"
      ? translationIndexCopy[locale].metadata
      : path === "/"
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
      { title: `${title} | Sufi Atlas` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: locale === "uz" ? "uz_UZ" : "ru_RU" },
      { property: "og:url", content: `https://sufiatlas.com${localeHref(path, locale)}` },
      { name: "twitter:title", content: `${title} | Sufi Atlas` },
      { name: "twitter:description", content: description },
    ],
    links: siteLinks(localeHref(path, locale)),
  };
}

export function siteLinks(pathname: string) {
  const { locale, path } = resolveLocale(pathname);
  const hasTranslations = localizedPaths.some((candidate) => candidate === path);
  const alternates: Locale[] = hasTranslations ? ["en", "uz", "ru"] : ["en"];

  return [
    { rel: "canonical", href: `https://sufiatlas.com${localeHref(path, locale)}` },
    ...alternates.map((code) => ({
      rel: "alternate",
      hrefLang: code,
      href: `https://sufiatlas.com${localeHref(path, code)}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `https://sufiatlas.com${path}` },
  ];
}

export const localeLinks = (path: string, locale: Locale = "en") =>
  siteLinks(localeHref(path, locale));

export function localizedErrorTitle(locale: TranslatedLocale) {
  return `${pageCopy[locale].notFound} | ${chrome[locale].subtitle}`;
}
