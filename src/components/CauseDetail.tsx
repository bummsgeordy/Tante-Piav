import { CircleCheck, Clock3, ExternalLink } from "lucide-react";
import { causes } from "../data/causes";
import type { Cause } from "../types/medical";
import {
  getCategoryLabel,
  getFrequencyLabel,
  getSpecialtyLabel,
  getUrgencyLabel
} from "../utils/getCategoryLabel";
import { getLinkedSymptomsForCause } from "../utils/getLinkedSymptomsForCause";
import { FrequencyBadge, RedFlagBadge, UrgencyBadge } from "./Badges";

const causeById = new Map(causes.map((item) => [item.id, item]));

interface CauseDetailProps {
  cause: Cause;
  onSelectCause: (cause: Cause) => void;
}

export function CauseDetail({ cause, onSelectCause }: CauseDetailProps) {
  const related = (cause.relatedCauses ?? [])
    .map((id) => causeById.get(id))
    .filter((item): item is Cause => Boolean(item));
  const linkedSymptoms = getLinkedSymptomsForCause(cause);

  return (
    <section className="rounded-lg border border-clinical-line bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-clinical-accent">
            Kurzüberblick · {getCategoryLabel(cause.category)}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-clinical-ink">{cause.title}</h2>
          <p className="mt-2 max-w-3xl leading-7 text-clinical-muted">
            {cause.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <FrequencyBadge frequency={cause.frequency} />
        <UrgencyBadge urgency={cause.urgency} />
        <RedFlagBadge major={cause.hasMajorRedFlags} />
      </div>

      <dl className="mt-5 grid gap-3 rounded-lg bg-clinical-surface p-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="font-semibold text-clinical-ink">Häufigkeit</dt>
          <dd className="mt-1 text-clinical-muted">{getFrequencyLabel(cause.frequency)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-clinical-ink">Dringlichkeit</dt>
          <dd className="mt-1 text-clinical-muted">{getUrgencyLabel(cause.urgency)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-clinical-ink">Fachgebiete</dt>
          <dd className="mt-1 text-clinical-muted">
            {cause.specialties.map(getSpecialtyLabel).join(", ")}
          </dd>
        </div>
      </dl>
      <p className="mt-2 text-xs leading-5 text-clinical-muted">
        Häufigkeit und Dringlichkeit sind grobe, kontextabhängige Orientierungen und keine
        patientenbezogene Risikoeinschätzung.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <DetailList title="Typische Beispiele" items={cause.examples} />
        <DetailList title="Typische Hinweise" items={cause.typicalClues} />
        <DetailList danger title="Nicht verpassen" items={cause.redFlags} />
        {cause.practicalNotes?.length ? (
          <DetailList title="Praktische Einordnung" items={cause.practicalNotes} />
        ) : null}
      </div>

      <section className="mt-6">
        <h3 className="text-base font-semibold text-clinical-ink">Tags</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {cause.tags.map((tag) => (
            <span
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-clinical-muted"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {linkedSymptoms.length > 0 ? (
        <section className="mt-6 rounded-lg border border-clinical-line bg-clinical-surface p-4">
          <h3 className="text-base font-semibold text-clinical-ink">
            Verwandte Symptome & Befunde
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {linkedSymptoms.map((entry) => (
              <span
                className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-clinical-accent"
                key={entry.id}
              >
                {entry.title}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-6 rounded-lg border border-clinical-line bg-clinical-surface p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-clinical-ink">Quellen und Datenstand</h3>
            <p className="mt-1 text-xs leading-5 text-clinical-muted">
              Quellen redaktionell abgeglichen. Keine klinische Fachfreigabe und keine
              individuelle Empfehlung.
            </p>
          </div>
          <ReviewStatus cause={cause} />
        </div>
        <div className="mt-2 grid gap-2">
          {cause.sources.map((source) => (
            <a
              className="inline-flex items-center gap-2 rounded-md border border-clinical-line px-3 py-2 text-sm font-medium text-clinical-accent hover:border-clinical-accent"
              href={source.url}
              key={`${source.title}-${source.url}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {source.title}
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-6">
          <h3 className="text-base font-semibold text-clinical-ink">Verwandte Ursachen</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {related.map((item) => (
              <button
                className="rounded-md border border-clinical-line px-3 py-2 text-sm font-medium text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
                key={item.id}
                onClick={() => onSelectCause(item)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
        </section>
      ) : null}

    </section>
  );
}

function ReviewStatus({ cause }: { cause: Cause }) {
  const isClinicianReviewed = cause.reviewStatus === "clinician-reviewed";
  const date = cause.lastSourceReview
    ? new Intl.DateTimeFormat("de-DE").format(new Date(`${cause.lastSourceReview}T00:00:00`))
    : "nicht dokumentiert";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-semibold ${
        isClinicianReviewed
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-amber-200 bg-amber-50 text-amber-900"
      }`}
    >
      {isClinicianReviewed ? (
        <CircleCheck aria-hidden="true" size={15} />
      ) : (
        <Clock3 aria-hidden="true" size={15} />
      )}
      <span>
        {isClinicianReviewed ? "Klinisch geprüft" : "Klinische Prüfung ausstehend"} · {date}
      </span>
    </div>
  );
}

function DetailList({
  title,
  items,
  danger = false
}: {
  title: string;
  items: string[];
  danger?: boolean;
}) {
  return (
    <section
      className={`rounded-lg border p-4 ${
        danger ? "border-red-100 bg-red-50" : "border-clinical-line bg-white"
      }`}
    >
      <h3 className={`font-semibold ${danger ? "text-red-900" : "text-clinical-ink"}`}>
        {title}
      </h3>
      <ul className={`mt-2 list-disc space-y-1 pl-5 text-sm leading-6 ${danger ? "text-red-900" : "text-clinical-muted"}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
