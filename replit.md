# Assumption Test Toolbox

## Overview
A frontend-only web application displaying 45 business idea discovery and validation research methods as a searchable, filterable card gallery. Includes an interactive theory section. Based on the work of Dr. Else van der Berg.

## Architecture
- **Frontend-only**: All data is static and embedded in `client/src/lib/methods-data.ts`
- **No backend needed**: Users only read, search, and filter cards - no data persistence required
- **Server**: Express server serves the Vite-built frontend (existing setup)

## Key Files
- `client/src/lib/methods-data.ts` - All 45 test method data with types and helper functions. Methods support multiple categories via `categories: Category[]` array.
- `client/src/pages/home.tsx` - Main page with search, filters, theory section, and card grid
- `client/src/components/method-card.tsx` - Individual method card component with accordions. Handles "n/a" evidence strength (Prototype card).
- `client/src/components/theory-section.tsx` - Collapsible theory section with 7 accordion items covering categories, evidence types, test layering, ICP, and resources
- `client/src/App.tsx` - Router setup

## Features
- 45 method cards with category, evidence strength, cost, description, and practical application
- Theory section with 7 expandable accordion topics (headers visible by default, content collapsed)
- Expandable accordion sections on each card for evidence details, full description, cost details, and practical application
- Full-text search across all card fields
- Multi-select filters: Category (5), Phase (4), Cost Level (5), Evidence Strength (1-5)
- Responsive grid layout (1/2/3 columns)
- Sticky header with search and filter controls (z-[9999])
- "n/a" evidence strength support (Prototype card) — no bars shown, always visible regardless of evidence filters
- Methods can belong to multiple categories (shown as multiple badges on card)

## Categories (5)
1. Desktop Research - reading online studies, user reviews, forums, search trends, competitor research
2. Self-Reportage - customer interviews, surveys, focus groups, expert interviews, communities
3. Watch User in Environment - ethnography
4. Watch User with Artefact - prototype tests, moderated/unmoderated user tests, co-creation (dual), storyboard (dual)
5. Real-World Behaviour - landing pages, A/B testing, MVPs, cold outreach, crowdfunding, data analytics, etc.

Dual-category methods: Storyboard and Co-creation belong to both Self-Reportage and Watch User with Artefact. 1:1 Landing Page Test belongs to Watch User with Artefact and Self-Reportage.

## Design
- Inspired by component.gallery with clean, minimal card grid
- Uses shadcn/ui Card, Accordion, Badge, Input, Button components
- Category and phase badges with distinct color coding
- Evidence strength visualized as a bar chart (hidden for "n/a")
- Filters toggle with animated expand/collapse

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui components
- wouter for routing
