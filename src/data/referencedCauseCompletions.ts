import { symptomEntries } from "./symptoms";
import type { Cause, PiavCategory, SourceLink, Specialty } from "../types/medical";

const awmf: SourceLink = { title: "AWMF Leitlinienregister", url: "https://register.awmf.org/", type: "leitlinie" };
const msd: SourceLink = { title: "MSD Manual Professional", url: "https://www.msdmanuals.com/professional", type: "manual" };
const nice: SourceLink = { title: "NICE Clinical Knowledge Summaries", url: "https://cks.nice.org.uk/", type: "leitlinie" };
const esc: SourceLink = { title: "ESC Guidelines", url: "https://www.escardio.org/Guidelines", type: "leitlinie" };
const kdigo: SourceLink = { title: "KDIGO Guidelines", url: "https://kdigo.org/guidelines/", type: "leitlinie" };
const endocrine: SourceLink = { title: "Endocrine Society Guidelines", url: "https://www.endocrine.org/clinical-practice-guidelines", type: "leitlinie" };
const rki: SourceLink = { title: "Robert Koch-Institut", url: "https://www.rki.de/", type: "leitlinie" };
const who: SourceLink = { title: "World Health Organization", url: "https://www.who.int/", type: "leitlinie" };
const aafp: SourceLink = { title: "AAFP Clinical Reviews", url: "https://www.aafp.org/pubs/afp.html", type: "review" };

const referencedCauseIds = [
  "adipositas-metabolisches-syndrom",
  "adult-onset-still-disease",
  "akromegalie",
  "akute-intermittierende-porphyrie",
  "akutes-abdomen",
  "akutes-nierenversagen",
  "alport-syndrom",
  "amyloidose",
  "anaemie",
  "anaemie-eisenmangel",
  "anaphylaxie",
  "anca-vaskulitis",
  "angina-pectoris-khk",
  "anti-gbm-erkrankung",
  "aortendissektion",
  "aortenisthmusstenose",
  "aplastische-anaemie",
  "asthma-copd",
  "avp-defizienz-zentraler-diabetes-insipidus",
  "brugada-syndrom",
  "castleman-erkrankung",
  "cerebral-salt-wasting",
  "chronische-infektion",
  "chronische-niereninsuffizienz-mineralstoerung",
  "dehydratation-exsikkose",
  "diuretika",
  "ektopische-schwangerschaft",
  "endokarditis",
  "epileptischer-anfall",
  "extrasystolie",
  "familiaere-hypokalziurische-hyperkalzaemie",
  "familiaerer-diabetes-insipidus",
  "gastrooesophagealer-reflux",
  "glomerulonephritis",
  "haemochromatose",
  "hereditaere-tumorsyndrome",
  "hiv",
  "hyperkalzaemie",
  "hypertensive-nephropathie",
  "hypoaldosteronismus-typ-4-rta",
  "hypoglykaemie",
  "hypokaliaemie",
  "hyponatriaemie",
  "hypophysen-hypothalamus-laesion",
  "hypophyseninsuffizienz",
  "immobilisation",
  "interstitielle-lungenerkrankung",
  "intrakranielle-drucksteigerung",
  "kardiorenales-syndrom",
  "kleinhirnblutung",
  "kohlenmonoxidvergiftung",
  "konstriktive-perikarditis",
  "langerhanszell-histiozytose",
  "leberzirrhose-portalhypertension",
  "lithium-induzierter-diabetes-insipidus",
  "long-qt-syndrom",
  "lupusnephritis",
  "lymphoedem",
  "malignom-siadh",
  "malignom-unklarer-primaertumor",
  "malignomassoziierte-hyperkalzaemie",
  "mdma-intoxikation",
  "medikamentenfieber",
  "medikamentoes-induzierte-hypertonie",
  "medikamentoes-induzierte-hypotonie",
  "medikamentoes-induzierte-oedeme",
  "medikamentoes-nephrotoxisch",
  "menstruationsassoziierter-eisenmangel",
  "mesenterialischaemie",
  "metabolische-azidose",
  "migraene-vestibulaer",
  "milch-alkali-syndrom",
  "monoklonale-gammopathie-renale-beteiligung",
  "multiples-myelom",
  "muskuloskelettaler-thoraxschmerz",
  "myasthenia-gravis",
  "myelodysplastisches-syndrom",
  "myelomniere",
  "myokarditis",
  "nephrogener-diabetes-insipidus",
  "nephrotisches-syndrom",
  "nicht-akzidentelles-trauma",
  "nichtmaligne-gastrointestinale-erkrankung",
  "obstruktive-schlafapnoe",
  "oesophagusruptur",
  "orthostatische-proteinurie",
  "osteomyelitis",
  "osteoporose-fraktur",
  "paroxysmale-naechtliche-haemoglobinurie",
  "perikarditis-myokarditis",
  "periodische-paralyse",
  "pneumothorax",
  "postrenale-obstruktion",
  "praeeklampsie",
  "praerenales-aki-exsikkose",
  "primaere-polydipsie",
  "primaerer-hyperparathyreoidismus",
  "pulmonale-hypertonie",
  "reflux-gastritis-ulcus",
  "renovaskulaere-hypertonie",
  "rhythmusstoerungen",
  "rupturiertes-aortenaneurysma",
  "sarkoidose-granulomatoese-erkrankung",
  "sarkoidose-hypophyse",
  "schlafmangel-schlafstoerung",
  "schwangerschaft",
  "schwangerschaft-praeeklampsie",
  "siadh",
  "spontane-koronararteriendissektion",
  "stimulanzien-koffein-medikamente",
  "subarachnoidalblutung",
  "supraventrikulaere-tachykardie",
  "tachyarrhythmie",
  "tamponade",
  "tertiaerer-hyperparathyreoidismus",
  "thiazid-induzierte-hyponatriaemie",
  "thiazid-lithium-hyperkalzaemie",
  "thrombotische-mikroangiopathie",
  "tiefe-venenthrombose",
  "tuberkulose",
  "tumorlyse-syndrom",
  "vaskulitiden",
  "vaskulitis-polymyalgia-rheumatica",
  "venenthrombose",
  "venoeses-oedem",
  "ventrikulaere-tachykardie",
  "verbrennung-gewebszerfall",
  "vertebralisdissektion",
  "vitamin-d-intoxikation",
  "vorhofflimmern",
  "vorhofflimmern-vorhofflattern",
  "wernicke-enzephalopathie",
  "zns-erkrankung-siadh",
  "zyklisches-erbrechen"
] as const;

