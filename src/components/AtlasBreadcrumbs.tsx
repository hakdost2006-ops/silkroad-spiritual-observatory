import { ChevronRight, Home } from "lucide-react";
import { getMaster } from "../data/masters";
import { getOrder } from "../data/orders";
import { getSite } from "../data/sites";
import { localeHref, useLocale } from "../i18n/locale";

type Crumb = { label: string; href?: string };

const studies: Record<string, string> = {
  "ahmad-yasawi": "Aḥmad Yasawī: The Voice of the Hikmets",
  "najm-al-din-kubra": "Najm al-Dīn Kubrā: The Master of Inner Light",
};

function crumbsFor(path: string): Crumb[] {
  const [section, slug] = path.split("/").filter(Boolean);
  if (!section) return [];
  if (section === "orders")
    return [
      { label: "Traditions" },
      { label: "Orders", href: "/orders" },
      ...(slug ? [{ label: getOrder(slug)?.name ?? slug }] : []),
    ];
  if (section === "masters")
    return [
      { label: "Traditions" },
      { label: "Masters", href: "/masters" },
      ...(slug ? [{ label: getMaster(slug)?.name ?? slug }] : []),
    ];
  if (section === "lineages" || section === "lineage")
    return [{ label: "Traditions" }, { label: "Lineages" }];
  if (section === "map") return [{ label: "Atlas" }, { label: "Map" }];
  if (section === "timeline") return [{ label: "Atlas" }, { label: "Timeline" }];
  if (section === "sites")
    return [
      { label: "Atlas" },
      { label: "Map", href: "/map" },
      ...(slug ? [{ label: getSite(slug)?.name ?? slug }] : []),
    ];
  if (section === "library")
    return [{ label: "Library" }, { label: slug ? "Special collection" : "Catalogue" }];
  if (section === "studies") return [{ label: "Library" }, { label: "Studies" }];
  if (section === "study")
    return [
      { label: "Library" },
      { label: "Studies", href: "/studies" },
      ...(slug ? [{ label: studies[slug] ?? slug }] : []),
    ];
  if (section === "translations")
    return [
      { label: "Library" },
      { label: "Translations", href: "/translations" },
      ...(slug ? [{ label: slug.replaceAll("-", " ") }] : []),
    ];
  if (section === "nursafardiyya" || section === "golden-sufi-center")
    return [
      { label: "Living Traditions" },
      { label: section === "nursafardiyya" ? "Nursafardiyya" : "Golden Sufi Center" },
    ];
  if (section === "academy") return [{ label: "Academy" }];
  if (section === "about") return [{ label: "About" }];
  return [];
}

export function AtlasBreadcrumbs() {
  const { locale, path } = useLocale();
  const crumbs = crumbsFor(path);
  if (!crumbs.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="border-b border-gold/20 bg-parchment/65">
      <ol className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-5 py-2.5 text-xs text-stone lg:px-8">
        <li>
          <a
            href={localeHref("/", locale)}
            className="inline-flex items-center p-1 hover:text-lapis-deep"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
          </a>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`} className="flex shrink-0 items-center gap-1">
            <ChevronRight className="h-3 w-3 text-gold/70" aria-hidden />
            {crumb.href && index < crumbs.length - 1 ? (
              <a href={localeHref(crumb.href, locale)} className="px-1 py-1 hover:text-lapis-deep">
                {crumb.label}
              </a>
            ) : (
              <span
                className={index === crumbs.length - 1 ? "px-1 py-1 text-lapis-deep" : "px-1 py-1"}
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
