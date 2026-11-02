import { ArrowRight, ExternalLink } from "lucide-react";
import { getProjectBooks, getProjectDirections, translationProjects } from "../data/translations";
import { chrome, type TranslatedLocale } from "../i18n/locale";
import { translationIndexCopy } from "../i18n/translation-index";

export function LocalizedTranslationIndex({ locale }: { locale: TranslatedLocale }) {
  const copy = translationIndexCopy[locale];
  return (
    <div>
      <header className="border-b border-gold/30 bg-parchment">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs text-gold">{copy.library}</p>
          <h1 className="mt-5 max-w-5xl font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone">{copy.intro}</p>
        </div>
      </header>
      <p className="mx-auto max-w-7xl px-5 py-4 text-xs leading-relaxed text-stone lg:px-8">
        {chrome[locale].notice}{" "}
        <a href="/translations" className="underline">
          {chrome[locale].english}
        </a>
      </p>
      <section
        className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
        aria-label={copy.sequence}
      >
        {["4", "3", "14", copy.english].map((value, index) => (
          <div key={index} className="border-t border-gold/30 pt-4">
            <p className="font-serif text-3xl text-lapis-deep">{value}</p>
            <p className="mt-2 text-sm text-stone">{copy.metrics[index]}</p>
          </div>
        ))}
      </section>
      <section className="bg-lapis-deep text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs text-gold">{copy.method}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">{copy.methodTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">{copy.methodBody}</p>
          </div>
          <ol className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {copy.steps.map((step, index) => (
              <li key={step} className="border-t border-gold/30 pt-4">
                <p className="text-xs text-gold">
                  {copy.step} {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-serif text-xl">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <p className="text-xs text-gold">{copy.sequence}</p>
        <h2 className="mt-4 font-serif text-3xl text-lapis-deep">{copy.sequenceTitle}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone">{copy.sequenceBody}</p>
        <div className="mt-10 divide-y divide-gold/30 border-y border-gold/30">
          {translationProjects.map((project) => {
            const text = copy.projects[project.slug as keyof typeof copy.projects];
            return (
              <article
                key={project.slug}
                className="grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_16rem]"
              >
                <div className="min-w-0">
                  <p className="text-sm text-gold">
                    {text.priority} · {text.status}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-lapis-deep">
                    {text.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-stone" lang="uz">
                    {project.title}
                  </p>
                  <p className="mt-4 text-sm text-stone">{text.focus}</p>
                  <p className="mt-4 text-lg leading-relaxed text-stone">{text.rationale}</p>
                  <p className="mt-4 leading-relaxed text-stone">{text.role}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone">
                    {getProjectDirections(project).map((direction) => (
                      <li key={direction.id}>
                        {copy.directions[direction.id as keyof typeof copy.directions]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-lapis-deep">{copy.source}</h4>
                  <ul className="mt-4 space-y-4 text-sm leading-relaxed text-stone">
                    {getProjectBooks(project).map((book) => (
                      <li key={book.id}>
                        <a href={book.page} target="_blank" rel="noreferrer" className="underline">
                          {copy.scripts[book.script === "Latin Uzbek" ? "Latin" : "Cyrillic"]}:{" "}
                          {book.year}{" "}
                          <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/translations/${project.slug}`}
                    lang={locale}
                    className="mt-6 inline-block text-sm leading-relaxed text-lapis-deep underline"
                  >
                    {copy.open} <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                    <br />
                    {copy.englishPage}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:px-8">
          {copy.principles.map(([title, body]) => (
            <div key={title}>
              <h2 className="font-serif text-2xl text-lapis-deep">{title}</h2>
              <p className="mt-4 leading-relaxed text-stone">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
