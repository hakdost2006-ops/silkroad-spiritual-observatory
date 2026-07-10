import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getOrder, orders } from "../data/orders";
import { getMaster } from "../data/masters";
import { getSite } from "../data/sites";
import { library } from "../data/library";
import { PageHeader, Panel, FieldLabel, Chip, Ornament } from "../components/ui-primitives";

export const Route = createFileRoute("/orders/$slug")({
  loader: ({ params }) => {
    const order = getOrder(params.slug);
    if (!order) throw notFound();
    return { order };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.order.name} — Central Asian Sufi Orders` },
          { name: "description", content: loaderData.order.tagline },
          { property: "og:title", content: `${loaderData.order.name} — Silk Road Sufi Atlas` },
          { property: "og:description", content: loaderData.order.tagline },
        ]
      : [{ title: "Order not found" }, { name: "robots", content: "noindex" }],
  }),
  component: OrderPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl text-lapis-deep">Order not found</h1>
      <p className="mt-4 text-stone">This silsila is not yet catalogued in the atlas.</p>
      <Link to="/orders" className="mt-6 inline-block text-gold border-b border-gold">Return to Orders</Link>
    </div>
  ),
});

function OrderPage() {
  const { order } = Route.useLoaderData();
  const relatedDownloads = library.filter((l) => l.order === order.slug);

  return (
    <div>
      <PageHeader eyebrow={order.founded} title={order.name} intro={order.tagline} />
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-serif text-3xl text-lapis-deep">Overview</h2>
            <p className="mt-4 text-stone leading-relaxed text-lg">{order.overview}</p>
          </div>
          <Ornament />
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Core teachings</h2>
            <ul className="mt-4 space-y-2">
              {order.teachings.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone">
                  <span className="text-gold mt-2">◆</span><span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Practices</h2>
            <ul className="mt-4 space-y-2">
              {order.practices.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone">
                  <span className="text-gold mt-2">◆</span><span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Key texts</h2>
            <ul className="mt-4 divide-y divide-gold/30 border-y border-gold/30">
              {order.texts.map((t: string) => (
                <li key={t.title} className="py-3">
                  <div className="font-serif text-lg text-lapis-deep">{t.title}</div>
                  {t.author && <div className="text-xs text-stone">{t.author}</div>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Living legacy</h2>
            <p className="mt-4 text-stone leading-relaxed">{order.legacy}</p>
          </div>
          {order.notes && (
            <div className="bg-parchment border-l-4 border-gold p-6">
              <FieldLabel>Scholarly note</FieldLabel>
              <p className="text-stone italic leading-relaxed">{order.notes}</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <Panel>
            <FieldLabel>Founder</FieldLabel>
            <div className="font-serif text-xl text-lapis-deep">{order.founder}</div>
            <div className="mt-4"><FieldLabel>Region</FieldLabel><div className="text-stone">{order.region}</div></div>
          </Panel>
          {order.masters.length > 0 && (
            <Panel>
              <FieldLabel>Masters</FieldLabel>
              <ul className="space-y-2">
                {order.masters.map((m: string) => {
                  const master = getMaster(m);
                  if (!master) return null;
                  return (
                    <li key={m}>
                      <Link to="/masters/$slug" params={{ slug: m }} className="text-lapis-deep hover:text-gold border-b border-gold/40">
                        {master.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Panel>
          )}
          {order.sites.length > 0 && (
            <Panel>
              <FieldLabel>Sacred sites</FieldLabel>
              <ul className="space-y-2">
                {order.sites.map((s: string) => {
                  const site = getSite(s);
                  if (!site) return null;
                  return <li key={s} className="text-stone">{site.name}</li>;
                })}
              </ul>
            </Panel>
          )}
          {order.related.length > 0 && (
            <Panel>
              <FieldLabel>Related orders</FieldLabel>
              <div className="flex flex-wrap gap-2">
                {order.related.map((r: string) => {
                  const rel = orders.find((o) => o.slug === r);
                  if (!rel) return null;
                  return (
                    <Link key={r} to="/orders/$slug" params={{ slug: r }}>
                      <Chip>{rel.name}</Chip>
                    </Link>
                  );
                })}
              </div>
            </Panel>
          )}
          {relatedDownloads.length > 0 && (
            <Panel>
              <FieldLabel>Downloads</FieldLabel>
              <ul className="space-y-3">
                {relatedDownloads.map((d) => (
                  <li key={d.id}>
                    <Link to="/library" className="block hover:text-gold">
                      <div className="font-serif text-sm text-lapis-deep">{d.title}</div>
                      <div className="text-[11px] text-stone">{d.format} · {d.language}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Panel>
          )}
        </aside>
      </section>
    </div>
  );
}