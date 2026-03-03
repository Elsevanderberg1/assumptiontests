import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/lib/methods-data";
import { BookOpen, ExternalLink } from "lucide-react";

const LEAN_VALIDATION_URL = "https://substack.com/home/post/p-167708854";

const categoryTable: { goal: string; category: string }[] = [
  { goal: "Orient yourself before talking to anyone", category: "Desktop Research" },
  { goal: "Understand motivations and the \u201cwhy\u201d behind behavior", category: "Self-Reportage" },
  { goal: "See how users actually work today, unfiltered", category: "Watch User in Environment" },
  { goal: "De-risk a specific solution idea quickly", category: "Watch User with Artefact" },
  { goal: "Get hard evidence of what users actually do", category: "Real-World Behaviour" },
];

export function TheorySection() {
  return (
    <div className="mb-6" data-testid="theory-section">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Theory
        </h2>
      </div>

      <Accordion type="multiple" className="border rounded-lg divide-y">
        <AccordionItem value="choose-method" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-choose-method"
          >
            Which test method to choose?
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4">
            <p className="mb-3 text-muted-foreground">
              Several methods fall under multiple categories. For example, a
              &ldquo;moderated user test&rdquo; falls under &lsquo;Self-Reportage&rsquo; and
              &lsquo;Watch User with Artefact&rsquo;.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm" data-testid="table-category-guide">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-medium text-muted-foreground">If you want to&hellip;</th>
                    <th className="text-left py-2 font-medium text-muted-foreground">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTable.map(({ goal, category }) => {
                    const colorClasses = getCategoryColor(category as any);
                    return (
                      <tr key={category} className="border-b last:border-b-0">
                        <td className="py-2 pr-4">{goal}</td>
                        <td className="py-2">
                          <Badge variant="outline" className={colorClasses}>
                            {category}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground">
              <strong>Rule of thumb:</strong> layer methods. Each category has blind spots the others cover.{" "}
              <a
                href={LEAN_VALIDATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
              >
                Read more <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="soft-hard" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-soft-hard"
          >
            Soft evidence vs. hard evidence
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4 space-y-3">
            <p>
              Test methods fall on a spectrum from soft to hard evidence.
            </p>
            <p>
              <strong>Soft evidence</strong> is what people <em>say</em> &mdash; think interviews, surveys,
              prototype tests. Sample sizes are small and behavior is hypothetical (&ldquo;I would use
              this&rdquo;). The big advantage: you get the <em>why</em>.
            </p>
            <p>
              <strong>Hard evidence</strong> is what people <em>do</em> under real-world conditions &mdash;
              think A/B tests, MVPs, fake door tests. Statistical significance is possible. The
              tradeoff: you see the behavior, not the reason behind it.
            </p>
            <p className="text-muted-foreground">
              <strong>You need both.</strong> Soft evidence tells you what to build and why; hard
              evidence tells you whether it&rsquo;s working.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="deep-dive" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-deep-dive"
          >
            Deep dive into the categories
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4 space-y-4">
            <div>
              <h4 className="font-semibold mb-1">
                <Badge variant="outline" className={getCategoryColor("Desktop Research")}>
                  Desktop Research
                </Badge>
              </h4>
              <p>
                Lightweight, cheap, and the right place to start. Dig into existing studies, user
                reviews, competitor analysis, and search trends to orient yourself before talking to
                anyone. The limitation: research is often generalized &mdash; it&rsquo;s rarely specific
                enough to validate your exact niche or ICP.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                <Badge variant="outline" className={getCategoryColor("Self-Reportage")}>
                  Self-Reportage
                </Badge>
              </h4>
              <p>
                Soft evidence. The best way to uncover motivations, goals, and the &ldquo;why&rdquo;
                behind user behavior. The catch: people don&rsquo;t always do what they say they will.
                Treat self-reported data as directional, not definitive &mdash; and layer with other
                methods to reduce the risk of false positives.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                <Badge variant="outline" className={getCategoryColor("Watch User in Environment")}>
                  Watch User in Environment
                </Badge>
              </h4>
              <p>
                Sits between soft and hard &mdash; you&rsquo;re observing real behavior, not asking
                people to predict it. But sample sizes are still small. You see what users actually
                do &mdash; the workarounds, the constraints, the habits they wouldn&rsquo;t think to
                mention in an interview. Complex to set up (especially in B2B), and observations
                require careful interpretation. Worth it when you suspect users have blind spots
                about their own behavior.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                <Badge variant="outline" className={getCategoryColor("Watch User with Artefact")}>
                  Watch User with Artefact
                </Badge>
              </h4>
              <p>
                Soft evidence. This is where vibe coding shines. Fast to set up, great for spotting
                resonance, delight, and usability issues before you build. The limitation: you&rsquo;re
                watching people react in your environment, not theirs &mdash; and it&rsquo;s hard to
                escape your own solution bias when you&rsquo;re the one running the test.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                <Badge variant="outline" className={getCategoryColor("Real-World Behaviour")}>
                  Real-World Behaviour
                </Badge>
              </h4>
              <p>
                Hard evidence. The only category that can give you statistical significance. You see
                what users actually do, not what they say they&rsquo;ll do. The catch: you won&rsquo;t
                know <em>why</em>. Always pair with qualitative methods &mdash; and test one assumption
                at a time, or you won&rsquo;t be able to isolate what failed.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="test-assumptions" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-test-assumptions"
          >
            Test assumptions, not ideas
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4 space-y-3">
            <p>
              Every product idea rests on a stack of assumptions &mdash; about the problem, the
              audience, the solution, and your ability to execute. When you test the whole idea at
              once (say, by launching an MVP), and it fails, you&rsquo;re left with a number and no
              explanation. Was the problem not real enough? Was the solution wrong? Did the wrong
              users show up?
            </p>
            <p>
              Testing individual assumptions lets you run smaller, cheaper tests and isolate exactly
              what&rsquo;s true or false. As a bonus: the same riskiest assumption can often be tested
              with multiple methods at different fidelity levels.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="test-layering" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-test-layering"
          >
            Run multiple tests per assumption (test layering)
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4 space-y-3">
            <p>
              A single test is rarely enough. Qualitative methods are rich in insight but carry a
              high risk of false positives or negatives &mdash; the sample sizes are small, and one
              enthusiastic interview participant can skew your read. The fix is layering: run
              multiple tests for the same assumption using different methods.
            </p>
            <p>
              <strong>A practical rule:</strong> always run soft (qualitative) tests before hard
              (quantitative) ones. A quick interview or prototype session can surface glaring
              issues &mdash; no one understood the headline, no one found the button &mdash; before
              you direct real traffic. Sending users into a broken experience doesn&rsquo;t just
              waste your budget; it makes your quantitative data meaningless.
            </p>
            <p>
              Once you&rsquo;ve fixed the fundamentals, follow up with hard evidence to confirm the
              behavior holds at scale.{" "}
              <a
                href={LEAN_VALIDATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
              >
                Read more <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exclude-icp" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-exclude-icp"
          >
            Exclude people who don't match your ICP
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4">
            <p>
              Define your ICP/target audience first. If you aren&rsquo;t strict about excluding test
              participants who don&rsquo;t fit your ICP, you&rsquo;ll likely collect more noise than
              signal.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources" className="border-b-0 px-4">
          <AccordionTrigger
            className="text-sm font-semibold py-3"
            data-testid="accordion-theory-resources"
          >
            Resources
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed pb-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.amazon.de/-/en/Testing-Business-Ideas-Experimentation-Strategyzer/dp/1119551447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
                  data-testid="link-resource-bland"
                >
                  David Bland, &ldquo;Testing Business Ideas&rdquo; <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.de/Continuous-Discovery-Habits-Discover-Products/dp/1736633309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
                  data-testid="link-resource-torres"
                >
                  Teresa Torres, &ldquo;Continuous Discovery Habits&rdquo; <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.de/-/en/Evidence-Guided-Creating-Impact-Products-Uncertainty/dp/B0CJDFBN1X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
                  data-testid="link-resource-gilad"
                >
                  Itamar Gilad, &ldquo;Evidence-Guided&rdquo; <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
