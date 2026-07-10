let activeRegistration: ServiceWorkerRegistration | null = null;
let isReloading = false;

const announceUpdate = () => window.dispatchEvent(new Event("tante-piav-update-available"));

export function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !import.meta.env.PROD) {
    return;
  }

  window.addEventListener("load", async () => {
    const serviceWorkerUrl = `${import.meta.env.BASE_URL}service-worker.js`;

    try {
      const registration = await navigator.serviceWorker.register(serviceWorkerUrl);
      activeRegistration = registration;

      if (registration.waiting && navigator.serviceWorker.controller) {
        announceUpdate();
      }

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            announceUpdate();
          }
        });
      });

      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && navigator.onLine) {
          void registration.update();
        }
      });
    } catch (error) {
      console.warn("Service Worker konnte nicht registriert werden.", error);
    }
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!isReloading) {
      isReloading = true;
      window.location.reload();
    }
  });
}

export function activateServiceWorkerUpdate() {
  activeRegistration?.waiting?.postMessage({ type: "SKIP_WAITING" });
}
