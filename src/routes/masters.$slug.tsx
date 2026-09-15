import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getMaster, masters, type Master } from "../data/masters";
import { getOrder } from "../data/orders";
import { library } from "../data/library";
import { getSite } from "../data/sites";
import { getMasterDeepReading } from "../data/master-deep-readings";
import {
  kubraCorpusNote,
  kubraPhilosophy,
  kubraPrinciples,
  kubraWorks,
} from "../data/kubra-corpus";
import kubraIllustration from "../assets/kubra/najm-al-din-kubra-devotional-illustration.webp";
import { PageHeader, Panel, FieldLabel, Ornament } from "../components/ui-primitives";
import { MapPin, Route as RouteIcon } from "lucide-react";

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
      <Link to="/masters" className="mt-6 inline-block text-gold border-b border-gold">
        Return to Masters
      </Link>
    </div>
  ),
});

function MasterPage() {
  const { master } = Route.useLoaderData() as { master: Master };
  const order = getOrder(master.order);
  const shrine = master.shrine ? getSite(master.shrine) : undefined;
  const deepReading = getMasterDeepReading(master.slug);
  const masterReadings = library.filter((item) => item.tags.includes(master.slug));
  const downloads = (
    masterReadings.length > 0
      ? masterReadings
      : library.filter((item) => item.order === master.order)
  ).slice(0, 4);

  return (
    <div>
      <PageHeader eyebrow={order?.name} title={master.name} intro={master.impact} />
      {master.image && (
        <section className="border-b border-gold/25 bg-parchment">
          <figure className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
            <img
              src={master.image.src}
              alt={master.image.alt}
              className="h-[20rem] w-full object-cover object-center md:h-[28rem]"
              loading="eager"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-stone">
              <span>{master.image.alt}</span>
              <a
                href={master.image.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="border-b border-gold/50 hover:text-gold"
              >
                {master.image.credit} · {master.image.license}
              </a>
            </figcaption>
          </figure>
        </section>
      )}
      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-3 gap-6 border-y border-gold/30 py-6">
            <div>
              <FieldLabel>Dates</FieldLabel>
              <div className="font-serif text-lg text-lapis-deep">{master.dates}</div>
            </div>
            <div>
              <FieldLabel>Region</FieldLabel>
              <div className="font-serif text-lg text-lapis-deep">{master.region}</div>
            </div>
            <div>
              <FieldLabel>Order</FieldLabel>
              <div className="font-serif text-lg text-lapis-deep">{order?.name}</div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Biography</h2>
            <div className="mt-4 space-y-4 text-stone leading-relaxed text-lg">
              {master.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {master.slug === "najm-al-din-kubra" && <KubraVisualMemory />}
          {deepReading && (
            <section className="border-y border-gold/30 py-8">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Deep reading</div>
              <h2 className="mt-2 font-serif text-3xl text-lapis-deep">A life within the path</h2>
              <div className="mt-6 grid gap-px overflow-hidden border border-gold/25 bg-gold/25 md:grid-cols-2">
                <DeepReadingCard title="Life in Place" body={deepReading.lifeInPlace} />
                <DeepReadingCard title="Practice" body={deepReading.practice} />
                <DeepReadingCard title="Texts and Sayings" body={deepReading.textsAndSayings} />
                <DeepReadingCard title="Afterlife and Pilgrimage" body={deepReading.afterlife} />
              </div>
            </section>
          )}
          {master.slug === "najm-al-din-kubra" && <KubraCorpus />}
          {master.slug === "ahmad-yasawi" && <YasawiStudyLink />}
          <Panel className="border-l-4 border-l-gold">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
              <div>
                <FieldLabel>Tomb and pilgrimage landscape</FieldLabel>
                <h2 className="font-serif text-2xl text-lapis-deep">{master.tomb.name}</h2>
                <p className="mt-2 text-stone leading-relaxed">{master.tomb.location}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone/90">
                  {master.tomb.geography}
                </p>
                {shrine && (
                  <Link
                    to="/map"
                    className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
                  >
                    <RouteIcon className="h-4 w-4" /> Explore {shrine.name} on the map
                  </Link>
                )}
              </div>
            </div>
          </Panel>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Contribution</h2>
            <ul className="mt-4 space-y-2">
              {master.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 text-stone leading-relaxed">
                  <span className="mt-2 text-gold">◆</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Teachings</h2>
            <ul className="mt-4 space-y-2">
              {master.teachings.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone">
                  <span className="text-gold mt-2">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Works</h2>
            <ul className="mt-4 space-y-1 text-stone">
              {master.works.map((w: string) => (
                <li key={w} className="font-serif text-lg text-lapis-deep">
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <Ornament />
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Historical impact</h2>
            <p className="mt-4 text-stone leading-relaxed text-lg">{master.impact}</p>
          </div>
          <div className="bg-parchment border-l-4 border-gold p-6">
            <FieldLabel>Historical reading</FieldLabel>
            <p className="mb-4 text-stone leading-relaxed">{master.evidence}</p>
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
                      <Link
                        to="/masters/$slug"
                        params={{ slug: t }}
                        className="text-lapis-deep hover:text-gold border-b border-gold/40"
                      >
                        {teacher.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={t} className="text-stone">
                      {t}
                    </li>
                  );
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
                    <li key={s}>
                      <Link
                        to="/masters/$slug"
                        params={{ slug: s }}
                        className="text-lapis-deep hover:text-gold border-b border-gold/40"
                      >
                        {st.name}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </Panel>
          )}
          {downloads.length > 0 && (
            <Panel>
              <FieldLabel>Further reading and sources</FieldLabel>
              <ul className="space-y-3">
                {downloads.map((d) => (
                  <li key={d.id}>
                    <Link to="/library" className="block hover:text-gold">
                      <div className="font-serif text-sm text-lapis-deep">{d.title}</div>
                      <div className="text-[11px] text-stone">
                        {d.format} · {d.language}
                      </div>
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

function DeepReadingCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-card p-6">
      <h3 className="font-serif text-xl text-lapis-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
    </article>
  );
}

function KubraVisualMemory() {
  return (
    <figure className="border-y border-gold/30 py-8">
      <img
        src={kubraIllustration}
        alt="Later devotional book illustration identified as Najm al-Din Kubra"
        className="h-[32rem] w-full object-cover object-center"
      />
      <figcaption className="mt-4 max-w-3xl text-sm leading-relaxed text-stone">
        <span className="font-serif text-lg text-lapis-deep">Visual memory of the master.</span>{" "}
        This later devotional illustration, preserved in the Atlas book archive, is identified as
        Najm al-Dīn Kubrā. It is presented as a work of remembrance rather than as a contemporary
        historical likeness.
      </figcaption>
    </figure>
  );
}

function YasawiStudyLink() {
  return (
    <section className="border-y border-gold/30 py-10">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Primary corpus</div>
      <h2 className="mt-2 font-serif text-3xl text-lapis-deep">
        The Dīwān-i Hikmat and its living witnesses
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone">
        Yasawi's wisdom poems are a layered corpus, carried through manuscripts, recitation, later
        Yasawi poets, and modern Uzbek and Russian editions. The Atlas study makes that history part
        of the reading rather than hiding it behind a single name.
      </p>
      <Link
        to="/study/$slug"
        params={{ slug: "ahmad-yasawi" }}
        className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
      >
        Read the long-form Yasawi study <RouteIcon className="h-4 w-4" />
      </Link>
    </section>
  );
}

function KubraCorpus() {
  return (
    <section className="border-y border-gold/30 py-10">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Primary corpus</div>
      <h2 className="mt-2 font-serif text-3xl text-lapis-deep">Kubra's works and philosophy</h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone">
        Najm al-Dīn Kubrā left more than an order and a shrine. His writings make a demanding
        vocabulary for the inner life: light and colour, fear and beauty, bewilderment and adab, all
        held within the work of becoming answerable to God.
      </p>
      <Link
        to="/study/$slug"
        params={{ slug: "najm-al-din-kubra" }}
        className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
      >
        Read the long-form Kubra study <RouteIcon className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-0 border-y border-gold/25">
        {kubraWorks.map((work) => (
          <article key={work.title} className="border-b border-gold/20 py-5 last:border-b-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
              <div>
                <h3 className="font-serif text-xl text-lapis-deep">{work.title}</h3>
                <p className="mt-1 text-sm italic text-stone">{work.transliteration}</p>
                {work.archiveLabel && (
                  <p className="mt-1 text-xs text-stone/80">Atlas archive: {work.archiveLabel}</p>
                )}
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-gold">{work.status}</div>
            </div>
            <div className="mt-3 grid gap-3 text-sm leading-relaxed text-stone md:grid-cols-[10rem_1fr]">
              <p className="font-medium text-lapis-deep">
                {work.form} · {work.focus}
              </p>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold">al-Uṣūl al-ʿAshara</div>
        <h3 className="mt-2 font-serif text-2xl text-lapis-deep">The ten principles of the path</h3>
        <div className="mt-5 grid gap-px border border-gold/25 bg-gold/25 sm:grid-cols-2">
          {kubraPrinciples.map(([number, title, body]) => (
            <article key={number} className="bg-card p-5">
              <div className="text-[10px] tracking-[0.2em] text-gold">{number}</div>
              <h4 className="mt-1 font-serif text-lg text-lapis-deep">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-px border border-gold/25 bg-gold/25 md:grid-cols-2">
        {kubraPhilosophy.map((idea) => (
          <article key={idea.title} className="bg-parchment p-6">
            <h3 className="font-serif text-xl text-lapis-deep">{idea.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">{idea.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 border-l-4 border-gold bg-parchment p-5 text-sm leading-relaxed text-stone">
        {kubraCorpusNote}
      </p>
    </section>
  );
}
