import type { RoadmapPhase } from "../types/medical";

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "PWA-Modus / offline nutzbar",
    completed: true,
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
    title: "Mehr Symptome, Befunde und Erkrankungen einpflegen",
    items: [
      "Symptomorientierte Einstiegsebene ergänzen",
      "Weitere häufige Beratungsanlässe und Leitsymptome einpflegen",
      "Mehr krankheits- und befundbezogene Suchbegriffe ergänzen",
      "Synonyme, Umgangssprache und deutsche Schreibvarianten ausbauen",
      "Medizinische Inhalte quellenbasiert fachlich prüfen"
    ]
  },
  {
    phase: "Phase 3",
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
    phase: "Phase 4",
    title: "Export als PDF/Markdown",
    items: [
      "Export einzelner Kategorien als Markdown",
      "Export einzelner Ursachen als Markdown",
      "Export der aktuellen Such-/Filteransicht als Markdown",
      "PDF-Export über Browser-Print oder Library",
      "Saubere Druckansicht per CSS"
    ]
  }
];
