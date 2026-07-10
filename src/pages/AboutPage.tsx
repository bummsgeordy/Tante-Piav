import { AttributionBox } from "../components/AttributionBox";
import { DisclaimerBox } from "../components/DisclaimerBox";
import { CONTENT_VERSION, LAST_SOURCE_REVIEW } from "../data/contentReview";

export function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-clinical-ink">
          Über das Projekt
        </h1>
        <p className="mt-4 text-lg leading-8 text-clinical-muted">
          tante-piav ist ein unabhängiges, nicht-kommerzielles
          Open-Source-Webprojekt für GitHub Pages. Es soll Ärztinnen, Ärzten und
          medizinisch Lernenden helfen, bei Beschwerden, Befunden und
          medizinischen Phänomenen typische Ursachen strukturiert mitzudenken.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        <AttributionBox />
        <DisclaimerBox />
        <section className="rounded-lg border border-clinical-line bg-clinical-surface p-4">
          <h2 className="text-lg font-semibold text-clinical-ink">Datenstand und Prüfung</h2>
          <p className="mt-2 text-sm leading-6 text-clinical-muted">
            Inhaltsversion {CONTENT_VERSION}, Quellenabgleich vom {formatDate(LAST_SOURCE_REVIEW)}.
            Sichtbare Karten wurden redaktionell mit Quellen verknüpft. Eine klinische
            Fachprüfung durch qualifizierte Personen steht aus, sofern eine Karte nicht
            ausdrücklich anders gekennzeichnet ist. Automatisch erzeugte Entwürfe sind in
            Suche und App-Ansicht ausgeblendet.
          </p>
        </section>
      </div>
    </main>
  );
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("de-DE").format(new Date(`${value}T00:00:00`));
