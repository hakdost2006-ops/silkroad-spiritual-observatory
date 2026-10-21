import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { useLocale, localeHref, resolveLocale, localizedPaths } from "../i18n/locale";
import { localeLinks } from "../i18n/head";
import { pageCopy } from "../i18n/copy";

function NotFoundComponent() {
  const { locale } = useLocale();
  const copy = locale === "en" ? undefined : pageCopy[locale];
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {copy?.notFound ?? "Page not found"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {copy?.notFoundBody ?? "The page you're looking for doesn't exist or has been moved."}
        </p>
        <div className="mt-6">
          <a
            href={localeHref("/", locale)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy?.home ?? "Go home"}
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const { locale } = useLocale();
  const copy = locale === "en" ? undefined : pageCopy[locale];
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {copy?.error ?? "This page didn't load"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {copy?.errorBody ??
            "Something went wrong on our end. You can try refreshing or head back home."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy?.retry ?? "Try again"}
          </button>
          <a
            href={localeHref("/", locale)}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {copy?.home ?? "Go home"}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Silk Road Sufi Atlas — Central Asian Sufi Houses" },
      {
        name: "description",
        content:
          "Central Asian Sufi Houses gathered as an atlas of lineages, masters, sacred sites, manuscripts, and living traditions.",
      },
      { name: "author", content: "Silk Road Sufi Archive" },
      { property: "og:title", content: "Silk Road Sufi Atlas — Central Asian Sufi Houses" },
      {
        property: "og:description",
        content:
          "Central Asian Sufi Houses gathered as an atlas of lineages, masters, sacred sites, manuscripts, and living traditions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      {
        property: "og:url",
        content: `https://sufiatlas.com${matches[matches.length - 1]?.pathname ?? "/"}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Silk Road Sufi Atlas — Central Asian Sufi Houses" },
      {
        name: "twitter:description",
        content:
          "Central Asian Sufi Houses gathered as an atlas of lineages, masters, sacred sites, manuscripts, and living traditions.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/47d489e5-3668-4e05-96d9-66fc04d08b27/id-preview-b1ff3c3f--53b77a89-0138-4512-881c-47972aa78aba.lovable.app-1783700430265.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/47d489e5-3668-4e05-96d9-66fc04d08b27/id-preview-b1ff3c3f--53b77a89-0138-4512-881c-47972aa78aba.lovable.app-1783700430265.png",
      },
    ],
    links: [
      ...(resolveLocale(matches[matches.length - 1]?.pathname ?? "/").locale === "en" &&
      localizedPaths.includes(
        resolveLocale(matches[matches.length - 1]?.pathname ?? "/")
          .path as (typeof localizedPaths)[number],
      )
        ? localeLinks(resolveLocale(matches[matches.length - 1]?.pathname ?? "/").path)
        : []),
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}

import { SiteLayout } from "../components/SiteLayout";
