import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookMarked,
  BookOpenText,
  ExternalLink,
  Landmark,
  MapPinned,
  Network,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import mapImg from "../assets/silk-road-map.jpg";
import { getMaster } from "../data/masters";
import { masterDeepReadings } from "../data/master-deep-readings";
import { khwajaganLibrary } from "../data/khwajagan-library";

const masters = [
  {
    name: "Yusuf al-Hamadani",
    dates: "1048/49-1140",
    place: "Hamadan, Marv, Bukhara, Samarqand",
    slug: "yusuf-hamadani",
    kind: "scholarly consensus",
  },
  {
    name: "Ahmad Yasawi",
    dates: "d. 1166",
    place: "Sayram, Yesi/Turkistan, Bukhara",
    slug: "ahmad-yasawi",
    kind: "scholarly consensus + tradition",
  },
  {
    name: "Abd al-Khaliq Ghijduwani",
    dates: "12th century",
    place: "Ghijduwan, Bukhara region",
    slug: "abd-al-khaliq-ghujdawani",
    kind: "scholarly consensus + tradition",
  },
  {
    name: "Arif Riwgari",
    dates: "13th century",
    place: "Riwgar, Bukhara oasis",
    slug: "arif-riwgari",
    kind: "lineage tradition",
  },
  {
    name: "Mahmud Faghnawi",
    dates: "d. c. 1315",
    place: "Faghnah, Bukhara oasis",
    slug: "mahmud-faghnawi",
    kind: "lineage tradition",
  },
  {
    name: "Ali Ramitani",
    dates: "early 14th century",
    place: "Ramitan, near Bukhara",
    slug: "azizan-ali-ramitani",
    kind: "lineage tradition",
  },
  {
    name: "Muhammad Baba Samasi",
    dates: "d. 1354",
    place: "Samas, Bukhara oasis",
    slug: "muhammad-baba-samasi",
    kind: "lineage tradition",
  },
  {
    name: "Sayyid Amir Kulal",
    dates: "c. 1281-1370",
    place: "Sukhar, near Bukhara",
    slug: "sayyid-amir-kulal",
    kind: "tradition + shrine record",
  },
  {
    name: "Baha al-Din Naqshband",
    dates: "1318-1389",
    place: "Bukhara oasis",
    slug: "bahauddin-naqshband",
    kind: "scholarly consensus",
  },
  {
    name: "Yaqub Charkhi",
    dates: "d. 1447",
    place: "Charkh, Herat, Transoxiana",
    slug: "yaqub-charkhi",
    kind: "scholarly consensus + tradition",
  },
  {
    name: "Ubayd Allah Ahrar",
    dates: "1404-1490",
    place: "Samarqand and Herat networks",
    slug: "khwaja-ahrar",
    kind: "scholarly consensus",
  },
  {
    name: "Abd al-Rahman Jami",
    dates: "1414-1492",
    place: "Jam, Samarqand, Herat",
    slug: "abd-al-rahman-jami",
    kind: "scholarly consensus",
  },
] as const;

const principles = [
  ["Hush dar dam", "Awareness in the breath", "Khwajagan"],
  ["Nazar bar qadam", "Watchfulness over one's step", "Khwajagan"],
  ["Safar dar watan", "The inward journey home", "Khwajagan"],
  ["Khalwat dar anjuman", "Solitude in the gathering", "Khwajagan"],
  ["Yad kard", "Returning to remembrance", "Khwajagan"],
  ["Baz gasht", "The return to God", "Khwajagan"],
  ["Nigah dasht", "Guarding attention", "Khwajagan"],
  ["Yad dasht", "Sustained recollection", "Khwajagan"],
  ["Wuquf zamani", "Reckoning with time", "Later Naqshbandi"],
  ["Wuquf adadi", "Awareness of number", "Later Naqshbandi"],
  ["Wuquf qalbi", "Presence of the heart", "Later Naqshbandi"],
] as const;

