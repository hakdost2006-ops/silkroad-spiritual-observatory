import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Landmark, MapPin, Network, UserRound } from "lucide-react";
import { getSite } from "../data/sites";
import { getMaster } from "../data/masters";
import { getOrder } from "../data/orders";
import { PageHeader, Panel, FieldLabel } from "../components/ui-primitives";

export const Route = createFileRoute("/sites/$slug")({
  loader: ({ params }) => {
    const site = getSite(params.slug);
    if (!site) throw notFound();
    return { site };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.site.name} — Sufi Atlas` },
          { name: "description", content: loaderData.site.description },
        ]
      : [{ title: "Site not found" }, { name: "robots", content: "noindex" }],
  }),
  component: SitePage,
});

function SitePage() {
  const { site } = Route.useLoaderData();
  return (
    <div>
      <PageHeader
        eyebrow={`${site.city} · ${site.country}`}
        title={site.name}
        intro={site.description}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <article>
          <div className="flex items-center gap-3 text-gold">
            <MapPin className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-[0.25em]">Sacred geography record</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl text-lapis-deep">A place within a network</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone">
            The Atlas treats a shrine or sacred city as more than a destination. It is a meeting
            place of biography, transmitted memory, architecture, pilgrimage, and the communities
            that have continued to interpret it.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Panel>
              <Landmark className="h-5 w-5 text-gold" />
              <FieldLabel>Historical horizon</FieldLabel>
              <p className="mt-2 text-stone">{site.founded}</p>
            </Panel>
            <Panel>
              <Network className="h-5 w-5 text-gold" />
              <FieldLabel>Associated traditions</FieldLabel>
              <div className="mt-2 space-y-2">
                {site.orders.map((slug) => {
                  const order = getOrder(slug);
                  return order ? (
                    <Link
                      key={slug}
                      to="/orders/$slug"
                      params={{ slug }}
                      className="block border-b border-gold/40 text-lapis-deep hover:text-ruby"
                    >
                      {order.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </Panel>
          </div>
        </article>
        <aside className="space-y-5">
          <Panel>
            <FieldLabel>Location</FieldLabel>
            <div className="font-serif text-xl text-lapis-deep">{site.city}</div>
            <div className="text-sm text-stone">{site.country}</div>
          </Panel>
          {site.masters.length > 0 && (
            <Panel>
              <UserRound className="h-5 w-5 text-gold" />
              <FieldLabel>Masters connected to this place</FieldLabel>
              <ul className="mt-3 space-y-2">
                {site.masters.map((slug) => {
                  const master = getMaster(slug);
                  return master ? (
                    <li key={slug}>
                      <Link
                        to="/masters/$slug"
                        params={{ slug }}
                        className="border-b border-gold/40 text-lapis-deep hover:text-ruby"
                      >
                        {master.name}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </Panel>
          )}
          <Link
            to="/map"
            className="inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-ruby"
          >
            <ArrowLeft className="h-4 w-4" /> Return to the sacred map
          </Link>
        </aside>
      </section>
    </div>
  );
}
