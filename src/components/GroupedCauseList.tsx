import { ChevronDown, ChevronRight } from "lucide-react";
import type { Category, Cause } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import { CauseCard } from "./CauseCard";

interface GroupedCauseListProps {
  categories: Category[];
  causesByCategory: Map<string, Cause[]>;
  expandedCategoryIds: Set<string>;
  autoExpandMatchingCategories?: boolean;
  onCollapseAll: () => void;
  onExpandAll: () => void;
  onSelectCause: (cause: Cause) => void;
  onSelectSymptom?: (entry: SymptomEntry) => void;
  onToggleCategory: (categoryId: string) => void;
}

export function GroupedCauseList({
  autoExpandMatchingCategories = false,
  categories,
  causesByCategory,
  expandedCategoryIds,
  onCollapseAll,
  onExpandAll,
  onSelectCause,
  onSelectSymptom,
  onToggleCategory
}: GroupedCauseListProps) {
  const isCategoryExpanded = (category: Category) => {
    const categoryCauses = causesByCategory.get(category.id) ?? [];
    return (
      expandedCategoryIds.has(category.id) ||
      (autoExpandMatchingCategories && categoryCauses.length > 0)
    );
  };

  const hasExpandedCategory = categories.some(isCategoryExpanded);

  return (
    <div className="grid min-w-0 gap-2.5">
      <div className="flex justify-end">
        <button
          className="rounded-md border border-clinical-line bg-white px-3 py-2 text-sm font-semibold text-clinical-text shadow-sm hover:border-clinical-accent hover:text-clinical-accent"
          onClick={hasExpandedCategory ? onCollapseAll : onExpandAll}
          type="button"
        >
          {hasExpandedCategory ? "Alles einklappen" : "Alles ausklappen"}
        </button>
      </div>

      {categories.map((category) => {
        const categoryCauses = causesByCategory.get(category.id) ?? [];
        const isExpanded = isCategoryExpanded(category);
        const contentId = `section-${category.id}-content`;

        return (
          <section
            className="min-w-0 scroll-mt-[calc(var(--app-header-height)+3.75rem)] rounded-lg border border-clinical-line bg-white p-2.5 shadow-sm lg:scroll-mt-[calc(var(--app-header-height)+2rem)]"
            data-category-id={category.id}
            id={`section-${category.id}`}
            key={category.id}
          >
            <header className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <button
                aria-controls={contentId}
                aria-expanded={isExpanded}
                className="group flex min-w-0 flex-1 items-start gap-2 text-left"
                onClick={() => onToggleCategory(category.id)}
                type="button"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clinical-surface text-clinical-ink transition group-hover:bg-teal-50 group-hover:text-clinical-accent">
                  {isExpanded ? (
                    <ChevronDown aria-hidden="true" size={18} />
                  ) : (
                    <ChevronRight aria-hidden="true" size={18} />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block break-words text-lg font-bold leading-6 text-clinical-ink">
                    {category.title}
                  </span>
                  <span className="block break-words text-sm leading-5 text-clinical-muted">
                    {category.description}
                  </span>
                </span>
              </button>
              <button
                className="shrink-0 rounded-full bg-clinical-surface px-2.5 py-1 text-xs font-bold text-clinical-muted hover:bg-teal-50 hover:text-clinical-accent"
                onClick={() => onToggleCategory(category.id)}
                type="button"
              >
                {categoryCauses.length} Treffer
              </button>
            </header>

            {isExpanded ? (
              <div
                className="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none"
                id={contentId}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-2 border-t border-clinical-line pt-2">
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
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