const titleOverrides: Record<string, string> = {
  "asthma-copd": "Asthma / COPD",
  "hiv": "HIV",
  "siadh": "SIADH",
  "anaemie": "Anämie",
  "hyponatriaemie": "Hyponatriämie",
  "hyperkalzaemie": "Hyperkalzämie",
  "hypokaliaemie": "Hypokaliämie",
  "tachyarrhythmie": "Tachyarrhythmie",
  "vorhofflimmern": "Vorhofflimmern",
  "reflux-gastritis-ulcus": "Reflux / Gastritis / Ulkuskrankheit",
  "angina-pectoris-khk": "Angina pectoris / KHK",
  "praeeklampsie": "Präeklampsie",
  "schwangerschaft-praeeklampsie": "Schwangerschaft / Präeklampsie"
};

export const referencedCauseCompletions: Cause[] = referencedCauseIds.map((id) =>
  makeCompletionCause(id)
);

function makeCompletionCause(id: string): Cause {
  const title = titleOverrides[id] ?? humanizeId(id);
  const category = inferCategory(id);
  const specialties = inferSpecialties(id, category);
  const symptomEntryIds = symptomEntries
    .filter(
      (entry) =>
        entry.commonCauseIds.includes(id) ||
        entry.importantCauseIds.includes(id) ||
        entry.rareButImportantCauseIds.includes(id)
    )
    .map((entry) => entry.id);
  const relatedSymptoms = symptomEntryIds.length > 0 ? symptomEntryIds : inferRelatedSymptoms(id);
  const urgency = inferUrgency(id);
  const hasMajorRedFlags = urgency !== "ambulant" || isHighRiskId(id);

  return {
    id,
    title,
    category,
    frequency: inferFrequency(id),
    urgency,
    specialties,
    shortDescription: `${title} ist eine referenzierte Differenzialdiagnose im TANTE-PIAV-Konzept und wird hier als knappe, quellenverlinkte Denkkarte geführt.`,
    examples: inferExamples(title, id),
    typicalClues: inferClues(id),
    redFlags: inferRedFlags(id),
    relatedSymptoms,
    sources: inferSources(id, category),
    tags: [title, id, getCategoryTag(category), ...relatedSymptoms].slice(0, 10),
    hasMajorRedFlags,
    symptomEntryIds,
    searchBoostTerms: [title, humanizeId(id), id.replace(/-/g, " ")],
    practicalNotes: [
      "Referenzierte Ergänzungskarte: Inhalte knapp halten, Red Flags priorisieren und Quellen vor klinischer Nutzung prüfen."
    ]
  };
}

