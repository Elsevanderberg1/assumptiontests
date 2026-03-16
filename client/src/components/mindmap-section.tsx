import { useEffect, useCallback, useState, type ReactNode } from "react";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ExternalLink } from "lucide-react";
import qualMethodsImage from "@assets/qual-methods-strengths-weaknesses.png";

function ZoomableImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    if ("key" in e && e.key !== "Escape" && e.key !== "Enter" && e.key !== " ") return;
    setZoomed(false);
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomed(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomed]);

  return (
    <figure className="space-y-1.5">
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="block w-full rounded-lg overflow-hidden border border-black/10 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-[#3c63b5]"
        aria-label="Click to enlarge image"
      >
        <img src={src} alt={alt} className="w-full block" />
      </button>
      {caption && (
        <figcaption className="text-xs text-black/65">
          {caption}{" "}
          <span className="text-black/40 italic">Click to enlarge.</span>
        </figcaption>
      )}

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={close}
          onKeyDown={close}
          tabIndex={-1}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90dvh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none font-light"
            aria-label="Close enlarged image"
          >
            ×
          </button>
        </div>
      )}
    </figure>
  );
}

type TheoryNodeId =
  | "quant-vs-qual"
  | "categories"
  | "goal-phase"
  | "icp"
  | "assumptions-not-ideas"
  | "ampie"
  | "false-signals";

type NodeKind = "center" | "middle" | "outer";

type MapNode = {
  id: string;
  label: string[];
  x: number;
  y: number;
  w: number;
  h: number;
  kind: NodeKind;
  theoryId?: TheoryNodeId;
};

const LEAN_URL = "https://substack.com/home/post/p-167708854";
const AMPIE_URL = "https://elsevanderberg.substack.com/p/your-mvp-didnt-fail-you-didnt-set";

const NODES: MapNode[] = [
  {
    id: "start",
    label: ["Assumption", "Tests"],
    x: 30,
    y: 259,
    w: 190,
    h: 86,
    kind: "center",
  },
  {
    id: "mid-1",
    label: ["Choosing the", "right test method"],
    x: 280,
    y: 100,
    w: 220,
    h: 72,
    kind: "middle",
  },
  {
    id: "mid-2",
    label: ["Selecting the right", "test participants"],
    x: 280,
    y: 265,
    w: 220,
    h: 72,
    kind: "middle",
  },
  {
    id: "mid-3",
    label: ["Learning faster", "at lower cost"],
    x: 280,
    y: 430,
    w: 220,
    h: 72,
    kind: "middle",
  },
  {
    id: "n1",
    label: ["Quant. vs qual;", "Hard vs soft"],
    x: 520,
    y: 60,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "quant-vs-qual",
  },
  {
    id: "n2",
    label: ["5 overarching", "categories"],
    x: 730,
    y: 60,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "categories",
  },
  {
    id: "n3",
    label: ["By goal/product", "phase"],
    x: 520,
    y: 156,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "goal-phase",
  },
  {
    id: "n4",
    label: ["Ideal Customer", "Profile (ICP)"],
    x: 730,
    y: 263,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "icp",
  },
  {
    id: "n5",
    label: ["Testing assumptions,", "not ideas"],
    x: 520,
    y: 390,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "assumptions-not-ideas",
  },
  {
    id: "n6",
    label: ["Isolating your point of", "(MVP) failure with AMPIE"],
    x: 730,
    y: 390,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "ampie",
  },
  {
    id: "n7",
    label: ["Reducing risk of false", "positives/negatives"],
    x: 615,
    y: 478,
    w: 200,
    h: 76,
    kind: "outer",
    theoryId: "false-signals",
  },
];

