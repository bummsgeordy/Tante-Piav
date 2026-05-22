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
  title: "Deutsche Gesellschaft fuer Endokrinologie",
  url: "https://www.endokrinologie.net/",
  type: "sonstiges"
};
const dgk: SourceLink = {
  title: "Deutsche Gesellschaft fuer Kardiologie",
  url: "https://dgk.org/",
  type: "leitlinie"
};
const dgn: SourceLink = {
  title: "Deutsche Gesellschaft fuer Neurologie",
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
      "Haeufige mechanische Verletzungen koennen Schmerzen, Funktionsverlust, Schwellung und sekundare Komplikationen erklaeren.",
    examples: ["Distorsion", "Radiusfraktur", "Schenkelhalsfraktur"],
    typicalClues: ["Traumaereignis", "Druckschmerz", "Belastungsschmerz", "Haematom"],
    redFlags: ["Fehlstellung", "Durchblutungs- oder Sensibilitaetsstoerung", "Offene Fraktur"],
    relatedSymptoms: ["Schmerz", "Schwellung", "Bewegungseinschraenkung", "Synkope"],
    relatedCauses: ["osteoporose-fraktur", "nicht-akzidentelles-trauma"],
    sources: [awmf, msd],
    tags: ["sturz", "fraktur", "prellung", "orthopaedie", "unfall"],
    hasMajorRedFlags: true
  },
  {
    id: "schaedel-hirn-trauma",
    title: "Schaedel-Hirn-Trauma",
    category: "trauma",
    frequency: "relevant",
    urgency: "notfall",
    specialties: ["neurologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Kopfverletzungen reichen von Commotio bis intrakranieller Blutung und verlangen Red-Flag-orientierte Einschaetzung.",
    examples: ["Commotio cerebri", "Subduralhaematom", "Kontusionsblutung"],
    typicalClues: ["Kopfanprall", "Amnesie", "Kopfschmerz", "Uebelkeit"],
    redFlags: ["Bewusstseinsstoerung", "Neurologisches Defizit", "Antikoagulation", "Krampfanfall"],
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
      "Thoraxverletzungen koennen Rippenfrakturen, Pneumothorax, Lungenkontusion oder kardiale Begleitprobleme verursachen.",
    examples: ["Rippenfraktur", "Pneumothorax", "Lungenkontusion"],
    typicalClues: ["Thoraxschmerz nach Trauma", "Atemabhaengiger Schmerz", "Dyspnoe"],
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
    examples: ["Milzverletzung", "Leberlaesion", "Nierenkontusion"],
    typicalClues: ["Bauchschmerz nach Unfall", "Abwehrspannung", "Flankenschmerz"],
    redFlags: ["Kreislaufinstabilitaet", "Peritonismus", "Synkope", "Makrohaematurie"],
    relatedSymptoms: ["Bauchschmerz", "Schwindel", "Haematurie", "Uebelkeit"],
    relatedCauses: ["mesenterialischaemie", "pyelonephritis-harnwegsinfekt"],
    sources: [awmf, msd],
    tags: ["bauchtrauma", "blutung", "milz", "leber", "haematurie"],
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
      "Diagnostische oder therapeutische Eingriffe koennen Blutungen, Perforationen, Nervenlaesionen oder lokale Komplikationen ausloesen.",
    examples: ["Postinterventionelle Blutung", "Katheterkomplikation", "Nervenlaesion"],
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
      "Autoimmune Schilddruesenerkrankungen verursachen Hypo- oder Hyperthyreose und koennen viele unspezifische Symptome buendeln.",
    examples: ["Hashimoto-Thyreoiditis", "Morbus Basedow", "Thyreoiditis mit Funktionswechsel"],
    typicalClues: ["Gewichtsaenderung", "Tachykardie oder Bradykardie", "Waerme- oder Kaelteintoleranz"],
    redFlags: ["Thyreotoxische Krise", "Schwere Bradykardie", "Augenschmerz bei Orbitopathie"],
    relatedSymptoms: ["Muedigkeit", "Gewichtsverlust", "Palpitationen", "Schwindel"],
    relatedCauses: ["schilddruesenfunktionsstoerungen", "angststoerung-panikattacken"],
    sources: [awmf, endocrineSociety, dge],
    tags: ["schilddruese", "hashimoto", "basedow", "tsh", "autoimmun"],
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
      "Chronisch entzuendliche Gelenkerkrankung mit symmetrischen Beschwerden, Morgensteifigkeit und systemischer Aktivitaet.",
    examples: ["Fruehe Polyarthritis", "Seropositive RA", "Extraartikulaere Manifestationen"],
    typicalClues: ["Morgensteifigkeit", "Symmetrische MCP/PIP-Schwellung", "Erhoehte Entzuendungswerte"],
    redFlags: ["Akut rotes heisses Einzelgelenk", "Fieber", "Neurologische Zeichen bei HWS-Beteiligung"],
    relatedSymptoms: ["Gelenkschmerz", "Muedigkeit", "Fieber", "Gewichtsverlust"],
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
    typicalClues: ["Photosensitivitaet", "Arthralgien", "Proteinurie", "Zytopenien"],
    redFlags: ["Akute Nierenfunktionseinschraenkung", "Krampfanfall", "Thrombose", "Schwere Zytopenie"],
    relatedSymptoms: ["Muedigkeit", "Ausschlag", "Gelenkschmerz", "Fieber"],
    relatedCauses: ["genetische-nierenerkrankungen", "venenthrombose"],
    sources: [awmf, nice, msd],
    tags: ["sle", "lupus", "proteinurie", "autoimmun"],
    hasMajorRedFlags: true
  },
  {
    id: "zoeliakie",
    title: "Zoeliakie",
    category: "autoimmun",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["gastroenterologie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Glutenassoziierte Autoimmunenteropathie mit gastrointestinalen, haematologischen oder unspezifischen Beschwerden.",
    examples: ["Malabsorption", "Eisenmangelanaemie", "Gedeihstoerung"],
    typicalClues: ["Chronische Diarrhoe", "Blaehungen", "Eisenmangel", "Gewichtsverlust"],
    redFlags: ["Schwere Dehydratation", "Ausgepraegter Gewichtsverlust", "Blut im Stuhl"],
    relatedSymptoms: ["Bauchschmerz", "Gewichtsverlust", "Anaemie", "Muedigkeit"],
    relatedCauses: ["gastroenteritis-intraabdominelle-infektion", "kolorektales-karzinom"],
    sources: [awmf, nice, msd],
    tags: ["zoeliakie", "gluten", "malabsorption", "anaemie"],
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
      "Autoimmune Insulinsekretionsstoerung, die akut oder langsam progredient mit Hyperglykaemie auffallen kann.",
    examples: ["Klassischer Typ-1-Diabetes", "LADA", "Diabetische Ketoazidose"],
    typicalClues: ["Polyurie", "Polydipsie", "Gewichtsverlust", "Hyperglykaemie"],
    redFlags: ["Ketoazidose", "Erbrechen", "Kussmaul-Atmung", "Bewusstseinseintruebung"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Gewichtsverlust", "Muedigkeit", "Bauchschmerz"],
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
      "Lungenkarzinome koennen Husten, Dyspnoe, Haemoptysen, Gewichtsverlust oder paraneoplastische Zeichen verursachen.",
    examples: ["Nicht-kleinzelliges Lungenkarzinom", "Kleinzelliges Lungenkarzinom", "Pancoast-Tumor"],
    typicalClues: ["Persistierender Husten", "Raucheranamnese", "Gewichtsverlust", "Haemoptysen"],
    redFlags: ["Haemoptysen", "Obere Einflussstauung", "Neurologische Ausfaelle", "Ruhdyspnoe"],
    relatedSymptoms: ["Dyspnoe", "Gewichtsverlust", "Thoraxschmerz", "Husten"],
    relatedCauses: ["atemwegsinfekt-pneumonie", "lungenembolie"],
    sources: [awmf, nice, msd],
    tags: ["lungenkrebs", "karzinom", "haemoptyse", "tumor"],
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
      "Kolorektale Tumoren koennen Blutungen, Anaemie, Stuhlgangsaenderungen und abdominelle Beschwerden ausloesen.",
    examples: ["Kolonkarzinom", "Rektumkarzinom", "Hereditäres Tumorsyndrom"],
    typicalClues: ["Eisenmangelanaemie", "Blut im Stuhl", "Neue Stuhlgewohnheitsaenderung"],
    redFlags: ["Ileuszeichen", "Starke Blutung", "Ungewollter Gewichtsverlust"],
    relatedSymptoms: ["Anaemie", "Bauchschmerz", "Gewichtsverlust", "Muedigkeit"],
    relatedCauses: ["zoeliakie", "hereditaere-tumorsyndrome"],
    sources: [awmf, nice, msd],
    tags: ["darmkrebs", "anaemie", "okkultes blut", "tumor"],
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
      "Brustkrebs kann als tastbarer Knoten, Hautveraenderung, Sekretion oder systemische/metastatische Symptomatik auffallen.",
    examples: ["Invasives Mammakarzinom", "DCIS", "Metastasierte Erkrankung"],
    typicalClues: ["Knoten", "Einziehung", "Mamillensekretion", "Asymmetrie"],
    redFlags: ["Neu aufgetretener harter Knoten", "Entzuendliche Brustveraenderung", "Knochenschmerz mit Schwäche"],
    relatedSymptoms: ["Brustschmerz", "Gewichtsverlust", "Knochenschmerz", "Muedigkeit"],
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
      "Prostatakarzinome sind haeufig asymptomatisch, koennen aber Harnbeschwerden, Knochenschmerz oder Allgemeinsymptome verursachen.",
    examples: ["Lokal begrenztes Karzinom", "Metastatische Erkrankung", "Knochenmetastasen"],
    typicalClues: ["PSA-Kontext", "Miktionsbeschwerden", "Knochenschmerz", "Alter"],
    redFlags: ["Akuter Harnverhalt", "Querschnittsymptome", "Starke Knochenschmerzen"],
    relatedSymptoms: ["Rueckenschmerz", "Miktionsbeschwerden", "Gewichtsverlust", "Muedigkeit"],
    relatedCauses: ["genetische-nierenerkrankungen", "haematologische-neoplasien"],
    sources: [awmf, nice, msd],
    tags: ["prostata", "psa", "urologie", "tumor"],
    hasMajorRedFlags: true
  },
  {
    id: "haematologische-neoplasien",
    title: "Haematologische Neoplasien",
    category: "neoplastisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["onkologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Leukaemien, Lymphome und Plasmazellerkrankungen koennen B-Symptome, Zytopenien, Infekte oder Knochenschmerz erklaeren.",
    examples: ["Akute Leukaemie", "Lymphom", "Multiples Myelom"],
    typicalClues: ["B-Symptome", "Lymphknoten", "Infektneigung", "Anaemie"],
    redFlags: ["Blastenverdacht", "Schwere Zytopenie", "Hyperkalzaemie", "Sepsiszeichen"],
    relatedSymptoms: ["Fieber unklarer Genese", "Anaemie", "Gewichtsverlust", "Hyperkalzaemie"],
    relatedCauses: ["sepsis", "kolorektales-karzinom"],
    sources: [awmf, nice, msd],
    tags: ["leukaemie", "lymphom", "myelom", "b-symptome"],
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
      "Medikamente koennen nahezu jedes Symptom imitieren oder verstaerken; der zeitliche Zusammenhang ist oft entscheidend.",
    examples: ["ACE-Hemmer-Husten", "NSAR-Nierenschaden", "Statinassoziierte Myalgie"],
    typicalClues: ["Neue Medikation", "Dosissteigerung", "Symptombesserung nach Absetzen"],
    redFlags: ["Anaphylaxie", "Stevens-Johnson-Syndrom", "Schwere Hypoglykämie", "Akutes Nierenversagen"],
    relatedSymptoms: ["Schwindel", "Husten", "Muedigkeit", "Exanthem"],
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
      "Mehrere Arzneimittel erhoehen Risiko fuer Interaktionen, Stuerze, Delir, Elektrolytstoerungen und Organtoxizitaet.",
    examples: ["Antikoagulation plus NSAR", "QT-Verlaengerung", "Serotonerges Syndrom"],
    typicalClues: ["Lange Medikamentenliste", "Aeltere Patientinnen und Patienten", "Nierenfunktionsabfall"],
    redFlags: ["Synkope", "Delir", "Blutung", "Rhythmusstoerung"],
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
    typicalClues: ["Foetor", "Tremor", "Erhoehte Leberwerte", "Sturzereignisse"],
    redFlags: ["Delirium tremens", "Krampfanfall", "Gastrointestinale Blutung", "Suizidalitaet"],
    relatedSymptoms: ["Schwindel", "Bauchschmerz", "Muedigkeit", "Verwirrtheit"],
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
      "Intoxikationen koennen Bewusstsein, Kreislauf, Atmung, Temperatur, Psyche und Laborwerte akut veraendern.",
    examples: ["Opioidintoxikation", "Stimulanzien", "Mischintoxikation"],
    typicalClues: ["Bewusstseinsveraenderung", "Pupillenveraenderung", "Auffaelliger Vitalparameterverlauf"],
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
      "Arbeitsplatz- oder Umweltbelastungen koennen Atemwegs-, Haut-, neurologische oder systemische Beschwerden ausloesen.",
    examples: ["Kohlenmonoxid", "Loesungsmittel", "Staub- und Asbestexposition"],
    typicalClues: ["Arbeitsplatzbezug", "Mehrere Betroffene", "Besserung im Urlaub", "Expositionsanamnese"],
    redFlags: ["CO-Verdacht", "Bewusstseinsstoerung", "Schwere Dyspnoe", "Neurologische Defizite"],
    relatedSymptoms: ["Kopfschmerz", "Dyspnoe", "Schwindel", "Exanthem"],
    relatedCauses: ["bronchialkarzinom", "atemwegsinfekt-pneumonie"],
    sources: [who, msd, awmf],
    tags: ["toxine", "beruf", "umwelt", "co", "asbest"],
    hasMajorRedFlags: true
  },
  {
    id: "diabetes-hypoglykaemie-hyperglykaemie",
    title: "Diabetes mellitus / Hypoglykaemie / Hyperglykaemie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["diabetologie", "endokrinologie", "allgemeinmedizin"],
    shortDescription:
      "Dysglykaemien erklaeren Muedigkeit, Polyurie, Gewichtsverlust, Verwirrtheit, Infektneigung oder akute Entgleisungen.",
    examples: ["Typ-2-Diabetes", "Hypoglykaemie", "Hyperosmolares Syndrom"],
    typicalClues: ["Polyurie", "Polydipsie", "Messbare Glukoseabweichung", "Infekte"],
    redFlags: ["Ketoazidose", "Schwere Hypoglykaemie", "Bewusstseinsstoerung", "Dehydratation"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Muedigkeit", "Gewichtsverlust", "Verwirrtheit"],
    relatedCauses: ["typ-1-diabetes-lada", "mody"],
    sources: [ada, ddg, awmf],
    tags: ["diabetes", "hypoglykaemie", "hyperglykaemie", "hba1c"],
    hasMajorRedFlags: true
  },
  {
    id: "schilddruesenfunktionsstoerungen",
    title: "Schilddruesenfunktionsstoerungen",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["endokrinologie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Hypo- und Hyperthyreose koennen kardiovaskulaere, psychische, gastrointestinale und muskulaere Symptome erzeugen.",
    examples: ["Hypothyreose", "Hyperthyreose", "Thyreoiditis"],
    typicalClues: ["TSH-Abweichung", "Gewichtsaenderung", "Tachykardie", "Obstipation oder Diarrhoe"],
    redFlags: ["Thyreotoxische Krise", "Myxoedemkoma", "Vorhofflimmern mit Instabilitaet"],
    relatedSymptoms: ["Muedigkeit", "Palpitationen", "Gewichtsverlust", "Schwindel"],
    relatedCauses: ["autoimmunthyreoiditis-basedow", "angststoerung-panikattacken"],
    sources: [dge, endocrineSociety, awmf],
    tags: ["tsh", "schilddruese", "hypothyreose", "hyperthyreose"],
    hasMajorRedFlags: true
  },
  {
    id: "elektrolytstoerungen",
    title: "Elektrolytstoerungen",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["innere-medizin", "nephrologie", "endokrinologie"],
    shortDescription:
      "Natrium-, Kalium-, Calcium- oder Magnesiumstoerungen koennen unspezifisch beginnen und rasch neurologisch oder kardial relevant werden.",
    examples: ["Hyponatriaemie", "Hyperkaliaemie", "Hyperkalzaemie"],
    typicalClues: ["Laborabweichung", "Medikamente", "Nierenfunktion", "Dehydratation"],
    redFlags: ["Krampfanfall", "Rhythmusstoerung", "Schwere Hyperkaliaemie", "Bewusstseinsstoerung"],
    relatedSymptoms: ["Hyponatriaemie", "Hyperkalzaemie", "Muedigkeit", "Verwirrtheit"],
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
      "Stoerungen der Cortisolachse koennen Schwäche, Blutdruckprobleme, Infektanfaelligkeit, Gewichtsaenderung und Elektrolytstoerungen erklaeren.",
    examples: ["Primaere Nebenniereninsuffizienz", "Sekundaere Insuffizienz", "Cushing-Syndrom"],
    typicalClues: ["Hyperpigmentierung", "Hypotonie", "Steroidanamnese", "Stammfettsucht"],
    redFlags: ["Addison-Krise", "Schock", "Schwere Hyponatriaemie", "Sepsisverdacht"],
    relatedSymptoms: ["Muedigkeit", "Gewichtsverlust", "Hyponatriaemie", "Schwindel"],
    relatedCauses: ["autoimmunthyreoiditis-basedow", "elektrolytstoerungen"],
    sources: [endocrineSociety, dge, msd],
    tags: ["cortisol", "addison", "cushing", "nebennieren"],
    hasMajorRedFlags: true
  },
  {
    id: "niereninsuffizienz-uraemie",
    title: "Niereninsuffizienz / Uraemie",
    category: "endokrin-metabolisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["nephrologie", "innere-medizin", "allgemeinmedizin"],
    shortDescription:
      "Akute oder chronische Nierenfunktionsstoerung kann Elektrolyte, Volumenstatus, Blutdruck, Anaemie und Medikamentenspiegel beeinflussen.",
    examples: ["Akutes Nierenversagen", "Chronische Nierenkrankheit", "Uraemisches Syndrom"],
    typicalClues: ["Kreatininanstieg", "Oedeme", "Hypertonie", "Uraemische Beschwerden"],
    redFlags: ["Hyperkaliaemie", "Lungenoedem", "Uraemische Perikarditis", "Anurie"],
    relatedSymptoms: ["Muedigkeit", "Dyspnoe", "Hyperkaliaemie", "Anaemie"],
    relatedCauses: ["genetische-nierenerkrankungen", "polypharmazie-interaktionen"],
    sources: [awmf, nice, msd],
    tags: ["niere", "uraemie", "kreatinin", "hyperkaliaemie"],
    hasMajorRedFlags: true
  },
  {
    id: "angststoerung-panikattacken",
    title: "Angststoerung / Panikattacken",
    category: "psychosomatisch-psychiatrisch",
    frequency: "haeufig",
    urgency: "ambulant",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Angst und Panik koennen koerperliche Symptome stark praegen und sollen gleichwertig geprueft werden, ohne somatische Red Flags zu uebergehen.",
    examples: ["Panikattacke", "Generalisierte Angststoerung", "Agoraphobie"],
    typicalClues: ["Anfallsartige Angst", "Hyperventilation", "Palpitationen", "Vermeidungsverhalten"],
    redFlags: ["Erster Thoraxschmerz", "Synkope", "Neurologisches Defizit", "Suizidalitaet"],
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
      "Depressive Erkrankungen koennen Schlaf, Energie, Schmerz, Appetit, Kognition und somatische Beschwerdewahrnehmung beeinflussen.",
    examples: ["Depressive Episode", "Rezidivierende Depression", "Depression bei koerperlicher Erkrankung"],
    typicalClues: ["Anhedonie", "Niedergeschlagenheit", "Schlafstoerung", "Muedigkeit"],
    redFlags: ["Suizidalitaet", "Psychotische Symptome", "Nicht essen oder trinken", "Delirverdacht"],
    relatedSymptoms: ["Muedigkeit", "Gewichtsverlust", "Schlafstoerung", "Schmerz"],
    relatedCauses: ["alkohol", "haematologische-neoplasien"],
    sources: [awmf, nice, msd],
    tags: ["depression", "suizid", "muedigkeit", "psychiatrie"],
    hasMajorRedFlags: true
  },
  {
    id: "somatische-belastungsstoerung",
    title: "Somatische Belastungsstoerung",
    category: "psychosomatisch-psychiatrisch",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Anhaltende koerperliche Beschwerden mit hoher Belastung verdienen strukturierte, respektvolle Abklaerung und Kontinuitaet.",
    examples: ["Persistierende Schmerzen", "Funktionelle Beschwerden", "Hohe Krankheitsangst"],
    typicalClues: ["Viele Vorbefunde", "Hohe Belastung", "Symptomfokus", "Chronischer Verlauf"],
    redFlags: ["Neue fokale Defizite", "Fieber", "Ungewollter Gewichtsverlust", "Akute Verschlechterung"],
    relatedSymptoms: ["Bauchschmerz", "Kopfschmerz", "Schwindel", "Muedigkeit"],
    relatedCauses: ["kolorektales-karzinom", "systemischer-lupus-erythematodes"],
    sources: [awmf, nice, msd],
    tags: ["psychosomatik", "funktionell", "belastung", "somatisch"],
    hasMajorRedFlags: false
  },
  {
    id: "essstoerungen",
    title: "Essstoerungen",
    category: "psychosomatisch-psychiatrisch",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["psychiatrie", "paediatrie", "allgemeinmedizin"],
    shortDescription:
      "Essstoerungen koennen Gewichtsveraenderung, Elektrolytstoerungen, Kreislaufprobleme, endokrine Folgen und hohe psychische Belastung verursachen.",
    examples: ["Anorexia nervosa", "Bulimia nervosa", "Binge-Eating-Stoerung"],
    typicalClues: ["Gewichtsverlust", "Restriktives Essen", "Erbrechen", "Koerperbildbelastung"],
    redFlags: ["Bradykardie", "Synkope", "Schwere Hypokaliaemie", "Suizidalitaet"],
    relatedSymptoms: ["Gewichtsverlust", "Schwindel", "Synkope", "Elektrolytstoerung"],
    relatedCauses: ["elektrolytstoerungen", "depression"],
    sources: [awmf, nice, msd],
    tags: ["essstoerung", "anorexie", "bulimie", "gewicht"],
    hasMajorRedFlags: true
  },
  {
    id: "substanzbezogene-stoerungen",
    title: "Substanzbezogene Stoerungen",
    category: "psychosomatisch-psychiatrisch",
    frequency: "haeufig",
    urgency: "zeitnah",
    specialties: ["psychiatrie", "allgemeinmedizin", "innere-medizin"],
    shortDescription:
      "Substanzkonsum und Abhaengigkeit beeinflussen Symptome, Diagnostik, Adhaerenz, Unfallrisiko und akute Entzugssituationen.",
    examples: ["Alkoholgebrauchsstörung", "Opioidgebrauchsstörung", "Benzodiazepinabhaengigkeit"],
    typicalClues: ["Toleranzentwicklung", "Entzugssymptome", "Kontrollverlust", "Soziale Folgen"],
    redFlags: ["Entzugskrampf", "Atemdepression", "Suizidalitaet", "Delir"],
    relatedSymptoms: ["Schlafstoerung", "Schwindel", "Verwirrtheit", "Bauchschmerz"],
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
      "Atemwegsinfektionen reichen von viralem Infekt bis Pneumonie und koennen Dyspnoe, Fieber und Allgemeinzustand verschlechtern.",
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
      "Harnwegsinfekte koennen lokal begrenzt oder als Pyelonephritis und Urosepsis systemisch relevant werden.",
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
      "Infektioese gastrointestinale Ursachen reichen von selbstlimitierter Gastroenteritis bis Appendizitis, Divertikulitis oder Peritonitis.",
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
      "Lokale Hautinfektionen koennen rasch progredient werden, besonders bei Diabetes, Immunsuppression oder tiefen Weichteilinfektionen.",
    examples: ["Erysipel", "Abszess", "Nekrotisierende Fasziitis"],
    typicalClues: ["Roetung", "Ueberwaermung", "Schmerz", "Schwellung"],
    redFlags: ["Disproportionaler Schmerz", "Blasen/Nekrosen", "Systemtoxizitaet", "Rasche Ausbreitung"],
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
    redFlags: ["Schock", "Laktaterhoehung", "Organversagen", "Bewusstseinsstoerung"],
    relatedSymptoms: ["Fieber unklarer Genese", "Schwindel", "Dyspnoe", "Verwirrtheit"],
    relatedCauses: ["pyelonephritis-harnwegsinfekt", "atemwegsinfekt-pneumonie"],
    sources: [awmf, who, rki],
    tags: ["sepsis", "schock", "infektion", "notfall"],
    hasMajorRedFlags: true
  },
  {
    id: "familiaere-hypercholesterinaemie",
    title: "Familiaere Hypercholesterinaemie",
    category: "angeboren",
    frequency: "relevant",
    urgency: "ambulant",
    specialties: ["kardiologie", "allgemeinmedizin", "endokrinologie"],
    shortDescription:
      "Genetisch erhoehtes LDL fuehrt zu fruehem atherosklerotischem Risiko und familiaerer Haeufung kardiovaskulaerer Ereignisse.",
    examples: ["Heterozygote FH", "Homozygote FH", "Familiaere KHK"],
    typicalClues: ["Sehr hohes LDL", "Fruehe KHK in Familie", "Sehnenxanthome"],
    redFlags: ["Thoraxschmerz", "Frueher Myokardinfarkt", "Neurologisches Defizit"],
    relatedSymptoms: ["Thoraxschmerz", "Synkope", "Schlaganfallzeichen", "Belastungsdyspnoe"],
    relatedCauses: ["akutes-koronarsyndrom", "schlaganfall-tia"],
    sources: [esc, awmf, dgk],
    tags: ["ldl", "familiaer", "cholesterin", "kardiovaskulaer"],
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
      "Monogene Diabetesformen koennen bei jungen Menschen mit familiaerer Haeufung und atypischer Diabeteskonstellation auffallen.",
    examples: ["GCK-MODY", "HNF1A-MODY", "HNF4A-MODY"],
    typicalClues: ["Junges Alter", "Mehrgenerationen-Familienanamnese", "Keine typische Insulinresistenz"],
    redFlags: ["Ausgepraegte Hyperglykaemie", "Ketoazidoseverdacht", "Schwangerschaftskontext"],
    relatedSymptoms: ["Polyurie/Polydipsie", "Muedigkeit", "Gewichtsverlust"],
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
      "Angeborene Herzfehler koennen im Kindesalter oder spaeter mit Dyspnoe, Zyanose, Synkope, Rhythmusstoerungen oder Leistungsknick auffallen.",
    examples: ["Vorhofseptumdefekt", "Ventrikelseptumdefekt", "Fallot-Tetralogie"],
    typicalClues: ["Herzgeraeusch", "Zyanose", "Belastungsintoleranz", "Bekannte Vorgeschichte"],
    redFlags: ["Synkope bei Belastung", "Zyanose", "Akute Herzinsuffizienz", "Arrhythmie"],
    relatedSymptoms: ["Dyspnoe", "Synkope", "Palpitationen", "Muedigkeit"],
    relatedCauses: ["herzinsuffizienz", "rhythmusstoerungen"],
    sources: [esc, dgk, msd],
    tags: ["herzfehler", "angeboren", "zyanose", "herzgeraeusch"],
    hasMajorRedFlags: true
  },
  {
    id: "angeborene-gerinnungsstoerungen",
    title: "Angeborene Gerinnungsstoerungen",
    category: "angeboren",
    frequency: "relevant",
    urgency: "zeitnah",
    specialties: ["innere-medizin", "paediatrie", "gynaekologie"],
    shortDescription:
      "Hereditare Blutungs- oder Thromboseneigungen koennen Blutungen, Haematome, Menorrhagie oder fruehe Thrombosen erklaeren.",
    examples: ["Von-Willebrand-Syndrom", "Haemophilie", "Thrombophilie"],
    typicalClues: ["Familienanamnese", "Haematome", "OP-Blutungen", "Junge Thrombose"],
    redFlags: ["Intrakranielle Blutung", "Lungenembolie", "Schwere Blutung", "Schwangerschaftskomplikation"],
    relatedSymptoms: ["Blutung", "Anaemie", "Dyspnoe", "Beinschwellung"],
    relatedCauses: ["lungenembolie", "venenthrombose"],
    sources: [awmf, nice, msd],
    tags: ["gerinnung", "haemophilie", "thrombophilie", "blutung"],
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
      "Genetische Nierenerkrankungen koennen Hypertonie, Proteinurie, Haematurie, Zysten oder progrediente Niereninsuffizienz verursachen.",
    examples: ["ADPKD", "Alport-Syndrom", "Tubulopathien"],
    typicalClues: ["Familienanamnese", "Haematurie", "Proteinurie", "Zystennieren"],
    redFlags: ["Rascher Kreatininanstieg", "Maligne Hypertonie", "Makrohaematurie mit Schmerzen"],
    relatedSymptoms: ["Hypertonie", "Haematurie", "Muedigkeit", "Flankenschmerz"],
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
      "Zeitkritische myokardiale Ischaemie mit typischem oder atypischem Thoraxschmerz, Dyspnoe, vegetativen Symptomen oder Leistungsknick.",
    examples: ["STEMI", "NSTEMI", "Instabile Angina pectoris"],
    typicalClues: ["Retrosternaler Druck", "Ausstrahlung", "Kaltschweissigkeit", "Risikofaktoren"],
    redFlags: ["Anhaltender Thoraxschmerz", "Kreislaufinstabilitaet", "ST-Hebung", "Synkope"],
    relatedSymptoms: ["Thoraxschmerz", "Dyspnoe", "Synkope", "Uebelkeit"],
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
      "Akute fokale neurologische Ausfaelle durch Ischaemie oder Blutung sind hoch zeitkritisch und muessen sofort erkannt werden.",
    examples: ["Ischaemischer Schlaganfall", "TIA", "Intrazerebrale Blutung"],
    typicalClues: ["FAST-Zeichen", "Akute Sprachstoerung", "Hemiparese", "Gesichtsfeldstoerung"],
    redFlags: ["Akutes neurologisches Defizit", "Bewusstseinsstoerung", "Starker Vernichtungskopfschmerz"],
    relatedSymptoms: ["Schwindel", "Kopfschmerz", "Sprachstoerung", "Lähmung"],
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
      "Pulmonale Embolien koennen Dyspnoe, Thoraxschmerz, Synkope, Tachykardie und Hypoxie verursachen.",
    examples: ["Segmentale Embolie", "Massive Lungenembolie", "Embolie bei TVT"],
    typicalClues: ["Ploetzliche Dyspnoe", "Pleuritischer Schmerz", "Beinschwellung", "Risikofaktoren"],
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
      "Herzinsuffizienz verursacht Dyspnoe, Oedeme, Leistungsknick und kann akut dekompensieren.",
    examples: ["HFrEF", "HFpEF", "Akute Dekompensation"],
    typicalClues: ["Belastungsdyspnoe", "Oedeme", "Orthopnoe", "Erhoehtes NT-proBNP"],
    redFlags: ["Lungenoedem", "Ruhedyspnoe", "Hypotonie", "Zyanose"],
    relatedSymptoms: ["Dyspnoe", "Muedigkeit", "Beinschwellung", "Gewichtszunahme"],
    relatedCauses: ["akutes-koronarsyndrom", "rhythmusstoerungen"],
    sources: [esc, dgk, awmf],
    tags: ["herzinsuffizienz", "oedeme", "dyspnoe", "ntprobnp"],
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
      "Atherosklerotische Durchblutungsstoerung der Extremitaeten mit Claudicatio, Wundheilungsstoerung oder kritischer Ischaemie.",
    examples: ["Claudicatio intermittens", "Kritische Extremitaetenischaemie", "Diabetisches Fussrisiko"],
    typicalClues: ["Belastungsschmerz", "Kalte Extremitaet", "Fehlende Pulse", "Wunden"],
    redFlags: ["Akut kaltes blasses Bein", "Ruheschmerz", "Nekrose", "Neurologischer Ausfall"],
    relatedSymptoms: ["Beinschmerz", "Wunde", "Taubheit", "Kalte Extremitaet"],
    relatedCauses: ["diabetes-hypoglykaemie-hyperglykaemie", "familiaere-hypercholesterinaemie"],
    sources: [esc, dgk, awmf],
    tags: ["pavk", "claudicatio", "ischaemie", "gefässe"],
    hasMajorRedFlags: true
  }
];
