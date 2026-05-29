import { symptomEntries } from "../data/symptoms";
import type { Cause } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";
import { normalizeSearchTerm } from "./normalizeSearchTerm";

const symptomByLookupTerm = new Map<string, SymptomEntry>();
const symptomsByCauseId = new Map<string, SymptomEntry[]>();

symptomEntries.forEach((entry) => {
  [entry.id, entry.title, ...entry.synonyms].forEach((term) => {
    symptomByLookupTerm.set(normalizeSearchTerm(term), entry);
  });

  [...entry.commonCauseIds, ...entry.importantCauseIds, ...entry.rareButImportantCauseIds].forEach(
    (causeId) => {
      const current = symptomsByCauseId.get(causeId) ?? [];
      current.push(entry);
      symptomsByCauseId.set(causeId, current);
    }
  );
});

export const getLinkedSymptomsForCause = (cause: Cause) => {
  const linked = new Map<string, SymptomEntry>();

  cause.symptomEntryIds?.forEach((id) => {
    const entry = symptomByLookupTerm.get(normalizeSearchTerm(id));
    if (entry) {
      linked.set(entry.id, entry);
    }
  });

  symptomsByCauseId.get(cause.id)?.forEach((entry) => linked.set(entry.id, entry));

  cause.relatedSymptoms.forEach((term) => {
    const entry = symptomByLookupTerm.get(normalizeSearchTerm(term));
    if (entry) {
      linked.set(entry.id, entry);
    }
  });

  return Array.from(linked.values());
};
