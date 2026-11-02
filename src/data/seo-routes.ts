import { masters } from "./masters";
import { orders } from "./orders";
import { translationProjects } from "./translations";
import { sites } from "./sites";
import { localeHref, localizedPaths, type Locale } from "../i18n/locale";

export const siteOrigin = "https://sufiatlas.com";
export const defaultSocialImage = `${siteOrigin}/og/sufi-atlas.jpg`;

const staticEnglishPaths = [
  "/",
  "/about",
  "/academy",
  "/golden-sufi-center",
  "/library",
  "/library/idries-shah",
  "/lineage/naqshbandiyya",
  "/map",
  "/masters",
  "/nursafardiyya",
  "/orders",
  "/lineages",
  "/studies",
  "/study/ahmad-yasawi",
  "/study/najm-al-din-kubra",
  "/timeline",
  "/translations",
] as const;

const dynamicEnglishPaths = [
  ...masters.map((master) => `/masters/${master.slug}`),
  ...orders.map((order) => `/orders/${order.slug}`),
  ...sites.map((site) => `/sites/${site.slug}`),
  ...translationProjects.map((project) => `/translations/${project.slug}`),
];

export const indexableEnglishPaths = Array.from(
  new Set<string>([...staticEnglishPaths, ...dynamicEnglishPaths]),
).sort();

export function isLocalizedPath(path: string): path is (typeof localizedPaths)[number] {
  return localizedPaths.some((candidate) => candidate === path);
}

export function canonicalUrl(path: string, locale: Locale = "en") {
  return `${siteOrigin}${localeHref(path, locale)}`;
}

export function alternateUrls(path: string) {
  const locales: Locale[] = isLocalizedPath(path) ? ["en", "uz", "ru"] : ["en"];
  return locales.map((locale) => ({ locale, href: canonicalUrl(path, locale) }));
}

export type SitemapEntry = {
  path: string;
  locale: Locale;
  alternates: ReturnType<typeof alternateUrls>;
};

export const sitemapEntries: SitemapEntry[] = indexableEnglishPaths.flatMap((path) => {
  const alternates = alternateUrls(path);
  return alternates.map(({ locale }) => ({ path, locale, alternates }));
});
