import { useEffect } from "react";

export default function useUTMTracking() {
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const utm_source = params.get("utm_source");
      const utm_medium = params.get("utm_medium");
      const utm_campaign = params.get("utm_campaign");
  
      if (utm_source) {
        sessionStorage.setItem("utm_source", utm_source);
        sessionStorage.setItem("utm_medium", utm_medium || "");
        sessionStorage.setItem("utm_campaign", utm_campaign || "");
  
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "utm_visit",
          utm_source,
          utm_medium,
          utm_campaign,
        });
  
        window.dataLayer.push({
          event: "page_view",
          page_path: window.location.pathname + window.location.search,
        });
      }
    }, []);
  }