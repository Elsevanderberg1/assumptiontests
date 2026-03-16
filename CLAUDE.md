# Project Guardrails - Assumption-Explorer

## Snapshot Best Practices (Mandatory)
- For any task touching 2+ files or involving refactors/restores, create a timestamped snapshot checkpoint before edits.
- Create additional checkpoints at least every 20-30 minutes during active implementation, and before any broad/structural rewrite.
- Keep snapshots lightweight and human-readable when possible (for example: key file copies plus a short checkpoint note about intent).
- Before replacing a full file, snapshot that file first.
- After major milestones, verify state (typecheck/lint plus visual or behavioral sanity check) before proceeding.

## Revert/Rollback Failsafe (Mandatory)
- Never run or simulate rollback/revert actions without explicit user confirmation in the same thread.
- Treat the following as high-risk and confirmation-gated: "restore", "rollback", "revert", "reset", "replace file with older version", or "recover from snapshot".
- Ask a direct confirmation question and wait for a clear "yes" before proceeding.
- Include a short preview before execution:
  - what will be reverted/restored
  - source of truth (which snapshot/history)
  - what may be lost
- If a user message is ambiguous (for example "go back", "undo that", "restore"), clarify scope before making changes.

## Unexpected State Changes
- If files appear unexpectedly changed, stop immediately and report what changed.
- Do not continue implementation until the user confirms whether to:
  - keep current state
  - restore from checkpoint
  - manually reconstruct desired state
