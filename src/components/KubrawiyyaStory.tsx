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
} from "lucide-react";
import kubraIllustration from "../assets/kubra/najm-al-din-kubra-devotional-illustration.webp";
import kubraMausoleumExterior from "../assets/kubra/kunya-urgench-kubra-mausoleum-exterior.jpg";
import kubraMausoleumPortal from "../assets/kubra/kunya-urgench-kubra-mausoleum-portal.jpg";
import { getMaster, type Master } from "../data/masters";
import {
  kubrawiyyaBranches,
  kubrawiyyaJourney,
  kubrawiyyaPublicSources,
  kubrawiyyaRoute,
  type KubrawiyyaJourneyChapter,
} from "../data/kubrawiyya-journey";
import { Panel } from "./ui-primitives";

const chapterLabels = [
  ["before-the-name", "Origins"],
  ["khwarazmian-house", "Khwarazm"],
  ["broken-city", "Dispersal"],
  ["three-roads", "Three roads"],
  ["eastern-flowering", "Hamadani"],
  ["descendants", "Descendants"],
  ["afterlife", "Afterlife"],
] as const;

export function KubrawiyyaStory() {
  const kubra = getMaster("najm-al-din-kubra");
  const bakharzi = getMaster("sayf-al-din-bakharzi");
  const hamadani = getMaster("ali-hamadani");

  return (
    <div>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-lapis-deep text-ivory">
        <img
          src={kubraMausoleumExterior}
          alt="Mausoleum of Najm al-Din Kubra at Kunya-Urgench"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-lapis-deep/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-lapis-deep via-lapis-deep/25 to-lapis-deep/45" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
              <RouteIcon className="h-4 w-4" /> Biography of an order
            </div>
            <h1 className="mt-5 font-serif text-6xl leading-none md:text-8xl">Kubrawiyya</h1>
            <p className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed text-ivory/90 md:text-3xl">
              Born from a traveller's search, formed in Khwarazm, scattered by conquest, and carried
              across Persia, Central Asia, Kashmir, India, and China.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">
              This is not only the life of Najm al-Din Kubra. It is the life of a spiritual house:
              its ancestors, first circle, broken homeland, regional descendants, and long memory
              after its Central Asian eclipse.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#before-the-name"
                className="inline-flex items-center gap-2 border border-gold bg-gold px-4 py-2.5 text-sm text-lapis-deep transition-colors hover:bg-gold-soft"
              >
                Begin the journey <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/study/$slug"
                params={{ slug: "najm-al-din-kubra" }}
                className="inline-flex items-center gap-2 border border-ivory/35 px-4 py-2.5 text-sm text-ivory transition-colors hover:bg-ivory/10"
              >
                Enter Kubra's teachings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <a
          href="https://commons.wikimedia.org/wiki/File:Kunya-Urgench-130377.jpg"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-5 right-5 max-w-xs text-right text-[10px] leading-relaxed text-ivory/55 hover:text-ivory lg:right-8"
        >
          Kunya-Urgench, Turkmenistan. Roland Lin / UNESCO / Wikimedia Commons, CC BY-SA 3.0 IGO.
        </a>
      </section>

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {kubrawiyyaRoute.map(([date, event, place], index) => (
            <a
              key={event}
              href={`#${chapterLabels[Math.min(index, chapterLabels.length - 1)][0]}`}
              className="min-h-28 border-b border-r border-gold/25 px-4 py-5 transition-colors hover:bg-gold/10 md:last:border-r-0 lg:border-b-0"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{date}</div>
              <div className="mt-2 font-serif text-lg leading-tight text-lapis-deep">{event}</div>
              <div className="mt-1 text-xs leading-relaxed text-stone">{place}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="min-w-0">
            <header className="border-y border-gold/30 py-10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                A lineage in motion
              </div>
              <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
                An order is born more than once
              </h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-relaxed text-stone">
                <p>
                  It is born when a seeker finds a teacher. It is born again when disciples receive
                  a common discipline. It is born once more when the first home is lost and the
                  teaching must learn to live in another language, city, or people.
                </p>
                <p>
                  The Kubrawiyya passed through every one of these births. Its continuity is real,
                  but it is not simple. A khanqah in Bukhara, a Turkic commentary at the edge of the
                  steppe, a Persian visionary anthropology, and a Kashmiri shrine do not preserve
                  the inheritance in the same way. Together they tell its life.
                </p>
              </div>
            </header>

            {kubrawiyyaJourney.map((chapter) => (
              <StoryChapter
                key={chapter.id}
                chapter={chapter}
                bakharziImage={bakharzi?.image}
                hamadaniImage={hamadani?.image}
              />
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <Panel>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">The journey</div>
              <nav className="mt-4">
                {chapterLabels.map(([id, label], index) => (
                  <a
                    key={id}
                    href={`#${id}`}
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
              <h2 className="mt-3 font-serif text-2xl text-lapis-deep">The first home</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Gurganj in the Khwarazm oasis, near today's Kunya-Urgench. The city was a centre of
                scholarship, trade, and power before the Mongol destruction of 1221.
              </p>
              <Link
                to="/map"
                className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
              >
                Follow the geography <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Panel>
            {kubra && (
              <Panel>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">The founder</div>
                <h2 className="mt-2 font-serif text-2xl text-lapis-deep">{kubra.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">{kubra.dates}</p>
                <Link
                  to="/masters/$slug"
                  params={{ slug: kubra.slug }}
                  className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
                >
                  Read his biography <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Panel>
            )}
          </aside>
        </div>
      </section>

      <DescendantBranches />
      <InfluenceWithoutDescent />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Continue reading
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-lapis-deep">
              Enter the texts and lives
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone">
              The order's history becomes deeper when its lineage is read beside the founder's
              spiritual discipline and the biographies of the masters who carried it onward.
            </p>
          </div>
          <div className="divide-y divide-gold/25 border-y border-gold/25">
            <ReadingLink
              icon={<BookOpenText className="h-5 w-5" />}
              title="Najm al-Din Kubra and the science of inner light"
              body="A source-led study of the founder's writings, ten principles, discernment, and Divine Names."
              to="/study/$slug"
              params={{ slug: "najm-al-din-kubra" }}
            />
            <ReadingLink
              icon={<ScrollText className="h-5 w-5" />}
              title="The Ten Principles English research edition"
              body="Read the Atlas edition while the direct Arabic critical program continues privately."
              href="/downloads/al-usul-al-asharah-ten-principles-english-research-edition.pdf"
            />
            <ReadingLink
              icon={<Network className="h-5 w-5" />}
              title="Masters of the Kubrawi inheritance"
              body="Move from Kubra to Bakharzi and 'Ali Hamadani through their individual profiles and sacred geographies."
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
              The story rests on different kinds of witness
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Founder texts, endowment records, hagiographies, later silsilas, shrine memory, and
              modern scholarship do not answer the same questions. The Atlas keeps them in
              conversation without making one impersonate another.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-gold/25 bg-gold/25 md:grid-cols-2">
            {kubrawiyyaPublicSources.map((source) => (
              <article key={source.title} className="bg-card p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  {source.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone">{source.citation}</p>
                {source.href && (
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
                  >
                    Consult the source <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StoryChapter({
  chapter,
  bakharziImage,
  hamadaniImage,
}: {
  chapter: KubrawiyyaJourneyChapter;
  bakharziImage?: Master["image"];
  hamadaniImage?: Master["image"];
}) {
  const image =
    chapter.visual === "illustration"
      ? {
          src: kubraIllustration,
          alt: "Later devotional book illustration identified as Najm al-Din Kubra",
          credit: "Later devotional illustration; historical portrait status unverified",
          sourceUrl: undefined,
          license: undefined,
        }
      : chapter.visual === "portal"
        ? {
            src: kubraMausoleumPortal,
            alt: "Portal of the Mausoleum of Najm al-Din Kubra at Kunya-Urgench",
            credit: "Tim Williams / Wikimedia Commons",
            sourceUrl:
              "https://commons.wikimedia.org/wiki/File:Portal_in_front_of_Najm_ad-Din_al-Kubra_Mausoleum.JPG",
            license: "CC BY-SA 3.0",
          }
        : chapter.visual === "bakharzi" && bakharziImage
          ? {
              src: bakharziImage.src,
              alt: bakharziImage.alt,
              credit: bakharziImage.credit,
              sourceUrl: bakharziImage.sourceUrl,
              license: bakharziImage.license,
            }
          : chapter.visual === "hamadani" && hamadaniImage
            ? {
                src: hamadaniImage.src,
                alt: hamadaniImage.alt,
                credit: hamadaniImage.credit,
                sourceUrl: hamadaniImage.sourceUrl,
                license: hamadaniImage.license,
              }
            : undefined;

  return (
    <section id={chapter.id} className="scroll-mt-24 border-b border-gold/25 py-16">
      <div className="grid gap-8 md:grid-cols-[6rem_minmax(0,1fr)]">
        <div>
          <div className="font-serif text-5xl text-gold/70">{chapter.number}</div>
          <div className="mt-3 h-px w-12 bg-gold" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.23em] text-gold">
            {chapter.era} · {chapter.place}
          </div>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
            {chapter.title}
          </h2>
          <p className="mt-6 max-w-4xl font-serif text-2xl leading-relaxed text-lapis-deep/85">
            {chapter.opening}
          </p>
          {image && (
            <figure className="mt-9 overflow-hidden border-y border-gold/30 bg-card">
              <img src={image.src} alt={image.alt} className="max-h-[32rem] w-full object-cover" />
              <figcaption className="px-1 py-3 text-xs leading-relaxed text-stone">
                {image.sourceUrl ? (
                  <a
                    href={image.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-gold/50 hover:text-gold"
                  >
                    {image.credit}
                    {image.license ? ` · ${image.license}` : ""}
                  </a>
                ) : (
                  image.credit
                )}
                .
              </figcaption>
            </figure>
          )}
          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-stone">
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-gold bg-gold/10 px-5 py-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
              How firmly can we say this
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone">{chapter.evidence}</p>
          </div>
          <details className="mt-6 border-y border-gold/25 py-4">
            <summary className="cursor-pointer text-sm font-medium text-lapis-deep">
              Sources for this chapter
            </summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone">
              {chapter.sourceNotes.map((source) => (
                <li key={source.label}>
                  {source.href ? (
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-gold/50 hover:text-gold"
                    >
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}

function DescendantBranches() {
  return (
    <section className="bg-lapis-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-gold">
            <Network className="h-4 w-4" /> The family after Hamadani
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Descendants and related lineages
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ivory/70">
            These connections are not all equal. Some are direct branches, some are regional
            continuations, and some rest on later reports of initiation. The labels below preserve
            that difference.
          </p>
        </div>
        <div className="mt-12 grid gap-px border border-ivory/15 bg-ivory/15 md:grid-cols-2 lg:grid-cols-3">
          {kubrawiyyaBranches.map((branch) => (
            <article key={branch.name} className="bg-lapis-deep p-6 md:p-7">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{branch.kind}</div>
              <h3 className="mt-3 font-serif text-3xl text-ivory">{branch.name}</h3>
              <p className="mt-3 text-xs leading-relaxed text-gold-soft">{branch.route}</p>
              <p className="mt-5 text-sm leading-relaxed text-ivory/70">{branch.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfluenceWithoutDescent() {
  return (
    <section className="border-b border-gold/25 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Influence is not always lineage
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-lapis-deep">
            What later schools inherited
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-relaxed text-stone">
          <p>
            Kubrawi teachings helped shape the Persianate study of inward perception, the subtle
            centres, disciplined retreat, and the interpretation of light. Those themes traveled
            through Simnani, Hamadani, and their descendants into Iranian, Central Asian, and South
            Asian Sufi worlds.
          </p>
          <p>
            The Naqshbandiyya was not a Kubrawi branch. It became the dominant Central Asian order
            in a landscape where Kubrawi institutions, shrines, and practices had already worked for
            centuries. It sometimes received the older sacred geography even as it displaced the
            older institution. That is historical succession and cultural inheritance, not direct
            descent.
          </p>
          <p>
            The Atlas will use the word <em>influence</em> only where a text, teacher-chain,
            institution, manuscript history, or named regional channel can be shown. Resemblance by
            itself is not enough.
          </p>
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
  to?: string;
  params?: Record<string, string>;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-1 text-gold">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-2xl text-lapis-deep">{title}</span>
        <span className="mt-2 block text-sm leading-relaxed text-stone">{body}</span>
      </span>
      <ArrowRight className="mt-1 h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <a href={href} className="group flex gap-4 py-6">
        {content}
      </a>
    );
  }

  return (
    <Link to={to || "/"} params={params as never} className="group flex gap-4 py-6">
      {content}
    </Link>
  );
}
