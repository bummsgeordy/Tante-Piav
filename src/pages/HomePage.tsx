import { useMemo } from "react";
import { categories } from "../data/categories";
import { causes } from "../data/causes";
import type { Cause, CauseFilters, PiavCategory } from "../types/medical";
import { filterCauses } from "../utils/filterCauses";
import { searchCauses } from "../utils/searchCauses";
import { AttributionBox } from "../components/AttributionBox";
import { CategoryCard } from "../components/CategoryCard";
import { CauseCard } from "../components/CauseCard";
import { DisclaimerBox } from "../components/DisclaimerBox";
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

  return (
    <main>
      <section className="border-b border-clinical-line bg-clinical-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clinical-accent">
              Differentialdiagnosen strukturiert mitdenken
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-clinical-ink sm:text-5xl">
              TANTE PIAV als schnelle klinische Gedankenstütze.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-clinical-muted">
              Die App ordnet Ursachen entlang der ätiologischen Hauptstruktur
              Trauma, Autoimmun, Neoplastisch, Toxisch-medikamentös,
              Endokrin-metabolisch, Psychosomatisch/psychiatrisch, Infektion,
              Angeboren und Vaskulär/kardiovaskulär. Fachgebiete bleiben
              eine zweite Filterachse.
            </p>
            <div className="mt-6">
              <SearchBar query={query} onQueryChange={onQueryChange} />
            </div>
          </div>
          <div className="grid gap-4">
            <AttributionBox />
            <DisclaimerBox />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-clinical-ink">TANTE-PIAV-Kategorien</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-clinical-muted">
              Häufige und klinisch relevante Ursachen stehen in den Listen
              zuerst. Seltenere Ursachen sind im Datenmodell vorbereitet.
            </p>
          </div>
          {filters.category !== "all" ? (
            <ExportButtonPlaceholder category={filters.category} />
          ) : null}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              category={category}
              count={categoryCounts[category.id]}
              key={category.id}
              onSelect={selectCategory}
            />
          ))}
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8"
        id="causes"
      >
        <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
        <div>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-clinical-ink">Ursachen</h2>
              <p className="mt-1 text-sm text-clinical-muted">
                {visibleCauses.length} von {causes.length} Ursachen sichtbar
              </p>
            </div>
          </div>

          {visibleCauses.length > 0 ? (
            <div className="grid gap-4 xl:grid-cols-2">
              {visibleCauses.map((cause) => (
                <CauseCard cause={cause} key={cause.id} onSelect={onSelectCause} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-clinical-line bg-white p-6 text-clinical-muted">
              Keine Treffer. Suche oder Filter anpassen.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
