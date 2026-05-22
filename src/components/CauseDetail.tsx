import { Download, ExternalLink, X } from "lucide-react";
import { causes } from "../data/causes";
import type { Cause } from "../types/medical";
import { causeToMarkdown, copyMarkdown, downloadMarkdown } from "../utils/exportMarkdown";
import {
  getCategoryLabel,
  getFrequencyLabel,
  getSpecialtyLabel,
  getUrgencyLabel
} from "../utils/getCategoryLabel";
import { FrequencyBadge, RedFlagBadge, UrgencyBadge } from "./Badges";

interface CauseDetailProps {
  cause: Cause;
  onClose: () => void;
  onSelectCause: (cause: Cause) => void;
}

export function CauseDetail({ cause, onClose, onSelectCause }: CauseDetailProps) {
  const related = (cause.relatedCauses ?? [])
    .map((id) => causes.find((item) => item.id === id))
    .filter((item): item is Cause => Boolean(item));

  const markdown = causeToMarkdown(cause);

  return (
    <section className="rounded-lg border border-clinical-line bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-clinical-accent">
            {getCategoryLabel(cause.category)}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-clinical-ink">{cause.title}</h2>
          <p className="mt-2 max-w-3xl leading-7 text-clinical-muted">
            {cause.shortDescription}
          </p>
        </div>
        <button
          aria-label="Detailansicht schließen"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-clinical-line text-clinical-muted hover:bg-slate-100"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" size={18} />
        </button>
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

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <DetailList title="Typische Beispiele" items={cause.examples} />
        <DetailList title="Typische klinische Hinweise" items={cause.typicalClues} />
        <DetailList danger title="Red Flags" items={cause.redFlags} />
        <DetailList title="Verwandte Symptome" items={cause.relatedSymptoms} />
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

      <section className="mt-6">
        <h3 className="text-base font-semibold text-clinical-ink">Quellen und Orientierung</h3>
        <div className="mt-2 grid gap-2">
          {cause.sources.map((source) => (
            <a
              className="inline-flex items-center gap-2 rounded-md border border-clinical-line px-3 py-2 text-sm font-medium text-clinical-accent hover:border-clinical-accent"
              href={source.url}
              key={`${source.title}-${source.url}`}
              rel="noreferrer"
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

      <div className="mt-6 flex flex-wrap gap-2 border-t border-clinical-line pt-5">
        <button
          className="inline-flex items-center gap-2 rounded-md bg-clinical-accent px-3 py-2 text-sm font-semibold text-white hover:bg-clinical-accentDark"
          onClick={() => downloadMarkdown(`${cause.id}.md`, markdown)}
          type="button"
        >
          <Download aria-hidden="true" size={16} />
          Markdown herunterladen
        </button>
        <button
          className="rounded-md border border-clinical-line px-3 py-2 text-sm font-semibold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
          onClick={() => void copyMarkdown(markdown)}
          type="button"
        >
          Markdown kopieren
        </button>
      </div>
    </section>
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
