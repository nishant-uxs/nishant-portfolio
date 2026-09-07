import type { ReactNode } from "react";
import {
  clashDisplay,
  satoshi,
  geistMono,
  instrumentSerif,
} from "@/config/fonts";
import { defaultMetadata, jsonLd } from "@/config/seo";
import { AppProviders } from "@/providers/AppProviders";
import { LivingBackground } from "@/components/background/LivingBackground";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${satoshi.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-nx-bg font-body text-nx-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProviders>
          <LivingBackground />
          <LoadingScreen />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
