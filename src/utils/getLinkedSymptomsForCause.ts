import { symptomEntries } from "../data/symptoms";
import type { Cause } from "../types/medical";

export const getLinkedSymptomsForCause = (cause: Cause) => {
  const explicitIds = new Set(cause.symptomEntryIds ?? []);
  const relatedTerms = new Set(cause.relatedSymptoms.map((term) => term.toLowerCase()));

  return symptomEntries.filter((entry) => {
    if (explicitIds.has(entry.id)) {
      return true;
    }

    if (
      entry.commonCauseIds.includes(cause.id) ||
      entry.importantCauseIds.includes(cause.id) ||
      entry.rareButImportantCauseIds.includes(cause.id)
    ) {
      return true;
    }

    return relatedTerms.has(entry.id) || relatedTerms.has(entry.title.toLowerCase());
  });
};
