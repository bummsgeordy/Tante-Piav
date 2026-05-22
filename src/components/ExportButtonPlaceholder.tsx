import { Download } from "lucide-react";
import type { PiavCategory } from "../types/medical";
import { categoryToMarkdown, downloadMarkdown } from "../utils/exportMarkdown";
import { getCategoryLabel } from "../utils/getCategoryLabel";

interface ExportButtonPlaceholderProps {
  category: PiavCategory;
}

export function ExportButtonPlaceholder({ category }: ExportButtonPlaceholderProps) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-md border border-clinical-line bg-white px-3 py-2 text-sm font-semibold text-clinical-text hover:border-clinical-accent hover:text-clinical-accent"
      onClick={() =>
        downloadMarkdown(`${category}.md`, categoryToMarkdown(category))
      }
      type="button"
    >
      <Download aria-hidden="true" size={16} />
      {getCategoryLabel(category)} als Markdown
    </button>
  );
}
