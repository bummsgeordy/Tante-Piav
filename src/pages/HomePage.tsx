import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
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
import { defaultFilters, filterCauses } from "../utils/filterCauses";
import { getSearchSuggestions } from "../utils/searchSuggestions";
import { searchCauses } from "../utils/searchCauses";

interface HomePageProps {
  query: string;
  filters: CauseFilters;
  onQueryChange: (query: string) => void;
  onFiltersChange: (filters: CauseFilters) => void;
  onSelectCause: (cause: Cause) => void;
  onSelectSymptom: (entry: SymptomEntry) => void;
}

export function HomePage({
  query,
  filters,
  onQueryChange,
  onFiltersChange,
  onSelectCause,
  onSelectSymptom
}: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<PiavCategory>(categories[0].id);
  const [isAcronymCollapsed, setIsAcronymCollapsed] = useState(false);
  const [expandedCategoryIds, setExpandedCategoryIds] = useState<Set<PiavCategory>>(() => new Set());
  const deferredQuery = useDeferredValue(query);
  const activeFilterCount = getActiveFilterCount(filters);
  const hasActiveSearchContext = deferredQuery.trim().length > 0 || activeFilterCount > 0;

  const visibleCauses = useMemo(() => {
    const searched = searchCauses(causes, deferredQuery);
    return sortByClinicalPriority(filterCauses(searched, filters));
  }, [deferredQuery, filters]);

  const causesByCategory = useMemo(() => {
    const grouped = new Map<PiavCategory, Cause[]>();
    categories.forEach((category) => grouped.set(category.id, []));
    visibleCauses.forEach((cause) => {
      grouped.get(cause.category)?.push(cause);
    });
    return grouped;
  }, [visibleCauses]);

  const suggestions = useMemo(() => getSearchSuggestions(deferredQuery), [deferredQuery]);
  const autoExpandMatchingCategories = hasActiveSearchContext && visibleCauses.length <= 80;

  useEffect(() => {
    const headerHeight = getHeaderHeight();
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const category = visibleEntries[0]?.target.getAttribute("data-category-id");
        if (category) {
          setActiveCategory(category as PiavCategory);
        }
      },
      {
        root: null,
        rootMargin: `-${headerHeight + 72}px 0px -45% 0px`,
        threshold: [0, 0.08, 0.2, 0.45]
      }
    );

    categories.forEach((category) => {
      const section = document.getElementById(`section-${category.id}`);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [visibleCauses.length]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const observeSentinel = () => {
      observer?.disconnect();
      const sentinel = document.getElementById("acronym-nav-collapse-sentinel");
      if (!sentinel) {
        return;
      }

      const headerHeight = getHeaderHeight();
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsAcronymCollapsed(!entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: `-${headerHeight + 8}px 0px 0px 0px`,
          threshold: 0
        }
      );
      observer.observe(sentinel);
    };

    observeSentinel();
    window.addEventListener("resize", observeSentinel);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeSentinel);
    };
  }, []);

  const scrollToCategory = (category: PiavCategory) => {
    setActiveCategory(category);
    setExpandedCategoryIds((current) => new Set([...current, category]));
    window.setTimeout(() => {
      document
        .getElementById(`section-${category}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategoryIds((current) => {
      const next = new Set(current);
      const typedCategory = category as PiavCategory;
      if (next.has(typedCategory)) {
        next.delete(typedCategory);
      } else {
        next.add(typedCategory);
      }
      return next;
    });
  };

  const expandAllCategories = () => {
    setExpandedCategoryIds(new Set(categories.map((category) => category.id)));
  };

  const collapseAllCategories = () => {
    setExpandedCategoryIds(new Set());
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
              onSelect={scrollToCategory}
            />
            <div aria-hidden="true" className="h-px" id="acronym-nav-collapse-sentinel" />
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

          <GroupedCauseList
            autoExpandMatchingCategories={autoExpandMatchingCategories}
            categories={categories}
            causesByCategory={causesByCategory}
            expandedCategoryIds={expandedCategoryIds}
            onCollapseAll={collapseAllCategories}
            onExpandAll={expandAllCategories}
            onSelectCause={onSelectCause}
            onSelectSymptom={onSelectSymptom}
            onToggleCategory={toggleCategory}
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

function getHeaderHeight() {
  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--app-header-height");
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 96;
}
