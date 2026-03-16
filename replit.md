# Assumption Tests Toolbox — Handover Document

## Overview

A frontend-only web application for discovering and selecting assumption test methods. Built for both humans (page) and AI agents (downloadable skill + content pack). Based on the work of Dr. Else van der Berg.

- **Live URL:** deployed via Vercel (connected to GitHub repo `Elsevanderberg1/assumptiontests`)
- **Local dev:** `npm run dev` inside `Assumption-Explorer/`, open `http://localhost:3000`

---

## Architecture

- **Frontend-only** — all data is static and embedded in `client/src/lib/methods-data.ts`
- **No backend needed** — Express server (`server/`) is an unused scaffold; it only serves the Vite-built frontend
- **Feedback collection** — hosted form endpoint via `VITE_FEEDBACK_ENDPOINT` env var (set in Vercel dashboard). No backend database required.
- **Analytics** — PostHog (not yet wired; see `POSTHOG_SETUP.md` for step-by-step)

---

## Key Files

| File | Purpose |
|---|---|
| `client/src/pages/home.tsx` | Main page: hero, theory section, method database, agent pack, footer |
| `client/src/components/mindmap-section.tsx` | Interactive SVG theory map + all theory card content (`THEORY_CONTENT`) |
| `client/src/components/method-card.tsx` | Individual test method card with accordions |
| `client/src/components/feedback-widget.tsx` | Floating "Give feedback" button + modal (stars + text) |
| `client/src/lib/methods-data.ts` | All 45 test methods, types, and `parseEvidenceStrength` helper |
| `client/src/index.css` | Global styles and Tailwind config |
| `client/index.html` | HTML entry point; references SVG favicon |
| `client/public/favicon.svg` | SVG favicon (pink gradient + serif A) |
| `POSTHOG_SETUP.md` | Step-by-step PostHog analytics setup guide |
| `CLAUDE.md` | Project-level guardrails for AI agents (snapshot + rollback safety) |
| `DATA_GLOSSARY.md` | Glossary of data fields used in methods-data.ts |
| `client/public/downloads/` | Downloadable agent content pack and skill files |

---

## Theory Mindmap (`mindmap-section.tsx`)

### Structure
Three-tier infographic (not a traditional force-directed graph):

```
Assumption Tests (center)
  ├── Choosing the right test method (middle, red)
  │     ├── Quant. vs qual; Hard vs soft
  │     ├── 5 overarching categories
  │     └── By goal/product phase
  ├── Selecting the right test participants (middle, red)
  │     └── Ideal Customer Profile (ICP)
  └── Learning faster at lower cost (middle, red)
        ├── Testing assumptions, not ideas
        ├── Isolating your point of (MVP) failure with AMPIE
        └── Reducing risk of false positives/negatives
```

### Key implementation notes
- **Desktop:** SVG map on the left, detail panel on the right (`lg:grid-cols-[minmax(0,1fr)_380px]`)
- **Mobile:** SVG is hidden; replaced with a tappable card list grouped by middle node. Tapping opens a bottom drawer (`Drawer` from vaul).
- **All theory card copy** lives inside `THEORY_CONTENT` in `mindmap-section.tsx`. Edit text there directly.
- **The qual-methods image** (`attached_assets/qual-methods-strengths-weaknesses.png`) is embedded in the "5 overarching categories" card via `ZoomableImage` — clicking it opens a fullscreen lightbox overlay.
- **Node positions** are manual SVG coordinates. If you change node layout, also update `EDGES` paths and the SVG `viewBox`.

---

## Hero Section (`home.tsx`)

```
H1: Assumption Tests Toolbox  (Playfair Display, clamp serif)
H2: Most teams overuse a few familiar test methods…
    The result is weak evidence… [3 lines, same size]
3 CTA buttons:
  - Explore theory          → #theory
  - Browse 45 test methods  → #method-database
  - Download agent skill    → #agent-pack
```

CTA buttons have a main label and a sub-label below it. Background is a fixed `radial-gradient` mesh (pink/purple).

---

## Feedback Widget (`feedback-widget.tsx`)

- Floating button bottom-right, **only visible after user has scrolled to the `#theory` section**
- Opens a modal: 1–5 star rating + free text comment
- Submits via `fetch` POST to `VITE_FEEDBACK_ENDPOINT` (set this in Vercel env vars)
- If `VITE_FEEDBACK_ENDPOINT` is not set, submission shows a config error (does not crash)
- Text uses "tell me" (not "tell us")

---

## Method Database (`home.tsx` + `methods-data.ts`)

- 45 methods with full-text search and multi-select filters (Category, Phase, Cost, Evidence Strength)
- Sticky filter bar at `z-40`
- "Clear" button resets all filters
- Evidence strength `"n/a"` is handled by `parseEvidenceStrength()` in `methods-data.ts` — no bars shown, always passes evidence filter

### 5 Categories
1. Desktop Research
2. Self-Reportage (Qual)
3. Watch User in Environment (Qual)
4. Watch User with Artefact (Qual)
5. Real-World Behavior

Dual-category methods: Storyboard, Co-creation, 1:1 Landing Page Test.

---

## Agent Content Pack

Located at `client/public/downloads/assumptions-toolbox-agent-pack/`.  
Download link in the `#agent-pack` section of the page.  
Source of truth for theory card copy: `client/src/components/mindmap-section.tsx` (not a separate content file).

---

## Design System

- **Font:** Playfair Display (headings), system sans (body)
- **Background:** fixed multi-layer `radial-gradient` mesh, base colour `#C39BD2` (also set on `html` to prevent overscroll white flash)
- **Glass containers:** `bg-white/20 backdrop-blur-sm rounded-2xl border border-white/40`
- **Mindmap colours:** coral/red for center + middle nodes; blue (`#3c63b5`) for outer clickable nodes
- **Favicon:** `client/public/favicon.svg` — pink→purple gradient square with serif A

---

## Running Locally

```bash
cd "/Users/Else/Documents/assumptionstests site/Assumption-Explorer"
npm install       # only needed once or after dependency changes
npm run dev       # starts on http://localhost:3000
```

Stop with `Ctrl+C`. Port 3000 is hardcoded (port 5000 is blocked by macOS AirPlay Receiver).

---

## Deploying

- Push to `main` on GitHub → Vercel auto-deploys
- Remote: `https://github.com/Elsevanderberg1/assumptiontests.git`
- Environment variables to set in Vercel: `VITE_FEEDBACK_ENDPOINT` (hosted form URL)

---

## Pending / Next Steps

- **PostHog analytics** — not yet wired. Full setup guide in `POSTHOG_SETUP.md`. Key events to track: `theory_card_opened`, filter/search interactions, agent skill download click.
- **Feedback endpoint** — set `VITE_FEEDBACK_ENDPOINT` in Vercel to activate the feedback form.
- **`VITE_FEEDBACK_ENDPOINT` already referenced** in `feedback-widget.tsx` — just needs the env var.

---

## Safety Rules for AI Agents

See `CLAUDE.md` (project-level) and `~/.claude/CLAUDE.md` (global) for mandatory snapshot and rollback-confirmation policies.  
**Never revert/restore/reset files without explicit confirmation from Else first.**
