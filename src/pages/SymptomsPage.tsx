import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { causes } from "../data/causes";
import { symptomEntries } from "../data/symptoms";
import { SearchBar } from "../components/SearchBar";
import type { Cause, PiavCategory } from "../types/medical";
import type { SymptomEntry, SymptomKind } from "../types/symptom";
import { getCategoryLabel } from "../utils/getCategoryLabel";
import { getSearchSuggestions } from "../utils/searchSuggestions";
import { searchSymptoms } from "../utils/searchSymptoms";

interface SymptomsPageProps {
  query: string;
  selectedSymptomId: string | null;
  onQueryChange: (query: string) => void;
  onSelectCause: (cause: Cause) => void;
  onSelectCategory: (category: PiavCategory) => void;
  onSelectSymptom: (entry: SymptomEntry) => void;
}

const kindGroups: Array<{ kind: SymptomKind; title: string }> = [
  { kind: "symptom", title: "Symptome" },
  { kind: "labor", title: "Labor" },
  { kind: "vitalparameter", title: "Vitalparameter" },
  { kind: "syndrom", title: "Syndrome" },
  { kind: "befund", title: "Befunde" }
];

const causeById = new Map(causes.map((cause) => [cause.id, cause]));

export function SymptomsPage({
  query,
  selectedSymptomId,
  onQueryChange,
  onSelectCause,
  onSelectCategory,
  onSelectSymptom
}: SymptomsPageProps) {
  const [expandedKinds, setExpandedKinds] = useState<Set<SymptomKind>>(() => new Set());
  const visibleSymptoms = useMemo(() => searchSymptoms(symptomEntries, query), [query]);
  const suggestions = useMemo(() => getSearchSuggestions(query), [query]);
  const grouped = useMemo(() => {
    const map = new Map<SymptomKind, SymptomEntry[]>();
    kindGroups.forEach((group) => map.set(group.kind, []));
    visibleSymptoms.forEach((entry) => map.get(entry.kind)?.push(entry));
    return map;
  }, [visibleSymptoms]);

  useEffect(() => {
    if (!selectedSymptomId) {
      return;
    }

    const selectedEntry = symptomEntries.find((entry) => entry.id === selectedSymptomId);
    if (selectedEntry) {
      setExpandedKinds((current) => new Set([...current, selectedEntry.kind]));
    }

    window.setTimeout(() => {
      document
        .getElementById(`symptom-${selectedSymptomId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }, [selectedSymptomId]);

  const focusResults = () => {
    window.setTimeout(() => {
      document.getElementById("symptom-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 0);
  };

  const selectSuggestion = (suggestion: string) => {
    onQueryChange(suggestion);
    focusResults();
  };

  const visibleKinds = kindGroups
    .filter((group) => (grouped.get(group.kind) ?? []).length > 0)
    .map((group) => group.kind);
  const allExpanded = visibleKinds.every((kind) => expandedKinds.has(kind));

  const toggleKind = (kind: SymptomKind) => {
    setExpandedKinds((current) => {
      const next = new Set(current);
      if (next.has(kind)) {
        next.delete(kind);
      } else {
        next.add(kind);
      }
      return next;
    });
  };

  const expandAllKinds = () => {
    setExpandedKinds(new Set(visibleKinds));
  };

  const collapseAllKinds = () => {
    setExpandedKinds(new Set());
  };

  return (
    <main className="bg-clinical-surface">
      <section className="border-b border-clinical-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(360px,0.8fr)_minmax(0,1fr)] lg:px-6">
          <div>
            <h1 className="text-2xl font-bold text-clinical-ink">Symptome & Befunde</h1>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-clinical-muted">
              Symptom-, Befund- und Laborzugang als Denkhilfe. Die Einträge sind nicht
              vollständig und müssen fachlich geprüft werden.
            </p>
          </div>
          <SearchBar
            onQueryChange={onQueryChange}
            onSuggestionSelect={selectSuggestion}
            onSubmit={focusResults}
            query={query}
            resultCount={visibleSymptoms.length}
            suggestions={suggestions}
          />
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-3 px-3 py-3 sm:px-5 lg:px-6"
        id="symptom-results"
      >
        {visibleKinds.length > 0 ? (
          <div className="flex justify-end">
            <button
              className="rounded-md border border-clinical-line bg-white px-3 py-2 text-sm font-semibold text-clinical-text shadow-sm hover:border-clinical-accent hover:text-clinical-accent"
              onClick={allExpanded ? collapseAllKinds : expandAllKinds}
              type="button"
            >
              {allExpanded ? "Alles einklappen" : "Alles ausklappen"}
            </button>
          </div>
        ) : null}

        {kindGroups.map((group) => {
          const entries = grouped.get(group.kind) ?? [];
          if (entries.length === 0) {
            return null;
          }

          const isExpanded = expandedKinds.has(group.kind);
          const contentId = `symptom-kind-${group.kind}`;

          return (
            <section className="rounded-lg border border-clinical-line bg-white p-2.5 shadow-sm" key={group.kind}>
              <header className="flex items-start justify-between gap-2">
                <button
                  aria-controls={contentId}
                  aria-expanded={isExpanded}
                  className="group flex min-w-0 flex-1 items-center gap-2 text-left"
                  onClick={() => toggleKind(group.kind)}
                  type="button"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clinical-surface text-clinical-ink transition group-hover:bg-teal-50 group-hover:text-clinical-accent">
                    {isExpanded ? (
                      <ChevronDown aria-hidden="true" size={18} />
                    ) : (
                      <ChevronRight aria-hidden="true" size={18} />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-bold text-clinical-ink">{group.title}</span>
                    <span className="block text-sm text-clinical-muted">
                      {entries.length} Einträge
                    </span>
                  </span>
                </button>
                <button
                  className="shrink-0 rounded-full bg-clinical-surface px-2.5 py-1 text-xs font-semibold text-clinical-muted hover:bg-teal-50 hover:text-clinical-accent"
                  onClick={() => toggleKind(group.kind)}
                  type="button"
                >
                  {entries.length} Einträge
                </button>
              </header>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                  isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
                id={contentId}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-2 grid gap-2 border-t border-clinical-line pt-2">
                    {entries.map((entry) => (
                      <SymptomMatrixCard
                        entry={entry}
                        isActive={entry.id === selectedSymptomId}
                        key={entry.id}
                        onSelectCategory={onSelectCategory}
                        onSelectCause={onSelectCause}
                        onSelectSymptom={onSelectSymptom}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

function SymptomMatrixCard({
  entry,
  isActive,
  onSelectCause,
  onSelectCategory,
  onSelectSymptom
}: {
  entry: SymptomEntry;
  isActive: boolean;
  onSelectCause: (cause: Cause) => void;
  onSelectCategory: (category: PiavCategory) => void;
  onSelectSymptom: (entry: SymptomEntry) => void;
}) {
  return (
    <article
      className={`scroll-mt-40 rounded-lg border bg-white p-3 shadow-sm ${
        isActive ? "border-clinical-accent ring-2 ring-teal-100" : "border-clinical-line"
      }`}
      id={`symptom-${entry.id}`}
    >
      <header className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.32fr)]">
        <button
          className="min-w-0 text-left"
          onClick={() => onSelectSymptom(entry)}
          type="button"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-clinical-accent">
            {entry.kind}
          </p>
          <h3 className="mt-0.5 break-words text-lg font-bold leading-6 text-clinical-ink">
            {entry.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-clinical-muted">{entry.shortDescription}</p>
        </button>
        <aside className="rounded-md border border-red-100 bg-red-50 p-2.5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-red-800">Red Flags</h4>
          <p className="mt-1 text-xs leading-5 text-red-900">
            {entry.redFlags.slice(0, 4).join(" · ")}
          </p>
        </aside>
      </header>

      <div className="mt-3 grid gap-2 lg:grid-cols-3">
        <CauseColumn
          causeIds={entry.commonCauseIds}
          onSelectCategory={onSelectCategory}
          onSelectCause={onSelectCause}
          title="häufig"
        />
        <CauseColumn
          causeIds={entry.importantCauseIds}
          onSelectCategory={onSelectCategory}
          onSelectCause={onSelectCause}
          title="wichtig / nicht verpassen"
        />
        <CauseColumn
          causeIds={entry.rareButImportantCauseIds}
          onSelectCategory={onSelectCategory}
          onSelectCause={onSelectCause}
          title="selten, aber gefährlich"
        />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.32fr)]">
        <section className="rounded-md border border-clinical-line bg-clinical-surface p-2.5">
          <h4 className="text-sm font-semibold text-clinical-ink">Basisabklärung</h4>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-clinical-muted">
            {entry.suggestedBasicWorkup.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-md border border-clinical-line p-2.5">
          <h4 className="text-sm font-semibold text-clinical-ink">TANTE-PIAV-Bezug</h4>
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
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.sources.slice(0, 3).map((source) => (
              <a
                className="inline-flex items-center gap-1 rounded-md border border-clinical-line px-2 py-1 text-xs font-medium text-clinical-accent hover:border-clinical-accent"
                href={source.url}
                key={`${source.title}-${source.url}`}
                rel="noreferrer"
                target="_blank"
              >
                {source.title}
                <ExternalLink aria-hidden="true" size={12} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function CauseColumn({
  causeIds,
  onSelectCause,
  onSelectCategory,
  title
}: {
  causeIds: string[];
  onSelectCause: (cause: Cause) => void;
  onSelectCategory: (category: PiavCategory) => void;
  title: string;
}) {
  return (
    <section className="rounded-md border border-clinical-line p-2.5">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-clinical-muted">
        {title}
      </h4>
      <div className="mt-2 grid gap-1.5">
        {causeIds.map((id) => {
          const cause = causeById.get(id);
          if (!cause) {
            return (
              <span
                className="rounded-md bg-slate-50 px-2 py-1.5 text-xs leading-5 text-clinical-muted"
                key={id}
              >
                {humanizeId(id)} · noch nicht als Cause-Karte angelegt
              </span>
            );
          }

          return (
            <div className="rounded-md bg-clinical-surface p-2" key={cause.id}>
              <button
                className="block text-left text-sm font-semibold leading-5 text-clinical-ink hover:text-clinical-accent"
                onClick={() => onSelectCause(cause)}
                type="button"
              >
                {cause.title}
              </button>
              <button
                className="mt-1 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-clinical-accent hover:bg-teal-50"
                onClick={() => onSelectCategory(cause.category)}
                type="button"
              >
                {getCategoryLabel(cause.category)}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const humanizeId = (id: string) =>
  id
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü")
    .replace(/-/g, " ");
