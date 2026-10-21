import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenText,
  CircleCheck,
  Compass,
  FileSearch,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import silkRoadMap from "../assets/silk-road-map.jpg";
import yasawiManuscript from "../assets/calligraphy/ahmad-yasawi-hikmet-manuscript.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Sufi Atlas Academy | Central Asian Sufi History and Texts" },
      {
        name: "description",
        content:
          "A developing source-based online curriculum for studying Central Asian Sufi histories, writings, lineages, and sacred geography.",
      },
      { property: "og:title", content: "Sufi Atlas Academy" },
      {
        property: "og:description",
        content:
          "Foundational study of Central Asian Sufi histories, texts, lineages, and sacred geography.",
      },
    ],
  }),
  component: AcademyPage,
});

const learningPath = [
  [
    "01",
    "Foundations",
    "Place Sufi traditions within Islam and within the history of Central Asia.",
  ],
  [
    "02",
    "Read Sources",
    "Distinguish witness, transcription, translation, commentary, and interpretation.",
  ],
  [
    "03",
    "Follow Lineages",
    "Read a silsila as spiritual memory and as a claim requiring historical evidence.",
  ],
  [
    "04",
    "Enter an Order Track",
    "Study a school through its masters, writings, institutions, and living afterlives.",
  ],
  [
    "05",
    "Build a Cited Capstone",
    "Make a careful argument whose sources, uncertainties, and limits remain visible.",
  ],
] as const;

const yasawiLessons = [
  [
    "The steppe and the oasis",
    "Why Sayram, Otrar, Yasi, Bukhara, and Khwarazm formed more than a background to the tradition.",
  ],
  [
    "Aḥmad Yasawī between history and sacred memory",
    "How to honour the Arslan Baba narratives while distinguishing them from contemporary biography.",
  ],
  [
    "How a hikmet reaches us",
    "A guided comparison of manuscript culture, the 1904 and 1912 Kazan printings, and modern Uzbek editions.",
  ],
  [
    "Four successor roads",
    "Mansur Ata, Said Ata, Danishmand, and Hakim Ata as different forms of descent and transmission.",
  ],
  [
    "The shrine as an archive",
    "How the Timurid mausoleum, pilgrimage, architecture, and public memory continued the order's life.",
  ],
] as const;

const sourceChain = [
  ["Witness", "The manuscript, historical printing, object, or documented testimony itself."],
  [
    "Transcription",
    "A readable rendering that records uncertainty rather than repairing it invisibly.",
  ],
  ["Translation", "A new-language reading accountable to the wording and structure of its source."],
  [
    "Commentary",
    "Historical, linguistic, Qur'anic, and Sufi context kept distinct from the translated voice.",
  ],
  [
    "Lesson",
    "A learning experience that cites all four earlier layers and never erases their boundaries.",
  ],
] as const;

