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
    <section className="border-b border-line bg-surface">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
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
