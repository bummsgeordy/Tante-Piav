# tante-piav

Statische, schnelle und uebersichtliche Web-App als medizinische Gedankenstuetze fuer Differentialdiagnosen anhand des Akronyms **TANTE PIAV**.

Die App richtet sich an Aerztinnen, Aerzte und medizinisch Lernende. Sie ist kein Lehrbuch, sondern eine klinisch nutzbare Denkhilfe: Ursachen werden entlang der aetiologischen Hauptstruktur sortiert, koennen lokal durchsucht und nach Kategorie, Fachgebiet, Haeufigkeit, Dringlichkeit und Red-Flag-Relevanz gefiltert werden.

## Wuerdigung und Attribution

Das Akronym TANTE PIAV wurde durch Dres. Ingo Krenz und Andreas Klinge im Podcast Denkfabrik Medizin bekannt gemacht und didaktisch ausgearbeitet. Dieses Projekt versteht sich als ergaenzende, offene Gedankenstuetze und als Dank an die Kollegen und ihren Podcast. Es ersetzt keine aerztliche Beurteilung, keine Leitlinie und keine individuelle Diagnostik- oder Therapieentscheidung.

- Podcast: [Denkfabrik Medizin](https://denkfabrikmedizin.de/)
- Einordnung: unabhaengiges, nicht-kommerzielles Open-Source-Projekt
- Der Begriff TANTE PIAV wird nicht als eigene Erfindung dieses Projekts dargestellt.

## Disclaimer

Diese App ist eine Gedankenstuetze.

- Sie ist kein Medizinprodukt.
- Sie ersetzt keine aerztliche Beurteilung.
- Sie ersetzt keine Leitlinien.
- Sie gibt keine individuelle Diagnostik- oder Therapieempfehlung.
- Inhalte koennen unvollstaendig oder veraltet sein und muessen fachlich geprueft werden.
- Bei Notfallsymptomen ist unmittelbare medizinische Abklaerung erforderlich.

## Funktionen im MVP

- 9 TANTE-PIAV-Kategorien
- mindestens 45 strukturierte Ursachen
- lokale Suche mit Fuse.js
- Filter nach Kategorie, Fachgebiet, Haeufigkeit, Dringlichkeit und Red Flags
- Cause Cards mit Kurzbeschreibung, Fachgebieten, Red Flags, Tags und Quellen
- Detailansicht fuer jede Ursache
- Markdown-Export fuer einzelne Ursachen und Kategorien
- sichtbare Attribution und Disclaimer
- GitHub Pages Deployment per GitHub Actions
- keine Datenbank, kein Backend, keine externen API-Abhaengigkeiten zur Laufzeit

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

Danach die lokale Vite-Adresse im Browser oeffnen.

## Build

```bash
npm run build
```

Der Build erzeugt `dist/`. Dieser Ordner wird nicht versioniert, weil GitHub Pages aus GitHub Actions deployt.

## Deployment mit GitHub Pages

Das Deployment ist in `.github/workflows/deploy.yml` vorbereitet.

1. Repository zu GitHub pushen.
2. In GitHub unter `Settings > Pages` die Quelle `GitHub Actions` auswaehlen.
3. Auf `main` pushen.
4. Workflow `Deploy to GitHub Pages` pruefen.
5. Die veroeffentlichte Pages-URL oeffnen.

## Arbeiten mit GitHub Desktop

1. Repository in GitHub Desktop oeffnen
2. Aenderungen pruefen
3. aussagekraeftige Commit Message schreiben
4. Commit to main
5. Push origin
6. GitHub Actions pruefen
7. veroeffentlichte GitHub-Pages-Seite oeffnen

Empfohlene Commit Messages:

- `initial project scaffold`
- `add TANTE PIAV data model`
- `add search and filters`
- `add attribution and disclaimer`
- `add GitHub Pages deployment`
- `add roadmap`

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

`relatedSymptoms`, `tags` und `mdxSlug` sind bewusst vorbereitet, damit spaeter eine symptomorientierte Einstiegsebene und ausfuehrlichere MDX-Detailseiten ergaenzt werden koennen.

## Quellen

Quellen werden nur verlinkt. Es werden keine geschuetzten Inhalte aus Leitlinien, Handbuechern oder kommerziellen Quellen kopiert.

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

AMBOSS, UpToDate und andere geschuetzte Quellen sollen nicht als Datenquelle kopiert werden. Sie koennen hoechstens als nicht-verlinkte fachliche Orientierung fuer Autorinnen und Autoren dienen.

## Roadmap

### Phase 1: PWA-Modus / offline nutzbar

- Service Worker
- Web App Manifest
- Offline-Caching der statischen Inhalte
- Installierbarkeit auf Smartphone/Desktop
- Offline-Hinweis in der UI
- keine externen Laufzeit-Abhaengigkeiten, damit Offline-Modus sinnvoll funktioniert

### Phase 2: Red-Flags-Filter

- eigener Filter fuer Ursachen mit Red Flags
- Filter `Notfall / zeitkritisch`
- visuelle Hervorhebung gefaehrlicher Konstellationen
- optional eigene Red-Flags-Uebersichtsseite
- Moeglichkeit, Red Flags fachgebietsuebergreifend zu durchsuchen

### Phase 3: Export als PDF/Markdown

- Export einzelner Kategorien als Markdown
- Export einzelner Ursachen als Markdown
- Export der aktuellen Such-/Filteransicht als Markdown
- spaeter PDF-Export ueber Browser-Print oder Library
- saubere Druckansicht per CSS
- moeglichst keine schwere PDF-Library im MVP

### Phase 4: Markdown/MDX fuer ausfuehrlichere Detailseiten

- Inhalte aus MDX-Dateien laden
- kurze Cause Cards bleiben datenbasiert
- ausfuehrliche Hintergrundseiten als MDX
- Quellenabschnitt am Ende jeder Detailseite
- Beitragssystem fuer Pull Requests erleichtern
- `mdxSlug` im Datenmodell bereits vorbereitet

## Contributions

Beitraege sind willkommen, sollten aber medizinisch sorgfaeltig und quellenbasiert erfolgen.

- Medizinische Inhalte fachlich pruefen lassen.
- Quellenlinks angeben.
- Keine Inhalte aus geschuetzten Quellen kopieren.
- Red Flags klar und knapp benennen.
- Psychosomatisch/psychiatrisch als gleichwertige Perspektive behandeln, nicht als Restekategorie.
- Daten in `src/data/` pflegen, UI-Komponenten nicht mit medizinischen Inhalten fuellen.

## Lizenz

MIT License. Siehe `LICENSE`.
