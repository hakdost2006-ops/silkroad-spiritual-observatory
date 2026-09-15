import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Ornament, Panel, FieldLabel } from "../components/ui-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Atlas — Silk Road Sufi Archive" },
      {
        name: "description",
        content:
          "About the Silk Road Sufi Atlas — a scholarly and reverent archive of Central Asian Sufi lineages, sites and living traditions.",
      },
      { property: "og:title", content: "About the Silk Road Sufi Atlas" },
      {
        property: "og:description",
        content: "Scholarship, devotion and living tradition, held in one archive.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="An atlas held with care"
        intro="A scholarly and spiritually resonant archive of Central Asian Sufi orders, masters, shrines, manuscripts and living practice."
      />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16 prose-invert">
        <p className="text-lg text-stone leading-relaxed">
          The Silk Road Sufi Atlas is a growing archive dedicated to the great orders of Central
          Asian Sufism — the Kubrawiyya, the Yasaviyya, the Khwājagān, the Naqshbandiyya and their
          related branches — alongside living traditions such as the Nursafardiyya of Uzbekistan.
        </p>
        <Ornament className="my-10" />
        <div className="grid sm:grid-cols-2 gap-6 not-prose">
          <Panel>
            <FieldLabel>Historical research</FieldLabel>
            <p className="text-stone leading-relaxed">
              Sources, manuscripts, hagiographies and modern scholarship on the Central Asian
              tradition.
            </p>
          </Panel>
          <Panel>
            <FieldLabel>Devotional tradition</FieldLabel>
            <p className="text-stone leading-relaxed">
              The lived spiritual patrimony of the orders, respected in its own terms.
            </p>
          </Panel>
          <Panel>
            <FieldLabel>Esoteric teaching</FieldLabel>
            <p className="text-stone leading-relaxed">
              Where relevant, oral and inner teachings are indicated but never violated.
            </p>
          </Panel>
          <Panel>
            <FieldLabel>Wellness materials</FieldLabel>
            <p className="text-stone leading-relaxed">
              Traditional healing and herbal materials are presented as archival wellness resources
              — not medical advice.
            </p>
          </Panel>
        </div>
        <p className="mt-12 text-stone leading-relaxed">
          The atlas is compiled with care by editors and practitioners in dialogue with scholars and
          living teachers. Corrections, contributions and manuscript references are warmly welcomed.
        </p>
      </section>
    </div>
  );
}
