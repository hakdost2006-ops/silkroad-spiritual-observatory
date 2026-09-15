import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, Filter, Search } from "lucide-react";
import { library, libraryFilters } from "../data/library";
import { PageHeader, Chip } from "../components/ui-primitives";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Library & Downloads — Silk Road Sufi Atlas" },
      {
        name: "description",
        content:
          "A searchable archive of Central Asian Sufi manuscripts, translations, articles, audio and video.",
      },
      { property: "og:title", content: "The Sufi Library" },
      {
        property: "og:description",
        content:
          "PDFs, EPUBs, manuscripts and more, filtered by order, language, century and format.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const [q, setQ] = useState("");
  const [order, setOrder] = useState<string>("all");
  const [lang, setLang] = useState<string>("all");
  const [century, setCentury] = useState<string>("all");
  const [format, setFormat] = useState<string>("all");

  const results = useMemo(() => {
    return library.filter((item) => {
      if (order !== "all" && item.order !== order) return false;
      if (lang !== "all" && item.language !== lang) return false;
      if (century !== "all" && item.century !== century) return false;
      if (format !== "all" && item.format !== format) return false;
      if (q) {
        const hay =
          `${item.title} ${item.author} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, order, lang, century, format]);

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="The Sufi Library"
        intro="A searchable archive of manuscripts, translations, articles and recordings — filtered by order, language, century and format."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6 bg-card border border-gold/25 p-6 h-fit lg:sticky lg:top-24">
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-gold flex items-center gap-2 mb-2">
                <Search className="h-3 w-3" /> Search
              </label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Title, author, keyword…"
                className="w-full bg-parchment border border-gold/30 px-3 py-2 text-sm font-serif focus:outline-none focus:border-gold"
              />
            </div>
            <Select
              label="Order"
              value={order}
              setValue={setOrder}
              options={[...libraryFilters.order]}
            />
            <Select
              label="Language"
              value={lang}
              setValue={setLang}
              options={[...libraryFilters.language]}
            />
            <Select
              label="Century"
              value={century}
              setValue={setCentury}
              options={[...libraryFilters.century]}
            />
            <Select
              label="Format"
              value={format}
              setValue={setFormat}
              options={[...libraryFilters.format]}
            />
            <div className="text-xs text-stone flex items-center gap-2 border-t border-gold/25 pt-4">
              <Filter className="h-3 w-3 text-gold" />
              {results.length} of {library.length} items
            </div>
          </aside>

          <div className="space-y-4">
            {results.length === 0 && (
              <div className="p-16 border border-dashed border-gold/40 text-center text-stone">
                No archival items match those filters.
              </div>
            )}
            {results.map((item) => (
              <article
                key={item.id}
                className="bg-card border border-gold/25 hover:border-gold transition-colors p-6 grid gap-4 md:grid-cols-[1fr_auto]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold">
                    <span>{item.format}</span>
                    <span className="text-stone/60">·</span>
                    <span>{item.language}</span>
                    <span className="text-stone/60">·</span>
                    <span>{item.century} c.</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-lapis-deep">{item.title}</h3>
                  <div className="text-sm text-stone italic mt-1">
                    {item.author}
                    {item.translator ? ` · trans. ${item.translator}` : ""}
                  </div>
                  <p className="mt-3 text-stone leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-stone/70">Source: {item.source}</div>
                </div>
                <div className="md:pl-6 md:border-l md:border-gold/25 flex md:flex-col items-start md:items-stretch gap-3 md:min-w-[160px]">
                  <a
                    href={item.href ?? "#"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noreferrer" : undefined}
                    aria-disabled={!item.href}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                      item.href
                        ? "bg-lapis-deep text-ivory hover:bg-lapis"
                        : "bg-stone/20 text-stone cursor-not-allowed"
                    }`}
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                  <a
                    href={item.href ?? "#"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noreferrer" : undefined}
                    aria-disabled={!item.href}
                    className="inline-flex items-center justify-center gap-2 border border-gold/50 text-lapis-deep px-4 py-2.5 text-sm hover:bg-gold/10 transition-colors"
                  >
                    <FileText className="h-4 w-4" /> Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2 block">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-parchment border border-gold/30 px-3 py-2 text-sm font-serif focus:outline-none focus:border-gold capitalize"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === "all" ? `All ${label.toLowerCase()}` : o}
          </option>
        ))}
      </select>
    </div>
  );
}
