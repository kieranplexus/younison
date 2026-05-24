import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { getVertical, verticals } from "@/lib/verticals";
import { site } from "@/lib/site";

type Params = { params: Promise<{ vertical: string }> };

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { vertical } = await params;
  const data = getVertical(vertical);

  if (!data) {
    return { title: "Not found" };
  }

  return {
    title: data.metaTitle,
    description: data.summary,
    openGraph: {
      title: `${data.metaTitle} | Central`,
      description: data.summary,
      url: `${site.url}/verticals/${data.slug}`,
    },
  };
}

export default async function VerticalPage({ params }: Params) {
  const { vertical } = await params;
  const data = getVertical(vertical);

  if (!data) {
    notFound();
  }

  return (
    <>
      <PageHeader title={data.h1} />

      <section>
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted">{data.intro}</p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-primary">
              Common uses
            </h2>
            <ul className="mt-6 space-y-3">
              {data.uses.map((use) => (
                <li key={use} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-none text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-ink">{use}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-lg leading-relaxed text-muted">
              {data.closing}
            </p>

            {data.pharmin ? (
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Central works alongside a specialised pharmacy product,{" "}
                <a
                  href="https://pharmin.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  Pharmin
                </a>
                , which provides additional tools designed specifically for
                community pharmacy customer service workflows.
              </p>
            ) : null}

            <div className="mt-10">
              <Button href="/contact">Contact us to learn more</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
