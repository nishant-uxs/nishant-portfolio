import "../styles/index.css";
import { SeoProfile } from "./_components/SeoProfile";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OWNER_NAME,
  SEO_KEYWORDS,
  GOOGLE_SITE_VERIFICATION,
  OG_IMAGE_PATH,
  buildJsonLdGraph,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
} from "../constants/seo";

const jsonLd = buildJsonLdGraph();

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "nishantx.in",
  generator: "Next.js",
  title: {
    default: SITE_NAME,
    template: `%s | ${OWNER_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: OWNER_NAME, url: SITE_URL }],
  creator: OWNER_NAME,
  publisher: OWNER_NAME,
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      en: "/",
    },
  },
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon-32.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
        <link rel="canonical" href={absoluteUrl("/")} />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content={absoluteUrl(OG_IMAGE_PATH)} />
        <meta name="author" content={OWNER_NAME} />
        <meta name="geo.region" content="IN" />
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
