import { categories } from "../data/categories";
import { specialties } from "../data/specialties";
import type { Frequency, PiavCategory, Specialty, Urgency } from "../types/medical";

export const getCategoryLabel = (category: PiavCategory) =>
  categories.find((item) => item.id === category)?.title ?? category;

export const getCategoryAcronym = (category: PiavCategory) =>
  categories.find((item) => item.id === category)?.acronym ?? "";

export const getSpecialtyLabel = (specialty: Specialty) =>
  specialties.find((item) => item.id === specialty)?.label ?? specialty;

export const getFrequencyLabel = (frequency: Frequency) => {
  const labels: Record<Frequency, string> = {
    haeufig: "haeufig",
    relevant: "relevant",
    selten: "selten"
  };
  return labels[frequency];
};

export const getUrgencyLabel = (urgency: Urgency) => {
  const labels: Record<Urgency, string> = {
    ambulant: "ambulant",
    zeitnah: "zeitnah",
    notfall: "Notfall"
  };
  return labels[urgency];
};
