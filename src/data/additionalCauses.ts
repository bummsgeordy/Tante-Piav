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
  },
  {
    id: "vasovagale-synkope",
    title: "Vasovagale / Reflexsynkope",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["allgemeinmedizin", "innere-medizin", "kardiologie"],
    shortDescription:
      "Häufige, meist benigne Synkopenform durch Reflexantwort mit Vasodilatation und/oder Bradykardie.",
    examples: ["Synkope bei Schmerz", "Synkope nach langem Stehen", "Situative Synkope"],
    typicalClues: ["Prodromi", "Übelkeit", "Schweißigkeit", "Auslöser", "rasche Erholung"],
    redFlags: ["fehlende Prodromi", "Belastungssynkope", "Synkope im Liegen", "Herzerkrankung"],
    relatedSymptoms: ["synkope-kollaps", "Schwindel", "Übelkeit"],
    symptomEntryIds: ["synkope-kollaps"],
    searchBoostTerms: ["Reflexsynkope", "vasovagal", "Ohnmacht", "Kollaps"],
    tags: ["Synkope", "Reflex", "vasovagal", "orthostatisch"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Syncope Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/1100/syncope.html", type: "review" },
      { title: "MSD Manual Professional: Syncope", url: "https://www.msdmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/syncope", type: "manual" }
    ]
  },
  {
    id: "orthostatische-hypotonie",
    title: "Orthostatische Hypotonie",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["allgemeinmedizin", "innere-medizin", "kardiologie", "neurologie"],
    shortDescription:
      "Blutdruckabfall beim Aufstehen, häufig durch Volumenmangel, Medikamente, autonome Dysfunktion oder Alter.",
    examples: ["Volumenmangel", "autonome Neuropathie", "medikamentös verstärkte Orthostase"],
    typicalClues: ["Schwindel beim Aufstehen", "Präsynkope", "Sturz", "Besserung im Liegen"],
    redFlags: ["Synkope mit Verletzung", "persistierende Hypotonie", "GI-Blutung", "neurologische Defizite"],
    relatedSymptoms: ["synkope-kollaps", "schwindel-vertigo"],
    symptomEntryIds: ["synkope-kollaps", "schwindel-vertigo"],
    searchBoostTerms: ["Orthostase", "Blutdruckabfall", "Präsynkope", "Aufstehen"],
    tags: ["Orthostase", "Hypotonie", "Schwindel", "Synkope"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Syncope Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/1100/syncope.html", type: "review" },
      { title: "AAFP: Dizziness Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/0500/dizziness.html", type: "review" }
    ]
  },
  {
    id: "tachyarrhythmie-bradyarrhythmie",
    title: "Tachy- oder Bradyarrhythmie",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["kardiologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Rhythmusstörungen können Synkope, Palpitationen, Schwindel, Dyspnoe oder hämodynamische Instabilität verursachen.",
    examples: ["Vorhofflimmern mit schneller Überleitung", "AV-Block", "ventrikuläre Tachykardie"],
    typicalClues: ["Palpitationen", "unregelmäßiger Puls", "plötzlicher Beginn", "EKG-Auffälligkeit"],
    redFlags: ["Synkope", "Thoraxschmerz", "Hypotonie", "bekannte Herzerkrankung"],
    relatedSymptoms: ["synkope-kollaps", "palpitationen-tachykardie", "schwindel-vertigo", "dyspnoe-luftnot"],
    symptomEntryIds: ["synkope-kollaps", "palpitationen-tachykardie", "schwindel-vertigo", "dyspnoe-luftnot"],
    searchBoostTerms: ["Arrhythmie", "Bradykardie", "Tachykardie", "AV-Block", "VT"],
    tags: ["Arrhythmie", "Synkope", "Palpitationen", "EKG"],
    hasMajorRedFlags: true,
    sources: [
      { title: "MSD Manual Professional: Palpitations", url: "https://www.msdmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/palpitations", type: "manual" },
      { title: "ESC Guidelines", url: "https://www.escardio.org/Guidelines", type: "leitlinie" }
    ]
  },
  {
    id: "aortenstenose-strukturelle-herzerkrankung",
    title: "Aortenstenose / strukturelle Herzerkrankung",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["kardiologie", "innere-medizin"],
    shortDescription:
      "Strukturelle Herzerkrankungen können Belastungssynkope, Dyspnoe, Thoraxschmerz oder Leistungsknick erklären.",
    examples: ["Aortenstenose", "hypertrophe Kardiomyopathie", "pulmonale Hypertonie"],
    typicalClues: ["Belastungssymptome", "Herzgeräusch", "Synkope", "Dyspnoe"],
    redFlags: ["Belastungssynkope", "Ruhedyspnoe", "Hypotonie", "Thoraxschmerz"],
    relatedSymptoms: ["synkope-kollaps", "dyspnoe-luftnot", "brustschmerz"],
    symptomEntryIds: ["synkope-kollaps", "dyspnoe-luftnot", "brustschmerz"],
    searchBoostTerms: ["Aortenstenose", "Herzgeräusch", "HOCM", "Kardiomyopathie"],
    tags: ["Aortenstenose", "Herzerkrankung", "Synkope", "Herzgeräusch"],
    hasMajorRedFlags: true,
    sources: [{ title: "ESC Guidelines", url: "https://www.escardio.org/Guidelines", type: "leitlinie" }]
  },
  {
    id: "gastrointestinale-blutung",
    title: "Gastrointestinale Blutung",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["gastroenterologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Akute oder chronische GI-Blutung kann Anämie, Bauchschmerz, Synkope oder Kreislaufinstabilität verursachen.",
    examples: ["Ulkusblutung", "Divertikelblutung", "Tumorblutung"],
    typicalClues: ["Meläna", "Hämatochezie", "Hämatemesis", "Eisenmangel", "Antikoagulation"],
    redFlags: ["Schock", "Synkope", "rascher Hb-Abfall", "Bluterbrechen", "Teerstuhl"],
    relatedSymptoms: ["anaemie", "akuter-bauchschmerz", "synkope-kollaps"],
    symptomEntryIds: ["anaemie", "akuter-bauchschmerz", "synkope-kollaps"],
    searchBoostTerms: ["GI-Blutung", "Meläna", "Hämatochezie", "Hämatemesis", "okkulte Blutung"],
    tags: ["Blutung", "Anämie", "Gastroenterologie", "Notfall"],
    hasMajorRedFlags: true,
    sources: [
      { title: "MSD Manual Professional", url: "https://www.msdmanuals.com/professional", type: "manual" },
      { title: "AWMF Leitlinienregister", url: "https://register.awmf.org/", type: "leitlinie" }
    ]
  },
  {
    id: "appendizitis",
    title: "Appendizitis",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["gastroenterologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Häufige chirurgische Ursache akuter Bauchschmerzen, klassisch rechts unten, aber klinisch variabel.",
    examples: ["unkomplizierte Appendizitis", "perforierte Appendizitis"],
    typicalClues: ["periumbilikaler Beginn", "Wanderung nach rechts unten", "Fieber", "Übelkeit"],
    redFlags: ["Peritonismus", "Sepsiszeichen", "freie Luft/Perforation", "Schwangerschaft"],
    relatedSymptoms: ["akuter-bauchschmerz", "uebelkeit-erbrechen", "fieber-unklarer-genese"],
    symptomEntryIds: ["akuter-bauchschmerz", "uebelkeit-erbrechen", "fieber-unklarer-genese"],
    searchBoostTerms: ["Blinddarm", "McBurney", "rechtsseitiger Unterbauchschmerz"],
    tags: ["Appendizitis", "Bauchschmerz", "Fieber", "Chirurgie"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Acute Abdominal Pain in Adults", url: "https://www.aafp.org/pubs/afp/issues/2023/0600/acute-abdominal-pain-adults.html", type: "review" },
      { title: "NCBI Bookshelf: Acute Abdomen", url: "https://www.ncbi.nlm.nih.gov/books/NBK459328/", type: "review" }
    ]
  },
  {
    id: "gallensteine-cholezystitis",
    title: "Gallensteine / Cholezystitis",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["gastroenterologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Biliäre Kolik und Cholezystitis verursachen häufig rechtsseitige Oberbauchschmerzen, Übelkeit und ggf. Fieber.",
    examples: ["biliäre Kolik", "akute Cholezystitis", "Choledocholithiasis"],
    typicalClues: ["rechter Oberbauch", "postprandial", "Übelkeit", "Murphy-Zeichen"],
    redFlags: ["Ikterus plus Fieber", "Sepsis", "Peritonismus", "Pankreatitiszeichen"],
    relatedSymptoms: ["akuter-bauchschmerz", "uebelkeit-erbrechen", "fieber-unklarer-genese"],
    symptomEntryIds: ["akuter-bauchschmerz", "uebelkeit-erbrechen", "fieber-unklarer-genese"],
    searchBoostTerms: ["Gallenblase", "biliäre Kolik", "Choledocholithiasis", "Murphy"],
    tags: ["Gallensteine", "Cholezystitis", "Oberbauch", "Ikterus"],
    hasMajorRedFlags: true,
    sources: [{ title: "AAFP: Acute Abdominal Pain in Adults", url: "https://www.aafp.org/pubs/afp/issues/2023/0600/acute-abdominal-pain-adults.html", type: "review" }]
  },
  {
    id: "pankreatitis",
    title: "Akute Pankreatitis",
    category: "toxisch-medikamentoes",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["gastroenterologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Entzündung des Pankreas, häufig biliär oder alkoholassoziiert, mit Oberbauchschmerz und Übelkeit/Erbrechen.",
    examples: ["biliäre Pankreatitis", "alkoholassoziierte Pankreatitis", "medikamentös"],
    typicalClues: ["gürtelförmiger Oberbauchschmerz", "Erbrechen", "Lipase erhöht", "Alkohol/Gallensteine"],
    redFlags: ["Schock", "Hypoxie", "Organversagen", "Fieber/Sepsis", "starke Schmerzen"],
    relatedSymptoms: ["akuter-bauchschmerz", "uebelkeit-erbrechen"],
    symptomEntryIds: ["akuter-bauchschmerz", "uebelkeit-erbrechen"],
    searchBoostTerms: ["Lipase", "Pankreas", "Oberbauch", "Gürtelschmerz"],
    tags: ["Pankreatitis", "Lipase", "Bauchschmerz", "Alkohol", "Gallensteine"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Acute Abdominal Pain in Adults", url: "https://www.aafp.org/pubs/afp/issues/2023/0600/acute-abdominal-pain-adults.html", type: "review" },
      { title: "AWMF Leitlinienregister", url: "https://register.awmf.org/", type: "leitlinie" }
    ]
  },
  {
    id: "ileus",
    title: "Ileus / Darmobstruktion",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["gastroenterologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Mechanische oder paralytische Darmobstruktion mit Bauchschmerz, Distension, Erbrechen und Stuhl-/Windverhalt.",
    examples: ["Bridenileus", "Tumorobstruktion", "paralytischer Ileus"],
    typicalClues: ["Distension", "Erbrechen", "Voroperationen", "Stuhlverhalt"],
    redFlags: ["Peritonismus", "Ischämieverdacht", "Sepsis", "Kreislaufinstabilität"],
    relatedSymptoms: ["akuter-bauchschmerz", "uebelkeit-erbrechen"],
    symptomEntryIds: ["akuter-bauchschmerz", "uebelkeit-erbrechen"],
    searchBoostTerms: ["Darmverschluss", "Obstruktion", "Stuhlverhalt", "Briden"],
    tags: ["Ileus", "Darmverschluss", "Bauchschmerz", "Erbrechen"],
    hasMajorRedFlags: true,
    sources: [{ title: "NCBI Bookshelf: Acute Abdomen", url: "https://www.ncbi.nlm.nih.gov/books/NBK459328/", type: "review" }]
  },
  {
    id: "eisenmangelanaemie",
    title: "Eisenmangelanämie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "innere-medizin", "gastroenterologie", "gynaekologie"],
    shortDescription:
      "Häufige Anämieursache durch Blutverlust, erhöhten Bedarf oder Malabsorption; Ursache des Eisenmangels muss aktiv gesucht werden.",
    examples: ["GI-Blutung", "starke Menstruation", "Zöliakie", "Schwangerschaft"],
    typicalClues: ["Ferritin niedrig", "Transferrinsättigung niedrig", "Mikrozytose", "Müdigkeit"],
    redFlags: ["GI-Blutung", "Gewichtsverlust", "rascher Hb-Abfall", "postmenopausaler/neuer Eisenmangel"],
    relatedSymptoms: ["anaemie", "muedigkeit-leistungsknick", "gewichtsabnahme"],
    symptomEntryIds: ["anaemie", "muedigkeit-leistungsknick", "gewichtsabnahme"],
    searchBoostTerms: ["Eisen", "Ferritin", "Transferrinsättigung", "mikrozytär", "Blutarmut"],
    tags: ["Eisenmangel", "Anämie", "Ferritin", "GI-Blutung"],
    hasMajorRedFlags: true,
    sources: [
      { title: "NEJM: Iron-Deficiency Anemia", url: "https://www.nejm.org/doi/full/10.1056/NEJMra1401038", type: "review" },
      { title: "MSD Manual Professional: Iron Deficiency Anemia", url: "https://www.msdmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/iron-deficiency-anemia", type: "manual" }
    ]
  },
  {
    id: "vitamin-b12-folatmangel",
    title: "Vitamin-B12- oder Folatmangel",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["allgemeinmedizin", "innere-medizin", "gastroenterologie", "neurologie"],
    shortDescription:
      "Megaloblastäre Anämie durch B12- oder Folatmangel; B12-Mangel kann neurologische Symptome verursachen.",
    examples: ["perniziöse Anämie", "Malabsorption", "vegane Ernährung", "Medikamente"],
    typicalClues: ["Makrozytose", "Glossitis", "Parästhesien", "Gangunsicherheit"],
    redFlags: ["neurologische Ausfälle", "Panzytopenie", "schwere Anämie"],
    relatedSymptoms: ["anaemie", "muedigkeit-leistungsknick", "schwindel-vertigo"],
    symptomEntryIds: ["anaemie", "muedigkeit-leistungsknick", "schwindel-vertigo"],
    searchBoostTerms: ["B12", "Folat", "makrozytär", "perniziöse Anämie", "Megaloblasten"],
    tags: ["B12", "Folat", "Anämie", "Neurologie"],
    hasMajorRedFlags: true,
    sources: [{ title: "MSD Manual Professional: Evaluation of Anemia", url: "https://www.msdmanuals.com/professional/hematology-and-oncology/approach-to-the-patient-with-anemia/evaluation-of-anemia", type: "manual" }]
  },
  {
    id: "anaemie-chronische-entzuendung-ckd",
    title: "Anämie bei chronischer Entzündung oder CKD",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["innere-medizin", "nephrologie", "rheumatologie", "allgemeinmedizin"],
    shortDescription:
      "Normozytäre oder gemischte Anämie bei chronischer Entzündung, CKD, Tumorerkrankung oder Infektion.",
    examples: ["CKD-Anämie", "rheumatische Entzündung", "chronische Infektion", "Malignom"],
    typicalClues: ["CRP erhöht", "Ferritin normal/hoch", "eGFR reduziert", "normozytär"],
    redFlags: ["Panzytopenie", "B-Symptomatik", "rascher Hb-Abfall", "Nierenversagen"],
    relatedSymptoms: ["anaemie", "muedigkeit-leistungsknick", "nierenschwaeche-egfr-abfall"],
    symptomEntryIds: ["anaemie", "muedigkeit-leistungsknick", "nierenschwaeche-egfr-abfall"],
    searchBoostTerms: ["Anemia of chronic disease", "CKD-Anämie", "Entzündungsanämie", "EPO"],
    tags: ["Anämie", "CKD", "Entzündung", "Ferritin"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Anemia in Older Adults", url: "https://www.aafp.org/pubs/afp/issues/2018/1001/p437.html", type: "review" },
      { title: "KDIGO Guidelines", url: "https://kdigo.org/guidelines/", type: "leitlinie" }
    ]
  },
  {
    id: "haemolyse",
    title: "Hämolyse",
    category: "autoimmun",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["innere-medizin", "onkologie", "rheumatologie"],
    shortDescription:
      "Beschleunigter Erythrozytenabbau mit Anämie, Ikterus, erhöhtem LDH/indirektem Bilirubin und Retikulozytose.",
    examples: ["autoimmune Hämolyse", "mechanische Hämolyse", "medikamentös", "angeborene Hämoglobinopathie"],
    typicalClues: ["Ikterus", "dunkler Urin", "LDH erhöht", "Haptoglobin niedrig", "Retikulozyten hoch"],
    redFlags: ["rascher Hb-Abfall", "Hämoglobinurie", "Nierenversagen", "Thrombopenie/Schistocyten"],
    relatedSymptoms: ["anaemie", "muedigkeit-leistungsknick"],
    symptomEntryIds: ["anaemie", "muedigkeit-leistungsknick"],
    searchBoostTerms: ["Hämolyse", "LDH", "Haptoglobin", "Coombs", "Schistozyten"],
    tags: ["Hämolyse", "Anämie", "Autoimmun", "Ikterus"],
    hasMajorRedFlags: true,
    sources: [{ title: "MSD Manual Professional: Evaluation of Anemia", url: "https://www.msdmanuals.com/professional/hematology-and-oncology/approach-to-the-patient-with-anemia/evaluation-of-anemia", type: "manual" }]
  },
  {
    id: "raas-mra-hyperkaliaemie",
    title: "RAAS-/MRA-assoziierte Hyperkaliämie",
    category: "toxisch-medikamentoes",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["nephrologie", "kardiologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "ACE-Hemmer, ARB, MRA und Kombinationen können besonders bei CKD, Diabetes, Herzinsuffizienz oder AKI Hyperkaliämie auslösen.",
    examples: ["ACE-Hemmer plus Spironolacton", "ARB bei CKD", "Trimethoprim-Kombination"],
    typicalClues: ["Medikamentenstart/Dosissteigerung", "CKD", "Kaliumpräparate", "AKI"],
    redFlags: ["EKG-Veränderungen", "Kalium stark erhöht", "Muskelschwäche", "AKI"],
    relatedSymptoms: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall"],
    symptomEntryIds: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall"],
    searchBoostTerms: ["ACE-Hemmer", "ARB", "Spironolacton", "Eplerenon", "RAAS", "MRA"],
    tags: ["Hyperkaliämie", "RAAS", "Medikamente", "CKD"],
    hasMajorRedFlags: true,
    sources: [
      { title: "NEJM: Managing Hyperkalemia Caused by RAAS Inhibitors", url: "https://www.nejm.org/doi/full/10.1056/NEJMra035279", type: "review" },
      { title: "AAFP: Potassium Disorders", url: "https://www.aafp.org/pubs/afp/issues/2023/0100/potassium-disorders-hypokalemia-hyperkalemia.html", type: "review" }
    ]
  },
  {
    id: "pseudohyperkaliaemie",
    title: "Pseudohyperkaliämie",
    category: "toxisch-medikamentoes",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["innere-medizin", "allgemeinmedizin", "nephrologie"],
    shortDescription:
      "Falsch erhöhtes Kalium durch Präanalytik oder Zellzerfall in der Probe; muss vor riskanter Behandlung bedacht werden.",
    examples: ["Hämolyse der Probe", "starkes Faustballen", "Thrombozytose/Leukozytose"],
    typicalClues: ["klinisch asymptomatisch", "normales EKG", "hämolytische Probe", "Diskrepanz zu Vorwerten"],
    redFlags: ["trotzdem EKG-Veränderungen", "hoher Risikokontext", "echte Hyperkaliämie nicht sicher ausgeschlossen"],
    relatedSymptoms: ["hyperkaliaemie"],
    symptomEntryIds: ["hyperkaliaemie"],
    searchBoostTerms: ["Hämolyse Probe", "Präanalytik", "falsch erhöhtes Kalium"],
    tags: ["Pseudohyperkaliämie", "Kalium", "Präanalytik"],
    hasMajorRedFlags: true,
    sources: [{ title: "AAFP: Potassium Disorders", url: "https://www.aafp.org/pubs/afp/issues/2023/0100/potassium-disorders-hypokalemia-hyperkalemia.html", type: "review" }]
  },
  {
    id: "rhabdomyolyse",
    title: "Rhabdomyolyse",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["innere-medizin", "nephrologie", "allgemeinmedizin"],
    shortDescription:
      "Muskelzerfall kann Hyperkaliämie, AKI, Myoglobinurie und systemische Komplikationen verursachen.",
    examples: ["Immobilisation", "Trauma", "Statinassoziiert", "Krampfanfall", "Intoxikation"],
    typicalClues: ["Muskelschmerz", "Schwäche", "dunkler Urin", "CK stark erhöht"],
    redFlags: ["Hyperkaliämie", "AKI", "Kompartmentsyndrom", "Arrhythmie"],
    relatedSymptoms: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall"],
    symptomEntryIds: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall"],
    searchBoostTerms: ["CK", "Myoglobin", "Muskelzerfall", "dunkler Urin"],
    tags: ["Rhabdomyolyse", "Hyperkaliämie", "AKI", "Trauma"],
    hasMajorRedFlags: true,
    sources: [{ title: "MSD Manual Professional", url: "https://www.msdmanuals.com/professional", type: "manual" }]
  },
  {
    id: "benigner-paroxysmaler-lagerungsschwindel",
    title: "Benigner paroxysmaler Lagerungsschwindel",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["allgemeinmedizin", "neurologie"],
    shortDescription:
      "Häufige periphere Schwindelursache mit kurzen, lageabhängigen Drehschwindelattacken.",
    examples: ["posteriorer Bogengang", "horizontaler Bogengang"],
    typicalClues: ["Sekunden dauernd", "lagegetriggert", "Dix-Hallpike passend", "zwischen Attacken besser"],
    redFlags: ["neurologische Defizite", "neuer starker Kopfschmerz", "Gangunfähigkeit", "atypischer Nystagmus"],
    relatedSymptoms: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    symptomEntryIds: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    searchBoostTerms: ["BPPV", "Lagerungsschwindel", "Dix-Hallpike", "Epley"],
    tags: ["Schwindel", "BPPV", "Vertigo", "Lagerung"],
    hasMajorRedFlags: true,
    sources: [
      { title: "NEJM: Benign Paroxysmal Positional Vertigo", url: "https://www.nejm.org/doi/abs/10.1056/NEJM199911183412107", type: "review" },
      { title: "AAFP: Dizziness Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/0500/dizziness.html", type: "review" }
    ]
  },
  {
    id: "vestibulaere-migraene",
    title: "Vestibuläre Migräne",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["neurologie", "allgemeinmedizin"],
    shortDescription:
      "Episodischer Schwindel im Zusammenhang mit Migräneanamnese, Kopfschmerz, Photophobie oder Phonophobie.",
    examples: ["Schwindelattacken mit Migränesymptomen", "Migräneäquivalent"],
    typicalClues: ["wiederkehrende Episoden", "Migräne", "Licht-/Lärmempfindlichkeit", "Übelkeit"],
    redFlags: ["erstmaliger schwerer Kopfschmerz", "fokale Defizite", "anhaltende Gangunfähigkeit"],
    relatedSymptoms: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    symptomEntryIds: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    searchBoostTerms: ["vestibuläre Migräne", "Migräneschwindel", "Photophobie", "Phonophobie"],
    tags: ["Schwindel", "Migräne", "Vertigo", "Neurologie"],
    hasMajorRedFlags: true,
    sources: [{ title: "AAFP: Dizziness Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/0500/dizziness.html", type: "review" }]
  },
  {
    id: "vestibularisneuritis",
    title: "Vestibularisneuritis / akutes vestibuläres Syndrom",
    category: "infektion",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["neurologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Akuter anhaltender vestibulärer Schwindel, der klinisch von zentralen Ursachen wie Kleinhirn-/Hirnstamminfarkt abgegrenzt werden muss.",
    examples: ["akute unilaterale Vestibulopathie", "postinfektiöse Neuritis"],
    typicalClues: ["anhaltender Drehschwindel", "Übelkeit", "Nystagmus", "Gangunsicherheit"],
    redFlags: ["HINTS zentral", "fokale neurologische Zeichen", "neuer Kopf-/Nackenschmerz", "Gangunfähigkeit"],
    relatedSymptoms: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    symptomEntryIds: ["schwindel-vertigo", "uebelkeit-erbrechen"],
    searchBoostTerms: ["Vestibularisneuritis", "akutes vestibuläres Syndrom", "HINTS"],
    tags: ["Schwindel", "Vestibularisneuritis", "AVS", "Schlaganfall"],
    hasMajorRedFlags: true,
    sources: [
      { title: "AAFP: Dizziness Evaluation", url: "https://www.aafp.org/pubs/afp/issues/2023/0500/dizziness.html", type: "review" },
      { title: "PMC: TiTrATE approach", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4522574/", type: "review" }
    ]
  }
];
