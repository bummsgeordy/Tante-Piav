import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OfflineBanner } from "./components/OfflineBanner";
import { defaultFilters } from "./utils/filterCauses";
import type { Cause, CauseFilters, PiavCategory } from "./types/medical";
import type { SymptomEntry } from "./types/symptom";
import type { PageId } from "./types/navigation";
import { AboutPage } from "./pages/AboutPage";
import { CauseDetailPage } from "./pages/CauseDetailPage";
import { HomePage } from "./pages/HomePage";
import { RoadmapPage } from "./pages/RoadmapPage";
import { SymptomsPage } from "./pages/SymptomsPage";

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<CauseFilters>(defaultFilters);
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string | null>(null);
  const returnScrollY = useRef(0);

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

  const navigate = (nextPage: PageId) => {
    setSelectedCause(null);
    setPage(nextPage);
  };

  const selectCause = (cause: Cause) => {
    if (!selectedCause) {
      returnScrollY.current = window.scrollY;
    }
    setSelectedCause(cause);
  };

  const selectSymptom = (entry: SymptomEntry) => {
    setSelectedCause(null);
    setSelectedSymptomId(entry.id);
    setPage("symptoms");
  };

  const selectCategory = (category: PiavCategory) => {
    setSelectedCause(null);
    setPage("home");
    window.setTimeout(() => {
      document
        .getElementById(`section-${category}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const closeCauseDetail = () => {
    setSelectedCause(null);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: returnScrollY.current, behavior: "auto" });
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-clinical-text">
      <Header currentPage={page} onNavigate={navigate} />
      <OfflineBanner />
      <div className="flex-1">
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
      </div>
      {selectedCause ? (
        <CauseDetailPage
          cause={selectedCause}
          onClose={closeCauseDetail}
          onSelectCause={selectCause}
        />
      ) : null}
      <Footer onNavigate={navigate} />
    </div>
  );
}
