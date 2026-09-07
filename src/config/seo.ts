import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/icons/icon.png", type: "image/png" }],
    apple: [{ url: "/icons/icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nishant Agarwal",
  url: siteConfig.url,
  email: siteConfig.links.email,
  telephone: siteConfig.links.phone,
  image: `${siteConfig.url}${siteConfig.avatar}`,
  jobTitle: "Software Engineer — Backend & Full-Stack",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bennett University",
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  description: siteConfig.description,
};
