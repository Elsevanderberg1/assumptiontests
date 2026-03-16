# PostHog Setup (Quick Guide)

This is a fast setup checklist for adding PostHog analytics to this project later.

## 1) Create PostHog project

1. Create/login at [posthog.com](https://posthog.com/).
2. Create a new project (e.g. `Assumptions Toolbox`).
3. Copy:
   - Project API key (`phc_...`)
   - Host (`https://us.i.posthog.com` or EU host)

## 2) Add env variables

Add to your frontend env (local and deployment):

```bash
VITE_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxx
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

## 3) Install SDK

From `Assumption-Explorer`:

```bash
npm install posthog-js
```

## 4) Initialize in app entry

Initialize once in `client/src/main.tsx` (or nearest app root).

```ts
import posthog from "posthog-js";

if (import.meta.env.VITE_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: true,
    autocapture: true,
  });
}
```

## 5) Track the core events you care about

Recommended event names for this app:

- `theory_card_opened`
- `method_search_used`
- `method_filter_changed`
- `method_filter_cleared`
- `method_card_toggle_opened`
- `agent_skill_download_clicked`
- `feedback_modal_opened`
- `feedback_submitted`
- `feedback_submit_failed`

Useful event properties:

- `page_path`
- `card_id` / `card_title`
- `filter_type` / `filter_value`
- `query_length`
- `rating` (for feedback submitted)

## 6) Suggested instrumentation points

- `client/src/components/mindmap-section.tsx`
  - track when a theory card is opened
- `client/src/pages/home.tsx`
  - search used, filter changed, clear clicked, agent download clicked
- `client/src/components/method-card.tsx`
  - track accordion/toggle open actions
- feedback modal component (wherever implemented)
  - modal open, submit success/failure

## 7) Verify in PostHog

1. Start app locally.
2. Open PostHog "Live Events".
3. Click through key flows:
   - open theory cards
   - search + filter in method database
   - click agent download
   - open and submit feedback
4. Confirm event names and properties look clean.

## 8) First dashboards (optional but recommended)

- Visitors/pageviews/sessions
- Theory card opens by card
- Method database usage (search + filter)
- Agent download clicks
- Feedback open -> submit + average rating

## Notes

- Avoid sending personal/sensitive data in event properties.
- If you do not want local/dev data, gate init by environment.