function inferCategory(id: string): PiavCategory {
  if (/(trauma|fraktur|pneumothorax|verbrennung|nicht-akzidentell|immobilisation)/.test(id)) return "trauma";
  if (/(vaskulitis|lupus|anca|anti-gbm|myasthenia|sarkoidose|still|polymyalgia)/.test(id)) return "autoimmun";
  if (/(malignom|tumor|myelom|myelodys|castleman|monoklonal|neoplas|hereditaere-tumor|paroxysmale-naechtliche)/.test(id)) return "neoplastisch";
  if (/(medikament|thiazid|lithium|mdma|stimulanz|diuretika|vitamin-d-intox|nephrotox|alkohol|raas)/.test(id)) return "toxisch-medikamentoes";
  if (/(hyper|hypo|diabetes|siadh|polydipsie|metabol|azidose|porphyrie|parathyreoid|kalz|kalzaemie|kaliaemie|natri|nebennieren|hypophyse|akromegalie|haemochromatose|anaemie|dehydratation|exsikkose|nieren|nephrot|glomerulo|rta|cushing|mangel)/.test(id)) return "endokrin-metabolisch";
  if (/(hiv|tuberkulose|endokarditis|osteomyelitis|infektion|pneumonie|pyelo|mening|sepsis|neuritis)/.test(id)) return "infektion";
  if (/(angeboren|famili|brugada|long-qt|alport|isthmusstenose|hereditaer|periodische-paralyse)/.test(id)) return "angeboren";
  if (/(psych|schlafmangel|zyklisches-erbrechen)/.test(id)) return "psychosomatisch-psychiatrisch";
  return "vaskulaer-kardiovaskulaer";
}

function inferSpecialties(id: string, category: PiavCategory): Specialty[] {
  if (/(nieren|nephro|kalium|kaliaemie|glomerulo|gbm|alport)/.test(id)) return ["nephrologie", "innere-medizin", "allgemeinmedizin"];
  if (/(herz|aorten|koronar|rhythm|tachy|brady|venen|thromb|embolie|tamponade|myokard|perikard)/.test(id)) return ["kardiologie", "innere-medizin", "allgemeinmedizin"];
  if (/(hiv|tuberkulose|endokarditis|osteomyelitis|infektion)/.test(id)) return ["infektiologie", "innere-medizin", "allgemeinmedizin"];
  if (/(schwangerschaft|praeeklampsie|ektopische)/.test(id)) return ["gynaekologie", "allgemeinmedizin", "innere-medizin"];
  if (/(schwindel|anfall|subarachnoidal|kleinhirn|wernicke|myasthenia)/.test(id)) return ["neurologie", "innere-medizin", "allgemeinmedizin"];
  if (/(reflux|ulcus|leber|oesophagus|gastro|ileus|pankreatitis|mesenterial)/.test(id)) return ["gastroenterologie", "innere-medizin", "allgemeinmedizin"];
  if (/(malignom|myelom|tumor|myelodys|castleman|monoklonal)/.test(id)) return ["onkologie", "innere-medizin", "allgemeinmedizin"];
  if (category === "autoimmun") return ["rheumatologie", "innere-medizin", "allgemeinmedizin"];
  if (category === "endokrin-metabolisch") return ["endokrinologie", "innere-medizin", "allgemeinmedizin"];
  return ["innere-medizin", "allgemeinmedizin"];
}

function inferFrequency(id: string): Cause["frequency"] {
  if (/(selten|castleman|brugada|long-qt|paroxysmale|periodische|wernicke|anti-gbm|aip|porphyrie|aortenisthmus|langerhans|hypokalziurische|oesophagusruptur|spontane-koronar)/.test(id)) return "selten";
  if (/(haeufig|reflux|asthma|copd|vorhofflimmern|obstruktive-schlafapnoe|schwangerschaft|anaemie|diuretika|medikamentoes|venoeses|schlafmangel)/.test(id)) return "haeufig";
  return "relevant";
}

function inferUrgency(id: string): Cause["urgency"] {
  if (/(dissektion|rupturiert|tamponade|oesophagusruptur|anaphylaxie|subarachnoidal|kleinhirnblutung|akutes-nierenversagen|tumorlyse|thrombotische|pneumothorax|ventrikulaere|mesenterial|myokarditis|perikarditis|endokarditis|ektopische|praeeklampsie|hyperkaliaemie|hypoglykaemie|intoxikation|kohlenmonoxid)/.test(id)) return "notfall";
  if (/(malignom|myelom|vaskulitis|glomerulo|nephrot|siadh|hyponatriaemie|hyperkalzaemie|hiv|tuberkulose|osteomyelitis|aorten|pulmonale|renovaskulaer)/.test(id)) return "zeitnah";
  return "ambulant";
}

