import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/khwajagan")({
  beforeLoad: () => {
    throw redirect({ to: "/orders/$slug", params: { slug: "khwajagan" } });
  },
});
