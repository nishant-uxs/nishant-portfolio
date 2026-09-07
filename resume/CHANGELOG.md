# Resume CHANGELOG

## 2026-08-25 — Scaler SDE version

- Added `versions/scaler.tex`: backend/API/architecture-first bullets, compressed OSS, CGPA 8.86, no invented LeetCode ratings
- Official intern title retained next to Digital South Trust
- Master blockchain resume unchanged

---

Master version locked after this pass. Do not make stylistic changes unless new achievements are added.

---

## 2026-08-07 — Elite OSS portfolio rewrite

- **Open Source elevated above Projects** (strongest signal)
- Featured merged PRs: Hardhat #8464, Hyperlane #9181, FilOzone PDP #287 + filecoin-services #566, Mastra #20487/#20518, WalletConnect #7302, viem #4903
- hardhat-website #288 kept in **9 merged** achievements count (not expanded — docs-tier)
- Projects densified (Krydo 2 bullets; BlockForge/CivicSense 1 each) for page budget
- Achievements: OSS streak line + hackathons combined
- Skills: Rust, Hyperlane, Filecoin PDP, Mastra, WalletConnect
- Still **1 page**; all versions synced

---

## 2026-07-30 — Open Source update

- Added **NomicFoundation/hardhat #8464** (core) — prefer `process.env` for configuration variables
- Order: Hardhat core → viem → hardhat-website
- Still **1 page**; all versions synced; profile `resume.pdf` updated

---

## Best-version upgrades (same day)

- ~~Added nishantx.in to header contact line~~ *(removed — domain inactive)*
- Experience: dropped Git/code-review filler; 5 → 4 sharper bullets
- Section titles shortened (`Open Source`, `Research`) for density
- Removed AMD hackathon **Participant** badge (kept Finalist + Top 20 only)
- OSS bullets tightened; hardhat-website + viem both listed
- All versions synced (`google`, `backend`, `blockchain`, `ai`)
- Still **1 page**

---

## Prior final polish pass

---

## Research / Publications

- Updated status from **Under Review** → **Accepted**
- Added official conference name: **4th International Conference on Networks and Cryptology (NetCrypt 2026)**
- Added **Conference Presentation, Oct. 2026** (conference dates 8–10 Oct 2026)

---

## Experience

- Removed soft filler (“secure”, “handling on-chain operations”) without losing meaning
- Tightened News Portal bullet to lead with shipped outcome (validation, errors, Express integration)
- Replaced “across … analysis” with colon-list ownership phrasing for clearer L4 readability

---

## Projects — Krydo

- Replaced marketing phrase “ZK-powered” with “privacy-preserving … ZK proof types”
- Replaced vague “9-layer defense-in-depth” with concrete, repo-verified controls: Zod, Helmet, CORS, per-IP rate limiting
- Clarified hybrid architecture: Firestore as query layer; on-chain credential hashes as source of truth
- Shortened “51 covering crypto/sigma modules” → “51 crypto/sigma” (same verified fact)
- Link label: **Demo → Live**

Verified against repo: 6 proof types, 3 Sepolia contracts, 154 tests / 51 crypto, SIWE, W3C VC v2, Zod/Helmet/CORS/rate-limit

---

## Projects — CivicSense

- Softened “Architected” → “Built” (more accurate for ownership without overclaim)
- Removed “auto-” adjective noise on Gemini category/severity detection
- Clarified SHA-256 anchoring is **on-chain**
- Link label: **Demo → Live**

Verified against repo: 12 React pages, 10 API route files, 1 Solidity contract, 3-step lifecycle, Supabase + Sepolia

---

## Projects — BlockForge (LabEval)

- “role-gated workflows” → **OpenZeppelin RBAC** (ATS + recruiter clarity)
- Retained **~92%** IPFS on-chain storage-cost claim (present on original resume; CID-anchoring architecture verified in repo)
- Dropped redundant “shadcn/ui” / “wallet” wording to keep density high
- Link label: **Demo → Live**

Verified against repo: 3 deployed contracts named in README, Pinata IPFS, Gemini grading, MetaMask + ethers.js v6

---

## Links

- All project links use short labels: **GitHub | Live**
- Header LinkedIn / GitHub remain short-label hyperlinks

---

## Technical Skills

- Moved **Solidity** earlier in Languages (demonstrated heavily across projects)
- Reordered Blockchain keywords by importance (ZK / crypto primitives before Sepolia)
- Removed **MySQL** (not demonstrated in audited projects)
- Removed **Postman** (weak ATS keyword)
- Removed duplicate **Hardhat** from Developer Tools (kept under Blockchain)
- Databases reduced to project-proven: PostgreSQL (Supabase), Firestore

---

## ATS / Recruiter Pass

Company-specific wording fixes applied:

| Company | Issue fixed |
|---|---|
| Google | Replaced “9-layer defense-in-depth” marketing claim with concrete controls |
| OpenAI | Emphasized test coverage + cryptographic implementation detail |
| Datadog | Clarified hybrid storage / source-of-truth vs query layer |
| Stripe | Tightened ownership language on internship delivery |
| Coinbase | Kept SIWE, secp256k1, Pedersen, VC, Sepolia keywords; precise ZK wording |

Formatting checks: past tense consistent, no tables/graphics, Jake template unchanged, **1 page**, no overfull boxes.

---

## Files Updated

- `resume/master/resume.tex` (master)
- `resume/master/resume.pdf` (recompiled)
- `resume/versions/{google,backend,blockchain,ai}.tex` (synced to master)
- `resume/master/resume-data.yaml` (synced factual content)
- `resume/CHANGELOG.md` (this file)

---

## Remaining Improvements

Only items that require **new achievements** (not wording changes):

1. **Merged open-source PRs** — re-add an Open Source Contributions section with repository name, PR link, and concrete change
2. **Additional internship / full-time experience** — expand Experience beyond a single role
3. **Production / mainnet deployments** — Krydo and LabEval are currently Sepolia/testnet; mainnet or audited production systems would strengthen claims
4. **Third-party security audit or bug bounty** — especially valuable for Krydo’s cryptographic stack
5. **Quantified internship impact** — latency, error-rate, traffic, or feature-adoption metrics from Digital South Trust (only if employer-approved)
6. **Conference talk artifacts** — NetCrypt 2026 slides, DOI, or IEEE Xplore link once published
7. **Stronger achievement tiers** — replace “Participant” entries only when wins/placements exist
