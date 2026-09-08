import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
} from "../../constants/seo";

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
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <article
        className="mx-auto max-w-3xl space-y-6"
        itemScope
        itemType="https://schema.org/Person"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">nishantx.in</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl" itemProp="name">
          Nishant Agarwal
        </h1>
        <p className="text-xl text-white/70" itemProp="jobTitle">
          {person.jobTitle}
        </p>
        <p className="text-lg leading-relaxed text-white/80" itemProp="description">
          {person.description}
        </p>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Who is Nishant Agarwal?</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Nishant Agarwal is a backend and blockchain engineer based in India. He builds privacy
            systems, production APIs, and Ethereum tooling, and contributes merged open-source work
            to Hardhat, Hyperlane, FilOzone, Mastra, WalletConnect, and viem. He studies{" "}
            {person.degree} at {person.university}.
          </p>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Education</h2>
          <p className="mt-3 text-white/70">
            {person.degree}, {person.university}, {person.location}
          </p>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Experience & recognition</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
            <li>Web3 Blockchain Developer Intern — Digital South Trust (Mar 2026 – Jul 2026)</li>
            <li>LNMHacks 8.0 Finalist</li>
            <li>Top 20 — Kshitij 2026 (IIT Kharagpur)</li>
            <li>BlockForge paper accepted at NetCrypt 2026</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Selected work</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            {featuredProjects.map((project) => (
              <li key={project.name}>
                <a className="text-cyan-300 underline" href={project.github} itemProp="owns">
                  {project.name}
                </a>
                {" — "}
                {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-white/70">
            Email{" "}
            <a className="text-cyan-300 underline" href={`mailto:${person.email}`} itemProp="email">
              {person.email}
            </a>
            . GitHub{" "}
            <a className="text-cyan-300 underline" href={person.github}>
              {person.github}
            </a>
            . LinkedIn{" "}
            <a className="text-cyan-300 underline" href={person.linkedin}>
              {person.linkedin}
            </a>
            .
          </p>
        </section>

        <p className="pt-8">
          <a className="text-cyan-300 underline" href="/">
            Open the interactive portfolio
          </a>
          {" · "}
          <a className="text-cyan-300 underline" href="/projects">
            View all projects
          </a>
        </p>
      </article>
    </main>
  );
}
