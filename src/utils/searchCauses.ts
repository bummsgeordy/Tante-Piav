import Fuse from "fuse.js";
import { specialties } from "../data/specialties";
import type { Cause } from "../types/medical";
import { getCategoryLabel } from "./getCategoryLabel";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { expandSearchQuery } from "./searchSynonyms";

interface SearchableCause extends Cause {
  searchCategory: string;
  searchSpecialties: string;
  normalizedText: string;
}

const enrichCause = (cause: Cause): SearchableCause => {
  const searchCategory = getCategoryLabel(cause.category);
  const searchSpecialties = cause.specialties
    .map((specialty) => specialties.find((item) => item.id === specialty)?.label ?? specialty)
    .join(" ");

  const normalizedText = normalizeSearchTerm(
    [
      cause.title,
      searchCategory,
      cause.shortDescription,
      searchSpecialties,
      cause.tags.join(" "),
      cause.relatedSymptoms.join(" "),
      cause.redFlags.join(" ")
    ].join(" ")
  );

  return {
    ...cause,
    searchCategory,
    searchSpecialties,
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
