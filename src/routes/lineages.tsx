import { createFileRoute } from "@tanstack/react-router";
import { LineagesPage } from "../components/LineagesPage";

export const Route = createFileRoute("/lineages")({
  head: () => ({
    meta: [
      { title: "Sufi Lineages — Sufi Atlas" },
      {
        name: "description",
        content:
          "A visual lineage map of Central Asian Sufi masters, orders, places, and evidence levels.",
      },
      { property: "og:title", content: "Sufi Lineages — Sufi Atlas" },
      {
        property: "og:description",
        content:
          "Trace the masters, places, and certainty of transmission links represented in Sufi Atlas.",
      },
    ],
  }),
  component: LineagesPage,
});
