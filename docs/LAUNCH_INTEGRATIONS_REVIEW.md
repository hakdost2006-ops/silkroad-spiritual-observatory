# Launch Integrations Review

Status: local preparation only. No DNS, deployment, provider account, tracking token, or subscriber service was changed.

## `www` to apex redirect

Recommended production behavior:

- Source hostname: `www.sufiatlas.com`
- Destination: `https://sufiatlas.com` plus the original path and query string
- Status: permanent redirect (`301`)
- SSL: provision `www` before enforcing the redirect
- Verification: check `/`, one nested route, a query string, and both HTTP and HTTPS variants

Cloudflare preparation: add `www` as a proxied hostname, then create one Redirect Rule matching `http.host eq "www.sufiatlas.com"`. The rule should preserve path and query string. This remains a dashboard review item and was not applied.

Verification on 2026-10-30: `www.sufiatlas.com` did not resolve over either HTTP or HTTPS. This confirms that the redirect remains a future DNS/Cloudflare action, not an active behavior.

## Analytics

Recommended first release: privacy-light Cloudflare Web Analytics, with no custom events and no learner profiling.

Review before connection:

1. Approve the public privacy notice and data-retention wording.
2. Decide whether aggregate page views are sufficient; do not add behavioral replay.
3. Create the provider-side site token only after approval.
4. Inject the provider script through an environment-gated component so local and review builds send no data.
5. Verify no private paths, source documents, search text, email addresses, or form contents become analytics properties.

No analytics code or token is active in this candidate.

## Email signup

The non-networked visual prototype is at `review/email-signup-preview.html`. It prevents submission and stores nothing.

Before enabling a real form, choose a provider and approve:

- list owner and sender identity;
- double opt-in and confirmation language;
- privacy notice and deletion/unsubscribe route;
- geographic/legal scope;
- minimum fields (recommended: email only);
- bot protection and rate limiting;
- success, duplicate, validation, and provider-failure states;
- whether Academy news and publication news require separate consent.

No form endpoint, account connection, subscriber list, or outbound email exists in this candidate.
