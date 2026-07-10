import { createFileRoute } from "@tanstack/react-router";
import { sites } from "../data/sites";
import { PageHeader, Panel, FieldLabel } from "../components/ui-primitives";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/sites")({
  head: () => ({
    meta: [
      { title: "Sacred Sites — Silk Road Sufi Atlas" },
      { name: "description", content: "Shrines, cities and thresholds of Central Asian Sufism from Bukhara to Kashgar." },
      { property: "og:title", content: "Sacred Sites of Central Asian Sufism" },
      { property: "og:description", content: "A curated register of the shrine geography of the Silk Road." },
    ],
  }),
  component: SitesPage,
});

function SitesPage() {
  return (
    <div>
      <PageHeader eyebrow="Sacred Sites" title="Shrines and thresholds" intro="The dome, the doorway, the enclosure — the geography through which the tradition breathes." />
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid gap-6 md:grid-cols-2">
        {sites.map((s) => (
          <Panel key={s.slug}>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-2xl text-lapis-deep leading-tight">{s.name}</h3>
                <div className="text-xs text-stone mt-1">{s.city}, {s.country} · {s.founded}</div>
                <p className="mt-4 text-stone leading-relaxed">{s.description}</p>
                {s.orders.length > 0 && (
                  <div className="mt-4">
                    <FieldLabel>Associated orders</FieldLabel>
                    <div className="text-sm text-lapis-deep capitalize">{s.orders.join(" · ")}</div>
                  </div>
                )}
              </div>
            </div>
          </Panel>
        ))}
      </section>
    </div>
  );
}