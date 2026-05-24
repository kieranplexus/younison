import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import { getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Central`,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted">
              <time dateTime={post.date}>{post.displayDate}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {post.title}
            </h1>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <Prose className="mx-auto max-w-3xl">{post.content}</Prose>

          <div className="mx-auto mt-14 max-w-3xl border-t border-line pt-10">
            <p className="text-lg font-semibold text-primary">
              Keeping up with customer communications?
            </p>
            <p className="mt-2 text-muted">
              See how Central brings every channel into one shared inbox.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact">Get in touch</Button>
              <Button href="/product" variant="secondary">
                Explore the product
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
