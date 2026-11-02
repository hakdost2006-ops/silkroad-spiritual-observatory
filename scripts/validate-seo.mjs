import assert from "node:assert/strict";

const origin = (
  process.argv.slice(2).find((argument) => argument !== "--") ?? "http://localhost:4173"
).replace(/\/$/, "");
const productionOrigin = "https://sufiatlas.com";

function values(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

function unescapeXml(value) {
  return value.replaceAll("&amp;", "&");
}

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, "sitemap.xml must return 200");
assert.match(
  sitemapResponse.headers.get("content-type") ?? "",
  /application\/xml/,
  "sitemap.xml must be XML",
);
const sitemap = await sitemapResponse.text();
const productionUrls = values(sitemap, /<loc>([^<]+)<\/loc>/g).map(unescapeXml);
assert.ok(productionUrls.length > 20, "sitemap must contain the data-derived route set");
assert.equal(new Set(productionUrls).size, productionUrls.length, "sitemap URLs must be unique");

const failures = [];
for (const productionUrl of productionUrls) {
  const path = productionUrl.replace(productionOrigin, "") || "/";
  const response = await fetch(`${origin}${path}`);
  const html = await response.text();
  const title = values(html, /<title[^>]*>([^<]+)<\/title>/gi);
  const descriptions = values(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/gi,
  );
  const canonicals = values(
    html,
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/gi,
  );
  const hreflangs = values(
    html,
    /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]*>/gi,
  );

  if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
  if (!title.length || !title[0].trim()) failures.push(`${path}: missing title`);
  if (!descriptions.length || !descriptions[0].trim())
    failures.push(`${path}: missing description`);
  if (!canonicals.includes(productionUrl)) failures.push(`${path}: wrong or missing canonical`);
  if (!hreflangs.includes("en") || !hreflangs.includes("x-default")) {
    failures.push(`${path}: missing en/x-default hreflang`);
  }
  if (/^\/(uz|ru)(\/|$)/.test(path)) {
    if (!hreflangs.includes("uz") || !hreflangs.includes("ru")) {
      failures.push(`${path}: translated route missing uz/ru hreflang`);
    }
  }
}

const robotsResponse = await fetch(`${origin}/robots.txt`);
const robots = await robotsResponse.text();
assert.equal(robotsResponse.status, 200, "robots.txt must return 200");
assert.match(robots, /Sitemap: https:\/\/sufiatlas\.com\/sitemap\.xml/);

const imageResponse = await fetch(`${origin}/og/sufi-atlas.jpg`);
assert.equal(imageResponse.status, 200, "Atlas social image must return 200");
assert.match(imageResponse.headers.get("content-type") ?? "", /image\/jpeg/);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `SEO validation passed: ${productionUrls.length} sitemap URLs, metadata and canonical checks, robots.txt, and Atlas social image.`,
  );
}
