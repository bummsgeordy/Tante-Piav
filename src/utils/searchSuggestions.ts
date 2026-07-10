import { categories } from "../data/categories";
import { causes } from "../data/causes";
import { specialties } from "../data/specialties";
import { symptomEntries } from "../data/symptoms";
import type { SymptomKind } from "../types/symptom";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { synonymGroups } from "./searchSynonyms";

export type SearchSuggestionKind =
  | "Ursache"
  | "Symptom"
  | "Befund"
  | "Labor"
  | "Syndrom"
  | "Vitalparameter"
  | "Kategorie"
  | "Fachgebiet"
  | "Suchbegriff";

export interface SearchSuggestion {
  term: string;
  kind: SearchSuggestionKind;
}

interface IndexedSuggestion extends SearchSuggestion {
  normalized: string;
  priority: number;
}

const kindLabels: Record<SymptomKind, SearchSuggestionKind> = {
  symptom: "Symptom",
  befund: "Befund",
  labor: "Labor",
  syndrom: "Syndrom",
  vitalparameter: "Vitalparameter"
};

let cachedSuggestionTerms: IndexedSuggestion[] | null = null;

const getSuggestionTerms = () => {
  if (cachedSuggestionTerms) {
    return cachedSuggestionTerms;
  }

  const terms = new Map<string, IndexedSuggestion>();
  const addTerm = (value: string, kind: SearchSuggestionKind, priority: number) => {
    const term = value.trim();
    const normalized = normalizeSearchTerm(term);
    if (term.length < 3 || !normalized) {
      return;
    }

    const existing = terms.get(normalized);
    if (!existing || priority < existing.priority) {
      terms.set(normalized, { term, kind, normalized, priority });
    }
  };

  categories.forEach((category) => {
    addTerm(category.title, "Kategorie", 2);
    addTerm(category.subtitle, "Suchbegriff", 7);
  });
  specialties.forEach((specialty) => addTerm(specialty.label, "Fachgebiet", 5));

  causes.forEach((cause) => {
    addTerm(cause.title, "Ursache", 0);
    cause.tags.forEach((tag) => addTerm(tag, "Suchbegriff", 6));
    cause.relatedSymptoms.forEach((symptom) => addTerm(symptom, "Suchbegriff", 5));
    cause.redFlags.forEach((redFlag) => addTerm(redFlag, "Suchbegriff", 8));
    cause.examples.forEach((example) => addTerm(example, "Suchbegriff", 7));
    cause.searchBoostTerms?.forEach((term) => addTerm(term, "Suchbegriff", 4));
  });

  symptomEntries.forEach((entry) => {
    const label = kindLabels[entry.kind];
    addTerm(entry.title, label, 0);
    entry.synonyms.forEach((synonym) => addTerm(synonym, label, 1));
    entry.tags.forEach((tag) => addTerm(tag, "Suchbegriff", 5));
  });

  synonymGroups.flat().forEach((synonym) => addTerm(synonym, "Suchbegriff", 6));
  cachedSuggestionTerms = Array.from(terms.values());
  return cachedSuggestionTerms;
};

export const getSearchSuggestions = (query: string, limit = 8): SearchSuggestion[] => {
  const normalizedQuery = normalizeSearchTerm(query);
  if (!normalizedQuery) {
    return [];
  }

  return getSuggestionTerms()
    .filter(({ normalized }) => normalized.includes(normalizedQuery))
    .sort((a, b) => {
      const startsA = a.normalized.startsWith(normalizedQuery);
      const startsB = b.normalized.startsWith(normalizedQuery);
      if (startsA !== startsB) {
        return startsA ? -1 : 1;
      }
      return a.priority - b.priority || a.term.length - b.term.length || a.term.localeCompare(b.term, "de");
    })
    .slice(0, limit)
    .map(({ term, kind }) => ({ term, kind }));
};
