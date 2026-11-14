export const person = {
  name: "Nishant Agarwal",
  firstName: "Nishant",
  phone: "+91 7900654124",
  email: "agarwalnishant812@gmail.com",
  role: "Backend · Full-Stack · Open Source",
  tagline:
    "Backend & full-stack engineer. Recent Software Engineer Intern at Digital South Trust — shipping production APIs, privacy identity systems, and open-source fixes across ClickHouse, OpenTelemetry, and Hardhat.",
  location: "Greater Noida, India",
  university: "Bennett University",
  degree: "B.Tech Computer Science Engineering",
  cgpa: "8.86 / 10.0",
  educationPeriod: "Oct 2024 — Jul 2028",
  domain: "nishantx.in",
  resumePath: "/Nishant_Agarwal_Resume.pdf",
  /** GitHub profile photo (nishant-uxs) */
  avatarPath: "/images/avatar.png",
  links: {
    linkedin: "https://www.linkedin.com/in/nishant-agarwal-62a956322/",
    github: "https://github.com/nishant-uxs",
    email: "mailto:agarwalnishant812@gmail.com",
    phone: "tel:+917900654124",
  },
} as const;

export const navLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "oss", label: "Open Source", href: "#oss" },
  { id: "achievements", label: "Wins", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
  { id: "resume", label: "Resume", href: "/Nishant_Agarwal_Resume.pdf", external: true },
] as const;

export const aboutData = {
  title: "Who am I",
  body: "Product-focused engineer who ships fast. I build REST APIs, full-stack apps, and reliable backends — then harden them with tests, Docker, and CI. Open-source work spans ClickHouse, OpenTelemetry, Hardhat, viem, Mastra, and Hyperlane. Open to internships, freelance, and collabs.",
};

export type ProjectItem = {
  id: string;
  index: string;
  title: string;
  type: string;
  stack: string;
  year: string;
  description: string;
  tags: readonly string[];
  proof: readonly string[];
  github: string;
  live: string;
  accent: "violet" | "blue" | "fuchsia" | "cyan" | "amber";
};

export const projectsData: ProjectItem[] = [
  {
    id: "krydo",
    index: "01",
    title: "Krydo",
    type: "Privacy Identity · Stellar Buildathon",
    stack: "TypeScript · Soroban · Firestore · React Native",
    year: "Jan 2026 — Present",
    description:
      "Privacy credential protocol with 3 Soroban contracts, SIWS auth, ZK sigma-proofs, a 36-endpoint TypeScript backend, web/mobile apps, and 168+ Vitest tests. Honorable Mention at Stellar Buildathon Delhi.",
    tags: ["Soroban", "ZK", "SIWS", "CI"],
    proof: ["Honorable Mention", "36 endpoints", "168+ tests"],
    github: "https://github.com/nishant-uxs/krydo-next",
    live: "https://krydo.in",
    accent: "violet",
  },
  {
    id: "civicsense",
    index: "02",
    title: "CivicSense",
    type: "Multi-Portal Civic Platform",
    stack: "React · Vite · Tailwind · Supabase",
    year: "Dec 2025 — Feb 2026",
    description:
      "12-page citizen/admin/worker platform with hybrid PostgreSQL persistence and SHA-256 state transitions anchored on-chain.",
    tags: ["PostgreSQL", "RBAC", "Full-stack"],
    proof: ["12 pages", "hybrid persistence", "live app"],
    github: "https://github.com/nishant-uxs/CivicSense",
    live: "https://civic-sense-six.vercel.app",
    accent: "blue",
  },
  {
    id: "blockforge",
    index: "03",
    title: "BlockForge",
    type: "Research · NetCrypt 2026",
    stack: "React · TypeScript · Solidity · IPFS",
    year: "Sep 2025 — Jan 2026",
    description:
      "Role-based academic assessment portal with smart-contract RBAC and IPFS storage that cut on-chain gas overhead by ~92%. Presented and published at NetCrypt 2026.",
    tags: ["IPFS", "RBAC", "Research"],
    proof: ["~92% gas cut", "IEEE / NetCrypt 2026", "live app"],
    github: "https://github.com/nishant-uxs/labeval",
    live: "https://blockchain-labeval.onrender.com",
    accent: "fuchsia",
  },
];

