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
