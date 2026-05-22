import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { verticals } from "@/lib/verticals";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/product",
    "/verticals",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/legal/privacy",
    "/legal/terms",
    "/legal/dpa",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const verticalEntries: MetadataRoute.Sitemap = verticals.map((v) => ({
    url: `${site.url}/verticals/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...verticalEntries, ...postEntries];
}
