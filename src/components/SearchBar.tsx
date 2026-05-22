import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-clinical-ink">
        Suche nach Beschwerde, Ursache, Fachgebiet, Red Flag oder Tag
      </span>
      <span className="relative block">
        <Search
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-clinical-muted"
          size={20}
        />
        <input
          className="w-full rounded-lg border border-clinical-line bg-white py-3 pl-11 pr-11 text-base text-clinical-ink outline-none transition placeholder:text-slate-400 focus:border-clinical-accent focus:ring-4 focus:ring-teal-100"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="z. B. Thoraxschmerz, Müdigkeit, Fieber, Hyponatriämie"
          type="search"
          value={query}
        />
        {query ? (
          <button
            aria-label="Suche löschen"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-clinical-muted hover:bg-slate-100"
            onClick={() => onQueryChange("")}
            type="button"
          >
            <X aria-hidden="true" size={18} />
          </button>
        ) : null}
      </span>
    </label>
  );
}
