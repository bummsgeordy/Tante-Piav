import { describe, expect, it } from "vitest";
import { causes, draftCauses } from "./causes";
import { contentAudit } from "./contentAudit";
import { symptomEntries } from "./symptoms";

const unique = (items: string[]) => new Set(items).size === items.length;
const allKnownCauseIds = new Set([...causes, ...draftCauses].map((cause) => cause.id));

describe("medizinische Datenintegrität", () => {
  it("verwendet eindeutige IDs und trennt veröffentlichte Karten von Entwürfen", () => {
    expect(unique(causes.map((cause) => cause.id))).toBe(true);
    expect(unique(draftCauses.map((cause) => cause.id))).toBe(true);
    expect(unique(symptomEntries.map((entry) => entry.id))).toBe(true);
    expect(causes.some((cause) => draftCauses.some((draft) => draft.id === cause.id))).toBe(false);
  });

  it("veröffentlicht keine generisch erzeugten Referenzkarten", () => {
    causes.forEach((cause) => {
      expect(cause.reviewStatus).not.toBe("draft");
      expect(cause.shortDescription).not.toContain("referenzierte Differenzialdiagnose");
      expect(cause.lastSourceReview).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(cause.contentVersion).toBeTruthy();
    });
    symptomEntries.forEach((entry) => {
      expect(entry.reviewStatus).not.toBe("draft");
      expect(entry.lastSourceReview).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(entry.contentVersion).toBeTruthy();
    });
    draftCauses.forEach((cause) => expect(cause.reviewStatus).toBe("draft"));
  });

  it("verknüpft alle Symptom-Ursachen mit einer veröffentlichten Karte oder einem dokumentierten Entwurf", () => {
    symptomEntries.forEach((entry) => {
      const referencedIds = [
        ...entry.commonCauseIds,
        ...entry.importantCauseIds,
        ...entry.rareButImportantCauseIds
      ];
      referencedIds.forEach((id) => expect(allKnownCauseIds.has(id), `${entry.id}: ${id}`).toBe(true));
    });
  });

  it("verwendet für sichtbare Inhalte ausschließlich HTTPS-Quellen", () => {
    [...causes, ...symptomEntries].forEach((entry) => {
      expect(entry.sources.length).toBeGreaterThan(0);
      entry.sources.forEach((source) => {
        expect(() => new URL(source.url)).not.toThrow();
        expect(source.url.startsWith("https://")).toBe(true);
        expect(source.accessedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(source.usage).toMatch(/^(open-reference|link-only)$/);
      });
    });
  });

  it("dokumentiert jeden veröffentlichten und ausgeblendeten Datensatz im Audit", () => {
    expect(contentAudit).toHaveLength(causes.length + draftCauses.length + symptomEntries.length);
    expect(contentAudit.filter((item) => item.status === "draft-hidden")).toHaveLength(draftCauses.length);
  });
});