export const ossData = [
  {
    repo: "open-telemetry/opentelemetry-collector-contrib",
    pr: "#52310",
    url: "https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/52310",
    blurb:
      "sigv4auth now forwards configured AssumeRole session names across collector trace export pipelines.",
  },
  {
    repo: "ClickHouse/ClickHouse",
    pr: "#114003",
    url: "https://github.com/ClickHouse/ClickHouse/pull/114003",
    blurb:
      "Keeper writeAt path — fixed corrupted snapshot data on startup; TTL mutation scheduling edge cases.",
  },
  {
    repo: "wevm/viem",
    pr: "#4903",
    url: "https://github.com/wevm/viem/pull/4903",
    blurb: "Restored type: module in emitted types package for TypeScript NodeNext ESM.",
  },
  {
    repo: "NomicFoundation/hardhat",
    pr: "#8464",
    url: "https://github.com/NomicFoundation/hardhat/pull/8464",
    blurb: "Config resolution prefers process.env / keystore sequencing before plugin hooks.",
  },
  {
    repo: "mastra-ai/mastra",
    pr: "#20487 · #20518",
    url: "https://github.com/mastra-ai/mastra/pull/20487",
    blurb: "Declined tools never execute; terminal nested snapshots are reused.",
  },
  {
    repo: "BerriAI/litellm",
    pr: "#35349",
    url: "https://github.com/BerriAI/litellm/pull/35349",
    blurb: "Recover partial streaming usage metrics when sync clients drop mid-stream.",
  },
  {
    repo: "hyperlane-xyz/hyperlane-monorepo",
    pr: "#9181",
    url: "https://github.com/hyperlane-xyz/hyperlane-monorepo/pull/9181",
    blurb: "Fail-safe HyperlaneMessage::from — no panic on malformed interchain payloads.",
  },
  {
    repo: "NethermindEth/nethermind",
    pr: "#12739",
    url: "https://github.com/NethermindEth/nethermind/pull/12739",
    blurb: "eth_syncing includes the beacon tip so CL catch-up is not reported as synced.",
  },
] as const;

export const experienceData = [
  {
    role: "Software Engineer Intern (Full-Stack / Backend)",
    org: "Digital South Trust",
    period: "Mar 2026 — Jul 2026 · Remote, India",
    points: [
      "Architected backend microservices and transactional workflows for Crypto Suraksha under multi-tenant production traffic.",
      "Shipped high-throughput Node.js/Express REST APIs with schema validation, JWT auth, and RBAC.",
      "Diagnosed production bottlenecks, optimized PostgreSQL queries/indexing, and containerized deployments with Docker.",
    ],
  },
] as const;

export const skillsMarquee = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "C++",
  "Node.js",
  "Express",
  "React",
  "Next.js",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "OpenTelemetry",
  "GraphQL",
  "Solidity",
  "Stellar Soroban",
  "Hardhat",
  "viem",
  "System Design",
  "DSA",
] as const;

export const achievementsData = [
  { value: "Winner", label: "GenZFEST Hacktoberfest Agra 2026" },
  { value: "4th", label: "SIH Internal · 600+ teams" },
  { value: "HM", label: "Stellar Buildathon Delhi" },
  { value: "IEEE", label: "NetCrypt 2026 · BlockForge presented" },
  { value: "Top 30", label: "Finalist — LNMHacks 8.0" },
  { value: "Top 20", label: "Tech Triad · IIT Kharagpur" },
  { value: "8.86", label: "CGPA · Bennett University" },
  { value: "168+", label: "Unit tests · Krydo + CI" },
] as const;

export const contactData = {
  title: "Let's Talk",
  body: "Open for backend, full-stack, and systems internships or collabs. Send a note — I reply fast.",
  email: person.email,
  /** formsubmit.co — first submit confirms email once */
  formEndpoint: `https://formsubmit.co/ajax/${person.email}`,
} as const;
