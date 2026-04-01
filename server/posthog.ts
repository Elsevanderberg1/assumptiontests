import "dotenv/config";
import { PostHog } from "posthog-node";

export const posthog = process.env.NODE_ENV === "production" && process.env.POSTHOG_KEY
  ? new PostHog(process.env.POSTHOG_KEY, {
      host: process.env.POSTHOG_HOST,
      enableExceptionAutocapture: true,
    })
  : null;
