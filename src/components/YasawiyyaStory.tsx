import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  ExternalLink,
  MapPin,
  Network,
  Route as RouteIcon,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import hikmetImage from "../assets/calligraphy/ahmad-yasawi-hikmet-manuscript.jpg";
import {
  yasawiyyaEvidenceKey,
  yasawiyyaJourney,
  yasawiyyaPublicSources,
  yasawiyyaRoute,
  yasawiyyaSuccessorRoads,
  type YasawiyyaJourneyChapter,
} from "../data/yasawiyya-journey";
import { Panel } from "./ui-primitives";

const mausoleumImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan%2C_Kazakhstan.jpg";

const chapterLabels = [
  ["steppe-and-oasis", "Steppe and oasis"],
  ["remembered-teachers", "Teachers"],
  ["many-hikmets", "Hikmets"],
  ["path-of-formation", "Formation"],
  ["successor-roads", "Successors"],
  ["communities", "Communities"],
  ["book-of-stone", "Mausoleum"],
  ["many-afterlives", "Afterlives"],
] as const;

export function YasawiyyaStory() {
  return (
    <div>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-lapis-deep text-ivory">
        <img
          src={mausoleumImage}
          alt="Mausoleum of Khoja Ahmed Yasawi at Turkistan, Kazakhstan"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-lapis-deep/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-lapis-deep via-lapis-deep/20 to-lapis-deep/45" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
              <RouteIcon className="h-4 w-4" /> Biography of a Turkic spiritual inheritance
            </div>
            <h1 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Yasawiyya</h1>
            <p className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed text-ivory/90 md:text-3xl">
              A voice born between steppe and oasis, carried through hikmets, communities, shrines,
              and a manuscript tradition larger than any single book.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
              The story begins with Ahmad Yasawi, but it does not end with a saint's life. It
              follows the making of a path, the unequal evidence behind its lineages, and the many
              ways a devotional voice survived.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#steppe-and-oasis"
                className="inline-flex items-center gap-2 border border-gold bg-gold px-4 py-2.5 text-sm text-lapis-deep transition-colors hover:bg-gold-soft"
              >
                Begin the story <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/study/$slug"
                params={{ slug: "ahmad-yasawi" }}
                className="inline-flex items-center gap-2 border border-ivory/35 px-4 py-2.5 text-sm text-ivory transition-colors hover:bg-ivory/10"
              >
                Enter the Hikmet study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <a
          href="https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-5 right-5 max-w-xs text-right text-[10px] leading-relaxed text-ivory/60 hover:text-ivory lg:right-8"
        >
          Turkistan, Kazakhstan. Petar Milošević / Wikimedia Commons, CC BY-SA 4.0.
        </a>
      </section>

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
          {yasawiyyaRoute.map(([date, event, place, anchor]) => (
            <a
              key={event}
              href={"#" + anchor}
              className="min-h-28 border-b border-r border-gold/25 px-4 py-5 transition-colors hover:bg-gold/10 lg:border-b-0"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{date}</div>
              <div className="mt-2 font-serif text-lg leading-tight text-lapis-deep">{event}</div>
              <div className="mt-1 text-xs leading-relaxed text-stone">{place}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-b border-gold/25 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-gold">
            <ShieldCheck className="h-4 w-4" /> How to read this page
          </div>
          <div className="mt-6 grid gap-px border border-gold/25 bg-gold/25 md:grid-cols-2 lg:grid-cols-4">
            {yasawiyyaEvidenceKey.map((item) => (
              <div key={item.label} className="bg-card p-5">
                <h2 className="font-serif text-xl text-lapis-deep">{item.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="min-w-0">
            <header className="border-y border-gold/30 py-10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                A voice becomes a path
              </div>
              <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
                History and sacred memory can be read together without becoming the same thing
              </h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-relaxed text-stone">
                <p>
                  The Yasawiyya is often told as a straight line from one master to a finished
                  order. Its sources reveal something more alive: a devotional voice becoming a
                  path, a path becoming communities, and those communities becoming texts, shrines,
                  lineages, and public memory.
                </p>
                <p>
                  This page does not ask reverence to disappear before historical criticism. It asks
                  each kind of witness to speak in its own register, so that a sacred story is not
                  mistaken for a contemporary record and a sparse archive is not mistaken for the
                  whole spiritual life of a people.
                </p>
              </div>
            </header>

            {yasawiyyaJourney.map((chapter) => (
              <YasawiyyaChapter key={chapter.id} chapter={chapter} />
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <Panel>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">The journey</div>
              <nav className="mt-4">
                {chapterLabels.map(([id, label], index) => (
                  <a
                    key={id}
                    href={"#" + id}
                    className="flex items-center gap-3 border-b border-gold/20 py-2.5 text-sm text-lapis-deep hover:text-gold"
                  >
                    <span className="w-5 text-[10px] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </a>
                ))}
              </nav>
            </Panel>
            <Panel className="border-l-4 border-l-gold">
              <MapPin className="h-5 w-5 text-gold" />
              <h2 className="mt-3 font-serif text-2xl text-lapis-deep">Yasi / Turkistan</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                The city where a remembered teacher, a layered textual corpus, a Timurid monument,
                and a living pilgrimage landscape meet.
              </p>
              <Link
                to="/map"
                className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
              >
                Follow the geography <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Panel>
            <Panel>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">The master</div>
              <h2 className="mt-2 font-serif text-2xl text-lapis-deep">Ahmad Yasawi</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Formative Turkic Sufi teacher, center of the received Hikmet corpus, and enduring
                point of orientation across the Turkic Muslim world.
              </p>
              <Link
                to="/masters/$slug"
                params={{ slug: "ahmad-yasawi" }}
                className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
              >
                Read his biography <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Panel>
          </aside>
        </div>
      </section>

      <SuccessorRoads />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Continue reading
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-lapis-deep">
              Move from the order into its voice
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone">
              The order's biography becomes intimate in the Hikmets, but every poem must remain
              attached to the witness and editorial history through which it reached us.
            </p>
          </div>
          <div className="divide-y divide-gold/25 border-y border-gold/25">
            <ReadingLink
              icon={<BookOpenText className="h-5 w-5" />}
              title="Ahmad Yasawi: The Voice of the Hikmets"
              body="A long-form study of vernacular teaching, faqr, remembrance, manuscript layering, and Turkistan."
              to="/study/$slug"
              params={{ slug: "ahmad-yasawi" }}
            />
            <ReadingLink
              icon={<ScrollText className="h-5 w-5" />}
              title="The historical Kazan witnesses"
              body="Consult the 1904 public scan while the Atlas prepares page-level collation and original English translations."
              href="https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6935.pdf"
            />
            <ReadingLink
              icon={<Network className="h-5 w-5" />}
              title="Masters and sacred geographies"
              body="Begin with Ahmad Yasawi and follow the growing profile archive as successor evidence is verified."
              to="/masters"
            />
          </div>
        </div>
      </section>

      <section id="sources" className="border-y border-gold/25 bg-parchment">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Sources and boundaries
            </div>
            <h2 className="mt-4 font-serif text-4xl text-lapis-deep">
              A public library with visible limits
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Catalogue records, manuscript surveys, historical prints, hagiographies, architecture,
              and modern scholarship answer different questions. The copyrighted 2022 Uzbek corpus
              and private research copies inform editorial work but are not hosted here.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-gold/25 bg-gold/25 md:grid-cols-2">
            {yasawiyyaPublicSources.map((source) => (
              <article key={source.title} className="bg-card p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  {source.kind}
                </div>
                <h3 className="mt-2 font-serif text-2xl text-lapis-deep">{source.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{source.note}</p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
                >
                  Consult the source <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function YasawiyyaChapter({ chapter }: { chapter: YasawiyyaJourneyChapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 border-b border-gold/25 py-16">
      <div className="grid gap-8 md:grid-cols-[6rem_minmax(0,1fr)]">
        <div>
          <div className="font-serif text-5xl text-gold/70">{chapter.number}</div>
          <div className="mt-3 h-px w-12 bg-gold" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-gold">
            <span>{chapter.era}</span>
            <span aria-hidden="true">·</span>
            <span>{chapter.place}</span>
            <span className="border border-gold/35 bg-gold/10 px-2 py-1 tracking-[0.12em] text-lapis-deep">
              {chapter.register}
            </span>
          </div>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
            {chapter.title}
          </h2>
          <p className="mt-6 max-w-4xl font-serif text-2xl leading-relaxed text-lapis-deep/85">
            {chapter.opening}
          </p>

          {chapter.visual === "hikmet" && <HikmetFigure />}
          {chapter.visual === "mausoleum" && <MausoleumFigure />}

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-stone">
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 max-w-4xl border-l-4 border-gold bg-parchment px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
              Evidence boundary
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone">{chapter.boundary}</p>
          </div>
          <div className="mt-7 max-w-4xl border-l-2 border-gold/45 pl-5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Sources</div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone">
              {chapter.sources.map((source) => (
                <li key={source.label}>
                  {source.href ? (
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-gold/40 hover:text-lapis-deep"
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
        </div>
      </div>
    </section>
  );
}

function HikmetFigure() {
  return (
    <figure className="mt-9 overflow-hidden border-y border-gold/30 bg-card">
      <img
        src={hikmetImage}
        alt="Historic Chagatai-language Hikmet displayed at a Kazan exhibition"
        className="max-h-[34rem] w-full object-cover object-center"
      />
      <figcaption className="px-1 py-3 text-xs leading-relaxed text-stone">
        A later Chagatai-language Hikmet in a modern exhibition: evidence of transmission, not
        Yasawi's handwriting.{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Ahmad_Yasawi_hikmat,_1900s_(2024-04-02).jpg"
          target="_blank"
          rel="noreferrer"
          className="border-b border-gold/50 hover:text-gold"
        >
          Vyacheslav Kirillin / Wikimedia Commons, CC BY-SA 4.0
        </a>
        .
      </figcaption>
    </figure>
  );
}

function MausoleumFigure() {
  return (
    <figure className="mt-9 overflow-hidden border-y border-gold/30 bg-card">
      <img
        src={mausoleumImage}
        alt="Exterior of the Mausoleum of Khoja Ahmed Yasawi in Turkistan"
        className="max-h-[34rem] w-full object-cover object-center"
      />
      <figcaption className="px-1 py-3 text-xs leading-relaxed text-stone">
        The present Timurid complex was begun in 1389, more than two centuries after Yasawi.{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg"
          target="_blank"
          rel="noreferrer"
          className="border-b border-gold/50 hover:text-gold"
        >
          Petar Milošević / Wikimedia Commons, CC BY-SA 4.0
        </a>
        .
      </figcaption>
    </figure>
  );
}

function SuccessorRoads() {
  return (
    <section className="border-y border-gold/25 bg-lapis-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Four successor roads
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A lineage map should show different kinds of connection
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
              These figures belong to the received Yasawi succession, but the evidence does not make
              them interchangeable. The Atlas distinguishes family memory, teaching succession,
              textual transmission, branch history, and shrine-centered remembrance.
            </p>
          </div>
          <div className="divide-y divide-gold/30 border-y border-gold/30">
            {yasawiyyaSuccessorRoads.map((road) => (
              <article key={road.name} className="grid gap-4 py-6 sm:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <h3 className="font-serif text-2xl text-ivory">{road.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold">
                    {road.readiness}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-ivory/90">{road.route}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">{road.geography}</p>
                  <p className="mt-3 border-l-2 border-gold/60 pl-3 text-xs leading-relaxed text-ivory/55">
                    {road.caution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadingLink({
  icon,
  title,
  body,
  to,
  params,
  href,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  to?: "/study/$slug" | "/masters";
  params?: { slug: string };
  href?: string;
}) {
  const content = (
    <>
      <div className="mt-1 text-gold">{icon}</div>
      <div>
        <h3 className="font-serif text-2xl text-lapis-deep">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">{body}</p>
      </div>
      {href ? (
        <ExternalLink className="h-4 w-4 text-gold" />
      ) : (
        <ArrowRight className="h-4 w-4 text-gold" />
      )}
    </>
  );

  const className =
    "grid grid-cols-[1.5rem_minmax(0,1fr)_1rem] gap-4 py-6 transition-colors hover:bg-gold/5";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  if (to === "/study/$slug" && params) {
    return (
      <Link to="/study/$slug" params={params} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <Link to="/masters" className={className}>
      {content}
    </Link>
  );
}
