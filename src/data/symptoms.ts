import type { SymptomEntry } from "../types/symptom";

export const symptomEntries: SymptomEntry[] = [
  {
    id: "hoher-blutdruck",
    title: "Hoher Blutdruck / Hypertonie",
    kind: "vitalparameter",
    synonyms: [
      "Hypertonie",
      "arterielle Hypertonie",
      "Bluthochdruck",
      "hoher Blutdruck",
      "schwer einstellbarer Blutdruck",
      "therapieresistente Hypertonie"
    ],
    shortDescription:
      "Häufig essenziell, aber sekundäre Ursachen aktiv mitdenken bei jungem Beginn, schwerer oder therapieresistenter Hypertonie, Hypokaliämie, CKD, Schlafapnoe-Hinweisen oder paroxysmalen Symptomen.",
    redFlags: [
      "hypertensive Krise mit neurologischen Symptomen, Thoraxschmerz, Dyspnoe oder akuter Nierenfunktionsverschlechterung",
      "neurologisches Defizit oder Sehstörung",
      "Thoraxschmerz oder Verdacht auf Aortendissektion",
      "Schwangerschaft mit Hypertonie",
      "Hypokaliämie plus Hypertonie",
      "junger Beginn oder sehr schwere Hypertonie"
    ],
    commonCauseIds: [
      "essenzielle-hypertonie",
      "chronische-niereninsuffizienz",
      "obstruktive-schlafapnoe",
      "medikamentoes-induzierte-hypertonie",
      "adipositas-metabolisches-syndrom"
    ],
    importantCauseIds: [
      "primaerer-hyperaldosteronismus",
      "renovaskulaere-hypertonie",
      "phaeochromozytom-paragangliom",
      "cushing-syndrom",
      "schilddruesenfunktionsstoerungen"
    ],
    rareButImportantCauseIds: [
      "akromegalie",
      "aortenisthmusstenose",
      "primaerer-hyperparathyreoidismus",
      "schwangerschaft-praeeklampsie"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "vaskulaer-kardiovaskulaer",
      "toxisch-medikamentoes",
      "angeboren"
    ],
    specialties: [
      "allgemeinmedizin",
      "innere-medizin",
      "kardiologie",
      "nephrologie",
      "endokrinologie"
    ],
    suggestedBasicWorkup: [
      "korrekte Blutdruckmessung / Heim- oder 24h-Blutdruck prüfen",
      "Medikamenten- und Substanzanamnese: NSAR, Steroide, Sympathomimetika, orale Kontrazeptiva, Lakritz, Stimulanzien",
      "Kreatinin/eGFR, Kalium, Natrium, Urinstatus, Albumin-Kreatinin-Ratio",
      "HbA1c/Glukose, Lipide, TSH",
      "bei Hypokaliämie oder resistenter Hypertonie: Aldosteron/Renin-Screening erwägen",
      "bei typischer Klinik: Schlafapnoe-Screening, renovaskuläre Abklärung, Katecholamin-/Metanephrin-Diagnostik"
    ],
    tags: [
      "Blutdruck",
      "Hypertonie",
      "sekundäre Hypertonie",
      "Hypokaliämie",
      "CKD",
      "Schlafapnoe",
      "Hyperaldosteronismus",
      "Phäochromozytom"
    ],
    sources: [
      {
        title: "NCBI Bookshelf: Secondary Hypertension",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK544305/",
        type: "review"
      },
      {
        title: "AHA/ACC 2025 High Blood Pressure Guideline",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356",
        type: "leitlinie"
      },
      { title: "AWMF Leitlinienregister", url: "https://register.awmf.org/", type: "leitlinie" }
    ]
  },
  {
    id: "proteinurie",
    title: "Proteinurie / Albuminurie",
    kind: "labor",
    synonyms: [
      "Proteinurie",
      "Albuminurie",
      "Mikroalbuminurie",
      "Makroalbuminurie",
      "Eiweiß im Urin",
      "erhöhter ACR",
      "erhöhte Albumin-Kreatinin-Ratio"
    ],
    shortDescription:
      "Proteinurie ist ein zentraler Marker für Nierenschädigung, Progressionsrisiko und kardiovaskuläres Risiko. Persistenz, Ausmaß und Begleitbefunde bestimmen die Dringlichkeit.",
    redFlags: [
      "nephrotischer Bereich oder Ödeme",
      "Proteinurie plus Hämaturie",
      "rasch fallende eGFR",
      "Hypertonie plus Proteinurie",
      "systemische Symptome wie Purpura, Fieber, Arthralgien",
      "Schwangerschaft mit Proteinurie"
    ],
    commonCauseIds: [
      "diabetes-mellitus-entgleisung",
      "hypertensive-nephropathie",
      "chronische-niereninsuffizienz",
      "orthostatische-proteinurie",
      "pyelonephritis-harnwegsinfekt"
    ],
    importantCauseIds: [
      "glomerulonephritis",
      "nephrotisches-syndrom",
      "lupusnephritis",
      "amyloidose",
      "monoklonale-gammopathie-renale-beteiligung"
    ],
    rareButImportantCauseIds: [
      "anti-gbm-erkrankung",
      "anca-vaskulitis",
      "alport-syndrom",
      "praeeklampsie"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "autoimmun",
      "vaskulaer-kardiovaskulaer",
      "infektion",
      "angeboren",
      "neoplastisch"
    ],
    specialties: [
      "nephrologie",
      "diabetologie",
      "endokrinologie",
      "allgemeinmedizin",
      "innere-medizin",
      "rheumatologie"
    ],
    suggestedBasicWorkup: [
      "Urinstatus wiederholen und quantifizieren: ACR/PCR",
      "eGFR/Kreatinin, Elektrolyte, Albumin, Lipide",
      "Blutdruck und Diabetesstatus prüfen",
      "Sediment/Hämaturie beachten",
      "bei aktiven Sedimentbefunden, nephrotischem Syndrom oder eGFR-Abfall nephrologisch abklären"
    ],
    tags: [
      "Albuminurie",
      "ACR",
      "CKD",
      "diabetische Nephropathie",
      "Glomerulonephritis",
      "nephrotisches Syndrom"
    ],
    sources: [
      {
        title: "NCBI Bookshelf: Proteinuria",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK564390/",
        type: "review"
      },
      {
        title: "KDIGO 2024 CKD Guideline",
        url: "https://www.kidney-international.org/article/S0085-2538(23)00766-4/fulltext",
        type: "leitlinie"
      },
      {
        title: "NICE NG203: Chronic kidney disease assessment and management",
        url: "https://www.nice.org.uk/guidance/ng203",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "gewichtsabnahme",
    title: "Ungewollte Gewichtsabnahme",
    kind: "symptom",
    synonyms: [
      "Gewichtsverlust",
      "ungewollter Gewichtsverlust",
      "Gewichtsabnahme",
      "Kachexie",
      "B-Symptomatik",
      "Sarkopenie",
      "Appetitverlust"
    ],
    shortDescription:
      "Breite Differenzialdiagnose aus Malignität, GI-Erkrankungen, endokrinen Ursachen, Infektionen, psychischen Erkrankungen, Medikamenten und sozialen/funktionellen Faktoren.",
    redFlags: [
      "B-Symptomatik mit Nachtschweiß oder Fieber",
      "rascher oder progredienter Gewichtsverlust",
      "Dysphagie, Blut im Stuhl, Hämoptysen",
      "neue Anämie",
      "palpable Lymphknoten",
      "Hyperkalzämie",
      "älterer Patient mit neuem Gewichtsverlust"
    ],
    commonCauseIds: [
      "depression",
      "nichtmaligne-gastrointestinale-erkrankung",
      "arzneimittelnebenwirkung",
      "alkohol",
      "hyperthyreose"
    ],
    importantCauseIds: [
      "malignom-unklarer-primaertumor",
      "kolorektales-karzinom",
      "bronchialkarzinom",
      "haematologische-neoplasien",
      "diabetes-mellitus-entgleisung",
      "chronische-infektion"
    ],
    rareButImportantCauseIds: [
      "nebenniereninsuffizienz",
      "phaeochromozytom-paragangliom",
      "zoeliakie",
      "hiv",
      "tuberkulose"
    ],
    piavCategories: [
      "neoplastisch",
      "endokrin-metabolisch",
      "infektion",
      "psychosomatisch-psychiatrisch",
      "toxisch-medikamentoes",
      "autoimmun"
    ],
    specialties: [
      "allgemeinmedizin",
      "innere-medizin",
      "endokrinologie",
      "gastroenterologie",
      "onkologie",
      "psychiatrie",
      "infektiologie"
    ],
    suggestedBasicWorkup: [
      "Zeitverlauf und prozentualen Gewichtsverlust erfassen",
      "Ernährungs-, Medikamenten-, Alkohol-, Sozial- und Depressionsanamnese",
      "körperliche Untersuchung inkl. Lymphknoten, Abdomen, Schilddrüse",
      "BB, CRP/BSG, Elektrolyte, Leberwerte, Nierenwerte, Calcium, Glukose/HbA1c, TSH",
      "Urinstatus, Stuhlblut je nach Kontext",
      "weitere Diagnostik fokussiert nach Anamnese und Befund"
    ],
    tags: [
      "Gewichtsverlust",
      "B-Symptomatik",
      "Malignom",
      "Hyperthyreose",
      "Depression",
      "Malabsorption",
      "Infektion"
    ],
    sources: [
      {
        title: "BMJ Best Practice: Assessment of unintentional weight loss",
        url: "https://bestpractice.bmj.com/topics/en-gb/548",
        type: "review"
      },
      {
        title: "PMC: Approach to weight loss in adults",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11182459/",
        type: "review"
      },
      {
        title: "AAFP: Unintentional Weight Loss in Older Adults",
        url: "https://www.aafp.org/pubs/afp/issues/2021/0700/p34.html",
        type: "review"
      }
    ]
  },
  {
    id: "gewichtszunahme-oedeme",
    title: "Gewichtszunahme / Ödeme / Wassereinlagerung",
    kind: "symptom",
    synonyms: [
      "Gewichtszunahme",
      "Ödeme",
      "Oedeme",
      "Wassereinlagerung",
      "Beinödeme",
      "geschwollene Beine",
      "Anasarka",
      "Flüssigkeitsretention"
    ],
    shortDescription:
      "Gewichtszunahme kann Fettmasse, Flüssigkeit oder endokrine/metabolische Veränderungen abbilden. Rasche Gewichtszunahme spricht oft für Flüssigkeitsretention.",
    redFlags: [
      "akute Dyspnoe oder Orthopnoe",
      "rasche Gewichtszunahme bei bekannter Herzinsuffizienz",
      "einseitige Beinschwellung mit Schmerz",
      "Anasarka oder Aszites",
      "Ödeme plus Proteinurie",
      "Ödeme plus Hypoalbuminämie",
      "Schwangerschaft mit Hypertonie/Proteinurie"
    ],
    commonCauseIds: [
      "herzinsuffizienz",
      "chronische-niereninsuffizienz",
      "venoeses-oedem",
      "medikamentoes-induzierte-oedeme",
      "adipositas-metabolisches-syndrom"
    ],
    importantCauseIds: [
      "nephrotisches-syndrom",
      "leberzirrhose-portalhypertension",
      "hypothyreose",
      "cushing-syndrom",
      "tiefe-venenthrombose"
    ],
    rareButImportantCauseIds: [
      "konstriktive-perikarditis",
      "pulmonale-hypertonie",
      "lymphoedem",
      "praeeklampsie"
    ],
    piavCategories: [
      "vaskulaer-kardiovaskulaer",
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "neoplastisch",
      "angeboren"
    ],
    specialties: [
      "innere-medizin",
      "kardiologie",
      "nephrologie",
      "endokrinologie",
      "gastroenterologie",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "Zeitverlauf: Tage/Wochen vs. Monate/Jahre",
      "Verteilung: einseitig, beidseitig, generalisiert",
      "Gewicht, Blutdruck, Herz-/Lungenbefund, Halsvenen, Aszites",
      "Kreatinin/eGFR, Elektrolyte, Albumin, Leberwerte, TSH",
      "Urinstatus/ACR, BNP/NT-proBNP je nach Kontext",
      "bei einseitiger Schwellung: Thromboseabklärung"
    ],
    tags: [
      "Ödeme",
      "Gewichtszunahme",
      "Herzinsuffizienz",
      "CKD",
      "nephrotisches Syndrom",
      "Hypothyreose",
      "Cushing",
      "Amlodipin"
    ],
    sources: [
      {
        title: "MSD Manual Professional: Edema",
        url: "https://www.msdmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/edema",
        type: "manual"
      },
      {
        title: "NCBI Bookshelf: Peripheral Edema",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK554452/",
        type: "review"
      },
      {
        title: "NIDDK: Cushing's Syndrome",
        url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/cushings-syndrome",
        type: "manual"
      }
    ]
  },
  {
    id: "dyspnoe-luftnot",
    title: "Dyspnoe / Luftnot / Atemnot",
    kind: "symptom",
    synonyms: [
      "Dyspnoe",
      "Luftnot",
      "Atemnot",
      "Kurzatmigkeit",
      "Belastungsdyspnoe",
      "Orthopnoe",
      "nächtliche Luftnot"
    ],
    shortDescription:
      "Häufig kardial oder pulmonal, aber auch Anämie, metabolische Azidose, Angst/Panik, neuromuskuläre Erkrankungen und systemische Erkrankungen berücksichtigen.",
    redFlags: [
      "akute schwere Dyspnoe",
      "Zyanose oder Hypoxie",
      "Thoraxschmerz",
      "Synkope",
      "Hämoptysen",
      "Stridor",
      "einseitig fehlendes Atemgeräusch",
      "Zeichen der Sepsis",
      "neurologische Ausfälle"
    ],
    commonCauseIds: [
      "herzinsuffizienz",
      "asthma-copd",
      "atemwegsinfekt-pneumonie",
      "anaemie",
      "angststoerung-panikattacken"
    ],
    importantCauseIds: [
      "akutes-koronarsyndrom",
      "lungenembolie",
      "pneumothorax",
      "tachyarrhythmie",
      "metabolische-azidose"
    ],
    rareButImportantCauseIds: [
      "aortendissektion",
      "myasthenia-gravis",
      "interstitielle-lungenerkrankung",
      "pulmonale-hypertonie",
      "anaphylaxie"
    ],
    piavCategories: [
      "vaskulaer-kardiovaskulaer",
      "infektion",
      "trauma",
      "psychosomatisch-psychiatrisch",
      "endokrin-metabolisch",
      "autoimmun",
      "toxisch-medikamentoes"
    ],
    specialties: [
      "innere-medizin",
      "kardiologie",
      "pneumologie",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "Vitalparameter, SpO2, Atemarbeit, Auskultation",
      "EKG",
      "Blutbild, CRP, Elektrolyte, Kreatinin, ggf. BGA",
      "BNP/NT-proBNP, Troponin, D-Dimer nach klinischer Wahrscheinlichkeit",
      "Röntgen-Thorax oder Sonographie je nach Setting",
      "Notfallzeichen priorisieren"
    ],
    tags: [
      "Dyspnoe",
      "Luftnot",
      "Herzinsuffizienz",
      "COPD",
      "Asthma",
      "Lungenembolie",
      "Pneumonie",
      "Anämie"
    ],
    sources: [
      {
        title: "PMC: The Differential Diagnosis of Dyspnea",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5247680/",
        type: "review"
      },
      {
        title: "AAFP: Chronic Dyspnea Diagnosis and Evaluation",
        url: "https://www.aafp.org/pubs/afp/issues/2020/0501/p542.html",
        type: "review"
      },
      {
        title: "BMJ Best Practice: Assessment of dyspnoea",
        url: "https://bestpractice.bmj.com/topics/en-gb/862",
        type: "review"
      }
    ]
  },
  {
    id: "uebelkeit-erbrechen",
    title: "Übelkeit / Erbrechen",
    kind: "symptom",
    synonyms: [
      "Übelkeit",
      "Uebelkeit",
      "Nausea",
      "Erbrechen",
      "Vomitus",
      "Brechreiz",
      "chronische Übelkeit"
    ],
    shortDescription:
      "Häufig gastrointestinal oder medikamentös, aber auch metabolisch-endokrin, renal, kardial, neurologisch, vestibulär, infektiös und psychiatrisch möglich.",
    redFlags: [
      "Exsikkose oder Kreislaufinstabilität",
      "Bluterbrechen",
      "Peritonismus",
      "starke Kopfschmerzen oder neurologische Ausfälle",
      "Schwangerschaft",
      "Thoraxschmerz oder ACS-Verdacht",
      "DKA-/HHS-Verdacht",
      "schwere Elektrolytstörung"
    ],
    commonCauseIds: [
      "gastroenteritis-intraabdominelle-infektion",
      "arzneimittelnebenwirkung",
      "reflux-gastritis-ulcus",
      "migraene-vestibulaer",
      "schwangerschaft"
    ],
    importantCauseIds: [
      "diabetes-mellitus-entgleisung",
      "akutes-koronarsyndrom",
      "akutes-abdomen",
      "niereninsuffizienz-uraemie",
      "hyperkalzaemie"
    ],
    rareButImportantCauseIds: [
      "nebenniereninsuffizienz",
      "hyponatriaemie",
      "intrakranielle-drucksteigerung",
      "akute-intermittierende-porphyrie",
      "zyklisches-erbrechen"
    ],
    piavCategories: [
      "infektion",
      "toxisch-medikamentoes",
      "endokrin-metabolisch",
      "vaskulaer-kardiovaskulaer",
      "neoplastisch",
      "psychosomatisch-psychiatrisch"
    ],
    specialties: [
      "allgemeinmedizin",
      "innere-medizin",
      "gastroenterologie",
      "endokrinologie",
      "nephrologie",
      "kardiologie",
      "neurologie"
    ],
    suggestedBasicWorkup: [
      "Akut vs. chronisch, Erbrechen vs. Regurgitation klären",
      "Medikamente, Alkohol, Cannabis, Schwangerschaft, Diabetes, CKD erfassen",
      "Vitalparameter, Hydratation, Abdomen, neurologischer Status",
      "Elektrolyte, Kreatinin/eGFR, Glukose/Ketone, Calcium, Leberwerte/Lipase je nach Kontext",
      "EKG bei Risikoprofil, Alter, Thoraxbeschwerden oder atypischem ACS-Verdacht"
    ],
    tags: [
      "Übelkeit",
      "Erbrechen",
      "DKA",
      "Urämie",
      "Hyperkalzämie",
      "Hyponatriämie",
      "ACS",
      "Medikamente"
    ],
    sources: [
      {
        title: "BMJ Best Practice: Assessment of nausea and vomiting in adults",
        url: "https://bestpractice.bmj.com/topics/en-gb/631",
        type: "review"
      },
      {
        title: "RACGP: Nausea and vomiting in adults",
        url: "https://www.racgp.org.au/getattachment/4476e8a7-5254-4205-a118-a009f5b52bf2/attachment.aspx",
        type: "review"
      }
    ]
  },
  {
    id: "palpitationen-tachykardie",
    title: "Palpitationen / Tachykardie",
    kind: "symptom",
    synonyms: [
      "Palpitationen",
      "Herzrasen",
      "Tachykardie",
      "Herzstolpern",
      "Arrhythmie",
      "Pulsrasen",
      "unregelmäßiger Puls"
    ],
    shortDescription:
      "Häufig Arrhythmie, Extrasystolie, Angst/Panik, Substanzen oder systemischer Stress; endokrin besonders Hyperthyreose und Phäochromozytom mitdenken.",
    redFlags: [
      "Synkope oder Präsynkope",
      "Thoraxschmerz",
      "Dyspnoe",
      "hämodynamische Instabilität",
      "bekannte strukturelle Herzerkrankung",
      "familiärer plötzlicher Herztod",
      "anhaltende Tachykardie"
    ],
    commonCauseIds: [
      "vorhofflimmern-vorhofflattern",
      "extrasystolie",
      "angststoerung-panikattacken",
      "hyperthyreose",
      "stimulanzien-koffein-medikamente"
    ],
    importantCauseIds: [
      "supraventrikulaere-tachykardie",
      "ventrikulaere-tachykardie",
      "akutes-koronarsyndrom",
      "anaemie",
      "lungenembolie"
    ],
    rareButImportantCauseIds: [
      "phaeochromozytom-paragangliom",
      "long-qt-syndrom",
      "brugada-syndrom",
      "myokarditis"
    ],
    piavCategories: [
      "vaskulaer-kardiovaskulaer",
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "psychosomatisch-psychiatrisch",
      "angeboren",
      "infektion"
    ],
    specialties: [
      "kardiologie",
      "endokrinologie",
      "allgemeinmedizin",
      "innere-medizin",
      "psychiatrie"
    ],
    suggestedBasicWorkup: [
      "EKG möglichst während Beschwerden",
      "Pulscharakter, Beginn/Ende, Trigger, Synkope, Familienanamnese",
      "Medikamente/Substanzen: Koffein, Stimulanzien, Schilddrüsenhormon, Sympathomimetika",
      "TSH, Blutbild, Elektrolyte, Kreatinin",
      "Langzeit-EKG/Event-Recorder je nach Häufigkeit"
    ],
    tags: [
      "Palpitationen",
      "Herzrasen",
      "Vorhofflimmern",
      "Hyperthyreose",
      "Panikattacke",
      "Phäochromozytom",
      "Arrhythmie"
    ],
    sources: [
      {
        title: "PMC: Approach to palpitations in primary care",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11321539/",
        type: "review"
      },
      {
        title: "MSD Manual Professional: Palpitations",
        url: "https://www.msdmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/palpitations",
        type: "manual"
      },
      {
        title: "AAFP: Diagnostic Approach to Palpitations",
        url: "https://www.aafp.org/pubs/afp/issues/2005/0215/p743.html",
        type: "review"
      }
    ]
  },
  {
    id: "polyurie-polydipsie",
    title: "Polyurie / Polydipsie",
    kind: "symptom",
    synonyms: [
      "Polyurie",
      "Polydipsie",
      "viel Durst",
      "viel Wasserlassen",
      "Nykturie",
      "Diabetes insipidus",
      "AVP-D",
      "AVP-R",
      "primäre Polydipsie"
    ],
    shortDescription:
      "Klassisch bei Diabetes mellitus, aber auch AVP-Mangel/Diabetes insipidus, nephrogene Formen, primäre Polydipsie, Hyperkalzämie, Hypokaliämie, CKD und Medikamente beachten.",
    redFlags: [
      "Exsikkose",
      "Hyperglykämie mit Ketonen",
      "Bewusstseinsstörung",
      "Hypernatriämie",
      "schwere Hyponatriämie bei primärer Polydipsie",
      "rascher Beginn nach neurochirurgischem Eingriff oder Schädel-Hirn-Trauma"
    ],
    commonCauseIds: [
      "diabetes-mellitus-entgleisung",
      "diuretika",
      "primaere-polydipsie",
      "chronische-niereninsuffizienz",
      "hyperkalzaemie"
    ],
    importantCauseIds: [
      "avp-defizienz-zentraler-diabetes-insipidus",
      "nephrogener-diabetes-insipidus",
      "lithium-induzierter-diabetes-insipidus",
      "hypokaliaemie",
      "diabetes-mellitus-entgleisung"
    ],
    rareButImportantCauseIds: [
      "hypophysen-hypothalamus-laesion",
      "sarkoidose-hypophyse",
      "langerhanszell-histiozytose",
      "familiaerer-diabetes-insipidus"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "psychosomatisch-psychiatrisch",
      "trauma",
      "neoplastisch",
      "angeboren"
    ],
    specialties: [
      "endokrinologie",
      "diabetologie",
      "nephrologie",
      "innere-medizin",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "echte Polyurie quantifizieren: 24h-Urinmenge",
      "Glukose/HbA1c, Urinstatus/Glukosurie/Ketonurie",
      "Serum-Natrium, Kalium, Calcium, Kreatinin/eGFR",
      "Urin-Osmolalität und Serum-Osmolalität",
      "Medikamente: Diuretika, Lithium, SGLT2-Hemmer",
      "bei Verdacht auf AVP-Störung endokrinologische/nephrologische Spezialdiagnostik"
    ],
    tags: [
      "Polyurie",
      "Polydipsie",
      "Diabetes mellitus",
      "Diabetes insipidus",
      "AVP-D",
      "Lithium",
      "Hyperkalzämie",
      "Hypokaliämie"
    ],
    sources: [
      {
        title: "ScienceDirect: Diagnosis and differential diagnosis of diabetes insipidus",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S1521690X20300257",
        type: "review"
      },
      {
        title: "NCBI Bookshelf: Primary Polydipsia",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK562251/",
        type: "review"
      },
      {
        title: "MSD Manual Professional: Type 2 Diabetes Mellitus",
        url: "https://www.msdmanuals.com/professional/endocrine-and-metabolic-disorders/diabetes-mellitus-and-hypoglycemia/type-2-diabetes-mellitus",
        type: "manual"
      }
    ]
  },
  {
    id: "hyponatriaemie",
    title: "Hyponatriämie",
    kind: "labor",
    synonyms: [
      "Hyponatriämie",
      "Hyponatriaemie",
      "niedriges Natrium",
      "Natrium niedrig",
      "Na niedrig",
      "SIADH"
    ],
    shortDescription:
      "Häufige Elektrolytstörung. Entscheidend sind Schweregrad, Symptomatik, Akuität, Osmolalität und Volumenstatus.",
    redFlags: [
      "Krampfanfall",
      "Bewusstseinsstörung",
      "schwere akute Hyponatriämie",
      "Erbrechen, Kopfschmerz, Somnolenz",
      "Sturz/Delir bei älteren Patienten",
      "Nebennierenkrise"
    ],
    commonCauseIds: [
      "thiazid-induzierte-hyponatriaemie",
      "siadh",
      "herzinsuffizienz",
      "leberzirrhose-portalhypertension",
      "primaere-polydipsie"
    ],
    importantCauseIds: [
      "nebenniereninsuffizienz",
      "hypothyreose",
      "niereninsuffizienz-uraemie",
      "atemwegsinfekt-pneumonie",
      "malignom-siadh"
    ],
    rareButImportantCauseIds: [
      "zns-erkrankung-siadh",
      "cerebral-salt-wasting",
      "mdma-intoxikation",
      "hypophyseninsuffizienz"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "neoplastisch",
      "infektion",
      "vaskulaer-kardiovaskulaer",
      "psychosomatisch-psychiatrisch"
    ],
    specialties: [
      "innere-medizin",
      "endokrinologie",
      "nephrologie",
      "kardiologie",
      "onkologie",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "Symptome und Akuität klären",
      "Serum-Osmolalität, Urin-Osmolalität, Urin-Natrium",
      "Volumenstatus prüfen",
      "Medikamente: Thiazide, SSRI, Antiepileptika, Desmopressin",
      "TSH und Morgen-Cortisol/ACTH je nach Kontext",
      "Infekt-, pulmonale, ZNS- und Tumorhinweise prüfen"
    ],
    tags: [
      "Hyponatriämie",
      "SIADH",
      "Thiazid",
      "Nebenniereninsuffizienz",
      "Hypothyreose",
      "Herzinsuffizienz",
      "Polydipsie"
    ],
    sources: [
      {
        title: "NCBI Bookshelf: SIADH",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK507777/",
        type: "review"
      },
      {
        title: "Endocrine Reviews: Syndrome of Inappropriate Antidiuresis",
        url: "https://academic.oup.com/edrv/article/44/5/819/7090475",
        type: "review"
      },
      {
        title: "RACGP: The suspect - SIADH",
        url: "https://www.racgp.org.au/afp/2017/september/the-suspect-siadh",
        type: "review"
      }
    ]
  },
  {
    id: "hyperkalzaemie",
    title: "Hyperkalzämie",
    kind: "labor",
    synonyms: [
      "Hyperkalzämie",
      "Hyperkalzaemie",
      "Calcium hoch",
      "Kalzium hoch",
      "Ca hoch",
      "erhöhtes Calcium",
      "erhöhtes Kalzium"
    ],
    shortDescription:
      "Häufig primärer Hyperparathyreoidismus oder Malignität. Medikamentöse, granulomatöse, endokrine und immobilisationsbedingte Ursachen mitdenken.",
    redFlags: [
      "Bewusstseinsstörung",
      "Exsikkose",
      "akutes Nierenversagen",
      "Herzrhythmusstörung",
      "stark erhöhtes Calcium",
      "Hyperkalzämie plus Gewichtsverlust oder B-Symptomatik"
    ],
    commonCauseIds: [
      "primaerer-hyperparathyreoidismus",
      "malignomassoziierte-hyperkalzaemie",
      "thiazid-lithium-hyperkalzaemie",
      "vitamin-d-intoxikation",
      "chronische-niereninsuffizienz-mineralstoerung"
    ],
    importantCauseIds: [
      "multiples-myelom",
      "sarkoidose-granulomatoese-erkrankung",
      "immobilisation",
      "hyperthyreose",
      "nebenniereninsuffizienz"
    ],
    rareButImportantCauseIds: [
      "familiaere-hypokalziurische-hyperkalzaemie",
      "tertiaerer-hyperparathyreoidismus",
      "milch-alkali-syndrom"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "neoplastisch",
      "toxisch-medikamentoes",
      "autoimmun",
      "angeboren"
    ],
    specialties: [
      "endokrinologie",
      "nephrologie",
      "onkologie",
      "innere-medizin",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "albuminkorrigiertes Calcium oder ionisiertes Calcium prüfen",
      "PTH zur PTH-abhängigen vs. PTH-unabhängigen Einordnung",
      "Kreatinin/eGFR, Phosphat, Vitamin D",
      "Medikamente: Thiazide, Lithium, Calcium/Vitamin-D-Präparate",
      "bei supprimiertem PTH: Malignität, Myelom, granulomatöse Erkrankungen prüfen"
    ],
    tags: [
      "Hyperkalzämie",
      "Hyperparathyreoidismus",
      "Malignom",
      "Myelom",
      "Lithium",
      "Thiazid",
      "Vitamin D",
      "Sarkoidose"
    ],
    sources: [
      {
        title: "NCBI Bookshelf: Primary Hyperparathyroidism",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK441895/",
        type: "review"
      },
      {
        title: "AAFP: Hyperparathyroidism",
        url: "https://www.aafp.org/pubs/afp/issues/2004/0115/p333.html",
        type: "review"
      },
      {
        title: "RACGP: Primary hyperparathyroidism and familial hypocalciuric hypercalcaemia",
        url: "https://www.racgp.org.au/getattachment/de0168ce-b2bf-47c2-9876-397d75272377/attachment.aspx",
        type: "review"
      }
    ]
  },
  {
    id: "muedigkeit-leistungsknick",
    title: "Müdigkeit / Leistungsknick",
    kind: "symptom",
    synonyms: [
      "Müdigkeit",
      "Muedigkeit",
      "Fatigue",
      "Leistungsknick",
      "Erschöpfung",
      "Antriebslosigkeit",
      "Schwäche"
    ],
    shortDescription:
      "Sehr häufig und unspezifisch. Häufig Lebensstil, Schlaf, Depression, Infekte, Anämie, Medikamente; internistisch wichtig sind endokrine, renale, kardiale, pulmonale, maligne und entzündliche Ursachen.",
    redFlags: [
      "B-Symptomatik",
      "neue Anämie",
      "Synkope",
      "Dyspnoe oder Thoraxschmerz",
      "neurologische Defizite",
      "Hypotonie/Hyperpigmentierung",
      "schwere Depression oder Suizidalität"
    ],
    commonCauseIds: [
      "schlafmangel-schlafstoerung",
      "depression",
      "anaemie-eisenmangel",
      "hypothyreose",
      "arzneimittelnebenwirkung"
    ],
    importantCauseIds: [
      "herzinsuffizienz",
      "chronische-niereninsuffizienz",
      "diabetes-mellitus-entgleisung",
      "malignom-unklarer-primaertumor",
      "chronische-infektion"
    ],
    rareButImportantCauseIds: [
      "nebenniereninsuffizienz",
      "hypophyseninsuffizienz",
      "myasthenia-gravis",
      "haemochromatose",
      "zoeliakie"
    ],
    piavCategories: [
      "psychosomatisch-psychiatrisch",
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "neoplastisch",
      "infektion",
      "autoimmun",
      "vaskulaer-kardiovaskulaer"
    ],
    specialties: [
      "allgemeinmedizin",
      "innere-medizin",
      "endokrinologie",
      "kardiologie",
      "nephrologie",
      "psychiatrie",
      "onkologie"
    ],
    suggestedBasicWorkup: [
      "Zeitverlauf, Schlaf, Belastung, Stimmung, Medikamente, Substanzen",
      "BB, Ferritin/Transferrinsättigung je nach Kontext, CRP/BSG",
      "TSH, Glukose/HbA1c, Kreatinin/eGFR, Leberwerte, Elektrolyte, Calcium",
      "bei Red Flags gezielte weiterführende Diagnostik",
      "Depression/Angst/Suizidalität aktiv ansprechen"
    ],
    tags: [
      "Müdigkeit",
      "Fatigue",
      "Hypothyreose",
      "Anämie",
      "Depression",
      "CKD",
      "Herzinsuffizienz",
      "Nebenniereninsuffizienz"
    ],
    sources: [
      {
        title: "PMC: Fatigue as the Chief Complaint",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8579431/",
        type: "review"
      },
      {
        title: "AAFP: Fatigue: An Overview",
        url: "https://www.aafp.org/pubs/afp/issues/2008/1115/p1173.html",
        type: "review"
      },
      {
        title: "NICE CKS: Hypothyroidism",
        url: "https://cks.nice.org.uk/topics/hypothyroidism/",
        type: "leitlinie"
      }
    ]
  },
  {
    id: "brustschmerz",
    title: "Thoraxschmerz / Brustschmerz",
    kind: "symptom",
    synonyms: [
      "Thoraxschmerz",
      "Brustschmerz",
      "Brustdruck",
      "retrosternaler Schmerz",
      "pektanginöse Beschwerden",
      "Angina pectoris"
    ],
    shortDescription:
      "Zunächst gefährliche Ursachen priorisieren: ACS, Lungenembolie, Aortendissektion, Pneumothorax, Perikarditis/Myokarditis, Ösophagusruptur.",
    redFlags: [
      "Druck/Enge mit Ausstrahlung, Dyspnoe, Kaltschweißigkeit",
      "Synkope",
      "Hypotonie oder Schock",
      "neurologisches Defizit",
      "reissender Schmerz in Rücken",
      "akute Dyspnoe oder Hypoxie",
      "Fieber plus Thoraxschmerz"
    ],
    commonCauseIds: [
      "muskuloskelettaler-thoraxschmerz",
      "gastrooesophagealer-reflux",
      "angina-pectoris-khk",
      "angststoerung-panikattacken",
      "atemwegsinfekt-pneumonie"
    ],
    importantCauseIds: [
      "akutes-koronarsyndrom",
      "lungenembolie",
      "aortendissektion",
      "pneumothorax",
      "perikarditis-myokarditis"
    ],
    rareButImportantCauseIds: [
      "oesophagusruptur",
      "tamponade",
      "spontane-koronararteriendissektion"
    ],
    piavCategories: [
      "vaskulaer-kardiovaskulaer",
      "infektion",
      "trauma",
      "psychosomatisch-psychiatrisch",
      "toxisch-medikamentoes"
    ],
    specialties: [
      "kardiologie",
      "pneumologie",
      "gastroenterologie",
      "innere-medizin",
      "allgemeinmedizin"
    ],
    suggestedBasicWorkup: [
      "Vitalparameter und klinische Instabilität priorisieren",
      "EKG und Troponin bei ACS-Verdacht",
      "D-Dimer/CTPA nur nach klinischer Wahrscheinlichkeit",
      "Röntgen/POCUS je nach Verdacht",
      "nicht vorschnell auf muskuloskelettal oder psychosomatisch festlegen"
    ],
    tags: [
      "Thoraxschmerz",
      "Brustschmerz",
      "ACS",
      "Lungenembolie",
      "Aortendissektion",
      "Pneumothorax",
      "Panik"
    ],
    sources: [
      { title: "ESC Guidelines", url: "https://www.escardio.org/Guidelines", type: "leitlinie" },
      {
        title: "MSD Manual Professional",
        url: "https://www.msdmanuals.com/professional",
        type: "manual"
      }
    ]
  },
  {
    id: "nierenschwaeche-egfr-abfall",
    title: "eGFR-Abfall / erhöhte Kreatininwerte",
    kind: "labor",
    synonyms: [
      "eGFR niedrig",
      "Kreatinin erhöht",
      "Niereninsuffizienz",
      "Nierenschwäche",
      "AKI",
      "CKD",
      "akutes Nierenversagen",
      "chronische Nierenkrankheit"
    ],
    shortDescription:
      "Wichtig ist die Trennung AKI vs. CKD, prärenal/intrarenal/postrenal sowie Begleitbefunde wie Proteinurie, Hämaturie, Hypertonie und Medikamente.",
    redFlags: [
      "rasch fallende eGFR",
      "Oligurie/Anurie",
      "Hyperkaliämie",
      "Azidose",
      "Überwässerung/Lungenödem",
      "Proteinurie plus Hämaturie",
      "postrenaler Verdacht"
    ],
    commonCauseIds: [
      "chronische-niereninsuffizienz",
      "diabetes-mellitus-entgleisung",
      "hypertensive-nephropathie",
      "praerenales-aki-exsikkose",
      "medikamentoes-nephrotoxisch"
    ],
    importantCauseIds: [
      "akutes-nierenversagen",
      "postrenale-obstruktion",
      "glomerulonephritis",
      "kardiorenales-syndrom",
      "rhabdomyolyse"
    ],
    rareButImportantCauseIds: [
      "anca-vaskulitis",
      "anti-gbm-erkrankung",
      "thrombotische-mikroangiopathie",
      "myelomniere"
    ],
    piavCategories: [
      "endokrin-metabolisch",
      "toxisch-medikamentoes",
      "autoimmun",
      "vaskulaer-kardiovaskulaer",
      "neoplastisch",
      "infektion",
      "angeboren"
    ],
    specialties: [
      "nephrologie",
      "diabetologie",
      "kardiologie",
      "innere-medizin",
      "allgemeinmedizin",
      "rheumatologie"
    ],
    suggestedBasicWorkup: [
      "Vorwerte prüfen: AKI vs. CKD",
      "Medikamente: NSAR, ACE-Hemmer/ARB-Kontext, Diuretika, SGLT2, Kontrastmittel, Antibiotika",
      "Volumenstatus",
      "Urinstatus/Sediment, ACR/PCR",
      "Elektrolyte, Säure-Basen-Status bei schwerem Verlauf",
      "Sonographie Nieren/Harnwege bei postrenalem Verdacht"
    ],
    tags: [
      "eGFR",
      "Kreatinin",
      "AKI",
      "CKD",
      "Proteinurie",
      "Hämaturie",
      "Hyperkaliämie",
      "postrenal"
    ],
    sources: [
      {
        title: "NICE NG203: Chronic kidney disease",
        url: "https://www.nice.org.uk/guidance/ng203",
        type: "leitlinie"
      },
      {
        title: "NCBI Bookshelf: Chronic Kidney Disease",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK535404/",
        type: "review"
      },
      {
        title: "KDIGO 2024 CKD Guideline",
        url: "https://www.kidney-international.org/article/S0085-2538(23)00766-4/fulltext",
        type: "leitlinie"
      }
    ]
  }
];
