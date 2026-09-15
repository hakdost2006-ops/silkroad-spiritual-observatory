import { createFileRoute } from "@tanstack/react-router";
import { timeline } from "../data/timeline";
import { PageHeader } from "../components/ui-primitives";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Central Asian Sufism from Khurasan to Today" },
      {
        name: "description",
        content:
          "Nine centuries of Central Asian Sufi tradition, from early Khurasan to the living Nursafardiyya.",
      },
      { property: "og:title", content: "A Timeline of Central Asian Sufism" },
      {
        property: "og:description",
        content: "From early Khurasani Sufism to living contemporary orders.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Timeline"
        title="Nine centuries of the path"
        intro="From the circles of early Khurasan to the living orders of the twenty-first century."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <ol className="relative border-l-2 border-gold/40 pl-8 space-y-14">
          {timeline.map((t, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lapis-deep border-2 border-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">{t.year}</div>
              <h3 className="mt-2 font-serif text-3xl text-lapis-deep">{t.title}</h3>
              <p className="mt-3 text-stone leading-relaxed text-lg">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
