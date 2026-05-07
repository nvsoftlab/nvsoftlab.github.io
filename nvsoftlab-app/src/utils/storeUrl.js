// Build a store URL with attribution params forwarded from the current
// page's query string (UTM tags, gclid, etc.).
//
// App Store: supports `pt`, `ct`, `mt` campaign tokens. We forward `utm_source`
// → `pt` (provider token) and `utm_campaign` → `ct` (campaign token) when
// present. Unknown UTMs go through as-is so analytics still works on the
// landing redirect.
//
// Play Store: accepts a single `referrer` query param that should contain the
// full UTM string (url-encoded). We pass it through verbatim.

function pickUtmParams(searchParams) {
  const utms = {};
  for (const [key, value] of searchParams.entries()) {
    if (
      key.startsWith("utm_") ||
      key === "gclid" ||
      key === "fbclid" ||
      key === "ttclid"
    ) {
      utms[key] = value;
    }
  }
  return utms;
}

function buildAppStoreUrl(baseUrl, searchParams) {
  const url = new URL(baseUrl);
  const utms = pickUtmParams(searchParams);

  if (utms.utm_source) url.searchParams.set("pt", utms.utm_source);
  if (utms.utm_campaign) url.searchParams.set("ct", utms.utm_campaign);

  for (const [key, value] of Object.entries(utms)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }

  return url.toString();
}

function buildPlayStoreUrl(baseUrl, searchParams) {
  const url = new URL(baseUrl);
  const utms = pickUtmParams(searchParams);

  const referrerParts = Object.entries(utms).map(
    ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`,
  );
  if (referrerParts.length > 0) {
    url.searchParams.set("referrer", referrerParts.join("&"));
  }

  return url.toString();
}

export function buildStoreUrl(app, platform, searchParams) {
  const params =
    searchParams instanceof URLSearchParams
      ? searchParams
      : new URLSearchParams(searchParams || "");

  if (platform === "ios" || platform === "macos") {
    return buildAppStoreUrl(app.appStoreUrl, params);
  }
  if (platform === "android") {
    return buildPlayStoreUrl(app.playStoreUrl, params);
  }
  return null;
}

export function getAppStoreLink(app, search) {
  const params =
    search instanceof URLSearchParams
      ? search
      : new URLSearchParams(search || "");
  return buildAppStoreUrl(app.appStoreUrl, params);
}

export function getPlayStoreLink(app, search) {
  const params =
    search instanceof URLSearchParams
      ? search
      : new URLSearchParams(search || "");
  return buildPlayStoreUrl(app.playStoreUrl, params);
}
