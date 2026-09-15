import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sites } from "../data/sites";
import { PageHeader } from "../components/ui-primitives";
import mapImg from "../assets/silk-road-map.jpg";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Sacred Map — Silk Road Sufi Atlas" },
      {
        name: "description",
        content: "An illustrated map of the shrines and sacred cities of Central Asian Sufism.",
      },
      { property: "og:title", content: "Sacred Map of Central Asian Sufism" },
      {
        property: "og:description",
        content: "A cartographic view of the sacred geography of the Silk Road.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [active, setActive] = useState(sites[0].slug);
  const activeSite = sites.find((s) => s.slug === active)!;

  return (
    <div>
      <PageHeader
        eyebrow="Sacred Map"
        title="Cartography of the friends of God"
        intro="Move across the shrines of the Silk Road — from Kunya-Urgench in the west to Kashgar in the east."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="relative bg-lapis-deep border-4 border-lapis-deep overflow-hidden">
          <img src={mapImg} alt="Illustrated Silk Road map" className="w-full h-auto opacity-90" />
          <div className="absolute inset-0">
            {sites.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center`}
                aria-label={s.name}
              >
                <span
                  className={`h-3 w-3 rounded-full ring-2 ring-ivory transition-all ${active === s.slug ? "bg-ruby scale-150" : "bg-gold group-hover:scale-125"}`}
                />
                <span
                  className={`mt-1 text-[10px] uppercase tracking-wider whitespace-nowrap ${active === s.slug ? "text-ivory" : "text-ivory/70"} bg-lapis-deep/70 px-1.5 py-0.5`}
                >
                  {s.city}
                </span>
              </button>
            ))}
          </div>
        </div>
        <aside className="bg-card border border-gold/25 p-6 h-fit">
          <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Selected site</div>
          <h3 className="mt-2 font-serif text-3xl text-lapis-deep">{activeSite.name}</h3>
          <div className="text-sm text-stone mt-1">
            {activeSite.city}, {activeSite.country}
          </div>
          <p className="mt-4 text-stone leading-relaxed">{activeSite.description}</p>
          {activeSite.orders.length > 0 && (
            <div className="mt-5 pt-4 border-t border-gold/25">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Orders</div>
              <div className="text-sm text-lapis-deep capitalize mt-1">
                {activeSite.orders.join(" · ")}
              </div>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
