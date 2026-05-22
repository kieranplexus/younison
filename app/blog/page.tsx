import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { postsByDate } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical thoughts on customer communications for small business.",
  openGraph: {
    title: "Blog | Younison",
    description:
      "Practical thoughts on customer communications for small business.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Younison blog."
        subtitle="Practical thoughts on customer communications for small business."
      />

      <section>
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl divide-y divide-line">
            {postsByDate.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <time dateTime={post.date}>{post.displayDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
