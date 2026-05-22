import type { Category } from "../types/medical";

export const categories: Category[] = [
  {
    id: "trauma",
    acronym: "T",
    title: "Trauma",
    subtitle: "Mechanische, thermische oder iatrogene Schäden",
    description:
      "Akute oder wiederholte Einwirkungen von außen, inklusive iatrogener und nicht-akzidenteller Verletzungen."
  },
  {
    id: "autoimmun",
    acronym: "A",
    title: "Autoimmun",
    subtitle: "Fehlgeleitete Immunreaktionen",
    description:
      "Organbezogene und systemische Autoimmunerkrankungen als Erklärung für Beschwerden, Entzündung und Funktionsstörungen."
  },
  {
    id: "neoplastisch",
    acronym: "N",
    title: "Neoplastisch",
    subtitle: "Tumorerkrankungen und paraneoplastische Muster",
    description:
      "Solide und hämatologische Neoplasien sowie tumorassoziierte systemische Zeichen."
  },
  {
    id: "toxisch-medikamentoes",
    acronym: "T",
    title: "Toxisch-medikamentös",
    subtitle: "Substanzen, Medikamente, Interaktionen",
    description:
      "Nebenwirkungen, Intoxikationen, Interaktionen und Umwelt- oder Berufstoxine als häufig übersehene Ursachen."
  },
  {
    id: "endokrin-metabolisch",
    acronym: "E",
    title: "Endokrin-metabolisch",
    subtitle: "Hormone, Stoffwechsel, Elektrolyte",
    description:
      "Diabetes, Schilddrüse, Elektrolyte, Nierenfunktion, Ernährung und weitere metabolische Ursachen."
  },
  {
    id: "psychosomatisch-psychiatrisch",
    acronym: "P",
    title: "Psychosomatisch/psychiatrisch",
    subtitle: "Gleichwertige diagnostische Perspektive",
    description:
      "Psychische und psychosomatische Störungen als eigenständige Perspektive, ohne somatische Red Flags zu übersehen."
  },
  {
    id: "infektion",
    acronym: "I",
    title: "Infektion",
    subtitle: "Lokal, systemisch, akut oder chronisch",
    description:
      "Häufige Infektionen, invasive Verläufe, Reise- und opportunistische Infektionen strukturiert mitdenken."
  },
  {
    id: "angeboren",
    acronym: "A",
    title: "Angeboren",
    subtitle: "Genetisch, familiär, entwicklungsbedingt",
    description:
      "Angeborene und genetische Ursachen, die auch im Erwachsenenalter klinisch relevant werden können."
  },
  {
    id: "vaskulaer-kardiovaskulaer",
    acronym: "V",
    title: "Vaskulär/kardiovaskulär",
    subtitle: "Ischämie, Embolie, Herz-Kreislauf",
    description:
      "Akute und chronische vaskuläre sowie kardiale Ursachen mit besonderem Blick auf zeitkritische Muster."
  }
];
