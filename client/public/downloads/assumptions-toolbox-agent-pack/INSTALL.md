# Installation Guide

## What's in this pack

```
assumptions-toolbox-agent-pack/
  INSTALL.md                          ← you are here
  agent-content/
    assumption-testing-theory.json    ← theory the agent reads
    methods-catalog.json              ← 45-method catalog
    strategy-rules.json               ← selection rules
    pack-manifest.json                ← canonical values + scale
    schemas/                          ← JSON schemas (reference only)
    README.md                         ← data contract notes
  skill/
    assumption-test-strategy/
      SKILL.md                        ← the installable skill prompt
```

---

## Installation steps

### 1. Copy the skill file

Copy `skill/assumption-test-strategy/SKILL.md` into your Claude/Cursor skills
folder. The standard location is:

```
~/.claude/skills/assumption-test-strategy/SKILL.md
```

### 2. Copy the agent-content folder

The SKILL.md references content files using relative paths like
`agent-content/methods-catalog.json`. For these paths to resolve, the
`agent-content/` folder must sit **at the same level** as the skill folder:

```
~/.claude/skills/
  assumption-test-strategy/
    SKILL.md
  agent-content/
    assumption-testing-theory.json
    methods-catalog.json
    strategy-rules.json
    pack-manifest.json
```

Copy the entire `agent-content/` folder (excluding `schemas/` - the agent
doesn't need those at runtime) to `~/.claude/skills/agent-content/`.

### 3. Verify

Open a new conversation and run:

```
/assumption-test-strategy
```

The agent should immediately ask for the required inputs (assumption statement,
assumption type, risk level, idea context, customer opportunity). If it instead
says files are missing, check that `agent-content/` is in the right location.

---

## Updating

When a new version of the pack is released, replace both:
- `~/.claude/skills/assumption-test-strategy/SKILL.md`
- `~/.claude/skills/agent-content/` (full folder replacement)

The `agent-content/README.md` tracks which version of the data is current.