function isHighRiskId(id: string) {
  return /(notfall|dissektion|ruptur|blutung|anaphylaxie|embolie|thromb|sepsis|schlaganfall|tumor|malignom|neoplas|vaskulitis|nierenversagen|kaliaemie|natri|synkope|thorax|dyspnoe)/.test(id);
}

function inferSources(id: string, category: PiavCategory): SourceLink[] {
  if (category === "vaskulaer-kardiovaskulaer") return [esc, msd, aafp];
  if (category === "endokrin-metabolisch") return [endocrine, kdigo, msd];
  if (category === "infektion") return [rki, who, msd];
  if (category === "autoimmun") return [awmf, nice, msd];
  if (category === "neoplastisch") return [awmf, msd, nice];
  if (/(schwangerschaft|praeeklampsie|ektopische)/.test(id)) return [awmf, nice, msd];
  return [awmf, msd, aafp];
}

function inferExamples(title: string, id: string) {
  if (/(medikament|thiazid|lithium|stimulanz|diuretika)/.test(id)) return ["Medikamentenwirkung", "Interaktion", "Dosisänderung"];
  if (/(infektion|hiv|tuberkulose|endokarditis|osteomyelitis)/.test(id)) return ["akuter Verlauf", "chronischer Verlauf", "systemische Beteiligung"];
  if (/(malignom|myelom|tumor|neoplas)/.test(id)) return ["lokale Symptome", "B-Symptomatik", "paraneoplastische Konstellation"];
  return [title, "typische Präsentation", "atypische Präsentation"];
}

function inferClues(id: string) {
  const clues = ["passender zeitlicher Verlauf", "typische Symptomkonstellation", "Risikofaktoren oder Vorerkrankungen"];
  if (/(labor|anaemie|kaliaemie|natri|kalzaemie|nieren|siadh|azidose)/.test(id)) clues.push("auffällige Laborwerte");
  if (/(medikament|intox|diuretika|lithium|thiazid)/.test(id)) clues.push("Medikamenten- oder Substanzbezug");
  if (/(fieber|infektion|hiv|tuberkulose|endokarditis)/.test(id)) clues.push("Fieber oder Entzündungszeichen");
  return clues;
}

function inferRedFlags(id: string) {
  const flags = ["rasche Verschlechterung", "Kreislaufinstabilität", "neurologische Symptome"];
  if (/(thorax|aorten|koronar|rhythm|tachy|brady|tamponade)/.test(id)) flags.push("Thoraxschmerz, Synkope oder relevante Rhythmusstörung");
  if (/(nieren|kaliaemie|natri|azidose|tumorlyse)/.test(id)) flags.push("schwere Elektrolytstörung oder akute Nierenfunktionsverschlechterung");
  if (/(infektion|endokarditis|tuberkulose|hiv|osteomyelitis)/.test(id)) flags.push("Sepsiszeichen oder Immunsuppression");
  if (/(schwangerschaft|ektopische|praeeklampsie)/.test(id)) flags.push("Schwangerschaft mit Warnsymptomen");
  return Array.from(new Set(flags));
}

function inferRelatedSymptoms(id: string) {
  const symptoms: string[] = [];
  if (/(synkope|orthostatisch|rhythm|aorten|hypotonie)/.test(id)) symptoms.push("synkope-kollaps", "schwindel-vertigo");
  if (/(bauch|reflux|ulcus|mesenterial|leber|oesophagus|ileus)/.test(id)) symptoms.push("akuter-bauchschmerz", "uebelkeit-erbrechen");
  if (/(anaemie|myelom|myelodys|haemolyse)/.test(id)) symptoms.push("anaemie", "muedigkeit-leistungsknick");
  if (/(kaliaemie|kalium|rta|rhabdo)/.test(id)) symptoms.push("hyperkaliaemie", "nierenschwaeche-egfr-abfall");
  if (/(fieber|infektion|tuberkulose|endokarditis|osteomyelitis|hiv)/.test(id)) symptoms.push("fieber-unklarer-genese");
  return symptoms.length > 0 ? Array.from(new Set(symptoms)) : [id];
}

function getCategoryTag(category: PiavCategory) {
  return category.replace(/-/g, " ");
}

function humanizeId(id: string) {
  return id
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("de-DE"));
}
