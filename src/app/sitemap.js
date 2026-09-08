import { SITE_URL, absoluteUrl } from "../constants/seo";

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/files/resume.pdf"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/og-image.png"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
