import { useMemo, useState } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
import { filterCauses } from "../utils/filterCauses";
import { searchCauses } from "../utils/searchCauses";
import { AcronymList } from "../components/AcronymList";
import { CauseCard } from "../components/CauseCard";
import { FilterPanel } from "../components/FilterPanel";
import { SearchBar } from "../components/SearchBar";
import { defaultFilters } from "../utils/filterCauses";
import { getSearchSuggestions } from "../utils/searchSuggestions";
import { getCategoryAcronym, getCategoryLabel } from "../utils/getCategoryLabel";

type HomeView = "overview" | "category" | "search";

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
  const [view, setView] = useState<HomeView>("overview");
  const [selectedCategory, setSelectedCategory] = useState<PiavCategory | null>(null);

  const visibleCauses = useMemo(() => {
    const searched = searchCauses(causes, query);
    return filterCauses(searched, filters);
  }, [filters, query]);

  const orderedVisibleCauses = useMemo(
    () => sortByClinicalPriority(visibleCauses),
    [visibleCauses]
  );

  const selectedCategoryInfo = selectedCategory
    ? categories.find((category) => category.id === selectedCategory)
    : undefined;

  const suggestions = useMemo(() => getSearchSuggestions(query), [query]);

  const selectCategory = (category: PiavCategory) => {
    setView("category");
    setSelectedCategory(category);
    onQueryChange("");
    onFiltersChange({ ...defaultFilters, category });
    window.setTimeout(() => {
      document.getElementById("causes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const showOverview = () => {
    setView("overview");
    setSelectedCategory(null);
    onQueryChange("");
    onFiltersChange(defaultFilters);
    window.setTimeout(() => {
      document.getElementById("app-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const focusResults = () => {
    setView(query.trim() ? "search" : view);
    setSelectedCategory(null);
    window.setTimeout(() => {
      const results = document.getElementById("causes");
      results?.scrollIntoView({ behavior: "smooth", block: "start" });
      results?.focus({ preventScroll: true });
    }, 0);
  };

  const selectSuggestion = (suggestion: string) => {
    setView("search");
    setSelectedCategory(null);
    onQueryChange(suggestion);
    window.setTimeout(() => {
      const results = document.getElementById("causes");
      results?.scrollIntoView({ behavior: "smooth", block: "start" });
      results?.focus({ preventScroll: true });
    }, 0);
  };

  const handleQueryChange = (nextQuery: string) => {
    onQueryChange(nextQuery);
    setSelectedCategory(null);
    setView(nextQuery.trim() ? "search" : "overview");
  };

  return (
    <main>
      <section className="border-b border-clinical-line bg-clinical-surface" id="app-start">
        <div className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:px-5 lg:grid-cols-[minmax(360px,0.92fr)_minmax(320px,1.08fr)] lg:px-6">
          <div className="grid gap-3">
            <SearchBar
              onQueryChange={handleQueryChange}
              onSuggestionSelect={selectSuggestion}
              onSubmit={focusResults}
              query={query}
              suggestions={suggestions}
              resultCount={visibleCauses.length}
            />
            <AcronymList
              activeCategory={filters.category}
              categories={categories}
              onSelect={selectCategory}
            />
          </div>

          <div className="grid gap-3 lg:grid-cols-[260px_1fr]">
            <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
            <section className="rounded-lg border border-clinical-line bg-white p-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h1 className="text-lg font-bold text-clinical-ink">Ein-Blick-Orientierung</h1>
                  <p className="text-xs text-clinical-muted">
                    Kategorie wählen, Suchbegriff eingeben, Red Flags prüfen.
                  </p>
                </div>
                {view !== "overview" ? (
                  <button
                    className="rounded-md border border-clinical-line px-2.5 py-1.5 text-sm font-semibold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
                    onClick={showOverview}
                    type="button"
                  >
                    Alle anzeigen
                  </button>
                ) : null}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center sm:grid-cols-5">
                <Metric label="Kategorien" value={categories.length} />
                <Metric label="Ursachen" value={causes.length} />
                <Metric label="Treffer" value={visibleCauses.length} />
                <Metric
                  label="Notfall"
                  value={visibleCauses.filter((cause) => cause.urgency === "notfall").length}
                />
                <Metric
                  label="Red Flags"
                  value={visibleCauses.filter((cause) => cause.hasMajorRedFlags).length}
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        aria-live="polite"
        className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:px-5 lg:px-6"
        id="causes"
        tabIndex={-1}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {view === "category" && selectedCategoryInfo ? (
              <>
                <p className="text-sm font-semibold text-clinical-accent">
                  {getCategoryAcronym(selectedCategoryInfo.id)} - {getCategoryLabel(selectedCategoryInfo.id)}
                </p>
                <h2 className="text-xl font-bold text-clinical-ink">
                  {selectedCategoryInfo.title}
                </h2>
                <p className="max-w-3xl text-sm leading-5 text-clinical-muted">
                  {selectedCategoryInfo.description}
                </p>
              </>
            ) : (
              <h2 className="text-xl font-bold text-clinical-ink">
                {view === "search" ? "Suchtreffer" : "Ursachen"}
              </h2>
            )}
            <p className="text-sm text-clinical-muted">
              {visibleCauses.length} von {causes.length} Ursachen sichtbar
            </p>
          </div>
          {view !== "overview" ? (
            <button
              className="rounded-md border border-clinical-line px-2.5 py-1.5 text-sm font-semibold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
              onClick={showOverview}
              type="button"
            >
              Zur Gesamtansicht
            </button>
          ) : null}
        </div>

        {orderedVisibleCauses.length > 0 ? (
          <div className="grid gap-3 xl:grid-cols-2">
            {orderedVisibleCauses.map((cause) => (
              <CauseCard cause={cause} key={cause.id} onSelect={onSelectCause} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-clinical-line bg-white p-5 text-clinical-muted">
            Keine Treffer. Suche oder Filter anpassen.
          </div>
        )}
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

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-clinical-line bg-clinical-surface px-2 py-2">
      <div className="text-lg font-black text-clinical-ink">{value}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-clinical-muted">
        {label}
      </div>
    </div>
  );
}
