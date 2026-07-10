import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, HeartPulse, Wind, Sword, Sparkles, Leaf, MapPin, Archive } from "lucide-react";
import { PageHeader, Panel, Ornament, SectionHeader } from "../components/ui-primitives";
import { library } from "../data/library";
import mapImg from "../assets/silk-road-map.jpg";

export const Route = createFileRoute("/nursafardiyya")({
  head: () => ({
    meta: [
      { title: "Nursafardiyya — A Living Uzbek Sufi Tradition" },
      { name: "description", content: "A contemporary Uzbek Sufi path of Zikr, Sema, breathwork, sacred letters, traditional healing, martial arts and wellness." },
      { property: "og:title", content: "Nursafardiyya — Living Tradition" },
      { property: "og:description", content: "Zikr, Sema, breathwork, sacred letters, healing and martial arts." },
    ],
  }),
  component: NursafardiyyaPage,
});

const areas = [
  { icon: Flame, title: "Zikr and Sema", body: "Gathered remembrance in voice, breath and sacred movement." },
  { icon: HeartPulse, title: "Sufi Healing", body: "Traditional practices of spiritual and bodily support, offered as wellness — not medical treatment." },
  { icon: Sword, title: "Sufi Martial Arts", body: "An embodied discipline that unites vigilance of the heart with the body's readiness." },
  { icon: Wind, title: "Breathwork", body: "Nafas: refined attention to the breath as the soul's most intimate rhythm." },
  { icon: Sparkles, title: "Sacred Letters", body: "Contemplative work with the Arabic letters and their inner correspondences." },
  { icon: Leaf, title: "Herbal Wellness", body: "Field notes on traditional herbal support, in the register of wellness and tradition." },
];

function NursafardiyyaPage() {
  const items = library.filter((l) => l.order === "nursafardiyya");

  return (
    <div>
      <section className="relative overflow-hidden bg-lapis-deep text-ivory">
        <img src={mapImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-lapis-deep/70 to-lapis-deep" />
        <div className="absolute inset-0 bg-star-tile opacity-[0.08]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-24 md:py-32">
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Living Tradition</div>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[1.02]">
            Nursafardiyya
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ivory/85 leading-relaxed">
            A contemporary Uzbek Sufi path drawing on the wider Central Asian
            inheritance — Zikr, Sema, breathwork, sacred letters, martial arts,
            traditional healing and herbal wellness.
          </p>
          <div className="mt-8 text-xs text-ivory/60 max-w-xl">
            Materials in this portal are shared as spiritual practice, archival
            resources and traditional wellness — not as medical advice.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
        <SectionHeader eyebrow="Overview" title="An integral pedagogy of body, breath and heart" intro="Nursafardiyya integrates classical Naqshbandī–Yasavī sensibilities with practical arts of healing, movement and remembrance carried in living Uzbek transmission." />
        <Ornament className="my-14" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Panel key={a.title}>
              <a.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-2xl text-lapis-deep">{a.title}</h3>
              <p className="mt-3 text-stone leading-relaxed">{a.body}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Centres in Uzbekistan</div>
            <h2 className="mt-4 font-serif text-4xl text-lapis-deep">Places of gathering and study</h2>
            <p className="mt-4 text-stone leading-relaxed">
              Nursafardiyya practice takes place in a growing constellation of
              centres across Uzbekistan, hosting Zikr gatherings, Sema evenings,
              breathwork sessions, and study of the archive.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              A public directory of centres and gatherings will be published in
              this portal as the archive is prepared.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold flex items-center gap-2"><Archive className="h-3.5 w-3.5" /> Texts and Media</div>
            <h2 className="mt-4 font-serif text-4xl text-lapis-deep">Archive of the living tradition</h2>
            <ul className="mt-6 divide-y divide-gold/30 border-y border-gold/30">
              {items.map((i) => (
                <li key={i.id} className="py-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{i.format} · {i.language}</div>
                  <div className="font-serif text-xl text-lapis-deep mt-1">{i.title}</div>
                  <p className="text-sm text-stone mt-1">{i.description}</p>
                </li>
              ))}
            </ul>
            <Link to="/library" className="mt-6 inline-flex items-center gap-2 text-lapis-deep border-b border-gold hover:text-gold transition-colors">
              Browse the full library →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}