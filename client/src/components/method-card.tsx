import posthog from "posthog-js";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  type Method,
  getCategoryColor,
  getPhaseColor,
  parseEvidenceStrength,
} from "@/lib/methods-data";

function evidenceLabel(strength: number | null): string {
  if (strength === null) return "—";
  if (strength <= 1) return "Very weak";
  if (strength <= 2) return "Weak";
  if (strength <= 3) return "Moderate";
  if (strength <= 4) return "Strong";
  return "Very strong";
}

export function MethodCard({ method }: { method: Method }) {
  const evidenceNum = parseEvidenceStrength(method.evidenceStrength);
  const evidenceText =
    typeof method.evidenceStrength === "string"
      ? method.evidenceStrength
      : evidenceLabel(evidenceNum);

  return (
    <Card
      className="flex flex-col hover-elevate"
      data-testid={`card-method-${method.id}`}
    >
      <CardHeader className="pb-4 space-y-3">
        {/* Tag pills - smaller, uniform, editorial register */}
        <div className="flex flex-wrap items-center gap-1 text-[10px] uppercase tracking-[0.08em] font-medium">
          {method.categories.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center rounded-sm px-1.5 py-[3px] ${getCategoryColor(cat)}`}
              data-testid={`badge-category-${method.id}`}
            >
              {cat}
            </span>
          ))}
          <span
            className={`inline-flex items-center rounded-sm px-1.5 py-[3px] ${getPhaseColor(method.phase)}`}
            data-testid={`badge-phase-${method.id}`}
          >
            {method.phase}
          </span>
        </div>

        <h3
          className="text-base font-semibold leading-snug"
          data-testid={`text-name-${method.id}`}
        >
          {method.name}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3.5 pt-0">
        {/* Inline meta: evidence strength + cost as text only, no icons or bars */}
        <div className="text-xs text-muted-foreground flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span>
            Evidence:{" "}
            <span className="text-foreground font-medium">{evidenceText}</span>
          </span>
          <span className="text-muted-foreground/40" aria-hidden>·</span>
          <span>
            Cost:{" "}
            <span className="text-foreground font-medium">{method.costLevel}</span>
          </span>
        </div>

        <p
          className="text-sm text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: method.descriptionShort }}
        />

        <Accordion
          type="multiple"
          className="w-full mt-auto"
          onValueChange={(openItems) => {
            if (openItems.length > 0) {
              posthog.capture("method_card_toggle_opened", {
                card_id: method.id,
                card_title: method.name,
                page_path: window.location.pathname,
              });
            }
          }}
        >
          <AccordionItem value="evidence" className="border-b-0">
            <AccordionTrigger
              className="text-[10.5px] uppercase tracking-[0.1em] font-medium py-1.5 hover:no-underline text-muted-foreground"
              data-testid={`accordion-evidence-${method.id}`}
            >
              Evidence details
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: method.evidenceDetail }}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="description" className="border-b-0">
            <AccordionTrigger
              className="text-[10.5px] uppercase tracking-[0.1em] font-medium py-1.5 hover:no-underline text-muted-foreground"
              data-testid={`accordion-description-${method.id}`}
            >
              Full description
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: method.descriptionFull }}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cost" className="border-b-0">
            <AccordionTrigger
              className="text-[10.5px] uppercase tracking-[0.1em] font-medium py-1.5 hover:no-underline text-muted-foreground"
              data-testid={`accordion-cost-${method.id}`}
            >
              Cost details
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {method.cost}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="application" className="border-b-0">
            <AccordionTrigger
              className="text-[10.5px] uppercase tracking-[0.1em] font-medium py-1.5 hover:no-underline text-muted-foreground"
              data-testid={`accordion-application-${method.id}`}
            >
              Practical application
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {method.practicalApplication}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
