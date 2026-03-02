# Assumption Test Methods Catalog

## Overview
A frontend-only web application displaying 40 business idea discovery and validation research methods as a searchable, filterable card gallery. Based on the work of Dr. Else van der Berg. All card content has been updated to reflect modern AI tooling (LLMs, vibe coding, AI transcription, AI analytics, etc.).

## Architecture
- **Frontend-only**: All data is static and embedded in `client/src/lib/methods-data.ts`
- **No backend needed**: Users only read, search, and filter cards - no data persistence required
- **Server**: Express server serves the Vite-built frontend (existing setup)

## Key Files
- `client/src/lib/methods-data.ts` - All 40 test method data with types and helper functions. Content updated for AI era.
- `client/src/pages/home.tsx` - Main page with search, filters, and card grid
- `client/src/components/method-card.tsx` - Individual method card component with accordions
- `client/src/App.tsx` - Router setup

## Features
- 40 method cards with category, evidence strength, cost, description, and practical application
- AI-era content: LLM research with citation verification, vibe coding for landing pages/MVPs/prototypes, AI transcription for interviews, AI video tools for crowdfunding/explainers, AI analytics for web/product data, notes on AI limitations (hallucinations, training cutoffs, inbox fatigue from AI-spam)
- Expandable accordion sections for evidence details, full description, cost details, and practical application
- Full-text search across all card fields
- Multi-select filters: Category (10), Phase (4), Cost Level (5), Evidence Strength (1-5)
- Responsive grid layout (1/2/3 columns)
- Sticky header with search and filter controls (z-[9999])
- Accessible filter pills using shadcn Badge with aria-checked/aria-pressed semantics
- Slugified data-testid attributes for stable selectors

## Design
- Inspired by component.gallery with clean, minimal card grid
- Uses shadcn/ui Card, Accordion, Badge, Input, Button components
- Category and phase badges with distinct color coding
- Evidence strength visualized as a bar chart
- Filters toggle with animated expand/collapse

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui components
- wouter for routing
