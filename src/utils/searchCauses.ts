import Fuse from "fuse.js";
import { specialties } from "../data/specialties";
import { symptomEntries } from "../data/symptoms";
import type { Cause } from "../types/medical";
import { getCategoryLabel } from "./getCategoryLabel";
import { normalizeSearchTerm } from "./normalizeSearchTerm";

interface SearchableCause extends Cause {
  searchCategory: string;
  searchSpecialties: string;
  sourceTerms: string;
  primaryNormalizedText: string;
  normalizedText: string;
}

interface SearchIndex {
  fuse: Fuse<SearchableCause>;
  items: SearchableCause[];
}

const enrichCause = (cause: Cause): SearchableCause => {
  const searchCategory = getCategoryLabel(cause.category);
  const searchSpecialties = cause.specialties
    .map((specialty) => specialties.find((item) => item.id === specialty)?.label ?? specialty)
    .join(" ");
  const sourceTerms = cause.sources
    .map((source) => `${source.title} ${source.type} ${source.url}`)
    .join(" ");

  const primaryNormalizedText = normalizeSearchTerm(
    [
      cause.title,
      searchCategory,
      cause.shortDescription,
      cause.tags.join(" "),
      cause.relatedSymptoms.join(" "),
      cause.searchBoostTerms?.join(" ") ?? "",
      cause.symptomEntryIds?.join(" ") ?? "",
      getLinkedSymptomTerms(cause).join(" ")
    ].join(" ")
  );
  const normalizedText = normalizeSearchTerm(
    [
      primaryNormalizedText,
      searchSpecialties,
      sourceTerms,
      cause.redFlags.join(" ")
    ].join(" ")
  );

  return {
    ...cause,
    searchCategory,
    searchSpecialties,
    sourceTerms,
    primaryNormalizedText,
    normalizedText
  };
};

const indexCache = new WeakMap<readonly Cause[], SearchIndex>();

const getSearchIndex = (causes: readonly Cause[]) => {
  const cached = indexCache.get(causes);
  if (cached) {
    return cached;
  }

  const items = causes.map(enrichCause);
  const fuse = new Fuse(items, {
    threshold: 0.24,
    ignoreLocation: true,
    includeScore: true,
    keys: [
      { name: "title", weight: 0.28 },
      { name: "searchCategory", weight: 0.12 },
      { name: "shortDescription", weight: 0.14 },
      { name: "searchSpecialties", weight: 0.1 },
      { name: "tags", weight: 0.16 },
      { name: "relatedSymptoms", weight: 0.12 },
      { name: "searchBoostTerms", weight: 0.18 },
      { name: "symptomEntryIds", weight: 0.08 },
      { name: "sourceTerms", weight: 0.06 },
      { name: "redFlags", weight: 0.08 },
      { name: "normalizedText", weight: 0.2 }
    ]
  });

  const index = { fuse, items };
  indexCache.set(causes, index);
  return index;
};

export const searchCauses = (causes: Cause[], query: string) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return causes;
  }

  const { fuse, items } = getSearchIndex(causes);
  const byId = new Map<string, Cause>();

  [trimmed, normalizeSearchTerm(trimmed)].forEach((queryVariant) => {
    const normalizedVariant = normalizeSearchTerm(queryVariant);
    if (!normalizedVariant) {
      return;
    }

    items.forEach((item) => {
      if (item.primaryNormalizedText.includes(normalizedVariant)) {
        byId.set(item.id, item);
      }
    });

  });

  if (normalizeSearchTerm(trimmed).length >= 4 && byId.size < 12) {
    fuse.search(trimmed).slice(0, 12).forEach((result) => {
      if ((result.score ?? 1) <= 0.24) {
        byId.set(result.item.id, result.item);
      }
    });
  }

  return Array.from(byId.values());
};

const getLinkedSymptomTerms = (cause: Cause) => {
  const related = new Set([...(cause.symptomEntryIds ?? []), ...cause.relatedSymptoms]);

  return symptomEntries
    .filter((entry) => related.has(entry.id) || entry.commonCauseIds.includes(cause.id) || entry.importantCauseIds.includes(cause.id) || entry.rareButImportantCauseIds.includes(cause.id))
    .flatMap((entry) => [entry.title, entry.kind, ...entry.synonyms, ...entry.tags]);
};
