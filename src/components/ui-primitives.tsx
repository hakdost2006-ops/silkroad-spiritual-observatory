import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-3 flex items-center gap-3">
          {align === "center" && <span className="h-px w-8 bg-gold/60" />}
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-lapis-deep text-balance leading-[1.05]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-stone leading-relaxed text-lg text-balance">{intro}</p>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative border-b border-gold/30 overflow-hidden">
      <div className="absolute inset-0 bg-star-tile opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-24">
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</div>
        )}
        <h1 className="font-serif text-5xl md:text-6xl text-lapis-deep leading-[1.02] text-balance max-w-4xl">
          {title}
        </h1>
        {intro && <p className="mt-6 text-stone text-lg leading-relaxed max-w-2xl">{intro}</p>}
      </div>
    </section>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-gold ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" opacity="0.6">
        <circle cx="12" cy="12" r="6" />
      </svg>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function CardLink({
  to,
  params,
  children,
  className = "",
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className={`group block bg-card border border-gold/25 hover:border-gold transition-all hover:shadow-[0_20px_50px_-25px_rgba(30,20,80,0.35)] ${className}`}
    >
      {children}
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] uppercase tracking-wider border border-gold/40 text-lapis-deep bg-gold/10">
      {children}
    </span>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-card border border-gold/25 p-6 md:p-8 ${className}`}>{children}</div>;
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">{children}</div>;
}
