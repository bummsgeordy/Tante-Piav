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
  const hasRedFlags = cause.redFlags.length > 0;
  const linkedSymptoms = getLinkedSymptomsForCause(cause).slice(0, 4);

  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-clinical-line bg-white p-2.5 shadow-sm">
      <div
        className={`grid min-w-0 gap-2 ${
          hasRedFlags ? "lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.38fr)]" : ""
        }`}
      >
        <div className="min-w-0">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
                {getCategoryAcronym(cause.category)} - {getCategoryLabel(cause.category)}
              </p>
              <h3 className="mt-0.5 break-words text-base font-semibold leading-5 text-clinical-ink">
                {cause.title}
              </h3>
            </div>
            <button
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md border border-clinical-line px-2.5 py-1.5 text-sm font-medium text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
              onClick={() => onSelect(cause)}
              type="button"
            >
              Details
              <ChevronRight aria-hidden="true" size={16} />
            </button>
          </div>

          <p className="mt-1.5 break-words text-sm leading-5 text-clinical-muted">
            {cause.shortDescription}
          </p>

          {linkedSymptoms.length > 0 ? (
            <div className="mt-2 flex min-w-0 flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-clinical-muted">
                Symptome/Befunde
              </span>
              {linkedSymptoms.map((entry) => (
                <button
                  className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-clinical-accent hover:bg-teal-100"
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

        {hasRedFlags ? (
          <aside className="min-w-0 rounded-md border border-red-100 bg-red-50 px-2.5 py-1.5 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-800">Red Flags</p>
            <p className="mt-0.5 break-words text-sm leading-5 text-red-900">
              {cause.redFlags.slice(0, 3).join(" · ")}
            </p>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
