import { absoluteUrl, SITE_URL } from "../constants/seo";

/** Stable lastmod — avoid new Date() on every build. */
const LASTMOD = new Date("2026-11-14");

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/nishant-agarwal"),
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/open-source"),
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/files/resume.pdf"),
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/og-image.png"),
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
