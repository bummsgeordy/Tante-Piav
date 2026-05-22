import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSubmit: () => void;
  onSuggestionSelect: (suggestion: string) => void;
  resultCount?: number;
  suggestions?: string[];
}

export function SearchBar({
  query,
  onQueryChange,
  onSubmit,
  onSuggestionSelect,
  suggestions = [],
  resultCount
}: SearchBarProps) {
  const showSuggestions = query.trim().length > 0 && suggestions.length > 0;

  return (
    <form
      className="block"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      role="search"
    >
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <label className="block text-sm font-semibold text-clinical-ink" htmlFor="cause-search">
          Suche
        </label>
        {typeof resultCount === "number" ? (
          <span className="text-xs font-semibold text-clinical-muted">
            {resultCount} Treffer
          </span>
        ) : null}
      </div>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-clinical-muted"
          size={18}
        />
        <input
          className="w-full rounded-lg border border-clinical-line bg-white py-2.5 pl-10 pr-20 text-base text-clinical-ink outline-none transition placeholder:text-slate-400 focus:border-clinical-accent focus:ring-4 focus:ring-teal-100"
          id="cause-search"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Symptom, Befund, Ursache ..."
          type="search"
          value={query}
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-clinical-accent px-2.5 py-1.5 text-xs font-bold text-white hover:bg-clinical-accentDark"
          type="submit"
        >
          Enter
        </button>
        {query ? (
          <button
            aria-label="Suche löschen"
            className="absolute right-16 top-1/2 -translate-y-1/2 rounded-md p-1 text-clinical-muted hover:bg-slate-100"
            onClick={() => onQueryChange("")}
            type="button"
          >
            <X aria-hidden="true" size={18} />
          </button>
        ) : null}
      </div>
      {showSuggestions ? (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {suggestions.map((suggestion) => (
            <button
              className="rounded-full border border-clinical-line bg-white px-2.5 py-1 text-xs font-medium text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
              key={suggestion}
              onClick={() => onSuggestionSelect(suggestion)}
              type="button"
            >
              {suggestion}
            </button>
          ))}
        </div>
      ) : null}
    </form>
  );
}
