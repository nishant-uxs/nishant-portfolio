import { person, featuredProjects } from "./person";

const trimSlash = (url) => url.replace(/\/+$/, "");

/** Preferred public origin for canonicals, sitemap, and JSON-LD. */
export const SITE_URL = trimSlash(
  process.env.NEXT_PUBLIC_PORTFOLIO_URL || person.url || "https://nishantx.in",
);

export const OWNER_NAME = person.name;
export const SITE_NAME = `${OWNER_NAME} | ${person.jobTitle}`;
export const SITE_DESCRIPTION = person.headline;
export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_ALT =
  "Nishant Agarwal — Backend & Blockchain Engineer portfolio (nishantx.in)";

export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE || person.github;
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || person.linkedin;
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  person.instagram ||
  "https://www.instagram.com/nishant.agarwal__/";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || person.email;
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const sameAs = [GITHUB_PROFILE, LINKEDIN_URL, INSTAGRAM_URL].filter(Boolean);

export const SEO_KEYWORDS = [
  "Nishant Agarwal",
  "Nishant Agarwal portfolio",
  "Nishant Agarwal backend engineer",
  "Nishant Agarwal blockchain engineer",
  "Nishant Agarwal Web3",
  "Nishant Agarwal Bennett University",
  "Nishant Agarwal Digital South Trust",
  "Nishant Agarwal Hardhat",
  "Nishant Agarwal Hyperlane",
  "nishant-uxs",
  "nishantx.in",
  "nishant.agarwal__",
  "Krydo ZK identity",
  "BlockForge NetCrypt",
  "CivicSense",
  "TrustMesh Stellar",
  "Backend engineer India",
  "Blockchain engineer India",
  "Open source contributor Hardhat viem WalletConnect",
];

export const absoluteUrl = (path = "/") => {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const buildPersonJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: OWNER_NAME,
  givenName: person.firstName,
  familyName: "Agarwal",
  alternateName: ["nishant-uxs", "nishant.agarwal__", "Nishant Agarwal Bennett"],
  url: SITE_URL,
  image: absoluteUrl("/images/profile.webp"),
  email: EMAIL,
  telephone: person.phone,
  jobTitle: person.jobTitle,
  description: person.description,
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: person.university,
  },
  worksFor: {
    "@type": "Organization",
    name: "Digital South Trust",
  },
  sameAs,
  knowsAbout: [
    "Backend engineering",
    "Blockchain",
    "Ethereum",
    "Solidity",
    "Zero-knowledge proofs",
    "Hardhat",
    "TypeScript",
    "Node.js",
    "IPFS",
    "Stellar Soroban",
    "Open source",
  ],
  award: [
    "LNMHacks 8.0 Finalist",
    "Top 20 — Kshitij 2026 (IIT Kharagpur)",
    "NetCrypt 2026 accepted paper (BlockForge)",
  ],
});

export const buildWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["Nishant Agarwal portfolio", "nishantx.in", "Nishant Agarwal"],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#person` },
  creator: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
});

export const buildProjectsJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/projects#list`,
  name: "Projects by Nishant Agarwal",
  description: "Featured backend and blockchain projects by Nishant Agarwal",
  numberOfItems: featuredProjects.length,
  itemListElement: featuredProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.description,
      url: project.url,
      applicationCategory: "DeveloperApplication",
      author: { "@id": `${SITE_URL}/#person` },
      codeRepository: project.github,
    },
  })),
});

export const buildProfilePageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profile`,
  url: absoluteUrl("/about"),
  name: `About ${OWNER_NAME}`,
  description: person.description,
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
});

export const buildJsonLdGraph = () => [
  buildWebsiteJsonLd(),
  buildPersonJsonLd(),
  buildProfilePageJsonLd(),
  buildProjectsJsonLd(),
];

export const defaultOpenGraph = {
  type: "profile",
  locale: "en_IN",
  url: SITE_URL,
  siteName: "nishantx.in",
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  firstName: person.firstName,
  lastName: "Agarwal",
  username: "nishant-uxs",
  images: [
    {
      url: OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: OG_IMAGE_ALT,
      type: "image/png",
    },
  ],
};

export const defaultTwitter = {
  card: "summary_large_image",
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  images: [OG_IMAGE_PATH],
};
