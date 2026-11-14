import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Stable dates — avoid new Date() on every build so crawlers trust lastmod. */
const HOME_LASTMOD = new Date("2026-11-14");
const RESUME_LASTMOD = new Date("2026-11-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/Nishant_Agarwal_Resume.pdf`,
      lastModified: RESUME_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/llms.txt`,
      lastModified: HOME_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
