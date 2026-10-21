import {
  chrome,
  localeHref,
  localeNames,
  localizedPaths,
  useLocale,
  type Locale,
} from "../i18n/locale";

export function LanguageSwitcher() {
  const { locale, path } = useLocale();
  const available = localizedPaths.some((candidate) => candidate === path);
  return (
    <label
      title={
        available
          ? chrome[locale].language
          : locale === "en"
            ? "This page is available in English only. Other languages open the translated homepage."
            : locale === "uz"
              ? "Bu sahifa faqat ingliz tilida mavjud. Boshqa til tanlansa, tarjima qilingan bosh sahifa ochiladi."
              : "Эта страница доступна только по-английски. При выборе другого языка откроется переведённая главная страница."
      }
      className="flex shrink-0 items-center gap-2 text-xs text-lapis-deep"
    >
      <span className="sr-only">{chrome[locale].language}</span>
      <select
        aria-label={chrome[locale].language}
        value={locale}
        className="max-w-28 border border-gold/40 bg-transparent px-2 py-2 focus-visible:outline-2 focus-visible:outline-gold"
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          window.location.assign(
            localeHref(available || nextLocale === "en" ? path : "/", nextLocale),
          );
        }}
      >
        {Object.entries(localeNames).map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
