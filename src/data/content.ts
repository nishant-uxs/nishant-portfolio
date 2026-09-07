export const person = {
  name: "Nishant Agarwal",
  firstName: "Nishant",
  phone: "+91 7900654124",
  email: "agarwalnishant812@gmail.com",
  role: "Backend · Full-Stack · Web3",
  tagline:
    "Backend & full-stack engineer who ships production APIs, tested systems, and open-source fixes — with Web3 depth where it matters.",
  location: "India",
  university: "Bennett University",
  degree: "B.Tech Computer Science Engineering",
  cgpa: "8.86 / 10",
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
  body: "Product-focused engineer who ships fast. I build REST APIs, full-stack apps, and reliable backends — then harden them with tests and CI. Web3 shows up when integrity and verifiability matter (ZK, IPFS, on-chain audits). Open to internships, freelance, and collabs.",
};

export const projectsData = [
  {
    id: "krydo",
    index: "01",
    title: "Krydo",
    type: "Personal Project",
    stack: "TypeScript · Node · Express · Firestore",
    year: "Feb 2026 — Apr 2026",
    description:
      "Hybrid backend for privacy-preserving credentials: JWT auth, Zod on every route, rate limiting, health probes, and 154 Vitest tests with GitHub Actions CI.",
    tags: ["REST APIs", "CI", "Vitest", "Architecture"],
    proof: ["154 tests", "8 API modules", "CI on Node 20"],
    github: "https://github.com/nishant-uxs/krydo",
    live: "https://krydo.onrender.com",
    accent: "violet" as const,
  },
  {
    id: "civicsense",
    index: "02",
    title: "CivicSense",
    type: "Personal Project",
    stack: "TypeScript · PostgreSQL · React · REST",
    year: "Dec 2025 — Feb 2026",
    description:
      "Civic complaint platform with JWT/RBAC, hybrid storage (Postgres + integrity layer), Gemini triage, and citizen/admin/org portals.",
    tags: ["PostgreSQL", "Auth", "Full-stack", "AI"],
    proof: ["12 pages", "RBAC", "lifecycle APIs"],
    github: "https://github.com/nishant-uxs/CivicSense",
    live: "https://civic-sense-six.vercel.app",
    accent: "blue" as const,
  },
  {
    id: "blockforge",
    index: "03",
    title: "BlockForge",
    type: "Personal Project · Research",
    stack: "Node · React · IPFS · RBAC",
    year: "Sep 2025 — Jan 2026",
    description:
      "Decentralized academic assessment: REST + React, role-gated flows, content-addressed file storage (~92% cost cut). Paper accepted at NetCrypt 2026.",
    tags: ["IPFS", "RBAC", "Research", "Full-stack"],
    proof: ["~92% storage cut", "NetCrypt 2026", "live app"],
    github: "https://github.com/nishant-uxs/labeval",
    live: "https://blockchain-labeval.onrender.com",
    accent: "fuchsia" as const,
  },
  {
    id: "trustmesh",
    index: "04",
    title: "TrustMesh",
    type: "Personal Project",
    stack: "Full-stack · Web3 integrity",
    year: "2026",
    description:
      "Trust and verification workflows across apps — designed for auditable state and clear API boundaries.",
    tags: ["APIs", "Integrity", "Full-stack"],
    proof: ["github", "shipped"],
    github: "https://github.com/nishant-uxs/TrustMesh",
    live: "",
    accent: "cyan" as const,
  },
] as const;

export const ossData = [
  {
    repo: "ClickHouse/ClickHouse",
    pr: "#114003",
    url: "https://github.com/ClickHouse/ClickHouse/pull/114003",
    blurb: "Keeper writeAt path — fixed CORRUPTED_DATA crash on startup.",
  },
  {
    repo: "NomicFoundation/hardhat",
    pr: "#8464",
    url: "https://github.com/NomicFoundation/hardhat/pull/8464",
    blurb: "Config resolution prefers process.env over plugin hooks + tests.",
  },
  {
    repo: "wevm/viem",
    pr: "#4903",
    url: "https://github.com/wevm/viem/pull/4903",
    blurb: "_types package.json module marker for TypeScript NodeNext.",
  },
  {
    repo: "mastra-ai/mastra",
    pr: "#20487 · #20518",
    url: "https://github.com/mastra-ai/mastra/pull/20487",
    blurb: "Core workflow/tool fixes — declined tools never execute.",
  },
  {
    repo: "hyperlane-xyz/hyperlane-monorepo",
    pr: "#9181",
    url: "https://github.com/hyperlane-xyz/hyperlane-monorepo/pull/9181",
    blurb: "Fail-safe indexer decode — no panic on malformed messages.",
  },
  {
    repo: "WalletConnect/walletconnect-monorepo",
    pr: "#7302",
    url: "https://github.com/WalletConnect/walletconnect-monorepo/pull/7302",
    blurb: "EventEmitter TypeScript annotations.",
  },
  {
    repo: "FilOzone/pdp + filecoin-services",
    pr: "#287 · #566",
    url: "https://github.com/FilOzone/pdp/pull/287",
    blurb: "Piece-removal event + cross-repo ABI wiring.",
  },
] as const;

export const experienceData = [
  {
    role: "Backend / Web3 Developer Intern",
    org: "Digital South Trust",
    period: "Mar 2026 — Jul 2026",
    points: [
      "Shipped production REST APIs for News Portal — validation, structured errors, Express routing.",
      "Built backend modules for Crypto Suraksha; owned features through testing and handoff.",
      "Hardened error paths so client failures returned consistent status codes.",
    ],
  },
] as const;

export const skillsMarquee = [
  "TypeScript",
  "Node.js",
  "Express",
  "REST APIs",
  "PostgreSQL",
  "React",
  "Next.js",
  "Zod",
  "JWT",
  "Vitest",
  "GitHub Actions",
  "Solidity",
  "Hardhat",
  "viem",
  "IPFS",
  "ClickHouse",
  "Python",
  "C++",
  "Firestore",
  "Supabase",
] as const;

export const achievementsData = [
  { value: "10", label: "Merged OSS PRs · ClickHouse, Hardhat, viem+" },
  { value: "8.86", label: "CGPA · Bennett University" },
  { value: "Top 30", label: "Finalist — LNMHacks 8.0" },
  { value: "Top 20", label: "Tech Triad · IIT Kharagpur" },
  { value: "5 mo", label: "Backend Intern · Digital South Trust" },
  { value: "154", label: "Unit tests · Krydo + CI" },
  { value: "Accepted", label: "BlockForge · NetCrypt 2026" },
  { value: "92%", label: "Storage cut via content-addressed design" },
] as const;

export const contactData = {
  title: "Let's Talk",
  body: "Open for backend, full-stack, and Web3 internships or collabs. Send a note — I reply fast.",
  email: person.email,
  /** formsubmit.co — first submit confirms email once */
  formEndpoint: `https://formsubmit.co/ajax/${person.email}`,
} as const;
