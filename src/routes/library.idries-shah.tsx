import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenText, ExternalLink, ShieldCheck } from "lucide-react";
import { idriesShahLibrary } from "../data/idries-shah-library";
import { Chip, PageHeader, Panel, SectionHeader } from "../components/ui-primitives";

export const Route = createFileRoute("/library/idries-shah")({
  head: () => ({
    meta: [
      { title: "Idries Shah Library — Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "A guided shelf for reading Idries Shah as a modern English-language reception of Sufi literature, with links to official editions.",
      },
      { property: "og:title", content: "Idries Shah Library" },
      {
        property: "og:description",
        content:
          "A source-aware guide to Idries Shah's Sufi books and their relation to Naqshbandi reception.",
      },
    ],
  }),
  component: IdriesShahLibraryPage,
});

function IdriesShahLibraryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Modern reception library"
        title="Idries Shah and the English-language reception of Sufism"
        intro="A guided shelf for an influential twentieth-century interpreter of Sufi stories, ideas, and learning. Each record leads to the rights holder's own edition."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="How to read this shelf"
            title="A bridge, not an archive of proof"
            intro="Shah helped introduce generations of English readers to Sufi literature, teaching stories, and the language of practical wisdom. The Atlas keeps that contribution visible while preserving a distinction between modern reception, historical evidence, and living lineage."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ReadingLens
              label="Reception"
              body="How Sufi material was presented to modern English-language readers."
            />
            <ReadingLens
              label="Story"
              body="A guide to motifs and narrative forms, not permission to reuse a modern retelling."
            />
            <ReadingLens
              label="History"
              body="For masters, dates, silsila, and doctrine, return to early texts and specialist scholarship."
            />
          </div>
        </div>
        <Panel className="border-l-4 border-ruby">
          <ShieldCheck className="h-6 w-6 text-ruby" />
          <h2 className="mt-4 font-serif text-3xl text-lapis-deep">
            Rights and editorial practice
          </h2>
          <p className="mt-4 leading-relaxed text-stone">
            Idries Shah's books and their particular English wording remain copyrighted. This Atlas
            does not host, mirror, or reproduce them. It supplies bibliographic guidance, original
            context, and direct links to the Idries Shah Foundation's editions.
          </p>
        </Panel>
      </section>

      <section className="border-y border-gold/25 bg-parchment py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Selected works"
              title="A working reading shelf"
              intro="Begin with The Sufis and The Way of the Sufi; then follow stories and folklore into their older, locally grounded traditions."
            />
            <a
              href="https://idriesshahfoundation.org/books-sufi-studies-middle-eastern-literature/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border-b border-gold pb-1 text-sm text-lapis-deep hover:text-ruby"
            >
              Browse the Foundation catalogue <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {idriesShahLibrary.map((book) => (
              <article key={book.id} className="border border-gold/25 bg-card p-6">
                <div className="flex flex-wrap gap-2">
                  <Chip>{book.topic}</Chip>
                  {book.order === "naqshbandiyya" && <Chip>Naqshbandi reception</Chip>}
                </div>
                <h2 className="mt-5 font-serif text-3xl text-lapis-deep">{book.title}</h2>
                <p className="mt-1 text-sm italic text-stone">{book.author}</p>
                <p className="mt-4 leading-relaxed text-stone">{book.description}</p>
                {book.detailedOverview && (
                  <details className="mt-5 border-y border-gold/20 py-4">
                    <summary className="cursor-pointer font-serif text-lg text-lapis-deep marker:text-gold">
                      Detailed overview
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-stone">
                      {book.detailedOverview}
                    </p>
                  </details>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Chip key={tag}>{tag.replaceAll("-", " ")}</Chip>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gold/20 pt-4">
                  <span className="max-w-sm text-xs text-stone">{book.source}</span>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 text-lapis-deep hover:text-ruby"
                    >
                      Official edition <ArrowRight className="h-4 w-4" />
                    </a>
                    {book.amazonUrl && (
                      <a
                        href={book.amazonUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 text-lapis-deep hover:text-ruby"
                      >
                        Find on Amazon <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Naqshbandiyya"
            title="Where Shah meets the Atlas"
            intro="The Way of the Sufi includes a modern account of the Naqshbandi order. It belongs here as part of the story of global reception, while historical master biographies, shrine geography, and transmission remain grounded in the Atlas's Central Asian source base."
          />
        </div>
        <Panel>
          <BookOpenText className="h-6 w-6 text-gold" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            For a scholarly account of Shah's career and the modern Sufi psychology associated with
            his reception, consult Mark Sedgwick's chapter, "Idries Shah and Sufi Psychology," in
            <em> Western Sufism: From the Abbasids to the New Age</em>.
          </p>
          <a
            href="https://academic.oup.com/book/12370/chapter-abstract/161958881"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
          >
            Read the scholarly record <ExternalLink className="h-4 w-4" />
          </a>
        </Panel>
      </section>

      <section className="border-t border-gold/25 bg-parchment py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Living tradition"
            title="A contemporary Naqshbandiyya-Mujaddidiyya source"
            intro="The Golden Sufi Center presents its own living lineage, teaching vocabulary, and ethical orientation. These materials belong in the Atlas as self-described contemporary practice, not as a substitute for independent historical documentation."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <LivingSource
              title="About the Center"
              body="The Center describes its work as making the teachings of the Naqshbandiyya-Mujaddidiyya available to a worldwide community."
              href="https://goldensufi.org/about/"
            />
            <LivingSource
              title="Golden Chain"
              body="A published chain through the Mujaddidi line to its present teachers. Read as the Center's own lineage record."
              href="https://goldensufi.org/about/naqshbandiyya-mujaddidiyya-golden-chain/"
            />
            <LivingSource
              title="Heart Meditation"
              body="An account of silent dhikr, meditation of the heart, and teacher-disciple companionship in contemporary practice."
              href="https://goldensufi.org/article/the-sufi-meditation-of-the-heart/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ReadingLens({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-gold bg-card p-5">
      <div className="font-serif text-2xl text-lapis-deep">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
    </div>
  );
}

function LivingSource({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <article className="border border-gold/25 bg-card p-6">
      <h3 className="font-serif text-2xl text-lapis-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
      >
        Visit source <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  );
}
