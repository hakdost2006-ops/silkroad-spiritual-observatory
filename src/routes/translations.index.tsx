import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Languages, Layers3 } from "lucide-react";
import { Chip, PageHeader, SectionHeader } from "../components/ui-primitives";
import {
  getProjectBooks,
  getProjectDirections,
  translationPipeline,
  translationProjects,
} from "../data/translations";

export const Route = createFileRoute("/translations/")({
  head: () => ({
    meta: [
      { title: "Translation Library — Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "Translation pipeline for the Nursafardiyya Uzbek book archive: source PDFs, glossary, English summaries, and future public teaching pages.",
      },
      { property: "og:title", content: "Nursafardiyya Translation Library" },
      {
        property: "og:description",
        content:
          "A translation-ready library for Nursafardiyya books, beginning with respiration, medicine, and Zurmergan.",
      },
    ],
  }),
  component: TranslationLibraryPage,
});

function TranslationLibraryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Translation Library"
        title="From Uzbek source books to English teaching pages"
        intro="This is the working bridge between the official Nursafardiyya PDFs and the public English portal: each book becomes source metadata, extracted text, glossary, summary, translation draft, and finally a readable teaching page."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["4", "foundation projects"],
            ["3", "core knowledge fields"],
            ["14", "Qatron directions"],
            ["English", "public layer"],
          ].map(([value, label]) => (
            <div key={label} className="border border-gold/25 bg-card p-5">
              <div className="font-serif text-4xl text-lapis-deep">{value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone/65">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lapis-deep py-18 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Working Method
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-gold-soft">
                A disciplined translation pipeline
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/70">
                The site should not jump from PDF to public claim. Every text
                moves through a careful sequence so the English portal remains
                readable, sourced, and honest about what is still in progress.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {translationPipeline.map((step, index) => (
                <div key={step} className="border border-gold/25 bg-ivory/[0.04] p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-serif text-2xl text-gold-soft">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Foundation Sequence"
          title="Translate the spine first"
          intro="The first English layer should follow breath, healing, and martial discipline. That gives the portal a coherent base before we translate poetry, history, and specialized movement manuals."
        />
        <div className="mt-12 space-y-5">
          {translationProjects.map((project) => {
            const books = getProjectBooks(project);
            const directions = getProjectDirections(project);
            return (
              <article
                key={project.slug}
                className="grid gap-6 border border-gold/25 bg-card p-6 md:grid-cols-[1fr_280px]"
              >
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Chip>{project.priority}</Chip>
                    <Chip>{project.status}</Chip>
                    <Chip>{project.focus}</Chip>
                  </div>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-lapis-deep">
                    {project.englishTitle}
                  </h2>
                  <div className="mt-2 text-sm italic text-stone/75">{project.title}</div>
                  <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone">
                    {project.rationale}
                  </p>
                  <p className="mt-4 max-w-4xl leading-relaxed text-stone/80">
                    {project.websiteRole}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {directions.map((direction) => (
                      <Chip key={direction.id}>{direction.title}</Chip>
                    ))}
                  </div>
                </div>
                <div className="border border-gold/25 bg-parchment/45 p-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                    <BookOpen className="h-3.5 w-3.5" />
                    Source editions
                  </div>
                  <div className="mt-4 space-y-2">
                    {books.map((book) => (
                      <a
                        key={book.id}
                        href={book.page}
                        target="_blank"
                        rel="noreferrer"
                        className="block border border-gold/25 px-3 py-2 text-xs leading-relaxed text-stone hover:border-gold"
                      >
                        {book.script}: {book.year}
                      </a>
                    ))}
                  </div>
                  <Link
                    to="/translations/$slug"
                    params={{ slug: project.slug }}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-lapis-deep px-4 py-3 text-sm text-ivory transition-colors hover:bg-lapis"
                  >
                    Open project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gold/25 bg-card p-8">
              <Languages className="h-8 w-8 text-gold" />
              <h2 className="mt-5 font-serif text-3xl text-lapis-deep">
                Translation principle
              </h2>
              <p className="mt-4 leading-relaxed text-stone">
                Translate for understanding first, polish for beauty second, and
                keep uncertain terms visible until the glossary settles.
              </p>
            </div>
            <div className="border border-gold/25 bg-card p-8">
              <Layers3 className="h-8 w-8 text-gold" />
              <h2 className="mt-5 font-serif text-3xl text-lapis-deep">
                Website principle
              </h2>
              <p className="mt-4 leading-relaxed text-stone">
                Every translation should feed a public knowledge room: breath,
                medicine, Zurmergan, Qatron directions, teachers, or source archive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
