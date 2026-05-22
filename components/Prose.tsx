import type { ReactNode } from "react";

const proseClasses = [
  "max-w-none text-base leading-relaxed text-ink",
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:scroll-mt-24",
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary",
  "[&_p]:my-4 [&_p]:text-muted",
  "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted",
  "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-muted",
  "[&_li]:pl-1",
  "[&_a]:font-medium [&_a]:text-accent hover:[&_a]:underline",
  "[&_strong]:font-semibold [&_strong]:text-ink",
].join(" ");

export default function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${proseClasses} ${className}`}>{children}</div>;
}