const formationChapters = [
  {
    period: "Before the twelfth century",
    title: "A Khurasani inheritance",
    body: "The Khwajagan did not appear from an empty landscape. Their world inherited Qur'anic learning, ascetic discipline, futuwwa, companionship, and the teaching cultures of Khurasan and Transoxiana. Later genealogies return to Yusuf Hamadani as a shared point of orientation, but the communities around him belonged to an age before the familiar orders had taken stable institutional form.",
  },
  {
    period: "Twelfth century",
    title: "Ghijduwani and the inward path",
    body: "Around Abd al-Khaliq Ghijduwani, later memory gathered a distinct discipline of silent remembrance, wakefulness in breath and movement, and spiritual presence amid ordinary society. The eight sacred sayings attributed to him became the most durable vocabulary of the Khwajagan inheritance, even though their exact wording and sequence reached us through later witnesses.",
  },
  {
    period: "Thirteenth-fourteenth centuries",
    title: "A constellation of Bukhara masters",
    body: "Riwgari, Faghnawi, Ramitani, Baba Samasi, and Amir Kulal are remembered across the villages of the Bukhara oasis. They should not be reduced to names on a straight line. Each represents a local circle of companionship, livelihood, shrine memory, and teaching whose surviving documentary record is uneven.",
  },
] as const;

const bukharaMasterSlugs = [
  "abd-al-khaliq-ghujdawani",
  "arif-riwgari",
  "mahmud-faghnawi",
  "azizan-ali-ramitani",
  "muhammad-baba-samasi",
  "sayyid-amir-kulal",
  "bahauddin-naqshband",
] as const;

const sourceShelfIds = [
  "medieval-khwajagan-oxford",
  "rashahat-english-translation",
  "amir-kulal-agahi",
  "baha-life-kyoto",
  "khwajagan-bukhdu-uz",
  "khwajagan-russian-reference",
] as const;

const sacredPlaces = [
  {
    place: "Merv",
    country: "Turkmenistan",
    body: "The burial place of Yusuf Hamadani in the Murghab oasis anchors the story in the older Khurasani world from which later Central Asian paths drew nourishment.",
    to: "/sites/merv",
  },
  {
    place: "Ghijduwan",
    country: "Uzbekistan",
    body: "The shrine of Abd al-Khaliq stands northwest of Bukhara. It is the principal geographical threshold of the Khwajagan method and the first station of the Seven Pirs pilgrimage route.",
    to: "/sites/ghujduwan",
  },
  {
    place: "The Bukhara oasis",
    country: "Uzbekistan",
    body: "Riwgar, Faghnah, Ramitan, Samas, and Sukhar preserve a dispersed sacred geography. The path travelled through irrigated villages, artisan households, and circles of companionship, not only through monumental cities.",
    to: "/map",
  },
  {
    place: "Qasr-i Arifan",
    country: "Uzbekistan",
    body: "The resting place of Baha al-Din became the great centre of the later Naqshbandi world. Its living complex marks both continuity with the Khwajagan and the beginning of a new institutional history.",
    to: "/sites/qasr-i-arifan",
  },
] as const;