// start right=(220,302)  mid-1 right=(500,136)  mid-2 right=(500,301)  mid-3 right=(500,466)
// n1 left=(520,98)  n2 left=(730,98)  n3 left=(520,194)  n4 left=(730,301)
// n5 left=(520,428)  n6 left=(730,428)  n7 left=(615,516)
const EDGES = [
  // start → mid-1
  "M 220 302 C 252 280, 262 156, 280 136",
  // start → mid-2
  "M 220 302 C 252 302, 262 301, 280 301",
  // start → mid-3
  "M 220 302 C 252 324, 262 446, 280 466",
  // mid-1 → n1 (left col)
  "M 500 136 C 508 118, 514 98, 520 98",
  // mid-1 → n2 (right col)
  "M 500 136 C 580 116, 660 98, 730 98",
  // mid-1 → n3 (left col)
  "M 500 136 C 508 154, 514 194, 520 194",
  // mid-2 → n4 (right col)
  "M 500 301 C 580 301, 660 301, 730 301",
  // mid-3 → n5 (left col)
  "M 500 466 C 508 452, 514 428, 520 428",
  // mid-3 → n6 (right col)
  "M 500 466 C 580 452, 660 428, 730 428",
  // mid-3 → n7 (center)
  "M 500 466 C 550 490, 590 516, 615 516",
];

