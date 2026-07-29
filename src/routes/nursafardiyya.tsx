import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowRight,
  BookOpen,
  Building2,
  FileText,
  GitBranch,
  HeartPulse,
  Languages,
  MapPin,
  Sword,
} from "lucide-react";
import {
  nursafardiyyaArchive,
  nursafardiyyaCenters,
  nursafardiyyaPractices,
  nursafardiyyaTeachers,
  silsilaNodes,
  zurmerganPrinciples,
} from "../data/nursafardiyya";
import {
  nursafardiyyaKnowledgeDirections,
  nursafardiyyaKnowledgeStats,
} from "../data/nursafardiyya-knowledge";
import { nursafardiyyaUzbekBooks } from "../data/nursafardiyya-uzbek-books";
import { Chip, Ornament, Panel, SectionHeader } from "../components/ui-primitives";
import manuscriptImg from "../assets/manuscript-texture.jpg";
import mapImg from "../assets/silk-road-map.jpg";
import nursafardiyyaEmblemImg from "../assets/nursafardiyya-emblem.png";

export const Route = createFileRoute("/nursafardiyya")({
  head: () => ({
    meta: [
      { title: "Nursafardiyya Sufi School — Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "A dedicated portal for the contemporary Uzbek Nursafardiyya tradition: Ilahism, Zikr, Sema, breathwork, healing, herbal wellness, martial arts, centers, and archive.",
      },
      { property: "og:title", content: "Nursafardiyya Sufi School" },
      {
        property: "og:description",
        content:
          "A contemporary Uzbek Sufi school of Zikr, Sema, breathwork, healing, sacred letters, martial arts, and archive.",
      },
    ],
  }),
  component: NursafardiyyaPage,
});

const featured = nursafardiyyaArchive.slice(0, 6);
const localCollected = nursafardiyyaArchive.filter((item) => item.source.includes("Local"));
const portalIndex = [
  { label: "Ilahism", href: "#ilahism" },
  { label: "Zikr & Sema", href: "#zikr-sema" },
  { label: "Respiration", href: "#respiration" },
  { label: "Sufi Healing", href: "#healing" },
  { label: "Zurmergan", href: "#martial-arts" },
  { label: "14 Directions", href: "#qatron-school" },
  { label: "Teachers", href: "#teachers" },
  { label: "Centers", href: "#centers" },
  { label: "Uzbek Books", href: "#uzbek-books" },
  { label: "Translations", href: "#translations" },
];

const uzbekBookTopics = Array.from(
  new Set(nursafardiyyaUzbekBooks.map((book) => book.topic)),
);

const uzbekBookStats = [
  { value: nursafardiyyaUzbekBooks.length, label: "official Uzbek PDFs" },
  { value: nursafardiyyaUzbekBooks.length / 2, label: "Cyrillic + Latin pairs" },
  { value: "2003-2019", label: "publication span" },
  { value: uzbekBookTopics.length, label: "subject clusters" },
];

const knowledgeStats = [
  { value: nursafardiyyaKnowledgeStats.directions, label: "Qatron directions" },
  {
    value: nursafardiyyaKnowledgeStats.mappedBooks,
    label: "books mapped into directions",
  },
  {
    value: nursafardiyyaKnowledgeStats.directionsWithBooks,
    label: "directions already sourced",
  },
  { value: "English", label: "translation layer planned" },
];

