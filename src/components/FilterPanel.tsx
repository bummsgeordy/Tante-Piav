import { categories } from "../data/categories";
import type { CauseFilters, Frequency, PiavCategory, Urgency } from "../types/medical";
import { defaultFilters } from "../utils/filterCauses";
import { SpecialtyFilter } from "./SpecialtyFilter";

interface FilterPanelProps {
  filters: CauseFilters;
  onFiltersChange: (filters: CauseFilters) => void;
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const update = <K extends keyof CauseFilters>(key: K, value: CauseFilters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <aside className="rounded-lg border border-clinical-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-clinical-ink">Filter</h2>
        <button
          className="rounded-md px-2 py-1 text-sm font-medium text-clinical-accent hover:bg-teal-50"
          onClick={() => onFiltersChange(defaultFilters)}
          type="button"
        >
          Zuruecksetzen
        </button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <label className="block text-sm font-medium text-clinical-ink">
          TANTE-PIAV-Kategorie
          <select
            className="mt-1 w-full rounded-md border border-clinical-line bg-white px-3 py-2 text-sm text-clinical-text outline-none focus:border-clinical-accent focus:ring-2 focus:ring-teal-100"
            onChange={(event) => update("category", event.target.value as PiavCategory | "all")}
            value={filters.category}
          >
            <option value="all">Alle Kategorien</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.acronym} - {category.title}
              </option>
            ))}
          </select>
        </label>

        <SpecialtyFilter
          onChange={(value) => update("specialty", value)}
          value={filters.specialty}
        />

        <label className="block text-sm font-medium text-clinical-ink">
          Haeufigkeit
          <select
            className="mt-1 w-full rounded-md border border-clinical-line bg-white px-3 py-2 text-sm text-clinical-text outline-none focus:border-clinical-accent focus:ring-2 focus:ring-teal-100"
            onChange={(event) => update("frequency", event.target.value as Frequency | "all")}
            value={filters.frequency}
          >
            <option value="all">Alle</option>
            <option value="haeufig">haeufig</option>
            <option value="relevant">relevant</option>
            <option value="selten">selten</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-clinical-ink">
          Dringlichkeit
          <select
            className="mt-1 w-full rounded-md border border-clinical-line bg-white px-3 py-2 text-sm text-clinical-text outline-none focus:border-clinical-accent focus:ring-2 focus:ring-teal-100"
            onChange={(event) => update("urgency", event.target.value as Urgency | "all")}
            value={filters.urgency}
          >
            <option value="all">Alle</option>
            <option value="ambulant">ambulant</option>
            <option value="zeitnah">zeitnah</option>
            <option value="notfall">Notfall</option>
          </select>
        </label>

        <label className="flex items-start gap-3 rounded-md border border-red-100 bg-red-50 p-3 text-sm text-red-900">
          <input
            checked={filters.redFlagsOnly}
            className="mt-1 h-4 w-4 rounded border-red-300 text-red-700 focus:ring-red-200"
            onChange={(event) => update("redFlagsOnly", event.target.checked)}
            type="checkbox"
          />
          <span>
            <span className="block font-semibold">Nur Ursachen mit relevanten Red Flags</span>
            <span className="mt-1 block text-red-800">
              MVP-Filter fuer notfallnahe oder zeitkritische Konstellationen.
            </span>
          </span>
        </label>
      </div>
    </aside>
  );
}
