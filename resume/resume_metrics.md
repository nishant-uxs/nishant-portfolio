# resume_metrics.md — Verified Engineering Metrics

All metrics sourced from README.md, source code, smart contracts, test files.
Nothing invented. Every claim cites origin.

---

## Krydo — Privacy-Preserving Financial Trust System

**Source:** [github.com/nishant-uxs/krydo](https://github.com/nishant-uxs/krydo)
**Live:** [krydo.onrender.com](https://krydo.onrender.com/)

### Smart Contracts (Solidity 0.8.x, Sepolia)
- ✔ 3 deployed contracts: `KrydoAuthority`, `KrydoCredentials`, `KrydoAudit`
  - Source: README § "Live deployment (Sepolia)" — verified on-chain addresses
- ✔ Verified Sepolia deployment addresses (linked to Etherscan in README)

### Zero-Knowledge Proof System
- ✔ 6 ZK proof types: `range_above`, `range_below`, `equality`, `membership`, `non_zero`, `selective_disclosure`
  - Source: `server/zk-engine.ts` lines 31–36 (ZkProofRequest.proofType union)
- ✔ Sigma protocols over Pedersen commitments on secp256k1 (NOT SNARKs)
  - Source: README § "Zero-knowledge proof system", `server/crypto/sigma.test.ts`
- ✔ Fiat–Shamir transform for non-interactivity
  - Source: README, sigma.test.ts context-binding tests
- ✔ Bit-decomposition range proofs (32-bit, covers 0..4,294,967,295)
  - Source: `server/zk-engine.ts` line 24 `RANGE_BITS = 32`
- ✔ `@noble/curves` (secp256k1) + `@noble/hashes` (SHA-256) for cryptographic primitives
  - Source: README § "Tech stack"

### Testing
- ✔ 154 unit tests (Vitest), 51 of which cover crypto/sigma modules
  - Source: README badge `tests-154 passing`, README § "Zero-knowledge proof system"
- ✔ GitHub Actions CI (Node 20, typecheck + test)
  - Source: README badge, `.github/workflows/ci.yml` in tree

### Auth & Security
- ✔ EIP-4361 SIWE + JWT authentication
  - Source: README § "Tech stack", `server/auth/` directory
- ✔ Multi-wallet: wagmi v2 + RainbowKit v2 (MetaMask, WalletConnect, Coinbase, Rabby, Brave)
  - Source: README § "Tech stack"
- ✔ 9-layer defense-in-depth (transport → per-IP → session → authz → input → business → crypto → chain → data)
  - Source: README § "Security"
- ✔ Zod validation on every route, rate limiting, Helmet, CORS
  - Source: README § "Security"

### Architecture
- ✔ W3C Verifiable Credentials v2 export (`application/vc+ld+json`)
  - Source: README § "Export as W3C Verifiable Credential"
- ✔ Hybrid on-chain/off-chain: blockchain = source of truth; Firestore = performance layer
  - Source: README § "What lives where"
- ✔ Per-claim-type structured Zod schemas
  - Source: README § "Shipped" roadmap checklist
- ✔ ZK proof TTL + revocation-aware verification
  - Source: README § "Shipped" roadmap checklist
- ✔ Shareable verification URLs (`/api/zk/share/:id`)
  - Source: README § "Shipped" roadmap checklist
- ✔ Health + readiness probes (`/healthz`, `/readyz`)
  - Source: README § "Shipped" roadmap checklist
- ✔ Render Blueprint deployment (`render.yaml`)
  - Source: README, `render.yaml` in tree
- ✔ 18-section DOCUMENTATION.md with 20+ Mermaid diagrams
  - Source: README § "Documentation"

### Codebase Counts (GitHub tree audit)
| Category | Count |
|---|---|
| Solidity contracts (`.sol`) | 3 |
| API route files | 8 |
| React pages | 10 |
| Custom React components | 6 (+ 37 shadcn/ui primitives) |
| Test files | 8 (`jwt`, `ec`, `pedersen`, `sigma`, `pagination`, `zk-engine`, `claim-schemas`, `vc`) |
| Crypto modules | 3 (`ec.ts`, `pedersen.ts`, `sigma.ts`) |
| Auth modules | 3 (`jwt.ts`, `siwe.ts`, `nonce-store.ts`) |
| Middleware | 2 (`pagination.ts`, `security.ts`) |

### Tech Stack
- TypeScript 5.x, Node 20, Express, Vite, React 18, TanStack Query, shadcn/ui, Tailwind, ethers v6, Firestore

---

## CivicSense — Blockchain-Verified Civic Issue Reporting Platform

**Source:** [github.com/nishant-uxs/CivicSense](https://github.com/nishant-uxs/CivicSense)
**Live:** [civic-sense-six.vercel.app](https://civic-sense-six.vercel.app/)

### Smart Contracts
- ✔ 1 Solidity contract: `CivicSense.sol` (Solidity 0.8.20, OpenZeppelin Ownable)
  - Source: `smart-contract/contracts/CivicSense.sol`
- ✔ 3-step on-chain complaint lifecycle: `reportCase()` → `adminResolve()` → `userConfirm()`
  - Source: contract source code, README § "Blockchain Architecture"
- ✔ 3 events: `CaseReported`, `CaseResolved`, `CaseConfirmed`
  - Source: contract source code
- ✔ SHA-256 off-chain data hashing stored on-chain
  - Source: contract `bytes32 dataHash` field

### Backend
- ✔ 10 API route files: admin, ai, analytics, auth, comments, complaints, leaderboard, org, users, verification
  - Source: file tree audit
- ✔ 10 controllers: admin, analytics, assignment, auth, complaint, orgPortal, orgUser, organization, user, verification
  - Source: file tree audit
- ✔ 2 middleware: JWT auth (`protect`), file upload (Multer, max 5 images, 5MB each)
  - Source: `server/middleware/`, README § "Security"
- ✔ Rate limiting on all API endpoints
  - Source: README § "Security"

### Frontend
- ✔ 12 React pages: AdminPanel, Analytics, ComplaintDetail, Dashboard, Landing, Leaderboard, Login, MapView, OrgPortal, Profile, Register, ReportIssue
  - Source: file tree audit
- ✔ 7 components: AIChatbot, AdminRoute, BlockchainTxModal, ComplaintCard, Navbar, OrgRoute, PrivateRoute
  - Source: file tree audit
- ✔ Leaflet Maps integration for geolocation
  - Source: README § "Tech Stack"

### AI Integration
- ✔ Google Gemini 1.5 Flash: auto-category detection with confidence %, severity scoring, image analysis, duplicate detection
  - Source: README § "Intelligence"

### Architecture
- ✔ Hybrid storage: Supabase (PostgreSQL) off-chain + Sepolia on-chain
  - Source: README § "Hybrid Storage Model"
- ✔ 3 user roles: User (citizen), Admin, Organization
  - Source: route structure (AdminRoute, OrgRoute, PrivateRoute)
- ✔ Impact score system: `votes × days_pending`
  - Source: README § "Community"
- ✔ Before/After image comparison slider
  - Source: README § "Screenshots"
- ✔ EXIF GPS verification on resolution images
  - Source: README § "Security"
- ✔ Nodemailer SMTP + Twilio SMS/WhatsApp notifications
  - Source: README § "Notifications"

### Tech Stack
- React 18, Tailwind, Node.js, Express, Supabase (PostgreSQL), Solidity 0.8.20, Ethers.js v6, Hardhat, Sepolia, Google Gemini, Leaflet, Recharts

---

## BlockForge / LabEval — Blockchain-Based Lab Assessment Platform

**Source:** [github.com/nishant-uxs/labeval](https://github.com/nishant-uxs/labeval)
**Live:** [blockchain-labeval.onrender.com](https://blockchain-labeval.onrender.com/)

### Smart Contracts
- ✔ 3 deployed Solidity contracts: `AccessControl`, `BatchManagement`, `AssignmentSubmission`
  - Source: README § "Smart Contracts (Already Deployed)" — with Sepolia addresses
- ✔ 4 active `.sol` files in repo (adds `TokenReward.sol`); 2 `.bak` backups (`EduChainDeployer`, `NFTReward`)
  - Source: GitHub tree audit — resume claims only the 3 README-documented deployments
- ✔ OpenZeppelin libraries used
  - Source: README § "Blockchain"
- ✔ Role-based access control: Admin (AUTHORITY_ROLE), Teacher, Student
  - Source: README § "How It Works"

### Backend
- ✔ 3 backend service modules: `blockchain-service.ts`, `ipfs-service.ts`, `ai-grading-service.ts`
  - Source: README § "Project Structure" + tree audit
- ✔ 3 API route files: `routes.ts`, `assignment-submission.ts`, `file-upload.ts`
  - Source: tree audit
- ✔ Caching layer (`server/cache.ts`) and storage abstraction (`server/storage.ts`)
  - Source: tree audit
- ✔ IPFS integration via Pinata SDK for assignment + submission file storage
  - Source: README, `server/ipfs-service.ts`
- ✔ Google Gemini AI for grading suggestions (multi-format: PDF, DOCX, TXT)
  - Source: README § "AI-Powered Intelligence"

### Frontend
- ✔ React 19 + TypeScript + Vite + shadcn/ui + Tailwind
  - Source: README § "Technology Stack"
- ✔ MetaMask SDK for wallet integration
  - Source: README § "Frontend"
- ✔ ethers.js v6 for blockchain interaction
  - Source: README § "Frontend"

### Codebase Counts (GitHub tree audit)
| Category | Count |
|---|---|
| Active Solidity contracts (`.sol`) | 4 |
| Deployed (README-documented) | 3 |
| API route files | 3 |
| Backend server files | 14 |
| React pages | 4 |
| Feature components | 30 |
| IPFS-related files | 5 |
| Deployment/utility scripts | 19 |
| Custom hooks | 5 |

### Architecture
- ✔ No student registration required — teachers add by wallet address
  - Source: README § "User-Friendly"
- ✔ Assignment lifecycle: create → distribute → submit → AI-grade → teacher-grade → on-chain
  - Source: README § "How It Works"
- ✔ Immutable grade records on blockchain
  - Source: README § "Secure & Transparent"

### Tech Stack
- React 19, TypeScript, Vite, Tailwind, shadcn/ui, Express, ethers.js v6, Solidity, Hardhat, Pinata/IPFS, Google Gemini, Sepolia
