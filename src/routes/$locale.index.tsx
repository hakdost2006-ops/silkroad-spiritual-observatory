import { createFileRoute } from "@tanstack/react-router";
import { LocalizedAtlas } from "../components/LocalizedAtlas";
import { localizedHead } from "../i18n/head";
import type { TranslatedLocale } from "../i18n/locale";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => localizedHead(params.locale as TranslatedLocale, "/"),
  component: LocalizedHome,
});

function LocalizedHome() {
  return <LocalizedAtlas locale={Route.useParams().locale as TranslatedLocale} path="/" />;
}
