import { person, featuredProjects } from "../../constants/person";
import { INSTAGRAM_URL, SITE_URL } from "../../constants/seo";

export function SeoProfile() {
  return (
    <section className="sr-only" aria-label="Nishant Agarwal profile for search engines">
      <h1>Nishant Agarwal — Backend & Blockchain Engineer</h1>
      <p>{person.headline}</p>
      <p>{person.description}</p>
      <p>
        Official website of Nishant Agarwal ({SITE_URL}): backend engineer, blockchain engineer,
        Web3 developer, open source contributor, Bennett University CSE student from India. Also
        known as nishant-uxs and nishant.agarwal__.
      </p>
      <h2>Experience</h2>
      <ul>
        <li>Web3 Blockchain Developer Intern — Digital South Trust (Mar 2026 – Jul 2026)</li>
        <li>
          Open source contributor with merged PRs in Hardhat, Hyperlane, FilOzone, Mastra,
          WalletConnect, and viem
        </li>
        <li>LNMHacks 8.0 Finalist · Top 20 at Kshitij 2026 (IIT Kharagpur)</li>
      </ul>
      <h2>Education</h2>
      <p>
        {person.degree} at {person.university}, {person.location}
      </p>
      <h2>Projects by Nishant Agarwal</h2>
      <ul>
        {featuredProjects.map((project) => (
          <li key={project.name}>
            <a href={project.url}>{project.name}</a> — {project.description}{" "}
            <a href={project.github}>GitHub</a>
          </li>
        ))}
      </ul>
      <h2>Contact Nishant Agarwal</h2>
      <p>
        Email <a href={`mailto:${person.email}`}>{person.email}</a>. Phone {person.phone}. GitHub{" "}
        <a href={person.github}>{person.github}</a>. LinkedIn{" "}
        <a href={person.linkedin}>{person.linkedin}</a>. Instagram{" "}
        <a href={INSTAGRAM_URL}>{INSTAGRAM_URL}</a>. Resume{" "}
        <a href={person.resumePath}>Nishant Agarwal Resume PDF</a>.
      </p>
      <nav>
        <a href="/about">About Nishant Agarwal</a>
        <a href="/projects">Projects by Nishant Agarwal</a>
        <a href="/">Interactive macOS portfolio</a>
      </nav>
    </section>
  );
}
