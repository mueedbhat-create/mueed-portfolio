import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { resume } from "@/data/resume";

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
  ];
}