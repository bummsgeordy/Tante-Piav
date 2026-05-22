import type { Category, Cause } from "../types/medical";
import { CauseCard } from "./CauseCard";

interface GroupedCauseListProps {
  categories: Category[];
  causesByCategory: Map<string, Cause[]>;
  onSelectCause: (cause: Cause) => void;
}

export function GroupedCauseList({
  categories,
  causesByCategory,
  onSelectCause
}: GroupedCauseListProps) {
  return (
    <div className="grid gap-4">
      {categories.map((category) => {
        const categoryCauses = causesByCategory.get(category.id) ?? [];

        return (
          <section
            className="scroll-mt-28 rounded-lg border border-clinical-line bg-white p-3 shadow-sm"
            id={`section-${category.id}`}
            key={category.id}
          >
            <header className="mb-2 flex flex-col gap-2 border-b border-clinical-line pb-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-clinical-ink text-xl font-black text-white">
                  {category.acronym}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-clinical-ink">{category.title}</h2>
                  <p className="text-sm leading-5 text-clinical-muted">{category.description}</p>
                </div>
              </div>
              <span className="rounded-full bg-clinical-surface px-2.5 py-1 text-xs font-bold text-clinical-muted">
                {categoryCauses.length} Treffer
              </span>
            </header>

            {categoryCauses.length > 0 ? (
              <div className="grid gap-2 xl:grid-cols-2">
                {categoryCauses.map((cause) => (
                  <CauseCard cause={cause} key={cause.id} onSelect={onSelectCause} />
                ))}
              </div>
            ) : (
              <div className="rounded-md bg-clinical-surface p-3 text-sm text-clinical-muted">
                Keine Ursachen in diesem Abschnitt für die aktuelle Suche/Filterung.
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
