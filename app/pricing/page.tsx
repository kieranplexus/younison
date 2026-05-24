import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AI call answering for pharmacies, from €199/month. Central answers your calls — prescriptions, opening hours, repeat orders, and out-of-hours — so your team can focus on patients. Free setup, no contract.",
  openGraph: {
    title: "Pricing | Central",
    description:
      "AI call answering for pharmacies, from €199/month. Free setup, no long-term contract.",
    url: `${site.url}/pricing`,
  },
};

const plans = [
  {
    name: "After-hours",
    price: "€199",
    cadence: "/month",
    features: [
      "200 calls/month included",
      "Out-of-hours & busy-time overflow",
      "Opening hours, location & general enquiries",
      "Voicemail summaries & urgent-call alerts",
      "Then €0.75 per extra call",
      "Free setup & onboarding",
    ],
    cta: { label: "Get started", href: "/contact" },
    highlighted: false,
  },
  {
    name: "Full cover",
    price: "€499",
    cadence: "/month",
    features: [
      "450 calls/month included",
      "All-day answering, on every line",
      "Prescription status & repeat orders",
      "Stock & opening-hours queries",
      "Warm transfer to your team for clinical questions",
      "Then €0.65 per extra call",
      "Free setup, onboarding & priority support",
    ],
    cta: { label: "Get started", href: "/contact" },
    highlighted: true,
  },
  {
    name: "High volume",
    price: "€999",
    cadence: "/month",
    features: [
      "1,000 calls/month included",
      "For multi-line & high-traffic pharmacies",
      "Custom call flows & dispensary/PMR integration",
      "Call analytics & reporting",
      "Dedicated account manager",
      "Then €0.55 per extra call",
      "Free setup & onboarding",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What happens if I go over my included calls?",
    a: "Extra calls are billed at your plan's per-call rate. We keep an eye on your volume and flag it early if you're trending above your plan, so you can move up a tier before it adds up.",
  },
  {
    q: "Can the AI transfer to a real person?",
    a: "Yes. Central handles routine calls end to end and warm-transfers anything clinical or complex straight to your team during opening hours.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. Calls forward from your existing pharmacy line, so nothing changes for your patients — they ring the same number they always have.",
  },
  {
    q: "Is there a setup fee or a contract?",
    a: "No setup fee — configuration and onboarding are included. Plans are billed monthly with no long-term lock-in, so you can change or cancel as your needs change.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pricing that pays for itself."
        subtitle="Central answers your pharmacy's calls so your team can focus on patients. Plans scale with your call volume — and setup is on us."
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
            All plans include EU-based hosting, call routing from your existing
            number, and free setup — no installation fee and no long-term
            contract. Running a pharmacy group or multiple locations? Contact us
            for custom per-location pricing.
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
