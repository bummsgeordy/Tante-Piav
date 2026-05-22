import { AlertTriangle, Clock, Gauge } from "lucide-react";
import type { Frequency, Urgency } from "../types/medical";
import { getFrequencyLabel, getUrgencyLabel } from "../utils/getCategoryLabel";

export function FrequencyBadge({ frequency }: { frequency: Frequency }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-clinical-muted">
      <Gauge aria-hidden="true" size={13} />
      {getFrequencyLabel(frequency)}
    </span>
  );
}

export function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  const styles =
    urgency === "notfall"
      ? "border-red-200 bg-red-50 text-red-800"
      : urgency === "zeitnah"
        ? "border-amber-200 bg-amber-50 text-amber-900"
        : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      <Clock aria-hidden="true" size={13} />
      {getUrgencyLabel(urgency)}
    </span>
  );
}

export function RedFlagBadge({ major }: { major: boolean }) {
  if (!major) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-clinical-muted">
        Red Flags prüfen
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800">
      <AlertTriangle aria-hidden="true" size={13} />
      relevante Red Flags
    </span>
  );
}
