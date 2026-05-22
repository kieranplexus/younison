import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly pricing for small business customer communications. Plans from €49/month with a 14-day free trial.",
  openGraph: {
    title: "Pricing | Younison",
    description:
      "Simple monthly pricing for small business customer communications. Plans from €49/month with a 14-day free trial.",
    url: `${site.url}/pricing`,
  },
};

const plans = [
  {
    name: "Starter",
    price: "€49",
    cadence: "/month",
    features: [
      "Single team inbox",
      "Up to 2 team members",
      "Standard messaging templates",
      "Email support",
    ],
    cta: { label: "Get started", href: "/contact" },
    highlighted: false,
  },
  {
    name: "Growth",
    price: "€149",
    cadence: "/month",
    features: [
      "Single team inbox",
      "Up to 10 team members",
      "Custom templates",
      "Appointment reminder workflows",
      "Priority email support",
    ],
    cta: { label: "Get started", href: "/contact" },
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Contact us",
    cadence: "",
    features: [
      "Multiple team inboxes",
      "Unlimited team members",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: { label: "Contact sales", href: "/contact" },
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes — you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "Do you offer a free trial?",
    a: "We offer a 14-day free trial on Starter and Growth plans. Contact us for Scale trials.",
  },
  {
    q: "How does billing work?",
    a: "Monthly subscription billed in advance. Annual billing available on request with a discount.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple pricing that grows with your business."
        subtitle="Choose the plan that fits your team. All plans include core inbox and messaging features."
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-accent/40 bg-bg-card shadow-card-float ring-1 ring-accent/30"
                    : "border-white/[0.06] bg-bg-card hover:border-accent/30"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg">
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {plan.price}
                  </span>
                  {plan.cadence ? (
                    <span className="text-muted">{plan.cadence}</span>
                  ) : null}
                </div>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 flex-none text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.cta.href}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta.label}
                </Button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-muted">
            All plans include standard customer messaging across SMS, web chat,
            and email. WhatsApp Business integration available where eligible —
            contact us for details.
          </p>

          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              Frequently asked questions
            </h2>
            <dl className="mt-8 divide-y divide-line border-t border-line">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-6">
                  <dt className="text-base font-semibold text-primary">{q}</dt>
                  <dd className="mt-2 leading-relaxed text-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
