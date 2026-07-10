import { createFileRoute, Link } from "@tanstack/react-router";
import { orders } from "../data/orders";
import { PageHeader } from "../components/ui-primitives";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/orders/")({
  head: () => ({
    meta: [
      { title: "Central Asian Sufi Orders — Silsilas of the Silk Road" },
      { name: "description", content: "The Kubrawiyya, Yasaviyya, Khwājagān, Naqshbandiyya, Mujaddidiyya, Nūrbakhshiyya, Bektashiyya, Chishtiyya and the living Nursafardiyya." },
      { property: "og:title", content: "Central Asian Sufi Orders" },
      { property: "og:description", content: "Lineages, teachings and practices of the great Central Asian Sufi orders." },
    ],
  }),
  component: OrdersIndex,
});

function OrdersIndex() {
  return (
    <div>
      <PageHeader
        eyebrow="Orders"
        title="Silsilas of Central Asia"
        intro="Nine lineages and living branches that have shaped the spiritual imagination of the Silk Road."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <ul className="divide-y divide-gold/30 border-y border-gold/30">
          {orders.map((o) => (
            <li key={o.slug}>
              <Link
                to="/orders/$slug"
                params={{ slug: o.slug }}
                className="group grid md:grid-cols-12 gap-6 py-8 items-baseline hover:bg-parchment/40 px-2 transition-colors"
              >
                <div className="md:col-span-3">
                  <div className="font-serif text-3xl text-lapis-deep">{o.name}</div>
                  {o.altNames && <div className="text-xs italic text-stone mt-1">{o.altNames.join(" · ")}</div>}
                </div>
                <div className="md:col-span-2 text-xs uppercase tracking-[0.22em] text-gold">
                  {o.founded}
                </div>
                <div className="md:col-span-6 text-stone leading-relaxed">{o.tagline}</div>
                <div className="md:col-span-1 text-right text-gold">
                  <ArrowRight className="h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}