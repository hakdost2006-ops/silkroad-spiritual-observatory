import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, MapPin } from "lucide-react";
import { kubraStudySections, kubraStudySources } from "../data/kubra-study";
import { yasawiStudySections, yasawiStudySources } from "../data/yasawi-study";
import { kubraPrinciples } from "../data/kubra-corpus";
import { PageHeader, Panel } from "../components/ui-primitives";
import kubraIllustration from "../assets/kubra/najm-al-din-kubra-devotional-illustration.webp";
import kubraMausoleumExterior from "../assets/kubra/kunya-urgench-kubra-mausoleum-exterior.jpg";
import kubraMausoleumPortal from "../assets/kubra/kunya-urgench-kubra-mausoleum-portal.jpg";
import { orderVisuals } from "../data/visual-archive";

export const Route = createFileRoute("/study/$slug")({
  loader: ({ params }) => {
    if (params.slug !== "najm-al-din-kubra" && params.slug !== "ahmad-yasawi") throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => ({
    meta: [
      {
        title:
          params.slug === "ahmad-yasawi"
            ? "Aḥmad Yasawī: The Voice of the Hikmets — Silk Road Sufi Atlas"
            : "Najm al-Dīn Kubrā: The Master of Inner Light — Silk Road Sufi Atlas",
      },
      {
        name: "description",
        content:
          params.slug === "ahmad-yasawi"
            ? "A source-led study of Aḥmad Yasawī, the Dīwān-i Hikmat, Turkic Sufi poetry, Yasawi practice, textual layering, and the pilgrimage landscape of Turkistan."
            : "A source-led study of Najm al-Dīn Kubrā, his writings, the Ten Principles, inner light, Divine Names, and the Kubrawi path.",
      },
    ],
  }),
  component: StudyPage,
});

function StudyPage() {
  return Route.useLoaderData().slug === "ahmad-yasawi" ? <YasawiStudyPage /> : <KubraStudyPage />;
}

const yasawiMausoleumImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan%2C_Kazakhstan.jpg";

function YasawiStudyPage() {
  const hikmetVisual = orderVisuals.yasaviyya;

  return (
    <div>
      <PageHeader
        eyebrow="Long-form study · Yasawiyya"
        title="Aḥmad Yasawī: The Voice of the Hikmets"
        intro="A source-led study of Yasawi's Turkic wisdom poetry, the layered Dīwān-i Hikmat, dhikr, faqr, pilgrimage, and the living memory of Turkistan."
      />

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 lg:px-8">
          <Link
            to="/masters/$slug"
            params={{ slug: "ahmad-yasawi" }}
            className="inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Yasawi's master profile
          </Link>
          <div className="flex items-center gap-2 text-xs text-stone">
            <BookOpen className="h-4 w-4 text-gold" /> Historical Turkic witness · Uzbek and Russian
            reading witnesses · source notes
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_17rem] lg:px-8">
        <article className="min-w-0">
          <div className="border-y border-gold/30 py-8">
            <p className="max-w-3xl font-serif text-3xl leading-relaxed text-lapis-deep">
              A hikmat is a poem made to travel: from a teacher's voice to a circle of listeners,
              from a manuscript to memory, from Yasi into the wider Turkic world.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-stone">
              This study keeps history, textual criticism, shrine memory, and devotional reading in
              conversation. It honours the tradition without claiming that every later story or poem
              can be placed unchanged in the twelfth century.
            </p>
          </div>

          <section className="grid gap-5 border-b border-gold/25 py-10 md:grid-cols-[1.1fr_0.9fr]">
            <figure>
              <img
                src={yasawiMausoleumImage}
                alt="Mausoleum of Khoja Ahmed Yasawi in Turkistan, Kazakhstan"
                className="h-full min-h-[24rem] w-full object-cover object-center"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-stone">
                Mausoleum of Khoja Ahmed Yasawi, Turkistan. Petar Milošević / Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-gold/50 hover:text-gold"
                >
                  CC BY-SA 4.0
                </a>
                .
              </figcaption>
            </figure>
            <div className="border border-gold/25 bg-gold/10 p-6 sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                Reading the corpus
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-lapis-deep">
                A poem, a voice, a witness
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                The Atlas works from a dated 1904 Kazan printing, an Uzbek 2022 reader, and Russian
                reading editions. They do not say the same thing in the same way. Their differences
                are part of the story, and every future translation will name the witness behind it.
              </p>
              <Link
                to="/translations"
                className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
              >
                Explore the translation archive <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>

          <section className="grid gap-5 border-b border-gold/25 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <figure className="overflow-hidden border border-gold/25 bg-card">
              <img
                src={hikmetVisual.src}
                alt={hikmetVisual.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-xs leading-relaxed text-stone">
                {hikmetVisual.caption} Image:{" "}
                <a
                  href={hikmetVisual.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-gold/50 hover:text-gold"
                >
                  {hikmetVisual.credit}
                </a>{" "}
                ({hikmetVisual.license}).
              </figcaption>
            </figure>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
                A living textual tradition
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-lapis-deep">
                Read the corpus through its witnesses
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                This photograph records a later Chagatai-language Hikmet in a modern exhibition. It
                is a doorway into the corpus, not a claim to possess Yasawi's own handwriting. The
                Atlas names the printed or manuscript witness behind each future translation because
                the Dīwān survived through copying, recitation, editing, and later circulation.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6935.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
              >
                Consult the 1904 Kazan witness <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          {yasawiStudySections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-24 border-b border-gold/25 py-14"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                {section.eyebrow}
              </div>
              <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep">
                {section.title}
              </h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-relaxed text-stone">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {index === 2 && <HikmetWitnessPanel />}
              {section.verse && (
                <a
                  href={section.verse.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block border-l-4 border-gold bg-parchment px-6 py-5 hover:bg-gold/10"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                    Qur'anic resonance <ExternalLink className="h-3 w-3" />
                  </div>
                  <div className="mt-2 font-serif text-xl text-lapis-deep">
                    {section.verse.reference}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{section.verse.note}</p>
                </a>
              )}
              <div className="mt-7 border-l-2 border-gold/45 pl-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Sources for this section
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone">
                  {section.sourceNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <section id="sources" className="scroll-mt-24 py-14">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Research library
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep">
              Sources and editorial practice
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone">
              This is the foundation for a witness-aware Yasawi library. The public study uses
              verifiable historical, scholarly, and institutional material. The developing Uzbek,
              Russian, and English reader remains an editorial project until every poem has a named
              source witness and its publication rights are clear.
            </p>
            <div className="mt-8 grid gap-4">
              {yasawiStudySources.map((source) => (
                <Panel key={source.title}>
                  <h3 className="font-serif text-2xl text-lapis-deep">{source.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{source.body}</p>
                </Panel>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <Panel>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">In this study</div>
            <nav className="mt-4 space-y-2">
              {yasawiStudySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-b border-gold/20 py-2 text-sm leading-snug text-lapis-deep hover:text-gold"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#sources"
                className="block border-b border-gold/20 py-2 text-sm text-lapis-deep hover:text-gold"
              >
                Sources and editorial practice
              </a>
            </nav>
          </Panel>
          <Panel className="border-l-4 border-l-gold">
            <MapPin className="h-5 w-5 text-gold" />
            <h2 className="mt-3 font-serif text-2xl text-lapis-deep">Turkistan / Yasi</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              The southern Kazakh steppe city where textual memory, Timurid architecture, and a
              living pilgrimage landscape meet.
            </p>
            <Link
              to="/map"
              className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
            >
              View on the Atlas map <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Panel>
        </aside>
      </section>
    </div>
  );
}

function HikmetWitnessPanel() {
  return (
    <section className="mt-9 border border-gold/25 bg-gold/10 p-5 sm:p-7">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Editorial map</div>
      <h3 className="mt-2 font-serif text-2xl text-lapis-deep">
        How the Atlas will publish the Hikmets
      </h3>
      <div className="mt-5 grid gap-px border border-gold/25 bg-gold/25 md:grid-cols-3">
        <article className="bg-card p-5">
          <div className="text-[10px] tracking-[0.2em] text-gold">01 · Witness</div>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Name the historical Turkic, Uzbek, or Russian edition behind every poem and every
            translation.
          </p>
        </article>
        <article className="bg-card p-5">
          <div className="text-[10px] tracking-[0.2em] text-gold">02 · Attribution</div>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Mark poems as early Yasawi tradition, later Yasawi circulation, or uncertain attribution
            rather than hiding the question.
          </p>
        </article>
        <article className="bg-card p-5">
          <div className="text-[10px] tracking-[0.2em] text-gold">03 · Translation</div>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Set Uzbek and Russian reading texts beside a fresh English literary translation, with a
            compact glossary and source note.
          </p>
        </article>
      </div>
    </section>
  );
}

function KubraStudyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Long-form study · Kubrawiyya"
        title="Najm al-Dīn Kubrā: The Master of Inner Light"
        intro="An original, source-led reading of Kubra’s life and corpus: voluntary death, the ten principles, visionary discernment, Divine Names, and the living geography of the Kubrawi path."
      />

      <section className="border-b border-gold/25 bg-parchment">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 lg:px-8">
          <Link
            to="/masters/$slug"
            params={{ slug: "najm-al-din-kubra" }}
            className="inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-sm text-lapis-deep hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Kubra's master profile
          </Link>
          <div className="flex items-center gap-2 text-xs text-stone">
            <BookOpen className="h-4 w-4 text-gold" /> Primary corpus · Qur'anic references · source
            notes
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_17rem] lg:px-8">
        <article className="min-w-0">
          <div className="border-y border-gold/30 py-8">
            <p className="max-w-3xl font-serif text-3xl leading-relaxed text-lapis-deep">
              Kubra’s path begins where spiritual appetite ends: with a heart willing to be educated
              by truth, discipline, and divine presence.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-stone">
              This study draws from the Atlas translation archive and modern scholarship. It marks
              its sources so that devotion, interpretation, and historical fact remain in living
              conversation without being blurred together.
            </p>
          </div>

          <section className="grid gap-5 border-b border-gold/25 py-10 md:grid-cols-[0.78fr_1.22fr]">
            <figure>
              <img
                src={kubraIllustration}
                alt="Later devotional book illustration identified as Najm al-Din Kubra"
                className="h-full min-h-[25rem] w-full object-cover object-center"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-stone">
                Later devotional book illustration in the Atlas archive, identified as Najm al-Dīn
                Kubrā. It is presented as a work of visual remembrance, not as a contemporary
                likeness.
              </figcaption>
            </figure>
            <figure>
              <img
                src={kubraMausoleumExterior}
                alt="Exterior of the Mausoleum of Najm al-Din Kubra in Kunya-Urgench"
                className="h-full min-h-[25rem] w-full object-cover object-center"
              />
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs leading-relaxed text-stone">
                <span>Mausoleum of Najm al-Dīn Kubrā, Kunya-Urgench.</span>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Kunya-Urgench-130377.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-gold/50 hover:text-gold"
                >
                  Roland Lin / UNESCO · CC BY-SA 3.0 IGO
                </a>
              </figcaption>
            </figure>
          </section>

          {kubraStudySections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-24 border-b border-gold/25 py-14"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                {section.eyebrow}
              </div>
              <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-lapis-deep">
                {section.title}
              </h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-relaxed text-stone">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {index === 3 && <PrinciplesPanel />}
              {section.id === "legacy" && <MausoleumGallery />}
              {section.verse && (
                <a
                  href={section.verse.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block border-l-4 border-gold bg-parchment px-6 py-5 hover:bg-gold/10"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                    Qur'anic resonance <ExternalLink className="h-3 w-3" />
                  </div>
                  <div className="mt-2 font-serif text-xl text-lapis-deep">
                    {section.verse.reference}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{section.verse.note}</p>
                </a>
              )}
              <div className="mt-7 border-l-2 border-gold/45 pl-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Sources for this section
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone">
                  {section.sourceNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <section id="sources" className="scroll-mt-24 py-14">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Research library
            </div>
            <h2 className="mt-3 font-serif text-4xl text-lapis-deep">
              Sources and editorial practice
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone">
              This is a living study, not a finished critical edition. The Atlas will deepen it as
              the Arabic and Persian witnesses in the local archive are collated with the English
              drafts.
            </p>
            <div className="mt-8 grid gap-4">
              {kubraStudySources.map((source) => (
                <Panel key={source.title}>
                  <h3 className="font-serif text-2xl text-lapis-deep">{source.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{source.body}</p>
                  {"href" in source && source.href && (
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
                    >
                      Open source <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </Panel>
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <Panel>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">In this study</div>
            <nav className="mt-4 space-y-2">
              {kubraStudySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-b border-gold/20 py-2 text-sm leading-snug text-lapis-deep hover:text-gold"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#sources"
                className="block border-b border-gold/20 py-2 text-sm text-lapis-deep hover:text-gold"
              >
                Sources and editorial practice
              </a>
            </nav>
          </Panel>
          <Panel className="border-l-4 border-l-gold">
            <MapPin className="h-5 w-5 text-gold" />
            <h2 className="mt-3 font-serif text-2xl text-lapis-deep">Kunya-Urgench</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Kubra’s mausoleum stands in historic Khwarazm, where the textual, spiritual, and
              geographic memory of the order meet.
            </p>
            <Link
              to="/map"
              className="mt-4 inline-flex items-center gap-2 border-b border-gold/50 text-sm text-lapis-deep hover:text-gold"
            >
              View on the Atlas map <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Panel>
        </aside>
      </section>
    </div>
  );
}

function MausoleumGallery() {
  return (
    <section className="mt-10 border-y border-gold/25 py-8">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Pilgrimage landscape</div>
      <div className="mt-5 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <figure>
          <img
            src={kubraMausoleumExterior}
            alt="The domed mausoleum of Najm al-Din Kubra in Kunya-Urgench"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs leading-relaxed text-stone">
            Exterior view of the mausoleum. Roland Lin / UNESCO,{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Kunya-Urgench-130377.jpg"
              target="_blank"
              rel="noreferrer"
              className="border-b border-gold/50 hover:text-gold"
            >
              CC BY-SA 3.0 IGO
            </a>
            .
          </figcaption>
        </figure>
        <figure>
          <img
            src={kubraMausoleumPortal}
            alt="Portal and blue tilework at the Mausoleum of Najm al-Din Kubra"
            className="aspect-[4/3] w-full object-cover object-[center_38%]"
          />
          <figcaption className="mt-3 text-xs leading-relaxed text-stone">
            Portal and surviving blue tilework. Tim Williams / Wikimedia Commons,{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Portal_in_front_of_Najm_ad-Din_al-Kubra_Mausoleum.JPG"
              target="_blank"
              rel="noreferrer"
              className="border-b border-gold/50 hover:text-gold"
            >
              CC BY-SA 3.0
            </a>
            .
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function PrinciplesPanel() {
  return (
    <section className="mt-9 border border-gold/25 bg-gold/10 p-5 sm:p-7">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gold">The Ten Principles</div>
      <div className="mt-5 grid gap-px border border-gold/25 bg-gold/25 sm:grid-cols-2">
        {kubraPrinciples.map(([number, title, body]) => (
          <div key={number} className="bg-card p-4">
            <div className="text-[10px] tracking-[0.2em] text-gold">{number}</div>
            <h3 className="mt-1 font-serif text-lg text-lapis-deep">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
