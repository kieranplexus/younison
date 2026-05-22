import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Younison team. Sales, support, and general enquiries.",
  openGraph: {
    title: "Contact | Younison",
    description:
      "Get in touch with the Younison team. Sales, support, and general enquiries.",
    url: `${site.url}/contact`,
  },
};

const contactPoints = [
  { label: "Sales and partnerships", email: site.emails.sales },
  { label: "General enquiries", email: site.emails.general },
  { label: "Customer support", email: site.emails.support },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch."
        subtitle="Interested in Younison for your business? We'd be happy to talk."
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <dl className="space-y-8">
                {contactPoints.map(({ label, email }) => (
                  <div key={label}>
                    <dt className="text-sm font-semibold text-primary">
                      {label}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${email}`}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="text-sm font-semibold text-primary">Office</dt>
                  <dd className="mt-1 text-muted">
                    {site.company.legalName}
                    <br />
                    {site.company.address}
                    <br />
                    {site.company.country}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-7 md:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
