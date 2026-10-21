import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  ChevronDown,
  ExternalLink,
  GitBranch,
  MapPinned,
  Network,
  ScrollText,
} from "lucide-react";
import { getMaster } from "../data/masters";
import { orderVisuals } from "../data/visual-archive";
import { NaqshbandiNetwork } from "../components/naqshbandi-network";
import {
  evidenceLabels,
  getLineageNode,
  naqshbandiLineageSequences,
  type LineageEvidence,
  type LineageView,
} from "../data/naqshbandi-lineage";
import {
  naqshbandiChapters,
  naqshbandiPrinciples,
  naqshbandiProfiles,
  naqshbandiRegions,
  naqshbandiRelationships,
  naqshbandiSourceMethod,
  naqshbandiSources,
  naqshbandiViewIntroductions,
} from "../data/naqshbandi-history";

export const Route = createFileRoute("/lineage/naqshbandiyya")({
  head: () => ({
    meta: [
      { title: "Naqshbandiyya: A Lineage Across Centuries | Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "Explore the Khwajagan roots, Baha al-Din's circles, Ahrar, Herat, Dahbid and the regional afterlives of the Naqshbandiyya through a source-aware lineage atlas.",
      },
    ],
  }),
  component: NaqshbandiyyaLineagePage,
});

const views: { id: LineageView; label: string; period: string }[] = [
  { id: "formation", label: "Khwajagan roots", period: "Before 1389" },
  { id: "networks", label: "Living circles", period: "14th-15th centuries" },
  { id: "afterlives", label: "Branching paths", period: "16th century onward" },
];
const sections = [
  ["story", "The story"],
  ["lineage", "Masters & lineage"],
  ["principles", "Teaching words"],
  ["regions", "Regional paths"],
  ["sources", "Sources & library"],
] as const;
const evidenceColors: Record<LineageEvidence, string> = {
  "traditional-memory": "text-ruby border-ruby/30",
  "early-tradition": "text-lapis-deep border-gold/50",
  documented: "text-[#176858] border-[#176858]/35",
  "scholarly-reconstruction": "text-lapis border-lapis/30",
  "modern-community": "text-stone border-stone/35",
};

function Evidence({ type }: { type: LineageEvidence }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 border-b pb-1 text-[11px] leading-relaxed ${evidenceColors[type]}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      {evidenceLabels[type].label}
    </span>
  );
}

function References({ ids }: { ids: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-stone">
      <span>Sources</span>
      {ids.map((id) => (
        <a
          key={id}
          href={`#source-${id}`}
          className="border-b border-gold/50 text-lapis-deep hover:text-ruby"
          aria-label={`Bibliography: ${naqshbandiSources.find((source) => source.id === id)?.title || id}`}
        >
          {id}
        </a>
      ))}
    </div>
  );
}

