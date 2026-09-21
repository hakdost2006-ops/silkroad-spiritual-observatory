import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, FileText, Languages, ListChecks } from "lucide-react";
import { Chip, PageHeader, Panel, SectionHeader } from "../components/ui-primitives";
import {
  getProjectBooks,
  getProjectDirections,
  getTranslationProject,
  translationPipeline,
} from "../data/translations";
import { getPublishedTranslationChapter } from "../data/translation-chapters";

export const Route = createFileRoute("/translations/$slug")({
  loader: ({ params }) => {
    const project = getTranslationProject(params.slug);
    if (!project) throw notFound();
    return {
      project,
      books: getProjectBooks(project),
      directions: getProjectDirections(project),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData.project.englishTitle} — Nursafardiyya Translation Library`,
      },
      {
        name: "description",
        content: loaderData.project.rationale,
      },
      {
        property: "og:title",
        content: loaderData.project.englishTitle,
      },
      {
        property: "og:description",
        content: loaderData.project.websiteRole,
      },
    ],
  }),
  component: TranslationProjectPage,
});

function TranslationProjectPage() {
  const { project, books, directions } = Route.useLoaderData();
  const publishedChapter = getPublishedTranslationChapter(project.slug);

  return (
    <div>
      <PageHeader
        eyebrow={`${project.priority} · ${project.status}`}
        title={project.englishTitle}
        intro={project.rationale}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <Link
          to="/translations"
          className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 text-sm text-lapis-deep transition-colors hover:bg-gold/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Translation library
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-8">
          <Panel>
            <div className="flex flex-wrap gap-2">
              <Chip>{project.focus}</Chip>
              {directions.map((direction) => (
                <Chip key={direction.id}>{direction.title}</Chip>
              ))}
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-lapis-deep">
              Why this book belongs in the collection
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">{project.websiteRole}</p>
          </Panel>

          {publishedChapter ? (
            <Panel className="overflow-hidden">
              <SectionHeader
                eyebrow={`${publishedChapter.number} · English Translation`}
                title={publishedChapter.title}
                intro={publishedChapter.source}
              />

              <div className="mt-8 border-l-4 border-gold bg-gold/10 px-5 py-4 text-sm leading-relaxed text-lapis-deep">
                {publishedChapter.note}
              </div>

              <blockquote className="mt-8 border-y border-gold/30 py-6 font-serif text-2xl leading-relaxed text-lapis-deep">
                {publishedChapter.quotation.map((line) => (
                  <p key={line} className="mt-4 first:mt-0">
                    {line}
                  </p>
                ))}
              </blockquote>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone">
                {publishedChapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border-t border-gold/30 pt-7">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  Translator's Notes
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
                  {publishedChapter.decisions.map((decision) => (
                    <li key={decision} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          ) : null}

          <Panel>
            <SectionHeader
              eyebrow="Editorial Path"
              title="From source edition to public English"
              intro="Source text, terminology, English interpretation, and publication-ready translation are kept distinct so readers can understand both the text and its editorial frame."
            />
            <div className="mt-10 space-y-3">
              {project.translationPlan.map((step, index) => (
                <div
                  key={step}
                  className="grid gap-4 border border-gold/25 bg-parchment/40 p-4 sm:grid-cols-[68px_1fr]"
                >
                  <div className="font-serif text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="leading-relaxed text-stone">{step}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader
              eyebrow="English Modules"
              title="What this book will become on the site"
              intro="The finished translation does not have to appear as one long document. It can become a clean set of public knowledge modules."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.publicModules.map((module) => (
                <div key={module} className="border border-gold/25 bg-parchment/40 p-4">
                  <ListChecks className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-serif text-2xl text-lapis-deep">{module}</h3>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader
              eyebrow="Glossary Seeds"
              title="Terms to stabilize before public translation"
              intro="These terms are tracked consistently across breathing, medicine, zikr, and Zurmergan as the English reading collection grows."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {project.glossarySeeds.map((term) => (
                <span
                  key={term}
                  className="border border-gold/35 bg-gold/10 px-3 py-2 font-serif text-lg text-lapis-deep"
                >
                  {term}
                </span>
              ))}
            </div>
          </Panel>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <Panel>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
              <BookOpen className="h-3.5 w-3.5" />
              Source editions
            </div>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-lapis-deep">
              {project.title}
            </h2>
            <div className="mt-5 space-y-3">
              {books.map((book) => (
                <div key={book.id} className="border border-gold/25 bg-parchment/40 p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                    {book.script}
                  </div>
                  <div className="mt-2 font-serif text-xl leading-tight text-lapis-deep">
                    {book.title}
                  </div>
                  <div className="mt-2 text-xs text-stone/70">
                    {book.year} · {book.size}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={book.page}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 border border-gold/40 px-3 py-2 text-xs text-lapis-deep hover:bg-gold/10"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Source
                    </a>
                    <a
                      href={book.download}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 bg-lapis-deep px-3 py-2 text-xs text-ivory hover:bg-lapis"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
              <Languages className="h-3.5 w-3.5" />
              Editorial position
            </div>
            <div className="mt-5 space-y-2">
              {translationPipeline.map((step, index) => (
                <div
                  key={step}
                  className={`border px-3 py-2 text-sm ${
                    index === 0
                      ? "border-gold bg-gold/10 text-lapis-deep"
                      : "border-gold/20 text-stone/70"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </Panel>
        </aside>
      </section>
    </div>
  );
}
