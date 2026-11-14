import { siteConfig } from "@/config/site";
import {
  achievementsData,
  experienceData,
  ossData,
  person,
  projectsData,
} from "@/data/content";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "technology",
  classification: "Portfolio",
  openGraph: {
    type: "profile",
    firstName: "Nishant",
    lastName: "Agarwal",
    username: "nishant-uxs",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "nishantx.in",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nishant Agarwal — Backend & Full-Stack Engineer · nishantx.in",
        type: "image/png",
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
    icon: [
      { url: "/icons/icon.png", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": [{ url: "/llms.txt", title: "llms.txt" }],
    },
  },
  other: {
    "profile:first_name": "Nishant",
    "profile:last_name": "Agarwal",
    "profile:username": "nishant-uxs",
  },
};

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path}`;

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const profileId = `${siteConfig.url}/#profile`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: "nishantx.in",
      alternateName: ["Nishant Agarwal Portfolio", siteConfig.name],
      description: siteConfig.description,
      inLanguage: "en-IN",
      publisher: { "@id": personId },
      about: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profileId,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Nishant Agarwal",
      alternateName: ["nishant-uxs", "Nishant", "N. Agarwal"],
      url: siteConfig.url,
      email: siteConfig.links.email,
      telephone: siteConfig.links.phone,
      image: absolute(siteConfig.avatar),
      jobTitle: "Software Engineer — Backend & Full-Stack",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Bennett University",
        url: "https://www.bennett.edu.in/",
      },
      knowsAbout: [
        "Backend engineering",
        "Full-stack development",
        "TypeScript",
        "Node.js",
        "OpenTelemetry",
        "ClickHouse",
        "PostgreSQL",
        "Docker",
        "Open source",
        "Stellar Soroban",
        "System design",
      ],
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      mainEntityOfPage: { "@id": profileId },
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
        skills: [...person.role.split(" · "), "TypeScript", "Node.js", "Open Source"],
      },
      award: achievementsData.map((item) => `${item.value} — ${item.label}`),
      workExample: projectsData.map((project) => ({
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        codeRepository: project.github,
        url: project.live || project.github,
        programmingLanguage: project.stack,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#projects`,
      name: "Featured projects by Nishant Agarwal",
      numberOfItems: projectsData.length,
      itemListElement: projectsData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: project.live || project.github,
        name: project.title,
        item: {
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          url: project.live || project.github,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          author: { "@id": personId },
          codeRepository: project.github,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#oss`,
      name: "Open-source contributions by Nishant Agarwal",
      numberOfItems: ossData.length,
      itemListElement: ossData.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: entry.url,
        name: `${entry.repo} ${entry.pr}`,
        item: {
          "@type": "CreativeWork",
          name: `${entry.repo} ${entry.pr}`,
          description: entry.blurb,
          url: entry.url,
          author: { "@id": personId },
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#experience`,
      name: "Work experience",
      itemListElement: experienceData.map((job, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "OrganizationRole",
          roleName: job.role,
          startDate: "2026-03",
          endDate: "2026-07",
          description: job.points.join(" "),
          worksFor: {
            "@type": "Organization",
            name: job.org,
          },
        },
      })),
    },
  ],
};
