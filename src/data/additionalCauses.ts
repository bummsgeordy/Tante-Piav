import type { Cause } from "../types/medical";

export const additionalCauseSeeds: Partial<Cause>[] = [
  {
    id: "essenzielle-hypertonie",
    title: "Essenzielle arterielle Hypertonie",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["allgemeinmedizin", "innere-medizin", "kardiologie"],
    shortDescription:
      "Häufigste Form der Hypertonie; Diagnose nach Ausschluss offensichtlicher sekundärer Ursachen und Bestätigung durch wiederholte Messungen.",
    examples: ["primäre Hypertonie", "alters- und lebensstilassoziierte Hypertonie"],
    typicalClues: ["langsame Entwicklung", "positive Familienanamnese", "Adipositas oder metabolisches Syndrom"],
    redFlags: ["sehr hoher Blutdruck", "Endorganschaden", "junger Beginn", "Hypokaliämie", "therapieresistente Hypertonie"],
    relatedSymptoms: ["hoher-blutdruck"],
    symptomEntryIds: ["hoher-blutdruck"],
    searchBoostTerms: ["Bluthochdruck", "Hypertonie", "hoher Blutdruck"],
    tags: ["Hypertonie", "Blutdruck", "kardiovaskulär"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "AHA/ACC 2025 High Blood Pressure Guideline",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "primaerer-hyperaldosteronismus",
    title: "Primärer Hyperaldosteronismus",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "kardiologie", "nephrologie", "innere-medizin"],
    shortDescription:
      "Häufige endokrine Ursache sekundärer Hypertonie; besonders bei resistenter Hypertonie oder Hypokaliämie mitdenken.",
    examples: ["aldosteronproduzierendes Adenom", "bilaterale adrenale Hyperplasie"],
    typicalClues: ["Hypertonie", "Hypokaliämie möglich, aber nicht obligat", "therapieresistente Hypertonie", "Nebenniereninzidentalom"],
    redFlags: ["schwere Hypokaliämie", "Arrhythmie", "therapieresistente Hypertonie"],
    relatedSymptoms: ["hoher-blutdruck", "hypokaliaemie"],
    symptomEntryIds: ["hoher-blutdruck"],
    searchBoostTerms: ["Conn-Syndrom", "Aldosteron", "Renin", "Hypokaliämie", "sekundäre Hypertonie"],
    tags: ["Hyperaldosteronismus", "Conn", "sekundäre Hypertonie", "Hypokaliämie"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "NCBI Bookshelf: Secondary Hypertension",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK544305/",
        type: "review"
      },
      {
        title: "Endocrine Society Clinical Practice Guidelines",
        url: "https://www.endocrine.org/clinical-practice-guidelines",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "phaeochromozytom-paragangliom",
    title: "Phäochromozytom / Paragangliom",
    category: "endokrin-metabolisch",
    frequency: "selten",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "kardiologie", "innere-medizin"],
    shortDescription:
      "Seltene, aber wichtige Ursache paroxysmaler Hypertonie, Palpitationen, Schwitzen und Kopfschmerzen.",
    examples: ["Nebennierenmark-Tumor", "extraadrenales Paragangliom"],
    typicalClues: ["anfallsartige Hypertonie", "Kopfschmerz", "Schwitzen", "Palpitationen", "Blässe oder Tremor"],
    redFlags: ["hypertensive Krise", "Tachyarrhythmie", "perioperative Krise"],
    relatedSymptoms: ["hoher-blutdruck", "palpitationen-tachykardie", "gewichtsabnahme"],
    symptomEntryIds: ["hoher-blutdruck", "palpitationen-tachykardie", "gewichtsabnahme"],
    searchBoostTerms: ["Katecholamine", "Metanephrine", "paroxysmale Hypertonie", "Schwitzen"],
    tags: ["Phäochromozytom", "Paragangliom", "Hypertonie", "Palpitationen"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "Endocrine Society Clinical Practice Guidelines",
        url: "https://www.endocrine.org/clinical-practice-guidelines",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "chronische-niereninsuffizienz",
    title: "Chronische Nierenkrankheit / CKD",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["nephrologie", "diabetologie", "kardiologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Chronisch reduzierte Nierenfunktion und/oder Zeichen von Nierenschädigung; eng verbunden mit Hypertonie, Diabetes, Proteinurie und kardiovaskulärem Risiko.",
    examples: ["diabetische Nephropathie", "hypertensive Nephropathie", "glomeruläre Erkrankungen"],
    typicalClues: ["eGFR <60 über mindestens 3 Monate", "Albuminurie", "Hypertonie", "Anämie", "Elektrolytstörungen"],
    redFlags: ["rascher eGFR-Abfall", "Proteinurie plus Hämaturie", "Hyperkaliämie", "Überwässerung", "urämische Symptome"],
    relatedSymptoms: ["proteinurie", "hoher-blutdruck", "nierenschwaeche-egfr-abfall", "muedigkeit-leistungsknick", "gewichtszunahme-oedeme"],
    symptomEntryIds: ["proteinurie", "hoher-blutdruck", "nierenschwaeche-egfr-abfall", "muedigkeit-leistungsknick", "gewichtszunahme-oedeme"],
    searchBoostTerms: ["CKD", "eGFR", "Kreatinin", "Albuminurie", "Niereninsuffizienz"],
    tags: ["CKD", "Niereninsuffizienz", "Albuminurie", "Hypertonie", "Diabetes"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "KDIGO 2024 CKD Guideline",
        url: "https://www.kidney-international.org/article/S0085-2538(23)00766-4/fulltext",
        type: "leitlinie"
      },
      {
        title: "NICE NG203: Chronic kidney disease",
        url: "https://www.nice.org.uk/guidance/ng203",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "herzinsuffizienz",
    symptomEntryIds: ["dyspnoe-luftnot", "gewichtszunahme-oedeme", "muedigkeit-leistungsknick", "hoher-blutdruck"],
    searchBoostTerms: ["HF", "HFrEF", "HFpEF", "Ödeme", "NT-proBNP", "Orthopnoe"],
    practicalNotes: ["Rasche Gewichtszunahme spricht bei passender Klinik eher für Flüssigkeitsretention als für Fettmasse."],
    relatedSymptoms: ["Dyspnoe", "Ödeme", "Gewichtszunahme", "Müdigkeit", "Orthopnoe", "dyspnoe-luftnot", "gewichtszunahme-oedeme"],
    sources: [
      {
        title: "AHA/ACC/HFSA 2022 Heart Failure Guideline",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063",
        type: "leitlinie"
      },
      {
        title: "NCBI Bookshelf: Heart Failure",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK430873/",
        type: "review"
      }
    ]
  },
  {
    id: "hypothyreose",
    title: "Hypothyreose",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["endokrinologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Häufige endokrine Ursache von Müdigkeit, Kälteintoleranz, Gewichtszunahme, Obstipation, trockener Haut und depressiver Verstimmung.",
    examples: ["Hashimoto-Thyreoiditis", "postoperativ", "Radiojodtherapie", "medikamentös z. B. Amiodaron/Lithium"],
    typicalClues: ["Müdigkeit", "Kälteintoleranz", "Gewichtszunahme", "Obstipation", "Bradykardie"],
    redFlags: ["Myxödemkoma", "schwere Bradykardie", "Hypothermie", "Vigilanzminderung"],
    relatedSymptoms: ["muedigkeit-leistungsknick", "gewichtszunahme-oedeme", "hyponatriaemie"],
    symptomEntryIds: ["muedigkeit-leistungsknick", "gewichtszunahme-oedeme", "hyponatriaemie"],
    searchBoostTerms: ["TSH hoch", "fT4 niedrig", "Hashimoto", "Unterfunktion"],
    tags: ["Hypothyreose", "Hashimoto", "Müdigkeit", "Gewichtszunahme", "Hyponatriämie"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "NICE CKS: Hypothyroidism",
        url: "https://cks.nice.org.uk/topics/hypothyroidism/",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "hyperthyreose",
    title: "Hyperthyreose / Thyreotoxikose",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "kardiologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Endokrine Ursache von Gewichtsverlust, Palpitationen, Tremor, Wärmeintoleranz, Tachykardie und Vorhofflimmern.",
    examples: ["Morbus Basedow", "funktionelle Autonomie", "Thyreoiditis", "exogene Schilddrüsenhormone"],
    typicalClues: ["Gewichtsverlust", "Tachykardie", "Tremor", "Schwitzen", "innere Unruhe"],
    redFlags: ["thyreotoxische Krise", "Vorhofflimmern", "Herzinsuffizienz", "Fieber/Vigilanzminderung"],
    relatedSymptoms: ["gewichtsabnahme", "palpitationen-tachykardie", "dyspnoe-luftnot"],
    symptomEntryIds: ["gewichtsabnahme", "palpitationen-tachykardie", "dyspnoe-luftnot"],
    searchBoostTerms: ["TSH supprimiert", "Basedow", "T3", "T4", "Thyreotoxikose"],
    tags: ["Hyperthyreose", "Basedow", "Gewichtsverlust", "Tachykardie", "Vorhofflimmern"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AWMF Leitlinienregister", url: "https://register.awmf.org/", type: "leitlinie" },
      {
        title: "European Thyroid Association Guidelines",
        url: "https://www.eurothyroid.com/guidelines/",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "cushing-syndrom",
    title: "Cushing-Syndrom / Glukokortikoidexzess",
    category: "endokrin-metabolisch",
    frequency: "selten",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "diabetologie", "kardiologie", "innere-medizin"],
    shortDescription:
      "Seltene, aber wichtige Ursache von zentraler Gewichtszunahme, Hypertonie, Diabetes, Muskelschwäche, Hämatomneigung und Osteoporose; exogene Steroide sind häufigste Ursache.",
    examples: ["iatrogen durch Glukokortikoide", "ACTH-abhängig", "adrenal"],
    typicalClues: ["zentrale Adipositas", "Striae rubrae", "proximale Muskelschwäche", "Hypertonie", "Diabetes", "Osteoporose"],
    redFlags: ["schwere Hypokaliämie", "Infektanfälligkeit", "psychische Dekompensation", "Frakturen"],
    relatedSymptoms: ["gewichtszunahme-oedeme", "hoher-blutdruck", "muedigkeit-leistungsknick"],
    symptomEntryIds: ["gewichtszunahme-oedeme", "hoher-blutdruck", "muedigkeit-leistungsknick"],
    searchBoostTerms: ["Cortisol", "ACTH", "Striae", "Steroid", "Glukokortikoid"],
    tags: ["Cushing", "Cortisol", "Hypertonie", "Diabetes", "Gewichtszunahme"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "NIDDK: Cushing's Syndrome",
        url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/cushings-syndrome",
        type: "manual"
      },
      {
        title: "Endocrine Society Clinical Practice Guidelines",
        url: "https://www.endocrine.org/clinical-practice-guidelines",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "diabetes-mellitus-entgleisung",
    title: "Diabetes mellitus / Hyperglykämische Entgleisung",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["diabetologie", "endokrinologie", "innere-medizin", "allgemeinmedizin", "nephrologie", "kardiologie"],
    shortDescription:
      "Hyperglykämie kann Polyurie, Polydipsie, Gewichtsverlust, Müdigkeit, Infektneigung und bei Entgleisung DKA/HHS verursachen.",
    examples: ["Typ-2-Diabetes", "Typ-1-Diabetes", "LADA", "Steroid-induzierte Hyperglykämie", "HHS", "DKA"],
    typicalClues: ["Polyurie", "Polydipsie", "Müdigkeit", "Gewichtsverlust", "Infektionen", "Glukosurie"],
    redFlags: ["Ketone", "Azidose", "Erbrechen", "Bauchschmerz", "Tachypnoe", "Bewusstseinsstörung", "Exsikkose"],
    relatedSymptoms: ["polyurie-polydipsie", "gewichtsabnahme", "muedigkeit-leistungsknick", "uebelkeit-erbrechen"],
    symptomEntryIds: ["polyurie-polydipsie", "gewichtsabnahme", "muedigkeit-leistungsknick", "uebelkeit-erbrechen"],
    searchBoostTerms: ["Hyperglykämie", "DKA", "HHS", "Polyurie", "Polydipsie", "HbA1c"],
    tags: ["Diabetes", "Hyperglykämie", "DKA", "HHS", "Polyurie", "Gewichtsverlust"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "MSD Manual Professional: Type 2 Diabetes Mellitus",
        url: "https://www.msdmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-hypoglycemia/type-2-diabetes-mellitus",
        type: "manual"
      },
      { title: "ADA Standards of Care", url: "https://diabetesjournals.org/care/issue", type: "leitlinie" },
      { title: "DDG", url: "https://www.deutsche-diabetes-gesellschaft.de/", type: "leitlinie" }
    ]
  },
  {
    id: "nebenniereninsuffizienz",
    title: "Nebenniereninsuffizienz / Nebennierenkrise",
    category: "endokrin-metabolisch",
    frequency: "selten",
    urgency: "notfall",
    specialties: ["endokrinologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Wichtige endokrine Differenzialdiagnose bei Müdigkeit, Gewichtsverlust, Hypotonie, Hyponatriämie, Übelkeit/Erbrechen und Bauchschmerz.",
    examples: ["Morbus Addison", "sekundäre Nebenniereninsuffizienz", "Steroidabsetzen", "Hypophysenerkrankung"],
    typicalClues: ["Müdigkeit", "Gewichtsverlust", "Salzhunger", "Hypotonie", "Hyperpigmentierung bei primärer Form", "Hyponatriämie"],
    redFlags: ["Schock", "schwere Hypotonie", "Erbrechen", "Fieber/Infekt", "Hypoglykämie", "Bewusstseinsstörung"],
    relatedSymptoms: ["muedigkeit-leistungsknick", "gewichtsabnahme", "hyponatriaemie", "uebelkeit-erbrechen"],
    symptomEntryIds: ["muedigkeit-leistungsknick", "gewichtsabnahme", "hyponatriaemie", "uebelkeit-erbrechen"],
    searchBoostTerms: ["Addison", "Cortisol niedrig", "ACTH", "Nebennierenkrise", "Hyponatriämie"],
    tags: ["Nebenniereninsuffizienz", "Addison", "Hyponatriämie", "Gewichtsverlust", "Hypotonie"],
    hasMajorRedFlags: true,
    sources: [
      {
        title: "Endocrine Society Clinical Practice Guidelines",
        url: "https://www.endocrine.org/clinical-practice-guidelines",
        type: "leitlinie"
      }
    ]
  }
];
