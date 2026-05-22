import Link from "next/link";
import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  excerpt: string;
  readingTime: string;
  content: ReactNode;
};

export const posts: Post[] = [
  {
    slug: "what-good-customer-communication-looks-like",
    title: "What good customer communication looks like in 2026",
    date: "2026-05-22",
    displayDate: "22 May 2026",
    excerpt:
      "Customer expectations have shifted to instant and multi-channel. What separates the businesses that keep up from the ones that fall behind.",
    readingTime: "3 min read",
    content: (
      <>
        <p>
          Customer expectations have shifted, and they are not shifting back.
          People now message a business the way they message a friend: briefly,
          across whatever channel is closest to hand, and with the quiet
          assumption of a quick reply. A question sent at lunchtime is expected
          to be answered by the afternoon, not next week.
        </p>
        <p>
          This is the headline change of the past few years. Communication has
          become instant and multi-channel by default. A customer might start a
          conversation on web chat, follow up by text, and finish by email,
          without ever thinking of it as three separate threads. To them, it is
          one conversation. The challenge for a small business is to treat it as
          one too.
        </p>

        <h2>Response time is the new differentiator</h2>
        <p>
          Price and quality still matter, but they are table stakes. What
          increasingly sets businesses apart is how quickly and clearly they
          respond. A fast, helpful reply signals competence and respect for the
          customer&rsquo;s time. A slow or scattered one signals the opposite,
          regardless of how good the underlying product or service is.
        </p>
        <p>
          This is good news for small businesses, because responsiveness is not
          about size. A two-person shop that replies within minutes can easily
          out-serve a national chain that routes everything through a queue.
          Being small and attentive is an advantage, provided the messages do
          not get lost on the way.
        </p>

        <h2>Process matters more than tools</h2>
        <p>
          It is tempting to think the answer is a clever piece of software. In
          practice, the right tool matters less than a consistent process. A
          team that has agreed who watches the inbox, how quickly they aim to
          reply, and what a good answer looks like will outperform one that
          bought powerful software and never settled on a routine.
        </p>
        <p>
          Tools help by removing friction — pulling channels together, prompting
          reminders, keeping a customer&rsquo;s history in one place — but they
          support good habits rather than replacing them. The business that wins
          is the one whose customers always feel heard, whatever channel they
          chose.
        </p>

        <h2>Keeping up</h2>
        <p>
          For small teams, the practical question is simple: can you keep up with
          everything your customers send you, across every channel, without
          anything slipping? If the honest answer is &ldquo;not quite,&rdquo; the
          fix is usually a clearer process and a single place to manage messages
          — not more apps.
        </p>
        <p>
          Tools like Younison help small teams keep up with customer
          communications across channels. If you would like to talk through how
          it might fit your business,{" "}
          <Link href="/contact">get in touch</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "five-ways-to-reduce-no-shows",
    title: "Five ways to reduce no-shows for appointment-based businesses",
    date: "2026-05-01",
    displayDate: "1 May 2026",
    excerpt:
      "No-shows will never reach zero, but a few simple communication habits can bring the rate down. Five practical steps for any appointment-based business.",
    readingTime: "4 min read",
    content: (
      <>
        <p>
          For any business that runs on appointments — a salon, a garage, a
          veterinary practice, a consultancy — the no-show is a familiar
          frustration. A slot was held, time was set aside, and nobody turned up.
          The cost is rarely just the empty hour; it is the customer who could
          have taken it, and the admin spent rebooking.
        </p>
        <p>
          No-shows will never reach zero. People forget, plans change, and life
          gets in the way. But a few simple habits can bring the rate down
          considerably, and most of them come down to clear, timely
          communication. Here are five that work.
        </p>

        <h2>1. Send a confirmation immediately after booking</h2>
        <p>
          The moment a booking is made, send a short confirmation. It does two
          things: it reassures the customer that the booking landed, and it
          creates a record they can refer back to. Include the date, time,
          location, and anything they need to bring or prepare. A booking that is
          never confirmed is a booking the customer half-remembers.
        </p>

        <h2>2. Send a reminder 24 to 48 hours before</h2>
        <p>
          The single most effective step is a reminder a day or two ahead — far
          enough in advance that the customer can rearrange their day if they
          need to, close enough that it stays fresh. This is where most recovered
          slots come from: a reminder prompts the person who would otherwise have
          forgotten to either show up or reschedule, and either outcome beats an
          empty chair. Tools like Younison can automate reminder sends so this
          happens reliably without anyone remembering to do it by hand.
        </p>

        <h2>3. Make rescheduling easy</h2>
        <p>
          A surprising number of no-shows are not people who decided not to come;
          they are people who could not face the friction of changing the time.
          If the only way to reschedule is a phone call during business hours,
          some will simply not bother. Let customers reply to a message to move
          their slot, and you turn a lost appointment into a kept one on a
          different day.
        </p>

        <h2>4. Consider a deposit for new customers</h2>
        <p>
          For first-time customers, or for longer appointments that are expensive
          to leave empty, a small deposit changes the dynamic. It does not need
          to be large. The point is not the money; it is the small commitment
          that makes someone think twice before drifting away. Regulars who have
          earned trust can be exempt — this is mostly a tool for unknown
          bookings.
        </p>

        <h2>5. Follow up after a no-show</h2>
        <p>
          When someone does miss an appointment, a brief, non-judgemental
          follow-up is worth sending. Most people feel a flicker of guilt about a
          missed slot, and a friendly message to rebook often lands well. It also
          surfaces useful information: if several no-shows mention the same
          reason — parking, timing, a confusing location — you have found
          something to fix.
        </p>

        <h2>The common thread</h2>
        <p>
          What links all five is communication that is timely and easy to act on.
          None of them require a hard policy or an awkward conversation. They
          simply keep the appointment present in the customer&rsquo;s mind and
          make the right action — showing up, or moving the time — the path of
          least resistance.
        </p>
        <p>
          Reduce no-shows and you do more than protect revenue. You free up slots
          for customers who want them, you smooth out the day for your team, and
          you give the impression of a business that is organised and easy to
          deal with.
        </p>
      </>
    ),
  },
  {
    slug: "why-small-businesses-are-switching-to-shared-inboxes",
    title: "Why small businesses are switching to shared customer inboxes",
    date: "2026-04-10",
    displayDate: "10 April 2026",
    excerpt:
      "Messages arrive by text, web chat, email, and phone — each with its own app and login. Here is why independent businesses are bringing them into one place.",
    readingTime: "4 min read",
    content: (
      <>
        <p>
          Ask any small business owner where their customer messages live, and
          you will rarely get a single answer. Some arrive by text. Some come
          through web chat. A few land in the website widget, others by email,
          and plenty still come over the phone. Each channel has its own app, its
          own login, and its own notification that someone has to remember to
          check.
        </p>
        <p>
          On a quiet day, this is manageable. On a busy one, it is how messages
          slip through. A customer asks whether an order is ready, the question
          lands in an inbox nobody is watching that afternoon, and two days later
          they ring to complain. The business looks disorganised, even though
          everyone was working hard the entire time.
        </p>

        <h2>The hidden cost of fragmented messaging</h2>
        <p>
          The cost of scattered communication is rarely a single dramatic
          failure. It is the steady drip of small ones. A reminder that went out
          late. A query that was answered twice because two people picked it up.
          A returning customer who had to explain their situation from scratch
          because the colleague who helped them last time was off.
        </p>
        <p>
          These moments are hard to measure, but customers feel them. Response
          time has quietly become one of the clearest signals of whether a
          business has its act together. When a reply takes hours, people assume
          the worst. When it takes minutes, they relax.
        </p>

        <h2>What a shared inbox actually does</h2>
        <p>
          A shared inbox brings every channel into one place. Text, web chat, and
          email arrive in the same list, and the whole team can see them. Instead
          of asking who has the login for which app, everyone works from the same
          view.
        </p>
        <p>
          The collaboration features are what make it more than a tidy list.
          Messages can be assigned to a specific person, so nobody assumes
          someone else is handling it. Internal notes let a colleague add context
          without the customer seeing it. Tags and simple statuses make it
          obvious what has been dealt with and what still needs a reply.
        </p>

        <h2>Three workflows that change</h2>
        <p>
          Take an independent shop running click-and-collect. A customer messages
          to ask whether their order has arrived. With a shared inbox, whoever is
          on the floor can see the question, check the back room, and reply —
          then mark it done so nobody chases it again.
        </p>
        <p>
          Or take a plumber working out of a van. A customer wants to move
          tomorrow&rsquo;s appointment. Rather than missing the text until the
          evening, the message sits in a shared inbox the office can see, and
          someone confirms the new time while the plumber is still on a job.
        </p>
        <p>
          Or a busy veterinary practice. Reminders for routine visits go out on a
          schedule rather than by hand, and when a pet owner replies with a
          question, the front desk can see the full thread instead of starting
          cold.
        </p>

        <h2>Not a revolution, just less friction</h2>
        <p>
          None of this is dramatic. A shared inbox does not transform a business
          overnight, and it will not fix a service problem that runs deeper than
          logistics. What it does is remove a layer of friction that most small
          teams have simply learned to live with.
        </p>
        <p>
          That is why more independent businesses are making the switch. Not
          because they were sold on a clever feature, but because juggling five
          apps stopped being sustainable. Bringing everything into one place is
          the unglamorous fix that quietly makes the day run smoother.
        </p>
        <p>
          Tools like Younison exist to make that consolidation straightforward,
          but the principle matters more than any particular product: customers
          do not care which channel they used, only that someone got back to
          them.
        </p>
      </>
    ),
  },
];

export const postsByDate = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
