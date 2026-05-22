import { canonicalSearchReplacements } from "./synonymDictionary";

export const normalizeSearchTerm = (value: string) => {
  const normalized = value
    .toLocaleLowerCase("de-DE")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`´]/g, "")
    .replace(/[‐‑‒–—−-]/g, " ")
    .replace(/[+/_,;:()[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return Object.entries(canonicalSearchReplacements).reduce(
    (term, [variant, canonical]) =>
      term.replace(new RegExp(`(^|\\s)${escapeRegExp(variant)}(?=\\s|$)`, "g"), `$1${canonical}`),
    normalized
  );
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
