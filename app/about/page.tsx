import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Central is built by Nutrapi Limited, an Irish software company building practical tools for small business customer communications.",
  openGraph: {
    title: "About | Central",
    description:
      "Central is built by Nutrapi Limited, an Irish software company building practical tools for small business customer communications.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Central." />

      <section>
        <Container className="py-16 md:py-20">
          <Prose className="max-w-3xl">
            <p>
              Central is a customer communications platform built by Nutrapi
              Limited, an Irish software company.
            </p>
            <p>
              Founded in 2022 and based in Ireland, Nutrapi was set up to address
              a simple problem: small businesses across Ireland and the UK were
              spending too much time juggling messages across phone, SMS, email,
              and chat — and not enough time serving their customers.
            </p>
            <p>
              We build the kind of tools we&rsquo;d want to use ourselves:
              focused, reliable, and easy to introduce to a team without weeks of
              training.
            </p>

            <h2>What we work on</h2>
            <p>
              Our platform serves independent businesses across vet clinics,
              retail, hospitality, professional services, trades, and community
              pharmacy. Each sector has its own ways of working, and we adapt our
              platform accordingly.
            </p>

            <h2>Team</h2>
            <p>
              Central is led by Kieran Walkin, founder of Nutrapi Limited, with
              engineering across Ireland and Lithuania. Our team has backgrounds
              in technology, retail systems, and customer engagement software.
            </p>

            <h2>Where we operate</h2>
            <p>
              Nutrapi Limited is registered in Ireland (CRO {site.company.cro})
              with offices in {site.company.address}. We serve customers across
              Ireland, the UK, and selected European markets.
            </p>
          </Prose>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/product" variant="secondary">
              Explore the product
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
