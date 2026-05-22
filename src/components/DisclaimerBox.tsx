import { AlertTriangle } from "lucide-react";

export function DisclaimerBox() {
  return (
    <section className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 shrink-0 text-clinical-warning" size={20} />
        <div>
          <h2 className="font-semibold">Medizinischer Hinweis</h2>
          <p className="mt-1 leading-6">
            Diese App ist eine Gedankenstuetze, kein Medizinprodukt. Sie ersetzt
            keine aerztliche Beurteilung, keine Leitlinie und keine
            individuelle Diagnostik- oder Therapieempfehlung. Inhalte koennen
            unvollstaendig oder veraltet sein und muessen fachlich geprueft
            werden. Bei Notfallsymptomen ist unmittelbare medizinische
            Abklaerung erforderlich.
          </p>
        </div>
      </div>
    </section>
  );
}
