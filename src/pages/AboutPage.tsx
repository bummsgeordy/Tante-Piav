import { AttributionBox } from "../components/AttributionBox";
import { DisclaimerBox } from "../components/DisclaimerBox";

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
      </div>
    </main>
  );
}
