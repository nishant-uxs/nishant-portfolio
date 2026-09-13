import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
  buildFaqJsonLd,
  buildPersonJsonLd,
} from "../../constants/seo";

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
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-3xl space-y-8">
        <p className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Official profile · nishantx.in
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Nishant Agarwal</h1>
        <p className="text-xl text-white/70">
          Backend & Blockchain Engineer · B.Tech CSE, Bennett University · GitHub{" "}
          <span className="text-white">nishant-uxs</span>
        </p>
        <p className="text-lg leading-relaxed text-white/80">{person.description}</p>
        <p className="text-sm leading-relaxed text-white/50">{person.disambiguation}</p>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Quick facts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
            <li>
              Student: {person.degree}, {person.university}
            </li>
            <li>Location: {person.location}</li>
            <li>Internship: Web3 Blockchain Developer — Digital South Trust</li>
            <li>Handles: nishant-uxs (GitHub), nishant.agarwal__ (Instagram)</li>
            <li>
              Website:{" "}
              <a className="text-cyan-300 underline" href="/">
                https://www.nishantx.in
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">Open source & projects</h2>
          <p className="mt-3 text-white/70">
            Merged contributions include ClickHouse, Hardhat, Hyperlane, FilOzone, Mastra,
            WalletConnect, and viem. Featured projects:
          </p>
          <ul className="mt-4 space-y-3 text-white/70">
            {featuredProjects.map((project) => (
              <li key={project.name}>
                <a className="text-cyan-300 underline" href={project.github}>
                  {project.name}
                </a>
                {" — "}
                {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mt-10 text-2xl font-semibold">FAQ — Who is Nishant Agarwal?</h2>
          <div className="mt-4 space-y-5 text-white/70">
            <div>
              <h3 className="font-semibold text-white">Who is Nishant Agarwal?</h3>
              <p className="mt-1">{person.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Where does Nishant Agarwal study?</h3>
              <p className="mt-1">
                {person.degree} at {person.university}, {person.location}.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                What is Nishant Agarwal&apos;s official website?
              </h3>
              <p className="mt-1">
                <a className="text-cyan-300 underline" href="/">
                  https://www.nishantx.in
                </a>{" "}
                — GitHub{" "}
                <a className="text-cyan-300 underline" href={person.github}>
                  {person.github}
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">What projects has Nishant Agarwal built?</h3>
              <p className="mt-1">
                Krydo, BlockForge, CivicSense, and TrustMesh — spanning ZK identity, decentralized
                assessment, civic reporting, and Stellar Soroban reputation.
              </p>
            </div>
          </div>
        </section>

        <p className="pt-6">
          <a className="text-cyan-300 underline" href="/about">
            Full about page
          </a>
          {" · "}
          <a className="text-cyan-300 underline" href="/projects">
            Projects
          </a>
          {" · "}
          <a className="text-cyan-300 underline" href="/">
            Interactive portfolio
          </a>
        </p>
      </article>
    </main>
  );
}
