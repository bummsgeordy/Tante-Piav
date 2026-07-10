import { causes, draftCauses } from "./causes";
import { symptomEntries } from "./symptoms";

export interface ContentAuditRecord {
  id: string;
  kind: "cause" | "symptom";
  status: "published" | "draft-hidden";
  reviewStatus: string;
  lastSourceReview?: string;
  sourceCount: number;
}

export const contentAudit: ContentAuditRecord[] = [
  ...causes.map((cause) => ({
    id: cause.id,
    kind: "cause" as const,
    status: "published" as const,
    reviewStatus: cause.reviewStatus ?? "clinical-review-pending",
    lastSourceReview: cause.lastSourceReview,
    sourceCount: cause.sources.length
  })),
  ...draftCauses.map((cause) => ({
    id: cause.id,
    kind: "cause" as const,
    status: "draft-hidden" as const,
    reviewStatus: cause.reviewStatus ?? "draft",
    lastSourceReview: cause.lastSourceReview,
    sourceCount: cause.sources.length
  })),
  ...symptomEntries.map((entry) => ({
    id: entry.id,
    kind: "symptom" as const,
    status: "published" as const,
    reviewStatus: entry.reviewStatus ?? "clinical-review-pending",
    lastSourceReview: entry.lastSourceReview,
    sourceCount: entry.sources.length
  }))
];
