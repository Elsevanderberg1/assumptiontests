import { useEffect, useMemo, useState } from "react";
import posthog from "posthog-js";
import { motion, useReducedMotion } from "framer-motion";
import { Search, X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MethodCard } from "@/components/method-card";
import { MindMapSection } from "@/components/mindmap-section";
import { FeedbackWidget } from "@/components/feedback-widget";
import {
  methods,
  categories,
  phases,
  costLevels,
  getCategoryColor,
  getPhaseColor,
  parseEvidenceStrength,
  type Category,
  type Phase,
  type CostLevel,
} from "@/lib/methods-data";

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<Phase[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<CostLevel[]>([]);
  const [selectedEvidence, setSelectedEvidence] = useState<number[]>([]);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [hasReachedTheory, setHasReachedTheory] = useState(false);

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedPhases.length > 0 ||
    selectedCosts.length > 0 ||
    selectedEvidence.length > 0;

  function toggleCategory(cat: Category) {
    posthog.capture("method_filter_changed", { filter_type: "category", filter_value: cat, page_path: window.location.pathname });
    setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  }

  function togglePhase(phase: Phase) {
    posthog.capture("method_filter_changed", { filter_type: "phase", filter_value: phase, page_path: window.location.pathname });
    setSelectedPhases((prev) => (prev.includes(phase) ? prev.filter((p) => p !== phase) : [...prev, phase]));
  }

  function toggleCost(cost: CostLevel) {
    setSelectedCosts((prev) => (prev.includes(cost) ? prev.filter((c) => c !== cost) : [...prev, cost]));
  }

  function toggleEvidence(level: number) {
    setSelectedEvidence((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]));
  }

  function clearFilters() {
    posthog.capture("method_filter_cleared", { page_path: window.location.pathname });
    setSelectedCategories([]);
    setSelectedPhases([]);
    setSelectedCosts([]);
    setSelectedEvidence([]);
    setSearchQuery("");
  }

  function handleAnchorJump() {
    setFiltersExpanded(false);
  }

  const filteredMethods = useMemo(() => {
    return methods.filter((method) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const searchableText = [
          method.name,
          ...method.categories,
          method.phase,
          method.descriptionShort,
          method.descriptionFull,
          method.evidenceDetail,
          method.cost,
          method.practicalApplication,
        ]
          .join(" ")
          .toLowerCase();
        if (!searchableText.includes(q)) return false;
      }
      if (selectedCategories.length > 0 && !method.categories.some((cat) => selectedCategories.includes(cat))) {
        return false;
      }
      if (selectedPhases.length > 0 && !selectedPhases.includes(method.phase)) return false;
      if (selectedCosts.length > 0 && !selectedCosts.includes(method.costLevel)) return false;
      if (selectedEvidence.length > 0 && method.evidenceStrength !== "n/a") {
        const evidenceNum = parseEvidenceStrength(method.evidenceStrength);
        if (evidenceNum === null || !selectedEvidence.includes(evidenceNum)) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategories, selectedPhases, selectedCosts, selectedEvidence]);

  const heroMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  const revealMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut" as const },
      };

  const heroNavButtonClass =
    "inline-flex min-h-[4rem] min-w-[11rem] items-center justify-center rounded-2xl border border-black/35 text-black bg-white/25 px-5 sm:px-6 py-2.5 sm:py-3 text-[clamp(1rem,1.2vw,1.25rem)] font-semibold leading-tight hover:bg-white/40 transition-colors";

  useEffect(() => {
    if (hasReachedTheory) return;

    const checkTheoryReached = () => {
      const theorySection = document.getElementById("theory");
      if (!theorySection) return;
      const theoryTop = theorySection.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY >= theoryTop - 24) setHasReachedTheory(true);
    };

    checkTheoryReached();
    window.addEventListener("scroll", checkTheoryReached, { passive: true });
    window.addEventListener("resize", checkTheoryReached);
    window.addEventListener("hashchange", checkTheoryReached);
    return () => {
      window.removeEventListener("scroll", checkTheoryReached);
      window.removeEventListener("resize", checkTheoryReached);
      window.removeEventListener("hashchange", checkTheoryReached);
    };
  }, [hasReachedTheory]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: [
          "radial-gradient(ellipse 85% 85% at 12% 18%, #D2646E 0%, transparent 52%)",
          "radial-gradient(ellipse 55% 55% at 90% 10%, #EAD5F8 0%, transparent 48%)",
          "radial-gradient(ellipse 70% 70% at 50% 55%, #B991C8 0%, transparent 62%)",
          "radial-gradient(ellipse 75% 75% at 6% 92%, #7B3585 0%, transparent 52%)",
          "radial-gradient(ellipse 50% 50% at 80% 80%, #C490CE 0%, transparent 55%)",
          "#C39BD2",
        ].join(", "),
        backgroundAttachment: "fixed",
      }}
    >
      <section className="relative min-h-screen flex items-start sm:items-center text-black px-6 sm:px-12 pt-14 sm:pt-10 pb-8 sm:pb-10">
        <motion.div className="max-w-6xl mx-auto w-full space-y-7 sm:space-y-8" {...heroMotion}>
          <h1
            className="font-bold leading-[0.95] tracking-tight text-black"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.35rem, 6.2vw, 4.6rem)",
            }}
            data-testid="text-page-title"
          >
            Assumption Tests Toolbox
          </h1>

          <div className="space-y-3 text-black max-w-5xl">
            <p
              className="text-[clamp(1.2rem,2.3vw,1.95rem)] leading-snug font-semibold text-black/95"
              data-testid="text-subtitle"
            >
              Most teams overuse a few familiar test methods and miss better options.
            </p>
            <p className="text-[clamp(1rem,1.65vw,1.35rem)] leading-relaxed font-medium text-black/85 max-w-4xl">
              The result is weak evidence; shallow problem understanding; failure to detect hidden needs. This page
              (for humans) and skill (for agents) help you get better at assumption testing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <motion.a
              href="#theory"
              onClick={handleAnchorJump}
              className={heroNavButtonClass}
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="flex flex-col items-center gap-0.5">
                <span>Explore theory</span>
                <span className="text-[0.72rem] sm:text-xs font-medium text-black/65">Assumption Testing 101</span>
              </span>
            </motion.a>
            <motion.a
              href="#method-database"
              onClick={handleAnchorJump}
              className={heroNavButtonClass}
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="flex flex-col items-center gap-0.5">
                <span>Browse 45 test methods</span>
                <span className="text-[0.72rem] sm:text-xs font-medium text-black/65">
                  Learn strengths and weaknesses of each method
                </span>
              </span>
            </motion.a>
            <motion.a
              href="#agent-pack"
              onClick={handleAnchorJump}
              className={heroNavButtonClass}
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="flex flex-col items-center gap-0.5">
                <span>Download agent skill</span>
                <span className="text-[0.72rem] sm:text-xs font-medium text-black/65">Use with your AI workflow</span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="theory" className="scroll-mt-20">
          <MindMapSection />
        </section>

        <section id="method-database" className="mt-8 pt-12 border-t border-black/15 scroll-mt-24">
          <motion.h2
            className="mb-8 font-bold leading-tight tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            {...revealMotion}
          >
            Test method database
          </motion.h2>

          <div className="sticky top-2 z-40 backdrop-blur-md bg-white/35 border border-black/10 rounded-xl pb-4 pt-4 -mx-2 px-2 sm:-mx-4 sm:px-4 lg:-mx-6 lg:px-6 mb-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="relative w-full sm:flex-1 sm:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <label htmlFor="search-methods" className="sr-only">
                    Search methods
                  </label>
                  <Input
                    id="search-methods"
                    type="search"
                    placeholder="Search methods..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value.length >= 3) {
                        posthog.capture("method_search_used", {
                          query_length: e.target.value.length,
                          page_path: window.location.pathname,
                        });
                      }
                    }}
                    className="pl-9"
                    data-testid="input-search"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="default"
                    className="flex-1 sm:flex-none"
                    onClick={() => setFiltersExpanded(!filtersExpanded)}
                    aria-expanded={filtersExpanded}
                    data-testid="button-toggle-filters"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className="ml-1.5 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {selectedCategories.length + selectedPhases.length + selectedCosts.length + selectedEvidence.length}
                      </span>
                    )}
                    {filtersExpanded ? <ChevronUp className="h-3.5 w-3.5 ml-1" /> : <ChevronDown className="h-3.5 w-3.5 ml-1" />}
                  </Button>
                  {(hasActiveFilters || searchQuery) && (
                    <Button
                      variant="ghost"
                      size="default"
                      className="h-9 px-2 sm:px-3 text-xs font-medium text-black/70 hover:text-black hover:bg-transparent underline underline-offset-2"
                      onClick={clearFilters}
                      data-testid="button-clear-filters"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              {filtersExpanded && (
                <div className="space-y-3 pt-2 pb-1 animate-in slide-in-from-top-2 duration-200" role="group" aria-label="Filter options">
                  <div role="group" aria-label="Filter by category">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Category</span>
                    <div className="flex flex-wrap gap-1.5">
                      {categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant={selectedCategories.includes(cat) ? "default" : "outline"}
                          className={`cursor-pointer select-none no-default-active-elevate ${selectedCategories.includes(cat) ? getCategoryColor(cat) : ""}`}
                          role="checkbox"
                          aria-checked={selectedCategories.includes(cat)}
                          onClick={() => toggleCategory(cat)}
                          data-testid={`filter-category-${slugify(cat)}`}
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-label="Filter by phase">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Phase</span>
                    <div className="flex flex-wrap gap-1.5">
                      {phases.map((phase) => (
                        <Badge
                          key={phase}
                          variant={selectedPhases.includes(phase) ? "default" : "outline"}
                          className={`cursor-pointer select-none no-default-active-elevate ${selectedPhases.includes(phase) ? getPhaseColor(phase) : ""}`}
                          role="checkbox"
                          aria-checked={selectedPhases.includes(phase)}
                          onClick={() => togglePhase(phase)}
                          data-testid={`filter-phase-${slugify(phase)}`}
                        >
                          {phase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-results-count">
            Showing <span className="font-semibold text-foreground">{filteredMethods.length}</span> of {methods.length} methods
          </p>

          {filteredMethods.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-lg font-semibold mb-1" data-testid="text-no-results">
                No methods found
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={clearFilters} data-testid="button-clear-no-results">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMethods.map((method) => (
                <MethodCard key={method.id} method={method} />
              ))}
            </div>
          )}
        </section>
      </main>

      <section id="agent-pack" className="mt-12 pt-12 border-t border-black/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="mb-4 font-bold leading-tight tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            {...revealMotion}
          >
            Agent content pack + skill
          </motion.h2>
          <motion.div className="rounded-xl border border-black/10 bg-white/30 backdrop-blur-sm p-4 sm:p-6 space-y-3" {...revealMotion}>
            <a
              href="/downloads/assumptions-toolbox-agent-pack.zip"
              download
              onClick={() => posthog.capture("agent_skill_download_clicked", { page_path: window.location.pathname })}
              className="inline-flex items-center rounded-md border border-black/20 bg-white/70 px-3 py-2 text-sm font-medium text-black hover:bg-white transition-colors"
            >
              Download pack (.zip)
            </a>
            <p className="text-sm text-black/80 leading-relaxed">
              To import into Claude Code, give your agent the entire extracted folder and ask it to install the skill for your project or globally.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="mt-20 border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-black/85 mb-2">
            New here? Start with{" "}
            <a href="#theory" onClick={handleAnchorJump} className="underline text-black/90 hover:text-black">
              Explore theory
            </a>
            .
          </p>
          <p className="text-sm text-black/85">
            Assumptions Toolbox by Dr. Else van der Berg. Want more?{" "}
            <a
              href="https://www.linkedin.com/in/dr-else-van-der-berg-42b8b6a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black/90 hover:text-black"
            >
              LinkedIn
            </a>{" "}
            ;{" "}
            <a
              href="https://elsevanderberg.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black/90 hover:text-black"
            >
              Substack
            </a>
          </p>
        </div>
      </footer>

      <FeedbackWidget visible={hasReachedTheory} />
    </div>
  );
}
