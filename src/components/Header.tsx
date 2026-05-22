import { Podcast } from "lucide-react";
import type { PageId } from "../types/navigation";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: Array<{ id: PageId; label: string }> = [
  { id: "home", label: "App" },
  { id: "symptoms", label: "Symptome" },
  { id: "about", label: "Über" },
  { id: "roadmap", label: "Roadmap" }
];

const headerImageSrc = `${import.meta.env.BASE_URL}tante-piav-header.png`;

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-clinical-line bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-2 px-3 py-1 sm:grid-cols-[minmax(220px,1fr)_auto] sm:items-center sm:px-5 lg:grid-cols-[minmax(420px,1fr)_auto] lg:gap-4 lg:px-6">
        <button
          aria-label="Zur App-Startseite"
          className="min-w-0 justify-self-stretch sm:justify-self-start"
          onClick={() => onNavigate("home")}
          type="button"
        >
          <img
            alt="Projektinterne TANTE-PIAV-Illustration"
            className="h-20 w-full object-contain object-left sm:h-24 sm:w-[min(52vw,700px)] lg:h-28 lg:w-[min(58vw,820px)]"
            src={headerImageSrc}
          />
        </button>

        <nav
          aria-label="Hauptnavigation"
          className="flex flex-wrap items-center gap-2 sm:justify-end"
        >
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
            <Podcast aria-hidden="true" size={16} />
            Denkfabrik Medizin Podcast
          </a>
        </nav>
      </div>
    </header>
  );
}
