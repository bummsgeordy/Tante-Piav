import { causes } from "../data/causes";
import type { Cause, PiavCategory } from "../types/medical";
import {
  getCategoryLabel,
  getFrequencyLabel,
  getSpecialtyLabel,
  getUrgencyLabel
} from "./getCategoryLabel";

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export const causeToMarkdown = (cause: Cause) => `# ${cause.title}

Kategorie: ${getCategoryLabel(cause.category)}
Haeufigkeit: ${getFrequencyLabel(cause.frequency)}
Dringlichkeit: ${getUrgencyLabel(cause.urgency)}
Fachgebiete: ${cause.specialties.map(getSpecialtyLabel).join(", ")}

## Kurzbeschreibung
${cause.shortDescription}

## Beispiele
${list(cause.examples)}

## Typische Hinweise
${list(cause.typicalClues)}

## Red Flags
${list(cause.redFlags)}

## Verwandte Symptome
${list(cause.relatedSymptoms)}

## Quellen
${cause.sources.map((source) => `- [${source.title}](${source.url})`).join("\n")}

## Hinweis
Diese Gedankenstuetze ersetzt keine aerztliche Beurteilung, keine Leitlinie und keine individuelle Diagnostik- oder Therapieentscheidung.
`;

export const categoryToMarkdown = (category: PiavCategory) => {
  const categoryCauses = causes.filter((cause) => cause.category === category);
  return `# ${getCategoryLabel(category)}

${categoryCauses.map(causeToMarkdown).join("\n---\n")}`;
};

export const downloadMarkdown = (fileName: string, markdown: string) => {
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
};

export const copyMarkdown = async (markdown: string) => {
  if (!navigator.clipboard) {
    throw new Error("Clipboard API unavailable");
  }
  await navigator.clipboard.writeText(markdown);
};
