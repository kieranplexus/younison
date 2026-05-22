import type { ReactNode } from "react";
import Container from "./Container";

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-bg">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />
      <Container className="relative py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="font-display text-display-lg font-bold tracking-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">{subtitle}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
