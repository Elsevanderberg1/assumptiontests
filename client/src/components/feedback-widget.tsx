import { FormEvent, useMemo, useState } from "react";
import posthog from "posthog-js";
import { MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SubmitState = "idle" | "success" | "error" | "config";

type FeedbackWidgetProps = {
  visible?: boolean;
};

export function FeedbackWidget({ visible = true }: FeedbackWidgetProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const endpoint = useMemo(
    () => (import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined)?.trim(),
    [],
  );

  function resetForm() {
    setRating(0);
    setComment("");
    setSubmitState("idle");
    setErrorMessage(null);
    setIsSubmitting(false);
  }

  function closeModal(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) resetForm();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setSubmitState("idle");

    if (rating < 1 || rating > 5) {
      setSubmitState("error");
      setErrorMessage("Please select a rating from 1 to 5 stars.");
      return;
    }

    if (!endpoint) {
      setSubmitState("config");
      setErrorMessage("Feedback endpoint is not configured yet.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        rating,
        comment: comment.trim(),
        page: `${window.location.pathname}${window.location.hash}`,
        timestamp: new Date().toISOString(),
        context: "floating_feedback_button",
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Feedback submit failed with status ${response.status}`);
      }

      setSubmitState("success");
      posthog.capture("feedback_submitted", { rating, page_path: window.location.pathname });
      setComment("");
    } catch (error) {
      console.error("Feedback submit failed:", error);
      posthog.capture("feedback_submit_failed", { rating, page_path: window.location.pathname });
      setSubmitState("error");
      setErrorMessage("Could not submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70]">
        <Button
          type="button"
          onClick={() => {
            setOpen(true);
            posthog.capture("feedback_modal_opened", { page_path: window.location.pathname });
          }}
          className="rounded-full px-4 py-5 shadow-lg border border-black/20 bg-white/90 text-black hover:bg-white"
          aria-label="Give feedback"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Give feedback
        </Button>
      </div>

      <Dialog open={open} onOpenChange={closeModal}>
        <DialogContent className="max-w-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Share feedback</DialogTitle>
              <DialogDescription>
                Rate your experience and tell me what could be better.
              </DialogDescription>
            </DialogHeader>

            <div>
              <p className="text-sm font-medium text-black mb-2">Rating</p>
              <div className="flex items-center gap-1" role="radiogroup" aria-label="Feedback rating">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    key={starValue}
                    type="button"
                    role="radio"
                    aria-checked={rating === starValue}
                    aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
                    onClick={() => setRating(starValue)}
                    className="rounded-md p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        starValue <= rating ? "fill-amber-400 text-amber-500" : "text-black/35"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="feedback-comment" className="text-sm font-medium text-black">
                Comment
              </label>
              <Textarea
                id="feedback-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2 min-h-[120px]"
                placeholder="What worked well? What was confusing?"
              />
            </div>

            {submitState === "success" ? (
              <p className="text-sm text-emerald-700">Thanks for the feedback. We received it.</p>
            ) : null}
            {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => closeModal(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit feedback"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
