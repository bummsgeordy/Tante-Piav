import { useEffect, useState } from "react";
import { LAST_SOURCE_REVIEW } from "../data/contentReview";

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(() =>
    typeof navigator !== "undefined" ? !navigator.onLine : false
  );

  useEffect(() => {
    const updateStatus = () => setIsOffline(!navigator.onLine);

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <div className="border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-center text-sm font-medium text-emerald-900">
      Offline: gespeicherte Inhalte sind weiter nutzbar · Quellenstand {formatDate(LAST_SOURCE_REVIEW)}.
    </div>
  );
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("de-DE").format(new Date(`${value}T00:00:00`));
