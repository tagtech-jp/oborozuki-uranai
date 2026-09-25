import type { MetadataRoute } from "next";
import { getAllZodiacs } from "@/lib/fortune";

const siteUrl = "https://oborozuki.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const zodiacs = getAllZodiacs();

  const zodiacPages = zodiacs.map((z) => ({
    url: `${siteUrl}/${z.id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...zodiacPages,
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/tos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
