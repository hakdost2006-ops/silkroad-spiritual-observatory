import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookMarked, MapPinned, Network, ShieldCheck } from "lucide-react";
import mapImg from "../assets/silk-road-map.jpg";

export const Route = createFileRoute("/khwajagan")({
  head: () => ({
    meta: [
      { title: "Khwajagan: Masters of Wisdom - Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "A source-led map of the Khwajagan, the Central Asian masters whose diverse teaching networks shaped the Yasawiyya and later Naqshbandi world.",
      },
    ],
  }),
  component: KhwajaganPage,
});

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
  ["Hush dar dam", "Awareness in the breath"],
  ["Nazar bar qadam", "Watchfulness over one's step"],
  ["Safar dar watan", "The inward journey home"],
  ["Khalwat dar anjuman", "Solitude in the gathering"],
  ["Nigah dasht", "Guarding attention"],
  ["Yad dasht", "Sustained recollection"],
] as const;

function KhwajaganPage() {
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
            A network of Central Asian masters, places, and teaching communities. Not one
            uninterrupted golden chain, but a living field from which Yasawiyya and the later
            Naqshbandi world emerged.
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

      <section id="network" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
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
              These phrases are associated with the Khwajagan-Naqshbandi world. They are presented
              here as a vocabulary of spiritual practice, not as clinical technique or a substitute
              for the distinct practices of every Central Asian order.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([term, meaning]) => (
              <div key={term} className="bg-lapis-deep p-6">
                <div className="font-serif text-2xl text-gold-soft">{term}</div>
                <div className="mt-2 text-sm text-ivory/70">{meaning}</div>
              </div>
            ))}
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

      <section className="border-t border-gold/25 bg-parchment py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Continue the atlas
              </div>
              <h2 className="mt-2 font-serif text-3xl text-lapis-deep">
                Begin with Ahmad Yasawi and the Yasawiyya
              </h2>
            </div>
            <Link
              to="/masters/$slug"
              params={{ slug: "ahmad-yasawi" }}
              className="inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory transition-colors hover:bg-lapis"
            >
              Open Ahmad Yasawi's profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
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
