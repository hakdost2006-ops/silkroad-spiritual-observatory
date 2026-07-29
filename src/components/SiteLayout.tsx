import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

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
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-lapis focus:text-ivory focus:px-3 focus:py-2">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/85 backdrop-blur supports-[backdrop-filter]:bg-ivory/70">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6">
            <Link to="/" className="group flex items-center gap-3">
              <Emblem className="h-9 w-9 text-lapis transition-transform group-hover:rotate-12" />
              <div className="leading-tight">
                <div className="font-serif text-lg text-lapis-deep tracking-wide">Silk Road Sufi Atlas</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-stone">Central Asian Sufi Houses</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.to || pathname.startsWith(item.to + "/");
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-3 py-2 text-sm tracking-wide transition-colors relative ${
                      active ? "text-lapis-deep" : "text-stone hover:text-lapis-deep"
                    }`}
                  >
                    {item.label}
                    {active && <span className="absolute inset-x-3 -bottom-px h-px bg-gold" />}
                  </Link>
                );
              })}
            </nav>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-lapis-deep"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <nav className="lg:hidden pb-4 grid grid-cols-2 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-lapis-deep hover:bg-parchment rounded"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="mt-24 border-t border-gold/30 bg-lapis-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Emblem className="h-10 w-10 text-gold" />
              <div className="font-serif text-2xl">Silk Road Sufi Atlas</div>
            </div>
            <p className="mt-4 text-sm text-ivory/70 max-w-md leading-relaxed">
              A living archive of Central Asian Sufi orders, masters, sacred geography, manuscripts,
              and contemporary practice — the Central Asian Sufi Houses gathered with scholarly care and reverence.
            </p>
          </div>
          <FooterCol title="Portals" links={[
            { to: "/orders", label: "Sufi Orders" },
            { to: "/masters", label: "Masters" },
            { to: "/silsila", label: "Silsila" },
            { to: "/nursafardiyya", label: "Nursafardiyya" },
            { to: "/translations", label: "Translations" },
            { to: "/library", label: "Library" },
          ]} />
          <FooterCol title="Explore" links={[
            { to: "/sites", label: "Sacred Sites" },
            { to: "/map", label: "Map" },
            { to: "/timeline", label: "Timeline" },
            { to: "/about", label: "About the Atlas" },
          ]} />
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-ivory/50 flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} Silk Road Sufi Atlas — an educational and cultural archive.</span>
            <span className="tracking-[0.25em] uppercase">بسم الله</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-ivory/80 hover:text-gold transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="20" cy="20" r="18" />
      <path d="M20 2 L20 38 M2 20 L38 20 M6 6 L34 34 M34 6 L6 34" />
      <circle cx="20" cy="20" r="10" />
      <path d="M20 10 L22.6 17.4 L30 17.4 L24 22 L26.5 29.4 L20 24.8 L13.5 29.4 L16 22 L10 17.4 L17.4 17.4 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
