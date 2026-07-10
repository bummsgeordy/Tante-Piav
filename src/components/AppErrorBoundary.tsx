import { Component, type ErrorInfo, type ReactNode } from "react";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("TANTE PIAV konnte nicht vollständig dargestellt werden.", error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-12">
        <section className="w-full rounded-lg border border-clinical-line bg-white p-5 shadow-soft">
          <h1 className="text-xl font-bold text-clinical-ink">Ansicht konnte nicht geladen werden</h1>
          <p className="mt-2 text-sm leading-6 text-clinical-muted">
            Bitte laden Sie die App neu. Falls der Fehler offline auftritt, stellen Sie kurz
            eine Internetverbindung her, damit die aktuelle Version geladen werden kann.
          </p>
          <button
            className="mt-4 rounded-md bg-clinical-accent px-4 py-2 text-sm font-semibold text-white hover:bg-clinical-accentDark"
            onClick={() => window.location.reload()}
            type="button"
          >
            App neu laden
          </button>
        </section>
      </main>
    );
  }
}
