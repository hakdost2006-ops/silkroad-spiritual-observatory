import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, MapPin, ScrollText, Sparkles } from "lucide-react";
import heroImg from "../assets/hero-registan.jpg";
import mapImg from "../assets/silk-road-map.jpg";
import { orders, featuredOrderSlugs, getOrder } from "../data/orders";
import { masters } from "../data/masters";
import { sites } from "../data/sites";
import { timeline } from "../data/timeline";
import { Ornament, SectionHeader, CardLink, Chip } from "../components/ui-primitives";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-lapis-deep text-ivory">
        <img
          src={heroImg}
          alt="The Registan of Samarkand at night, tilework of lapis and gold"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lapis-deep/70 via-lapis-deep/40 to-lapis-deep" />
        <div className="absolute inset-0 bg-star-tile opacity-[0.08] mix-blend-screen" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-24 md:pt-36 pb-28 md:pb-40">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Central Asian Sufi Houses
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-5xl">
            Silk Road
            <span className="block italic text-gold-soft">Sufi Atlas</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ivory/85 leading-relaxed">
            Central Asian Sufi Houses gathered as a living atlas of lineages,
            masters, sacred sites, manuscripts, healing traditions, and spiritual
            practice from the heart of the Silk Road.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/khwajagan"
              className="group inline-flex items-center gap-2 bg-gold text-lapis-deep px-6 py-3.5 font-medium tracking-wide hover:bg-gold-soft transition-colors"
            >
              Enter Masters of Wisdom
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/library"
              className="group inline-flex items-center gap-2 border border-gold/50 text-ivory px-6 py-3.5 font-medium tracking-wide hover:bg-gold/10 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Open the Library
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-gold/25 pt-8">
            <Stat n={orders.length} label="Orders" />
            <Stat n={masters.length} label="Masters" />
            <Stat n={sites.length} label="Sacred Sites" />
            <Stat n={timeline.length} label="Epochs" />
          </div>
        </div>
      </section>

      {/* FEATURED ORDER PATHWAYS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Featured Houses"
            title="Sufi houses of the sober and the ecstatic"
            intro="From the loud Turkic dhikr of the steppe to the silent engraved remembrance of Bukhara — five doorways into the Central Asian path."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredOrderSlugs.map((slug, i) => {
              const o = getOrder(slug)!;
              return (
                <CardLink
                  key={slug}
                  to="/orders/$slug"
                  params={{ slug }}
                  className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <div className={`relative overflow-hidden ${i === 0 ? "h-full min-h-[420px]" : "min-h-[260px]"} p-8 bg-gradient-to-br from-lapis-deep to-lapis`}>
                    <div className="absolute inset-0 bg-star-tile opacity-[0.08]" aria-hidden />
                    <div className="relative flex h-full flex-col justify-between text-ivory">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                          {o.founded}
                        </div>
                        <h3 className="mt-3 font-serif text-3xl md:text-4xl">{o.name}</h3>
                        {o.altNames && (
                          <div className="mt-1 text-sm italic text-ivory/60">
                            {o.altNames.join(" · ")}
                          </div>
                        )}
                        <p className="mt-5 text-ivory/80 leading-relaxed max-w-md">
                          {o.tagline}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center justify-between text-sm text-gold">
                        <span className="tracking-wide">Enter the pathway</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CardLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* SACRED GEOGRAPHY */}
      <section className="relative py-24 md:py-32 bg-parchment overflow-hidden">
        <div className="absolute inset-0 bg-tile-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              eyebrow="Sacred Geography"
              title="Shrines of the Silk Road"
              intro="The path is carried by cities. From Bukhara to Turkistan, each dome and threshold is a memory of the friends of God."
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-lapis-deep">
              {sites.slice(0, 10).map((s) => (
                <li key={s.slug} className="flex items-start gap-2 border-b border-gold/20 pb-2">
                  <MapPin className="h-3.5 w-3.5 mt-1 text-gold" />
                  <div>
                    <div className="font-serif text-lg leading-tight">{s.city}</div>
                    <div className="text-xs text-stone">{s.country}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/map"
              className="mt-10 inline-flex items-center gap-2 text-lapis-deep hover:text-gold transition-colors border-b border-gold pb-1"
            >
              Open the sacred map <Compass className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] border-8 border-lapis-deep/90 shadow-2xl">
              <img
                src={mapImg}
                alt="Illustrated map of Silk Road Sufi cities"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                width={1600}
                height={1008}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-lapis-deep text-ivory px-4 py-2 text-xs uppercase tracking-[0.25em]">
              Silk Road Atlas
            </div>
          </div>
        </div>
      </section>

      {/* MASTERS OF THE PATH */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Masters of the Path"
            title="A dignified index of the friends of God"
            intro="Poets, martyrs, jurists, healers — the human faces of the tradition, from Ahmad Yasawī on the steppe to Bahāʾ al-Dīn at Qasr-i ʿĀrifān."
          />
          <Ornament className="my-10" />
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {masters.map((m) => (
              <Link
                key={m.slug}
                to="/masters/$slug"
                params={{ slug: m.slug }}
                className="group flex items-start gap-4 border-l-2 border-gold/40 pl-4 hover:border-gold hover:bg-parchment/60 transition-colors py-3"
              >
                <ScrollText className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-serif text-xl text-lapis-deep leading-tight">{m.name}</div>
                  <div className="text-xs text-stone mt-1">{m.dates} · {m.region}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY TEASER */}
      <section className="py-24 md:py-32 bg-lapis-deep text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-star-tile opacity-[0.09]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Library & Downloads</div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance leading-tight">
              A searchable archive of Central Asian Sufi texts
            </h2>
            <p className="mt-6 text-ivory/80 leading-relaxed max-w-lg">
              PDFs, EPUBs, translations, manuscripts, guides, articles and audio — filtered by order,
              language, author, century, topic and format.
            </p>
            <Link
              to="/library"
              className="mt-8 inline-flex items-center gap-2 bg-gold text-lapis-deep px-6 py-3.5 hover:bg-gold-soft transition-colors"
            >
              Enter the Library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-3">
            {["PDF", "EPUB", "Manuscript", "Brochure", "Audio", "Video"].map((f) => (
              <li key={f} className="flex items-center justify-between border-b border-ivory/10 pb-3">
                <span className="font-serif text-xl text-gold-soft">{f}</span>
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">Available</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NURSAFARDIYYA CTA */}
      <section className="py-24 md:py-32 bg-parchment relative overflow-hidden">
        <div className="absolute inset-0 bg-tile-pattern opacity-25" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em]">
            <Sparkles className="h-3.5 w-3.5" />
            A Living Tradition
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl text-lapis-deep text-balance leading-[1.05]">
            The Nursafardiyya
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            A contemporary Uzbek Sufi path of Zikr, Sema, breathwork, sacred letters,
            traditional healing, herbal wellness and martial arts — carried in the
            wider inheritance of the Yasawiyya tradition.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {["Sufi Healing", "Sufi Martial Arts", "Zikr and Sema", "Breathwork", "Sacred Letters", "Herbal Wellness"].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <Link
            to="/nursafardiyya"
            className="mt-10 inline-flex items-center gap-2 bg-lapis-deep text-ivory px-6 py-3.5 hover:bg-lapis transition-colors"
          >
            Enter the Living Portal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl text-gold">{n}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-ivory/70">{label}</div>
    </div>
  );
}
