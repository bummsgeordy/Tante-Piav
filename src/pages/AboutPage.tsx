import { AttributionBox } from "../components/AttributionBox";
import { DisclaimerBox } from "../components/DisclaimerBox";

export function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-clinical-ink">Über das Projekt</h1>
        <p className="mt-4 text-lg leading-8 text-clinical-muted">
          tante-piav ist ein unabhängiges, nicht-kommerzielles
          Open-Source-Webprojekt für GitHub Pages. Es soll Ärztinnen, Ärzten
          und medizinisch Lernenden helfen, bei Beschwerden, Befunden und
          medizinischen Phänomenen typische Ursachen strukturiert mitzudenken.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        <AttributionBox />
        <DisclaimerBox />
      </div>

      <section className="mt-8 rounded-lg border border-clinical-line bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-clinical-ink">Respektvolle Einordnung</h2>
        <p className="mt-3 leading-7 text-clinical-muted">
          Der Begriff TANTE PIAV wird hier nicht als eigene Erfindung des
          Projekts dargestellt. Die Anwendung ist eine praktische, offene
          Ergänzung und Hommage an die didaktische Arbeit von Dres. Ingo Krenz
          und Andreas Klinge im Podcast Denkfabrik Medizin. Dieses Projekt ist
          unabhängig und nicht als offizielles Projekt, Auftrag oder Angebot des
          Podcasts gekennzeichnet. Logos oder geschützte Grafiken des Podcasts
          werden nicht verwendet.
        </p>
      </section>
    </main>
  );
}
