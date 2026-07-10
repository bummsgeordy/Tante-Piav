import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OfflineBanner } from "./components/OfflineBanner";
import { UpdateBanner } from "./components/UpdateBanner";
import { defaultFilters } from "./utils/filterCauses";
import type { Cause, CauseFilters, PiavCategory } from "./types/medical";
import type { SymptomEntry } from "./types/symptom";
import type { PageId } from "./types/navigation";
import { HomePage } from "./pages/HomePage";

const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({ default: module.AboutPage }))
);
const CauseDetailPage = lazy(() =>
  import("./pages/CauseDetailPage").then((module) => ({ default: module.CauseDetailPage }))
);
const RoadmapPage = lazy(() =>
  import("./pages/RoadmapPage").then((module) => ({ default: module.RoadmapPage }))
);
const SymptomsPage = lazy(() =>
  import("./pages/SymptomsPage").then((module) => ({ default: module.SymptomsPage }))
);

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<CauseFilters>(defaultFilters);
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string | null>(null);
  const returnScrollY = useRef(0);
  const returnFocusElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    if (!selectedCause) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCause]);

  const navigate = useCallback((nextPage: PageId) => {
    setSelectedCause(null);
    setPage(nextPage);
  }, []);

  const selectCause = useCallback((cause: Cause) => {
    if (!selectedCause) {
      returnScrollY.current = window.scrollY;
      returnFocusElement.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }
    setSelectedCause(cause);
  }, [selectedCause]);

  const selectSymptom = useCallback((entry: SymptomEntry) => {
    setSelectedCause(null);
    setSelectedSymptomId(entry.id);
    setPage("symptoms");
  }, []);

  const selectCategory = useCallback((category: PiavCategory) => {
    setSelectedCause(null);
    setPage("home");
    window.setTimeout(() => {
      document
        .getElementById(`section-${category}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);

  const closeCauseDetail = useCallback(() => {
    setSelectedCause(null);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: returnScrollY.current, behavior: "auto" });
      returnFocusElement.current?.focus({ preventScroll: true });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-clinical-text">
      <Header currentPage={page} onNavigate={navigate} />
      <OfflineBanner />
      <UpdateBanner />
      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {page === "about" ? (
            <AboutPage />
          ) : page === "roadmap" ? (
            <RoadmapPage />
          ) : page === "symptoms" ? (
            <SymptomsPage
              onQueryChange={setQuery}
              onSelectCategory={selectCategory}
              onSelectCause={selectCause}
              onSelectSymptom={selectSymptom}
              query={query}
              selectedSymptomId={selectedSymptomId}
            />
          ) : (
            <HomePage
              filters={filters}
              onFiltersChange={setFilters}
              onQueryChange={setQuery}
              onSelectCause={selectCause}
              onSelectSymptom={selectSymptom}
              query={query}
            />
          )}
        </Suspense>
      </div>
      {selectedCause ? (
        <Suspense fallback={null}>
          <CauseDetailPage
            cause={selectedCause}
            onClose={closeCauseDetail}
            onSelectCause={selectCause}
          />
        </Suspense>
      ) : null}
      <Footer onNavigate={navigate} />
    </div>
  );
}

function PageLoader() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-clinical-muted" role="status">
      Ansicht wird geladen ...
    </div>
  );
}
