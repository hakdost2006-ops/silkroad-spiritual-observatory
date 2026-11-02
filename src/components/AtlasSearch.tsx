import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Landmark, MapPin, Search, UserRound, X } from "lucide-react";
import { library } from "../data/library";
import { masters } from "../data/masters";
import { orders } from "../data/orders";
import { sites } from "../data/sites";
import { localeHref, useLocale } from "../i18n/locale";
import { navigationCopy } from "../i18n/navigation";

type SearchRecord = {
  title: string;
  detail: string;
  keywords: string;
  href: string;
  category: "Master" | "Order" | "Site" | "Library";
};

const records: SearchRecord[] = [
  ...masters.map((master) => ({
    title: master.name,
    detail: `${master.dates} · ${master.region}`,
    keywords: `${master.name} ${master.variants?.join(" ") ?? ""} ${master.region} ${master.order}`,
    href: `/masters/${master.slug}`,
    category: "Master" as const,
  })),
  ...orders.map((order) => ({
    title: order.name,
    detail: order.tagline,
    keywords: `${order.name} ${order.altNames?.join(" ") ?? ""} ${order.region}`,
    href: `/orders/${order.slug}`,
    category: "Order" as const,
  })),
  ...sites.map((site) => ({
    title: site.name,
    detail: `${site.city}, ${site.country}`,
    keywords: `${site.name} ${site.city} ${site.country} ${site.orders.join(" ")}`,
    href: `/sites/${site.slug}`,
    category: "Site" as const,
  })),
  ...library.map((item) => ({
    title: item.title,
    detail: `${item.author} · ${item.language}`,
    keywords: `${item.title} ${item.author} ${item.order} ${item.topic} ${item.tags.join(" ")}`,
    href: `/library#${item.id}`,
    category: "Library" as const,
  })),
];

const icons = { Master: UserRound, Order: Landmark, Site: MapPin, Library: BookOpen };

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

export function AtlasSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { locale } = useLocale();
  const copy = navigationCopy[locale];
  const results = useMemo(() => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    if (!terms.length) return records.slice(0, 8);
    return records
      .filter((record) => {
        const haystack = normalize(`${record.title} ${record.detail} ${record.keywords}`);
        return terms.every((term) => haystack.includes(term));
      })
      .slice(0, 16);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => inputRef.current?.focus(), 40);
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-lapis-deep/80 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={copy.search}
    >
      <button className="absolute inset-0" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto max-h-[calc(100vh-4rem)] max-w-3xl overflow-hidden border border-gold/40 bg-ivory shadow-2xl">
        <div className="flex items-center gap-3 border-b border-gold/30 px-4 sm:px-6">
          <Search className="h-5 w-5 shrink-0 text-gold" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="min-w-0 flex-1 bg-transparent py-5 font-serif text-xl text-lapis-deep outline-none placeholder:text-stone/65"
          />
          <button
            onClick={onClose}
            className="p-2 text-lapis-deep hover:text-ruby"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[65vh] overflow-y-auto p-3 sm:p-5">
          {results.length ? (
            <ul className="divide-y divide-gold/20">
              {results.map((result) => {
                const Icon = icons[result.category];
                return (
                  <li key={`${result.category}-${result.href}`}>
                    <a
                      href={localeHref(result.href, locale)}
                      onClick={onClose}
                      className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 px-2 py-4 hover:bg-parchment"
                    >
                      <Icon className="h-4 w-4 text-gold" aria-hidden />
                      <span className="min-w-0">
                        <span className="block font-serif text-lg text-lapis-deep">
                          {result.title}
                        </span>
                        <span className="block truncate text-xs text-stone">{result.detail}</span>
                      </span>
                      <span className="hidden text-[9px] uppercase tracking-[0.2em] text-gold sm:block">
                        {result.category}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-4 py-16 text-center text-stone">{copy.noResults}</p>
          )}
        </div>
      </div>
    </div>
  );
}
