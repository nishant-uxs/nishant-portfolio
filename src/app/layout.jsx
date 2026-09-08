import "../styles/index.css";
import { SeoProfile } from "./_components/SeoProfile";
import { person } from "../constants/person";

const SITE_URL = person.url;
const OWNER_NAME = person.name;
const SITE_NAME = `${OWNER_NAME} | ${person.jobTitle}`;
const SITE_DESCRIPTION = person.headline;
const OG_IMAGE = "/readme/desktop.png";
const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE || person.github;
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || person.linkedin;
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nishant.agarwal__/";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || person.email;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const sameAs = [GITHUB_PROFILE, LINKEDIN_URL, INSTAGRAM_URL].filter(Boolean);
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: OWNER_NAME,
    alternateName: ["Nishant Agarwal portfolio", "nishantx.in"],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: OWNER_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: person.phone,
    jobTitle: person.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: person.university,
    },
    sameAs,
    knowsAbout: [
      "Backend engineering",
      "Blockchain",
      "Ethereum",
      "Zero-knowledge proofs",
      "Hardhat",
      "TypeScript",
    ],
    description: person.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: `About ${OWNER_NAME}`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
  },
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: OWNER_NAME,
  generator: "Next.js",
  title: {
    default: SITE_NAME,
    template: `%s | ${OWNER_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Nishant Agarwal",
    "Nishant Agarwal portfolio",
    "Nishant Agarwal Bennett University",
    "Nishant Agarwal blockchain",
    "Nishant Agarwal Web3",
    "Nishant Agarwal backend engineer",
    "nishantx.in",
    "Hardhat contributor",
    "Hyperlane contributor",
    "Krydo",
    "BlockForge",
  ],
  authors: [{ name: OWNER_NAME, url: SITE_URL }],
  creator: OWNER_NAME,
  publisher: OWNER_NAME,
  category: "technology",
  classification: "Portfolio",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    types: {
      "text/html": [
        { url: "/", title: "Nishant Agarwal" },
        { url: "/about", title: "About Nishant Agarwal" },
        { url: "/projects", title: "Projects by Nishant Agarwal" },
      ],
    },
  },
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "/",
    siteName: OWNER_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    firstName: "Nishant",
    lastName: "Agarwal",
    username: "nishant-uxs",
    images: [
      {
        url: OG_IMAGE,
        width: 1920,
        height: 1080,
        alt: "Nishant Agarwal — backend and blockchain engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <SeoProfile />
        {children}
      </body>
    </html>
  );
}
