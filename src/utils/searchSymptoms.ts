import Fuse from "fuse.js";
import { causes } from "../data/causes";
import { specialties } from "../data/specialties";
import type { SymptomEntry } from "../types/symptom";
import { getCategoryLabel } from "./getCategoryLabel";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { expandSearchQuery } from "./searchSynonyms";

interface SearchableSymptom extends SymptomEntry {
  causeTerms: string;
  categoryTerms: string;
  specialtyTerms: string;
  normalizedText: string;
}

const causeTitleById = new Map(causes.map((cause) => [cause.id, cause.title]));

const enrichSymptom = (entry: SymptomEntry): SearchableSymptom => {
  const allCauseIds = [
    ...entry.commonCauseIds,
    ...entry.importantCauseIds,
    ...entry.rareButImportantCauseIds
  ];
  const causeTerms = allCauseIds
    .map((id) => causeTitleById.get(id) ?? id)
    .join(" ");
  const categoryTerms = entry.piavCategories.map(getCategoryLabel).join(" ");
  const specialtyTerms = entry.specialties
    .map((specialty) => specialties.find((item) => item.id === specialty)?.label ?? specialty)
    .join(" ");
  const normalizedText = normalizeSearchTerm(
    [
      entry.title,
      entry.kind,
      entry.shortDescription,
      entry.synonyms.join(" "),
      entry.tags.join(" "),
      entry.redFlags.join(" "),
      entry.suggestedBasicWorkup.join(" "),
      causeTerms,
      categoryTerms,
      specialtyTerms
    ].join(" ")
  );

  return {
    ...entry,
    causeTerms,
    categoryTerms,
    specialtyTerms,
    normalizedText
  };
};

const createFuse = (entries: SymptomEntry[]) =>
  new Fuse(entries.map(enrichSymptom), {
    threshold: 0.34,
    ignoreLocation: true,
    includeScore: true,
    keys: [
      { name: "title", weight: 0.25 },
      { name: "synonyms", weight: 0.22 },
      { name: "tags", weight: 0.16 },
      { name: "causeTerms", weight: 0.2 },
      { name: "shortDescription", weight: 0.1 },
      { name: "redFlags", weight: 0.08 },
      { name: "normalizedText", weight: 0.22 }
    ]
  });

export const searchSymptoms = (entries: SymptomEntry[], query: string) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return entries;
  }

  const fuse = createFuse(entries);
  const byId = new Map<string, SymptomEntry>();

  expandSearchQuery(trimmed).forEach((queryVariant) => {
    fuse.search(queryVariant).forEach((result) => {
      byId.set(result.item.id, result.item);
    });
  });

  return Array.from(byId.values());
};
