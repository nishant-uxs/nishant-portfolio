import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
} from "../../constants/seo";

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
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Projects by Nishant Agarwal
        </h1>
        <p className="text-lg text-white/70">{person.headline}</p>
        <p className="text-white/60 leading-relaxed">
          These are featured production and research projects by Nishant Agarwal spanning
          zero-knowledge identity, decentralized assessment, civic reporting, and on-chain
          reputation.
        </p>
        {featuredProjects.map((project) => (
          <section
            key={project.name}
            className="border-t border-white/10 pt-6"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            <h2 className="text-2xl font-semibold" itemProp="name">
              {project.name}
            </h2>
            <p className="mt-2 text-white/70" itemProp="description">
              {project.description}
            </p>
            <meta itemProp="author" content="Nishant Agarwal" />
            <p className="mt-3 flex gap-4 text-sm">
              <a className="text-cyan-300 underline" href={project.url} itemProp="url">
                Live demo
              </a>
              <a className="text-cyan-300 underline" href={project.github}>
                Source on GitHub
              </a>
            </p>
          </section>
        ))}
        <p>
          <a className="text-cyan-300 underline" href="/about">
            About Nishant Agarwal
          </a>
          {" · "}
          <a className="text-cyan-300 underline" href="/">
            Home
          </a>
        </p>
      </article>
    </main>
  );
}
