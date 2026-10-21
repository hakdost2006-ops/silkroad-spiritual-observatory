import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocalizedAtlas } from "../components/LocalizedAtlas";
import { localizedHead } from "../i18n/head";
import { localizedPaths, type TranslatedLocale } from "../i18n/locale";

export const Route = createFileRoute("/$locale/$")({
  beforeLoad: ({ params }) => {
    const path = `/${params._splat ?? ""}`.replace(/\/$/, "");
    if (!localizedPaths.some((candidate) => candidate === path)) throw notFound();
  },
  head: ({ params }) =>
    localizedHead(params.locale as TranslatedLocale, `/${params._splat}`.replace(/\/$/, "")),
  component: LocalizedPage,
});

function LocalizedPage() {
  const params = Route.useParams();
  return (
    <LocalizedAtlas
      locale={params.locale as TranslatedLocale}
      path={`/${params._splat}`.replace(/\/$/, "")}
    />
  );
}
