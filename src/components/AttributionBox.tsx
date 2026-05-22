import { ExternalLink } from "lucide-react";

export function AttributionBox() {
  return (
    <section className="rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm text-clinical-text shadow-sm">
      <h2 className="text-base font-semibold text-clinical-ink">
        Würdigung und Attribution
      </h2>
      <p className="mt-2 leading-6">
        Das Akronym TANTE PIAV wurde durch Dres. Ingo Krenz und Andreas Klinge
        im Podcast Denkfabrik Medizin bekannt gemacht und didaktisch
        ausgearbeitet. Dieses Projekt versteht sich als ergänzende, offene
        Gedankenstütze und als Dank an die Kollegen und ihren Podcast. Es
        ersetzt keine ärztliche Beurteilung, keine Leitlinie und keine
        individuelle Diagnostik- oder Therapieentscheidung.
      </p>
      <a
        className="mt-3 inline-flex items-center gap-2 font-medium text-clinical-accent hover:text-clinical-accentDark"
        href="https://denkfabrikmedizin.de/"
        target="_blank"
        rel="noreferrer"
      >
        Denkfabrik Medizin besuchen
        <ExternalLink aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
