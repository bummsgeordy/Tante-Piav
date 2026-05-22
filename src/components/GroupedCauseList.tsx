import type { Category, Cause } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import { CauseCard } from "./CauseCard";

interface GroupedCauseListProps {
  categories: Category[];
  causesByCategory: Map<string, Cause[]>;
  onSelectCause: (cause: Cause) => void;
  onSelectSymptom?: (entry: SymptomEntry) => void;
}

export function GroupedCauseList({
  categories,
  causesByCategory,
  onSelectCause,
  onSelectSymptom
}: GroupedCauseListProps) {
  return (
    <div className="grid min-w-0 gap-2.5">
      {categories.map((category) => {
        const categoryCauses = causesByCategory.get(category.id) ?? [];

        return (
          <section
            className="min-w-0 scroll-mt-32 rounded-lg border border-clinical-line bg-white p-2.5 shadow-sm lg:scroll-mt-28"
            id={`section-${category.id}`}
            key={category.id}
          >
            <header className="mb-2 flex min-w-0 flex-col gap-2 border-b border-clinical-line pb-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="break-words text-lg font-bold leading-6 text-clinical-ink">
                  {category.title}
                </h2>
                <p className="break-words text-sm leading-5 text-clinical-muted">
                  {category.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-clinical-surface px-2.5 py-1 text-xs font-bold text-clinical-muted">
                {categoryCauses.length} Treffer
              </span>
            </header>

            {categoryCauses.length > 0 ? (
              <div className="grid min-w-0 gap-2">
                {categoryCauses.map((cause) => (
                  <CauseCard
                    cause={cause}
                    key={cause.id}
                    onSelect={onSelectCause}
                    onSelectSymptom={onSelectSymptom}
                  />
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
