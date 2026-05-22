import type { Cause, SourceLink } from "../types/medical";

const awmf: SourceLink = {
  title: "AWMF Leitlinienregister",
  url: "https://register.awmf.org/",
  type: "leitlinie"
};
const nice: SourceLink = {
  title: "NICE Clinical Knowledge Summaries",
  url: "https://cks.nice.org.uk/",
  type: "manual"
};
const msd: SourceLink = {
  title: "MSD Manual Professional",
  url: "https://www.msdmanuals.com/professional",
  type: "manual"
};
const rki: SourceLink = {
  title: "Robert Koch-Institut",
  url: "https://www.rki.de/",
  type: "sonstiges"
};
const who: SourceLink = {
  title: "World Health Organization",
  url: "https://www.who.int/",
  type: "sonstiges"
};
const esc: SourceLink = {
  title: "ESC Guidelines",
  url: "https://www.escardio.org/Guidelines",
  type: "leitlinie"
};
const ada: SourceLink = {
  title: "ADA Standards of Care",
  url: "https://diabetesjournals.org/care/issue",
  type: "leitlinie"
};
const endocrineSociety: SourceLink = {
  title: "Endocrine Society Guidelines",
  url: "https://www.endocrine.org/clinical-practice-guidelines",
  type: "leitlinie"
};
const ddg: SourceLink = {
  title: "Deutsche Diabetes Gesellschaft",
  url: "https://www.deutsche-diabetes-gesellschaft.de/",
  type: "leitlinie"
};
const dge: SourceLink = {
  title: "Deutsche Gesellschaft für Endokrinologie",
  url: "https://www.endokrinologie.net/",
  type: "sonstiges"
};
const dgk: SourceLink = {
  title: "Deutsche Gesellschaft für Kardiologie",
  url: "https://dgk.org/",
  type: "leitlinie"
};
const dgn: SourceLink = {
  title: "Deutsche Gesellschaft für Neurologie",
  url: "https://dgn.org/",
  type: "leitlinie"
};

