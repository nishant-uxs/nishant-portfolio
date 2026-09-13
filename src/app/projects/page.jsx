import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
} from "../../constants/seo";
import { SeoDocShell } from "../_components/SeoDocShell";

export const metadata = {
  title: "Projects by Nishant Agarwal",
  description:
    "Projects by Nishant Agarwal: Krydo (ZK identity), BlockForge (NetCrypt 2026), CivicSense, and TrustMesh — backend, blockchain, and zero-knowledge systems.",
  keywords: [
    "Nishant Agarwal projects",
    "Krydo Nishant Agarwal",
    "BlockForge Nishant Agarwal",
    "CivicSense Nishant Agarwal",
    "TrustMesh Nishant Agarwal",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    ...defaultOpenGraph,
    type: "website",
    url: absoluteUrl("/projects"),
    title: "Projects by Nishant Agarwal",
    description:
      "Krydo, BlockForge, CivicSense, and TrustMesh — backend and blockchain projects by Nishant Agarwal.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Projects by Nishant Agarwal",
    description: SITE_DESCRIPTION,
  },
};

export default function ProjectsPage() {
  return (
    <SeoDocShell title="Projects — Nishant Agarwal">
      <article>
        <h1>Projects by Nishant Agarwal</h1>
        <p className="seo-doc-lead">{person.headline}</p>
        <p>
          These are featured production and research projects by Nishant Agarwal spanning
          zero-knowledge identity, decentralized assessment, civic reporting, and on-chain
          reputation.
        </p>

        {featuredProjects.map((project) => (
          <section
            key={project.name}
            itemScope
            itemType="https://schema.org/SoftwareApplication"
            style={{
              marginTop: "1.35rem",
              paddingTop: "1.15rem",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <h2 itemProp="name" style={{ marginTop: 0 }}>
              {project.name}
            </h2>
            <p itemProp="description">{project.description}</p>
            <meta itemProp="author" content="Nishant Agarwal" />
            <p style={{ display: "flex", gap: "1rem", marginTop: "0.65rem", fontSize: "0.92rem" }}>
              <a href={project.url} itemProp="url">
                Live demo
              </a>
              <a href={project.github}>Source on GitHub</a>
            </p>
          </section>
        ))}

        <div className="seo-doc-footer-links">
          <a href="/">Open macOS portfolio</a>
          <a href="/about">About</a>
          <a href="/nishant-agarwal">Profile</a>
        </div>
      </article>
    </SeoDocShell>
  );
}
