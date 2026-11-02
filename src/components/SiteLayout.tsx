import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { chrome, localeHref, useLocale, type Locale } from "../i18n/locale";
import { navigationCopy, type NavigationGroup } from "../i18n/navigation";
import { AtlasBreadcrumbs } from "./AtlasBreadcrumbs";
import { AtlasSearch } from "./AtlasSearch";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [desktopSection, setDesktopSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { locale, path } = useLocale();
  const copy = chrome[locale];
  const navigation = navigationCopy[locale];
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[90] focus:bg-lapis focus:px-3 focus:py-2 focus:text-ivory"
      >
        {copy.skip}
      </a>
      <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-[4.5rem] items-center justify-between gap-4">
            <a href={localeHref("/", locale)} className="group flex min-w-0 items-center gap-2">
              <Emblem className="hidden h-9 w-9 shrink-0 text-lapis transition-transform group-hover:rotate-12 sm:block" />
              <div className="leading-tight">
                <div className="font-serif text-lg text-lapis-deep">Sufi Atlas</div>
                <div className="hidden text-[9px] uppercase tracking-[0.08em] text-stone sm:block">
                  {copy.subtitle}
                </div>
              </div>
            </a>

            <nav aria-label={copy.menu} className="hidden h-full items-stretch xl:flex">
              {navigation.groups.map((group) => {
                const active = group.href
                  ? path === group.href || path.startsWith(`${group.href}/`)
                  : group.items.some(
                      (item) => path === item.href || path.startsWith(`${item.href}/`),
                    );
                if (group.href) {
                  return (
                    <a
                      key={group.label}
                      href={localeHref(group.href, locale)}
                      className={`relative flex items-center px-3 text-sm transition-colors ${active ? "text-lapis-deep" : "text-stone hover:text-lapis-deep"}`}
                    >
                      {group.label}
                      {active && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" />}
                    </a>
                  );
                }
                return (
                  <div
                    key={group.label}
                    className="relative flex"
                    onMouseEnter={() => setDesktopSection(group.label)}
                    onMouseLeave={() => setDesktopSection(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={desktopSection === group.label}
                      onClick={() =>
                        setDesktopSection((current) =>
                          current === group.label ? null : group.label,
                        )
                      }
                      className={`relative flex items-center gap-1 px-3 text-sm transition-colors ${active ? "text-lapis-deep" : "text-stone hover:text-lapis-deep"}`}
                    >
                      {group.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${desktopSection === group.label ? "rotate-180" : ""}`}
                      />
                      {active && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" />}
                    </button>
                    {desktopSection === group.label && (
                      <DesktopDropdown
                        group={group}
                        locale={locale}
                        onSelect={() => setDesktopSection(null)}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              <a
                href={localeHref("/about", locale)}
                className="hidden px-2 py-2 text-xs text-stone hover:text-lapis-deep lg:inline-flex"
              >
                {navigation.about}
              </a>
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-lapis-deep hover:text-ruby"
                aria-label={navigation.search}
                title={navigation.search}
              >
                <Search className="h-[18px] w-[18px]" />
              </button>
              <button
                onClick={() => setMobileOpen((value) => !value)}
                className="p-2 text-lapis-deep xl:hidden"
                aria-label={copy.menu}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <nav
              id="mobile-navigation"
              aria-label={copy.menu}
              className="border-t border-gold/20 pb-5 pt-2 xl:hidden"
            >
              <div className="divide-y divide-gold/20">
                {navigation.groups.map((group) => {
                  if (group.href)
                    return (
                      <a
                        key={group.label}
                        href={localeHref(group.href, locale)}
                        onClick={closeMobile}
                        className="flex w-full items-center justify-between py-3 font-serif text-lg text-lapis-deep"
                      >
                        {group.label}
                      </a>
                    );
                  const expanded = mobileSection === group.label;
                  return (
                    <div key={group.label}>
                      <button
                        onClick={() => setMobileSection(expanded ? null : group.label)}
                        aria-expanded={expanded}
                        className="flex w-full items-center justify-between py-3 text-left font-serif text-lg text-lapis-deep"
                      >
                        {group.label}
                        <ChevronDown
                          className={`h-4 w-4 text-gold transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded && (
                        <div className="pb-3">
                          {group.items.map((item) => (
                            <a
                              key={item.href}
                              href={localeHref(item.href, locale)}
                              onClick={closeMobile}
                              className="block border-l border-gold/40 py-2 pl-4"
                            >
                              <span className="block text-sm font-medium text-lapis-deep">
                                {item.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-stone">
                                {item.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-gold/20 pt-4 sm:hidden">
                <a
                  href={localeHref("/about", locale)}
                  onClick={closeMobile}
                  className="text-sm text-lapis-deep"
                >
                  {navigation.about}
                </a>
                <LanguageSwitcher />
              </div>
            </nav>
          )}
        </div>
      </header>

      <main id="main" tabIndex={-1} className="flex-1">
        <AtlasBreadcrumbs />
        {children}
      </main>

      <footer className="mt-24 border-t border-gold/30 bg-lapis-deep text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 border-b border-ivory/10 pb-12 md:grid-cols-[1.4fr_repeat(3,1fr)] xl:grid-cols-[1.5fr_repeat(5,1fr)]">
            <div>
              <div className="flex items-center gap-3">
                <Emblem className="h-10 w-10 text-gold" />
                <div className="font-serif text-2xl">Sufi Atlas</div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">{copy.footer}</p>
            </div>
            {navigation.groups.map((group) => (
              <FooterGroup key={group.label} group={group} locale={locale} />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 py-5 text-xs text-ivory/65">
            {navigation.support.map((item) => (
              <a key={item.href} href={localeHref(item.href, locale)} className="hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-5 text-xs text-ivory/50 lg:px-8">
            <span>
              © {new Date().getFullYear()} Sufi Atlas · {copy.copyright}.
            </span>
            <span className="uppercase tracking-[0.25em]">بسم الله</span>
          </div>
        </div>
      </footer>
      <AtlasSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

function DesktopDropdown({
  group,
  locale,
  onSelect,
}: {
  group: NavigationGroup;
  locale: Locale;
  onSelect: () => void;
}) {
  return (
    <div className="absolute left-0 top-full w-[24rem] border border-gold/30 bg-ivory p-2 shadow-xl">
      {group.items.map((item) => (
        <a
          key={item.href}
          href={localeHref(item.href, locale)}
          onClick={onSelect}
          className="block border-b border-gold/15 px-4 py-3 last:border-0 hover:bg-parchment"
        >
          <span className="block font-serif text-lg text-lapis-deep">{item.label}</span>
          <span className="mt-0.5 block text-xs leading-relaxed text-stone">
            {item.description}
          </span>
        </a>
      ))}
    </div>
  );
}

function FooterGroup({ group, locale }: { group: NavigationGroup; locale: Locale }) {
  const links = group.href ? [{ label: group.label, href: group.href }] : group.items;
  return (
    <div>
      <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-gold">{group.label}</div>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={localeHref(link.href, locale)}
              className="text-ivory/75 transition-colors hover:text-gold"
            >
              {link.label}
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
