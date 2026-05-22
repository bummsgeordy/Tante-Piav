import type { Cause } from "../types/medical";
import { CauseDetail } from "../components/CauseDetail";

interface CauseDetailPageProps {
  cause: Cause;
  onClose: () => void;
  onSelectCause: (cause: Cause) => void;
}

export function CauseDetailPage({ cause, onClose, onSelectCause }: CauseDetailPageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <CauseDetail cause={cause} onClose={onClose} onSelectCause={onSelectCause} />
    </main>
  );
}
