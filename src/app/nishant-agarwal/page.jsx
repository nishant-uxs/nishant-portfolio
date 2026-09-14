import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
  buildFaqJsonLd,
  buildPersonJsonLd,
} from "../../constants/seo";
import { SeoDocShell } from "../_components/SeoDocShell";

export const metadata = {
  title: "Nishant Agarwal — Bennett University Backend & Blockchain Engineer",
  description: person.description,
  keywords: [
    "Nishant Agarwal",
    "Nishant Agarwal Bennett University",
    "Nishant Agarwal blockchain",
    "Nishant Agarwal backend",
    "nishant-uxs",
    "nishantx.in",
  ],
  alternates: { canonical: "/nishant-agarwal" },
  openGraph: {
    ...defaultOpenGraph,
    type: "profile",
    url: absoluteUrl("/nishant-agarwal"),
    title: "Nishant Agarwal | Backend & Blockchain Engineer | Bennett University",
    description: person.description,
  },
  twitter: {
    ...defaultTwitter,
    title: "Nishant Agarwal — Backend & Blockchain Engineer",
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = [buildPersonJsonLd(), buildFaqJsonLd()];

export default function NishantAgarwalPage() {
  return (
    <SeoDocShell title="Nishant Agarwal — Profile">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <p className="seo-doc-kicker">Official profile · nishantx.in</p>
        <h1>Nishant Agarwal</h1>
        <p className="seo-doc-lead">
          Backend & Blockchain Engineer · B.Tech CSE, Bennett University · GitHub{" "}
          <strong>nishant-uxs</strong>
        </p>
        <p>{person.description}</p>
        <p className="seo-doc-muted">{person.disambiguation}</p>

        <section>
          <h2>Quick facts</h2>
          <ul className="seo-doc-list">
            <li>
              Student: {person.degree}, {person.university}
            </li>
            <li>Location: {person.location}</li>
            <li>Internship: Web3 Blockchain Developer — Digital South Trust</li>
            <li>
              Instagram: <a href={person.instagram}>Nishant Agarwal (@nishant.agarwal__)</a>
            </li>
            <li>
              GitHub: <a href={person.github}>nishant-uxs</a>
            </li>
            <li>
              Website: <a href="/">https://www.nishantx.in</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Open source & projects</h2>
          <p>
            Merged contributions include ClickHouse, Hardhat, Hyperlane, FilOzone, Mastra,
            WalletConnect, and viem. Featured projects:
          </p>
          <ul className="seo-doc-list">
            {featuredProjects.map((project) => (
              <li key={project.name}>
                <a href={project.github}>{project.name}</a> — {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>FAQ — Who is Nishant Agarwal?</h2>
          <div style={{ display: "grid", gap: "1.1rem", marginTop: "0.75rem" }}>
            <div>
              <h3>Who is Nishant Agarwal?</h3>
              <p>{person.description}</p>
            </div>
            <div>
              <h3>Where does Nishant Agarwal study?</h3>
              <p>
                {person.degree} at {person.university}, {person.location}.
              </p>
            </div>
            <div>
              <h3>What is Nishant Agarwal&apos;s Instagram?</h3>
              <p>
                Official Instagram of Nishant Agarwal:{" "}
                <a href={person.instagram}>@nishant.agarwal__</a> —{" "}
                <a href={person.instagram}>{person.instagram}</a>
              </p>
            </div>
            <div>
              <h3>What is Nishant Agarwal&apos;s official website?</h3>
              <p>
                <a href="/">https://www.nishantx.in</a> — GitHub{" "}
                <a href={person.github}>{person.github}</a>.
              </p>
            </div>
            <div>
              <h3>What projects has Nishant Agarwal built?</h3>
              <p>
                Krydo, BlockForge, CivicSense, and TrustMesh — spanning ZK identity, decentralized
                assessment, civic reporting, and Stellar Soroban reputation.
              </p>
            </div>
          </div>
        </section>

        <div className="seo-doc-footer-links">
          <a href="/">Open macOS portfolio</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href={person.instagram}>Instagram</a>
        </div>
      </article>
    </SeoDocShell>
  );
}
