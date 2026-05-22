import { useEffect, useMemo, useState } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import { symptomEntries } from "../data/symptoms";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import {
  CollapsedAcronymRail,
  CollapsibleAcronymNav
} from "../components/CollapsibleAcronymNav";
import { FilterPanel } from "../components/FilterPanel";
import { GroupedCauseList } from "../components/GroupedCauseList";
import { SearchBar } from "../components/SearchBar";
import { SearchContextBar } from "../components/SearchContextBar";
import { SymptomCard } from "../components/SymptomCard";
import { SymptomDetail } from "../components/SymptomDetail";
import { defaultFilters, filterCauses } from "../utils/filterCauses";
import { getSearchSuggestions } from "../utils/searchSuggestions";
import { searchCauses } from "../utils/searchCauses";
import { searchSymptoms } from "../utils/searchSymptoms";

interface HomePageProps {
  query: string;
  filters: CauseFilters;
  onQueryChange: (query: string) => void;
  onFiltersChange: (filters: CauseFilters) => void;
  onSelectCause: (cause: Cause) => void;
}

export function HomePage({
  query,
  filters,
  onQueryChange,
  onFiltersChange,
  onSelectCause
}: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<PiavCategory>(categories[0].id);
  const [isAcronymCollapsed, setIsAcronymCollapsed] = useState(false);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string | null>(null);

  const visibleCauses = useMemo(() => {
    const searched = searchCauses(causes, query);
    return sortByClinicalPriority(filterCauses(searched, filters));
  }, [filters, query]);

  const visibleSymptoms = useMemo(() => searchSymptoms(symptomEntries, query), [query]);

  const selectedSymptom =
    visibleSymptoms.find((entry) => entry.id === selectedSymptomId) ??
    (query.trim() ? visibleSymptoms[0] : null);

  const causesByCategory = useMemo(() => {
    const grouped = new Map<PiavCategory, Cause[]>();
    categories.forEach((category) => grouped.set(category.id, []));
    visibleCauses.forEach((cause) => {
      grouped.get(cause.category)?.push(cause);
    });
    return grouped;
  }, [visibleCauses]);

  const suggestions = useMemo(() => getSearchSuggestions(query), [query]);
  const activeFilterCount = getActiveFilterCount(filters);

  useEffect(() => {
    let frame = 0;

    const updateActiveCategory = () => {
      frame = 0;
      const markerY = window.innerWidth < 1024 ? Math.min(420, window.innerHeight * 0.48) : 150;
      const sections = categories
        .map((category) => ({
          id: category.id,
          top: document.getElementById(`section-${category.id}`)?.getBoundingClientRect().top
        }))
        .filter((section): section is { id: PiavCategory; top: number } =>
          typeof section.top === "number"
        );

      const currentSection =
        sections
          .filter((section) => section.top <= markerY)
          .sort((a, b) => b.top - a.top)[0] ?? sections[0];

      if (currentSection) {
        setActiveCategory(currentSection.id);
      }
    };

    const scheduleUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveCategory);
    };

    updateActiveCategory();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [visibleCauses.length]);

  useEffect(() => {
    const collapseAt = 620;
    const expandAt = 500;
    let frame = 0;

    const updateCollapsedState = () => {
      frame = 0;
      const scrollY = window.scrollY;

      setIsAcronymCollapsed((current) => {
        if (scrollY >= collapseAt) {
          return true;
        }

        if (scrollY <= expandAt) {
          return false;
        }

        return current;
      });
    };

    const scheduleUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateCollapsedState);
    };

    updateCollapsedState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const scrollToCategory = (category: PiavCategory) => {
    setActiveCategory(category);
    document
      .getElementById(`section-${category}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectSymptom = (entry: SymptomEntry) => {
    setSelectedSymptomId(entry.id);
    window.setTimeout(() => {
      document
        .getElementById("symptom-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 0);
  };

  const focusResults = () => {
    window.setTimeout(() => {
      const results = document.getElementById("causes");
      results?.scrollIntoView({ behavior: "smooth", block: "start" });
      results?.focus({ preventScroll: true });
    }, 0);
  };

  const clearSearchAndFilters = () => {
    onQueryChange("");
    onFiltersChange(defaultFilters);
    setSelectedSymptomId(null);
    window.setTimeout(() => {
      document.getElementById("app-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const selectSuggestion = (suggestion: string) => {
    onQueryChange(suggestion);
    focusResults();
  };

  return (
    <main>
      <section
        className="overflow-hidden border-b border-clinical-line bg-clinical-surface"
        id="app-start"
      >
        <div className="mx-auto grid max-w-7xl gap-3 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(360px,0.85fr)_minmax(520px,1.15fr)] lg:px-6">
          <div className="grid gap-3 lg:relative">
            <SearchBar
              onQueryChange={onQueryChange}
              onSuggestionSelect={selectSuggestion}
              onSubmit={focusResults}
              query={query}
              resultCount={visibleCauses.length}
              suggestions={suggestions}
            />
            <CollapsibleAcronymNav
              activeCategory={activeCategory}
              categories={categories}
              isCollapsed={isAcronymCollapsed}
              onSelect={scrollToCategory}
            />
          </div>

          <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
        </div>
      </section>

      <section
        aria-live="polite"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-3 py-3 sm:px-5 lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-4 lg:px-6"
        id="causes"
        tabIndex={-1}
      >
        <div className="relative hidden lg:block">
          <CollapsedAcronymRail
            activeCategory={activeCategory}
            categories={categories}
            isVisible={isAcronymCollapsed}
            onSelect={scrollToCategory}
            variant="desktop"
          />
        </div>

        <div className="min-w-0 flex-1">
          <CollapsedAcronymRail
            activeCategory={activeCategory}
            categories={categories}
            isVisible={isAcronymCollapsed}
            onSelect={scrollToCategory}
            variant="mobile"
          />

          <SearchContextBar
            activeFilterCount={activeFilterCount}
            onClear={clearSearchAndFilters}
            query={query}
            resultCount={visibleCauses.length}
            totalCount={causes.length}
          />

          <section className="mb-3 rounded-lg border border-clinical-line bg-white p-2.5 shadow-sm">
            <header className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-clinical-ink">Symptome & Befunde</h2>
                <p className="text-sm leading-5 text-clinical-muted">
                  Symptomorientierte Einstiegsebene als Denkhilfe, fachlich zu prüfen.
                </p>
              </div>
              <span className="text-xs font-semibold text-clinical-muted">
                {visibleSymptoms.length} Einträge
              </span>
            </header>
            {visibleSymptoms.length > 0 ? (
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {visibleSymptoms.map((entry) => (
                  <SymptomCard
                    entry={entry}
                    isActive={selectedSymptom?.id === entry.id}
                    key={entry.id}
                    onSelect={selectSymptom}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-md bg-clinical-surface p-3 text-sm text-clinical-muted">
                Keine passenden Symptome oder Befunde für die aktuelle Suche.
              </p>
            )}

            {selectedSymptom ? (
              <div className="mt-2" id="symptom-detail">
                <SymptomDetail
                  entry={selectedSymptom}
                  onSelectCategory={scrollToCategory}
                  onSelectCause={onSelectCause}
                />
              </div>
            ) : null}
          </section>

          <GroupedCauseList
            categories={categories}
            causesByCategory={causesByCategory}
            onSelectCause={onSelectCause}
            onSelectSymptom={selectSymptom}
          />
        </div>
      </section>
    </main>
  );
}

const frequencyRank = {
  haeufig: 0,
  relevant: 1,
  selten: 2
};

function sortByClinicalPriority(items: Cause[]) {
  return items
    .map((cause, index) => ({ cause, index }))
    .sort((a, b) => {
      const frequencyDelta = frequencyRank[a.cause.frequency] - frequencyRank[b.cause.frequency];
      if (frequencyDelta !== 0) {
        return frequencyDelta;
      }
      return a.index - b.index;
    })
    .map((item) => item.cause);
}

function getActiveFilterCount(filters: CauseFilters) {
  return [
    filters.specialty !== "all",
    filters.frequency !== "all",
    filters.urgency !== "all"
  ].filter(Boolean).length;
}
