import { ChevronRight } from "lucide-react";
import type { Cause } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import { getLinkedSymptomsForCause } from "../utils/getLinkedSymptomsForCause";
import { getCategoryAcronym, getCategoryLabel } from "../utils/getCategoryLabel";

interface CauseCardProps {
  cause: Cause;
  onSelect: (cause: Cause) => void;
  onSelectSymptom?: (entry: SymptomEntry) => void;
}

export function CauseCard({ cause, onSelect, onSelectSymptom }: CauseCardProps) {
  const linkedSymptoms = getLinkedSymptomsForCause(cause).slice(0, 3);

  return (
    <article className="min-w-0 overflow-hidden rounded-md border border-clinical-line bg-white px-2.5 py-2 shadow-sm">
      <div className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase leading-4 tracking-wide text-clinical-accent">
            {getCategoryAcronym(cause.category)} - {getCategoryLabel(cause.category)}
          </p>
          <h3 className="mt-0.5 break-words text-sm font-bold leading-5 text-clinical-ink sm:text-base">
            {cause.title}
          </h3>
          <p className="mt-1 break-words text-sm leading-5 text-clinical-muted">
            {cause.shortDescription}
          </p>

          {linkedSymptoms.length > 0 ? (
            <div className="mt-1.5 flex min-w-0 flex-wrap items-center gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-clinical-muted">
                Symptome/Befunde
              </span>
              {linkedSymptoms.map((entry) => (
                <button
                  className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-clinical-accent hover:bg-teal-100"
                  key={entry.id}
                  onClick={() => onSelectSymptom?.(entry)}
                  type="button"
                >
                  {entry.title}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <button
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-md border border-clinical-line px-2 py-1 text-xs font-semibold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent sm:mt-0.5"
          onClick={() => onSelect(cause)}
          type="button"
        >
          Details
          <ChevronRight aria-hidden="true" size={14} />
        </button>
      </div>
    </article>
  );
}
