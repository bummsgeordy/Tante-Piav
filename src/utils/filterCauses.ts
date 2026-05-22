import type { Cause, CauseFilters } from "../types/medical";

export const defaultFilters: CauseFilters = {
  category: "all",
  specialty: "all",
  frequency: "all",
  urgency: "all",
  redFlagsOnly: false
};

export const filterCauses = (causes: Cause[], filters: CauseFilters) =>
  causes.filter((cause) => {
    if (filters.category !== "all" && cause.category !== filters.category) {
      return false;
    }
    if (
      filters.specialty !== "all" &&
      !cause.specialties.includes(filters.specialty)
    ) {
      return false;
    }
    if (filters.frequency !== "all" && cause.frequency !== filters.frequency) {
      return false;
    }
    if (filters.urgency !== "all" && cause.urgency !== filters.urgency) {
      return false;
    }
    if (filters.redFlagsOnly && !cause.hasMajorRedFlags) {
      return false;
    }
    return true;
  });
