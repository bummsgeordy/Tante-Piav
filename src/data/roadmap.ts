import type { RoadmapPhase } from "../types/medical";

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "PWA-Modus / offline nutzbar",
    items: [
      "Service Worker",
      "Web App Manifest",
      "Offline-Caching der statischen Inhalte",
      "Installierbarkeit auf Smartphone/Desktop",
      "Offline-Hinweis in der UI",
      "Keine externen Laufzeit-Abhaengigkeiten"
    ]
  },
  {
    phase: "Phase 2",
    title: "Red-Flags-Filter",
    items: [
      "Eigener Filter fuer Ursachen mit Red Flags",
      "Filter Notfall / zeitkritisch",
      "Visuelle Hervorhebung gefaehrlicher Konstellationen",
      "Optionale Red-Flags-Uebersichtsseite",
      "Fachgebietsuebergreifende Red-Flag-Suche"
    ]
  },
  {
    phase: "Phase 3",
    title: "Export als PDF/Markdown",
    items: [
      "Export einzelner Kategorien als Markdown",
      "Export einzelner Ursachen als Markdown",
      "Export der aktuellen Such-/Filteransicht als Markdown",
      "PDF-Export ueber Browser-Print oder Library",
      "Saubere Druckansicht per CSS"
    ]
  },
  {
    phase: "Phase 4",
    title: "Markdown/MDX fuer ausfuehrlichere Detailseiten",
    items: [
      "Inhalte aus MDX-Dateien laden",
      "Kurze Cause Cards bleiben datenbasiert",
      "Ausfuehrliche Hintergrundseiten als MDX",
      "Quellenabschnitt am Ende jeder Detailseite",
      "Beitragssystem fuer Pull Requests erleichtern"
    ]
  }
];
