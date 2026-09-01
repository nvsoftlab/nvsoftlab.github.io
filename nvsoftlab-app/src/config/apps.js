import partyRoomIcon from "../assets/partyroom.png";
import unspokenIcon from "../assets/unspoken.jpg";
import exposedAIIcon from "../assets/exposed-ai.png";

// Single source of truth for app store metadata.
// TEMPORARY: until each app has its own listing, both routes point at the
// NVSoftLab developer pages on the App Store and Google Play. Swap in the
// per-app URLs/IDs and re-enable the iOS Smart App Banner once they're live.
const DEV_APP_STORE_URL =
  "https://apps.apple.com/us/developer/nazar-dzys/id1816735381";
const DEV_PLAY_STORE_URL =
  "https://play.google.com/store/apps/developer?id=nvsoftlab";

export const APPS = {
  exposedAI: {
    key: "exposedAI",
    name: "Exposed AI",
    tagline: "An ideal start for two.",
    description:
      "700+ questions designed to spark intimacy, honest conversations, and unforgettable date nights.",
    accent: "from-rose-600 to-fuchsia-700",
    icon: exposedAIIcon,
    iosAppId: "6751416602",
    appStoreUrl:
      "https://apps.apple.com/us/app/exposed-game-have-you-ever/id6751416602",
    androidPackage: "com.nvsoftlab.haveyouever",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever",
    available: true,
  },
  partyRoom: {
    key: "partyRoom",
    name: "Party Room",
    tagline: "A whole pack of party games. One phone. Endless laughs.",
    description:
      "Pass one phone around the group and play classic party games together - no extra devices, no setup. Just open it, pick a game, and let your crew do the rest.",
    accent: "from-orange-500 to-purple-600",
    icon: partyRoomIcon,
    iosAppId: "6759220839",
    appStoreUrl: "https://apps.apple.com/us/app/party-room-imposter-alias/id6759220839",
    androidPackage: "com.nvsoftlab.partydesk",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nvsoftlab.partydesk",
    available: true,
  },
  unspoken: {
    key: "unspoken",
    name: "Unspoken",
    tagline: "The questions you'd never dare ask out loud.",
    description:
      "Unspoken serves up the spicy, vulnerable, and unexpectedly hilarious prompts that get a group talking - no awkward silences, no boring rounds.",
    accent: "from-fuchsia-500 to-indigo-600",
    icon: unspokenIcon,
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
