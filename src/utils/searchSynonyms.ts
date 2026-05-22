import { symptomEntries } from "../data/symptoms";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { dictionarySynonymGroups } from "./synonymDictionary";

const manualSynonymGroups = [
  ["thoraxschmerz", "brustschmerz", "retrosternaler schmerz", "herzschmerz"],
  ["dyspnoe", "atemnot", "luftnot", "kurzatmigkeit"],
  ["hypertonie", "hoher blutdruck", "bluthochdruck", "arterielle hypertonie"],
  ["oedeme", "ödeme", "wassereinlagerung", "beinoedeme", "beinödeme", "anasarka"],
  ["uebelkeit", "übelkeit", "nausea", "erbrechen", "vomitus", "brechreiz"],
  ["palpitationen", "herzrasen", "tachykardie", "herzstolpern", "arrhythmie"],
  ["proteinurie", "albuminurie", "eiweiss im urin", "eiweiß im urin", "acr"],
  ["egfr", "kreatinin", "niereninsuffizienz", "nierenschwaeche", "nierenschwäche", "aki", "ckd"],
  ["synkope", "ohnmacht", "kollaps", "bewusstlosigkeit"],
  ["muedigkeit", "fatigue", "erschoepfung", "leistungsknick"],
  ["gewichtsverlust", "abnahme", "ungewollter gewichtsverlust", "b-symptome"],
  ["fieber", "temperatur", "infekt", "infektion"],
  ["bauchschmerz", "abdominalschmerz", "akutes abdomen"],
  ["kopfschmerz", "cephalgie", "schaedel", "kopfweh"],
  ["schwindel", "vertigo", "benommenheit"],
  ["polyurie", "polydipsie", "durst", "viel wasserlassen"],
  ["diabetes", "zucker", "blutzucker", "hyperglykaemie", "hypoglykaemie"],
  ["hyponatriaemie", "natrium", "niedriges natrium"],
  ["hyperkaliaemie", "kalium", "hohes kalium"],
  ["hyperkalzaemie", "calcium", "hohes calcium"],
  ["anaemie", "blutarmut", "eisenmangel", "haemoglobin"],
  ["akutes koronarsyndrom", "acs", "herzinfarkt", "myokardinfarkt"],
  ["schlaganfall", "tia", "apoplex", "stroke"],
  ["lungenembolie", "embolie", "thrombose"],
  ["harnwegsinfekt", "blasenentzuendung", "dysurie", "pyelonephritis"],
  ["schilddruese", "tsh", "hyperthyreose", "hypothyreose", "basedow", "hashimoto"],
  ["zoeliakie", "gluten", "malabsorption"],
  ["angst", "panik", "panikattacke", "hyperventilation"]
];

const symptomSynonymGroups = symptomEntries
  .map((entry) =>
    Array.from(new Set([entry.id, entry.title, ...entry.synonyms, ...entry.tags])).filter(
      (term) => term.trim().length >= 3
    )
  )
  .filter((group) => group.length >= 2);

export const synonymGroups = [
  ...manualSynonymGroups,
  ...dictionarySynonymGroups,
  ...symptomSynonymGroups
];

export const expandSearchQuery = (query: string) => {
  const normalizedQuery = normalizeSearchTerm(query);
  const variants = new Set([query.trim(), normalizedQuery]);

  for (const group of synonymGroups) {
    const normalizedGroup = group.map(normalizeSearchTerm);
    if (normalizedGroup.some((term) => normalizedQuery.includes(term))) {
      group.forEach((term) => variants.add(term));
      normalizedGroup.forEach((term) => variants.add(term));
    }
  }

  return Array.from(variants).filter(Boolean);
};
