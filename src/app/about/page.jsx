import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
} from "../../constants/seo";
import { SeoDocShell } from "../_components/SeoDocShell";

export const metadata = {
  title: "About Nishant Agarwal",
  description: person.description,
  keywords: [
    "About Nishant Agarwal",
    "Nishant Agarwal Bennett University",
    "Nishant Agarwal Digital South Trust",
    "Nishant Agarwal open source",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    ...defaultOpenGraph,
    type: "profile",
    url: absoluteUrl("/about"),
    title: `About ${person.name} | ${person.jobTitle}`,
    description: person.description,
  },
  twitter: {
    ...defaultTwitter,
    title: `About ${person.name}`,
    description: SITE_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <SeoDocShell title="About — Nishant Agarwal">
      <article itemScope itemType="https://schema.org/Person">
        <p className="seo-doc-kicker">nishantx.in</p>
        <h1 itemProp="name">Nishant Agarwal</h1>
        <p className="seo-doc-lead" itemProp="jobTitle">
          {person.jobTitle}
        </p>
        <p itemProp="description">{person.description}</p>

        <section>
          <h2>Who is Nishant Agarwal?</h2>
          <p>
            Nishant Agarwal is a backend and blockchain engineer based in Greater Noida, India. He
            builds privacy systems, production APIs, and Ethereum tooling, and contributes merged
            open-source work to ClickHouse, Hardhat, Hyperlane, FilOzone, Mastra, WalletConnect, and
            viem. He studies {person.degree} at {person.university}. Also known as nishant-uxs.
          </p>
          <p className="seo-doc-muted">{person.disambiguation}</p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            {person.degree}, {person.university}, {person.location}
          </p>
        </section>

        <section>
          <h2>Experience & recognition</h2>
          <ul className="seo-doc-list">
            <li>Web3 Blockchain Developer Intern — Digital South Trust (Mar 2026 – Jul 2026)</li>
            <li>LNMHacks 8.0 Finalist</li>
            <li>Top 20 — Kshitij 2026 (IIT Kharagpur)</li>
            <li>BlockForge paper accepted at NetCrypt 2026</li>
          </ul>
        </section>

        <section>
          <h2>Selected work</h2>
          <ul className="seo-doc-list">
            {featuredProjects.map((project) => (
              <li key={project.name}>
                <a href={project.github} itemProp="owns">
                  {project.name}
                </a>{" "}
                — {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Email{" "}
            <a href={`mailto:${person.email}`} itemProp="email">
              {person.email}
            </a>
            . GitHub <a href={person.github}>{person.github}</a>. LinkedIn{" "}
            <a href={person.linkedin}>{person.linkedin}</a>. Instagram{" "}
            <a href={person.instagram}>Nishant Agarwal (@nishant.agarwal__)</a>.
          </p>
        </section>

        <div className="seo-doc-footer-links">
          <a href="/">Open macOS portfolio</a>
          <a href="/nishant-agarwal">Profile</a>
          <a href="/projects">Projects</a>
        </div>
      </article>
    </SeoDocShell>
  );
}
