import { ChevronRight } from "lucide-react";
import type { Category, PiavCategory } from "../types/medical";

interface CollapsibleAcronymNavProps {
  activeCategory: PiavCategory;
  categories: Category[];
  onSelect: (category: PiavCategory) => void;
}

export function CollapsibleAcronymNav({
  activeCategory,
  categories,
  onSelect
}: CollapsibleAcronymNavProps) {
  return (
    <section
      aria-label="TANTE PIAV ausgeschrieben"
      className="rounded-lg border border-clinical-line bg-white shadow-sm"
      id="acronym-nav-expanded"
    >
      <div className="grid divide-y divide-clinical-line">
        {categories.map((category) => (
          <button
            className={`group grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 px-3 py-2 text-left transition hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-teal-100 ${
              activeCategory === category.id ? "bg-teal-50" : "bg-white"
            }`}
            key={category.id}
            onClick={() => onSelect(category.id)}
            type="button"
          >
            <Letter active={activeCategory === category.id} category={category} compact={false} />
            <span className="min-w-0">
              <span className="block break-words font-bold text-clinical-ink">
                {category.title}
              </span>
              <span className="mt-0.5 block break-words text-xs leading-4 text-clinical-muted">
                {category.subtitle}
              </span>
            </span>
            <ChevronRight
              aria-hidden="true"
              className="shrink-0 text-clinical-muted transition group-hover:translate-x-0.5"
              size={17}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

interface CollapsedAcronymRailProps {
  activeCategory: PiavCategory;
  categories: Category[];
  isVisible: boolean;
  onSelect: (category: PiavCategory) => void;
  variant: "desktop" | "mobile";
}

export function CollapsedAcronymRail({
  activeCategory,
  categories,
  isVisible,
  onSelect,
  variant
}: CollapsedAcronymRailProps) {
  const isDesktop = variant === "desktop";

  return (
    <nav
      aria-label="TANTE PIAV reduzierte Abschnittsnavigation"
      className={`${isDesktop ? "hidden lg:fixed lg:z-40 lg:flex lg:w-14 lg:flex-col lg:gap-2" : "fixed left-0 right-0 z-30 flex gap-1 overflow-x-auto border-y border-clinical-line bg-white/95 px-3 py-2 shadow-sm backdrop-blur sm:px-5 lg:hidden"} transition-[opacity,transform] duration-300 ease-out will-change-transform motion-reduce:transition-none ${
        isVisible
          ? "pointer-events-auto translate-x-0 translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-3 scale-95 opacity-0 lg:-translate-x-8 lg:translate-y-0"
      }`}
      aria-hidden={!isVisible}
      style={
        isDesktop
          ? {
              left: "max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))",
              top: "calc(var(--app-header-height) + 0.75rem)"
            }
          : { top: "calc(var(--app-header-height) - 1px)" }
      }
    >
      {categories.map((category, index) => (
        <button
          aria-label={`Zu ${category.title} springen`}
          className="shrink-0 rounded-lg transition-transform duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-teal-100 hover:scale-105 motion-reduce:transition-none"
          key={category.id}
          onClick={() => onSelect(category.id)}
          style={{ transitionDelay: isVisible ? `${index * 18}ms` : "0ms" }}
          tabIndex={isVisible ? 0 : -1}
          title={category.title}
          type="button"
        >
          <Letter active={activeCategory === category.id} category={category} compact />
        </button>
      ))}
    </nav>
  );
}

function Letter({
  active,
  category,
  compact
}: {
  active: boolean;
  category: Category;
  compact: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg font-black text-white transition ${
        compact ? "h-9 w-9 text-base sm:h-10 sm:w-10 lg:h-14 lg:w-14 lg:text-2xl" : "h-9 w-9 text-lg"
      } ${active ? "bg-clinical-accent" : "bg-clinical-ink"}`}
    >
      {category.acronym}
    </span>
  );
}
