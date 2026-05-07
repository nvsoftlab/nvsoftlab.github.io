import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApp } from "../config/apps";
import { detectPlatform, isMobilePlatform } from "../utils/detectPlatform";
import { buildStoreUrl } from "../utils/storeUrl";
import { trackEvent } from "../utils/analytics";
import DownloadFallback from "../components/DownloadFallback";

export default function StoreRedirect({ appKey }) {
  const app = getApp(appKey);
  const { search } = useLocation();
  const [shouldFallback, setShouldFallback] = useState(false);

  useEffect(() => {
    if (!app) {
      setShouldFallback(true);
      return;
    }

    const platform = detectPlatform();

    trackEvent("app_redirect_impression", {
      app: app.key,
      app_name: app.name,
      platform,
      available: app.available,
    });

    if (!app.available) {
      // Until apps are live, never auto-redirect — show the landing page.
      setShouldFallback(true);
      return;
    }

    if (isMobilePlatform(platform)) {
      const target = buildStoreUrl(app, platform, search);
      if (target) {
        trackEvent("app_redirect_navigate", {
          app: app.key,
          app_name: app.name,
          platform,
          destination: target,
          store: platform === "ios" ? "app_store" : "play_store",
        });
        window.location.replace(target);
        return;
      }
    }

    setShouldFallback(true);
  }, [app, search]);

  useEffect(() => {
    if (!app) return;
    setSmartAppBanner(app.iosAppId);
    return () => removeSmartAppBanner();
  }, [app]);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0a1e] text-white p-8 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">App not found</h1>
          <p className="text-purple-300">
            The link you followed doesn't match a known app.
          </p>
        </div>
      </div>
    );
  }

  if (!shouldFallback) {
    // Brief redirecting state — visible only for the few ms before
    // window.location.replace fires on iOS/Android.
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0a1e] text-white">
        <p className="text-purple-300">Opening {app.name}…</p>
      </div>
    );
  }

  return <DownloadFallback app={app} search={search} />;
}

function setSmartAppBanner(appId) {
  if (!appId || typeof document === "undefined") return;
  let tag = document.querySelector('meta[name="apple-itunes-app"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "apple-itunes-app");
    tag.setAttribute("data-managed-by", "store-redirect");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", `app-id=${appId}`);
}

function removeSmartAppBanner() {
  if (typeof document === "undefined") return;
  const tag = document.querySelector(
    'meta[name="apple-itunes-app"][data-managed-by="store-redirect"]',
  );
  if (tag) tag.remove();
}
