import Fuse from "fuse.js";
import { causes } from "../data/causes";
import { specialties } from "../data/specialties";
import type { SymptomEntry } from "../types/symptom";
import { getCategoryLabel } from "./getCategoryLabel";
import { normalizeSearchTerm } from "./normalizeSearchTerm";

interface SearchableSymptom extends SymptomEntry {
  causeTerms: string;
  categoryTerms: string;
  specialtyTerms: string;
  sourceTerms: string;
  primaryNormalizedText: string;
  normalizedText: string;
}

interface SearchIndex {
  fuse: Fuse<SearchableSymptom>;
  items: SearchableSymptom[];
}

const causeTitleById = new Map(causes.map((cause) => [cause.id, cause.title]));

const enrichSymptom = (entry: SymptomEntry): SearchableSymptom => {
  const allCauseIds = [
    ...entry.commonCauseIds,
    ...entry.importantCauseIds,
    ...entry.rareButImportantCauseIds
  ];
  const causeTerms = allCauseIds
    .map((id) => causeTitleById.get(id) ?? "")
    .filter(Boolean)
    .join(" ");
  const categoryTerms = entry.piavCategories.map(getCategoryLabel).join(" ");
  const specialtyTerms = entry.specialties
    .map((specialty) => specialties.find((item) => item.id === specialty)?.label ?? specialty)
    .join(" ");
  const sourceTerms = entry.sources
    .map((source) => `${source.title} ${source.type} ${source.url}`)
    .join(" ");
  const primaryNormalizedText = normalizeSearchTerm(
    [
      entry.title,
      entry.kind,
      entry.shortDescription,
      entry.synonyms.join(" "),
      entry.tags.join(" "),
      causeTerms,
      categoryTerms
    ].join(" ")
  );
  const normalizedText = normalizeSearchTerm(
    [
      primaryNormalizedText,
      entry.redFlags.join(" "),
      entry.suggestedBasicWorkup.join(" "),
      specialtyTerms,
      sourceTerms
    ].join(" ")
  );

  return {
    ...entry,
    causeTerms,
    categoryTerms,
    specialtyTerms,
    sourceTerms,
    primaryNormalizedText,
    normalizedText
  };
};

const indexCache = new WeakMap<readonly SymptomEntry[], SearchIndex>();

const getSearchIndex = (entries: readonly SymptomEntry[]) => {
  const cached = indexCache.get(entries);
  if (cached) {
    return cached;
  }

  const items = entries.map(enrichSymptom);
  const fuse = new Fuse(items, {
    threshold: 0.24,
    ignoreLocation: true,
    includeScore: true,
    keys: [
      { name: "title", weight: 0.25 },
      { name: "synonyms", weight: 0.22 },
      { name: "tags", weight: 0.16 },
      { name: "causeTerms", weight: 0.2 },
      { name: "categoryTerms", weight: 0.08 },
      { name: "specialtyTerms", weight: 0.08 },
      { name: "sourceTerms", weight: 0.06 },
      { name: "shortDescription", weight: 0.1 },
      { name: "redFlags", weight: 0.08 },
      { name: "normalizedText", weight: 0.22 }
    ]
  });

  const index = { fuse, items };
  indexCache.set(entries, index);
  return index;
};

export const searchSymptoms = (entries: SymptomEntry[], query: string) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return entries;
  }

  const { fuse, items } = getSearchIndex(entries);
  const byId = new Map<string, SymptomEntry>();

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

  if (normalizeSearchTerm(trimmed).length >= 4 && byId.size < 6) {
    fuse.search(trimmed).slice(0, 6).forEach((result) => {
      if ((result.score ?? 1) <= 0.24) {
        byId.set(result.item.id, result.item);
      }
    });
  }

  return Array.from(byId.values());
};
