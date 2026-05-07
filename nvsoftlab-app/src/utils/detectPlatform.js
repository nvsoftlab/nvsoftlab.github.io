// Returns one of: "ios" | "android" | "macos" | "windows" | "linux" | "other"
// SSR-safe: returns "other" when window/navigator are missing.
export function detectPlatform() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "other";
  }

  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouch = navigator.maxTouchPoints || 0;

  // iPadOS 13+ reports as "MacIntel" with touch points > 1.
  const isIPadOS = platform === "MacIntel" && maxTouch > 1;
  if (/iPhone|iPod/.test(ua) || /iPad/.test(ua) || isIPadOS) {
    return "ios";
  }

  if (/Android/i.test(ua)) {
    return "android";
  }

  if (/Mac/i.test(platform) || /Macintosh/i.test(ua)) {
    return "macos";
  }

  if (/Win/i.test(platform) || /Windows/i.test(ua)) {
    return "windows";
  }

  if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
    return "linux";
  }

  return "other";
}

export function isMobilePlatform(platform) {
  return platform === "ios" || platform === "android";
}
