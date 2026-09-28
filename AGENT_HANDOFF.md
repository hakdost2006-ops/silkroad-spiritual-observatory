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

---

# SRSFA-20260921-01: Golden Sufi Center Profile

## Outcome

**EXTERNALLY VERIFIED** — the dedicated, source-aware profile is live at `https://silk-road-sufi-atlas-review.hakdost2006.chatgpt.site/golden-sufi-center`.

## Completed

- Created a substantial Golden Sufi Center page that situates the community's own Naqshbandiyya-Mujaddidiyya lineage account across Central Asia, South Asia, and its modern worldwide setting.
- Kept the historical Khwajagan and Mujaddidi record distinct from the Center's self-described contemporary transmission.
- Added public-source orientation for silent remembrance, companionship, dreamwork, and ordinary-life practice without republishing instruction, private teaching, or copyrighted texts.
- Added a five-book reading shelf linking only to the Center's official publications and shop.
- Linked the profile from the Naqshbandiyya page.

## Validation

- `pnpm run build`: passed.
- `pnpm run lint`: 0 errors; 6 existing Fast Refresh warnings in shared UI primitives.
- `git diff --check`: passed.
- Sites version 6 deployed successfully from commit `7f984ad50f4e044d838bead8e086174c3eef4889`.
- Live browser smoke test: confirmed the profile heading, readable lineage section, five official-edition links, Naqshbandiyya entry point, and no browser errors.

## Files Changed

- `src/routes/golden-sufi-center.tsx`
- `src/routes/orders.$slug.tsx`
- `src/routeTree.gen.ts`
- `AGENT_HANDOFF.md`

## Boundaries Preserved

- No Golden Sufi Center book, PDF, or teaching text is hosted or reproduced.
- The Center's chain is explicitly labeled as its own published lineage record.
- The page makes no claim that a modern cross-tradition expression substitutes for historical Islamic Naqshbandiyya.

## Remaining Gate

Attach `sufiatlas.com` only through a separate custom-domain approval and DNS verification step.

## Recommended Next Action

Review the new profile on the public site, then move into the master-by-master Naqshbandi source library and biographies.

## Actions Not Taken

- Did not attach or alter `sufiatlas.com`.
- Did not offer spiritual instruction or represent community practices as universally applicable.

---

# SRSFA-20260921-02: Official-Source Reading Gates

## Outcome

**EXTERNALLY VERIFIED** — original introductory reading paths are live on the Nursafardiyya and Golden Sufi Center pages.

## Completed

- Added six Nursafardiyya reading paths for Ilahism, respiration, healing, Qatron, Zurmergan, and the murshid-murid relationship.
- Expanded the four Golden Sufi Center method cards into original introductory passages with clear links to the Center's own public essays.
- Kept the handoff points early and explicit, so the external source retains its authority, context, and copyrighted expression.

## Validation

- `pnpm run build`: passed.
- `pnpm run lint`: 0 errors; 6 existing Fast Refresh warnings in shared UI primitives.
- `git diff --check`: passed.
- Sites version 7 deployed successfully from commit `833a969c73ecbbd5ff344ffa571a75ad0877f99c`.
- Live browser smoke test: confirmed four Golden Sufi Center continuation gates, six Nursafardiyya continuation gates, and no browser errors.

## Files Changed

- `src/routes/nursafardiyya.tsx`
- `src/routes/golden-sufi-center.tsx`
- `AGENT_HANDOFF.md`

## Boundaries Preserved

- No external article text, book pages, PDFs, instructional detail, or proprietary material is reproduced.
- Every reading gate is identified by its structure and wording as an Atlas introduction and links only to the originating organization's public source.

## Remaining Gate

Gather feedback from the source communities on the editorial introductions before adding more official-source reading paths.

---

# SRSFA-20260921-03: Production Domain Activation

## Outcome

**EXTERNALLY VERIFIED** — `https://sufiatlas.com` is active with SSL and serves the Silk Road Sufi Atlas.

## Completed

- Registered the production hostname with the existing public Site.
- Added the required apex routing and verification records in the user's Cloudflare DNS zone.
- Confirmed active provider and SSL status, then opened the live production site successfully in the browser.

## Validation

- Hosting custom-domain status: active.
- SSL status: active.
- Browser smoke test: `https://sufiatlas.com` loaded the Silk Road Sufi Atlas homepage without browser errors.

## Remaining Gate

- `www.sufiatlas.com` is not configured; decide later whether it should redirect to the apex domain.
- Continue editorial and source-community review of published material.

## Actions Not Taken

- Did not change the site's public access policy.
- Did not configure email, analytics, accounts, or a `www` redirect.

---

# SRSFA-20260921-04: Academia Central Asian Sufism Intake

## Outcome

**VALIDATED** — a private, rights-aware initial intake now maps the first high-value Academia.edu sources to specific Atlas improvements.

## Completed

