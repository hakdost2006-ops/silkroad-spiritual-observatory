import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getMaster, masters } from "../data/masters";
import { getOrder } from "../data/orders";
import { library } from "../data/library";
import { PageHeader, Panel, FieldLabel, Ornament } from "../components/ui-primitives";

export const Route = createFileRoute("/masters/$slug")({
  loader: ({ params }) => {
    const master = getMaster(params.slug);
    if (!master) throw notFound();
    return { master };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.master.name} — Master of the Path` },
          { name: "description", content: loaderData.master.impact },
          { property: "og:title", content: loaderData.master.name },
          { property: "og:description", content: loaderData.master.impact },
        ]
      : [{ title: "Master not found" }, { name: "robots", content: "noindex" }],
  }),
  component: MasterPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl text-lapis-deep">Master not found</h1>
      <Link to="/masters" className="mt-6 inline-block text-gold border-b border-gold">Return to Masters</Link>
    </div>
  ),
});

function MasterPage() {
  const { master } = Route.useLoaderData();
  const order = getOrder(master.order);
  const downloads = library.filter((l) => l.order === master.order).slice(0, 4);

  return (
    <div>
      <PageHeader eyebrow={order?.name} title={master.name} intro={master.impact} />
      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-3 gap-6 border-y border-gold/30 py-6">
            <div><FieldLabel>Dates</FieldLabel><div className="font-serif text-lg text-lapis-deep">{master.dates}</div></div>
            <div><FieldLabel>Region</FieldLabel><div className="font-serif text-lg text-lapis-deep">{master.region}</div></div>
            <div><FieldLabel>Order</FieldLabel><div className="font-serif text-lg text-lapis-deep">{order?.name}</div></div>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Teachings</h2>
            <ul className="mt-4 space-y-2">
              {master.teachings.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone"><span className="text-gold mt-2">◆</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Works</h2>
            <ul className="mt-4 space-y-1 text-stone">
              {master.works.map((w: string) => <li key={w} className="font-serif text-lg text-lapis-deep">{w}</li>)}
            </ul>
          </div>
          <Ornament />
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Historical impact</h2>
            <p className="mt-4 text-stone leading-relaxed text-lg">{master.impact}</p>
          </div>
          <div className="bg-parchment border-l-4 border-gold p-6">
            <FieldLabel>Source notes</FieldLabel>
            <p className="text-stone italic">{master.sources}</p>
          </div>
        </div>
        <aside className="space-y-6">
          {master.teachers && master.teachers.length > 0 && (
            <Panel>
              <FieldLabel>Teachers</FieldLabel>
              <ul className="space-y-2">
                {master.teachers.map((t: string) => {
                  const teacher = masters.find((m) => m.slug === t);
                  return teacher ? (
                    <li key={t}>
                      <Link to="/masters/$slug" params={{ slug: t }} className="text-lapis-deep hover:text-gold border-b border-gold/40">{teacher.name}</Link>
                    </li>
                  ) : <li key={t} className="text-stone">{t}</li>;
                })}
              </ul>
            </Panel>
          )}
          {master.students && master.students.length > 0 && (
            <Panel>
              <FieldLabel>Students</FieldLabel>
              <ul className="space-y-2">
                {master.students.map((s: string) => {
                  const st = masters.find((m) => m.slug === s);
                  return st ? (
                    <li key={s}><Link to="/masters/$slug" params={{ slug: s }} className="text-lapis-deep hover:text-gold border-b border-gold/40">{st.name}</Link></li>
                  ) : null;
                })}
              </ul>
            </Panel>
          )}
          {downloads.length > 0 && (
            <Panel>
              <FieldLabel>Related downloads</FieldLabel>
              <ul className="space-y-3">
                {downloads.map((d) => (
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