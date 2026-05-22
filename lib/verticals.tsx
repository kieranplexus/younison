import {
  Briefcase,
  PawPrint,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Vertical = {
  slug: string;
  name: string;
  Icon: LucideIcon;
  summary: string;
  metaTitle: string;
  h1: string;
  intro: string;
  uses: string[];
  closing: string;
  pharmin?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: "veterinary",
    name: "Veterinary",
    Icon: PawPrint,
    summary:
      "For practices managing appointment bookings, vaccination reminders, and pet owner enquiries.",
    metaTitle: "Veterinary customer communications",
    h1: "Customer communications for veterinary practices.",
    intro:
      "Veterinary practices juggle appointment bookings, vaccination reminders, and follow-up enquiries from pet owners. Younison gives your front-of-house team one place to manage all of it.",
    uses: [
      "Appointment confirmations and reminders for routine visits",
      "Vaccination and treatment renewal reminders",
      "Customer enquiries about opening hours, services, or pricing",
      "Follow-up messages after visits",
      "General queries from pet owners during busy clinic hours",
    ],
    closing:
      "Practices using Younison report fewer missed appointments and quicker response times to customer queries — without adding to the front-desk workload.",
  },
  {
    slug: "retail",
    name: "Retail",
    Icon: ShoppingBag,
    summary:
      "For independent shops handling click-and-collect, stock queries, and customer service.",
    metaTitle: "Retail customer communications",
    h1: "Customer communications for independent retail.",
    intro:
      "Independent shops handle a constant stream of customer enquiries: stock availability, opening hours, click-and-collect orders, returns. Younison gives your team one place to manage every channel.",
    uses: [
      "Click-and-collect order ready notifications",
      "Stock availability queries",
      "Opening hours and holiday updates",
      "Returns and refund follow-ups",
      "General customer service enquiries",
    ],
    closing:
      "Independent retailers using Younison keep up with messaging across channels without anyone needing to monitor multiple apps.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    Icon: UtensilsCrossed,
    summary:
      "For restaurants and venues managing bookings, special requests, and customer queries.",
    metaTitle: "Hospitality customer communications",
    h1: "Customer communications for hospitality and food service.",
    intro:
      "Restaurants, cafés, and small hospitality venues handle bookings, special requests, and customer queries — often during the busiest service hours. Younison keeps it manageable.",
    uses: [
      "Booking confirmations and reminders",
      "Special request communications (dietary, group size, accessibility)",
      "Opening hours and last-minute closures",
      "Loyalty programme communications",
      "General customer enquiries",
    ],
    closing:
      "Hospitality teams using Younison reduce booking-related phone calls and respond faster to customer questions during service.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    Icon: Briefcase,
    summary:
      "For accountants, solicitors, and consultants managing client communications.",
    metaTitle: "Professional services customer communications",
    h1: "Customer communications for professional services firms.",
    intro:
      "Accountants, solicitors, consultants, and other professional services firms communicate with clients about appointments, document collection, and ongoing matters. Younison organises it all.",
    uses: [
      "Appointment confirmations and reminders",
      "Document collection requests and updates",
      "Status updates on ongoing work",
      "General client enquiries",
      "Holiday and availability notifications",
    ],
    closing:
      "Professional services teams using Younison maintain consistent client communication without manual tracking.",
  },
  {
    slug: "trades",
    name: "Trades",
    Icon: Wrench,
    summary:
      "For plumbers, electricians, and builders managing appointments and customer enquiries.",
    metaTitle: "Trades customer communications",
    h1: "Customer communications for trades and home services.",
    intro:
      "Plumbers, electricians, builders, and other trades professionals juggle appointment bookings, on-the-day rescheduling, and follow-up enquiries — often from the van. Younison makes it simple.",
    uses: [
      "Appointment confirmations and arrival window updates",
      "Quote follow-ups",
      "Job completion notifications",
      "Customer enquiries about availability and pricing",
      "Aftercare and warranty communications",
    ],
    closing:
      "Trades professionals using Younison spend less time on the phone managing scheduling and more time on the work.",
  },
  {
    slug: "community-pharmacy",
    name: "Community Pharmacy",
    Icon: Store,
    summary:
      "For community pharmacies managing customer queries and order notifications.",
    metaTitle: "Community pharmacy customer communications",
    h1: "Customer communications for community pharmacies.",
    intro:
      "Community pharmacies handle a wide range of customer interactions every day: orders ready for collection, queries about opening hours, store updates, and general customer service. Younison gives your team one place to manage every channel.",
    uses: [
      "Order ready for collection notifications",
      "Opening hours and holiday updates",
      "General customer enquiries",
      "Store information and service availability",
      "Loyalty programme and consultation booking reminders",
    ],
    closing:
      "Community pharmacies using Younison reduce phone-based admin and respond faster to customer queries — particularly during busy periods.",
    pharmin: true,
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
