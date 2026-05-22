import { RoadmapList } from "../components/RoadmapList";

export function RoadmapPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-clinical-ink">Roadmap</h1>
        <p className="mt-4 text-lg leading-8 text-clinical-muted">
          Der MVP bleibt bewusst schnell, statisch und ohne Backend. Die
          folgenden Phasen sind im Datenmodell und in der Komponentenstruktur
          vorbereitet.
        </p>
      </div>
      <div className="mt-8">
        <RoadmapList />
      </div>
    </main>
  );
}
