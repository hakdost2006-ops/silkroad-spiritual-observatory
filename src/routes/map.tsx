import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, List, Map as MapIcon, MapPin } from "lucide-react";
import { sites } from "../data/sites";
import { PageHeader } from "../components/ui-primitives";
import mapImg from "../assets/silk-road-map.jpg";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Sacred Geography — Sufi Atlas" },
      {
        name: "description",
        content:
          "An illustrated map and register of the shrines and sacred cities of Central Asian Sufism.",
      },
      { property: "og:title", content: "Sacred Geography of Central Asian Sufism" },
      {
        property: "og:description",
        content: "A map and list of the shrine geography of the Silk Road.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [active, setActive] = useState(sites[0].slug);
  const [view, setView] = useState<"map" | "list">("map");
  const activeSite = sites.find((site) => site.slug === active) ?? sites[0];
  return (
    <div>
      <PageHeader
        eyebrow="Atlas · Sacred geography"
        title="Shrines, cities, and thresholds"
        intro="Move across the sacred geography of the Silk Road, then enter each place through its history, masters, and living pilgrimage memory."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gold/25 pb-5">
          <p className="max-w-2xl text-sm leading-relaxed text-stone">
            Locations are approximate and indicate historical geography, not precise shrine
            coordinates. Each record names the evidence and associations presently held by the
            Atlas.
          </p>
          <div className="inline-flex border border-gold/35 bg-card p-1" aria-label="Map display">
            <button
              onClick={() => setView("map")}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm ${view === "map" ? "bg-lapis-deep text-ivory" : "text-lapis-deep hover:bg-parchment"}`}
            >
              <MapIcon className="h-4 w-4" /> Map
            </button>
            <button
              onClick={() => setView("list")}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm ${view === "list" ? "bg-lapis-deep text-ivory" : "text-lapis-deep hover:bg-parchment"}`}
            >
              <List className="h-4 w-4" /> List
            </button>
          </div>
        </div>

        {view === "map" ? (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="relative overflow-hidden border-4 border-lapis-deep bg-lapis-deep">
              <img
                src={mapImg}
                alt="Illustrated Silk Road map"
                className="h-auto w-full opacity-90"
              />
              <div className="absolute inset-0">
                {sites.map((site) => (
                  <button
                    key={site.slug}
                    onClick={() => setActive(site.slug)}
                    style={{ left: `${site.x}%`, top: `${site.y}%` }}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                    aria-label={site.name}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ring-2 ring-ivory transition-all ${active === site.slug ? "scale-150 bg-ruby" : "bg-gold group-hover:scale-125"}`}
                    />
                    <span
                      className={`mt-1 whitespace-nowrap bg-lapis-deep/80 px-1.5 py-0.5 text-[10px] uppercase tracking-wider ${active === site.slug ? "text-ivory" : "text-ivory/75"}`}
                    >
                      {site.city}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <aside className="h-fit border border-gold/25 bg-card p-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Selected site</div>
              <h2 className="mt-2 font-serif text-3xl text-lapis-deep">{activeSite.name}</h2>
              <div className="mt-1 text-sm text-stone">
                {activeSite.city}, {activeSite.country}
              </div>
              <p className="mt-4 leading-relaxed text-stone">{activeSite.description}</p>
              <div className="mt-5 border-t border-gold/25 pt-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  Associated traditions
                </div>
                <div className="mt-1 text-sm capitalize text-lapis-deep">
                  {activeSite.orders.join(" · ")}
                </div>
              </div>
              <Link
                to="/sites/$slug"
                params={{ slug: activeSite.slug }}
                className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-ruby"
              >
                Enter the site record <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <Link
                key={site.slug}
                to="/sites/$slug"
                params={{ slug: site.slug }}
                className="group border border-gold/25 bg-card p-6 transition-colors hover:border-gold"
              >
                <MapPin className="h-5 w-5 text-gold" />
                <h2 className="mt-4 font-serif text-2xl text-lapis-deep group-hover:text-ruby">
                  {site.name}
                </h2>
                <div className="mt-1 text-xs text-stone">
                  {site.city}, {site.country} · {site.founded}
                </div>
                <p className="mt-4 line-clamp-4 leading-relaxed text-stone">{site.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep">
                  Open record <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
