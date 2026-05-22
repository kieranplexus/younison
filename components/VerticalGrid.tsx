import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { verticals } from "@/lib/verticals";

export default function VerticalGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {verticals.map(({ slug, name, Icon, summary }) => (
        <Link
          key={slug}
          href={`/verticals/${slug}`}
          className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-primary"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-primary">{name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
