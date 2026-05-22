import Fuse from "fuse.js";
import { specialties } from "../data/specialties";
import { symptomEntries } from "../data/symptoms";
import type { Cause } from "../types/medical";
import { getCategoryLabel } from "./getCategoryLabel";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { expandSearchQuery } from "./searchSynonyms";

interface SearchableCause extends Cause {
  searchCategory: string;
  searchSpecialties: string;
  sourceTerms: string;
  normalizedText: string;
}

const enrichCause = (cause: Cause): SearchableCause => {
  const searchCategory = getCategoryLabel(cause.category);
  const searchSpecialties = cause.specialties
    .map((specialty) => specialties.find((item) => item.id === specialty)?.label ?? specialty)
    .join(" ");
  const sourceTerms = cause.sources
    .map((source) => `${source.title} ${source.type} ${source.url}`)
    .join(" ");

  const normalizedText = normalizeSearchTerm(
    [
      cause.title,
      searchCategory,
      cause.shortDescription,
      searchSpecialties,
      cause.tags.join(" "),
      cause.relatedSymptoms.join(" "),
      cause.searchBoostTerms?.join(" ") ?? "",
      cause.symptomEntryIds?.join(" ") ?? "",
      getLinkedSymptomTerms(cause).join(" "),
      sourceTerms,
      cause.redFlags.join(" ")
    ].join(" ")
  );

  return {
    ...cause,
    searchCategory,
    searchSpecialties,
    sourceTerms,
    normalizedText
  };
};

const createFuse = (causes: Cause[]) =>
  new Fuse(causes.map(enrichCause), {
    threshold: 0.34,
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

export const searchCauses = (causes: Cause[], query: string) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return causes;
  }

  const fuse = createFuse(causes);
  const byId = new Map<string, Cause>();

  expandSearchQuery(trimmed).forEach((queryVariant) => {
    fuse.search(queryVariant).forEach((result) => {
      byId.set(result.item.id, result.item);
    });
  });

  return Array.from(byId.values());
};

const getLinkedSymptomTerms = (cause: Cause) => {
  const related = new Set([...(cause.symptomEntryIds ?? []), ...cause.relatedSymptoms]);

  return symptomEntries
    .filter((entry) => related.has(entry.id) || entry.commonCauseIds.includes(cause.id) || entry.importantCauseIds.includes(cause.id) || entry.rareButImportantCauseIds.includes(cause.id))
    .flatMap((entry) => [entry.title, entry.kind, ...entry.synonyms, ...entry.tags, ...entry.redFlags]);
};
