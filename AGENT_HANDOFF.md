# SRSFA-20260915-01: Public Launch Baseline

## Outcome

**EXTERNALLY VERIFIED** — version 3 of the Silk Road Sufi Atlas is publicly deployed at:

`https://silk-road-sufi-atlas-review.hakdost2006.chatgpt.site`

## Completed

- Prepared the public code surface for launch and committed it as `28556b80fe12c6697139b24666374e7f6617708e`.
- Added a private-material boundary in `.gitignore` for `context/`, `work/`, `output/`, and `tmp/`.
- Preserved the public portal's policy of linking readers to the official Nursafardiyya archive instead of hosting its books or manuals.
- Rebuilt the Cloudflare Worker-compatible application and saved/deployed Sites version 2.
- Changed the previously owner-only review site to public access at the user's explicit request.
- Rotated the preview bypass credential as a launch safeguard; no credential value is retained in this handoff.
- Corrected the hosted static-asset layout after visual review showed an unstyled page. The reproducible adapter is `scripts/prepare-sites-package.sh`.

## Validation

- `pnpm run build`: passed.
- `pnpm run lint`: passed with 0 errors and 6 existing Fast Refresh warnings in shared UI primitives.
- `git diff --check`: passed.
- Public HTTP smoke test: returned `200` from the deployed URL.
- In-app browser visual review: confirmed CSS, typography, spacing, colors, and navigation render correctly on the deployed Kubrawiyya page.

## Files Changed

- `.gitignore`
- Public application files under `src/`
- `../KNOWLEDGE_MAP.md`
- `AGENT_HANDOFF.md`

## Boundaries Preserved

- Local Sufi Medicine PDFs, translations, source text, OCR, and editorial files remain private.
- Local Yasawi working editions remain private pending source-witness and rights review.
- Nursafardiyya books and manuals are named and linked to their official site rather than mirrored.

## Remaining Gate

The live address is a public launch URL, not yet a custom domain. The next content milestone is the deep Naqshbandiyya article and its source library. A custom-domain decision can follow once the public review has been shared and the content direction is confirmed.

## Recommended Next Action

Collect feedback from Nursafardiyya readers on the live portal, then deepen the Naqshbandiyya section while continuing source-controlled Yasawi work privately.

## Actions Not Taken

- Did not upload or publish any proprietary Nursafardiyya material.
- Did not publish the Sufi Medicine translation or Yasawi working editions.
- Did not add a custom domain, analytics, accounts, donations, or mailing capture.

---

# SRSFA-20260915-02: Idries Shah and Living Naqshbandiyya Source Layer

## Outcome

**EXTERNALLY VERIFIED** — the source-aware Idries Shah shelf and clearly attributed Golden Sufi Center panel are live at `https://silk-road-sufi-atlas-review.hakdost2006.chatgpt.site/library/idries-shah`.

## Completed

- Added seven bibliographic records for selected Idries Shah books, each with a short orientation, a detailed original overview, a link to the rights holder's edition, and a non-affiliate Amazon search link.
- Added a dedicated `/library/idries-shah` route that distinguishes modern reception from primary historical evidence.
- Added a Golden Sufi Center panel as a self-described living Naqshbandiyya-Mujaddidiyya source, linking its About, Golden Chain, and heart-meditation pages without adopting its claims as independently verified history.
- Added a Naqshbandiyya-page link to the new reception library.

## Validation

- `pnpm run lint`: 0 errors; 6 pre-existing Fast Refresh warnings in shared UI primitives.
- `pnpm run build`: passed.
- `git diff --check`: passed.
- Sites version 5 deployed successfully from commit `5cf4fab5f125be7e6ca750c15cdff0461dc084c8`.
- Live browser smoke test confirmed the Idries Shah heading, seven detailed-overview panels, seven Amazon links, and the Golden Sufi source section.

## Boundaries Preserved

- No modern copyrighted text, PDF, or private reference material is hosted or reproduced.
- Idries Shah is treated as an influential modern interpreter, not as a primary authority for medieval biography, silsila, tomb geography, or Central Asian historical claims.
- The Golden Sufi Center is treated as a living community's own account, not as independent proof of its lineage history.

## Remaining Gate

- Editorially deepen individual Naqshbandi master profiles from primary sources and specialist scholarship; retain the modern source layer as contextual, not evidentiary, material.
