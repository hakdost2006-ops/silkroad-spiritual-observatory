import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { chrome, localeHref, useLocale } from "../i18n/locale";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { to: "/orders", label: "Orders" },
  { to: "/masters", label: "Masters" },
  { to: "/khwajagan", label: "Khwajagan" },
  { to: "/silsila", label: "Silsila" },
  { to: "/library", label: "Library" },
  { to: "/translations", label: "Translations" },
  { to: "/sites", label: "Sacred Sites" },
  { to: "/timeline", label: "Timeline" },
  { to: "/map", label: "Map" },
  { to: "/nursafardiyya", label: "Nursafardiyya" },
  { to: "/about", label: "About" },
  { to: "/academy", label: "Academy" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { locale, path } = useLocale();
  const copy = chrome[locale];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-lapis focus:text-ivory focus:px-3 focus:py-2"
      >
        {copy.skip}
      </a>
      <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/85 backdrop-blur supports-[backdrop-filter]:bg-ivory/70">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-2 lg:gap-4">
            <a href={localeHref("/", locale)} className="group flex min-w-0 items-center gap-2">
              <Emblem className="hidden sm:block h-9 w-9 shrink-0 text-lapis transition-transform group-hover:rotate-12" />
              <div className="leading-tight">
                <div className="font-serif text-sm sm:text-lg text-lapis-deep">
                  Silk Road Sufi Atlas
                </div>
                <div className="hidden sm:block text-[10px] uppercase text-stone">
                  {copy.subtitle}
                </div>
              </div>
            </a>
            <nav aria-label={copy.menu} className="hidden 2xl:flex items-center gap-1">
              {NAV.map((item, index) => {
                const active = path === item.to || path.startsWith(item.to + "/");
                return (
                  <a
                    key={item.to}
                    href={localeHref(item.to, locale)}
                    className={`px-3 py-2 text-sm tracking-wide transition-colors relative ${
                      active ? "text-lapis-deep" : "text-stone hover:text-lapis-deep"
                    }`}
                  >
                    {copy.nav[index]}
                    {active && <span className="absolute inset-x-3 -bottom-px h-px bg-gold" />}
                  </a>
                );
              })}
            </nav>
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((v) => !v)}
              className="2xl:hidden p-2 text-lapis-deep"
              aria-label={copy.menu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <nav
              id="mobile-navigation"
              aria-label={copy.menu}
              className="2xl:hidden pb-4 grid grid-cols-2 gap-1"
            >
              {NAV.map((item, index) => (
                <a
                  key={item.to}
                  href={localeHref(item.to, locale)}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-lapis-deep hover:bg-parchment rounded"
                >
                  {copy.nav[index]}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main id="main" tabIndex={-1} className="flex-1">
        {children}
      </main>

      <footer className="mt-24 border-t border-gold/30 bg-lapis-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Emblem className="h-10 w-10 text-gold" />
              <div className="font-serif text-2xl">Silk Road Sufi Atlas</div>
            </div>
            <p className="mt-4 text-sm text-ivory/70 max-w-md leading-relaxed">{copy.footer}</p>
          </div>
          <FooterCol
            title={copy.portals}
            links={[
              { to: "/orders", label: copy.nav[0] },
              { to: "/masters", label: copy.nav[1] },
              { to: "/silsila", label: copy.nav[3] },
              { to: "/nursafardiyya", label: copy.nav[9] },
              { to: "/translations", label: copy.nav[5] },
              { to: "/library", label: copy.nav[4] },
            ]}
          />
          <FooterCol
            title={copy.explore}
            links={[
              { to: "/sites", label: copy.nav[6] },
              { to: "/map", label: copy.nav[8] },
              { to: "/timeline", label: copy.nav[7] },
              { to: "/academy", label: copy.nav[11] },
              { to: "/about", label: copy.about },
            ]}
          />
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-ivory/50 flex flex-wrap justify-between gap-3">
            <span>
              © {new Date().getFullYear()} Silk Road Sufi Atlas · {copy.copyright}.
            </span>
            <span className="tracking-[0.25em] uppercase">بسم الله</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  const { locale } = useLocale();
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <a
              href={localeHref(l.to, locale)}
              className="text-ivory/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" />
      <path d="M20 2 L20 38 M2 20 L38 20 M6 6 L34 34 M34 6 L6 34" />
      <circle cx="20" cy="20" r="10" />
      <path
        d="M20 10 L22.6 17.4 L30 17.4 L24 22 L26.5 29.4 L20 24.8 L13.5 29.4 L16 22 L10 17.4 L17.4 17.4 Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}
