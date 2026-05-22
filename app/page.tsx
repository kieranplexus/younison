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
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
                One inbox for every customer conversation.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Younison helps small businesses manage customer enquiries,
                appointment reminders, and day-to-day communications across
                messaging, email, and web chat — from a single shared inbox.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Get started</Button>
                <Button href="/product" variant="secondary">
                  See how it works
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <HeroIllustration className="w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="bg-surface">
        <Container className="py-8">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-muted">
            Trusted by independent businesses across Ireland and the UK.
          </p>
        </Container>
      </section>

      {/* The problem */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Small business customer service is fragmented.
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
      <section className="bg-surface">
        <Container className="py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-line bg-white p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Built for */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Designed for small business workflows.
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
      <section className="bg-surface">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Built in Ireland. Made for small business.
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
      <section className="border-t border-line bg-primary">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to streamline how your team manages customer communications?
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Contact us</Button>
              <Button
                href="/pricing"
                variant="secondary"
                className="border-transparent bg-white/10 text-white hover:bg-white/20 hover:border-transparent"
              >
                See pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
