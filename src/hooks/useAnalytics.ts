import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook para enviar eventos de page_view a Google Analytics (GA4)
 * cuando cambia la ruta en una SPA.
 */
export default function useAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
}
