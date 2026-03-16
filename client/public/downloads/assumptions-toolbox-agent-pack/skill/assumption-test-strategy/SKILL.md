---
name: assumption-test-strategy
description: "Recommend a concise, layered assumption-test strategy using the Assumptions Toolbox pack. Enforces quick qualitative-first sequencing, then quantitative confirmation where appropriate."
argument-hint: "[assumption, risk context, idea, customer opportunity]"
allowed-tools: Read, Grep, Glob
---

# Assumption Test Strategy Skill

Use this skill to recommend **which test methods to run next** for a specific
assumption.

This skill is optimized for concise tactical output:

- Recommend **3 methods by default**
- Explain **why** each method is included
- Explain **pros/cons** of each selected method
- Explain **layering logic** (how method B/C covers method A weaknesses)
- Do **not** output full experiment templates

---

## Canonical Pack Inputs

Use these files as source-of-truth:

- `agent-content/assumption-testing-theory.json`
- `agent-content/methods-catalog.json`
- `agent-content/strategy-rules.json`
- `agent-content/pack-manifest.json`

If any are missing, say so explicitly and continue with best effort.

---

## Required Inputs (ask if missing)

Before recommending methods, ensure these are known:

1. **Assumption statement** (what exactly is being tested)
2. **Risk level + evidence context**
   - how risky is this assumption for the idea?
   - what evidence already suggests it is true/false?
3. **Idea context**
   - what is the product/solution idea?
4. **Customer opportunity context**
   - what customer problem/opportunity is being addressed?

If any are missing, ask concise follow-up questions.  
Do not proceed directly to final recommendations without these minimum inputs.

---

## Decision Policy

### 1) Always sequence qualitative before quantitative

Default policy is strict:

- Start with at least one **quick qualitative** method first
- Then use quantitative / real-world behavior confirmation as needed

Rationale: even a 5-participant qualitative pass often removes obvious UX/message
issues and substantially improves downstream quantitative test quality.

### 2) Risk-sensitive escalation

Adjust intensity by risk and existing evidence:

- **High risk + weak evidence**:
  - layer across categories
  - include stronger confirmation methods
- **Lower risk + stronger existing evidence**:
  - can recommend a more expensive quantitative method earlier
  - still include a fast qualitative check where feasible
- **Clear-cut / low-uncertainty decisions**:
  - avoid unnecessary full-blown discovery
  - keep strategy lean

### 3) Layering rule

When recommending methods, ensure the set covers likely weaknesses:

- Self-report bias -> add behavioral/real-world method
- Artificial test environment -> add real-world validation
- Quant-only ambiguity on "why" -> add qualitative follow-up

---

## Output Format (concise tactical)

Return:

1. **Strategy summary** (2-4 lines)
2. **Recommended methods (3 by default)**  
   For each method:
   - method name
   - why selected for this assumption
   - key pros
   - key cons
3. **Layering rationale**
   - why this combination is stronger than any single method
4. **Sequence**
   - short ordered list (qual first, then confirmation)

Keep concise. Avoid long theory dumps unless explicitly asked.

---

## Guardrails

- Do not fabricate methods not present in `methods-catalog.json`.
- Use canonical category names from the pack.
- If confidence is low due to missing context, say so and ask for the minimum
  missing detail.
- Prefer practical recommendations over abstract frameworks.
