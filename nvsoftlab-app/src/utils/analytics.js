// Push an event into the GTM dataLayer AND directly into gtag (GA4) when
// available. This means events arrive in GA whether routing happens via the
// GTM container's tags or via a gtag.js snippet in index.html.
//
// Both calls are safe to run before either library has loaded:
//   - dataLayer is initialized as an array on first push; GTM picks up queued
//     events when it boots.
//   - window.gtag is a function the gtag.js snippet defines; if it isn't
//     present, the call is a no-op.
export function trackEvent(event, params = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ttclid",
];

const SOCIAL_REFERRERS = [
  [/(^|\.)instagram\.com$/i, "instagram"],
  [/(^|\.)tiktok\.com$/i, "tiktok"],
  [/(^|\.)facebook\.com$|(^|\.)fb\.com$/i, "facebook"],
  [/(^|\.)youtube\.com$|(^|\.)youtu\.be$/i, "youtube"],
  [/(^|\.)threads\.net$/i, "threads"],
  [/(^|\.)x\.com$|(^|\.)twitter\.com$/i, "x"],
];

function getReferrerDetails() {
  if (typeof document === "undefined" || !document.referrer) {
    return { referrer: "", referrer_host: "" };
  }

  try {
    const referrerUrl = new URL(document.referrer);
    return {
      referrer: document.referrer,
      referrer_host: referrerUrl.hostname.replace(/^www\./, ""),
    };
  } catch {
    return { referrer: document.referrer, referrer_host: "" };
  }
}

function inferSource(params, referrerHost) {
  if (params.get("ttclid")) return { source: "tiktok", medium: "paid_social" };
  if (params.get("fbclid")) return { source: "meta", medium: "paid_social" };
  if (params.get("gclid")) return { source: "google", medium: "cpc" };

  const socialMatch = SOCIAL_REFERRERS.find(([pattern]) =>
    pattern.test(referrerHost),
  );
  if (socialMatch) return { source: socialMatch[1], medium: "social" };
  if (referrerHost) return { source: referrerHost, medium: "referral" };
  return { source: "direct", medium: "none" };
}

export function getTrafficAttribution(search = "") {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(search || window.location.search);
  const { referrer, referrer_host: referrerHost } = getReferrerDetails();
  const inferred = inferSource(params, referrerHost);
  const source = params.get("utm_source") || inferred.source;
  const medium = params.get("utm_medium") || inferred.medium;
  const campaign = params.get("utm_campaign") || "(not set)";
  const content = params.get("utm_content") || "(not set)";
  const term = params.get("utm_term") || "(not set)";
  const attribution = {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: content,
    utm_term: term,
    traffic_source: source,
    traffic_medium: medium,
    traffic_campaign: campaign,
    traffic_content: content,
    traffic_term: term,
    referrer,
    referrer_host: referrerHost,
  };

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }

  try {
    sessionStorage.setItem(
      "traffic_attribution",
      JSON.stringify(attribution),
    );
  } catch {
    // Analytics must never block navigation when storage is unavailable.
  }

  return attribution;
}

// Gives GTM a short window to send its analytics request before the browser
// leaves for an app store. Navigation still happens if GTM is blocked.
export function trackEventBeforeNavigation(
  event,
  params,
  navigate,
  timeout = 800,
) {
  if (typeof window === "undefined") {
    navigate();
    return;
  }

  let navigated = false;
  const finish = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
    eventCallback: finish,
    eventTimeout: timeout,
  });

  window.setTimeout(finish, timeout + 100);
}
