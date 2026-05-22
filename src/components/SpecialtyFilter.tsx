import { specialties } from "../data/specialties";
import type { Specialty } from "../types/medical";

interface SpecialtyFilterProps {
  value: Specialty | "all";
  onChange: (value: Specialty | "all") => void;
}

export function SpecialtyFilter({ value, onChange }: SpecialtyFilterProps) {
  return (
    <label className="block text-sm font-medium text-clinical-ink">
      Fachgebiet
      <select
        className="mt-1 w-full rounded-md border border-clinical-line bg-white px-3 py-2 text-sm text-clinical-text outline-none focus:border-clinical-accent focus:ring-2 focus:ring-teal-100"
        onChange={(event) => onChange(event.target.value as Specialty | "all")}
        value={value}
      >
        <option value="all">Alle Fachgebiete</option>
        {specialties.map((specialty) => (
          <option key={specialty.id} value={specialty.id}>
            {specialty.label}
          </option>
        ))}
      </select>
    </label>
  );
}
