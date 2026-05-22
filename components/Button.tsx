import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:-translate-y-0.5 hover:shadow-btn-glow",
  white:
    "bg-white text-bg hover:-translate-y-0.5 hover:shadow-btn-white-glow",
  secondary:
    "border border-white/15 text-ink hover:border-accent hover:text-accent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `${base} ${styles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
