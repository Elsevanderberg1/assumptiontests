import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "@/lib/methods-data";
import { BarChart3, DollarSign, Lightbulb } from "lucide-react";

function EvidenceBar({ strength }: { strength: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((level) => (
        <div
          key={level}
          className={`h-2 w-5 rounded-sm transition-colors ${
            level <= strength
              ? "bg-primary"
              : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

function parseEvidenceStrength(strength: number | string): number {
  if (typeof strength === "number") return strength;
  const match = strength.match(/(\d+)/);
  if (match) return parseInt(match[1], 10);
  return 3;
}

export function MethodCard({ method }: { method: Method }) {
  const evidenceNum = parseEvidenceStrength(method.evidenceStrength);
  const evidenceLabel =
    typeof method.evidenceStrength === "string"
      ? method.evidenceStrength
      : `${method.evidenceStrength}/5`;

  return (
    <Card
      className="flex flex-col hover-elevate"
      data-testid={`card-method-${method.id}`}
    >
      <CardHeader className="pb-3 space-y-3">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div className="flex flex-wrap gap-1">
            {method.categories.map((cat) => (
              <span
                key={cat}
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${getCategoryColor(cat)}`}
                data-testid={`badge-category-${method.id}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${getPhaseColor(method.phase)}`}
            data-testid={`badge-phase-${method.id}`}
          >
            {method.phase}
          </span>
        </div>
        <div>
          <span className="text-xs font-mono text-muted-foreground">
            #{method.id}
          </span>
          <h3
            className="text-base font-semibold leading-snug mt-0.5"
            data-testid={`text-name-${method.id}`}
          >
            {method.name}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4 pt-0">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <BarChart3 className="h-3.5 w-3.5" />
              Evidence Strength
            </div>
            <span className="text-xs font-semibold tabular-nums">
              {evidenceLabel}
            </span>
          </div>
          <EvidenceBar strength={evidenceNum} />
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <DollarSign className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="text-muted-foreground font-medium">Cost:</span>
          <span className="font-medium">{method.costLevel}</span>
        </div>

        <p
          className="text-sm text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: method.descriptionShort }}
        />

        <Accordion type="multiple" className="w-full -mx-0">
          <AccordionItem value="evidence" className="border-b-0">
            <AccordionTrigger
              className="text-xs font-medium py-2 hover:no-underline"
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
              className="text-xs font-medium py-2 hover:no-underline"
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
              className="text-xs font-medium py-2 hover:no-underline"
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
              className="text-xs font-medium py-2 hover:no-underline"
              data-testid={`accordion-application-${method.id}`}
            >
              <span className="flex items-center gap-1.5">
                <Lightbulb className="h-3.5 w-3.5" />
                Practical application
              </span>
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
