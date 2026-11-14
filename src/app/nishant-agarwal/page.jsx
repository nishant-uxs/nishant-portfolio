import { person, featuredProjects } from "../../constants/person";
import {
  SITE_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
  buildFaqJsonLd,
  buildPersonJsonLd,
  buildProfilePageJsonLd,
  buildBreadcrumbJsonLd,
} from "../../constants/seo";
import { SeoDocShell } from "../_components/SeoDocShell";

export const metadata = {
  title: "Nishant Agarwal | Official Profile — Bennett University · nishantx.in",
  description:
    "Official profile of Nishant Agarwal (nishant-uxs): backend & full-stack engineer at Bennett University, Greater Noida. Digital South Trust intern. Open source in ClickHouse, OpenTelemetry, Hardhat. Portfolio nishantx.in.",
  keywords: [
    "Nishant Agarwal",
    "Who is Nishant Agarwal",
    "Nishant Agarwal Bennett University",
    "Nishant Agarwal Greater Noida",
    "Nishant Agarwal backend",
    "Nishant Agarwal full stack",
    "Nishant Agarwal open source",
    "Nishant Agarwal portfolio",
    "nishant-uxs",
    "nishantx.in",
    "nishant.agarwal__",
  ],
  alternates: { canonical: "/nishant-agarwal" },
  openGraph: {
    ...defaultOpenGraph,
    type: "profile",
    url: absoluteUrl("/nishant-agarwal"),
    title: "Nishant Agarwal | Official Profile | Bennett University",
    description: person.description,
  },
  twitter: {
    ...defaultTwitter,
    title: "Nishant Agarwal — Official Profile",
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = [
  buildProfilePageJsonLd(),
  buildPersonJsonLd(),
  buildFaqJsonLd(),
  buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Nishant Agarwal", path: "/nishant-agarwal" },
  ]),
];

export default function NishantAgarwalPage() {
  return (
    <SeoDocShell title="Nishant Agarwal — Official Profile">
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
          Backend &amp; Full-Stack Engineer · B.Tech CSE, Bennett University · Greater Noida,
          India · GitHub <strong>nishant-uxs</strong>
        </p>

        <p>
          <img
            src={person.photo}
            alt="Nishant Agarwal — backend and full-stack engineer at Bennett University"
            width={160}
            height={160}
            style={{ borderRadius: "18px", margin: "0.5rem 0 1rem" }}
          />
        </p>

        <p>{person.description}</p>
        <p className="seo-doc-muted">{person.disambiguation}</p>

        <section>
          <h2>Search this Nishant Agarwal</h2>
          <p>
            People looking for <strong>Nishant Agarwal</strong> often mean the Bennett University
            CSE student behind <a href="/">nishantx.in</a>, GitHub{" "}
            <a href={person.github}>nishant-uxs</a>, and Instagram{" "}
            <a href={person.instagram}>@nishant.agarwal__</a>. Related searches: Nishant Agarwal
            Bennett, Nishant Agarwal Krydo, Nishant Agarwal ClickHouse, Nishant Agarwal
            OpenTelemetry, Nishant Agarwal GenZFEST, Nishant Agarwal resume.
          </p>
        </section>

        <section>
          <h2>Quick facts about Nishant Agarwal</h2>
          <ul className="seo-doc-list">
            <li>
              Full name: <strong>Nishant Agarwal</strong>
            </li>
            <li>
              Education: {person.degree}, {person.university}, {person.location} (CGPA 8.86/10.0)
            </li>
            <li>
              Role: {person.jobTitle}
            </li>
            <li>
              Internship: Software Engineer Intern (Full-Stack / Backend) — Digital South Trust
              (Mar–Jul 2026)
            </li>
            <li>
              Website: <a href="/">https://www.nishantx.in</a>
            </li>
            <li>
              Resume: <a href={person.resumePath}>Nishant Agarwal Resume PDF</a>
            </li>
            <li>
              GitHub: <a href={person.github}>github.com/nishant-uxs</a>
            </li>
            <li>
              LinkedIn: <a href={person.linkedin}>Nishant Agarwal on LinkedIn</a>
            </li>
            <li>
              Instagram: <a href={person.instagram}>@nishant.agarwal__</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Open source by Nishant Agarwal</h2>
          <p>
            Nishant Agarwal contributes upstream fixes across observability, databases, and
            developer tooling — including ClickHouse, OpenTelemetry, Hardhat, viem, Mastra,
            LiteLLM, Hyperlane, and Nethermind. See the full list on{" "}
            <a href="/open-source">Open source</a>.
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
          <h2>Awards & recognition</h2>
          <ul className="seo-doc-list">
            <li>Winner — GenZFEST Hacktoberfest Agra 2026</li>
            <li>Rank 4 / 600+ teams — Smart India Hackathon (SIH Internal)</li>
            <li>Honorable Mention — Stellar Buildathon Delhi (Krydo)</li>
            <li>Finalist — LNMHacks 8.0 (Top 30 / 150+)</li>
            <li>Top 20 — Tech Triad, IIT Kharagpur (Kshitij 2026)</li>
            <li>Presented &amp; published — NetCrypt 2026 (BlockForge)</li>
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
                Nishant Agarwal studies {person.degree} at {person.university},{" "}
                {person.location}.
              </p>
            </div>
            <div>
              <h3>What is Nishant Agarwal&apos;s GitHub?</h3>
              <p>
                Nishant Agarwal&apos;s GitHub username is <strong>nishant-uxs</strong> —{" "}
                <a href={person.github}>{person.github}</a>.
              </p>
            </div>
            <div>
              <h3>What is Nishant Agarwal&apos;s Instagram?</h3>
              <p>
                Official Instagram: <a href={person.instagram}>@nishant.agarwal__</a> (
                <a href={person.instagram}>{person.instagram}</a>).
              </p>
            </div>
            <div>
              <h3>What is Nishant Agarwal&apos;s official website?</h3>
              <p>
                <a href="/">https://www.nishantx.in</a> — interactive portfolio, projects, and{" "}
                <a href={person.resumePath}>resume</a>.
              </p>
            </div>
            <div>
              <h3>What has Nishant Agarwal built?</h3>
              <p>
                Krydo (Stellar privacy identity at krydo.in), CivicSense, BlockForge (NetCrypt
                2026), and TrustMesh — plus upstream open-source work in ClickHouse and
                OpenTelemetry.
              </p>
            </div>
            <div>
              <h3>Is this the Nishant Agarwal from Bennett University?</h3>
              <p>
                Yes. This page is the official profile of Nishant Agarwal, B.Tech CSE student at
                Bennett University, Greater Noida — author of nishantx.in.
              </p>
            </div>
          </div>
        </section>

        <div className="seo-doc-footer-links">
          <a href="/">Open macOS portfolio</a>
          <a href="/about">About Nishant Agarwal</a>
          <a href="/projects">Projects</a>
          <a href="/open-source">Open source</a>
          <a href={person.instagram}>Instagram</a>
          <a href={person.resumePath}>Resume PDF</a>
        </div>
      </article>
    </SeoDocShell>
  );
}