const THEORY_CONTENT: Record<TheoryNodeId, { title: string; body: ReactNode }> = {
  "quant-vs-qual": {
    title: "Quant. vs qual; Hard vs soft",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Quantitative and qualitative evidence are not opposites; they complement each other. In
          assumptions testing, quantitative methods map to hard evidence (what users do), while
          qualitative methods generally map to soft evidence (what users say and explain).
        </p>
        <p>
          <strong>Soft / qualitative evidence</strong> includes interviews, moderated prototype tests,
          and open-ended feedback. It helps you understand why. The limit: self-reported behavior is
          unreliable; people often do not do what they say they will do. We tend to answer questions
          from the viewpoint of our hypothetical, ideal selves.{" "}
          <a
            href="https://www.producttalk.org/customer-interview-questions/?srsltid=AfmBOopAHZZMuM4-A9nen8BujvGCngVPNB9DeB_jI8OLO5GjijlzEj-M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline"
          >
            ProductTalk interview guidance <ExternalLink className="h-3 w-3" />
          </a>
          . Story-based interviews try to break through this, but biased humans remain biased humans.{" "}
          <a
            href="https://www.producttalk.org/story-based-customer-interviews/?srsltid=AfmBOorLqM6PESQlBoowvfK3-GUqBu2LuuzmideEZJM8a3HlxUtmU0xb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline"
          >
            Story-based interviews <ExternalLink className="h-3 w-3" />
          </a>
          .
        </p>
        <p>
          <strong>Hard / quantitative evidence</strong> includes A/B tests, conversion funnels,
          trial-to-paid behavior, and launch metrics. What do people do under real-world circumstances,
          at scale? The limit: hard evidence often shows what changed, but not why.
        </p>
        <p>
          <strong>How to use both:</strong> start with qualitative methods to sharpen assumptions and
          ideas, then validate with quantitative methods to confirm real behavior and business impact.
          When qualitative and quantitative evidence conflict, trust the behavior signal and investigate
          the gap.
        </p>
        <p>
          <strong>Decision lens when evidence conflicts:</strong> collect more hard evidence, change the
          product flow and run a targeted A/B test, or run focused qualitative interviews with drop-offs
          and churned users.
        </p>
      </div>
    ),
  },
  categories: {
    title: "5 overarching categories",
    body: (
      <div className="space-y-4 text-sm leading-relaxed">
        <ZoomableImage
          src={qualMethodsImage}
          alt="Qualitative methods map with strengths and weaknesses"
          caption="Use this map to choose methods by strengths and weaknesses, not preference."
        />
        <p>
          Grouping methods by category offers a practical way to pick the right test method. Each test
          method can be associated with one or more test categories. Each category has its own pros and
          cons. Layer test methods from different categories to reduce blind spots.
        </p>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Desktop research</p>
            <p>
              Strictly speaking, this is a research method, not a test method. <strong>Pros:</strong>{" "}
              cheap and fast; you can piggyback on existing work (ideally peer-reviewed and
              statistically significant sources). <strong>Cons:</strong> often not reflective of your
              niche ICP; researcher bias; results depend on source quality.
            </p>
            <p className="text-black/75">
              <strong>Example methods:</strong> Studies, Reports, Public Data; User Reviews &
              Discussions.
            </p>
          </div>
          <div>
            <p className="font-medium">Self-Reportage (Qual)</p>
            <p>
              <strong>Pros:</strong> uncover the why, goals, motivations, and values; can reduce
              confirmation bias with non-leading questions. <strong>Cons:</strong> people do not always
              do what they say; you might miss latent needs and hard facts (exception: ODI interviews
              and surveys).
            </p>
            <p className="text-black/75">
              <strong>Example methods:</strong> Qualitative Customer Interviews (1:1); Discovery Survey;
              ODI - Job Mapping & Desired Outcome Interviews; 1:1 landing page test.
            </p>
          </div>
          <div>
            <p className="font-medium">Watch User in Environment (Qual)</p>
            <p>
              <strong>Pros:</strong> see real workarounds, constraints, and context. <strong>Cons:</strong>{" "}
              setup and execution complexity (especially B2B); interpretation bias risk.
            </p>
            <p className="text-black/75">
              <strong>Example methods:</strong> Ethnography; Contextual interview.
            </p>
          </div>
          <div>
            <p className="font-medium">Watch User with Artefact (Qual)</p>
            <p>
              <strong>Pros:</strong> fast way to de-risk specific solutions; surfaces resonance, delight,
              and usability issues. <strong>Cons:</strong> artificial environment, narrow solution-space
              box, and idea bias risk.
            </p>
            <p className="text-black/75">
              <strong>Example methods:</strong> 1:1 Landing Page Test; Moderated User Test (1:1);
              Unmoderated User Test.
            </p>
          </div>
          <div>
            <p className="font-medium">Real-World Behavior</p>
            <p>
              <strong>Pros:</strong> strongest evidence type; statistical significance can massively
              increase evidence strength (traffic-dependent). <strong>Cons:</strong> tells you what users
              do, but not why they do it.
            </p>
            <p className="text-black/75">
              <strong>Example methods:</strong> A/B testing landing page; A/B Testing Product
              Versions/Features; Data Analytics (launch data); Presale or Waitlist (Fake Door).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  "goal-phase": {
    title: "By goal/product phase",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          We can also categorize test methods by goal or product phase:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Understand the problem space:</strong> build a deep enough understanding of the
            space. Examples: desktop research, reading studies, forums, online communities, interviewing
            your ICP or experts, competitor research.
          </li>
          <li>
            <strong>Test whether your value proposition resonates:</strong> you understand the problem,
            you have a solution idea, and now you test whether anyone cares. Examples: 1:1 landing page
            tests, storyboard, offline pitching, cold outreach.
          </li>
          <li>
            <strong>Early product:</strong> take an early product to customers in a qualitative setting
            or by sending real traffic. Examples: co-creation, moderated user test, MVP.
          </li>
          <li>
            <strong>Mature product:</strong> gauge user sentiment or behavior based on a more mature
            product. Examples: Data analytics (launch data); PMF survey; Sales feedback.
          </li>
        </ul>
      </div>
    ),
  },
  icp: {
    title: "Ideal Customer Profile (ICP)",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Define your ICP/target audience before jumping into testing. If you are not strict about
          excluding test participants who do not fit your ICP, you will likely collect more noise than
          signal.
        </p>
        <p>
          Recruiting the wrong participants is one of the most common validation mistakes. An
          enthusiastic response from someone outside your target market tells you nothing about whether
          your actual customers will care.
        </p>
        <p>
          For PLG companies: this is why it is risky to focus too much on free-user behavior data if
          your core metric is tied to paying users.
        </p>
      </div>
    ),
  },
  "assumptions-not-ideas": {
    title: "Testing assumptions, not ideas",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Every product idea is a bundle of assumptions - about desirability, feasibility, viability,
          usability, and sometimes ethics. When you test the whole idea and it fails, you get a number
          but no explanation. You do not know which assumption broke.
        </p>
        <p>
          Testing individual assumptions lets you run smaller, cheaper tests and isolate exactly what is
          true or false. In many cases, several ideas rely on the same #1 riskiest assumption, so
          testing that single assumption can eliminate multiple weak ideas.
        </p>
        <p>
          The same assumption can often be tested at multiple fidelity levels - start cheap, escalate as
          your body of evidence grows.
        </p>
      </div>
    ),
  },
  ampie: {
    title: "Isolating your point of (MVP) failure with AMPIE",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          It is okay if your MVP fails to meet success metrics. It is not okay if you did not set it up
          to learn about your riskiest assumptions. The AMPIE framework helps isolate the point of
          failure so your next move is clear:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Audience:</strong> Did the right ICP users enter your product, or did you optimize
            for clicks from the wrong crowd?
          </li>
          <li>
            <strong>Messaging:</strong> Did users understand and care about your promise before signing
            up?
          </li>
          <li>
            <strong>Problem:</strong> Is this truly a painful, recurring, important problem worth
            solving now?
          </li>
          <li>
            <strong>Idea:</strong> Is your solution concept the best way to solve that problem?
          </li>
          <li>
            <strong>Execution:</strong> Was the MVP quality good enough to generate a valid signal?
          </li>
        </ul>
        <p>
          Use AMPIE as a diagnostic sequence, then run targeted follow-up tests (especially qualitative
          tests) to uncover the why behind the what.
          <a
            href={AMPIE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 underline"
          >
            Read more <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    ),
  },
  "false-signals": {
    title: "Reducing risk of false positives/negatives",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          For your riskiest assumptions - those that absolutely must be true or the house of cards
          collapses - a single test is not enough. Qualitative methods are rich in insight but can carry
          a higher risk of false positives.
        </p>
        <p>
          The fix is layering: run multiple tests for the same assumption using different methods from
          different categories.
        </p>
        <p>
          A practical rule: always run soft (qualitative) tests before hard (quantitative) ones. Once
          you have fixed fundamentals (for example glaring UX issues), follow up with hard evidence to
          confirm behavior at scale.
          <a
            href={LEAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 underline"
          >
            Read more <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    ),
  },
};

