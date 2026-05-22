export type PiavCategory =
  | "trauma"
  | "autoimmun"
  | "neoplastisch"
  | "toxisch-medikamentoes"
  | "endokrin-metabolisch"
  | "psychosomatisch-psychiatrisch"
  | "infektion"
  | "angeboren"
  | "vaskulaer-kardiovaskulaer";

export type Frequency = "haeufig" | "relevant" | "selten";
export type Urgency = "ambulant" | "zeitnah" | "notfall";

export type Specialty =
  | "allgemeinmedizin"
  | "innere-medizin"
  | "endokrinologie"
  | "diabetologie"
  | "kardiologie"
  | "nephrologie"
  | "pneumologie"
  | "gastroenterologie"
  | "neurologie"
  | "rheumatologie"
  | "onkologie"
  | "psychiatrie"
  | "paediatrie"
  | "gynaekologie"
  | "urologie"
  | "dermatologie"
  | "orthopaedie"
  | "infektiologie";

export interface SourceLink {
  title: string;
  url: string;
  type: "leitlinie" | "review" | "manual" | "studie" | "sonstiges";
}

export interface Cause {
  id: string;
  title: string;
  category: PiavCategory;
  frequency: Frequency;
  urgency: Urgency;
  specialties: Specialty[];
  shortDescription: string;
  examples: string[];
  typicalClues: string[];
  redFlags: string[];
  relatedSymptoms: string[];
  relatedCauses?: string[];
  sources: SourceLink[];
  tags: string[];
  hasMajorRedFlags: boolean;
  mdxSlug?: string;
  searchBoostTerms?: string[];
  symptomEntryIds?: string[];
  practicalNotes?: string[];
}

export interface Category {
  id: PiavCategory;
  acronym: "T" | "A" | "N" | "E" | "P" | "I" | "V";
  title: string;
  subtitle: string;
  description: string;
}

export interface SpecialtyOption {
  id: Specialty;
  label: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  completed?: boolean;
}

export interface CauseFilters {
  category: PiavCategory | "all";
  specialty: Specialty | "all";
  frequency: Frequency | "all";
  urgency: Urgency | "all";
  redFlagsOnly: boolean;
}