- Verified the user's authenticated Academia.edu access.
- Reviewed and catalogued initial sources for early Khwajagan-Naqshbandiyya organization, Timurid Herat expansion, the Yasawi shrine's artistic history, and the major DeWeese-Gross Central Asia volume.
- Recorded source-specific website uses, candidates, gaps, and rights constraints in the private research ledger.
- Confirmed that Academia is presently weak for Kubrawiyya exact-title searching; retained the existing non-Academia Kubra research route rather than padding the corpus with weak matches.

## Validation

- Reviewed accessible source pages, titles, author data, abstracts, identifiers, and publication data for ACA-CA-01 through ACA-CA-04.
- Confirmed logged-in access and individual PDF availability.

## Files Changed

- `context/research/ACADEMIA_CENTRAL_ASIAN_SUFI_INTAKE.md`
- `../../KNOWLEDGE_MAP.md`
- `AGENT_HANDOFF.md`

## Remaining Gate

Perform page-specific extraction from the first four sources, with page numbers and claim labels, before revising public master or order pages. Establish a confirmed private download location before storing additional PDFs.

## Actions Not Taken

- Did not bulk scrape Academia.edu or create an uncurated PDF archive.
- Did not republish, translate, or closely paraphrase any source text.
- Did not change public website prose on the basis of abstracts alone.

---

# SRSFA-20260927-01: Kubrawiyya Biography of an Order

## Outcome

**VALIDATED LOCALLY** — the Kubrawiyya order page has been rebuilt as a long-form Atlas narrative and is ready for editorial review at `http://127.0.0.1:5182/orders/kubrawiyya`. It has not been deployed.

## Completed

- Replaced the generic order template for `/orders/kubrawiyya` with a dedicated seven-chapter biography of the order.
- Opened with Kubra's teachers and the path's Suhrawardi-rooted ancestry, then followed the Khwarazmian teaching house, the rupture of 1221, and the order's dispersal into Bukhara, Jand, and Iran.
- Traced the Iranian development through Simnani, the eastern flowering through 'Ali Hamadani, and the continuation into Badakhshan, Khuttalan, Kashmir, India, and China.
- Added a qualified descendant-lineage field for the Hamadaniyya, Nurbakhshiyya, Dhahabiyya, Ashrafiyya, Firdawsiyya, and the reported Shattari connection.
- Kept direct descent, regional continuation, later initiatic report, institutional succession, devotional afterlife, and intellectual influence visibly distinct.
- Added chapter-level evidence notes and source drawers, a route chronology, founder and geography links, further-reading gates, image attribution, and an explicit explanation that the Naqshbandiyya is not a Kubrawi branch.
- Updated the Kubrawiyya order-index summary so its short introduction reflects the complete transregional history.
- Moved the full global desktop navigation to the `xl` breakpoint to prevent overflow at narrower desktop and tablet widths.

## Validation

- `pnpm run lint`: 0 errors; 6 pre-existing Fast Refresh warnings in shared UI primitives.
- `pnpm run build`: passed, including the Cloudflare/Nitro production build.
- `git diff --check`: passed.
- Desktop browser QA at 1440 × 900: all seven chapters, route strip, sticky journey navigation, descendant field, reading links, and sources rendered without horizontal overflow.
- Mobile browser QA at 390 × 844: the hero, chapter typography, route grid, branch cards, reading links, and footer rendered without horizontal overflow.
- All five page images loaded; browser console reported no errors or warnings.

## Files Changed

- `src/components/KubrawiyyaStory.tsx`
- `src/data/kubrawiyya-journey.ts`
- `src/routes/orders.$slug.tsx`
- `src/data/orders.ts`
- `src/components/SiteLayout.tsx`
- `AGENT_HANDOFF.md`
- `../KNOWLEDGE_MAP.md`

## Source Controls

- Founder and order framing: Hamid Algar, “Kobrawiya i. The Eponym” and “Kobrawiya ii. The Order,” *Encyclopaedia Iranica*.
- Hamadani transmission: Gerhard Böwering, “ʿAli Hamadani,” *Encyclopaedia Iranica*.
- Central Asian institutions and eclipse: Devin DeWeese's controlled local studies.
- Founder teachings: the Atlas Kubrawi corpus and Marijan Molé's shorter-treatise edition.
- Post-eclipse memory: Daniel Beben's study, linked through its DOI.

## Boundaries Preserved

- The page does not turn later hagiographic detail into unqualified biography.
- It does not treat every later school that resembles the Kubrawiyya as a descendant lineage.
- The devotional illustration is identified as later visual remembrance, not a contemporary likeness.
- Image credits and licenses are visible and linked where a public source record is available.
- The research paper remains the denser scholarly apparatus; this page is its Atlas storytelling adaptation, not a substitute for the paper.

## Remaining Gate

- Editorially review the narrative voice and the qualified Ashrafi, Shattari, Firdawsi, and Chinese transmission summaries before public deployment.
- A future map pass should turn the route strip into a geographically interactive journey without reducing the chapter evidence notes.

## Actions Not Taken

- Did not deploy the changes to `sufiatlas.com`.
- Did not alter the existing Kubra research paper, founder translations, or live downloadable edition.
