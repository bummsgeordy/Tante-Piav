import type { Category } from "../types/medical";

export const categories: Category[] = [
  {
    id: "trauma",
    acronym: "T",
    title: "Trauma",
    subtitle: "Mechanische, thermische oder iatrogene Schaeden",
    description:
      "Akute oder wiederholte Einwirkungen von aussen, inklusive iatrogener und nicht-akzidenteller Verletzungen."
  },
  {
    id: "autoimmun",
    acronym: "A",
    title: "Autoimmun",
    subtitle: "Fehlgeleitete Immunreaktionen",
    description:
      "Organbezogene und systemische Autoimmunerkrankungen als Erklaerung fuer Beschwerden, Entzuendung und Funktionsstoerungen."
  },
  {
    id: "neoplastisch",
    acronym: "N",
    title: "Neoplastisch",
    subtitle: "Tumorerkrankungen und paraneoplastische Muster",
    description:
      "Solide und haematologische Neoplasien sowie tumorassoziierte systemische Zeichen."
  },
  {
    id: "toxisch-medikamentoes",
    acronym: "T",
    title: "Toxisch-medikamentoes",
    subtitle: "Substanzen, Medikamente, Interaktionen",
    description:
      "Nebenwirkungen, Intoxikationen, Interaktionen und Umwelt- oder Berufstoxine als haeufig uebersehene Ursachen."
  },
  {
    id: "endokrin-metabolisch",
    acronym: "E",
    title: "Endokrin-metabolisch",
    subtitle: "Hormone, Stoffwechsel, Elektrolyte",
    description:
      "Diabetes, Schilddruese, Elektrolyte, Nierenfunktion, Ernaehrung und weitere metabolische Ursachen."
  },
  {
    id: "psychosomatisch-psychiatrisch",
    acronym: "P",
    title: "Psychosomatisch/psychiatrisch",
    subtitle: "Gleichwertige diagnostische Perspektive",
    description:
      "Psychische und psychosomatische Stoerungen als eigenstaendige Perspektive, ohne somatische Red Flags zu uebersehen."
  },
  {
    id: "infektion",
    acronym: "I",
    title: "Infektion",
    subtitle: "Lokal, systemisch, akut oder chronisch",
    description:
      "Haeufige Infektionen, invasive Verlaeufe, Reise- und opportunistische Infektionen strukturiert mitdenken."
  },
  {
    id: "angeboren",
    acronym: "A",
    title: "Angeboren",
    subtitle: "Genetisch, familiaer, entwicklungsbedingt",
    description:
      "Angeborene und genetische Ursachen, die auch im Erwachsenenalter klinisch relevant werden koennen."
  },
  {
    id: "vaskulaer-kardiovaskulaer",
    acronym: "V",
    title: "Vaskulaer/kardiovaskulaer",
    subtitle: "Ischaemie, Embolie, Herz-Kreislauf",
    description:
      "Akute und chronische vaskulaere sowie kardiale Ursachen mit besonderem Blick auf zeitkritische Muster."
  }
];
