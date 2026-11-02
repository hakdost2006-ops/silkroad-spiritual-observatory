# SEO and Rights Audit - 2026-10-30

## Verified findings

- The live `/sitemap.xml` returned `404` before this local preparation.
- The live `/robots.txt` returned a Cloudflare-generated content-signals document, but no application-owned robots source existed in the repository.
- The root metadata used a Lovable preview-hosted image and a Lovable browser error hook.
- Existing route files already supplied titles and descriptions for almost every static and dynamic page. The home page correctly inherited the root default.
- Canonical and language-alternate coverage was incomplete for English-only routes.

## Prepared corrections

- `src/data/seo-routes.ts` now derives sitemap paths from the canonical master, order, and translation-project data.
- `/sitemap.xml` and `/robots.txt` are application routes, not hand-maintained public files.
- Every route receives a canonical URL from the root metadata layer.
- The six genuinely translated page families receive `en`, `uz`, `ru`, and `x-default` alternates. English-only pages receive `en` and `x-default` only; the candidate deliberately does not advertise nonexistent translations.
- Social metadata now points to an Atlas-owned static image path rather than Lovable preview storage.
- The Lovable-specific error call was removed; ordinary console and server error handling remain.

## Ten Principles rights boundary

Verified against the live domain on 2026-10-30:

- `/downloads/al-usul-al-asharah-ten-principles-english-research-edition.pdf` -> `404`
- `/translations/al-usul-al-asharah` -> `404`
- `/translations/kubra-ten-principles` -> `404`

The current Git commit also records removal of the hosted PDF. The library entry has no public file URL and explicitly states that no PDF is publicly distributed. No corrective website change is required beyond preserving this state.

## Generated directory inventory

Present and left untouched:

- `.output/`
- `.tanstack/`
- `dist/`
- `node_modules/.vite/`

These are possible cleanup candidates only after confirming no active preview, packaging, or comparison process needs them. Nothing was deleted.
