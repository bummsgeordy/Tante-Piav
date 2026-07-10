import { ExternalLink } from "lucide-react";
import { causes } from "../data/causes";
import type { Cause, PiavCategory } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import { getCategoryLabel, getSpecialtyLabel } from "../utils/getCategoryLabel";

interface SymptomDetailProps {
  entry: SymptomEntry;
  onSelectCause: (cause: Cause) => void;
  onSelectCategory: (category: PiavCategory) => void;
}

export function SymptomDetail({ entry, onSelectCause, onSelectCategory }: SymptomDetailProps) {
  return (
    <section className="rounded-lg border border-clinical-line bg-white p-3 shadow-sm">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.35fr)]">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
            Symptome & Befunde
          </p>
          <h2 className="mt-0.5 break-words text-lg font-bold text-clinical-ink">
            {entry.title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-clinical-muted">{entry.shortDescription}</p>
          <p className="mt-2 rounded-md bg-amber-50 px-2.5 py-2 text-xs leading-5 text-amber-950">
            Denkhilfe: nicht vollständig, nicht leitlinienersetzend, fachlich prüfen.
          </p>
        </div>

        <aside className="rounded-md border border-red-100 bg-red-50 p-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-red-800">Red Flags</h3>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-5 text-red-900">
            {entry.redFlags.slice(0, 6).map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <CauseBucket
          causeIds={entry.commonCauseIds}
          onSelectCause={onSelectCause}
          title="Häufige Ursachen"
        />
        <CauseBucket
          causeIds={entry.importantCauseIds}
          onSelectCause={onSelectCause}
          title="Wichtige Ursachen"
        />
        <CauseBucket
          causeIds={entry.rareButImportantCauseIds}
          onSelectCause={onSelectCause}
          title="Selten, aber nicht verpassen"
        />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.35fr)]">
        <section className="rounded-md border border-clinical-line bg-clinical-surface p-3">
          <h3 className="text-sm font-semibold text-clinical-ink">Mögliche erste Orientierung</h3>
          <p className="mt-1 text-xs leading-5 text-clinical-muted">
            Kontextabhängig und unvollständig; keine individuelle Diagnostikempfehlung.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-clinical-muted">
            {entry.suggestedBasicWorkup.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border border-clinical-line p-3">
          <h3 className="text-sm font-semibold text-clinical-ink">Verknüpfungen</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {entry.piavCategories.map((category) => (
              <button
                className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-clinical-accent hover:bg-teal-100"
                key={category}
                onClick={() => onSelectCategory(category)}
                type="button"
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-clinical-muted">
            Fachgebiete
          </p>
          <p className="mt-1 text-sm leading-6 text-clinical-muted">
            {entry.specialties.map(getSpecialtyLabel).join(", ")}
          </p>
        </section>
      </div>

      <section className="mt-3">
        <h3 className="text-sm font-semibold text-clinical-ink">Quellenlinks</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {entry.sources.map((source) => (
            <a
              className="inline-flex items-center gap-1.5 rounded-md border border-clinical-line px-2.5 py-1.5 text-xs font-medium text-clinical-accent hover:border-clinical-accent"
              href={source.url}
              key={`${source.title}-${source.url}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {source.title}
              <ExternalLink aria-hidden="true" size={13} />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

function CauseBucket({
  causeIds,
  onSelectCause,
  title
}: {
  causeIds: string[];
  onSelectCause: (cause: Cause) => void;
  title: string;
}) {
  const matchedCauses = causeIds
    .map((id) => causeById.get(id))
    .filter((cause): cause is Cause => Boolean(cause));

  return (
    <section className="rounded-md border border-clinical-line p-3">
      <h3 className="text-sm font-semibold text-clinical-ink">{title}</h3>
      {matchedCauses.length > 0 ? (
        <div className="mt-2 grid gap-1.5">
          {matchedCauses.map((cause) => (
            <button
              className="rounded-md bg-clinical-surface px-2.5 py-1.5 text-left text-sm font-medium text-clinical-text hover:bg-teal-50 hover:text-clinical-accent"
              key={cause.id}
              onClick={() => onSelectCause(cause)}
              type="button"
            >
              {cause.title}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm leading-6 text-clinical-muted">
          Noch keine verknüpften Ursachen im MVP-Datensatz.
        </p>
      )}
    </section>
  );
}

const causeById = new Map(causes.map((cause) => [cause.id, cause]));
