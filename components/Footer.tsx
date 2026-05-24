import Link from "next/link";
import { Linkedin } from "lucide-react";
import { site, footerNav } from "@/lib/site";
import Container from "./Container";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-deep">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Cen<span className="text-accent">tral</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Central on LinkedIn"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>
      </Container>

      <div className="border-t border-white/[0.06]">
        <Container className="py-8">
          <div className="space-y-2 text-sm text-ink-muted">
            <p>
              Central is a product of{" "}
              <span className="font-medium text-ink">
                {site.company.legalName}
              </span>
              .
            </p>
            <p>
              Registered in {site.company.country} — CRO {site.company.cro}.{" "}
              {site.company.address}.
            </p>
            <p>
              Sales:{" "}
              <a
                href={`mailto:${site.emails.sales}`}
                className="text-accent hover:underline"
              >
                {site.emails.sales}
              </a>{" "}
              | Support:{" "}
              <a
                href={`mailto:${site.emails.support}`}
                className="text-accent hover:underline"
              >
                {site.emails.support}
              </a>
            </p>
            <p className="pt-2 text-muted">
              © 2026 {site.company.legalName} trading as Central. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
