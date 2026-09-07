# Nishant Agarwal — Jake's Resume (Overleaf-ready)

Official template basis: [Jake's Resume (Overleaf)](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) / [jakegut/resume](https://github.com/jakegut/resume)

## Structure

```
resume/
├── master/
│   ├── resume.tex          # Source of truth (LaTeX)
│   ├── resume.pdf          # Compiled one-page PDF
│   └── resume-data.yaml    # Structured content for edits
└── versions/
    ├── google.tex
    ├── backend.tex
    ├── blockchain.tex
    ├── ai.tex
    └── scaler.tex            # SDE intern (DSA/architecture framing)
```

Versions currently mirror `master/resume.tex` (tailor later per role).

## Overleaf

1. New project → Upload `master/resume.tex`
2. Compile with pdfLaTeX
3. Or upload the whole `resume/` folder

## Local compile

```bash
cd resume/master
pdflatex resume.tex
pdflatex resume.tex
```

## Honesty constraints applied

- No invented metrics, employers, or technologies
- Project bullets use only repo-verified facts (see `resume_metrics.md`)
- ~92% IPFS storage-cost claim retained from original resume + CID-anchoring architecture
- Open Source section omitted until merged PRs exist
- Master version locked 2026-07-27 — see `CHANGELOG.md`

## Verify before sending

- Confirm LinkedIn / GitHub URLs match your real profiles
- Add Open Source section when you have a merged PR
- Add NetCrypt IEEE Xplore / DOI link once published
