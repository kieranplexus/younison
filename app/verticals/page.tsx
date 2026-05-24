import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import VerticalGrid from "@/components/VerticalGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries we serve",
  description:
    "Central serves vet clinics, retail, hospitality, professional services, trades, and community pharmacy.",
  openGraph: {
    title: "Industries we serve | Central",
    description:
      "Central serves vet clinics, retail, hospitality, professional services, trades, and community pharmacy.",
    url: `${site.url}/verticals`,
  },
};

export default function VerticalsPage() {
  return (
    <>
      <PageHeader
        title="Built for small business. Adapted to your sector."
        subtitle="Central works for any small business that needs to keep up with customer communications. Below are six common ways our customers use the platform."
      />

      <section>
        <Container className="py-16 md:py-24">
          <VerticalGrid />
        </Container>
      </section>
    </>
  );
}
