import {
  PROJECT_1_URL,
  PROJECT_1_GITHUB,
  PROJECT_2_URL,
  PROJECT_2_GITHUB,
  PROJECT_3_URL,
  PROJECT_3_GITHUB,
  PROJECT_4_URL,
  PROJECT_4_GITHUB,
} from "./env";

export const projects = [
  {
    id: 1,
    title: "Krydo",
    description:
      "Privacy-preserving identity by Nishant Agarwal — ZK proofs, 154 tests, 3 Sepolia contracts, W3C verifiable credentials.",
    image: "/projects/krydo.webp",
    link: PROJECT_1_URL,
    github: PROJECT_1_GITHUB,
  },
  {
    id: 2,
    title: "BlockForge",
    description:
      "Decentralized lab assessment platform by Nishant Agarwal with IPFS CIDs on-chain (~92% storage cut) and a NetCrypt 2026 paper.",
    image: "/projects/blockforge.webp",
    link: PROJECT_2_URL,
    github: PROJECT_2_GITHUB,
  },
  {
    id: 3,
    title: "CivicSense",
    description:
      "On-chain civic reporting by Nishant Agarwal with hybrid Supabase/Sepolia storage and Gemini-assisted triage.",
    image: "/projects/civicsense.webp",
    link: PROJECT_3_URL,
    github: PROJECT_3_GITHUB,
  },
  {
    id: 4,
    title: "TrustMesh",
    description:
      "Stellar Soroban business trust network by Nishant Agarwal with on-chain reputation.",
    image: "/projects/trustmesh.webp",
    link: PROJECT_4_URL,
    github: PROJECT_4_GITHUB,
  },
];
