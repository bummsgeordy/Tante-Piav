import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-clinical-line bg-clinical-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 text-sm sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-semibold">TANTE PIAV</p>
          <p className="mt-2 max-w-3xl leading-6 text-slate-200">
            Das Akronym TANTE PIAV wurde durch Dres. Ingo Krenz und Andreas
            Klinge im Podcast Denkfabrik Medizin bekannt gemacht und didaktisch
            ausgearbeitet. Dieses Projekt versteht sich als ergaenzende, offene
            Gedankenstuetze und als Dank an die Kollegen und ihren Podcast.
          </p>
          <p className="mt-2 max-w-3xl leading-6 text-slate-300">
            Kein Medizinprodukt, keine individuelle Diagnostik- oder
            Therapieempfehlung, kein Ersatz fuer Leitlinien oder aerztliche
            Beurteilung.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:items-end">
          <a
            className="inline-flex items-center gap-2 text-slate-100 hover:text-white"
            href="https://denkfabrikmedizin.de/"
            target="_blank"
            rel="noreferrer"
          >
            Denkfabrik Medizin
            <ExternalLink aria-hidden="true" size={15} />
          </a>
          <a
            className="inline-flex items-center gap-2 text-slate-100 hover:text-white"
            href="https://github.com/bummsgeordy/Tante-Piav"
            target="_blank"
            rel="noreferrer"
          >
            Open Source auf GitHub
            <ExternalLink aria-hidden="true" size={15} />
          </a>
          <span className="text-slate-300">MIT License</span>
        </div>
      </div>
    </footer>
  );
}
