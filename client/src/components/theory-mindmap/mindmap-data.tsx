import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/lib/methods-data";
import { ExternalLink } from "lucide-react";
import type { Node, Edge } from "@xyflow/react";

const LEAN_VALIDATION_URL = "https://substack.com/home/post/p-167708854";

export type MindmapNodeData = {
  label: string;
  subtitle?: string;
  color: "yellow" | "green" | "blue";
  seq: number;
};

export const mindmapNodes: Node<MindmapNodeData>[] = [
  {
    id: "0",
    type: "mindmapNode",
    position: { x: 400, y: 0 },
    data: {
      label: "Test assumptions, not ideas!",
      subtitle: "Testing full ideas makes it impossible to pinpoint why something failed. Testing single assumptions lets you run smaller, cheaper tests.",
      color: "yellow",
      seq: 0,
    },
  },
  {
    id: "1",
    type: "mindmapNode",
    position: { x: 150, y: 180 },
    data: {
      label: "Choosing the right test method(s)",
      subtitle: "for each assumption",
      color: "green",
      seq: 1,
    },
  },
  {
    id: "2",
    type: "mindmapNode",
    position: { x: -50, y: 340 },
    data: {
      label: "Categories",
      subtitle: "Desktop research; self-reportage; watch user in their environment; watch user with your artefact; real-world behaviour",
      color: "blue",
      seq: 2,
    },
  },
  {
    id: "3",
    type: "mindmapNode",
    position: { x: -50, y: 540 },
    data: {
      label: "Soft vs. hard evidence",
      subtitle: "What people say vs. what people do",
      color: "green",
      seq: 3,
    },
  },
  {
    id: "4",
    type: "mindmapNode",
    position: { x: 450, y: 380 },
    data: {
      label: "Running multiple tests per assumption",
      subtitle: "To reduce false positives/negatives",
      color: "green",
      seq: 4,
    },
  },
  {
    id: "5",
    type: "mindmapNode",
    position: { x: 700, y: 200 },
    data: {
      label: "Selecting test participants",
      color: "blue",
      seq: 5,
    },
  },
  {
    id: "6",
    type: "mindmapNode",
    position: { x: 850, y: 350 },
    data: {
      label: "ICP fit",
      subtitle: "Only care about participants who match your Ideal Customer Profile!",
      color: "blue",
      seq: 6,
    },
  },
];

export const mindmapEdges: Edge[] = [
  { id: "e0-1", source: "0", target: "1", type: "default" },
  { id: "e1-2", source: "1", target: "2", type: "default" },
  { id: "e2-3", source: "2", target: "3", type: "default" },
  { id: "e1-4", source: "1", target: "4", type: "default" },
  { id: "e4-5", source: "4", target: "5", type: "default" },
  { id: "e5-6", source: "5", target: "6", type: "default" },
];

const categoryTable: { goal: string; category: string }[] = [
  { goal: "Orient yourself before talking to anyone", category: "Desktop Research" },
  { goal: "Understand motivations and the \u201cwhy\u201d behind behavior", category: "Self-Reportage" },
  { goal: "See how users actually work today, unfiltered", category: "Watch User in Environment" },
  { goal: "De-risk a specific solution idea quickly", category: "Watch User with Artefact" },
  { goal: "Get hard evidence of what users actually do", category: "Real-World Behaviour" },
];

