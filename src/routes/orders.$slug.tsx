import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getOrder, orders, type Order } from "../data/orders";
import { getMaster } from "../data/masters";
import { getSite } from "../data/sites";
import { library } from "../data/library";
import { orderVisuals } from "../data/visual-archive";
import { PageHeader, Panel, FieldLabel, Chip, Ornament } from "../components/ui-primitives";
import { KubrawiyyaStory } from "../components/KubrawiyyaStory";
import {
  ArrowRight,
  BookOpenText,
  ExternalLink,
  MapPinned,
  Network,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/orders/$slug")({
  loader: ({ params }) => {
    const order = getOrder(params.slug);
    if (!order) throw notFound();
    return { order };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.order.name} — Central Asian Sufi Houses` },
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
      <Link to="/orders" className="mt-6 inline-block text-gold border-b border-gold">
        Return to Orders
      </Link>
    </div>
  ),
});

function OrderPage() {
  const { order } = Route.useLoaderData() as { order: Order };
  if (order.slug === "kubrawiyya") return <KubrawiyyaStory />;
  if (order.slug === "naqshbandiyya") return <NaqshbandiyyaPage />;

  const relatedDownloads = library.filter((l) => l.order === order.slug);
  const orderVisual = orderVisuals[order.slug as keyof typeof orderVisuals];

  return (
    <div>
      <PageHeader eyebrow={order.founded} title={order.name} intro={order.tagline} />
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-serif text-3xl text-lapis-deep">Overview</h2>
            <p className="mt-4 text-stone leading-relaxed text-lg">{order.overview}</p>
          </div>
          {orderVisual && (
            <figure className="overflow-hidden border border-gold/30 bg-card">
              <img
                src={orderVisual.src}
                alt={orderVisual.alt}
                className="aspect-[16/9] w-full object-cover"
              />
              <figcaption className="p-4 text-xs leading-relaxed text-stone">
                {orderVisual.caption} Image:{" "}
                <a
                  href={orderVisual.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-gold/60 hover:text-ruby"
                >
                  {orderVisual.credit}
                </a>{" "}
                ({orderVisual.license}).
              </figcaption>
            </figure>
          )}
          <Ornament />
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Core teachings</h2>
            <ul className="mt-4 space-y-2">
              {order.teachings.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone">
                  <span className="text-gold mt-2">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Practices</h2>
            <ul className="mt-4 space-y-2">
              {order.practices.map((t: string) => (
                <li key={t} className="flex gap-3 text-stone">
                  <span className="text-gold mt-2">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-lapis-deep">Key texts</h2>
            <ul className="mt-4 divide-y divide-gold/30 border-y border-gold/30">
              {order.texts.map((t) => (
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
            <div className="mt-4">
              <FieldLabel>Region</FieldLabel>
              <div className="text-stone">{order.region}</div>
            </div>
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
                      <Link
                        to="/masters/$slug"
                        params={{ slug: m }}
                        className="text-lapis-deep hover:text-gold border-b border-gold/40"
                      >
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
                  return (
                    <li key={s} className="text-stone">
                      {site.name}
                    </li>
                  );
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

const naqshbandiPrinciples = [
  ["Hush dar dam", "Awareness in the breath", "Khwajagan inheritance"],
  ["Nazar bar qadam", "Watchfulness over the step", "Khwajagan inheritance"],
  ["Safar dar watan", "The inward journey home", "Khwajagan inheritance"],
  ["Khalwat dar anjuman", "Solitude in the gathering", "Khwajagan inheritance"],
  ["Yad kard", "Returning to remembrance", "Khwajagan inheritance"],
  ["Baz gasht", "The return to God", "Khwajagan inheritance"],
  ["Nigah dasht", "Guarding attention", "Khwajagan inheritance"],
  ["Yad dasht", "Sustained recollection", "Khwajagan inheritance"],
  ["Wuquf zamani", "Reckoning with time", "Later Naqshbandi formulation"],
  ["Wuquf adadi", "Awareness of number", "Later Naqshbandi formulation"],
  ["Wuquf qalbi", "Presence of the heart", "Later Naqshbandi formulation"],
] as const;

const naqshbandiTransmitters = [
  [
    "Sayyid Amir Kulal",
    "The principal human teacher remembered at Baha al-Din's threshold.",
    "sayyid-amir-kulal",
  ],
  [
    "Baha al-Din Naqshband",
    "The Bukhara master whose name gathered an inheritance into a durable devotional focus.",
    "bahauddin-naqshband",
  ],
  [
    "Yaqub Charkhi",
    "A commentator and transmitter connecting Bukhara, Transoxiana, and Herat.",
    "yaqub-charkhi",
  ],
  [
    "Khwaja Ahrar",
    "The Timurid-era master who made public responsibility part of the path's social imagination.",
    "khwaja-ahrar",
  ],
  [
    "Abd al-Rahman Jami",
    "Poet, scholar, and historian who gave Naqshbandi memory a lasting literary voice.",
    "abd-al-rahman-jami",
  ],
] as const;

function NaqshbandiyyaPage() {
  const baha = getMaster("bahauddin-naqshband");
  const calligraphy = orderVisuals.naqshbandiyya;

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-lapis-deep text-ivory">
        {baha?.image && (
          <img
            src={baha.image.src}
            alt={baha.image.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
        )}
        <div className="absolute inset-0 bg-lapis-deep/85" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_22rem] lg:px-8 lg:py-28">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              <Network className="h-4 w-4" />
              Bukhara's path of remembrance
            </div>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] md:text-7xl">
              Naqshbandiyya
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ivory/80 md:text-xl">
              A path of silent remembrance shaped in the Bukhara oasis: inwardly attentive,
              outwardly present, and carried through companionship, learning, work, and service.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <a
                href="#baha"
                className="border border-gold/60 px-4 py-2.5 text-gold transition-colors hover:bg-gold hover:text-lapis-deep"
              >
                Meet Baha al-Din
              </a>
              <a
                href="#principles"
                className="border border-ivory/30 px-4 py-2.5 text-ivory transition-colors hover:bg-ivory/10"
              >
                Explore the eleven
              </a>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[16rem] self-center text-center">
            <img
              src={calligraphy.src}
              alt={calligraphy.alt}
              className="mx-auto aspect-square w-full object-contain drop-shadow-2xl"
            />
            <figcaption className="mt-3 text-[10px] leading-relaxed text-ivory/60">
              <a
                href={calligraphy.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="border-b border-gold/50 hover:text-gold"
              >
                {calligraphy.credit}
              </a>{" "}
              ({calligraphy.license})
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 md:grid-cols-3 lg:px-8">
          <ReadingKey
            label="Historical record"
            body="Lives, texts, institutions, and dates supported by scholarship and early sources."
            tone="solid"
          />
          <ReadingKey
            label="Teaching tradition"
            body="Principles and practices transmitted by generations of Naqshbandi teachers."
            tone="annotated"
          />
          <ReadingKey
            label="Devotional memory"
            body="Shrines, silsilas, and accounts held with reverence and historical care."
            tone="dotted"
          />
        </div>
      </section>

      <section id="baha" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden border border-gold/30 bg-card">
            {baha?.image && (
              <img
                src={baha.image.src}
                alt={baha.image.alt}
                className="aspect-[4/3] w-full object-cover"
              />
            )}
            <div className="p-5 text-xs leading-relaxed text-stone">
              Qasr-i Arifan, near Bukhara. Image:{" "}
              <a
                href={baha?.image?.sourceUrl}
                className="border-b border-gold/60 hover:text-ruby"
                target="_blank"
                rel="noreferrer"
              >
                {baha?.image?.credit}
              </a>
              .
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              A master in the Bukhara oasis
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-lapis-deep md:text-5xl">
              Bahāʾ al-Dīn Naqshband: the name that gathered a path
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              Born near Bukhara in 1318, Bahāʾ al-Dīn Naqshband came to embody a way of spiritual
              formation already cultivated by the Khwajagan: attention to the heart, restraint in
              self-display, companionship with a teacher, and a life lived among people. Early
              Naqshbandi sources remember Sayyid Amīr Kulāl as his principal human teacher.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              The order did not appear fully formed in a single moment. Later authors looked back
              through the Bukhara masters and read them as its ancestry; subsequent networks of
              disciples, writings, shrines, and branches made the Naqshbandiyya a far-reaching
              institution. That distinction lets the visitor honour continuity without flattening
              history.
            </p>
            <Link
              to="/masters/$slug"
              params={{ slug: "bahauddin-naqshband" }}
              className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-lapis-deep transition-colors hover:text-ruby"
            >
              Read Baha al-Din's biography <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="principles" className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              The grammar of attention
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Eleven principles, carried into the crowd
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/75">
              The familiar eleven principles are not a checklist for detached self-improvement. They
              articulate a discipline of attention. The first eight belong to the Khwajagan
              inheritance traditionally associated with Abd al-Khaliq Ghijduwani; three further
              forms of vigilance are attached to Baha al-Din in the later Naqshbandi formulation.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 md:grid-cols-2 lg:grid-cols-3">
            {naqshbandiPrinciples.map(([term, meaning, period]) => (
              <div key={term} className="bg-lapis-deep p-6">
                <div className="text-[9px] uppercase tracking-[0.2em] text-ivory/45">{period}</div>
                <div className="mt-2 font-serif text-2xl text-gold-soft">{term}</div>
                <div className="mt-2 text-sm text-ivory/70">{meaning}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl border-l-4 border-gold pl-6">
            <div className="font-serif text-2xl text-gold-soft">Khalwat dar anjuman</div>
            <p className="mt-3 leading-relaxed text-ivory/75">
              “Solitude in the gathering” names the paradox at the centre of the path: the heart
              remains turned toward God while the person remains answerable to family, neighbour,
              craft, marketplace, and society. It is an ethic of presence, not withdrawal from life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                Transmission and expression
              </div>
              <h2 className="mt-3 font-serif text-4xl text-lapis-deep md:text-5xl">
                From intimate companionship to a literary and public world
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                The Naqshbandiyya travelled through people rather than a single book or central
                office. Its early Bukhara formation found new voices in Qur'anic commentary, Timurid
                public life, Persian poetry, and, later, the Mujaddidi renewal in South Asia.
              </p>
            </div>
            <ol className="border border-gold/30 bg-card p-6 md:p-8">
              {naqshbandiTransmitters.map(([name, description, slug], index) => (
                <li
                  key={slug}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-gold/20 py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Link
                      to="/masters/$slug"
                      params={{ slug }}
                      className="font-serif text-2xl text-lapis-deep hover:text-ruby"
                    >
                      {name}
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-lapis-deep py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Living global continuations
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              From the Bukhara oasis to a wider world
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/75">
              The Atlas follows the Naqshbandi inheritance beyond Central Asia without making every
              later community identical to its medieval source. The Mujaddidi renewal carried a
              Central Asian inheritance into South Asia; from there, modern teachers and communities
              developed new languages, practices, and publics.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/20 bg-ivory/20 lg:grid-cols-3">
            <div className="bg-lapis-deep p-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                01 · Central Asian roots
              </div>
              <h3 className="mt-4 font-serif text-3xl text-gold-soft">Khwajagan and Bukhara</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                The historical ground of this Atlas: the masters, shrine geography, texts, and
                devotional disciplines that formed around Transoxiana and Bahāʾ al-Dīn Naqshband.
              </p>
            </div>
            <div className="bg-lapis-deep p-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                02 · South Asian renewal
              </div>
              <h3 className="mt-4 font-serif text-3xl text-gold-soft">Mujaddidi transmission</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                Aḥmad Sirhindī's Mujaddidiyya became a major South Asian Naqshbandi formation. It is
                the historical bridge through which several later global lines understand their
                connection to the Central Asian tradition.
              </p>
            </div>
            <div className="bg-lapis-deep p-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                03 · Contemporary community
              </div>
              <h3 className="mt-4 font-serif text-3xl text-gold-soft">Golden Sufi Center</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                The Center presents a Naqshbandiyya-Mujaddidiyya chain from the Khwajagan through
                India to Irina Tweedie, Llewellyn Vaughan-Lee, and Emmanuel Vaughan-Lee. The Atlas
                records this as a living community's lineage account and as a distinct modern,
                cross-tradition expression of Mujaddidi inheritance.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <Link
                  to="/golden-sufi-center"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-soft"
                >
                  Explore the Atlas profile <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://goldensufi.org/about/naqshbandiyya-mujaddidiyya-golden-chain/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-soft"
                >
                  Read the Center's chain <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://www.mdpi.com/2077-1444/13/8/690"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-soft"
                >
                  Read the scholarly context <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-4xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-ivory/65">
            Editorial note: this contemporary branch is part of the Atlas's global Naqshbandi story,
            but it is not drawn as a direct medieval node on the Central Asian silsila map. Its own
            chain is named as a community record; independent scholarship supplies the wider
            context.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              A pilgrimage geography
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep">
              The path is written across cities and villages
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-stone">
              Ghijduwan, Ramitan, Samas, Sukhar, Qasr-i Arifan, Samarkand, and Herat are not merely
              pins on a map. They mark a lived geography where craft, hospitality, teaching, burial,
              and pilgrimage fashioned the tradition's memory across the Bukhara oasis and beyond.
            </p>
            <Link
              to="/map"
              className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-lapis-deep transition-colors hover:text-ruby"
            >
              Follow the shrine geography <MapPinned className="h-4 w-4" />
            </Link>
          </div>
          <aside className="border-l-4 border-gold bg-parchment p-7">
            <ShieldCheck className="h-6 w-6 text-ruby" />
            <h3 className="mt-4 font-serif text-2xl text-lapis-deep">How this page is built</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              The Atlas distinguishes early records from later lineage memory. It draws its
              historical framework from studies of Baha al-Din, the Khwajagan, Timurid Sufism, and
              the later Naqshbandi branches; living devotional language is named as tradition where
              the archive cannot settle a detail.
            </p>
            <a
              href="https://www.iranicaonline.org/articles/baha-al-din-naqsband-kaja-mohammad-b/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
            >
              Read the Iranica study <BookOpenText className="h-4 w-4" />
            </a>
            <Link
              to="/library/idries-shah"
              className="mt-4 inline-flex items-center gap-2 text-sm text-lapis-deep hover:text-ruby"
            >
              Browse the Idries Shah reception library <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-gold/25 bg-parchment py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 md:flex-row md:items-end lg:px-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Continue the atlas
            </div>
            <h2 className="mt-2 font-serif text-3xl text-lapis-deep">
              Return to the masters who preceded the name
            </h2>
          </div>
          <Link
            to="/khwajagan"
            className="inline-flex items-center gap-2 bg-lapis-deep px-5 py-3 text-ivory transition-colors hover:bg-lapis"
          >
            Explore the Khwajagan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ReadingKey({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "solid" | "annotated" | "dotted";
}) {
  const mark =
    tone === "solid"
      ? "bg-turquoise"
      : tone === "annotated"
        ? "bg-gold"
        : "border-2 border-ruby bg-transparent";
  return (
    <div className="flex gap-3">
      <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${mark}`} />
      <div>
        <div className="font-serif text-xl text-lapis-deep">{label}</div>
        <p className="mt-1 text-sm leading-relaxed text-stone">{body}</p>
      </div>
    </div>
  );
}
