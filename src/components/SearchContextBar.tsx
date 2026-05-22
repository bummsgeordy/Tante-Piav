interface SearchContextBarProps {
  activeFilterCount: number;
  query: string;
  resultCount: number;
  totalCount: number;
  onClear: () => void;
}

export function SearchContextBar({
  activeFilterCount,
  query,
  resultCount,
  totalCount,
  onClear
}: SearchContextBarProps) {
  if (!query.trim() && activeFilterCount === 0) {
    return null;
  }

  const parts = [
    query.trim() ? `Suche: ${query.trim()}` : "Kein Suchbegriff",
    `${resultCount} von ${totalCount} Ursachen`,
    activeFilterCount > 0 ? `${activeFilterCount} aktive Filter` : null
  ].filter(Boolean);

  return (
    <div className="sticky top-[226px] z-10 rounded-lg border border-clinical-line bg-white/95 px-3 py-2 text-sm shadow-sm backdrop-blur sm:top-[178px] lg:top-20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-clinical-ink">{parts.join(" · ")}</p>
        <button
          className="self-start rounded-md border border-clinical-line px-2.5 py-1 text-xs font-bold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent sm:self-auto"
          onClick={onClear}
          type="button"
        >
          Suche und Filter löschen
        </button>
      </div>
    </div>
  );
}
