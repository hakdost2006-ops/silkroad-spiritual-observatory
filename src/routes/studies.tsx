import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenText } from "lucide-react";
import { PageHeader } from "../components/ui-primitives";

const studies = [
  {
    slug: "ahmad-yasawi",
    tradition: "Yasaviyya",
    title: "Aḥmad Yasawī: The Voice of the Hikmets",
    description:
      "A source-led reading of Turkic wisdom poetry, dhikr, faqr, pilgrimage, and the layered textual memory of Turkistan.",
  },
  {
    slug: "najm-al-din-kubra",
    tradition: "Kubrawiyya",
    title: "Najm al-Dīn Kubrā: The Master of Inner Light",
    description:
      "A deep study of Kubrā's writings, luminous vision, Divine Names, spiritual psychology, and the discipline of the path.",
  },
];

export const Route = createFileRoute("/studies")({
  head: () => ({
    meta: [
      { title: "Studies — Sufi Atlas" },
      {
        name: "description",
        content:
          "Long-form, source-led studies of Central Asian Sufi masters, texts, and traditions.",
      },
    ],
  }),
  component: StudiesPage,
});

function StudiesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Library · Studies"
        title="Long-form readings"
        intro="Research essays that keep primary texts, historical criticism, devotional memory, and living interpretation in careful conversation."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 lg:px-8">
        {studies.map((study) => (
          <Link
            key={study.slug}
            to="/study/$slug"
            params={{ slug: study.slug }}
            className="group flex min-h-[20rem] flex-col justify-between border border-gold/30 bg-card p-8 transition-colors hover:border-gold"
          >
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold">
                <BookOpenText className="h-4 w-4" />
                {study.tradition}
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-lapis-deep group-hover:text-ruby">
                {study.title}
              </h2>
              <p className="mt-5 leading-relaxed text-stone">{study.description}</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-lapis-deep">
              Read the study{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
