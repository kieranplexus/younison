import type { Metadata } from "next";
import {
  BarChart3,
  CalendarClock,
  Inbox,
  LayoutTemplate,
  Plug,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product features",
  description:
    "Shared inbox, appointment reminders, customer profiles, and templates. Everything your team needs to manage customer communications.",
  openGraph: {
    title: "Product features | Central",
    description:
      "Shared inbox, appointment reminders, customer profiles, and templates. Everything your team needs to manage customer communications.",
    url: `${site.url}/product`,
  },
};

const features: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Inbox,
    title: "Shared inbox",
    body: "All your customer conversations — SMS, WhatsApp, web chat, email — in one place. Multiple team members can read, reply, and assign messages without losing track. Notes and tags help your team handle every message efficiently.",
  },
  {
    Icon: CalendarClock,
    title: "Appointment reminders",
    body: "Send confirmations and reminders before appointments, bookings, or pickups. Customers appreciate the heads-up, your team spends less time chasing no-shows, and you reduce phone-based admin.",
  },
  {
    Icon: UserRound,
    title: "Customer profiles",
    body: "A simple record of every customer interaction. See past conversations, scheduled appointments, and notes left by colleagues. Customer history follows the customer, not the team member.",
  },
  {
    Icon: LayoutTemplate,
    title: "Templates and workflows",
    body: "Save common responses as templates. Send “your order is ready,” “your appointment is confirmed,” or “we're closed early today” with one click. Templates can be personalised with customer name, booking time, or order reference.",
  },
  {
    Icon: BarChart3,
    title: "Reporting",
    body: "See how your team is responding to customers — average response times, message volumes, busiest hours. Use the data to staff appropriately and improve customer satisfaction.",
  },
  {
    Icon: Plug,
    title: "Integrations",
    body: "Central connects with the tools your business already uses for bookings, payments, and inventory. Available integrations include calendar tools, payment platforms, and standard scheduling software.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        title="Everything your team needs to stay on top of customer communications."
        subtitle="A simple, focused toolset for small business inbox, scheduling, and customer relationship management."
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="space-y-16 md:space-y-24">
            {features.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className={`flex flex-col gap-8 md:items-center md:gap-14 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-2/5">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/[0.06] bg-bg-card">
                    <Icon
                      className="h-16 w-16 text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-semibold text-primary">
              Want to see Central in action?
            </p>
            <Button href="/contact">Contact us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
