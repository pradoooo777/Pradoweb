import type { MetadataRoute } from "next";
import { heritageSites } from "@/data/heritage-sites";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/design-system/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...heritageSites.map((site) => ({
      url: `${SITE_URL}/sites/${site.id}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
