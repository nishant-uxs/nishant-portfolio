import { person } from "../../constants/person";
import {
  defaultOpenGraph,
  defaultTwitter,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPersonJsonLd,
} from "../../constants/seo";
import { SeoDocShell } from "../_components/SeoDocShell";

const contributions = [
  {
    repo: "ClickHouse/ClickHouse",
    pr: "#114003",
    url: "https://github.com/ClickHouse/ClickHouse/pull/114003",
    status: "Merged",
    blurb: "Keeper writeAt path — fixed corrupted snapshot data on startup.",
  },
  {
    repo: "open-telemetry/opentelemetry-collector-contrib",
    pr: "#52310",
    url: "https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/52310",
    status: "Open",
    blurb: "sigv4auth forwards configured AssumeRole session names.",
  },
  {
    repo: "NethermindEth/nethermind",
    pr: "#12739",
    url: "https://github.com/NethermindEth/nethermind/pull/12739",
    status: "Merged",
    blurb: "eth_syncing includes the beacon tip during consensus-layer catch-up.",
  },
  {
    repo: "NomicFoundation/hardhat",
    pr: "#8464",
    url: "https://github.com/NomicFoundation/hardhat/pull/8464",
    status: "Merged",
    blurb: "Configuration variables prefer process.env before plugin hooks.",
  },
  {
    repo: "wevm/viem",
    pr: "#4903",
    url: "https://github.com/wevm/viem/pull/4903",
    status: "Merged",
    blurb: "Restored type: module in emitted types for NodeNext ESM.",
  },
  {
    repo: "mastra-ai/mastra",
    pr: "#20487 · #20518",
    url: "https://github.com/mastra-ai/mastra/pull/20487",
    status: "Merged",
    blurb: "Declined tools never execute; terminal nested snapshots reused.",
  },
  {
    repo: "hyperlane-xyz/hyperlane-monorepo",
    pr: "#9181",
    url: "https://github.com/hyperlane-xyz/hyperlane-monorepo/pull/9181",
    status: "Merged",
    blurb: "Fail-safe HyperlaneMessage::from on malformed payloads.",
  },
  {
    repo: "BerriAI/litellm",
    pr: "#35349",
    url: "https://github.com/BerriAI/litellm/pull/35349",
    status: "Open",
    blurb: "Recover partial streaming usage on sync mid-stream client drops.",
  },
];

export const metadata = {
  title: "Nishant Agarwal Open Source — ClickHouse, OpenTelemetry, Hardhat",
  description:
    "Open-source contributions by Nishant Agarwal (nishant-uxs): ClickHouse, OpenTelemetry, Nethermind, Hardhat, viem, Mastra, Hyperlane, and LiteLLM.",
  keywords: [
    "Nishant Agarwal open source",
    "Nishant Agarwal ClickHouse",
    "Nishant Agarwal OpenTelemetry",
    "Nishant Agarwal Hardhat",
    "Nishant Agarwal Nethermind",
    "nishant-uxs pull requests",
  ],
  alternates: { canonical: "/open-source" },
  openGraph: {
    ...defaultOpenGraph,
    url: absoluteUrl("/open-source"),
    title: "Nishant Agarwal — Open Source Contributions",
    description:
      "Upstream PRs by Nishant Agarwal across ClickHouse, OpenTelemetry, Hardhat, and more.",
  },
  twitter: {
    ...defaultTwitter,
    title: "Nishant Agarwal — Open Source",
  },
};

const jsonLd = [
  buildPersonJsonLd(),
  buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Nishant Agarwal", path: "/nishant-agarwal" },
    { name: "Open Source", path: "/open-source" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open-source contributions by Nishant Agarwal",
    itemListElement: contributions.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: entry.url,
      name: `${entry.repo} ${entry.pr}`,
      description: entry.blurb,
    })),
  },
];

export default function OpenSourcePage() {
  return (
    <SeoDocShell title="Open Source — Nishant Agarwal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <p className="seo-doc-kicker">nishantx.in · GitHub nishant-uxs</p>
        <h1>Open source by Nishant Agarwal</h1>
        <p className="seo-doc-lead">
          Upstream pull requests from <strong>Nishant Agarwal</strong> across databases,
          observability, and developer tooling.
        </p>
        <p>
          This page lists public contributions so search engines and recruiters can verify work
          attributed to Nishant Agarwal / nishant-uxs. Full profile:{" "}
          <a href="/nishant-agarwal">Nishant Agarwal</a>.
        </p>

        <section>
          <h2>Pull requests</h2>
          <ul className="seo-doc-list">
            {contributions.map((entry) => (
              <li key={entry.url}>
                <a href={entry.url}>
                  {entry.repo} {entry.pr}
                </a>{" "}
                <span className="seo-doc-muted">({entry.status})</span> — {entry.blurb}
              </li>
            ))}
          </ul>
        </section>

        <div className="seo-doc-footer-links">
          <a href="/nishant-agarwal">Nishant Agarwal profile</a>
          <a href="/projects">Projects</a>
          <a href={person.github}>GitHub</a>
          <a href={person.resumePath}>Resume</a>
        </div>
      </article>
    </SeoDocShell>
  );
}
