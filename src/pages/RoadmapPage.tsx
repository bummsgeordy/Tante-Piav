import { RoadmapList } from "../components/RoadmapList";

export function RoadmapPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-clinical-ink">Roadmap</h1>
      </div>
      <div className="mt-8">
        <RoadmapList />
      </div>
    </main>
  );
}
