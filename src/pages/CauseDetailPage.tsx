import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import type { Cause } from "../types/medical";
import { CauseDetail } from "../components/CauseDetail";

interface CauseDetailPageProps {
  cause: Cause;
  onClose: () => void;
  onSelectCause: (cause: Cause) => void;
}

export function CauseDetailPage({ cause, onClose, onSelectCause }: CauseDetailPageProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    );
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      aria-labelledby="cause-detail-title"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-clinical-ink/20 backdrop-blur-[2px]"
      onKeyDown={handleKeyDown}
      ref={dialogRef}
      role="dialog"
    >
      <div className="clinical-detail-panel ml-auto flex h-full w-full max-w-5xl flex-col overflow-hidden border-l border-clinical-line bg-white shadow-2xl">
        <header className="sticky top-0 z-10 flex min-h-16 items-center gap-3 border-b border-clinical-line bg-white/95 px-3 py-2 backdrop-blur sm:px-5">
          <button
            autoFocus
            className="inline-flex items-center gap-2 rounded-md border border-clinical-line bg-white px-3 py-2 text-sm font-semibold text-clinical-ink hover:border-clinical-accent hover:text-clinical-accent focus:outline-none focus:ring-4 focus:ring-teal-100"
            onClick={onClose}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Zurück
          </button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-clinical-ink" id="cause-detail-title">
              {cause.title}
            </p>
            <p className="text-xs text-clinical-muted">Detailansicht</p>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-5 lg:px-6">
          <CauseDetail cause={cause} onSelectCause={onSelectCause} />
        </main>
      </div>
    </div>
  );
}
