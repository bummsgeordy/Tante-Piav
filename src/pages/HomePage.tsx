import { useEffect, useMemo, useState } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
import { AcronymList } from "../components/AcronymList";
import { FilterPanel } from "../components/FilterPanel";
import { GroupedCauseList } from "../components/GroupedCauseList";
import { SearchBar } from "../components/SearchBar";
import { SearchContextBar } from "../components/SearchContextBar";
import { StickyAcronymRail } from "../components/StickyAcronymRail";
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
      <section className="border-b border-clinical-line bg-clinical-surface" id="app-start">
        <div className="mx-auto grid max-w-7xl gap-3 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(360px,0.95fr)_minmax(320px,1.05fr)] lg:px-6">
          <div className="grid gap-3">
            <SearchBar
              onQueryChange={onQueryChange}
              onSuggestionSelect={selectSuggestion}
              onSubmit={focusResults}
              query={query}
              resultCount={visibleCauses.length}
              suggestions={suggestions}
            />
            <AcronymList
              activeCategory={activeCategory}
              categories={categories}
              onSelect={scrollToCategory}
            />
          </div>

          <div className="grid gap-3 lg:grid-cols-[250px_1fr]">
            <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
            <section className="rounded-lg border border-clinical-line bg-white p-3 shadow-sm">
              <h1 className="text-lg font-bold text-clinical-ink">TANTE PIAV</h1>
              <p className="mt-1 text-sm leading-5 text-clinical-muted">
                Vollständige Übersicht nach ätiologischer Struktur. Die Buchstaben
                links springen zu den Abschnitten; Suche und Filter schränken die
                sichtbaren Ursachen ein.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-clinical-muted">
                <span className="rounded-full bg-clinical-surface px-2.5 py-1">
                  {visibleCauses.length} von {causes.length} Ursachen
                </span>
                {activeFilterCount > 0 ? (
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-900">
                    {activeFilterCount} aktive Filter
                  </span>
                ) : null}
                {query.trim() ? (
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-clinical-accent">
                    Suche aktiv
                  </span>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
        <StickyAcronymRail
          activeCategory={activeCategory}
          categories={categories}
          onSelect={scrollToCategory}
          variant="mobile"
        />
      </div>

      <section
        aria-live="polite"
        className="mx-auto flex max-w-7xl gap-4 px-3 py-3 sm:px-5 lg:px-6"
        id="causes"
        tabIndex={-1}
      >
        <StickyAcronymRail
          activeCategory={activeCategory}
          categories={categories}
          onSelect={scrollToCategory}
          variant="desktop"
        />

        <div className="min-w-0 flex-1">
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
    filters.category !== "all",
    filters.specialty !== "all",
    filters.frequency !== "all",
    filters.urgency !== "all",
    filters.redFlagsOnly
  ].filter(Boolean).length;
}
