import { ChevronRight } from "lucide-react";
import type { Cause } from "../types/medical";
import { getCategoryAcronym, getCategoryLabel } from "../utils/getCategoryLabel";
import { FrequencyBadge, UrgencyBadge } from "./Badges";

interface CauseCardProps {
  cause: Cause;
  onSelect: (cause: Cause) => void;
}

export function CauseCard({ cause, onSelect }: CauseCardProps) {
  const hasRedFlags = cause.redFlags.length > 0;

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
              <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="break-words text-base font-semibold leading-5 text-clinical-ink">
                  {cause.title}
                </h3>
                <FrequencyBadge frequency={cause.frequency} />
                <UrgencyBadge urgency={cause.urgency} />
              </div>
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
