# Assumption Test Toolbox

## Overview
A frontend-only web application displaying 45 business idea discovery and validation research methods as a searchable, filterable card gallery. Includes an interactive theory mindmap (desktop) and accordion fallback (mobile). Based on the work of Dr. Else van der Berg.

## Architecture
- **Frontend-only**: All data is static and embedded in `client/src/lib/methods-data.ts`
- **No backend needed**: Users only read, search, and filter cards - no data persistence required
- **Server**: Express server serves the Vite-built frontend (existing setup)

## Key Files
- `client/src/lib/methods-data.ts` - All 45 test method data with types and helper functions. Methods support multiple categories via `categories: Category[]` array.
- `client/src/pages/home.tsx` - Main page with search, filters, theory section, and card grid
- `client/src/components/method-card.tsx` - Individual method card component with accordions. Handles "n/a" evidence strength (Prototype card).
- `client/src/components/theory-section.tsx` - Responsive theory section: mindmap on desktop (md+), accordion on mobile
- `client/src/components/theory-mindmap/index.tsx` - React Flow mindmap with animated sequential node reveal and Sheet detail panels
- `client/src/components/theory-mindmap/mindmap-data.tsx` - Node/edge definitions, detail content JSX, and resource links
- `client/src/components/theory-mindmap/mindmap-node.tsx` - Custom React Flow node component with sequence badges and color coding
- `client/src/App.tsx` - Router setup

## Features
- 45 method cards with category, evidence strength, cost, description, and practical application
- Interactive theory mindmap (desktop): 7 nodes animate in sequentially, clicking opens a side panel (Sheet) with detailed content
- Theory accordion (mobile): same 7 topics as collapsible accordion items
- Expandable accordion sections on each card for evidence details, full description, cost details, and practical application
- Full-text search across all card fields
- Multi-select filters: Category (5), Phase (4), Cost Level (5), Evidence Strength (1-5)
- Responsive grid layout (1/2/3 columns)
- Sticky header with search and filter controls (z-[9999])
- "n/a" evidence strength support (Prototype card) — no bars shown, always visible regardless of evidence filters
- Methods can belong to multiple categories (shown as multiple badges on card)

## Mindmap Node Structure
- Node 0 (yellow): "Test assumptions, not ideas!" — root
- Node 1 (green): "Choosing the right test method(s)" — child of 0
- Node 2 (blue): "Categories" — child of 1
- Node 3 (green): "Soft vs. hard evidence" — child of 2
- Node 4 (green): "Running multiple tests per assumption" — child of 1
- Node 5 (blue): "Selecting test participants" — child of 4
- Node 6 (blue): "ICP fit" — child of 5

## Categories (5)
1. Desktop Research
2. Self-Reportage
3. Watch User in Environment
4. Watch User with Artefact
5. Real-World Behaviour

Dual-category methods: Storyboard and Co-creation belong to both Self-Reportage and Watch User with Artefact. 1:1 Landing Page Test belongs to Watch User with Artefact and Self-Reportage.

## Design
- Inspired by component.gallery with clean, minimal card grid
- Uses shadcn/ui Card, Accordion, Badge, Input, Button, Sheet components
- Category and phase badges with distinct color coding
- Evidence strength visualized as a bar chart (hidden for "n/a")
- Filters toggle with animated expand/collapse
- Mindmap node colors: yellow (root), green (method concepts), blue (category/participant concepts)

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui components
- @xyflow/react (React Flow) for the theory mindmap
- wouter for routing
