import { createFileRoute } from "@tanstack/react-router";

export const robotsText = `User-agent: *
Allow: /

Disallow: /context/
Disallow: /downloads/
Disallow: /output/
Disallow: /tmp/
Disallow: /work/

Sitemap: https://sufiatlas.com/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(robotsText, {
          headers: {
            "cache-control": "public, max-age=3600",
            "content-type": "text/plain; charset=utf-8",
          },
        }),
    },
  },
});
