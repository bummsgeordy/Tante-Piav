import { Activity, Github, Map, Search } from "lucide-react";
import type { PageId } from "../types/navigation";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: Array<{ id: PageId; label: string }> = [
  { id: "home", label: "App" },
  { id: "about", label: "Über" },
  { id: "roadmap", label: "Roadmap" }
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-clinical-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          className="flex items-center gap-3 text-left"
          onClick={() => onNavigate("home")}
          type="button"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-accent text-white">
            <Activity aria-hidden="true" size={22} />
          </span>
          <span>
            <span className="block text-lg font-bold text-clinical-ink">TANTE PIAV</span>
            <span className="block text-sm text-clinical-muted">
              Offene Differentialdiagnosen-Gedankenstütze
            </span>
          </span>
        </button>

        <nav aria-label="Hauptnavigation" className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <button
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                currentPage === item.id
                  ? "bg-clinical-ink text-white"
                  : "text-clinical-text hover:bg-slate-100"
              }`}
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
          <a
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-clinical-text hover:bg-slate-100"
            href="https://denkfabrikmedizin.de/"
            rel="noreferrer"
            target="_blank"
          >
            <Search aria-hidden="true" size={16} />
            Denkfabrik
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-clinical-text hover:bg-slate-100"
            href="https://github.com/bummsgeordy/Tante-Piav"
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={16} />
            GitHub
          </a>
          <button
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-clinical-text hover:bg-slate-100"
            onClick={() => onNavigate("roadmap")}
            type="button"
          >
            <Map aria-hidden="true" size={16} />
            Ausbau
          </button>
        </nav>
      </div>
    </header>
  );
}