export const causes: Cause[] = [
  {
    id: "sturz-prellung-fraktur",
    title: "Sturz, Prellung, Fraktur",
    category: "trauma",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "orthopaedie", "innere-medizin"],
    shortDescription:
      "Häufige mechanische Verletzungen können Schmerzen, Funktionsverlust, Schwellung und sekundäre Komplikationen erklären.",
    examples: ["Distorsion", "Radiusfraktur", "Schenkelhalsfraktur"],
    typicalClues: ["Trauma-Ereignis", "Druckschmerz", "Belastungsschmerz", "Hämatom"],
    redFlags: ["Fehlstellung", "Durchblutungs- oder Sensibilitätsstörung", "Offene Fraktur"],
    relatedSymptoms: ["Schmerz", "Schwellung", "Bewegungseinschränkung", "Synkope"],
    relatedCauses: ["osteoporose-fraktur", "nicht-akzidentelles-trauma"],
    sources: [awmf, msd],
    tags: ["sturz", "fraktur", "prellung", "orthopädie", "unfall"],
    hasMajorRedFlags: true
  },
  {
    id: "schaedel-hirn-trauma",
    title: "Schädel-Hirn-Trauma",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["neurologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Kopfverletzungen reichen von Commotio bis intrakranieller Blutung und verlangen Red-Flag-orientierte Einschätzung.",
    examples: ["Commotio cerebri", "Subduralhämatom", "Kontusionsblutung"],
    typicalClues: ["Kopfanprall", "Amnesie", "Kopfschmerz", "Übelkeit"],
    redFlags: ["Bewusstseinsstörung", "Neurologisches Defizit", "Antikoagulation", "Krampfanfall"],
    relatedSymptoms: ["Kopfschmerz", "Schwindel", "Erbrechen", "Verwirrtheit"],
    relatedCauses: ["schlaganfall-tia", "drogen-intoxikation"],
    sources: [awmf, dgn, msd],
    tags: ["sht", "kopfverletzung", "blutung", "trauma"],
    hasMajorRedFlags: true
  },
  {
    id: "thoraxtrauma",
    title: "Thoraxtrauma",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["pneumologie", "kardiologie", "allgemeinmedizin"],
    shortDescription:
      "Thoraxverletzungen können Rippenfrakturen, Pneumothorax, Lungenkontusion oder kardiale Begleitprobleme verursachen.",
    examples: ["Rippenfraktur", "Pneumothorax", "Lungenkontusion"],
    typicalClues: ["Thoraxschmerz nach Trauma", "Atemabhängiger Schmerz", "Dyspnoe"],
    redFlags: ["Atemnot", "Hypotonie", "Zyanose", "Instabiler Thorax"],
    relatedSymptoms: ["Thoraxschmerz", "Dyspnoe", "Husten", "Synkope"],
    relatedCauses: ["lungenembolie", "akutes-koronarsyndrom"],
    sources: [awmf, msd],
    tags: ["thorax", "pneumothorax", "rippenfraktur", "atemnot"],
    hasMajorRedFlags: true
  },
  {
    id: "abdominaltrauma",
    title: "Abdominaltrauma",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["gastroenterologie", "allgemeinmedizin", "urologie"],
    shortDescription:
      "Bauchtrauma kann Organverletzung, Blutung oder Hohlorganperforation verursachen, auch bei initial diskreten Zeichen.",
    examples: ["Milzverletzung", "Leberläsion", "Nierenkontusion"],
    typicalClues: ["Bauchschmerz nach Unfall", "Abwehrspannung", "Flankenschmerz"],
    redFlags: ["Kreislaufinstabilität", "Peritonismus", "Synkope", "Makrohämaturie"],
    relatedSymptoms: ["Bauchschmerz", "Schwindel", "Hämaturie", "Übelkeit"],
    relatedCauses: ["mesenterialischaemie", "pyelonephritis-harnwegsinfekt"],
    sources: [awmf, msd],
    tags: ["bauchtrauma", "blutung", "milz", "leber", "hämaturie"],
    hasMajorRedFlags: true
  },
  {
    id: "iatrogenes-trauma",
    title: "Iatrogenes Trauma",
    category: "trauma",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "innere-medizin", "urologie", "gynaekologie"],
    shortDescription:
      "Diagnostische oder therapeutische Eingriffe können Blutungen, Perforationen, Nervenläsionen oder lokale Komplikationen auslösen.",
    examples: ["Postinterventionelle Blutung", "Katheterkomplikation", "Nervenläsion"],
    typicalClues: ["Zeitlicher Bezug zu Eingriff", "Neue Schmerzen", "Fieber oder Blutung nach Prozedur"],
    redFlags: ["Sepsiszeichen", "Starke Blutung", "Akutes Abdomen", "Neurologisches Defizit"],
    relatedSymptoms: ["Fieber", "Bauchschmerz", "Blutung", "Schmerz"],
    relatedCauses: ["arzneimittelnebenwirkung", "sepsis"],
    sources: [awmf, nice, msd],
    tags: ["iatrogen", "eingriff", "komplikation", "postoperativ"],
    hasMajorRedFlags: true
  },
  {
    id: "autoimmunthyreoiditis-basedow",
    title: "Autoimmunthyreoiditis / Morbus Basedow",
    category: "autoimmun",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Autoimmune Schilddrüsenerkrankungen verursachen Hypo- oder Hyperthyreose und können viele unspezifische Symptome bündeln.",
    examples: ["Hashimoto-Thyreoiditis", "Morbus Basedow", "Thyreoiditis mit Funktionswechsel"],
    typicalClues: ["Gewichtsänderung", "Tachykardie oder Bradykardie", "Wärme- oder Kälteintoleranz"],
    redFlags: ["Thyreotoxische Krise", "Schwere Bradykardie", "Augenschmerz bei Orbitopathie"],
    relatedSymptoms: ["Müdigkeit", "Gewichtsverlust", "Palpitationen", "Schwindel"],
    relatedCauses: ["schilddruesenfunktionsstoerungen", "angststoerung-panikattacken"],
    sources: [awmf, endocrineSociety, dge],
    tags: ["schilddrüse", "hashimoto", "basedow", "tsh", "autoimmun"],
    hasMajorRedFlags: true
  },
  {
    id: "rheumatoide-arthritis",
    title: "Rheumatoide Arthritis",
    category: "autoimmun",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["rheumatologie", "allgemeinmedizin", "orthopaedie"],
    shortDescription:
      "Chronisch entzündliche Gelenkerkrankung mit symmetrischen Beschwerden, Morgensteifigkeit und systemischer Aktivität.",
    examples: ["Frühe Polyarthritis", "Seropositive RA", "Extraartikuläre Manifestationen"],
    typicalClues: ["Morgensteifigkeit", "Symmetrische MCP/PIP-Schwellung", "Erhöhte Entzündungswerte"],
    redFlags: ["Akut rotes heißes Einzelgelenk", "Fieber", "Neurologische Zeichen bei HWS-Beteiligung"],
    relatedSymptoms: ["Gelenkschmerz", "Müdigkeit", "Fieber", "Gewichtsverlust"],
    relatedCauses: ["vaskulitiden", "sepsis"],
    sources: [awmf, nice, msd],
    tags: ["rheuma", "arthritis", "autoimmun", "gelenke"],
    hasMajorRedFlags: true
  },
  {
    id: "systemischer-lupus-erythematodes",
    title: "Systemischer Lupus erythematodes",
    category: "autoimmun",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["rheumatologie", "nephrologie", "dermatologie"],
    shortDescription:
      "Systemische Autoimmunerkrankung mit Haut-, Gelenk-, Nieren-, Blutbild- und ZNS-Manifestationen.",
    examples: ["Lupusnephritis", "Kutane Manifestation", "Antiphospholipid-Syndrom"],
    typicalClues: ["Photosensitivität", "Arthralgien", "Proteinurie", "Zytopenien"],
    redFlags: ["Akute Nierenfunktionseinschränkung", "Krampfanfall", "Thrombose", "Schwere Zytopenie"],
    relatedSymptoms: ["Müdigkeit", "Ausschlag", "Gelenkschmerz", "Fieber"],
    relatedCauses: ["genetische-nierenerkrankungen", "venenthrombose"],
    sources: [awmf, nice, msd],
    tags: ["sle", "lupus", "proteinurie", "autoimmun"],
    hasMajorRedFlags: true
  },
  {
    id: "zoeliakie",
    title: "Zöliakie",
    category: "autoimmun",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["gastroenterologie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Glutenassoziierte Autoimmunenteropathie mit gastrointestinalen, hämatologischen oder unspezifischen Beschwerden.",
    examples: ["Malabsorption", "Eisenmangelanämie", "Gedeihstörung"],
    typicalClues: ["Chronische Diarrhoe", "Blähungen", "Eisenmangel", "Gewichtsverlust"],
    redFlags: ["Schwere Dehydratation", "Ausgeprägter Gewichtsverlust", "Blut im Stuhl"],
    relatedSymptoms: ["Bauchschmerz", "Gewichtsverlust", "Anämie", "Müdigkeit"],
    relatedCauses: ["gastroenteritis-intraabdominelle-infektion", "kolorektales-karzinom"],
    sources: [awmf, nice, msd],
    tags: ["zöliakie", "gluten", "malabsorption", "anämie"],
    hasMajorRedFlags: false
  },
  {
    id: "typ-1-diabetes-lada",
    title: "Typ-1-Diabetes / LADA",
    category: "autoimmun",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["diabetologie", "endokrinologie", "allgemeinmedizin"],
    shortDescription:
      "Autoimmune Insulinsekretionsstörung, die akut oder langsam progredient mit Hyperglykämie auffallen kann.",
    examples: ["Klassischer Typ-1-Diabetes", "LADA", "Diabetische Ketoazidose"],
    typicalClues: ["Polyurie", "Polydipsie", "Gewichtsverlust", "Hyperglykämie"],
    redFlags: ["Ketoazidose", "Erbrechen", "Kussmaul-Atmung", "Bewusstseinseintrübung"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Gewichtsverlust", "Müdigkeit", "Bauchschmerz"],
    relatedCauses: ["diabetes-hypoglykaemie-hyperglykaemie", "substanzbezogene-stoerungen"],
    sources: [ada, ddg, awmf],
    tags: ["diabetes", "lada", "autoantikörper", "ketoazidose"],
    hasMajorRedFlags: true
  },
  {
    id: "bronchialkarzinom",
    title: "Bronchialkarzinom",
    category: "neoplastisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["pneumologie", "onkologie", "allgemeinmedizin"],
    shortDescription:
      "Lungenkarzinome können Husten, Dyspnoe, Hämoptysen, Gewichtsverlust oder paraneoplastische Zeichen verursachen.",
    examples: ["Nicht-kleinzelliges Lungenkarzinom", "Kleinzelliges Lungenkarzinom", "Pancoast-Tumor"],
    typicalClues: ["Persistierender Husten", "Raucheranamnese", "Gewichtsverlust", "Hämoptysen"],
    redFlags: ["Hämoptysen", "Obere Einflussstauung", "Neurologische Ausfälle", "Ruhdyspnoe"],
    relatedSymptoms: ["Dyspnoe", "Gewichtsverlust", "Thoraxschmerz", "Husten"],
    relatedCauses: ["atemwegsinfekt-pneumonie", "lungenembolie"],
    sources: [awmf, nice, msd],
    tags: ["lungenkrebs", "karzinom", "hämoptyse", "tumor"],
    hasMajorRedFlags: true
  },
  {
    id: "kolorektales-karzinom",
    title: "Kolorektales Karzinom",
    category: "neoplastisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["gastroenterologie", "onkologie", "allgemeinmedizin"],
    shortDescription:
      "Kolorektale Tumoren können Blutungen, Anämie, Stuhlgangsänderungen und abdominelle Beschwerden auslösen.",
    examples: ["Kolonkarzinom", "Rektumkarzinom", "Hereditäres Tumorsyndrom"],
    typicalClues: ["Eisenmangelanämie", "Blut im Stuhl", "Neue Stuhlgewohnheitsänderung"],
    redFlags: ["Ileuszeichen", "Starke Blutung", "Ungewollter Gewichtsverlust"],
    relatedSymptoms: ["Anämie", "Bauchschmerz", "Gewichtsverlust", "Müdigkeit"],
    relatedCauses: ["zoeliakie", "hereditaere-tumorsyndrome"],
    sources: [awmf, nice, msd],
    tags: ["darmkrebs", "anämie", "okkultes blut", "tumor"],
    hasMajorRedFlags: true
  },
  {
    id: "mammakarzinom",
    title: "Mammakarzinom",
    category: "neoplastisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["gynaekologie", "onkologie", "allgemeinmedizin"],
    shortDescription:
      "Brustkrebs kann als tastbarer Knoten, Hautveränderung, Sekretion oder systemische/metastatische Symptomatik auffallen.",
    examples: ["Invasives Mammakarzinom", "DCIS", "Metastasierte Erkrankung"],
    typicalClues: ["Knoten", "Einziehung", "Mamillensekretion", "Asymmetrie"],
    redFlags: ["Neu aufgetretener harter Knoten", "Entzündliche Brustveränderung", "Knochenschmerz mit Schwäche"],
    relatedSymptoms: ["Brustschmerz", "Gewichtsverlust", "Knochenschmerz", "Müdigkeit"],
    relatedCauses: ["hereditaere-tumorsyndrome", "haematologische-neoplasien"],
    sources: [awmf, nice, msd],
    tags: ["brustkrebs", "mamma", "knoten", "tumor"],
    hasMajorRedFlags: true
  },
  {
    id: "prostatakarzinom",
    title: "Prostatakarzinom",
    category: "neoplastisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["urologie", "onkologie", "allgemeinmedizin"],
    shortDescription:
      "Prostatakarzinome sind häufig asymptomatisch, können aber Harnbeschwerden, Knochenschmerz oder Allgemeinsymptome verursachen.",
    examples: ["Lokal begrenztes Karzinom", "Metastatische Erkrankung", "Knochenmetastasen"],
    typicalClues: ["PSA-Kontext", "Miktionsbeschwerden", "Knochenschmerz", "Alter"],
    redFlags: ["Akuter Harnverhalt", "Querschnittsymptome", "Starke Knochenschmerzen"],
    relatedSymptoms: ["Rückenschmerz", "Miktionsbeschwerden", "Gewichtsverlust", "Müdigkeit"],
    relatedCauses: ["genetische-nierenerkrankungen", "haematologische-neoplasien"],
    sources: [awmf, nice, msd],
    tags: ["prostata", "psa", "urologie", "tumor"],
    hasMajorRedFlags: true
  },
  {
    id: "haematologische-neoplasien",
    title: "Hämatologische Neoplasien",
    category: "neoplastisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["onkologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Leukämien, Lymphome und Plasmazellerkrankungen können B-Symptome, Zytopenien, Infekte oder Knochenschmerz erklären.",
    examples: ["Akute Leukämie", "Lymphom", "Multiples Myelom"],
    typicalClues: ["B-Symptome", "Lymphknoten", "Infektneigung", "Anämie"],
    redFlags: ["Blastenverdacht", "Schwere Zytopenie", "Hyperkalzämie", "Sepsiszeichen"],
    relatedSymptoms: ["Fieber unklarer Genese", "Anämie", "Gewichtsverlust", "Hyperkalzämie"],
    relatedCauses: ["sepsis", "kolorektales-karzinom"],
    sources: [awmf, nice, msd],
    tags: ["leukämie", "lymphom", "myelom", "b-symptome"],
    hasMajorRedFlags: true
  },
  {
    id: "arzneimittelnebenwirkung",
    title: "Arzneimittelnebenwirkung",
    category: "toxisch-medikamentoes",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "innere-medizin", "nephrologie"],
    shortDescription:
      "Medikamente können nahezu jedes Symptom imitieren oder verstärken; der zeitliche Zusammenhang ist oft entscheidend.",
    examples: ["ACE-Hemmer-Husten", "NSAR-Nierenschaden", "Statinassoziierte Myalgie"],
    typicalClues: ["Neue Medikation", "Dosissteigerung", "Symptombesserung nach Absetzen"],
    redFlags: ["Anaphylaxie", "Stevens-Johnson-Syndrom", "Schwere Hypoglykämie", "Akutes Nierenversagen"],
    relatedSymptoms: ["Schwindel", "Husten", "Müdigkeit", "Exanthem"],
    relatedCauses: ["polypharmazie-interaktionen", "niereninsuffizienz-uraemie"],
    sources: [awmf, nice, msd],
    tags: ["nebenwirkung", "medikament", "pharmakologie", "toxisch"],
    hasMajorRedFlags: true
  },
  {
    id: "polypharmazie-interaktionen",
    title: "Polypharmazie / Interaktionen",
    category: "toxisch-medikamentoes",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "innere-medizin", "nephrologie"],
    shortDescription:
      "Mehrere Arzneimittel erhöhen Risiko für Interaktionen, Stürze, Delir, Elektrolytstörungen und Organtoxizität.",
    examples: ["Antikoagulation plus NSAR", "QT-Verlängerung", "Serotonerges Syndrom"],
    typicalClues: ["Lange Medikamentenliste", "Ältere Patientinnen und Patienten", "Nierenfunktionsabfall"],
    redFlags: ["Synkope", "Delir", "Blutung", "Rhythmusstörung"],
    relatedSymptoms: ["Schwindel", "Synkope", "Verwirrtheit", "Blutung"],
    relatedCauses: ["arzneimittelnebenwirkung", "elektrolytstoerungen"],
    sources: [nice, msd, awmf],
    tags: ["polypharmazie", "interaktion", "qt", "delir"],
    hasMajorRedFlags: true
  },
  {
    id: "alkohol",
    title: "Alkohol",
    category: "toxisch-medikamentoes",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "psychiatrie", "gastroenterologie"],
    shortDescription:
      "Alkohol kann akute Intoxikation, Entzug, Leberschaden, Neuropathie, Kardiomyopathie und soziale Folgeschaden verursachen.",
    examples: ["Alkoholintoxikation", "Entzugssyndrom", "Alkoholische Hepatitis"],
    typicalClues: ["Fötor", "Tremor", "Erhöhte Leberwerte", "Sturzereignisse"],
    redFlags: ["Delirium tremens", "Krampfanfall", "Gastrointestinale Blutung", "Suizidalität"],
    relatedSymptoms: ["Schwindel", "Bauchschmerz", "Müdigkeit", "Verwirrtheit"],
    relatedCauses: ["substanzbezogene-stoerungen", "depression"],
    sources: [awmf, nice, who],
    tags: ["alkohol", "entzug", "leber", "sucht"],
    hasMajorRedFlags: true
  },
  {
    id: "drogen-intoxikation",
    title: "Drogen / Intoxikation",
    category: "toxisch-medikamentoes",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["allgemeinmedizin", "psychiatrie", "innere-medizin"],
    shortDescription:
      "Intoxikationen können Bewusstsein, Kreislauf, Atmung, Temperatur, Psyche und Laborwerte akut verändern.",
    examples: ["Opioidintoxikation", "Stimulanzien", "Mischintoxikation"],
    typicalClues: ["Bewusstseinsveränderung", "Pupillenveränderung", "Auffälliger Vitalparameterverlauf"],
    redFlags: ["Atemdepression", "Hyperthermie", "Krampfanfall", "Koma"],
    relatedSymptoms: ["Verwirrtheit", "Synkope", "Dyspnoe", "Agitation"],
    relatedCauses: ["substanzbezogene-stoerungen", "schaedel-hirn-trauma"],
    sources: [msd, nice, who],
    tags: ["intoxikation", "drogen", "opioide", "notfall"],
    hasMajorRedFlags: true
  },
  {
    id: "umwelt-berufstoxine",
    title: "Umwelt- und Berufstoxine",
    category: "toxisch-medikamentoes",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "pneumologie", "dermatologie"],
    shortDescription:
      "Arbeitsplatz- oder Umweltbelastungen können Atemwegs-, Haut-, neurologische oder systemische Beschwerden auslösen.",
    examples: ["Kohlenmonoxid", "Lösungsmittel", "Staub- und Asbestexposition"],
    typicalClues: ["Arbeitsplatzbezug", "Mehrere Betroffene", "Besserung im Urlaub", "Expositionsanamnese"],
    redFlags: ["CO-Verdacht", "Bewusstseinsstörung", "Schwere Dyspnoe", "Neurologische Defizite"],
    relatedSymptoms: ["Kopfschmerz", "Dyspnoe", "Schwindel", "Exanthem"],
    relatedCauses: ["bronchialkarzinom", "atemwegsinfekt-pneumonie"],
    sources: [who, msd, awmf],
    tags: ["toxine", "beruf", "umwelt", "co", "asbest"],
    hasMajorRedFlags: true
  },
  {
    id: "diabetes-hypoglykaemie-hyperglykaemie",
    title: "Diabetes mellitus / Hypoglykämie / Hyperglykämie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["diabetologie", "endokrinologie", "allgemeinmedizin"],
    shortDescription:
      "Dysglykämien erklären Müdigkeit, Polyurie, Gewichtsverlust, Verwirrtheit, Infektneigung oder akute Entgleisungen.",
    examples: ["Typ-2-Diabetes", "Hypoglykämie", "Hyperosmolares Syndrom"],
    typicalClues: ["Polyurie", "Polydipsie", "Messbare Glukoseabweichung", "Infekte"],
    redFlags: ["Ketoazidose", "Schwere Hypoglykämie", "Bewusstseinsstörung", "Dehydratation"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Müdigkeit", "Gewichtsverlust", "Verwirrtheit"],
    relatedCauses: ["typ-1-diabetes-lada", "mody"],
    sources: [ada, ddg, awmf],
    tags: ["diabetes", "hypoglykämie", "hyperglykämie", "hba1c"],
    hasMajorRedFlags: true
  },
  {
    id: "schilddruesenfunktionsstoerungen",
    title: "Schilddrüsenfunktionsstörungen",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Hypo- und Hyperthyreose können kardiovaskuläre, psychische, gastrointestinale und muskuläre Symptome erzeugen.",
    examples: ["Hypothyreose", "Hyperthyreose", "Thyreoiditis"],
    typicalClues: ["TSH-Abweichung", "Gewichtsänderung", "Tachykardie", "Obstipation oder Diarrhoe"],
    redFlags: ["Thyreotoxische Krise", "Myxödemkoma", "Vorhofflimmern mit Instabilität"],
    relatedSymptoms: ["Müdigkeit", "Palpitationen", "Gewichtsverlust", "Schwindel"],
    relatedCauses: ["autoimmunthyreoiditis-basedow", "angststoerung-panikattacken"],
    sources: [dge, endocrineSociety, awmf],
    tags: ["tsh", "schilddrüse", "hypothyreose", "hyperthyreose"],
    hasMajorRedFlags: true
  },
  {
    id: "elektrolytstoerungen",
    title: "Elektrolytstörungen",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["innere-medizin", "nephrologie", "endokrinologie"],
    shortDescription:
      "Natrium-, Kalium-, Calcium- oder Magnesiumstörungen können unspezifisch beginnen und rasch neurologisch oder kardial relevant werden.",
    examples: ["Hyponatriämie", "Hyperkaliämie", "Hyperkalzämie"],
    typicalClues: ["Laborabweichung", "Medikamente", "Nierenfunktion", "Dehydratation"],
    redFlags: ["Krampfanfall", "Rhythmusstörung", "Schwere Hyperkaliämie", "Bewusstseinsstörung"],
    relatedSymptoms: ["Hyponatriämie", "Hyperkalzämie", "Müdigkeit", "Verwirrtheit"],
    relatedCauses: ["niereninsuffizienz-uraemie", "polypharmazie-interaktionen"],
    sources: [awmf, nice, msd],
    tags: ["natrium", "kalium", "calcium", "elektrolyte"],
    hasMajorRedFlags: true
  },
  {
    id: "nebenniereninsuffizienz-cushing",
    title: "Nebenniereninsuffizienz / Cushing-Syndrom",
    category: "endokrin-metabolisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Störungen der Cortisolachse können Schwäche, Blutdruckprobleme, Infektanfälligkeit, Gewichtsänderung und Elektrolytstörungen erklären.",
    examples: ["Primäre Nebenniereninsuffizienz", "Sekundäre Insuffizienz", "Cushing-Syndrom"],
    typicalClues: ["Hyperpigmentierung", "Hypotonie", "Steroidanamnese", "Stammfettsucht"],
    redFlags: ["Addison-Krise", "Schock", "Schwere Hyponatriämie", "Sepsisverdacht"],
    relatedSymptoms: ["Müdigkeit", "Gewichtsverlust", "Hyponatriämie", "Schwindel"],
    relatedCauses: ["autoimmunthyreoiditis-basedow", "elektrolytstoerungen"],
    sources: [endocrineSociety, dge, msd],
    tags: ["cortisol", "addison", "cushing", "nebennieren"],
    hasMajorRedFlags: true
  },
  {
    id: "niereninsuffizienz-uraemie",
    title: "Niereninsuffizienz / Urämie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["nephrologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Akute oder chronische Nierenfunktionsstörung kann Elektrolyte, Volumenstatus, Blutdruck, Anämie und Medikamentenspiegel beeinflussen.",
    examples: ["Akutes Nierenversagen", "Chronische Nierenkrankheit", "Urämisches Syndrom"],
    typicalClues: ["Kreatininanstieg", "Ödeme", "Hypertonie", "Urämische Beschwerden"],
    redFlags: ["Hyperkaliämie", "Lungenödem", "Urämische Perikarditis", "Anurie"],
    relatedSymptoms: ["Müdigkeit", "Dyspnoe", "Hyperkaliämie", "Anämie"],
    relatedCauses: ["genetische-nierenerkrankungen", "polypharmazie-interaktionen"],
    sources: [awmf, nice, msd],
    tags: ["niere", "urämie", "kreatinin", "hyperkaliämie"],
    hasMajorRedFlags: true
  },
  {
    id: "angststoerung-panikattacken",
    title: "Angststörung / Panikattacken",
    category: "psychosomatisch-psychiatrisch",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Angst und Panik können körperliche Symptome stark prägen und sollen gleichwertig geprüft werden, ohne somatische Red Flags zu übergehen.",
    examples: ["Panikattacke", "Generalisierte Angststörung", "Agoraphobie"],
    typicalClues: ["Anfallsartige Angst", "Hyperventilation", "Palpitationen", "Vermeidungsverhalten"],
    redFlags: ["Erster Thoraxschmerz", "Synkope", "Neurologisches Defizit", "Suizidalität"],
    relatedSymptoms: ["Thoraxschmerz", "Dyspnoe", "Schwindel", "Palpitationen"],
    relatedCauses: ["akutes-koronarsyndrom", "schilddruesenfunktionsstoerungen"],
    sources: [awmf, nice, msd],
    tags: ["angst", "panik", "hyperventilation", "psychiatrie"],
    hasMajorRedFlags: true
  },
  {
    id: "depression",
    title: "Depression",
    category: "psychosomatisch-psychiatrisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Depressive Erkrankungen können Schlaf, Energie, Schmerz, Appetit, Kognition und somatische Beschwerdewahrnehmung beeinflussen.",
    examples: ["Depressive Episode", "Rezidivierende Depression", "Depression bei körperlicher Erkrankung"],
    typicalClues: ["Anhedonie", "Niedergeschlagenheit", "Schlafstörung", "Müdigkeit"],
    redFlags: ["Suizidalität", "Psychotische Symptome", "Nicht essen oder trinken", "Delirverdacht"],
    relatedSymptoms: ["Müdigkeit", "Gewichtsverlust", "Schlafstörung", "Schmerz"],
    relatedCauses: ["alkohol", "haematologische-neoplasien"],
    sources: [awmf, nice, msd],
    tags: ["depression", "suizid", "müdigkeit", "psychiatrie"],
    hasMajorRedFlags: true
  },
  {
    id: "somatische-belastungsstoerung",
    title: "Somatische Belastungsstörung",
    category: "psychosomatisch-psychiatrisch",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Anhaltende körperliche Beschwerden mit hoher Belastung verdienen strukturierte, respektvolle Abklärung und Kontinuität.",
    examples: ["Persistierende Schmerzen", "Funktionelle Beschwerden", "Hohe Krankheitsangst"],
    typicalClues: ["Viele Vorbefunde", "Hohe Belastung", "Symptomfokus", "Chronischer Verlauf"],
    redFlags: ["Neue fokale Defizite", "Fieber", "Ungewollter Gewichtsverlust", "Akute Verschlechterung"],
    relatedSymptoms: ["Bauchschmerz", "Kopfschmerz", "Schwindel", "Müdigkeit"],
    relatedCauses: ["kolorektales-karzinom", "systemischer-lupus-erythematodes"],
    sources: [awmf, nice, msd],
    tags: ["psychosomatik", "funktionell", "belastung", "somatisch"],
    hasMajorRedFlags: false
  },
  {
    id: "essstoerungen",
    title: "Essstörungen",
    category: "psychosomatisch-psychiatrisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["psychiatrie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Essstörungen können Gewichtsveränderung, Elektrolytstörungen, Kreislaufprobleme, endokrine Folgen und hohe psychische Belastung verursachen.",
    examples: ["Anorexia nervosa", "Bulimia nervosa", "Binge-Eating-Störung"],
    typicalClues: ["Gewichtsverlust", "Restriktives Essen", "Erbrechen", "Körperbildbelastung"],
    redFlags: ["Bradykardie", "Synkope", "Schwere Hypokaliämie", "Suizidalität"],
    relatedSymptoms: ["Gewichtsverlust", "Schwindel", "Synkope", "Elektrolytstörung"],
    relatedCauses: ["elektrolytstoerungen", "depression"],
    sources: [awmf, nice, msd],
    tags: ["essstörung", "anorexie", "bulimie", "gewicht"],
    hasMajorRedFlags: true
  },
  {
    id: "substanzbezogene-stoerungen",
    title: "Substanzbezogene Störungen",
    category: "psychosomatisch-psychiatrisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Substanzkonsum und Abhängigkeit beeinflussen Symptome, Diagnostik, Adhärenz, Unfallrisiko und akute Entzugssituationen.",
    examples: ["Alkoholgebrauchsstörung", "Opioidgebrauchsstörung", "Benzodiazepinabhängigkeit"],
    typicalClues: ["Toleranzentwicklung", "Entzugssymptome", "Kontrollverlust", "Soziale Folgen"],
    redFlags: ["Entzugskrampf", "Atemdepression", "Suizidalität", "Delir"],
    relatedSymptoms: ["Schlafstörung", "Schwindel", "Verwirrtheit", "Bauchschmerz"],
    relatedCauses: ["alkohol", "drogen-intoxikation"],
    sources: [awmf, nice, who],
    tags: ["sucht", "substanz", "entzug", "psychiatrie"],
    hasMajorRedFlags: true
  },
  {
    id: "atemwegsinfekt-pneumonie",
    title: "Atemwegsinfekt / Pneumonie",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "pneumologie", "infektiologie"],
    shortDescription:
      "Atemwegsinfektionen reichen von viralem Infekt bis Pneumonie und können Dyspnoe, Fieber und Allgemeinzustand verschlechtern.",
    examples: ["Viraler Infekt", "Ambulant erworbene Pneumonie", "Influenza/COVID-19"],
    typicalClues: ["Husten", "Fieber", "Auskultationsbefund", "Dyspnoe"],
    redFlags: ["Hypoxie", "Tachypnoe", "Sepsiszeichen", "Immunsuppression"],
    relatedSymptoms: ["Fieber unklarer Genese", "Dyspnoe", "Thoraxschmerz", "Husten"],
    relatedCauses: ["bronchialkarzinom", "lungenembolie"],
    sources: [awmf, rki, nice],
    tags: ["pneumonie", "husten", "infekt", "fieber"],
    hasMajorRedFlags: true
  },
  {
    id: "pyelonephritis-harnwegsinfekt",
    title: "Harnwegsinfekt / Pyelonephritis",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["allgemeinmedizin", "urologie", "nephrologie"],
    shortDescription:
      "Harnwegsinfekte können lokal begrenzt oder als Pyelonephritis und Urosepsis systemisch relevant werden.",
    examples: ["Zystitis", "Pyelonephritis", "Urosepsis"],
    typicalClues: ["Dysurie", "Pollakisurie", "Flankenschmerz", "Fieber"],
    redFlags: ["Sepsiszeichen", "Schwangerschaft", "Immunsuppression", "Nierenstau"],
    relatedSymptoms: ["Fieber", "Flankenschmerz", "Bauchschmerz", "Schwindel"],
    relatedCauses: ["niereninsuffizienz-uraemie", "sepsis"],
    sources: [awmf, nice, msd],
    tags: ["harnwegsinfekt", "pyelonephritis", "urosepsis", "dysurie"],
    hasMajorRedFlags: true
  },
  {
    id: "gastroenteritis-intraabdominelle-infektion",
    title: "Gastroenteritis / intraabdominelle Infektion",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["gastroenterologie", "allgemeinmedizin", "infektiologie"],
    shortDescription:
      "Infektiöse gastrointestinale Ursachen reichen von selbstlimitierter Gastroenteritis bis Appendizitis, Divertikulitis oder Peritonitis.",
    examples: ["Gastroenteritis", "Appendizitis", "Divertikulitis"],
    typicalClues: ["Diarrhoe", "Erbrechen", "Fieber", "Lokaler Druckschmerz"],
    redFlags: ["Peritonismus", "Blutige Diarrhoe", "Dehydratation", "Sepsiszeichen"],
    relatedSymptoms: ["Bauchschmerz", "Fieber", "Erbrechen", "Diarrhoe"],
    relatedCauses: ["abdominaltrauma", "mesenterialischaemie"],
    sources: [awmf, rki, nice],
    tags: ["gastroenteritis", "appendizitis", "divertikulitis", "bauch"],
    hasMajorRedFlags: true
  },
  {
    id: "haut-weichteilinfektion",
    title: "Haut- und Weichteilinfektion",
    category: "infektion",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["dermatologie", "allgemeinmedizin", "infektiologie"],
    shortDescription:
      "Lokale Hautinfektionen können rasch progredient werden, besonders bei Diabetes, Immunsuppression oder tiefen Weichteilinfektionen.",
    examples: ["Erysipel", "Abszess", "Nekrotisierende Fasziitis"],
    typicalClues: ["Rötung", "Überwärmung", "Schmerz", "Schwellung"],
    redFlags: ["Disproportionaler Schmerz", "Blasen/Nekrosen", "Systemtoxizität", "Rasche Ausbreitung"],
    relatedSymptoms: ["Fieber", "Exanthem", "Schmerz", "Schwellung"],
    relatedCauses: ["diabetes-hypoglykaemie-hyperglykaemie", "sepsis"],
    sources: [awmf, nice, msd],
    tags: ["erysipel", "abszess", "haut", "fasziitis"],
    hasMajorRedFlags: true
  },
  {
    id: "sepsis",
    title: "Sepsis",
    category: "infektion",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["innere-medizin", "infektiologie", "allgemeinmedizin"],
    shortDescription:
      "Lebensbedrohliche Organdysfunktion durch Infektion, oft mit unspezifischem Beginn und hoher Zeitkritik.",
    examples: ["Pneumogene Sepsis", "Urosepsis", "Abdominelle Sepsis"],
    typicalClues: ["Infektfokus", "Tachykardie", "Tachypnoe", "Hypotonie", "Verwirrtheit"],
    redFlags: ["Schock", "Laktaterhöhung", "Organversagen", "Bewusstseinsstörung"],
    relatedSymptoms: ["Fieber unklarer Genese", "Schwindel", "Dyspnoe", "Verwirrtheit"],
    relatedCauses: ["pyelonephritis-harnwegsinfekt", "atemwegsinfekt-pneumonie"],
    sources: [awmf, who, rki],
    tags: ["sepsis", "schock", "infektion", "notfall"],
    hasMajorRedFlags: true
  },
  {
    id: "familiaere-hypercholesterinaemie",
    title: "Familiäre Hypercholesterinämie",
    category: "angeboren",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["kardiologie", "allgemeinmedizin", "endokrinologie"],
    shortDescription:
      "Genetisch erhöhtes LDL führt zu frühem atherosklerotischem Risiko und familiärer Häufung kardiovaskulärer Ereignisse.",
    examples: ["Heterozygote FH", "Homozygote FH", "Familiäre KHK"],
    typicalClues: ["Sehr hohes LDL", "Frühe KHK in Familie", "Sehnenxanthome"],
    redFlags: ["Thoraxschmerz", "Früher Myokardinfarkt", "Neurologisches Defizit"],
    relatedSymptoms: ["Thoraxschmerz", "Synkope", "Schlaganfallzeichen", "Belastungsdyspnoe"],
    relatedCauses: ["akutes-koronarsyndrom", "schlaganfall-tia"],
    sources: [esc, awmf, dgk],
    tags: ["ldl", "familiär", "cholesterin", "kardiovaskulär"],
    hasMajorRedFlags: true
  },
  {
    id: "mody",
    title: "MODY",
    category: "angeboren",
    frequency: "selten",
    urgency: "ambulant",
    specialties: ["diabetologie", "endokrinologie", "paediatrie"],
    shortDescription:
      "Monogene Diabetesformen können bei jungen Menschen mit familiärer Häufung und atypischer Diabeteskonstellation auffallen.",
    examples: ["GCK-MODY", "HNF1A-MODY", "HNF4A-MODY"],
    typicalClues: ["Junges Alter", "Mehrgenerationen-Familienanamnese", "Keine typische Insulinresistenz"],
    redFlags: ["Ausgeprägte Hyperglykämie", "Ketoazidoseverdacht", "Schwangerschaftskontext"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Müdigkeit", "Gewichtsverlust"],
    relatedCauses: ["diabetes-hypoglykaemie-hyperglykaemie", "typ-1-diabetes-lada"],
    sources: [ddg, ada, msd],
    tags: ["mody", "monogen", "diabetes", "genetik"],
    hasMajorRedFlags: false
  },
  {
    id: "angeborene-herzfehler",
    title: "Angeborene Herzfehler",
    category: "angeboren",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["kardiologie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Angeborene Herzfehler können im Kindesalter oder später mit Dyspnoe, Zyanose, Synkope, Rhythmusstörungen oder Leistungsknick auffallen.",
    examples: ["Vorhofseptumdefekt", "Ventrikelseptumdefekt", "Fallot-Tetralogie"],
    typicalClues: ["Herzgeräusch", "Zyanose", "Belastungsintoleranz", "Bekannte Vorgeschichte"],
    redFlags: ["Synkope bei Belastung", "Zyanose", "Akute Herzinsuffizienz", "Arrhythmie"],
    relatedSymptoms: ["Dyspnoe", "Synkope", "Palpitationen", "Müdigkeit"],
    relatedCauses: ["herzinsuffizienz", "rhythmusstoerungen"],
    sources: [esc, dgk, msd],
    tags: ["herzfehler", "angeboren", "zyanose", "herzgeräusch"],
    hasMajorRedFlags: true
  },
  {
    id: "angeborene-gerinnungsstoerungen",
    title: "Angeborene Gerinnungsstörungen",
    category: "angeboren",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["innere-medizin", "paediatrie", "gynaekologie"],
    shortDescription:
      "Hereditäre Blutungs- oder Thromboseneigungen können Blutungen, Hämatome, Menorrhagie oder frühe Thrombosen erklären.",
    examples: ["Von-Willebrand-Syndrom", "Hämophilie", "Thrombophilie"],
    typicalClues: ["Familienanamnese", "Hämatome", "OP-Blutungen", "Junge Thrombose"],
    redFlags: ["Intrakranielle Blutung", "Lungenembolie", "Schwere Blutung", "Schwangerschaftskomplikation"],
    relatedSymptoms: ["Blutung", "Anämie", "Dyspnoe", "Beinschwellung"],
    relatedCauses: ["lungenembolie", "venenthrombose"],
    sources: [awmf, nice, msd],
    tags: ["gerinnung", "hämophilie", "thrombophilie", "blutung"],
    hasMajorRedFlags: true
  },
  {
    id: "genetische-nierenerkrankungen",
    title: "Genetische Nierenerkrankungen",
    category: "angeboren",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["nephrologie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Genetische Nierenerkrankungen können Hypertonie, Proteinurie, Hämaturie, Zysten oder progrediente Niereninsuffizienz verursachen.",
    examples: ["ADPKD", "Alport-Syndrom", "Tubulopathien"],
    typicalClues: ["Familienanamnese", "Hämaturie", "Proteinurie", "Zystennieren"],
    redFlags: ["Rascher Kreatininanstieg", "Maligne Hypertonie", "Makrohämaturie mit Schmerzen"],
    relatedSymptoms: ["Hypertonie", "Hämaturie", "Müdigkeit", "Flankenschmerz"],
    relatedCauses: ["niereninsuffizienz-uraemie", "systemischer-lupus-erythematodes"],
    sources: [awmf, nice, msd],
    tags: ["niere", "genetik", "adpkd", "alport"],
    hasMajorRedFlags: true
  },
  {
    id: "akutes-koronarsyndrom",
    title: "Akutes Koronarsyndrom",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "notfall",
    specialties: ["kardiologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Zeitkritische myokardiale Ischämie mit typischem oder atypischem Thoraxschmerz, Dyspnoe, vegetativen Symptomen oder Leistungsknick.",
    examples: ["STEMI", "NSTEMI", "Instabile Angina pectoris"],
    typicalClues: ["Retrosternaler Druck", "Ausstrahlung", "Kaltschweißigkeit", "Risikofaktoren"],
    redFlags: ["Anhaltender Thoraxschmerz", "Kreislaufinstabilität", "ST-Hebung", "Synkope"],
    relatedSymptoms: ["Thoraxschmerz", "Dyspnoe", "Synkope", "Übelkeit"],
    relatedCauses: ["familiaere-hypercholesterinaemie", "lungenembolie"],
    sources: [esc, dgk, awmf],
    tags: ["acs", "herzinfarkt", "thoraxschmerz", "notfall"],
    hasMajorRedFlags: true
  },
  {
    id: "schlaganfall-tia",
    title: "Schlaganfall / TIA",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "notfall",
    specialties: ["neurologie", "allgemeinmedizin", "kardiologie"],
    shortDescription:
      "Akute fokale neurologische Ausfälle durch Ischämie oder Blutung sind hoch zeitkritisch und müssen sofort erkannt werden.",
    examples: ["Ischämischer Schlaganfall", "TIA", "Intrazerebrale Blutung"],
    typicalClues: ["FAST-Zeichen", "Akute Sprachstörung", "Hemiparese", "Gesichtsfeldstörung"],
    redFlags: ["Akutes neurologisches Defizit", "Bewusstseinsstörung", "Starker Vernichtungskopfschmerz"],
    relatedSymptoms: ["Schwindel", "Kopfschmerz", "Sprachstörung", "Lähmung"],
    relatedCauses: ["schaedel-hirn-trauma", "vorhofflimmern"],
    sources: [dgn, awmf, nice],
    tags: ["schlaganfall", "tia", "fast", "neurologie"],
    hasMajorRedFlags: true
  },
  {
    id: "lungenembolie",
    title: "Lungenembolie",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["pneumologie", "kardiologie", "allgemeinmedizin"],
    shortDescription:
      "Pulmonale Embolien können Dyspnoe, Thoraxschmerz, Synkope, Tachykardie und Hypoxie verursachen.",
    examples: ["Segmentale Embolie", "Massive Lungenembolie", "Embolie bei TVT"],
    typicalClues: ["Plötzliche Dyspnoe", "Pleuritischer Schmerz", "Beinschwellung", "Risikofaktoren"],
    redFlags: ["Synkope", "Hypotonie", "Hypoxie", "Rechtsherzbelastung"],
    relatedSymptoms: ["Dyspnoe", "Thoraxschmerz", "Synkope", "Beinschwellung"],
    relatedCauses: ["venenthrombose", "angeborene-gerinnungsstoerungen"],
    sources: [esc, awmf, msd],
    tags: ["lungenembolie", "thrombose", "dyspnoe", "notfall"],
    hasMajorRedFlags: true
  },
  {
    id: "herzinsuffizienz",
    title: "Herzinsuffizienz",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["kardiologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Herzinsuffizienz verursacht Dyspnoe, Ödeme, Leistungsknick und kann akut dekompensieren.",
    examples: ["HFrEF", "HFpEF", "Akute Dekompensation"],
    typicalClues: ["Belastungsdyspnoe", "Ödeme", "Orthopnoe", "Erhöhtes NT-proBNP"],
    redFlags: ["Lungenödem", "Ruhedyspnoe", "Hypotonie", "Zyanose"],
    relatedSymptoms: ["Dyspnoe", "Müdigkeit", "Beinschwellung", "Gewichtszunahme"],
    relatedCauses: ["akutes-koronarsyndrom", "rhythmusstoerungen"],
    sources: [esc, dgk, awmf],
    tags: ["herzinsuffizienz", "ödeme", "dyspnoe", "ntprobnp"],
    hasMajorRedFlags: true
  },
  {
    id: "periphere-arterielle-verschlusskrankheit",
    title: "Periphere arterielle Verschlusskrankheit",
    category: "vaskulaer-kardiovaskulaer",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["kardiologie", "allgemeinmedizin", "orthopaedie"],
    shortDescription:
      "Atherosklerotische Durchblutungsstörung der Extremitäten mit Claudicatio, Wundheilungsstörung oder kritischer Ischämie.",
    examples: ["Claudicatio intermittens", "Kritische Extremitätenischämie", "Diabetisches Fußrisiko"],
    typicalClues: ["Belastungsschmerz", "Kalte Extremität", "Fehlende Pulse", "Wunden"],
    redFlags: ["Akut kaltes blasses Bein", "Ruheschmerz", "Nekrose", "Neurologischer Ausfall"],
    relatedSymptoms: ["Beinschmerz", "Wunde", "Taubheit", "Kalte Extremität"],
    relatedCauses: ["diabetes-hypoglykaemie-hyperglykaemie", "familiaere-hypercholesterinaemie"],
    sources: [esc, dgk, awmf],
    tags: ["pavk", "claudicatio", "ischämie", "gefäße"],
    hasMajorRedFlags: true
  }
];
