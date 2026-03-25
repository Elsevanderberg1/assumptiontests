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

If any files are missing, **stop and state exactly which files could not be found** before proceeding. Do not silently fall back to training-data knowledge without alerting the user.

---

## Required Inputs (ask if missing)

Before recommending methods, ensure these are known:

1. **Assumption statement** (what exactly is being tested)
2. **Assumption type** - is this primarily a:
   - `desirability` assumption (do people want this?)
   - `feasibility` assumption (can we build it?)
   - `viability` assumption (can we make money from it?)
   - `usability` assumption (can people use it?)
   - `ethics` assumption (should we build it?)
3. **Risk level + evidence context**
   - how risky is this assumption for the idea?
   - what evidence already suggests it is true/false?
4. **Idea context**
   - what is the product/solution idea?
5. **Customer opportunity context**
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

### 3) Rule conflict resolution

Multiple rules in `strategy-rules.json` may fire simultaneously (e.g. high risk + discovery phase). When this happens: **merge** the `recommendCategories` lists from all matching rules (union), and take the highest `minimumMethodCount` across them. Do not silently drop categories from a higher-priority rule.

### 4) Layering rule

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
5. **What this strategy doesn't yet cover**
   - Identify which of the 5 evidence categories are **absent** from the recommended methods
   - State what confidence the recommended tests *will* give: what you'll know if they succeed, and what will still be unconfirmed
   - Name the natural next milestone (e.g. prototype test, MVP/launch) and explain **why** it follows logically:
     - ground the reasoning in the missing category (e.g. no "Watch User with Artefact" means no solution-resonance signal yet; no "Real-World Behaviour" means no behavioral confirmation at scale)
     - reference the product phase progression: discovery-phase tests confirm problem existence → value-prop tests introduce an artefact and test resonance → early product tests generate real behavioral evidence
     - be concrete: name the type of test, what new evidence category it unlocks, and what decision it enables

Keep concise. Avoid long theory dumps unless explicitly asked.

---

## Guardrails

- Do not fabricate methods not present in `methods-catalog.json`.
- Use canonical category names from the pack.
- If confidence is low due to missing context, say so and ask for the minimum
  missing detail.
- Prefer practical recommendations over abstract frameworks.
