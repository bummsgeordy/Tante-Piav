export const synonymDictionary = {
  hypertonie: [
    "arterielle Hypertonie",
    "Bluthochdruck",
    "hoher Blutdruck",
    "schwer einstellbarer Blutdruck",
    "therapieresistente Hypertonie"
  ],
  dyspnoe: ["Luftnot", "Atemnot", "Kurzatmigkeit", "Belastungsdyspnoe"],
  oedem: ["Ödem", "Ödeme", "Oedem", "Oedeme", "Wassereinlagerung", "Beinödeme", "geschwollene Beine"],
  uebelkeit: ["Übelkeit", "Uebelkeit", "Nausea", "Brechreiz", "Erbrechen", "Vomitus"],
  palpitationen: ["Herzrasen", "Tachykardie", "Herzstolpern", "Pulsrasen", "Arrhythmie"],
  proteinurie: ["Albuminurie", "Mikroalbuminurie", "Makroalbuminurie", "Eiweiß im Urin", "Eiweiss im Urin", "ACR"],
  nierenschwaeche: ["Nierenschwäche", "Niereninsuffizienz", "eGFR", "Kreatinin", "AKI", "CKD"],
  muedigkeit: ["Müdigkeit", "Fatigue", "Erschöpfung", "Leistungsknick", "Schwäche"],
  gewichtsverlust: ["Gewichtsabnahme", "ungewollte Gewichtsabnahme", "Kachexie", "B-Symptomatik"],
  thoraxschmerz: ["Brustschmerz", "Brustdruck", "retrosternaler Schmerz", "Angina pectoris"],
  hyperkalzaemie: ["Hyperkalzämie", "Calcium hoch", "Kalzium hoch", "Ca hoch"],
  hyponatriaemie: ["Hyponatriämie", "Natrium niedrig", "niedriges Natrium", "Na niedrig", "SIADH"],
  diabetes: ["Zucker", "Blutzucker", "Hyperglykämie", "Hypoglykämie", "HbA1c"],
  schilddruese: ["Schilddrüse", "TSH", "Hyperthyreose", "Hypothyreose", "Basedow", "Hashimoto"]
} satisfies Record<string, string[]>;

export const dictionarySynonymGroups = Object.entries(synonymDictionary).map(
  ([canonical, synonyms]) => [canonical, ...synonyms]
);

export const canonicalSearchReplacements: Record<string, string> = {
  bluthochdruck: "hypertonie",
  "hoher blutdruck": "hypertonie",
  "arterielle hypertonie": "hypertonie",
  luftnot: "dyspnoe",
  atemnot: "dyspnoe",
  kurzatmigkeit: "dyspnoe",
  wassereinlagerung: "oedem",
  oedeme: "oedem",
  oedem: "oedem",
  uebelkeit: "uebelkeit",
  nausea: "uebelkeit",
  vomitus: "erbrechen",
  herzrasen: "palpitationen",
  tachykardie: "palpitationen",
  herzstolpern: "palpitationen",
  albuminurie: "proteinurie",
  "eiweiss im urin": "proteinurie",
  acr: "proteinurie",
  nierenschwaeche: "nierenschwaeche",
  niereninsuffizienz: "nierenschwaeche",
  ckd: "nierenschwaeche",
  aki: "nierenschwaeche",
  erschoepfung: "muedigkeit",
  fatigue: "muedigkeit",
  brustschmerz: "thoraxschmerz",
  brustdruck: "thoraxschmerz",
  hyperkalzaemie: "hyperkalzaemie",
  "calcium hoch": "hyperkalzaemie",
  "kalzium hoch": "hyperkalzaemie",
  hyponatriaemie: "hyponatriaemie",
  "natrium niedrig": "hyponatriaemie",
  zucker: "diabetes",
  blutzucker: "diabetes",
  schilddruese: "schilddruese"
};
