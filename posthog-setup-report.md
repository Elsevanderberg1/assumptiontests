# PostHog post-wizard report

The wizard has completed a deep integration of your project. Two files were created or modified to add server-side PostHog analytics using `posthog-node`:

- **`server/posthog.ts`** (new) - Singleton PostHog client initialized from environment variables, with `enableExceptionAutocapture: true` for automatic error capture.
- **`server/index.ts`** (modified) - Imports the PostHog client; calls `captureException` in the Express error middleware to track server errors; registers `SIGTERM`/`SIGINT` handlers to flush and shut down the SDK cleanly.
- **`.env`** (modified) - Added `POSTHOG_KEY` and `POSTHOG_HOST` for server-side use (alongside the existing `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST` for the client).
- **`posthog-node`** installed as a dependency.

The client side (`posthog-js`) was already well-instrumented with 9 events across 4 files and required no changes.

## Events

| Event name | Description | File |
|---|---|---|
| `server_error_captured` | Express error middleware fires `captureException` on any unhandled server error, attaching `status_code`. | `server/index.ts` |
| `method_filter_changed` | User toggles a category or phase filter. | `client/src/pages/home.tsx` |
| `method_filter_cleared` | User clears all active filters. | `client/src/pages/home.tsx` |
| `method_search_used` | User searches for a method (fires when query >= 3 chars). | `client/src/pages/home.tsx` |
| `agent_skill_download_clicked` | User clicks the agent skill download button. | `client/src/pages/home.tsx` |
| `method_card_toggle_opened` | User expands an accordion section on a method card. | `client/src/components/method-card.tsx` |
| `theory_card_opened` | User opens a theory node in the mindmap. | `client/src/components/mindmap-section.tsx` |
| `feedback_modal_opened` | User opens the feedback widget. | `client/src/components/feedback-widget.tsx` |
| `feedback_submitted` | User successfully submits feedback with a star rating. | `client/src/components/feedback-widget.tsx` |
| `feedback_submit_failed` | Feedback submission fails (network/config error). | `client/src/components/feedback-widget.tsx` |

## Next steps

We were unable to create a PostHog dashboard automatically (the PostHog MCP dashboard tools were not available in this session). To set up insights manually, log in to your PostHog project and create a dashboard named **"Analytics basics"** with these suggested insights:

1. **Agent skill downloads** - Trend of `agent_skill_download_clicked` over time
2. **Method search usage** - Trend of `method_search_used` to track search engagement
3. **Theory exploration** - Breakdown of `theory_card_opened` by `card_id` to see which nodes are most read
4. **Filter engagement** - Trend of `method_filter_changed` grouped by `filter_type`
5. **Feedback funnel** - Funnel from `feedback_modal_opened` → `feedback_submitted`

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-javascript_node/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
