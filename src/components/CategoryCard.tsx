import { ChevronRight } from "lucide-react";
import type { Category, PiavCategory } from "../types/medical";

interface CategoryCardProps {
  category: Category;
  count: number;
  onSelect: (category: PiavCategory) => void;
}

export function CategoryCard({ category, count, onSelect }: CategoryCardProps) {
  return (
    <button
      className="group rounded-lg border border-clinical-line bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-clinical-accent hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-teal-100"
      onClick={() => onSelect(category.id)}
      type="button"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-clinical-ink text-lg font-bold text-white">
          {category.acronym}
        </span>
        <ChevronRight
          aria-hidden="true"
          className="mt-2 text-clinical-muted transition group-hover:translate-x-1"
          size={18}
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-clinical-ink">{category.title}</h3>
      <p className="mt-1 text-sm font-medium text-clinical-accent">{category.subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-clinical-muted">{category.description}</p>
      <p className="mt-4 text-sm font-semibold text-clinical-ink">{count} Ursachen</p>
    </button>
  );
}