function NaqshbandiyyaLineagePage() {
  const [view, setView] = useState<LineageView>("formation");
  const [selectedId, setSelectedId] = useState("baha-al-din");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baha = getMaster("bahauddin-naqshband");
  const calligraphy = orderVisuals.naqshbandiyya;
  const sequences = naqshbandiLineageSequences.filter((sequence) => sequence.view === view);
  const visibleIds = new Set(sequences.flatMap((sequence) => sequence.nodes));
  const activeId = visibleIds.has(selectedId) ? selectedId : sequences[0].nodes[0];
  const selected = getLineageNode(activeId)!;
  const profile = naqshbandiProfiles[activeId];
  const selectedMaster = selected.masterSlug ? getMaster(selected.masterSlug) : undefined;
  const relationships = naqshbandiRelationships.filter(
    (edge) => edge.from === activeId || edge.to === activeId,
  );

  function changeView(index: number, focus = false) {
    const nextView = views[index].id;
    setView(nextView);
    const first = naqshbandiLineageSequences.find((sequence) => sequence.view === nextView)!;
    setSelectedId(nextView === "formation" ? "baha-al-din" : first.nodes[0]);
    if (focus) tabRefs.current[index]?.focus();
  }

  function selectMaster(id: string) {
    setSelectedId(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() =>
        document.getElementById("master-reader")?.scrollIntoView({ block: "start" }),
      );
    }
  }

  return (
    <div className="naqsh-page bg-[#fbfcfa]">
      <style>{`
      .naqsh-page { letter-spacing: 0; }
      .naqsh-page .font-serif { letter-spacing: 0; }
      .naqsh-page h1, .naqsh-page h2, .naqsh-page h3 { overflow-wrap: anywhere; }
      .naqsh-page [id] { scroll-margin-top: 9rem; }
      .naqsh-page a:focus-visible, .naqsh-page button:focus-visible, .naqsh-page summary:focus-visible {
        outline: 3px solid #9a3045; outline-offset: 4px;
      }
      .naqsh-page summary::-webkit-details-marker { display: none; }
      .naqsh-page details[open] > summary .naqsh-chevron { transform: rotate(180deg); }
      @media (prefers-reduced-motion: reduce) { .naqsh-page * { scroll-behavior: auto; transition: none; } }
    `}</style>

      <section className="relative isolate min-h-[32rem] overflow-hidden bg-[#183d35] text-white md:min-h-[35rem]">
        {baha?.image && (
          <img
            src={baha.image.src}
            alt={baha.image.alt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
        )}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-10 md:pb-16 md:pt-12 lg:px-8">
          <Link
            to="/orders/$slug"
            params={{ slug: "naqshbandiyya" }}
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-gold-soft"
          >
            <ArrowLeft className="h-4 w-4" /> Naqshbandiyya order portrait
          </Link>
          <div className="mt-8 flex items-center gap-4">
            <img
              src={calligraphy.src}
              alt={calligraphy.alt}
              width="68"
              height="68"
              className="h-[68px] w-[68px] object-contain"
            />
            <p className="text-xs text-white/90">Bukhara · Central Asia · Beyond the Oxus</p>
          </div>
          <h1 className="mt-5 font-serif text-[56px] leading-none md:text-[88px]">Naqshbandiyya</h1>
          <p className="mt-4 max-w-2xl font-serif text-[28px] leading-tight md:text-[36px]">
            A lineage across centuries
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
            From the companions of the Bukhara oasis to a world of paths: the masters, books and
            communities that made an inward inheritance travel.
          </p>
          <a
            href="#story"
            className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-white/70 text-sm hover:text-gold-soft"
          >
            Begin the story <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>
      <div className="border-b border-gold/25 px-5 py-3 text-[11px] leading-relaxed text-stone">
        <div className="mx-auto max-w-7xl lg:px-3">
          Qasr-i Arifan, Bukhara. Photograph:{" "}
          <a href={baha?.image?.sourceUrl} className="underline">
            Umid1108 / Wikimedia Commons
          </a>
          ; framing crop. Calligraphy:{" "}
          <a href={calligraphy.sourceUrl} className="underline">
            Riznaldo / Wikimedia Commons
          </a>
          ; scaled, unaltered. Both{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline">
            CC BY-SA 4.0
          </a>
          .
        </div>
      </div>

      <nav
        aria-label="Naqshbandiyya chapters"
        className="sticky top-16 z-20 border-b border-gold/30 bg-[#fbfcfa]/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 lg:px-8">
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex min-h-14 shrink-0 items-center border-b-2 border-transparent text-sm text-lapis-deep hover:border-ruby"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="story"
        aria-labelledby="story-title"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs text-ruby">A biography of a tradition</p>
            <h2
              id="story-title"
              className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl"
            >
              How a field of masters became a named path
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-8 text-stone">
            <p>
              The Khwajagan were a varied field of Central Asian teachers and circles. The
              Naqshbandiyya became a durable named formation through Baha al-Din's companions, their
              writings, and later networks. Its history unfolds through remembered ancestry,
              ordinary companionship, institutional work and new regional settings.
            </p>
            <p>
              A silsila asks who carries a spiritual inheritance. History also asks how that
              inheritance was remembered, written and organized. This Atlas follows both questions,
              allowing the warmth of the tradition and the limits of the evidence to remain visible.
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-gold/30">
          {naqshbandiChapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="grid gap-7 border-b border-gold/30 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-stone">
                  <span className="font-serif text-2xl text-ruby">0{index + 1}</span>
                  {chapter.period}
                </div>
                <h3 className="mt-3 font-serif text-[32px] leading-tight text-lapis-deep">
                  {chapter.title}
                </h3>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-stone">
                  <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-ruby" />
                  {chapter.place}
                </p>
                <div className="mt-5">
                  <Evidence type={chapter.evidence} />
                </div>
              </div>
              <div className="max-w-3xl">
                <div className="space-y-5 text-base leading-8 text-stone">
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <References ids={chapter.sourceRefs} />
                <details className="mt-5 border-t border-gold/25 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-lapis-deep">
                    Evidence and open questions{" "}
                    <ChevronDown className="naqsh-chevron h-4 w-4 shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-stone">{chapter.question}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="lineage"
        aria-labelledby="lineage-title"
        className="border-y border-[#176858]/20 bg-[#edf3ef] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-[#176858]">
            <Network className="h-4 w-4" /> Masters and their relationships
          </div>
          <h2 id="lineage-title" className="mt-3 font-serif text-4xl text-lapis-deep md:text-5xl">
            The lineage opens into a network
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-stone">
            Sacred ancestry, a teacher's companionship, a family inheritance and the movement of a
            book each leave a different trace. Every master and relationship below names the kind of
            evidence that supports it.
          </p>
          <details className="mt-6 border-y border-[#176858]/20 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-lapis-deep">
              Five kinds of evidence <ChevronDown className="naqsh-chevron h-4 w-4 shrink-0" />
            </summary>
            <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(evidenceLabels).map(([id, item]) => (
                <div key={id}>
                  <dt>
                    <Evidence type={id as LineageEvidence} />
                  </dt>
                  <dd className="mt-2 text-xs leading-6 text-stone">{item.description}</dd>
                </div>
              ))}
            </dl>
          </details>
          <div
            role="tablist"
            aria-label="Lineage periods"
            className="mt-8 grid grid-cols-3 border-b border-[#176858]/25"
          >
            {views.map((item, index) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                aria-selected={view === item.id}
                aria-controls="lineage-panel"
                tabIndex={view === item.id ? 0 : -1}
                onClick={() => changeView(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowRight") next = (index + 1) % views.length;
                  else if (event.key === "ArrowLeft")
                    next = (index + views.length - 1) % views.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = views.length - 1;
                  else return;
                  event.preventDefault();
                  changeView(next, true);
                }}
                className={`min-h-[76px] border-b-2 px-2 py-3 text-left transition-colors sm:px-5 ${view === item.id ? "border-[#176858] bg-[#176858] text-white" : "border-transparent text-lapis-deep hover:bg-white/70"}`}
              >
                <span className="block font-serif text-lg leading-tight sm:text-2xl">
                  {item.label}
                </span>
                <span
                  className={`mt-1 block text-[10px] leading-relaxed sm:text-xs ${view === item.id ? "text-white/80" : "text-stone"}`}
                >
                  {item.period}
                </span>
              </button>
            ))}
          </div>
          <div
            id="lineage-panel"
            role="tabpanel"
            aria-labelledby={`tab-${view}`}
            tabIndex={0}
            className="pt-7"
          >
            <p className="max-w-4xl text-sm leading-7 text-stone">
              {naqshbandiViewIntroductions[view]}
            </p>
            <NaqshbandiNetwork view={view} activeId={activeId} onSelect={selectMaster} />
            <div className="mt-8 grid gap-9 lg:grid-cols-[1fr_1fr] lg:gap-12">
              <div className="space-y-8">
                {sequences.map((sequence) => (
                  <div key={sequence.id}>
                    <p className="text-xs text-[#176858]">{sequence.eyebrow}</p>
                    <h3 className="mt-1 font-serif text-2xl text-lapis-deep">{sequence.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-stone">{sequence.relationship}</p>
                    <ol className="mt-4 grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                      {sequence.nodes.map((id) => {
                        const node = getLineageNode(id)!;
                        return (
                          <li key={`${sequence.id}-${id}`}>
                            <button
                              type="button"
                              aria-pressed={activeId === id}
                              aria-controls="master-reader"
                              onClick={() => selectMaster(id)}
                              className={`flex min-h-[90px] w-full items-start justify-between gap-3 border-b px-3 py-4 text-left transition-colors ${activeId === id ? "border-[#176858] bg-white text-[#176858]" : "border-[#176858]/20 text-lapis-deep hover:bg-white/60"}`}
                            >
                              <span className="min-w-0">
                                <span className="block font-serif text-xl leading-tight">
                                  {node.name}
                                </span>
                                <span className="mt-2 block text-[11px] leading-relaxed text-stone">
                                  {node.place}
                                </span>
                              </span>
                              <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                            </button>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                ))}
              </div>
              <article
                id="master-reader"
                aria-live="polite"
                aria-atomic="true"
                className="min-w-0 self-start border-l-2 border-[#176858] bg-white p-5 sm:p-7 lg:sticky lg:top-36"
              >
                <div className="flex items-center justify-between gap-4">
                  <Evidence type={selected.evidence} />
                  <a
                    href="#lineage-panel"
                    aria-label="Back to masters"
                    title="Back to masters"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#176858] lg:hidden"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-4 font-serif text-[32px] leading-tight text-lapis-deep">
                  {selected.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#176858]">{selected.dates}</p>
                <p className="mt-3 flex gap-2 text-sm leading-6 text-stone">
                  <MapPinned className="mt-1 h-4 w-4 shrink-0" />
                  {selected.place}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-stone">
                  <p>{selected.summary}</p>
                  {profile.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <dl className="mt-6 space-y-5 border-t border-gold/30 pt-5 text-sm leading-7">
                  <div>
                    <dt className="font-medium text-lapis-deep">Contribution</dt>
                    <dd className="mt-1 text-stone">{profile.contribution}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-lapis-deep">Texts and teaching memory</dt>
                    <dd className="mt-1 text-stone">{profile.texts}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-lapis-deep">Tomb and local memory</dt>
                    <dd className="mt-1 text-stone">{profile.tomb}</dd>
                  </div>
                </dl>
                {relationships.length > 0 && (
                  <details className="mt-6 border-t border-gold/30 pt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-lapis-deep">
                      {relationships.length}{" "}
                      {relationships.length === 1 ? "relationship" : "relationships"} in this map{" "}
                      <ChevronDown className="naqsh-chevron h-4 w-4 shrink-0" />
                    </summary>
                    <ul className="mt-4 space-y-5">
                      {relationships.map((edge) => (
                        <li
                          key={`${edge.from}-${edge.to}`}
                          className="border-l border-[#176858]/35 pl-3"
                        >
                          <p className="text-sm leading-6 text-lapis-deep">
                            {getLineageNode(edge.from)?.name}{" "}
                            <ArrowRight aria-label="to" className="mx-1 inline h-3 w-3" />{" "}
                            {getLineageNode(edge.to)?.name}
                          </p>
                          <p className="mt-1 text-xs text-[#176858]">{edge.kind}</p>
                          <div className="mt-2">
                            <Evidence type={edge.evidence} />
                          </div>
                          <p className="mt-2 text-xs leading-6 text-stone">{edge.note}</p>
                          <References ids={edge.sourceRefs} />
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
                <details className="mt-5 border-t border-gold/30 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-lapis-deep">
                    What remains unresolved{" "}
                    <ChevronDown className="naqsh-chevron h-4 w-4 shrink-0" />
                  </summary>
                  <p className="mt-3 text-xs leading-6 text-stone">{profile.uncertainty}</p>
                </details>
                <References ids={selected.sourceRefs} />
                {selectedMaster && (
                  <Link
                    to="/masters/$slug"
                    params={{ slug: selectedMaster.slug }}
                    className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#176858] text-sm text-[#176858] hover:text-ruby"
                  >
                    Read the Atlas biography <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="principles"
        aria-labelledby="principles-title"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20"
      >
        <div>
          <BookOpenText className="h-6 w-6 text-ruby" />
          <h2
            id="principles-title"
            className="mt-4 font-serif text-4xl leading-tight text-lapis-deep"
          >
            A vocabulary of presence
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone">
            Eight Persian phrases are traditionally associated with Ghijduwani; three additional
            forms of vigilance are attached to Baha al-Din in later Naqshbandi formulation. These
            brief renderings introduce the historical vocabulary. Spellings and meanings vary across
            commentaries.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone">
            The earliest witnesses and the eight-plus-three arrangement remain under textual
            comparison. This is a reading of teaching words, not an instruction in breath, counted
            remembrance or retreat.
          </p>
          <References ids={["W07", "P98", "R01"]} />
        </div>
        <div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {naqshbandiPrinciples.map(([phrase, meaning], index) => (
              <div key={phrase} className="flex gap-4 border-b border-gold/30 py-4">
                <span className="w-6 shrink-0 pt-1 text-xs text-ruby">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-lapis-deep">{phrase}</h3>
                  <p className="mt-1 text-sm text-stone">{meaning}</p>
                  <p className="mt-2 text-[10px] text-stone">
                    {index < 8
                      ? "Traditional Ghijduwani attribution"
                      : "Later Baha al-Din attribution"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="regions"
        aria-labelledby="regions-title"
        className="border-y border-gold/25 bg-parchment/50 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <GitBranch className="h-6 w-6 text-ruby" />
          <h2 id="regions-title" className="mt-4 font-serif text-4xl text-lapis-deep md:text-5xl">
            Many roads from Central Asia
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-stone">
            A tradition travels through people, books, families and institutions. Each region gives
            the inheritance a new setting, and each connection needs its own name.
          </p>
          <div className="mt-10 grid gap-x-12 lg:grid-cols-2">
            {naqshbandiRegions.map((region) => (
              <article key={region.id} className="border-t border-gold/30 py-9">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-ruby">{region.place}</span>
                  <span className="text-stone">{region.period}</span>
                </div>
                <h3 className="mt-3 font-serif text-[30px] leading-tight text-lapis-deep">
                  {region.title}
                </h3>
                <div className="mt-4">
                  <Evidence type={region.evidence} />
                </div>
                <p className="mt-3 text-xs text-[#176858]">{region.relation}</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-stone">
                  {region.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <References ids={region.sourceRefs} />
                {region.id === "modern" && (
                  <Link
                    to="/golden-sufi-center"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
                  >
                    Golden Sufi Center portrait <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sources"
        aria-labelledby="sources-title"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <ScrollText className="h-6 w-6 text-ruby" />
            <h2
              id="sources-title"
              className="mt-4 font-serif text-4xl leading-tight text-lapis-deep"
            >
              Listening to the witnesses
            </h2>
          </div>
          <p className="max-w-3xl leading-8 text-stone">
            A sacred biography, a letter and a modern history do different work. A richer account
            comes from reading them together while asking when each was written, whose memory it
            carries and what it can establish. The Persian foundations remain an active research
            frontier.
          </p>
        </div>
        <div className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {naqshbandiSourceMethod.map((source) => (
            <article key={source.title} className="border-t border-gold/30 py-6">
              <p className="text-xs text-[#176858]">{source.layer}</p>
              <h3 className="mt-2 font-serif text-2xl text-lapis-deep">{source.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone">{source.text}</p>
              <References ids={source.refs} />
            </article>
          ))}
        </div>
        <div className="mt-14 border-t-2 border-lapis-deep pt-9">
          <h3 className="font-serif text-3xl text-lapis-deep">The reading library</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone">
            Follow the publisher, repository, catalogue or official community link for each work.
            The Atlas offers original synthesis; purchased research files and working translations
            stay in the private library.
          </p>
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
            {naqshbandiSources.map((source) => (
              <li
                key={source.id}
                id={`source-${source.id}`}
                className="border-t border-gold/30 py-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                  <span className="text-ruby">{source.id}</span>
                  <span className="text-stone">{source.layer}</span>
                </div>
                <h4 className="mt-2 font-serif text-2xl leading-tight text-lapis-deep">
                  {source.title}
                </h4>
                <p className="mt-2 text-xs leading-6 text-stone">{source.author}</p>
                <p className="mt-3 text-sm leading-7 text-stone">{source.use}</p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-gold text-sm text-lapis-deep hover:text-ruby"
                >
                  {source.linkLabel}
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  <span className="sr-only">: {source.title} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
