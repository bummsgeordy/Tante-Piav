import { ChevronRight } from "lucide-react";
import type { Cause } from "../types/medical";
import { getCategoryAcronym, getCategoryLabel, getSpecialtyLabel } from "../utils/getCategoryLabel";
import { FrequencyBadge, RedFlagBadge, UrgencyBadge } from "./Badges";

interface CauseCardProps {
  cause: Cause;
  onSelect: (cause: Cause) => void;
}

export function CauseCard({ cause, onSelect }: CauseCardProps) {
  return (
    <article className="rounded-lg border border-clinical-line bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
            {getCategoryAcronym(cause.category)} - {getCategoryLabel(cause.category)}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-clinical-ink">{cause.title}</h3>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md border border-clinical-line px-3 py-2 text-sm font-medium text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
          onClick={() => onSelect(cause)}
          type="button"
        >
          Details
          <ChevronRight aria-hidden="true" size={16} />
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-clinical-muted">{cause.shortDescription}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <FrequencyBadge frequency={cause.frequency} />
        <UrgencyBadge urgency={cause.urgency} />
        <RedFlagBadge major={cause.hasMajorRedFlags} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cause.specialties.slice(0, 3).map((specialty) => (
          <span
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-clinical-muted"
            key={specialty}
          >
            {getSpecialtyLabel(specialty)}
          </span>
        ))}
      </div>

      {cause.redFlags.length > 0 ? (
        <div className="mt-4 rounded-md border border-red-100 bg-red-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-800">Red Flags</p>
          <p className="mt-1 text-sm leading-6 text-red-900">
            {cause.redFlags.slice(0, 3).join(" · ")}
          </p>
        </div>
      ) : null}
    </article>
  );
}