const sourceCards = [
  {
    title: "Qatron. Sufi School of Perfection",
    detail:
      "Official 2007 brochure used for Safarboy Kushkarov, Yassaviyya connection, Qatron's 14 directions, and martial-arts framing.",
    href: "https://nursafardiyya.com/en/349/",
  },
  {
    title: "Murshid-Murid Relationship in Nursafardiyya",
    detail:
      "Official 2006 practical handbook used for teacher-student conduct, Qatron study, and Zurmergan references.",
    href: "https://nursafardiyya.com/en/348/",
  },
  {
    title: "Zurmergan Sufiy Martial Arts in Pictures",
    detail:
      "Official 2012 illustrated manual credited to Ulugbek Kushkarov, used for the Zurmergan master-study note.",
    href: "https://nursafardiyya.com/en/67/",
  },
  {
    title: "Official Nursafardiyya Archive",
    detail:
      "Books and brochures index used for publication dates, categories, archive hierarchy, and file source links.",
    href: "https://nursafardiyya.com/en/file-archive/books/",
  },
  {
    title: "Official Uzbek Book Archive",
    detail:
      "Uzbek-language Nursafardiyya archive used for the 28-book Cyrillic and Latin corpus, with years, sizes, source pages, and public PDF links.",
    href: "https://nursafardiyya.com/file-archive/books/#top",
  },
];
const nursafardiyyaBridgeNodes = silsilaNodes.filter((node) =>
  ["yusuf-hamadani", "ahmad-yasawi", "nursafardiyya"].includes(node.id),
);
const yasawiMausoleumImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/%D0%9C%D0%B0%D1%83%D0%B7%D0%BE%D0%BB%D0%B5%D1%98_%D0%A5%D0%BE%D0%B4%D0%B6%D0%B5_%D0%90%D1%85%D0%BC%D0%B5%D0%B4%D0%B0_%D0%88%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%98%D0%B0_%28%D0%B3%D1%80%D0%B0%D0%B4_%D0%A2%D1%83%D1%80%D0%BA%D0%B5%D1%81%D1%82%D0%B0%D0%BD%2C_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%29.jpg/960px-%D0%9C%D0%B0%D1%83%D0%B7%D0%BE%D0%BB%D0%B5%D1%98_%D0%A5%D0%BE%D0%B4%D0%B6%D0%B5_%D0%90%D1%85%D0%BC%D0%B5%D0%B4%D0%B0_%D0%88%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%98%D0%B0_%28%D0%B3%D1%80%D0%B0%D0%B4_%D0%A2%D1%83%D1%80%D0%BA%D0%B5%D1%81%D1%82%D0%B0%D0%BD%2C_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%29.jpg";

function teacherImageSrc(imageKey: string) {
  if (imageKey === "yasawi-mausoleum") return yasawiMausoleumImg;
  return nursafardiyyaEmblemImg;
}

function NursafardiyyaPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-lapis-deep text-ivory">
        <img
          src={manuscriptImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-lapis-deep via-lapis-deep/95 to-ruby/40" />
        <div className="absolute inset-0 bg-star-tile opacity-[0.09]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center border border-gold/45 bg-ivory/10 p-3 backdrop-blur">
                  <img
                    src={nursafardiyyaEmblemImg}
                    alt="Nursafardiyya emblem"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.35em] text-gold">
                    Contemporary Uzbek Sufi School
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-ivory/55">
                    Official symbol and archive portal
                  </div>
                </div>
              </div>
              <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.98] md:text-8xl">
                Nursafardiyya
                <span className="block text-4xl italic text-gold-soft md:text-6xl">
                  Sufi school
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85 md:text-xl">
                A contemporary Uzbek Sufi tradition of Ilahism, Zikr, Sema,
                breathwork, sacred letters, ancestral medicine, herbal wellness,
                Qatron pedagogy, and Zurmergan Sufi martial arts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/silsila"
                  className="inline-flex items-center gap-2 bg-gold px-5 py-3 text-lapis-deep hover:bg-gold-soft transition-colors"
                >
                  Trace the Silsila <GitBranch className="h-4 w-4" />
                </Link>
                <a
                  href="#archive"
                  className="inline-flex items-center gap-2 border border-gold/50 px-5 py-3 text-ivory hover:bg-gold/10 transition-colors"
                >
                  Open the Archive <Archive className="h-4 w-4" />
                </a>
                <Link
                  to="/translations"
                  className="inline-flex items-center gap-2 border border-gold/50 px-5 py-3 text-ivory hover:bg-gold/10 transition-colors"
                >
                  Translation Library <Languages className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-6 max-w-xl text-xs leading-relaxed text-ivory/60">
                Healing and herbal materials are presented as cultural,
                traditional wellness, and archival resources. They are not
                medical advice or a substitute for professional care.
              </p>
            </div>

            <div className="border border-gold/40 bg-lapis-deep/70 p-6 backdrop-blur">
              <div className="mb-6 flex items-center gap-4 border-b border-gold/25 pb-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-ivory/95 p-2">
                  <img
                    src={nursafardiyyaEmblemImg}
                    alt="Nursafardiyya emblem"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-serif text-2xl leading-tight text-gold-soft">
                    Nursafardiyya Sufi School
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-ivory/60">
                    The emblem anchors this portal in the school’s own visual identity.
                  </div>
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Portal Index
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {portalIndex.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border border-gold/25 px-3 py-3 text-sm text-ivory/80 hover:border-gold hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Knowledge Architecture"
          title="A living Uzbek archive of practice"
          intro="Instead of one flat page, Nursafardiyya is now structured as a knowledge portal: doctrine, practice, healing, martial discipline, archive, centers, and lineage."
        />
        <Ornament className="my-12" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nursafardiyyaPractices.map((practice) => (
            <Panel key={practice.slug} className="relative overflow-hidden">
              <div id={practice.slug} className="absolute -top-24" />
              <div className="text-[10px] uppercase tracking-[0.26em] text-gold">
                {practice.kicker}
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-lapis-deep">
                {practice.title}
              </h2>
              <p className="mt-4 leading-relaxed text-stone">{practice.body}</p>
              <p className="mt-5 border-t border-gold/25 pt-4 text-xs leading-relaxed text-stone/75">
                {practice.sourceNote}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Silsila Bridge
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-lapis-deep">
                A Yassaviyya bridge into a contemporary Uzbek tradition
              </h2>
              <p className="mt-6 leading-relaxed text-stone">
                The Nursafardiyya materials point to Hoja Ahmad Yassaviy as the
                spiritual teacher honored by Sufi Tabib. In this atlas,
                Nursafardiyya is therefore connected directly to the Yassaviyya
                stream only. Kubrawiyya and Naqshbandiyya remain neighboring
                Central Asian orders, not direct Nursafardiyya lineage links.
              </p>
              <Link
                to="/silsila"
                className="mt-8 inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory hover:bg-lapis transition-colors"
              >
                Open Silsila Map <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[420px] overflow-hidden border-4 border-lapis-deep bg-lapis-deep">
              <img src={mapImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-star-tile opacity-[0.08]" />
              {nursafardiyyaBridgeNodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 border border-gold/40 bg-lapis-deep/85 px-3 py-2 text-ivory"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <div className="text-[9px] uppercase tracking-[0.22em] text-gold">
                    {node.order}
                  </div>
                  <div className="font-serif text-lg leading-tight">{node.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Teachers and Transmission"
          title="Ahmad Yassaviy first, then the living transmitters"
          intro="The page now starts the Nursafardiyya lineage story with Ahmad Yassaviy, then follows the modern teachers and authors named in the official archive."
        />
        <div className="mt-12 space-y-8">
          {nursafardiyyaTeachers.map((teacher, index) => (
            <article
              key={teacher.name}
              className="grid overflow-hidden border border-gold/25 bg-card md:grid-cols-[minmax(280px,0.72fr)_1.28fr]"
            >
              <div className="relative min-h-[320px] bg-lapis-deep">
                <img
                  src={teacherImageSrc(teacher.imageKey)}
                  alt={teacher.imageCaption}
                  className={`absolute inset-0 h-full w-full ${
                    teacher.imageKey === "yasawi-mausoleum"
                      ? "object-cover"
                      : "object-contain p-12 opacity-90"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lapis-deep/90 via-lapis-deep/15 to-transparent" />
                {teacher.imageKey !== "yasawi-mausoleum" && (
                  <div className="absolute inset-0 bg-star-tile opacity-[0.08]" aria-hidden />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex border border-gold/50 bg-lapis-deep/80 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-gold">
                    {String(index + 1).padStart(2, "0")} · Master profile
                  </div>
                  <p className="mt-3 max-w-sm text-xs leading-relaxed text-ivory/75">
                    {teacher.imageCaption}
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                  {teacher.role}
                </div>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep">
                  {teacher.name}
                </h2>
                <div className="mt-2 text-sm italic text-stone/80">
                  {teacher.honorific} · {teacher.period} · {teacher.place}
                </div>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone">
                  {teacher.description}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {teacher.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="border border-gold/25 bg-parchment/45 p-4 text-sm leading-relaxed text-stone"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-gold/25 pt-4 text-xs leading-relaxed text-stone/70">
                  Source note: {teacher.sourceNote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="qatron-school" className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Qatron Knowledge Architecture
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-gold-soft">
                Fourteen directions as the future English portal
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/75">
                The best structure is not a long list of PDFs. The Qatron
                directions become the site's knowledge rooms: each one gathers
                Uzbek source books, English summaries, translation status,
                visual material, and careful practice boundaries.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {knowledgeStats.map((stat) => (
                  <div key={stat.label} className="border border-gold/25 bg-ivory/[0.04] p-4">
                    <div className="font-serif text-3xl text-gold-soft">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-gold/25 bg-ivory/[0.04] p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold">
                  Translation model
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  Each book can move from Uzbek PDF to extracted text, bilingual
                  glossary, English chapter summary, verified translation, and
                  finally a public teaching page connected to one or more
                  Qatron directions.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {nursafardiyyaKnowledgeDirections.map((direction) => (
                <article
                  key={direction.id}
                  className="grid gap-5 border border-gold/25 bg-ivory/[0.04] p-5 md:grid-cols-[1fr_280px]"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-gold">
                      Direction {String(direction.number).padStart(2, "0")} ·{" "}
                      {direction.translationPriority}
                    </div>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-gold-soft">
                      {direction.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                      {direction.qatronDescription}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ivory/85">
                      {direction.designIntent}
                    </p>
                    <div className="mt-5 border-l border-gold/40 pl-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                        Portal question
                      </div>
                      <p className="mt-2 text-sm italic leading-relaxed text-ivory/70">
                        {direction.portalQuestion}
                      </p>
                    </div>
                  </div>
                  <div className="border border-gold/20 bg-lapis-deep/35 p-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      Source books
                    </div>
                    {direction.books.length > 0 ? (
                      <div className="mt-3 space-y-2">
                        {direction.books.slice(0, 4).map((book) => (
                          <a
                            key={book.id}
                            href={book.page}
                            target="_blank"
                            rel="noreferrer"
                            className="block border border-gold/15 px-3 py-2 text-xs leading-relaxed text-ivory/75 transition-colors hover:border-gold hover:text-gold-soft"
                          >
                            {book.title}
                          </a>
                        ))}
                        {direction.books.length > 4 && (
                          <div className="text-xs text-ivory/50">
                            +{direction.books.length - 4} more source books
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="mt-3 text-xs leading-relaxed text-ivory/55">
                        Waiting for matching source PDFs or local archive
                        extraction.
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {direction.englishModules.slice(0, 3).map((module) => (
                        <span
                          key={module}
                          className="border border-gold/20 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory/60"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="zurmergan" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div id="martial-arts" className="absolute -mt-24" />
        <SectionHeader
          eyebrow="Zurmergan Lineage"
          title="Sufi martial arts as disciplined transmission"
          intro="The official materials frame Zurmergan as a serious master-guided system, not a performance layer. It belongs in the portal as a dedicated strand with teacher, manual, principles, and safety boundaries."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {zurmerganPrinciples.map((principle) => (
            <Panel key={principle.title}>
              <Sword className="h-7 w-7 text-gold" />
              <h2 className="mt-4 font-serif text-2xl leading-tight text-lapis-deep">
                {principle.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {principle.description}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      <section id="uzbek-books" className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Uzbek Book Corpus
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-lapis-deep">
                Twenty-eight public books from the official archive
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                The Uzbek Nursafardiyya archive is the source layer beneath the
                14-direction portal. Each PDF can become a structured knowledge
                object: source metadata, Uzbek text, glossary, English summary,
                translation draft, and finally a public teaching page.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {uzbekBookStats.map((stat) => (
                  <div key={stat.label} className="border border-gold/25 bg-card p-4">
                    <div className="font-serif text-3xl text-lapis-deep">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone/65">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {uzbekBookTopics.map((topic) => (
                  <Chip key={topic}>{topic}</Chip>
                ))}
              </div>
              <a
                href="https://nursafardiyya.com/file-archive/books/#top"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory hover:bg-lapis transition-colors"
              >
                Open official Uzbek archive <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {nursafardiyyaUzbekBooks.map((book, index) => (
                <article
                  key={book.id}
                  className="group overflow-hidden border border-gold/25 bg-card transition-colors hover:border-gold"
                >
                  <div className="grid sm:min-h-44 sm:grid-cols-[116px_1fr]">
                    <div className="relative min-h-36 bg-lapis-deep p-4 text-ivory sm:min-h-0">
                      <div className="absolute inset-0 bg-star-tile opacity-[0.08]" />
                      <img
                        src={nursafardiyyaEmblemImg}
                        alt=""
                        className="absolute bottom-3 right-3 h-12 w-12 object-contain opacity-30"
                      />
                      <div className="relative text-[10px] uppercase tracking-[0.24em] text-gold">
                        Book {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative mt-8 font-serif text-3xl leading-none text-gold-soft">
                        {book.year}
                      </div>
                      <div className="relative mt-3 text-xs leading-relaxed text-ivory/70">
                        {book.script.replace(" Uzbek", "")}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        <Chip>{book.topic}</Chip>
                        <Chip>{book.size}</Chip>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl leading-tight text-lapis-deep">
                        {book.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone">
                        {book.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex border-t border-gold/20">
                    <a
                      href={book.page}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm text-lapis-deep transition-colors hover:bg-gold/10"
                    >
                      <FileText className="h-4 w-4" />
                      Source
                    </a>
                    <a
                      href={book.download}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 border-l border-gold/20 bg-lapis-deep px-4 py-3 text-sm text-ivory transition-colors hover:bg-lapis"
                    >
                      <BookOpen className="h-4 w-4" />
                      PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="translations" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid gap-10 border border-gold/25 bg-card p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Translation Library
            </div>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-lapis-deep">
              The next layer is English knowledge
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              The Uzbek archive now has a translation pathway. We begin with
              respiration, medicine, and Zurmergan so the portal gains a clear
              foundation before expanding into poetry, history, and specialized
              movement manuals.
            </p>
            <Link
              to="/translations"
              className="mt-8 inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory transition-colors hover:bg-lapis"
            >
              Open translation library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Phase 1", "Nursafardiyya Respiration", "Breath, zikr, attention, method"],
              ["Phase 2", "Sufi Medicine", "Traditional wellness and cultural healing"],
              ["Phase 3", "Sufi Martial Art", "Zurmergan, movement, discipline"],
              ["Phase 4", "Illustrated Zurmergan", "Visual plates and movement vocabulary"],
            ].map(([phase, title, detail]) => (
              <div key={title} className="border border-gold/25 bg-parchment/45 p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  {phase}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-lapis-deep">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div id="books" className="absolute -mt-24" />
        <SectionHeader
          eyebrow="Books and Downloads"
          title="Nursafardiyya archive stack"
          intro="Official online archive items are combined with the local PDF collection found on this computer. Links currently point to source pages; direct file downloads can be attached as the rights and file locations are finalized."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.id}
              className="grid gap-5 border border-gold/25 bg-card p-6 md:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap gap-2">
                  <Chip>{item.format}</Chip>
                  <Chip>{item.topic}</Chip>
                  <Chip>{item.language}</Chip>
                </div>
                <h2 className="mt-4 font-serif text-2xl leading-tight text-lapis-deep">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
                <div className="mt-4 text-xs text-stone/70">Source: {item.source}</div>
              </div>
              <a
                href={item.href ?? "#"}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noreferrer" : undefined}
                className="inline-flex h-fit items-center justify-center gap-2 bg-lapis-deep px-4 py-2.5 text-sm text-ivory hover:bg-lapis transition-colors"
              >
                <FileText className="h-4 w-4" />
                Source
              </a>
            </article>
          ))}
        </div>
        <Link
          to="/library"
          className="mt-8 inline-flex items-center gap-2 border border-gold/50 px-5 py-3 text-lapis-deep hover:bg-gold/10 transition-colors"
        >
          Browse all {nursafardiyyaArchive.length} Nursafardiyya items <BookOpen className="h-4 w-4" />
        </Link>
      </section>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Source Trail"
            title="What this scroll page is based on"
            intro="The current version uses the official Nursafardiyya archive and extracted notes from public PDFs. The next layer can add page-level citations, cover images, and downloadable public files where sharing rights are clear."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sourceCards.map((source) => (
              <article key={source.title} className="border border-gold/25 bg-card p-6">
                <h2 className="font-serif text-2xl leading-tight text-lapis-deep">
                  {source.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {source.detail}
                </p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep border-b border-gold"
                >
                  Open source <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="centers" className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-3 flex items-center gap-3">
              <span>Centers in Uzbekistan</span>
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-gold-soft text-balance leading-[1.05]">
              Active places of practice and wellness
            </h2>
            <p className="mt-5 text-ivory/75 leading-relaxed text-lg text-balance">
              The official Nursafardiyya contact page lists a main Tashkent/Kibray center and branch offices in Sirdarya, Bukhara, and Fergana.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {nursafardiyyaCenters.map((center) => (
              <article key={`${center.city}-${center.title}`} className="border border-gold/30 bg-ivory/[0.04] p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                      {center.region}
                    </div>
                    <h2 className="mt-2 font-serif text-3xl leading-tight text-gold-soft">
                      {center.city}
                    </h2>
                    <p className="mt-2 text-sm text-ivory/80">{center.title}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-ivory/75">{center.description}</p>
                <div className="mt-5 flex items-start gap-2 text-sm text-ivory/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{center.address}</span>
                </div>
                {center.phones && (
                  <div className="mt-4 text-sm text-gold-soft">{center.phones.join(" · ")}</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Panel>
            <HeartPulse className="h-7 w-7 text-gold" />
            <h2 className="mt-4 font-serif text-3xl text-lapis-deep">Healing boundary</h2>
            <p className="mt-3 text-stone leading-relaxed">
              Healing texts are framed as cultural and traditional wellness archives,
              with clear language around safety and medical claims.
            </p>
          </Panel>
          <Panel>
            <Sword className="h-7 w-7 text-gold" />
            <h2 className="mt-4 font-serif text-3xl text-lapis-deep">Martial boundary</h2>
            <p className="mt-3 text-stone leading-relaxed">
              Martial arts materials should become visual learning pages with posture
              plates, context, and careful practice disclaimers.
            </p>
          </Panel>
          <Panel>
            <Archive className="h-7 w-7 text-gold" />
            <h2 className="mt-4 font-serif text-3xl text-lapis-deep">Archive boundary</h2>
            <p className="mt-3 text-stone leading-relaxed">
              Local PDFs are inventoried first; public downloads are attached only
              when source, provenance, and sharing rights are clear.
            </p>
          </Panel>
        </div>
      </section>
    </div>
  );
}
