import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { resume } from "@/data/resume";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const images = resume.projects
    .filter((p) => p.image)
    .map((p) => `${SITE_URL}${p.image}`);

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updated ? new Date(p.updated) : new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}