function NodeText({ node }: { node: MapNode }) {
  const startY = node.y + node.h / 2 - (node.label.length - 1) * 10;
  return (
    <text
      x={node.x + node.w / 2}
      y={startY}
      textAnchor="middle"
      className="fill-black"
      style={{ fontSize: node.kind === "center" ? 18 : 14, fontWeight: node.kind === "center" ? 800 : 600 }}
    >
      {node.label.map((line, idx) => (
        <tspan key={line} x={node.x + node.w / 2} dy={idx === 0 ? 0 : 22}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

export function MindMapSection() {
  const [activeId, setActiveId] = useState<TheoryNodeId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = activeId ? THEORY_CONTENT[activeId] : null;

  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(null);
      setMobileOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function openNode(theoryId: TheoryNodeId) {
    setActiveId(theoryId);
    posthog.capture("theory_card_opened", {
      card_id: theoryId,
      card_title: THEORY_CONTENT[theoryId].title,
      page_path: window.location.pathname,
    });
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setMobileOpen(true);
    }
  }

  return (
    <div className="mb-8 pt-12 border-t border-black/15">
      <h2
        className="mb-8 font-bold leading-tight tracking-tight text-black"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Theory
      </h2>

      {/* ── Mobile card list (< lg) ── */}
      <div className="block lg:hidden space-y-4 mb-4">
        {[
          {
            group: "Choosing the right test method",
            nodes: NODES.filter((n) => ["n1", "n2", "n3"].includes(n.id)),
          },
          {
            group: "Selecting the right test participants",
            nodes: NODES.filter((n) => ["n4"].includes(n.id)),
          },
          {
            group: "Learning faster at lower cost",
            nodes: NODES.filter((n) => ["n5", "n6", "n7"].includes(n.id)),
          },
        ].map(({ group, nodes }) => (
          <div key={group} className="rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#9d2241]/80 mb-3">{group}</p>
            {nodes.map((node) => {
              const theoryId = node.theoryId;
              if (!theoryId) return null;
              return (
                <button
                  key={node.id}
                  onClick={() => openNode(theoryId)}
                  className="w-full text-left rounded-xl border-2 border-[#3c63b5]/40 bg-[#e3ecff]/70 px-4 py-3 flex items-center justify-between gap-2 active:scale-[0.98] transition-transform"
                >
                  <span className="text-sm font-semibold text-black leading-snug">
                    {node.label.join(" ")}
                  </span>
                  <span className="shrink-0 text-[10px] font-bold text-white bg-[#3c63b5] rounded-full px-2.5 py-1">
                    READ MORE
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* ── Desktop SVG map + side panel (≥ lg) ── */}
      <div className="hidden lg:grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="overflow-x-auto rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm">
          <svg viewBox="0 0 950 580" width="100%" style={{ minWidth: 760, display: "block" }}>
            {EDGES.map((d) => (
              <path key={d} d={d} fill="none" stroke="#9f6aa9" strokeWidth={2} opacity={0.65} />
            ))}

            {NODES.map((node) => {
              const isOuter = node.kind === "outer";
              const theoryId = node.theoryId;
              const isActive = isOuter && node.theoryId ? activeId === node.theoryId : false;
              const fill =
                node.kind === "center" ? "#ffd8de" : node.kind === "middle" ? "#ffebef" : "#e3ecff";
              const stroke =
                node.kind === "center" ? "#9d2241" : node.kind === "middle" ? "#d16578" : "#3c63b5";
              return (
                <g
                  key={node.id}
                  onClick={isOuter && theoryId ? () => openNode(theoryId) : undefined}
                  onKeyDown={
                    isOuter && theoryId
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openNode(theoryId);
                          }
                        }
                      : undefined
                  }
                  role={isOuter ? "button" : undefined}
                  tabIndex={isOuter ? 0 : undefined}
                  aria-label={isOuter ? `${node.label.join(" ")} - READ MORE` : undefined}
                  style={{ cursor: isOuter ? "pointer" : "default" }}
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.w}
                    height={node.h}
                    rx={18}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isActive ? 3 : 2}
                  />
                  <NodeText node={node} />

                  {isOuter ? (
                    <>
                      <rect x={node.x + node.w - 114} y={node.y + node.h - 28} width={102} height={20} rx={10} fill="#3c63b5" />
                      <text x={node.x + node.w - 63} y={node.y + node.h - 14} textAnchor="middle" className="fill-white" style={{ fontSize: 10, fontWeight: 700 }}>
                        READ MORE
                      </text>
                    </>
                  ) : null}
                </g>
              );
            })}
          </svg>
        </div>

        <aside className="hidden lg:block">
          <div className="h-full rounded-2xl border border-black/10 bg-white/75 backdrop-blur-sm p-4">
            {active ? (
              <div className="h-full overflow-y-auto pr-1">
                <h3 className="text-lg font-semibold mb-3">{active.title}</h3>
                {active.body}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-sm text-black/65">
                Select a blue card to read more.
              </div>
            )}
          </div>
        </aside>
      </div> {/* end desktop grid */}

      <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
        <DrawerContent className="h-[92dvh] max-h-[92dvh]">
          <DrawerHeader className="shrink-0">
            <DrawerTitle>{active?.title ?? "Theory detail"}</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-2 overflow-y-auto overscroll-y-contain touch-pan-y pr-1">
            {active?.body}
          </div>
          <DrawerFooter className="shrink-0">
            <Button variant="outline" onClick={() => setMobileOpen(false)}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
