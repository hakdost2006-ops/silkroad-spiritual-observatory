import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/silsila")({
  beforeLoad: () => {
    throw redirect({ to: "/lineages" });
  },
});
