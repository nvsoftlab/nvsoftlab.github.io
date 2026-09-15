import { useEffect } from "react";
import { getTrafficAttribution, trackEvent } from "../utils/analytics";

export default function useUTMTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const attribution = getTrafficAttribution(window.location.search);

    if (utmSource) {
      trackEvent("utm_visit", attribution);

      trackEvent("page_view", {
        page_path: window.location.pathname + window.location.search,
        ...attribution,
      });
    }
  }, []);
}