export function KhwajaganStory() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-lapis-deep text-ivory">
        <img
          src={mapImg}
          alt="Illustrated Silk Road map"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-lapis-deep/80" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
            <Network className="h-4 w-4" />
            Masters of Wisdom
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
            The Khwajagan
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80 md:text-xl">
            The Path of the Masters: Central Asian teachers, places, and teaching communities. It is
            not one uninterrupted medieval institution, but a living field from which the Yasawiyya
            and the later Naqshbandi world emerged.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <a
              href="#network"
              className="border border-gold/60 px-4 py-2.5 text-gold transition-colors hover:bg-gold hover:text-lapis-deep"
            >
              Explore the network
            </a>
            <a
              href="#method"
              className="border border-ivory/30 px-4 py-2.5 text-ivory transition-colors hover:bg-ivory/10"
            >
              Read the method
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 md:grid-cols-3 lg:px-8">
          <Evidence
            label="Historical record"
            body="Dates, places, texts, and relationships checked against modern scholarship."
            tone="solid"
          />
          <Evidence
            label="Teaching tradition"
            body="Practices and sayings attributed to Khwajagan circles and later commentators."
            tone="annotated"
          />
          <Evidence
            label="Living memory"
            body="Hagiography, shrine traditions, Bennett, Shushud, and contemporary accounts."
            tone="dotted"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Before the order-name
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
              A school of companionship in the eastern Islamic world
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              <em>Khwajagan</em> means "the Masters." The term points less to a single medieval
              bureaucracy than to a remembered field of teachers whose circles joined learning,
              livelihood, service, and inward remembrance. Later Naqshbandi authors gathered these
              lives into a genealogy; the historical record also preserves diversity, argument, and
              more than one account of succession.
            </p>
          </div>
          <div className="border-t border-gold/35">
            {formationChapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className="grid gap-4 border-b border-gold/35 py-8 md:grid-cols-[7rem_1fr]"
              >
                <div>
                  <div className="font-serif text-3xl text-gold">0{index + 1}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-stone">
                    {chapter.period}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-lapis-deep">{chapter.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{chapter.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Historical network
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep md:text-5xl">
              From Hamadan and Marv into Transoxiana
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-stone">
              Yusuf al-Hamadani's teaching network linked Khurasan and Transoxiana. Later
              biographies name Ahmad Yasawi and Abd al-Khaliq Ghijduwani among his successors. The
              Atlas follows these relations with their evidence visible, rather than treating every
              later lineage diagram as a settled medieval fact.
            </p>
            <Link
              to="/map"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-lapis-deep transition-colors hover:text-gold"
            >
              Open the geographic atlas <MapPinned className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden border border-gold/30 bg-card p-6 md:p-8">
            <div
              className="absolute left-[2.42rem] top-16 bottom-16 border-l-2 border-gold/50"
              aria-hidden
            />
            <ol className="relative space-y-7">
              {masters.map((master, index) => (
                <li key={master.slug} className="relative grid grid-cols-[30px_1fr] gap-4">
                  <span
                    className={`mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-card ${index === 1 ? "bg-ruby" : "bg-gold"}`}
                  />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <Link
                        to="/masters/$slug"
                        params={{ slug: master.slug }}
                        className="font-serif text-2xl text-lapis-deep hover:text-ruby"
                      >
                        {master.name}
                      </Link>
                      <span className="text-xs text-stone">{master.dates}</span>
                    </div>
                    <p className="mt-1 text-sm text-stone">{master.place}</p>
                    <span
                      className={`mt-3 inline-flex border px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${master.kind.includes("+") ? "border-gold/60 text-lapis" : "border-turquoise/60 text-lapis"}`}
                    >
                      {master.kind}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              The Bukhara constellation
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep md:text-5xl">
              Seven lives, not merely seven links
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              The Seven Pirs route gives physical form to a remembered succession. The Atlas reads
              each master as a life in place: what can be said from the evidence, what later
              tradition teaches through that life, and how the shrine continues to shape the
              spiritual geography of Bukhara.
            </p>
          </div>

          <div className="mt-12 divide-y divide-gold/30 border-y border-gold/30">
            {bukharaMasterSlugs.map((slug, index) => {
              const master = getMaster(slug);
              const reading = masterDeepReadings[slug];
              if (!master || !reading) return null;
              return (
                <article
                  key={slug}
                  className="grid gap-6 py-9 md:grid-cols-[3.5rem_0.72fr_1.28fr] md:gap-8"
                >
                  <div className="font-serif text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <Link
                      to="/masters/$slug"
                      params={{ slug }}
                      className="font-serif text-2xl text-lapis-deep transition-colors hover:text-ruby"
                    >
                      {master.name}
                    </Link>
                    <div className="mt-2 text-xs uppercase tracking-[0.14em] text-stone">
                      {master.dates}
                    </div>
                    <div className="mt-3 text-sm text-stone">{master.region}</div>
                  </div>
                  <div>
                    <p className="leading-relaxed text-stone">{reading.lifeInPlace}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                      <Link
                        to="/masters/$slug"
                        params={{ slug }}
                        className="inline-flex items-center gap-2 border-b border-gold pb-1 text-lapis-deep hover:text-ruby"
                      >
                        Read the full life <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-xs text-stone">{master.evidence}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Teaching tradition
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              A discipline carried into ordinary life
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/75">
              The first eight phrases are traditionally ascribed to the Khwajagan current centred on
              Ghijduwani; three further forms of vigilance are associated with Baha al-Din
              Naqshband. Together they became the well-known eleven principles of the later order.
              They are a vocabulary of spiritual practice, not a substitute for the distinct
              practices of every Central Asian order.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([term, meaning, period]) => (
              <div key={term} className="bg-lapis-deep p-6">
                <div className="text-[9px] uppercase tracking-[0.2em] text-ivory/45">{period}</div>
                <div className="font-serif text-2xl text-gold-soft">{term}</div>
                <div className="mt-2 text-sm text-ivory/70">{meaning}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 border-t border-ivory/20 pt-8 md:grid-cols-[0.65fr_1.35fr]">
            <div className="flex items-start gap-3 text-gold-soft">
              <ScrollText className="mt-1 h-5 w-5 shrink-0" />
              <span className="font-serif text-xl">A vocabulary of formation</span>
            </div>
            <p className="text-sm leading-relaxed text-ivory/70">
              These phrases were transmitted, interpreted, and rearranged across generations. The
              first eight are conventionally associated with Ghijduwani; the three forms of
              <em> wuquf</em> belong to the later Naqshbandi formulation. They should be studied as
              mutually reinforcing disciplines of attention, not isolated techniques or a
              self-guided programme.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-parchment py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              The Threshold at Bukhara
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
              From the Path of the Masters to the Naqshbandiyya
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-stone">
              Bahāʾ al-Dīn Naqshband inherited a Khwajagan world of companionship, work, inward
              remembrance, and Bukhara-oasis shrines. His principal human teacher, Sayyid Amīr
              Kulāl, stands at the visible threshold. Later Naqshbandi authors read the earlier
              masters as their ancestry; modern history asks us to keep that devotional continuity
              distinct from the later consolidation of an order bearing Naqshband's name.
            </p>
            <Link
              to="/masters/$slug"
              params={{ slug: "bahauddin-naqshband" }}
              className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-lapis-deep transition-colors hover:text-ruby"
            >
              Meet Baha al-Din Naqshband <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="border border-gold/30 bg-card p-7">
            <div className="text-[10px] uppercase tracking-[0.24em] text-gold">
              Reading the transition
            </div>
            <ol className="mt-6 space-y-5 text-sm leading-relaxed text-stone">
              <li>
                <span className="font-serif text-xl text-lapis-deep">01</span> Khwajagan names a
                field of masters and remembered succession in Central Asia.
              </li>
              <li>
                <span className="font-serif text-xl text-lapis-deep">02</span> Baha al-Din's Bukhara
                circle gives that inheritance a durable devotional focus.
              </li>
              <li>
                <span className="font-serif text-xl text-lapis-deep">03</span> Later networks,
                writings, shrines, and branches make Naqshbandiyya a worldwide order.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              The textual inheritance
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
              The books did not merely preserve the path; they helped shape its memory
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              Early Khwajagan teaching was carried above all through companionship. The surviving
              picture comes from layered writings: remembered speech, succession narratives,
              biographies, doctrinal compilations, letters, and later hagiography. Each genre
              answers a different question and must be read accordingly.
            </p>
          </div>
          <div className="divide-y divide-gold/30 border-y border-gold/30">
            <TextWitness
              date="Fourteenth-fifteenth centuries"
              title="Maslak al-arifin and competing memories"
              body="Its redactions preserve more than one succession protocol. The differences reveal that early Khwajagan authority was debated before later hagiography gave the lineage its familiar, smoother form."
              status="Textual history"
            />
            <TextWitness
              date="Early Naqshbandi generation"
              title="Anis al-talibin and Qudsiyya"
              body="These works bring us closer to the teaching world around Baha al-Din and Muhammad Parsa. Their recension histories still require care: proximity to the first generations does not remove the work of transmission and editing."
              status="Early tradition"
            />
            <TextWitness
              date="Early sixteenth century"
              title="Rashahat Ayn al-Hayat"
              body="Ali ibn Husayn Safi's great treasury gave the Khwajagan masters one of their most influential literary afterlives. It is indispensable devotional history, but it writes from a later Naqshbandi horizon."
              status="Hagiographical tradition"
            />
            <TextWitness
              date="Fifteenth century"
              title="Letters, poetry, and learned transmission"
              body="The writings of Parsa, Charkhi, Jami, and Ahrar show the inheritance becoming commentary, anthology, correspondence, and public service. The path moved through books and institutions as well as through formal chains of authorization."
              status="Documentary and literary record"
            />
          </div>
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              How the Atlas reads lineage
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep">
              Reverence with historical clarity
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-stone">
              Hagiography and sacred memory are not discarded here. They are given their proper
              place alongside texts, scholarship, and community testimony. The map makes the
              distinction visible, so visitors can move through the tradition without losing either
              its depth or its historical texture.
            </p>
          </div>
          <aside className="border-l-4 border-gold bg-parchment p-7">
            <ShieldCheck className="h-6 w-6 text-ruby" />
            <h3 className="mt-4 font-serif text-2xl text-lapis-deep">Source-led by design</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              This section is grounded in modern research on Hamadani, the Khwajagan, Yasawiyya,
              Naqshbandiyya, and Central Asian hagiography. Bennett and Shushud remain valuable
              interpretive companions, clearly marked as such.
            </p>
            <Link
              to="/library"
              className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
            >
              Browse the research library <BookMarked className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex max-w-3xl items-start gap-4">
            <Landmark className="mt-1 h-7 w-7 shrink-0 text-gold" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Sacred geography
              </div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                A path written across oases and villages
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-px border border-ivory/15 bg-ivory/15 md:grid-cols-2">
            {sacredPlaces.map((site) => (
              <article key={site.place} className="bg-lapis-deep p-7 md:p-9">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/45">
                  {site.country}
                </div>
                <h3 className="mt-2 font-serif text-3xl text-gold-soft">{site.place}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">{site.body}</p>
                <Link
                  to={site.to}
                  className="mt-6 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm text-gold-soft hover:text-ivory"
                >
                  Locate in the Atlas <MapPinned className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Research shelf</div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep md:text-5xl">
              Read the tradition in layers
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              Primary and hagiographical witnesses are kept distinct from modern historical
              reconstruction and contemporary heritage accounts. Links lead to publishers,
              catalogues, institutions, or public texts; the Atlas does not re-host restricted
              editions.
            </p>
          </div>
          <Link
            to="/library"
            className="inline-flex shrink-0 items-center gap-2 border-b border-gold pb-1 text-lapis-deep hover:text-ruby"
          >
            Open the complete catalogue <BookOpenText className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px border border-gold/30 bg-gold/30 md:grid-cols-2 lg:grid-cols-3">
          {sourceShelfIds.map((id) => {
            const source = khwajaganLibrary.find((item) => item.id === id);
            if (!source) return null;
            return (
              <article key={id} className="flex min-h-72 flex-col bg-card p-7">
                <div className="text-[9px] uppercase tracking-[0.2em] text-gold">
                  {source.topic} · {source.language}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-lapis-deep">
                  {source.title}
                </h3>
                <div className="mt-2 text-xs text-stone">{source.author}</div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-stone">
                  {source.description}
                </p>
                {source.href && (
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
                  >
                    Consult source <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gold/25 bg-parchment py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Continue the atlas
              </div>
              <h2 className="mt-2 font-serif text-3xl text-lapis-deep">
                Continue into the Naqshbandiyya
              </h2>
            </div>
            <Link
              to="/orders/$slug"
              params={{ slug: "naqshbandiyya" }}
              className="inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory transition-colors hover:bg-lapis"
            >
              Open the Naqshbandiyya overview <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function TextWitness({
  date,
  title,
  body,
  status,
}: {
  date: string;
  title: string;
  body: string;
  status: string;
}) {
  return (
    <article className="py-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-gold">{date}</div>
        <div className="border border-turquoise/50 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-lapis">
          {status}
        </div>
      </div>
      <h3 className="mt-3 font-serif text-2xl text-lapis-deep">{title}</h3>
      <p className="mt-3 leading-relaxed text-stone">{body}</p>
    </article>
  );
}

function Evidence({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "solid" | "annotated" | "dotted";
}) {
  const mark =
    tone === "solid"
      ? "bg-turquoise"
      : tone === "annotated"
        ? "bg-gold"
        : "border-2 border-ruby bg-transparent";
  return (
    <div className="flex gap-3">
      <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${mark}`} />
      <div>
        <div className="font-serif text-xl text-lapis-deep">{label}</div>
        <p className="mt-1 text-sm leading-relaxed text-stone">{body}</p>
      </div>
    </div>
  );
}
