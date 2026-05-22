# tante-piav

Statische, schnelle und übersichtliche Web-App als medizinische Gedankenstütze für Differentialdiagnosen anhand des Akronyms **TANTE PIAV**.

Die App richtet sich an Ärztinnen, Ärzte und medizinisch Lernende. Sie ist kein Lehrbuch, sondern eine klinisch nutzbare Denkhilfe: Ursachen werden entlang der ätiologischen Hauptstruktur sortiert, können lokal durchsucht und nach Kategorie, Fachgebiet, Häufigkeit, Dringlichkeit und Red-Flag-Relevanz gefiltert werden.

## Würdigung und Attribution

Das Akronym TANTE PIAV wurde durch Dres. Ingo Krenz und Andreas Klinge im Podcast Denkfabrik Medizin bekannt gemacht und didaktisch ausgearbeitet. Dieses Projekt versteht sich als ergänzende, offene Gedankenstütze und als Dank an die Kollegen und ihren Podcast. Es ersetzt keine ärztliche Beurteilung, keine Leitlinie und keine individuelle Diagnostik- oder Therapieentscheidung.

- Podcast: [Denkfabrik Medizin](https://denkfabrikmedizin.de/)
- Einordnung: unabhängiges, nicht-kommerzielles Open-Source-Projekt
- Der Begriff TANTE PIAV wird nicht als eigene Erfindung dieses Projekts dargestellt.

## Disclaimer

Diese App ist eine Gedankenstütze.

- Sie ist kein Medizinprodukt.
- Sie ersetzt keine ärztliche Beurteilung.
- Sie ersetzt keine Leitlinien.
- Sie gibt keine individuelle Diagnostik- oder Therapieempfehlung.
- Inhalte können unvollständig oder veraltet sein und müssen fachlich geprüft werden.
- Bei Notfallsymptomen ist unmittelbare medizinische Abklärung erforderlich.

## Technologie

- React
- Vite
- TypeScript
- Tailwind CSS
- Fuse.js
- lucide-react
- GitHub Actions / GitHub Pages

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Danach die lokale Vite-Adresse im Browser öffnen.

## Build

```bash
npm run build
```

Der Build erzeugt `dist/`. Dieser Ordner wird nicht versioniert, weil GitHub Pages aus GitHub Actions deployt.

## PWA und Offline-Nutzung

Phase 1 der Roadmap ist umgesetzt: Die App enthält ein Web App Manifest,
PWA-Icons, einen Service Worker und einen kompakten Offline-Hinweis in der UI.
Nach dem ersten erfolgreichen Online-Laden bleiben die gespeicherten statischen
Inhalte auch offline nutzbar. Die Offline-Funktion ersetzt keine fachliche
Aktualitätsprüfung der medizinischen Inhalte.

## Datenmodell

Medizinische Inhalte liegen getrennt vom UI-Code in `src/data/`.

- `src/data/categories.ts`: TANTE-PIAV-Hauptstruktur
- `src/data/causes.ts`: strukturierte Ursachen
- `src/data/specialties.ts`: Fachgebietsfilter
- `src/data/roadmap.ts`: Roadmap-Daten

Zentrale Typen liegen in `src/types/medical.ts`.

```ts
export type PiavCategory =
  | "trauma"
  | "autoimmun"
  | "neoplastisch"
  | "toxisch-medikamentoes"
  | "endokrin-metabolisch"
  | "psychosomatisch-psychiatrisch"
  | "infektion"
  | "angeboren"
  | "vaskulaer-kardiovaskulaer";

export type Frequency = "haeufig" | "relevant" | "selten";
export type Urgency = "ambulant" | "zeitnah" | "notfall";
```

`relatedSymptoms`, `tags` und `mdxSlug` sind bewusst vorbereitet, damit später eine symptomorientierte Einstiegsebene und ausführlichere MDX-Detailseiten ergänzt werden können.

## Quellen

Quellen werden nur verlinkt. Es werden keine geschützten Inhalte aus Leitlinien, Handbüchern oder kommerziellen Quellen kopiert.

Geeignete offene Quellen und Orientierungen:

- [AWMF Leitlinienregister](https://register.awmf.org/)
- [NICE CKS](https://cks.nice.org.uk/)
- [MSD Manual Professional](https://www.msdmanuals.com/professional)
- [RKI](https://www.rki.de/)
- [WHO](https://www.who.int/)
- [ECDC](https://www.ecdc.europa.eu/)
- [ESC Guidelines](https://www.escardio.org/Guidelines)
- [ADA Standards of Care](https://diabetesjournals.org/care/issue)
- [Endocrine Society Guidelines](https://www.endocrine.org/clinical-practice-guidelines)
- [DDG](https://www.deutsche-diabetes-gesellschaft.de/)
- [DGE](https://www.endokrinologie.net/)
- [DGK](https://dgk.org/)
- [DGN](https://dgn.org/)

AMBOSS, UpToDate und andere geschützte Quellen sollen nicht als Datenquelle kopiert werden. Sie können höchstens als nicht-verlinkte fachliche Orientierung für Autorinnen und Autoren dienen.

## Roadmap

### Phase 1: PWA-Modus / offline nutzbar ✅

- Service Worker
- Web App Manifest
- Offline-Caching der statischen Inhalte
- Installierbarkeit auf Smartphone/Desktop
- Offline-Hinweis in der UI
- keine externen Laufzeit-Abhängigkeiten, damit Offline-Modus sinnvoll funktioniert

### Phase 2: Mehr Symptome, Befunde und Erkrankungen einpflegen

- symptomorientierte Einstiegsebene ergänzen
- weitere häufige Beratungsanlässe und Leitsymptome einpflegen
- mehr krankheits- und befundbezogene Suchbegriffe ergänzen
- Synonyme, Umgangssprache und deutsche Schreibvarianten ausbauen
- medizinische Inhalte quellenbasiert fachlich prüfen

### Phase 3: Red-Flags-Filter

- eigener Filter für Ursachen mit Red Flags
- Filter `Notfall / zeitkritisch`
- visuelle Hervorhebung gefährlicher Konstellationen
- optional eigene Red-Flags-Übersichtsseite
- Möglichkeit, Red Flags fachgebietsübergreifend zu durchsuchen

### Phase 4: Export als PDF/Markdown

- Export einzelner Kategorien als Markdown
- Export einzelner Ursachen als Markdown
- Export der aktuellen Such-/Filteransicht als Markdown
- später PDF-Export über Browser-Print oder Library
- saubere Druckansicht per CSS
- möglichst keine schwere PDF-Library im MVP

## Contributions

Beiträge sind willkommen, sollten aber medizinisch sorgfältig und quellenbasiert erfolgen.

- Medizinische Inhalte fachlich prüfen lassen.
- Quellenlinks angeben.
- Keine Inhalte aus geschützten Quellen kopieren.
- Red Flags klar und knapp benennen.
- Psychosomatisch/psychiatrisch als gleichwertige Perspektive behandeln, nicht als Restekategorie.
- Daten in `src/data/` pflegen, UI-Komponenten nicht mit medizinischen Inhalten füllen.

## Lizenz

MIT License. Siehe `LICENSE`.
