import { createFileRoute } from "@tanstack/react-router";
import { canonicalUrl, sitemapEntries } from "../data/seo-routes";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderSitemap() {
  const urls = sitemapEntries
    .map(({ path, locale, alternates }) => {
      const links = alternates
        .map(
          ({ locale: alternateLocale, href }) =>
            `    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(href)}" />`,
        )
        .join("\n");
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(canonicalUrl(path))}" />`;
      return [
        "  <url>",
        `    <loc>${escapeXml(canonicalUrl(path, locale))}</loc>`,
        links,
        xDefault,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderSitemap(), {
          headers: {
            "cache-control": "public, max-age=3600",
            "content-type": "application/xml; charset=utf-8",
          },
        }),
    },
  },
});
