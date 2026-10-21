import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
import heroImage from "../assets/hero-registan.jpg";
import hikmetImage from "../assets/calligraphy/ahmad-yasawi-hikmet-manuscript.jpg";
import { orders } from "../data/orders";
import { masters } from "../data/masters";
import { library, libraryFilters } from "../data/library";
import {
  yasawiyyaEvidenceKey,
  yasawiyyaJourney,
  yasawiyyaPublicSources,
  yasawiyyaRoute,
  yasawiyyaSuccessorRoads,
} from "../data/yasawiyya-journey";
import { pageCopy } from "../i18n/copy";
import { chrome, localeHref, type TranslatedLocale } from "../i18n/locale";
import { masterImpacts, orderNames, orderSummaries, paired } from "../i18n/catalog";
import { libraryDescriptions } from "../i18n/library";
import { evidenceLabels, yasawiyyaTranslations } from "../i18n/yasawiyya";
import { yasawiyyaSupplements } from "../i18n/yasawiyya-supplements";

const mausoleumImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan%2C_Kazakhstan.jpg";

export function LocalizedAtlas({ locale, path }: { locale: TranslatedLocale; path: string }) {
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
  const intro =
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
  const image =
    path === "/" ? heroImage : path === "/orders/yasaviyya" ? mausoleumImage : undefined;
  return (
    <div>
      <header
        className={`relative overflow-hidden ${image ? "bg-lapis-deep text-ivory" : "border-b border-gold/30 bg-parchment text-lapis-deep"}`}
      >
        {image && (
          <img
            src={image}
            alt={path === "/" ? copy.heroAlt : copy.mausoleumAlt}
            width={1600}
            height={1067}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <p className="text-xs text-gold">{chrome[locale].subtitle}</p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">{intro}</p>
          {path === "/orders/yasaviyya" && (
            <p className="mt-5 max-w-3xl leading-relaxed">{copy.yasawiLead}</p>
          )}
          {image && (
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="border border-gold bg-gold px-4 py-3 text-sm text-lapis-deep"
                href={path === "/" ? localeHref("/orders", locale) : "#steppe-and-oasis"}
              >
                {copy.read} <ArrowRight className="ml-2 inline h-4 w-4" />
              </a>
              <a
                className="border border-gold/50 px-4 py-3 text-sm"
                href={localeHref("/library", locale)}
              >
                {copy.libraryTitle}
              </a>
            </div>
          )}
        </div>
        {path === "/orders/yasaviyya" && (
          <p className="relative mx-auto max-w-7xl px-5 pb-4 text-xs">
            <a
              href="https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Petar Milošević / Wikimedia Commons · CC BY-SA 4.0
            </a>
            {" · "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {locale === "uz" ? "Litsenziya" : "Лицензия"}
            </a>
          </p>
        )}
      </header>
      <div className="border-b border-gold/20 bg-card">
        <p className="mx-auto max-w-7xl px-5 py-3 text-xs leading-relaxed text-stone lg:px-8">
          {chrome[locale].notice}{" "}
          <a className="ml-2 underline" href={path}>
            {chrome[locale].english}
          </a>
        </p>
      </div>
      {path === "/" && (
        <>
          <Orders locale={locale} />
          <section className="bg-parchment">
            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
              <h2 className="font-serif text-3xl text-lapis-deep">{copy.geography}</h2>
              <p className="mt-5 text-stone">{copy.timelineIntro}</p>
              <div className="mt-6 flex flex-wrap gap-5">
                <a className="underline" href="/map" lang="en">
                  {copy.map} · {copy.english}
                </a>
                <a className="underline" href="/timeline" lang="en">
                  {copy.timeline} · {copy.english}
                </a>
              </div>
            </div>
          </section>
          <Masters locale={locale} />
        </>
      )}
      {path === "/orders" && <Orders locale={locale} />}
      {path === "/masters" && <Masters locale={locale} />}
      {path === "/about" && (
        <section className="mx-auto max-w-3xl px-5 py-14 text-stone lg:px-8">
          <p className="text-lg leading-relaxed">{copy.aboutParagraphs[0]}</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {copy.aboutSections.map(([heading, text]) => (
              <section key={heading}>
                <h2 className="font-serif text-2xl text-lapis-deep">{heading}</h2>
                <p className="mt-3 leading-relaxed">{text}</p>
              </section>
            ))}
          </div>
          <p className="mt-10 leading-relaxed">{copy.aboutParagraphs[1]}</p>
        </section>
      )}
      {path === "/library" && <Library locale={locale} />}
      {path === "/orders/yasaviyya" && <Yasawiyya locale={locale} />}
    </div>
  );
}

function Orders({ locale }: { locale: TranslatedLocale }) {
  const copy = pageCopy[locale];
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <h2 className="font-serif text-3xl text-lapis-deep">{copy.ordersTitle}</h2>
      <ul className="mt-8 divide-y divide-gold/30 border-y border-gold/30">
        {orders.map((order) => (
          <li key={order.slug}>
            <a
              href={localeHref(`/orders/${order.slug}`, locale)}
              className="grid gap-4 py-7 md:grid-cols-[16rem_1fr_auto]"
            >
              <h3 className="font-serif text-2xl text-lapis-deep">
                {orderNames[locale][order.slug]}
              </h3>
              <p className="leading-relaxed text-stone">
                {paired(orderSummaries[order.slug], locale)}
              </p>
              <span className="text-xs text-gold">
                {order.slug === "yasaviyya" ? copy.read : copy.english}{" "}
                <ArrowRight className="inline h-4 w-4" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Masters({ locale }: { locale: TranslatedLocale }) {
  const copy = pageCopy[locale];
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <h2 className="font-serif text-3xl text-lapis-deep">{copy.mastersTitle}</h2>
      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {masters.map((master) => (
          <article key={master.slug} className="border-b border-gold/30 pb-7">
            <p className="text-xs text-gold">{orderNames[locale][master.order]}</p>
            <h3 className="mt-2 font-serif text-2xl text-lapis-deep">
              <a href={`/masters/${master.slug}`}>{master.name}</a>
            </h3>
            <p className="mt-3 leading-relaxed text-stone">
              {paired(masterImpacts[master.slug], locale)}
            </p>
            <details className="mt-3 text-xs leading-relaxed text-stone">
              <summary className="cursor-pointer">{copy.original}</summary>
              <p lang="en" className="mt-2">
                {master.dates} · {master.region}
                <br />
                {master.tomb.location}
              </p>
            </details>
            <a href={`/masters/${master.slug}`} className="mt-4 inline-block text-xs underline">
              {copy.english}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const enumLabels: Record<string, [string, string]> = {
  Arabic: ["Arabcha", "Арабский"],
  Persian: ["Forscha", "Персидский"],
  Turkic: ["Turkiy", "Тюркский"],
  English: ["Inglizcha", "Английский"],
  Russian: ["Ruscha", "Русский"],
  Uzbek: ["O‘zbekcha", "Узбекский"],
  Book: ["Kitob", "Книга"],
  Manuscript: ["Qo‘lyozma", "Рукопись"],
  Article: ["Maqola", "Статья"],
  Brochure: ["Risola", "Брошюра"],
  Video: ["Video", "Видео"],
  Audio: ["Audio", "Аудио"],
  "golden-sufi": ["Golden Sufi Center", "Golden Sufi Center"],
  "idries-shah": ["Idris Shoh", "Идрис Шах"],
};

function Library({ locale }: { locale: TranslatedLocale }) {
  const copy = pageCopy[locale];
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({
    order: "all",
    language: "all",
    format: "all",
    collection: "all",
    century: "all",
  });
  const results = useMemo(
    () =>
      library.filter(
        (item) =>
          Object.entries(filters).every(
            ([key, value]) => value === "all" || item[key as keyof typeof item] === value,
          ) &&
          `${item.title} ${item.author} ${paired(libraryDescriptions[item.id], locale)} ${item.tags.join(" ")}`
            .toLocaleLowerCase(locale)
            .includes(query.toLocaleLowerCase(locale)),
      ),
    [filters, locale, query],
  );
  const label = (value: string) =>
    value === "all"
      ? copy.all
      : (orderNames[locale][value] ?? paired(enumLabels[value], locale)) ||
        value.replace(/(\d+)(?:th|st|nd|rd)/g, "$1");
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="space-y-5">
          <div>
            <label
              htmlFor="library-search"
              className="mb-2 flex items-center gap-2 text-sm text-lapis-deep"
            >
              <Search className="h-4 w-4" />
              {copy.search}
            </label>
            <input
              id="library-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full border border-gold/40 bg-card px-3 py-2"
            />
          </div>
          {(["order", "language", "format", "collection", "century"] as const).map((key) => (
            <div key={key}>
              <label className="mb-2 block text-sm text-lapis-deep" htmlFor={`filter-${key}`}>
                {copy[key]}
              </label>
              <select
                id={`filter-${key}`}
                value={filters[key]}
                onChange={(event) => setFilters({ ...filters, [key]: event.target.value })}
                className="w-full border border-gold/40 bg-card px-3 py-2"
              >
                {libraryFilters[key].map((value) => (
                  <option key={value} value={value}>
                    {label(value)}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            onClick={() => {
              setQuery("");
              setFilters({
                order: "all",
                language: "all",
                format: "all",
                collection: "all",
                century: "all",
              });
            }}
            className="text-sm underline"
          >
            {copy.reset}
          </button>
          <p role="status" className="text-xs text-stone">
            {results.length} / {library.length} {copy.results}
          </p>
        </aside>
        <div className="min-w-0 divide-y divide-gold/30 border-t border-gold/30">
          {results.length === 0 && <p className="py-8">{copy.empty}</p>}
          {results.map((item) => (
            <article key={item.id} className="py-7">
              <p className="text-xs text-gold">
                {label(item.language)} · {label(item.format)} · {label(item.century)}
              </p>
              <h2 className="mt-2 break-words font-serif text-2xl text-lapis-deep">{item.title}</h2>
              <p className="mt-2 text-sm italic text-stone">{item.author}</p>
              <p className="mt-4 leading-relaxed text-stone">
                {paired(libraryDescriptions[item.id], locale)}
              </p>
              <details className="mt-4 text-xs leading-relaxed text-stone">
                <summary className="cursor-pointer">
                  {copy.source} · {copy.original}
                </summary>
                <p lang="en" className="mt-2">
                  {item.source}
                  {item.translator && (
                    <>
                      <br />
                      {item.translator}
                    </>
                  )}
                </p>
              </details>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-gold text-sm text-lapis-deep"
                >
                  {item.collection ? copy.buy : copy.open}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-5 text-xs text-stone">{copy.record}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Yasawiyya({ locale }: { locale: TranslatedLocale }) {
  const copy = pageCopy[locale];
  const supplement = yasawiyyaSupplements[locale];
  const chapters = yasawiyyaJourney.map((chapter, index) => ({
    ...chapter,
    ...yasawiyyaTranslations[locale][index],
  }));
  return (
    <>
      <nav aria-label={copy.timeline} className="border-b border-gold/30 bg-parchment">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-5 lg:px-8">
          {supplement.route.map(([date, event, place], index) => (
            <a
              key={event}
              href={`#${yasawiyyaRoute[index][3]}`}
              className="min-w-0 border-r border-gold/30 px-3 py-5"
            >
              <p className="text-xs text-gold">{date}</p>
              <p className="mt-2 font-serif text-lg text-lapis-deep">{event}</p>
              <p className="mt-2 text-xs text-stone">{place}</p>
            </a>
          ))}
        </div>
      </nav>
      <section className="border-b border-gold/30 bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {yasawiyyaEvidenceKey.map((item, index) => (
            <div key={item.label}>
              <h2 className="font-serif text-xl text-lapis-deep">
                {evidenceLabels[locale][item.label]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {copy.evidenceDescriptions[index]}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:px-8">
        <article className="min-w-0">
          <header className="max-w-3xl border-b border-gold/30 pb-10">
            <h2 className="font-serif text-3xl leading-tight text-lapis-deep">{copy.storyTitle}</h2>
            {copy.storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-relaxed text-stone">
                {paragraph}
              </p>
            ))}
          </header>
          {chapters.map((chapter) => (
            <section
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-24 border-b border-gold/30 py-12"
            >
              <p className="text-xs text-gold">
                {chapter.number} · {chapter.era} · {chapter.place}
              </p>
              <p className="mt-3 text-xs text-stone">{evidenceLabels[locale][chapter.register]}</p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-lapis-deep md:text-4xl">
                {chapter.title}
              </h2>
              <p className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed text-lapis-deep">
                {chapter.opening}
              </p>
              {chapter.visual && (
                <figure className="my-8">
                  <img
                    src={chapter.visual === "mausoleum" ? mausoleumImage : hikmetImage}
                    alt={chapter.visual === "mausoleum" ? copy.mausoleumAlt : copy.hikmetAlt}
                    loading="lazy"
                    className="max-h-[32rem] w-full object-cover"
                  />
                  <figcaption className="mt-3 text-xs leading-relaxed text-stone">
                    {chapter.visual === "mausoleum" ? copy.mausoleumCaption : copy.hikmetCaption}{" "}
                    <a
                      className="underline"
                      href={
                        chapter.visual === "mausoleum"
                          ? "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg"
                          : "https://commons.wikimedia.org/wiki/File:Ahmad_Yasawi_hikmat,_1900s_(2024-04-02).jpg"
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {chapter.visual === "mausoleum" ? "Petar Milošević" : "Vyacheslav Kirillin"} /
                      Wikimedia Commons · CC BY-SA 4.0
                    </a>
                    {" · "}
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      {locale === "uz" ? "Litsenziya" : "Лицензия"}
                    </a>
                    {" · "}
                    {locale === "uz"
                      ? "Ko‘rsatish uchun o‘lchami moslangan."
                      : "Размер адаптирован для показа."}
                  </figcaption>
                </figure>
              )}
              <div className="max-w-3xl space-y-6 pt-6 text-lg leading-relaxed text-stone">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="mt-7 max-w-3xl border-l-4 border-gold bg-parchment p-5">
                <h3 className="text-xs text-gold">{copy.boundary}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{chapter.boundary}</p>
              </aside>
              <div className="mt-7">
                <h3 className="text-xs text-gold">{copy.sources}</h3>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-stone">
                  {chapter.sources.map((source) => (
                    <li key={source.label}>
                      {source.href ? (
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          {source.label}
                        </a>
                      ) : (
                        source.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </article>
        <nav
          aria-label={copy.contents}
          className="order-first h-fit border-y border-gold/30 py-5 lg:sticky lg:top-24 lg:order-last"
        >
          <h2 className="font-serif text-xl text-lapis-deep">{copy.contents}</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className="hover:underline">
                  {chapter.number} · {chapter.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#successors">{copy.successors}</a>
            </li>
            <li>
              <a href="#sources">{copy.sources}</a>
            </li>
          </ol>
          <div className="mt-8 border-t border-gold/30 pt-5">
            <h2 className="font-serif text-xl text-lapis-deep">
              {locale === "uz" ? "Yasi / Turkiston" : "Ясы / Туркестан"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">{supplement.geography}</p>
            <a href="/map" className="mt-3 block text-sm underline">
              {supplement.geographyLink} · {copy.english}
            </a>
            <h2 className="mt-6 font-serif text-xl text-lapis-deep">
              {locale === "uz" ? "Ahmad Yassaviy" : "Ахмад Ясави"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">{supplement.master}</p>
            <a href="/masters/ahmad-yasawi" className="mt-3 block text-sm underline">
              {supplement.biographyLink} · {copy.english}
            </a>
          </div>
        </nav>
      </div>
      <section id="successors" className="scroll-mt-24 bg-lapis-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="font-serif text-3xl">{copy.successors}</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-ivory/80">{copy.successorsIntro}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {yasawiyyaSuccessorRoads.map((road, index) => (
              <article key={road.name} className="border-t border-gold/40 pt-5">
                <h3 className="font-serif text-2xl">{road.name}</h3>
                {copy.successorRows[index].map((text, position) => (
                  <p
                    key={text}
                    className={`mt-3 text-sm leading-relaxed ${position === 2 ? "text-gold" : "text-ivory/80"}`}
                  >
                    {text}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <h2 className="font-serif text-3xl text-lapis-deep">{copy.reading}</h2>
        <h3 className="mt-4 font-serif text-2xl text-lapis-deep">{supplement.readingTitle}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone">
          {supplement.readingIntro}
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {supplement.reading.map(([title, body], index) => (
            <div key={title} className="border-t border-gold/30 pt-4">
              <a
                className="font-serif text-xl underline"
                href={
                  index === 0
                    ? "/study/ahmad-yasawi"
                    : index === 1
                      ? "https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6935.pdf"
                      : localeHref("/masters", locale)
                }
              >
                {title}
                {index === 0 ? ` · ${copy.english}` : ""}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="sources" className="scroll-mt-24 bg-parchment">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <h2 className="font-serif text-3xl text-lapis-deep">{copy.sources}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone">{copy.sourceIntro}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {yasawiyyaPublicSources.map((source, index) => (
              <article key={source.title} className="border-t border-gold/30 pt-5">
                <p className="text-xs text-gold">{copy.sourceKinds[index]}</p>
                <h3 className="mt-2 font-serif text-2xl text-lapis-deep">{source.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{copy.sourceNotes[index]}</p>
                <a
                  className="mt-4 inline-block text-sm underline"
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.open}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