export const nodeDetailContent: Record<string, { title: string; content: JSX.Element }> = {
  "0": {
    title: "Test assumptions, not ideas",
    content: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Every product idea rests on a stack of assumptions — about the problem, the
          audience, the solution, and your ability to execute. When you test the whole idea at
          once (say, by launching an MVP), and it fails, you're left with a number and no
          explanation. Was the problem not real enough? Was the solution wrong? Did the wrong
          users show up?
        </p>
        <p>
          Testing individual assumptions lets you run smaller, cheaper tests and isolate exactly
          what's true or false. As a bonus: the same riskiest assumption can often be tested
          with multiple methods at different fidelity levels.
        </p>
      </div>
    ),
  },
  "1": {
    title: "Which test method to choose?",
    content: (
      <div className="space-y-4 text-sm leading-relaxed">
        <p className="text-muted-foreground">
          Several methods fall under multiple categories. For example, a
          "moderated user test" falls under 'Self-Reportage' and
          'Watch User with Artefact'.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">If you want to…</th>
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
      </div>
    ),
  },
  "2": {
    title: "Deep dive into the categories",
    content: (
      <div className="space-y-4 text-sm leading-relaxed">
        <div>
          <h4 className="font-semibold mb-1">
            <Badge variant="outline" className={getCategoryColor("Desktop Research")}>
              Desktop Research
            </Badge>
          </h4>
          <p>
            Lightweight, cheap, and the right place to start. Dig into existing studies, user
            reviews, competitor analysis, and search trends to orient yourself before talking to
            anyone. The limitation: research is often generalized — it's rarely specific
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
            Soft evidence. The best way to uncover motivations, goals, and the "why"
            behind user behavior. The catch: people don't always do what they say they will.
            Treat self-reported data as directional, not definitive — and layer with other
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
            Sits between soft and hard — you're observing real behavior, not asking
            people to predict it. But sample sizes are still small. You see what users actually
            do — the workarounds, the constraints, the habits they wouldn't think to
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
            resonance, delight, and usability issues before you build. The limitation: you're
            watching people react in your environment, not theirs — and it's hard to
            escape your own solution bias when you're the one running the test.
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
            what users actually do, not what they say they'll do. The catch: you won't
            know <em>why</em>. Always pair with qualitative methods — and test one assumption
            at a time, or you won't be able to isolate what failed.
          </p>
        </div>
      </div>
    ),
  },
  "3": {
    title: "Soft evidence vs. hard evidence",
    content: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Test methods fall on a spectrum from soft to hard evidence.
        </p>
        <p>
          <strong>Soft evidence</strong> is what people <em>say</em> — think interviews, surveys,
          prototype tests. Sample sizes are small and behavior is hypothetical ("I would use
          this"). The big advantage: you get the <em>why</em>.
        </p>
        <p>
          <strong>Hard evidence</strong> is what people <em>do</em> under real-world conditions —
          think A/B tests, MVPs, fake door tests. Statistical significance is possible. The
          tradeoff: you see the behavior, not the reason behind it.
        </p>
        <p className="text-muted-foreground">
          <strong>You need both.</strong> Soft evidence tells you what to build and why; hard
          evidence tells you whether it's working.
        </p>
      </div>
    ),
  },
  "4": {
    title: "Run multiple tests per assumption (test layering)",
    content: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          A single test is rarely enough. Qualitative methods are rich in insight but carry a
          high risk of false positives or negatives — the sample sizes are small, and one
          enthusiastic interview participant can skew your read. The fix is layering: run
          multiple tests for the same assumption using different methods.
        </p>
        <p>
          <strong>A practical rule:</strong> always run soft (qualitative) tests before hard
          (quantitative) ones. A quick interview or prototype session can surface glaring
          issues — no one understood the headline, no one found the button — before
          you direct real traffic. Sending users into a broken experience doesn't just
          waste your budget; it makes your quantitative data meaningless.
        </p>
        <p>
          Once you've fixed the fundamentals, follow up with hard evidence to confirm the
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
      </div>
    ),
  },
  "5": {
    title: "Selecting test participants",
    content: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Define your ICP/target audience first. If you aren't strict about excluding test
          participants who don't fit your ICP, you'll likely collect more noise than
          signal.
        </p>
        <p>
          Who you test with matters as much as how you test. A brilliant test with the wrong
          audience produces misleading data — worse than no data at all, because it gives
          you false confidence.
        </p>
      </div>
    ),
  },
  "6": {
    title: "ICP fit",
    content: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Define your ICP/target audience first. If you aren't strict about excluding test
          participants who don't fit your ICP, you'll likely collect more noise than
          signal.
        </p>
        <p>
          Only care about participants who match your Ideal Customer Profile. Every participant
          outside your ICP dilutes your signal and can lead you to build for the wrong audience.
        </p>
      </div>
    ),
  },
};

export const resourceLinks = [
  {
    id: "bland",
    label: "David Bland, \"Testing Business Ideas\"",
    url: "https://www.amazon.de/-/en/Testing-Business-Ideas-Experimentation-Strategyzer/dp/1119551447",
  },
  {
    id: "torres",
    label: "Teresa Torres, \"Continuous Discovery Habits\"",
    url: "https://www.amazon.de/Continuous-Discovery-Habits-Discover-Products/dp/1736633309",
  },
  {
    id: "gilad",
    label: "Itamar Gilad, \"Evidence-Guided\"",
    url: "https://www.amazon.de/-/en/Evidence-Guided-Creating-Impact-Products-Uncertainty/dp/B0CJDFBN1X",
  },
];
