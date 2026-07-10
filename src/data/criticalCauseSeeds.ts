import type { Cause } from "../types/medical";

export const criticalCauseSeeds: Cause[] = [
  {
    id: "akutes-nierenversagen",
    title: "Akute Nierenschädigung / AKI",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["nephrologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Akuter Kreatininanstieg und/oder verminderte Urinausscheidung mit prärenalen, intrinsisch-renalen oder postrenalen Ursachen.",
    examples: ["Volumenmangel", "Sepsis", "Nephrotoxizität", "Harnabflussstörung"],
    typicalClues: ["Kreatininanstieg gegenüber Vorwerten", "Oligurie", "Exsikkose oder Überwässerung", "neue Medikamente oder Kontrastmittel", "Harnabflussstörung"],
    redFlags: ["Anurie", "Hyperkaliämie", "schwere Azidose", "Lungenödem", "urämische Symptome", "rasch progredienter Verlauf"],
    relatedSymptoms: ["nierenschwaeche-egfr-abfall", "hyperkaliaemie", "gewichtszunahme-oedeme"],
    sources: [
      { title: "NICE NG148: Acute kidney injury", url: "https://www.nice.org.uk/guidance/ng148", type: "leitlinie", usage: "open-reference" },
      { title: "KDIGO: Acute Kidney Injury", url: "https://kdigo.org/guidelines/acute-kidney-injury/", type: "leitlinie", usage: "link-only" }
    ],
    tags: ["AKI", "akute Nierenschädigung", "Kreatinin", "Oligurie", "postrenal"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["nierenschwaeche-egfr-abfall", "hyperkaliaemie"]
  },
  {
    id: "hyperkaliaemie",
    title: "Hyperkaliämie",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["nephrologie", "kardiologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Erhöhtes Serumkalium, häufig bei eingeschränkter Nierenfunktion, Medikamenteneffekten, Azidose oder Zellzerfall; Ausmaß, Dynamik und EKG bestimmen die Dringlichkeit.",
    examples: ["AKI oder CKD", "RAAS-/MRA-assoziiert", "Azidose", "Rhabdomyolyse", "Pseudohyperkaliämie"],
    typicalClues: ["Nierenfunktionsstörung", "kaliumsteigernde Medikamente", "Muskelschwäche", "auffälliges EKG", "hämolytische Probe als mögliche Messstörung"],
    redFlags: ["EKG-Veränderungen", "Arrhythmie oder Synkope", "rasch ansteigendes Kalium", "schwere Nierenfunktionsstörung", "ausgeprägte Muskelschwäche"],
    relatedSymptoms: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall", "palpitationen-tachykardie", "synkope-kollaps"],
    sources: [
      { title: "UK Kidney Association: Hyperkalaemia Guideline 2023", url: "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0", type: "leitlinie", usage: "open-reference" }
    ],
    tags: ["Hyperkaliämie", "Kalium hoch", "EKG", "CKD", "RAAS", "MRA"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["hyperkaliaemie", "nierenschwaeche-egfr-abfall"]
  },
  {
    id: "hyponatriaemie",
    title: "Hyponatriämie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "nephrologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Niedrige Natriumkonzentration mit breitem Ursachenspektrum; Symptomatik, Akuität, Osmolalität und klinischer Kontext sind entscheidend.",
    examples: ["Thiazide", "SIADH", "Volumenmangel", "Herzinsuffizienz", "Nebenniereninsuffizienz", "primäre Polydipsie"],
    typicalClues: ["neue Medikamente", "Erbrechen oder Flüssigkeitsverlust", "pulmonale oder neurologische Erkrankung", "Ödeme", "Hypotonie"],
    redFlags: ["Krampfanfall", "Bewusstseinsstörung", "Somnolenz", "starke Kopfschmerzen oder Erbrechen", "rascher Natriumabfall"],
    relatedSymptoms: ["hyponatriaemie", "uebelkeit-erbrechen", "muedigkeit-leistungsknick"],
    sources: [
      { title: "European Clinical Practice Guideline: Hyponatraemia", url: "https://academic.oup.com/ejendo/article/170/3/G1/6668028", type: "leitlinie", usage: "open-reference" }
    ],
    tags: ["Hyponatriämie", "Natrium niedrig", "SIADH", "Thiazid", "Polydipsie"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["hyponatriaemie"]
  },
  {
    id: "hyperkalzaemie",
    title: "Hyperkalzämie",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "nephrologie", "onkologie", "innere-medizin"],
    shortDescription:
      "Erhöhtes Calcium ist häufig PTH-abhängig oder malignomassoziiert; Schweregrad, Symptome und Nierenfunktion bestimmen die Dringlichkeit.",
    examples: ["primärer Hyperparathyreoidismus", "Malignität", "Medikamente", "Vitamin-D-Exzess", "granulomatöse Erkrankung"],
    typicalClues: ["Exsikkose", "Polyurie", "Obstipation", "Müdigkeit oder Verwirrtheit", "Nierensteine", "Gewichtsverlust"],
    redFlags: ["Bewusstseinsstörung", "akute Nierenschädigung", "Arrhythmie", "deutliche Exsikkose", "rasch ansteigendes Calcium"],
    relatedSymptoms: ["hyperkalzaemie", "polyurie-polydipsie", "muedigkeit-leistungsknick", "gewichtsabnahme"],
    sources: [
      { title: "Society for Endocrinology: Acute hypercalcaemia", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5314807/", type: "leitlinie", usage: "open-reference" }
    ],
    tags: ["Hyperkalzämie", "Calcium hoch", "Hyperparathyreoidismus", "Malignität"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["hyperkalzaemie", "polyurie-polydipsie"]
  },
  {
    id: "anaphylaxie",
    title: "Anaphylaxie",
    category: "toxisch-medikamentoes",
    frequency: "selten",
    urgency: "notfall",
    specialties: ["allgemeinmedizin", "innere-medizin", "pneumologie"],
    shortDescription:
      "Akute systemische Überempfindlichkeitsreaktion mit möglicher Atemwegs-, Atmungs- oder Kreislaufbeteiligung; Hautzeichen können fehlen.",
    examples: ["Arzneimittel", "Nahrungsmittel", "Insektengift", "Kontrastmittel"],
    typicalClues: ["plötzlicher Beginn nach möglichem Auslöser", "Urtikaria oder Angioödem", "Giemen oder Stridor", "Hypotonie", "gastrointestinale Beschwerden"],
    redFlags: ["Stridor oder Atemwegsödem", "schwere Dyspnoe", "Hypotonie oder Kollaps", "Bewusstseinsstörung", "rasch progredienter Verlauf"],
    relatedSymptoms: ["dyspnoe-luftnot", "synkope-kollaps", "uebelkeit-erbrechen"],
    sources: [
      { title: "AWMF S2k-Leitlinie Anaphylaxie", url: "https://register.awmf.org/de/leitlinien/detail/061-025", type: "leitlinie", usage: "link-only" }
    ],
    tags: ["Anaphylaxie", "Allergie", "Stridor", "Angioödem", "Schock"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["dyspnoe-luftnot", "synkope-kollaps"]
  },
  {
    id: "aortendissektion",
    title: "Akutes Aortensyndrom / Aortendissektion",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "selten",
    urgency: "notfall",
    specialties: ["kardiologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Seltene zeitkritische Ursache abrupt einsetzender Thorax-, Rücken- oder Bauchschmerzen mit möglicher Organ- oder Extremitätenischämie.",
    examples: ["Aortendissektion", "intramurales Hämatom", "penetrierendes Aortenulkus"],
    typicalClues: ["abrupter maximaler Schmerzbeginn", "Thorax- oder Rückenschmerz", "Puls- oder Blutdruckdifferenz", "Aortenaneurysma oder Bindegewebserkrankung"],
    redFlags: ["Schock", "neurologisches Defizit", "Synkope", "Extremitätenischämie", "neue Aortenklappeninsuffizienz"],
    relatedSymptoms: ["brustschmerz", "synkope-kollaps", "akuter-bauchschmerz"],
    sources: [
      { title: "2022 ACC/AHA Guideline for Aortic Disease", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106", type: "leitlinie", usage: "link-only" }
    ],
    tags: ["Aortendissektion", "akutes Aortensyndrom", "Thoraxschmerz", "Rückenschmerz"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["brustschmerz", "synkope-kollaps"]
  },
  {
    id: "pneumothorax",
    title: "Pneumothorax",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["pneumologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Luft im Pleuraspalt kann plötzlich Thoraxschmerz und Dyspnoe verursachen; ein Spannungspneumothorax führt zur Kreislaufgefährdung.",
    examples: ["spontan", "traumatisch", "iatrogen", "Spannungspneumothorax"],
    typicalClues: ["plötzlicher einseitiger Thoraxschmerz", "akute Dyspnoe", "einseitig abgeschwächtes Atemgeräusch", "Trauma oder Intervention"],
    redFlags: ["Hypotonie", "schwere Hypoxie", "zunehmende Atemnot", "einseitig fehlendes Atemgeräusch mit Kreislaufzeichen"],
    relatedSymptoms: ["brustschmerz", "dyspnoe-luftnot"],
    sources: [
      { title: "British Thoracic Society: Pleural Disease Guideline", url: "https://www.brit-thoracic.org.uk/quality-improvement/guidelines/pleural-disease/", type: "leitlinie", usage: "link-only" }
    ],
    tags: ["Pneumothorax", "Spannungspneumothorax", "Dyspnoe", "Thoraxschmerz"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["brustschmerz", "dyspnoe-luftnot"]
  },
  {
    id: "subarachnoidalblutung",
    title: "Subarachnoidalblutung",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "selten",
    urgency: "notfall",
    specialties: ["neurologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Zeitkritische intrakranielle Blutung, klassisch mit plötzlich maximalem Kopfschmerz, aber auch mit Synkope, Erbrechen oder neurologischen Auffälligkeiten.",
    examples: ["aneurysmatische Subarachnoidalblutung", "nichtaneurysmatische Subarachnoidalblutung"],
    typicalClues: ["Donnerschlagkopfschmerz", "Nackensteife", "Erbrechen", "kurze Bewusstlosigkeit", "neurologisches Defizit"],
    redFlags: ["plötzlich stärkster Kopfschmerz", "Bewusstseinsstörung", "Krampfanfall", "neurologisches Defizit", "Meningismus"],
    relatedSymptoms: ["kopfschmerz", "synkope-kollaps", "uebelkeit-erbrechen"],
    sources: [
      { title: "AHA/ASA 2023 Guideline: Aneurysmal Subarachnoid Hemorrhage", url: "https://professional.heart.org/en/guidelines-statements/2023-guideline-for-the-management-of-patients-with-aneurysmal-subarachnoidstr0000000000000436", type: "leitlinie", usage: "link-only" }
    ],
    tags: ["Subarachnoidalblutung", "Donnerschlagkopfschmerz", "SAB", "Aneurysma"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["kopfschmerz", "synkope-kollaps"]
  },
  {
    id: "hypertensiver-notfall",
    title: "Hypertensiver Notfall",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "selten",
    urgency: "notfall",
    specialties: ["kardiologie", "nephrologie", "neurologie", "innere-medizin"],
    shortDescription:
      "Schwere Blutdruckerhöhung mit akuter Organschädigung; der Blutdruckwert allein definiert keinen hypertensiven Notfall.",
    examples: ["hypertensive Enzephalopathie", "akutes Koronarsyndrom", "Lungenödem", "Aortendissektion", "akute Nierenschädigung"],
    typicalClues: ["sehr hoher Blutdruck", "neurologische Symptome", "Thoraxschmerz", "Dyspnoe", "akute Nierenfunktionsverschlechterung"],
    redFlags: ["neurologisches Defizit oder Bewusstseinsstörung", "Thoraxschmerz", "akute Dyspnoe oder Lungenödem", "Aortensyndrom", "akute Nierenschädigung", "Schwangerschaft"],
    relatedSymptoms: ["hoher-blutdruck", "brustschmerz", "dyspnoe-luftnot", "nierenschwaeche-egfr-abfall"],
    sources: [
      { title: "Nationale VersorgungsLeitlinie Hypertonie", url: "https://www.leitlinien.de/themen/hypertonie", type: "leitlinie", usage: "open-reference" }
    ],
    tags: ["hypertensiver Notfall", "Blutdruck", "Organschaden", "hypertensive Krise"],
    hasMajorRedFlags: true,
    symptomEntryIds: ["hoher-blutdruck"]
  }
];
