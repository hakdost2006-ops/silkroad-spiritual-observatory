import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (params.locale !== "uz" && params.locale !== "ru") throw notFound();
  },
  component: Outlet,
});
