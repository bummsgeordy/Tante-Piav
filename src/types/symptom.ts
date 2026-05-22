import type { PiavCategory, SourceLink, Specialty } from "./medical";

export type SymptomPriority = "haeufig" | "wichtig" | "red-flag" | "selten";
export type SymptomKind = "symptom" | "befund" | "labor" | "syndrom" | "vitalparameter";

export interface SymptomEntry {
  id: string;
  title: string;
  kind: SymptomKind;
  synonyms: string[];
  shortDescription: string;
  redFlags: string[];
  commonCauseIds: string[];
  importantCauseIds: string[];
  rareButImportantCauseIds: string[];
  piavCategories: PiavCategory[];
  specialties: Specialty[];
  suggestedBasicWorkup: string[];
  tags: string[];
  sources: SourceLink[];
}
