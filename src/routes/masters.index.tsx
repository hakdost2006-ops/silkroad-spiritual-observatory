import { createFileRoute, Link } from "@tanstack/react-router";
import { masters } from "../data/masters";
import { getOrder } from "../data/orders";
import { PageHeader } from "../components/ui-primitives";

export const Route = createFileRoute("/masters")({
  head: () => ({
    meta: [
      { title: "Masters of the Path — Central Asian Sufi Atlas" },
      { name: "description", content: "Ahmad Yasawī, Najm al-Dīn Kubrā, Bahāʾ al-Dīn Naqshband, Yūsuf Hamadānī, ʿAbd al-Khāliq Ghujdawānī, Khwāja Aḥrār and more." },
      { property: "og:title", content: "Masters of the Path" },
      { property: "og:description", content: "A dignified index of Central Asian Sufi masters." },
    ],
  }),
  component: MastersIndex,
});

function MastersIndex() {
  return (
    <div>
      <PageHeader eyebrow="Masters" title="Masters of the Path" intro="The human faces of the Central Asian tradition." />
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
        {masters.map((m) => {
          const o = getOrder(m.order);
          return (
            <Link
              key={m.slug}
              to="/masters/$slug"
              params={{ slug: m.slug }}
              className="group bg-card border border-gold/25 p-6 hover:border-gold hover:shadow-lg transition-all"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{o?.name ?? m.order}</div>
              <h3 className="mt-2 font-serif text-2xl text-lapis-deep">{m.name}</h3>
              {m.variants && <div className="text-xs italic text-stone mt-1">{m.variants.join(" · ")}</div>}
              <div className="mt-4 text-xs text-stone">{m.dates} · {m.region}</div>
              <p className="mt-4 text-stone leading-relaxed">{m.impact}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}