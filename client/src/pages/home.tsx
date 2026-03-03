import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MethodCard } from "@/components/method-card";
import {
  methods,
  categories,
  phases,
  costLevels,
  getCategoryColor,
  getPhaseColor,
  type Category,
  type Phase,
  type CostLevel,
} from "@/lib/methods-data";
import { Search, X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<Phase[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<CostLevel[]>([]);
  const [selectedEvidence, setSelectedEvidence] = useState<number[]>([]);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedPhases.length > 0 ||
    selectedCosts.length > 0 ||
    selectedEvidence.length > 0;

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }
  function togglePhase(phase: Phase) {
    setSelectedPhases((prev) =>
      prev.includes(phase) ? prev.filter((p) => p !== phase) : [...prev, phase]
    );
  }
  function toggleCost(cost: CostLevel) {
    setSelectedCosts((prev) =>
      prev.includes(cost) ? prev.filter((c) => c !== cost) : [...prev, cost]
    );
  }
  function toggleEvidence(level: number) {
    setSelectedEvidence((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  }
  function clearFilters() {
    setSelectedCategories([]);
    setSelectedPhases([]);
    setSelectedCosts([]);
    setSelectedEvidence([]);
    setSearchQuery("");
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
      if (
        selectedCategories.length > 0 &&
        !method.categories.some((cat) => selectedCategories.includes(cat))
      )
        return false;
      if (
        selectedPhases.length > 0 &&
        !selectedPhases.includes(method.phase)
      )
        return false;
      if (
        selectedCosts.length > 0 &&
        !selectedCosts.includes(method.costLevel)
      )
        return false;
      if (selectedEvidence.length > 0) {
        const evidenceNum =
          typeof method.evidenceStrength === "number"
            ? method.evidenceStrength
            : parseInt(String(method.evidenceStrength).match(/(\d+)/)?.[1] || "0", 10);
        if (!selectedEvidence.includes(evidenceNum)) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategories, selectedPhases, selectedCosts, selectedEvidence]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-[9999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-1 mb-5">
            <h1
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              data-testid="text-page-title"
            >
              Assumption Test Methods
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              A catalog of 42 research methods for business idea discovery &
              validation. Based on the work of Dr. Else van der Berg.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <label htmlFor="search-methods" className="sr-only">
                  Search methods
                </label>
                <Input
                  id="search-methods"
                  type="search"
                  placeholder="Search methods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search"
                />
              </div>
              <Button
                variant="outline"
                size="default"
                onClick={() => setFiltersExpanded(!filtersExpanded)}
                aria-expanded={filtersExpanded}
                data-testid="button-toggle-filters"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-1.5 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {selectedCategories.length +
                      selectedPhases.length +
                      selectedCosts.length +
                      selectedEvidence.length}
                  </span>
                )}
                {filtersExpanded ? (
                  <ChevronUp className="h-3.5 w-3.5 ml-1" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 ml-1" />
                )}
              </Button>
              {(hasActiveFilters || searchQuery) && (
                <Button
                  variant="ghost"
                  size="default"
                  onClick={clearFilters}
                  data-testid="button-clear-filters"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            {filtersExpanded && (
              <div
                className="space-y-3 pt-2 pb-1 animate-in slide-in-from-top-2 duration-200"
                role="group"
                aria-label="Filter options"
              >
                <div role="group" aria-label="Filter by category">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Category
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => (
                      <Badge
                        key={cat}
                        variant={selectedCategories.includes(cat) ? "default" : "outline"}
                        className={`cursor-pointer select-none no-default-active-elevate ${
                          selectedCategories.includes(cat)
                            ? getCategoryColor(cat)
                            : ""
                        }`}
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
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Phase
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {phases.map((phase) => (
                      <Badge
                        key={phase}
                        variant={selectedPhases.includes(phase) ? "default" : "outline"}
                        className={`cursor-pointer select-none no-default-active-elevate ${
                          selectedPhases.includes(phase)
                            ? getPhaseColor(phase)
                            : ""
                        }`}
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

                <div className="flex flex-wrap gap-6">
                  <div role="group" aria-label="Filter by cost">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Cost
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {costLevels.map((cost) => (
                        <Badge
                          key={cost}
                          variant={selectedCosts.includes(cost) ? "secondary" : "outline"}
                          className="cursor-pointer select-none no-default-active-elevate"
                          role="checkbox"
                          aria-checked={selectedCosts.includes(cost)}
                          onClick={() => toggleCost(cost)}
                          data-testid={`filter-cost-${slugify(cost)}`}
                        >
                          {cost}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-label="Filter by evidence strength">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                      Evidence Strength
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <Badge
                          key={level}
                          variant={selectedEvidence.includes(level) ? "default" : "outline"}
                          className="cursor-pointer select-none no-default-active-elevate"
                          role="checkbox"
                          aria-checked={selectedEvidence.includes(level)}
                          onClick={() => toggleEvidence(level)}
                          data-testid={`filter-evidence-${level}`}
                        >
                          {level}/5
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-results-count"
          >
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredMethods.length}
            </span>{" "}
            of {methods.length} methods
          </p>
        </div>

        {filteredMethods.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-1" data-testid="text-no-results">
              No methods found
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              variant="outline"
              onClick={clearFilters}
              data-testid="button-clear-no-results"
            >
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
      </main>

      <footer className="border-t py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground text-center">
            Based on "Business Idea Discovery & Validation" by Dr. Else van der
            Berg (Value Rebels).
          </p>
        </div>
      </footer>
    </div>
  );
}
