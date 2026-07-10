import { describe, expect, it } from "vitest";
import { causes } from "../data/causes";
import { symptomEntries } from "../data/symptoms";
import { normalizeSearchTerm } from "./normalizeSearchTerm";
import { searchCauses } from "./searchCauses";
import { searchSymptoms } from "./searchSymptoms";

describe("deutsche Suche", () => {
  it.each([
    ["Müdigkeit", "Muedigkeit"],
    ["Ödeme", "Oedeme"],
    ["Übelkeit", "Uebelkeit"],
    ["Schilddrüse", "Schilddruese"]
  ])("normalisiert %s und %s identisch", (umlaut, transcription) => {
    expect(normalizeSearchTerm(umlaut)).toBe(normalizeSearchTerm(transcription));
  });

  it.each(["Muedigkeit", "Oedeme", "Luftnot", "hoher Blutdruck", "Schilddruese"])(
    "findet Cause-Treffer für %s",
    (query) => {
      const results = searchCauses(causes, query);
      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBeLessThan(causes.length / 2);
    }
  );

  it.each(["Muedigkeit", "Oedeme", "Atemnot", "Bluthochdruck", "Nausea"])(
    "findet Symptom-/Befundtreffer für %s",
    (query) => {
      const results = searchSymptoms(symptomEntries, query);
      expect(results.length).toBeGreaterThan(0);
      expect(results.length).toBeLessThan(symptomEntries.length);
    }
  );

  it("nimmt ausgeblendete Entwürfe nicht in die Suche auf", () => {
    expect(searchCauses(causes, "Castleman")).toHaveLength(0);
    expect(searchSymptoms(symptomEntries, "Castleman")).toHaveLength(0);
  });
});
