import { useMemo } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
import { filterCauses } from "../utils/filterCauses";
import { searchCauses } from "../utils/searchCauses";
import { AcronymList } from "../components/AcronymList";
import { CauseCard } from "../components/CauseCard";
import { ExportButtonPlaceholder } from "../components/ExportButtonPlaceholder";
import { FilterPanel } from "../components/FilterPanel";
import { SearchBar } from "../components/SearchBar";

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
  const visibleCauses = useMemo(() => {
    const searched = searchCauses(causes, query);
    return filterCauses(searched, filters);
  }, [filters, query]);

  const categoryCounts = useMemo(
    () =>
      categories.reduce<Record<PiavCategory, number>>((accumulator, category) => {
        accumulator[category.id] = causes.filter((cause) => cause.category === category.id).length;
        return accumulator;
      }, {} as Record<PiavCategory, number>),
    []
  );

  const selectCategory = (category: PiavCategory) => {
    onFiltersChange({ ...filters, category });
    window.setTimeout(() => {
      document.getElementById("causes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const focusResults = () => {
    window.setTimeout(() => {
      const results = document.getElementById("causes");
      results?.scrollIntoView({ behavior: "smooth", block: "start" });
      results?.focus({ preventScroll: true });
    }, 0);
  };

  return (
    <main>
      <section className="border-b border-clinical-line bg-clinical-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:px-5 lg:grid-cols-[minmax(360px,0.92fr)_minmax(320px,1.08fr)] lg:px-6">
          <div className="grid gap-3">
            <SearchBar
              onQueryChange={onQueryChange}
              onSubmit={focusResults}
              query={query}
              resultCount={visibleCauses.length}
            />
            <AcronymList
              activeCategory={filters.category}
              categories={categories}
              counts={categoryCounts}
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
                {filters.category !== "all" ? (
                  <ExportButtonPlaceholder category={filters.category} />
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
            <h2 className="text-xl font-bold text-clinical-ink">Ursachen</h2>
            <p className="text-sm text-clinical-muted">
              {visibleCauses.length} von {causes.length} Ursachen sichtbar
            </p>
          </div>
          {filters.category !== "all" ? (
            <ExportButtonPlaceholder category={filters.category} />
          ) : null}
        </div>

        {visibleCauses.length > 0 ? (
          <div className="grid gap-3 xl:grid-cols-2">
            {visibleCauses.map((cause) => (
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
