import type { Cause, SourceLink } from "../types/medical";
import type { SymptomEntry } from "../types/symptom";

export const CONTENT_VERSION = "2026.07";
export const LAST_SOURCE_REVIEW = "2026-07-10";

const SOURCE_CHECK_NOTE =
  "Quellen redaktionell abgeglichen; eine klinische Prüfung durch qualifizierte Fachpersonen steht aus.";

const LINK_ONLY_HOSTS = new Set([
  "ahajournals.org",
  "academic.oup.com",
  "bestpractice.bmj.com",
  "escardio.org",
  "nejm.org",
  "nature.com",
  "sciencedirect.com"
]);

const normalizeSourceUsage = (source: SourceLink): SourceLink => {
  const hostname = new URL(source.url).hostname.replace(/^www\./, "");
  return {
    ...source,
    accessedAt: source.accessedAt ?? LAST_SOURCE_REVIEW,
    usage: source.usage ?? (LINK_ONLY_HOSTS.has(hostname) ? "link-only" : "open-reference")
  };
};

export const markCauseSourceChecked = (cause: Cause): Cause => ({
  ...cause,
  sources: cause.sources.map(normalizeSourceUsage),
  reviewStatus: cause.reviewStatus ?? "source-checked",
  lastSourceReview: cause.lastSourceReview ?? LAST_SOURCE_REVIEW,
  contentVersion: cause.contentVersion ?? CONTENT_VERSION,
  evidenceNotes: cause.evidenceNotes ?? [SOURCE_CHECK_NOTE]
});

export const markCauseDraft = (cause: Cause): Cause => ({
  ...cause,
  sources: cause.sources.map(normalizeSourceUsage),
  reviewStatus: "draft",
  lastSourceReview: LAST_SOURCE_REVIEW,
  contentVersion: CONTENT_VERSION,
  evidenceNotes: [
    "Automatisch abgeleitete Referenzkarte. Nicht individuell quellengeprüft und nicht zur Anzeige freigegeben."
  ]
});

export const markSymptomSourceChecked = (entry: SymptomEntry): SymptomEntry => ({
  ...entry,
  sources: entry.sources.map(normalizeSourceUsage),
  reviewStatus: entry.reviewStatus ?? "source-checked",
  lastSourceReview: entry.lastSourceReview ?? LAST_SOURCE_REVIEW,
  contentVersion: entry.contentVersion ?? CONTENT_VERSION,
  evidenceNotes: entry.evidenceNotes ?? [SOURCE_CHECK_NOTE]
});

export const isPublishedCause = (cause: Cause) => cause.reviewStatus !== "draft";
