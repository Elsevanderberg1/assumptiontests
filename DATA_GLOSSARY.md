# PostHog Data Glossary

Events and properties tracked in the Assumptions Toolbox app.

## Automatic events (captured by PostHog SDK)

| Event | Description |
|-------|-------------|
| `$pageview` | Fired on every page load. Tracks total visitors and page views. |
| `$autocapture` | Fires on clicks, form submissions, and similar DOM interactions. Useful as a catch-all. |

## Custom events

### Theory section

| Event | Description | Properties |
|-------|-------------|------------|
| `theory_card_opened` | User clicks a theory card in the mind map (desktop or mobile) | `card_id`, `card_title`, `page_path` |

### Method database

| Event | Description | Properties |
|-------|-------------|------------|
| `method_search_used` | User types 3+ characters in the search bar | `query_length`, `page_path` |
| `method_filter_changed` | User toggles a category or phase filter badge | `filter_type`, `filter_value`, `page_path` |
| `method_filter_cleared` | User clicks "Clear" to reset all filters and search | `page_path` |
| `method_card_toggle_opened` | User expands an accordion section on a method card | `card_id`, `card_title`, `page_path` |

### Agent skill download

| Event | Description | Properties |
|-------|-------------|------------|
| `agent_skill_download_clicked` | User clicks the "Download pack (.zip)" link | `page_path` |

### Feedback widget

| Event | Description | Properties |
|-------|-------------|------------|
| `feedback_modal_opened` | User clicks the "Give feedback" button | `page_path` |
| `feedback_submitted` | Feedback form submitted successfully | `rating`, `page_path` |
| `feedback_submit_failed` | Feedback submission failed (network or server error) | `rating`, `page_path` |

## Property reference

| Property | Type | Description |
|----------|------|-------------|
| `page_path` | string | The URL pathname at the time of the event (e.g. `/`) |
| `card_id` | string | Unique identifier for a theory card or method card |
| `card_title` | string | Human-readable title of the card |
| `filter_type` | string | Which filter group was toggled: `"category"` or `"phase"` |
| `filter_value` | string | The specific filter value toggled (e.g. `"Self-Reportage (Qual)"`) |
| `query_length` | number | Character count of the search query |
| `rating` | number | Star rating (1-5) submitted with feedback |

## Environment setup

- **Production:** Set `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` in your deployment platform's environment variables (e.g. Vercel, Netlify).
- **Local development:** Leave `VITE_POSTHOG_KEY` empty in your `.env` file so no dev events are sent to PostHog.
- **PostHog host:** `https://eu.posthog.com` (EU data residency).