function AcademyPage() {
  return (
    <div className="bg-background">
      <section className="relative flex min-h-[78vh] items-end overflow-hidden border-b border-gold/30 text-ivory">
        <img
          src={silkRoadMap}
          alt="Historical map evoking the routes and cities of Central Asian Sufi traditions"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-lapis-deep/80" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Founding curriculum in development
            </div>
            <h1 className="mt-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
              Sufi Atlas Academy
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-ivory/85 md:text-2xl">
              Study the histories, writings, geographies, and living afterlives of Central Asian
              Sufi traditions through sources whose origins and limits remain visible.
            </p>
            <p className="mt-5 max-w-2xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-ivory/65">
              Historical and textual education only. The Academy is not a tariqa and does not offer
              initiation, ritual authorization, personalized spiritual direction, or clinical care.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-sm">
              <a
                href="#course-readiness"
                className="inline-flex min-h-11 items-center gap-2 border-b border-gold text-ivory hover:text-gold"
              >
                Review the course roadmap <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#method"
                className="inline-flex min-h-11 items-center gap-2 border-b border-ivory/35 text-ivory/80 hover:text-gold"
              >
                See how knowledge is built <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/orders"
                className="inline-flex min-h-11 items-center gap-2 border-b border-ivory/35 text-ivory/80 hover:text-gold"
              >
                Explore the research atlas <Compass className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/25 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Eyebrow>Learning path</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep">
                From orientation to responsible interpretation
              </h2>
            </div>
            <ol className="divide-y divide-gold/25 border-y border-gold/25">
              {learningPath.map(([number, title, body]) => (
                <li
                  key={number}
                  className="grid gap-3 py-5 sm:grid-cols-[3rem_12rem_1fr] sm:items-start"
                >
                  <span className="font-serif text-xl text-gold">{number}</span>
                  <strong className="font-serif text-xl font-medium text-lapis-deep">
                    {title}
                  </strong>
                  <span className="text-sm leading-relaxed text-stone">{body}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>First historical module</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
            Reading the Yasawiyya
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            A five-part guided study of how a Turkic devotional voice became a path, a textual
            tradition, a network of communities, and a sacred geography. This preview teaches
            historical method and source literacy; it does not teach private devotional practice.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <figure>
            <img
              src={yasawiManuscript}
              alt="Detail from an Ahmad Yasawi hikmet manuscript witness"
              className="h-[28rem] w-full object-cover object-top"
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-stone">
              Manuscript detail used as a historical witness, not as a decorative claim of direct
              authorship. Source and rights information remain attached in the Atlas visual archive.
            </figcaption>
          </figure>
          <div className="divide-y divide-gold/25 border-y border-gold/25">
            {yasawiLessons.map(([title, body], index) => (
              <article key={title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-serif text-2xl text-gold">{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl text-lapis-deep">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
                </div>
              </article>
            ))}
            <div className="flex flex-wrap gap-6 py-6 text-sm">
              <Link
                to="/orders/$slug"
                params={{ slug: "yasaviyya" }}
                className="inline-flex min-h-11 items-center gap-2 border-b border-gold/60 text-lapis-deep hover:text-gold"
              >
                Read the Yasawiyya study <BookOpenText className="h-4 w-4" />
              </Link>
              <Link
                to="/masters/$slug"
                params={{ slug: "hakim-ata" }}
                className="inline-flex min-h-11 items-center gap-2 border-b border-gold/60 text-lapis-deep hover:text-gold"
              >
                Meet Hakim Ata <RouteIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="border-y border-gold/25 bg-parchment scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Eyebrow>Source method</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep">
                A lesson cannot erase the path by which knowledge arrived
              </h2>
            </div>
            <div className="divide-y divide-gold/30 border-y border-gold/30">
              {sourceChain.map(([title, body], index) => (
                <details key={title} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl text-lapis-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                    <span className="flex items-center gap-4">
                      <span className="text-sm text-gold">0{index + 1}</span>
                      {title}
                    </span>
                    <span
                      className="text-gold transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="ml-10 mt-3 max-w-2xl text-sm leading-relaxed text-stone">{body}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="course-readiness"
        className="mx-auto w-full max-w-7xl scroll-mt-20 overflow-hidden px-5 py-20 lg:px-8"
      >
        <div className="grid w-full min-w-0 gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <Eyebrow>Course readiness</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep">
              Open only when the sources are ready
            </h2>
            <div className="mt-8 w-full max-w-full overflow-x-auto border-y border-gold/25">
              <table className="w-full min-w-[34rem] text-left text-sm">
                <thead className="border-b border-gold/25 text-[10px] uppercase tracking-[0.2em] text-gold">
                  <tr>
                    <th className="py-3 pr-5 font-medium">Track</th>
                    <th className="py-3 pr-5 font-medium">State</th>
                    <th className="py-3 font-medium">Next gate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/20 text-stone">
                  <ReadinessRow
                    track="Kubrawiyya"
                    state="Pilot being prepared"
                    gate="Independent textual and scholarly review"
                  />
                  <ReadinessRow
                    track="Yasawiyya"
                    state="Historical preview ready"
                    gate="Hikmet collation and language review"
                  />
                  <ReadinessRow
                    track="Khwajagan-Naqshbandiyya"
                    state="Research dossier"
                    gate="Formative Persian primary sources"
                  />
                  <ReadinessRow
                    track="Comparative seminars"
                    state="Closed"
                    gate="Two order tracks must pass review"
                  />
                  <ReadinessRow
                    track="Sufi medicine"
                    state="Withheld"
                    gate="Textual, rights, medical, and safety review"
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="min-w-0 border-l-4 border-gold bg-card p-7 md:p-9">
            <div className="flex items-center gap-3 text-gold">
              <ShieldCheck className="h-6 w-6" />
              <Eyebrow>Authority and care</Eyebrow>
            </div>
            <h2 className="mt-4 font-serif text-3xl text-lapis-deep">
              What this Academy will not pretend to be
            </h2>
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-stone">
              <Commitment>It does not initiate students or certify spiritual authority.</Commitment>
              <Commitment>
                It does not reconstruct private practices from books and fragments.
              </Commitment>
              <Commitment>It does not prescribe medical or mental-health treatment.</Commitment>
              <Commitment>
                It will not hide the use of learner data or uncited machine-generated claims.
              </Commitment>
            </ul>
            <p className="mt-8 border-t border-gold/25 pt-6 text-sm leading-relaxed text-stone">
              The planned AI study companion will retrieve approved sources, cite substantive
              answers, identify uncertainty, and refuse the roles of shaykh, mufti, therapist,
              physician, and initiator. No learner-facing AI is active on this page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/25 bg-lapis-deep text-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex items-start gap-4 text-gold">
            <FileSearch className="mt-1 h-7 w-7" />
            <span className="text-[10px] uppercase tracking-[0.25em]">Founding note</span>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Building slowly enough to be trustworthy</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-ivory/70">
              The Academy is being assembled from the Atlas research library, controlled
              translations, and independent review. Courses open only after their sources, rights,
              reviewers, accessibility, and safety controls are ready. This preview collects no
              enrollment or payment information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] uppercase tracking-[0.25em] text-gold">{children}</span>;
}

function ReadinessRow({ track, state, gate }: { track: string; state: string; gate: string }) {
  return (
    <tr>
      <th className="py-4 pr-5 font-serif text-lg font-medium text-lapis-deep">{track}</th>
      <td className="py-4 pr-5">
        <span className="inline-flex items-center gap-2">
          <CircleCheck className="h-4 w-4 text-gold" />
          {state}
        </span>
      </td>
      <td className="py-4">{gate}</td>
    </tr>
  );
}

function Commitment({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
      <span>{children}</span>
    </li>
  );
}
