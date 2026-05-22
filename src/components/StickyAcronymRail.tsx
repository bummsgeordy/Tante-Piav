import type { Category, PiavCategory } from "../types/medical";

interface StickyAcronymRailProps {
  categories: Category[];
  activeCategory: PiavCategory;
  onSelect: (category: PiavCategory) => void;
  variant: "mobile" | "desktop";
}

export function StickyAcronymRail({
  categories,
  activeCategory,
  onSelect,
  variant
}: StickyAcronymRailProps) {
  const className =
    variant === "mobile"
      ? "sticky top-[73px] z-20 -mx-3 flex gap-1 overflow-x-auto border-y border-clinical-line bg-white px-3 py-2 sm:-mx-5 sm:px-5 lg:hidden"
      : "sticky top-24 hidden w-14 shrink-0 flex-col gap-2 self-start lg:flex";

  return (
    <nav aria-label="TANTE PIAV Abschnittsnavigation" className={className}>
      {categories.map((category) => (
        <RailButton
          active={activeCategory === category.id}
          category={category}
          key={category.id}
          onSelect={onSelect}
        />
      ))}
    </nav>
  );
}

function RailButton({
  active,
  category,
  onSelect
}: {
  active: boolean;
  category: Category;
  onSelect: (category: PiavCategory) => void;
}) {
  return (
    <button
      aria-label={`Zu ${category.title} springen`}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg font-black transition focus:outline-none focus:ring-4 focus:ring-teal-100 lg:h-14 lg:w-14 lg:text-2xl ${
        active
          ? "bg-clinical-accent text-white"
          : "bg-clinical-ink text-white hover:bg-clinical-accentDark"
      }`}
      onClick={() => onSelect(category.id)}
      title={category.title}
      type="button"
    >
      {category.acronym}
    </button>
  );
}
