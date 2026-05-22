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
      "Keine externen Laufzeit-Abhängigkeiten"
    ]
  },
  {
    phase: "Phase 2",
    title: "Red-Flags-Filter",
    items: [
      "Eigener Filter für Ursachen mit Red Flags",
      "Filter Notfall / zeitkritisch",
      "Visuelle Hervorhebung gefährlicher Konstellationen",
      "Optionale Red-Flags-Übersichtsseite",
      "Fachgebietsübergreifende Red-Flag-Suche"
    ]
  },
  {
    phase: "Phase 3",
    title: "Export als PDF/Markdown",
    items: [
      "Export einzelner Kategorien als Markdown",
      "Export einzelner Ursachen als Markdown",
      "Export der aktuellen Such-/Filteransicht als Markdown",
      "PDF-Export über Browser-Print oder Library",
      "Saubere Druckansicht per CSS"
    ]
  },
  {
    phase: "Phase 4",
    title: "Markdown/MDX für ausführlichere Detailseiten",
    items: [
      "Inhalte aus MDX-Dateien laden",
      "Kurze Cause Cards bleiben datenbasiert",
      "Ausführliche Hintergrundseiten als MDX",
      "Quellenabschnitt am Ende jeder Detailseite",
      "Beitragssystem für Pull Requests erleichtern"
    ]
  }
];
