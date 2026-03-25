# Agent Content Pack

This folder defines a machine-readable contract for giving AI agents your
assumption-testing theory and method catalog in a consistent format.

## What this includes

- `pack-manifest.json`
  - entry points and version metadata
- `schemas/assumption-testing-theory.schema.json`
  - canonical structure for theory sections
- `schemas/methods-catalog.schema.json`
  - canonical structure for method metadata
- `schemas/strategy-rules.schema.json`
  - canonical structure for selection heuristics
- `schemas/test-strategy-request.schema.json`
  - normalized input for an agent test-strategy run
- `schemas/test-strategy-response.schema.json`
  - normalized output format for agent recommendations
- `strategy-rules.json`
  - starter rules aligned with current framework
- `assumption-testing-theory.json`
  - normalized theory sections for agent retrieval
- `methods-catalog.json`
  - normalized 45-method catalog (core metadata)

## Current source-of-truth locations

- Theory card copy (human-facing):
  - `client/src/components/mindmap-section.tsx`
- Method definitions:
  - `client/src/lib/methods-data.ts`

## Canonical skill file

The installable SKILL.md lives at:

```
skill/assumption-test-strategy/SKILL.md
```

Do **not** maintain a copy inside `agent-content/`. That copy has been removed
to prevent drift. All edits to the skill prompt belong in the `skill/` location.

## Recommended workflow

1. Keep UI copy in its existing files.
2. Mirror/normalize that content into JSON files that validate against these
   schemas.
3. Point your Skill or agent runtime at this folder as the canonical machine
   contract.

## Data status

- `assumption-testing-theory.json`: present
- `methods-catalog.json`: present
