# tante-piav

Statische, schnelle und übersichtliche Web-App als medizinische Gedankenstütze für Differentialdiagnosen anhand des Akronyms **TANTE PIAV**.

Die App richtet sich an Ärztinnen, Ärzte und medizinisch Lernende. Sie ist kein Lehrbuch, sondern eine klinisch nutzbare Denkhilfe: Ursachen werden entlang der ätiologischen Hauptstruktur sortiert, können lokal durchsucht und nach Fachgebiet, Häufigkeit und Dringlichkeit gefiltert werden. Zusätzlich gibt es eine symptom- und befundorientierte Einstiegsebene.

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
- `src/data/additionalCauses.ts`: ergänzende Causes und Erweiterungen bestehender Causes
- `src/data/symptoms.ts`: symptom-, befund- und labororientierte Einstiegsebene
- `src/data/sourceRegistry.ts`: zentrale, wiederverwendbare Quellenlinks
- `src/data/specialties.ts`: Fachgebietsfilter
- `src/data/roadmap.ts`: Roadmap-Daten

Zentrale Typen liegen in `src/types/medical.ts` und `src/types/symptom.ts`.

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

`relatedSymptoms`, `tags`, `searchBoostTerms`, `symptomEntryIds`, `practicalNotes` und `mdxSlug` sind bewusst vorbereitet, damit Ursachen datenbasiert suchbar bleiben und später ausführlichere MDX-Detailseiten ergänzt werden können.

### Symptomorientierte Datenebene

`SymptomEntry` beschreibt häufige Symptome, Befunde, Laborwerte und Vitalparameter. Ein Eintrag enthält Synonyme, Red Flags, Basisabklärung, verknüpfte TANTE-PIAV-Kategorien und drei Ursache-Gruppen:

- häufige Ursachen
- wichtige Ursachen
- selten, aber nicht verpassen

Die Suche durchsucht Causes und SymptomEntries gemeinsam. Umlaute und einfache Schreibvarianten werden über Normalisierung, Synonymgruppen, Tags und `searchBoostTerms` abgefangen, z. B. `Hypertonie / hoher Blutdruck`, `Dyspnoe / Luftnot / Atemnot`, `Ödeme / Oedeme / Wassereinlagerung`, `Übelkeit / Uebelkeit / Nausea`.

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

Medizinische Aussagen in `src/data/` sind knapp gehalten und müssen vor produktiver Nutzung fachlich geprüft, aktualisiert und quellenbasiert erweitert werden.

## Roadmap

### Phase 1: PWA-Modus / offline nutzbar ✅

- Service Worker
- Web App Manifest
- Offline-Caching der statischen Inhalte
- Installierbarkeit auf Smartphone/Desktop
- Offline-Hinweis in der UI
- keine externen Laufzeit-Abhängigkeiten, damit Offline-Modus sinnvoll funktioniert

### Phase 2: Mehr Symptome, Befunde und Erkrankungen einpflegen

- erste symptom- und befundorientierte Datenebene ist angelegt
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

## Arbeiten mit GitHub Desktop

1. Repository in GitHub Desktop öffnen
2. Änderungen prüfen
3. aussagekräftige Commit Message schreiben
4. Commit to main
5. Push origin
6. GitHub Actions prüfen
7. veröffentlichte GitHub-Pages-Seite öffnen

Empfohlene Commit Messages:

- `initial project scaffold`
- `add TANTE PIAV data model`
- `add search and filters`
- `add attribution and disclaimer`
- `add GitHub Pages deployment`
- `add roadmap`
- `add symptom and findings data layer`

## Lizenz

MIT License. Siehe `LICENSE`.
