import { categories } from "../data/categories";
import { causes } from "../data/causes";
import { specialties } from "../data/specialties";
import { symptomEntries } from "../data/symptoms";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { synonymGroups } from "./searchSynonyms";

const addTerm = (terms: Set<string>, value: string) => {
  const trimmed = value.trim();
  if (trimmed.length >= 3) {
    terms.add(trimmed);
  }
};

export const getSearchSuggestions = (query: string, limit = 8) => {
  const normalizedQuery = normalizeSearchTerm(query);
  if (!normalizedQuery) {
    return [];
  }

  const terms = new Set<string>();

  categories.forEach((category) => {
    addTerm(terms, category.title);
    addTerm(terms, category.subtitle);
  });

  specialties.forEach((specialty) => addTerm(terms, specialty.label));

  causes.forEach((cause) => {
    addTerm(terms, cause.title);
    cause.tags.forEach((tag) => addTerm(terms, tag));
    cause.relatedSymptoms.forEach((symptom) => addTerm(terms, symptom));
    cause.redFlags.forEach((redFlag) => addTerm(terms, redFlag));
    cause.examples.forEach((example) => addTerm(terms, example));
    cause.searchBoostTerms?.forEach((term) => addTerm(terms, term));
    cause.sources.forEach((source) => addTerm(terms, source.title));
  });

  symptomEntries.forEach((entry) => {
    addTerm(terms, entry.title);
    entry.synonyms.forEach((synonym) => addTerm(terms, synonym));
    entry.tags.forEach((tag) => addTerm(terms, tag));
    entry.redFlags.forEach((redFlag) => addTerm(terms, redFlag));
    entry.sources.forEach((source) => addTerm(terms, source.title));
  });

  synonymGroups.flat().forEach((synonym) => addTerm(terms, synonym));

  return Array.from(terms)
    .filter((term) => normalizeSearchTerm(term).includes(normalizedQuery))
    .sort((a, b) => {
      const normalizedA = normalizeSearchTerm(a);
      const normalizedB = normalizeSearchTerm(b);
      const startsA = normalizedA.startsWith(normalizedQuery);
      const startsB = normalizedB.startsWith(normalizedQuery);
      if (startsA !== startsB) {
        return startsA ? -1 : 1;
      }
      return a.length - b.length || a.localeCompare(b, "de");
    })
    .slice(0, limit);
};
