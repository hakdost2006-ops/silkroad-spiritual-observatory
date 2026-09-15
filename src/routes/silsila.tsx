import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GitBranch, MapPin, ScrollText } from "lucide-react";
import { PageHeader, Panel, SectionHeader, Chip } from "../components/ui-primitives";
import { silsilaLinks, silsilaNodes } from "../data/nursafardiyya";

export const Route = createFileRoute("/silsila")({
  head: () => ({
    meta: [
      { title: "Sufi Silsila — Silk Road Sufi Atlas" },
      {
        name: "description",
        content: "A visual lineage map of Central Asian Sufi masters, orders, and living houses.",
      },
      { property: "og:title", content: "Sufi Silsila — Central Asian Sufi Houses" },
      {
        property: "og:description",
        content: "Trace the masters, places, and living lineages of the Silk Road Sufi Atlas.",
      },
    ],
  }),
  component: SilsilaPage,
});

function SilsilaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Sufi Silsila"
        title="Lineage as a living map"
        intro="Trace the masters, cities, and houses that carry Central Asian Sufism from Khurasan and Turkistan into the living traditions of Uzbekistan today."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="relative min-h-[620px] overflow-hidden border-4 border-lapis-deep bg-lapis-deep text-ivory shadow-2xl">
            <div className="absolute inset-0 bg-star-tile opacity-[0.14]" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(221,173,77,0.25),transparent_32%),radial-gradient(circle_at_75%_65%,rgba(68,189,196,0.18),transparent_30%)]" />
            <div className="absolute left-[8%] right-[8%] top-[50%] h-px bg-gold/30" />
            <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.28em] text-ivory/50">
              Khurasan · Transoxiana · Khwarazm · Turkistan · Uzbekistan
            </div>

            {silsilaLinks.map((link) => {
              const from = silsilaNodes.find((node) => node.id === link.from)!;
              const to = silsilaNodes.find((node) => node.id === link.to)!;
              const left = Math.min(from.x, to.x);
              const top = Math.min(from.y, to.y);
              const width = Math.abs(to.x - from.x);
              const height = Math.abs(to.y - from.y);
              return (
                <div
                  key={`${link.from}-${link.to}`}
                  className="absolute border-t border-gold/35"
                  style={{
                    left: `${left}%`,
                    top: `${top + height / 2}%`,
                    width: `${Math.max(width, 10)}%`,
                    transform: `rotate(${to.y > from.y ? 12 : -12}deg)`,
                    transformOrigin: "left center",
                  }}
                  title={link.label}
                />
              );
            })}

            {silsilaNodes.map((node) => (
              <article
                key={node.id}
                className="absolute w-[190px] -translate-x-1/2 -translate-y-1/2 border border-gold/45 bg-lapis-deep/88 p-4 backdrop-blur"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="flex items-center gap-2 text-gold">
                  <GitBranch className="h-3.5 w-3.5" />
                  <span className="text-[9px] uppercase tracking-[0.24em]">{node.order}</span>
                </div>
                <h2 className="mt-2 font-serif text-xl leading-tight text-gold-soft">
                  {node.name}
                </h2>
                <div className="mt-1 text-xs text-ivory/60">{node.dates}</div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-ivory/70">
                  <MapPin className="h-3 w-3 text-gold" />
                  {node.place}
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <Panel>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                How to Read This
              </div>
              <h2 className="mt-3 font-serif text-3xl text-lapis-deep">
                A map of transmission, not a closed genealogy
              </h2>
              <p className="mt-4 text-stone leading-relaxed">
                This page treats silsila as a living geography: teacher-student links, shared
                practices, cities of transmission, and later houses that inherit multiple streams.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>Khwajagan</Chip>
                <Chip>Yasaviyya</Chip>
                <Chip>Kubrawiyya</Chip>
                <Chip>Naqshbandiyya</Chip>
                <Chip>Nursafardiyya</Chip>
              </div>
            </Panel>

            <Panel>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Next Build Layer
              </div>
              <ul className="mt-4 space-y-3 text-sm text-stone">
                <li>Attach each node to a master biography.</li>
                <li>Add route lines across the sacred map.</li>
                <li>Separate verified historical links from devotional inheritance.</li>
                <li>Show present-day houses and centers in Uzbekistan.</li>
              </ul>
            </Panel>
          </aside>
        </div>
      </section>

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Lineage Notes"
            title="Masters, places, and houses"
            intro="Each line below can become a researched path page with sources, dates, maps, texts, and downloadable archive materials."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {silsilaLinks.map((link) => {
              const from = silsilaNodes.find((node) => node.id === link.from)!;
              const to = silsilaNodes.find((node) => node.id === link.to)!;
              return (
                <Panel key={`${link.from}-${link.to}`} className="flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                    {link.label}
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <ScrollText className="h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <div className="font-serif text-xl text-lapis-deep">{from.name}</div>
                      <div className="text-xs text-stone">{from.place}</div>
                    </div>
                  </div>
                  <ArrowRight className="my-4 h-4 w-4 text-gold" />
                  <div className="flex items-start gap-3">
                    <ScrollText className="h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <div className="font-serif text-xl text-lapis-deep">{to.name}</div>
                      <div className="text-xs text-stone">{to.place}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-stone">{to.note}</p>
                </Panel>
              );
            })}
          </div>
          <Link
            to="/masters"
            className="mt-10 inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory hover:bg-lapis transition-colors"
          >
            Open master biographies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
