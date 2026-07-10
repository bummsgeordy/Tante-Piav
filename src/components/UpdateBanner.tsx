import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { activateServiceWorkerUpdate } from "../utils/registerServiceWorker";

export function UpdateBanner() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const showUpdate = () => setIsAvailable(true);
    window.addEventListener("tante-piav-update-available", showUpdate);
    return () => window.removeEventListener("tante-piav-update-available", showUpdate);
  }, []);

  if (!isAvailable) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 border-b border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-950">
      <span>Aktualisierte medizinische Inhalte sind verfügbar.</span>
      <button
        className="inline-flex min-h-9 items-center gap-1.5 rounded-md bg-clinical-accent px-3 py-1.5 font-semibold text-white hover:bg-clinical-accentDark"
        onClick={activateServiceWorkerUpdate}
        type="button"
      >
        <RefreshCw aria-hidden="true" size={15} />
        Neu laden
      </button>
    </div>
  );
}
