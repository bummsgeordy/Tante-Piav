import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { defaultFilters } from "./utils/filterCauses";
import type { Cause, CauseFilters } from "./types/medical";
import type { PageId } from "./types/navigation";
import { AboutPage } from "./pages/AboutPage";
import { CauseDetailPage } from "./pages/CauseDetailPage";
import { HomePage } from "./pages/HomePage";
import { RoadmapPage } from "./pages/RoadmapPage";

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<CauseFilters>(defaultFilters);
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selectedCause?.id]);

  const navigate = (nextPage: PageId) => {
    setSelectedCause(null);
    setPage(nextPage);
  };

  const selectCause = (cause: Cause) => {
    setSelectedCause(cause);
    setPage("home");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-clinical-text">
      <Header currentPage={page} onNavigate={navigate} />
      <div className="flex-1">
        {selectedCause ? (
          <CauseDetailPage
            cause={selectedCause}
            onClose={() => setSelectedCause(null)}
            onSelectCause={selectCause}
          />
        ) : page === "about" ? (
          <AboutPage />
        ) : page === "roadmap" ? (
          <RoadmapPage />
        ) : (
          <HomePage
            filters={filters}
            onFiltersChange={setFilters}
            onQueryChange={setQuery}
            onSelectCause={selectCause}
            query={query}
          />
        )}
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
