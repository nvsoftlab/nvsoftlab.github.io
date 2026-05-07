// Single source of truth for app store metadata.
// TEMPORARY: until each app has its own listing, both routes point at the
// NVSoftLab developer pages on the App Store and Google Play. Swap in the
// per-app URLs/IDs and re-enable the iOS Smart App Banner once they're live.
const DEV_APP_STORE_URL =
  "https://apps.apple.com/us/developer/nazar-dzys/id1816735381";
const DEV_PLAY_STORE_URL =
  "https://play.google.com/store/apps/developer?id=nvsoftlab";

export const APPS = {
  partyRoom: {
    key: "partyRoom",
    name: "Party Room",
    tagline: "A whole pack of party games. One phone. Endless laughs.",
    description:
      "Pass one phone around the group and play classic party games together - no extra devices, no setup. Just open it, pick a game, and let your crew do the rest.",
    accent: "from-orange-500 to-purple-600",
    iosAppId: "",
    appStoreUrl: DEV_APP_STORE_URL,
    androidPackage: "com.nvsoftlab.partyroom",
    playStoreUrl: DEV_PLAY_STORE_URL,
    available: true,
  },
  unspoken: {
    key: "unspoken",
    name: "Unspoken",
    tagline: "The questions you'd never dare ask out loud.",
    description:
      "Unspoken serves up the spicy, vulnerable, and unexpectedly hilarious prompts that get a group talking - no awkward silences, no boring rounds.",
    accent: "from-fuchsia-500 to-indigo-600",
    iosAppId: "",
    appStoreUrl: DEV_APP_STORE_URL,
    androidPackage: "com.nvsoftlab.unspoken",
    playStoreUrl: DEV_PLAY_STORE_URL,
    available: true,
  },
};

export function getApp(key) {
  return APPS[key] ?? null;
}
