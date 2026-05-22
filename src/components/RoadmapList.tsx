import { roadmap } from "../data/roadmap";

export function RoadmapList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {roadmap.map((phase) => (
        <article
          className="rounded-lg border border-clinical-line bg-white p-5 shadow-sm"
          key={phase.phase}
        >
          <p className="text-sm font-semibold text-clinical-accent">{phase.phase}</p>
          <h2 className="mt-1 text-xl font-semibold text-clinical-ink">{phase.title}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-clinical-muted">
            {phase.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
