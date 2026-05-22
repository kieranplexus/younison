import { CalendarClock, Inbox, UserRound } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import HeroIllustration from "@/components/HeroIllustration";
import VerticalGrid from "@/components/VerticalGrid";

const howItWorks = [
  {
    Icon: Inbox,
    title: "One shared inbox",
    body: "Every customer message, regardless of channel, lands in one inbox your team can manage together.",
  },
  {
    Icon: CalendarClock,
    title: "Appointment reminders",
    body: "Send timely reminders for upcoming appointments, bookings, or pickups so your customers always know what's next.",
  },
  {
    Icon: UserRound,
    title: "Customer profiles",
    body: "See every previous conversation, booking, and preference in one place — so every team member can pick up where another left off.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-bg">
        <div
          className="pointer-events-none absolute inset-0 bg-hero-glow"
          aria-hidden="true"
        />
        <Container className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="pill-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Customer communications · Built in Ireland
              </span>
              <h1 className="mt-7 font-display text-display-xl font-bold tracking-tight text-white">
                One inbox for every{" "}
                <span className="accent-italic">customer</span> conversation.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Younison helps small businesses manage customer enquiries,
                appointment reminders, and day-to-day communications across
                messaging, email, and web chat — from a single shared inbox.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/contact" variant="white">
                  Get started
                </Button>
                <Button href="/product" variant="secondary">
                  See how it works
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl border border-white/[0.08] bg-bg-card p-2 shadow-card-float">
                <HeroIllustration className="w-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-b border-white/[0.04] bg-bg-deep">
        <Container className="py-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.12em] text-muted">
            Trusted by independent businesses across Ireland and the UK.
          </p>
        </Container>
      </section>

      {/* The problem */}
      <section className="bg-bg">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">The problem</span>
            <h2 className="font-display text-display-lg font-semibold text-white">
              Small business customer service is{" "}
              <span className="accent-italic">fragmented</span>.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Phone calls go unanswered when the shop is busy. Messages arrive
                across SMS, WhatsApp, web chat, and email — all in different
                places. Appointment reminders go out manually. Customer history
                sits in someone&rsquo;s notebook.
              </p>
              <p>
                Younison brings all of it into one place, with simple tools to
                keep up with everything your customers ask.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-bg-card">
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="font-display text-display-lg font-semibold text-white">
              Everything in <span className="accent-italic">one</span> place
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {howItWorks.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/[0.06] bg-bg-card p-8 transition-all hover:border-accent/30 hover:bg-bg-card-hover"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Built for */}
      <section className="bg-bg">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">Who it's for</span>
            <h2 className="font-display text-display-lg font-semibold text-white">
              Designed for small business{" "}
              <span className="accent-italic">workflows</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Younison serves independent businesses across multiple sectors.
              Each industry has its own page with examples of how Younison fits
              in.
            </p>
          </div>
          <div className="mt-12">
            <VerticalGrid />
          </div>
        </Container>
      </section>

      {/* Why Younison */}
      <section className="bg-bg-card">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">Why Younison</span>
            <h2 className="font-display text-display-lg font-semibold text-white">
              Built in Ireland. Made for{" "}
              <span className="accent-italic">small business</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Younison is built by Nutrapi Limited, an Irish software company. We
              focus on practical day-to-day communications tools that small
              businesses actually need — not features nobody uses.
            </p>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="bg-bg-deep">
        <Container className="py-20 md:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-bg-card p-10 md:p-16">
            <div
              className="pointer-events-none absolute inset-0 bg-hero-glow opacity-60"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-2xl font-display text-display-lg font-semibold text-white">
                Ready to streamline how your team manages customer
                communications?
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Contact us</Button>
                <Button href="/pricing" variant="secondary">
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
