import { ChevronRight } from "lucide-react";
import type { SymptomEntry } from "../types/symptom";

interface SymptomCardProps {
  entry: SymptomEntry;
  isActive: boolean;
  onSelect: (entry: SymptomEntry) => void;
}

const kindLabel: Record<SymptomEntry["kind"], string> = {
  symptom: "Symptom",
  befund: "Befund",
  labor: "Labor",
  syndrom: "Syndrom",
  vitalparameter: "Vitalparameter"
};

export function SymptomCard({ entry, isActive, onSelect }: SymptomCardProps) {
  return (
    <button
      className={`min-w-0 rounded-lg border p-2.5 text-left shadow-sm transition ${
        isActive
          ? "border-clinical-accent bg-teal-50"
          : "border-clinical-line bg-white hover:border-clinical-accent"
      }`}
      onClick={() => onSelect(entry)}
      type="button"
    >
      <span className="flex min-w-0 items-start justify-between gap-2">
        <span className="min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
            {kindLabel[entry.kind]}
          </span>
          <span className="mt-0.5 block break-words text-sm font-semibold leading-5 text-clinical-ink">
            {entry.title}
          </span>
        </span>
        <ChevronRight aria-hidden="true" className="mt-5 shrink-0 text-clinical-muted" size={16} />
      </span>
      <span className="mt-1 line-clamp-2 block text-xs leading-5 text-clinical-muted">
        {entry.synonyms.slice(0, 4).join(" · ")}
      </span>
    </button>
  );
}
