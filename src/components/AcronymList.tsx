import { ChevronRight } from "lucide-react";
import type { Category, PiavCategory } from "../types/medical";

interface AcronymListProps {
  categories: Category[];
  counts: Record<PiavCategory, number>;
  activeCategory: PiavCategory | "all";
  onSelect: (category: PiavCategory) => void;
}

export function AcronymList({
  categories,
  counts,
  activeCategory,
  onSelect
}: AcronymListProps) {
  return (
    <section
      aria-label="TANTE PIAV Akronym"
      className="rounded-lg border border-clinical-line bg-white shadow-sm"
    >
      <div className="grid divide-y divide-clinical-line">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              className={`group grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 px-3 py-2.5 text-left transition hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-teal-100 ${
                isActive ? "bg-teal-50" : "bg-white"
              }`}
              key={category.id}
              onClick={() => onSelect(category.id)}
              type="button"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-md text-lg font-black ${
                  isActive
                    ? "bg-clinical-accent text-white"
                    : "bg-clinical-ink text-white"
                }`}
              >
                {category.acronym}
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold text-clinical-ink">{category.title}</span>
                  <span className="text-xs font-semibold text-clinical-muted">
                    {counts[category.id]} Ursachen
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-xs text-clinical-muted">
                  {category.subtitle}
                </span>
              </span>
              <ChevronRight
                aria-hidden="true"
                className="text-clinical-muted transition group-hover:translate-x-0.5"
                size={17}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
