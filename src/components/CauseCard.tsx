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
    <article className="rounded-lg border border-clinical-line bg-white p-3 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
            {getCategoryAcronym(cause.category)} - {getCategoryLabel(cause.category)}
          </p>
          <h3 className="mt-0.5 text-base font-semibold text-clinical-ink">{cause.title}</h3>
        </div>
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-clinical-line px-2.5 py-1.5 text-sm font-medium text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
          onClick={() => onSelect(cause)}
          type="button"
        >
          Details
          <ChevronRight aria-hidden="true" size={16} />
        </button>
      </div>

      <p className="mt-2 text-sm leading-5 text-clinical-muted">{cause.shortDescription}</p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <FrequencyBadge frequency={cause.frequency} />
        <UrgencyBadge urgency={cause.urgency} />
        <RedFlagBadge major={cause.hasMajorRedFlags} />
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
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
        <div className="mt-2 rounded-md border border-red-100 bg-red-50 px-2.5 py-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-800">Red Flags</p>
          <p className="mt-0.5 text-sm leading-5 text-red-900">
            {cause.redFlags.slice(0, 3).join(" · ")}
          </p>
        </div>
      ) : null}
    </article>
  );
}
