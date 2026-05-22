import type { CauseFilters, Frequency, Urgency } from "../types/medical";
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
    <aside className="rounded-lg border border-clinical-line bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-clinical-ink">Filter</h2>
        <button
          className="rounded-md px-2 py-1 text-sm font-medium text-clinical-accent hover:bg-teal-50"
          onClick={() => onFiltersChange(defaultFilters)}
          type="button"
        >
          Zurücksetzen
        </button>
      </div>

      <div className="mt-2 grid gap-2 md:grid-cols-3">
        <SpecialtyFilter
          onChange={(value) => update("specialty", value)}
          value={filters.specialty}
        />

        <label className="block text-sm font-medium text-clinical-ink">
          Häufigkeit
          <select
            className="mt-1 w-full rounded-md border border-clinical-line bg-white px-3 py-2 text-sm text-clinical-text outline-none focus:border-clinical-accent focus:ring-2 focus:ring-teal-100"
            onChange={(event) => update("frequency", event.target.value as Frequency | "all")}
            value={filters.frequency}
          >
            <option value="all">Alle</option>
            <option value="haeufig">häufig</option>
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
      </div>
    </aside>
  );
}
