import { ExternalLink } from "lucide-react";
import type { PageId } from "../types/navigation";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-clinical-line bg-clinical-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-semibold">TANTE PIAV</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <button
            className="text-slate-100 hover:text-white"
            onClick={() => onNavigate("about")}
            type="button"
          >
            Über
          </button>
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
          <span className="text-slate-300">MIT</span>
        </div>
      </div>
    </footer>
  );
}
