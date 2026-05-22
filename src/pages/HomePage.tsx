import { useEffect, useMemo, useState } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
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

  const visibleCauses = useMemo(() => {
    const searched = searchCauses(causes, query);
    return sortByClinicalPriority(filterCauses(searched, filters));
  }, [filters, query]);

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
    const sections = categories
      .map((category) => document.getElementById(`section-${category.id}`))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const id = visibleEntry?.target.id.replace("section-", "") as PiavCategory | undefined;
        if (id) {
          setActiveCategory(id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

          <GroupedCauseList
            categories={categories}
            causesByCategory={causesByCategory}
            onSelectCause={onSelectCause}
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
