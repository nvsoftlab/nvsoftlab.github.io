import { useNavigate } from "react-router-dom";
import { detectPlatform, isMobilePlatform } from "../utils/detectPlatform";
import { buildStoreUrl } from "../utils/storeUrl";
import { getApp } from "../config/apps";

/**
 * Smart download button that routes based on the visitor's platform:
 *   iOS / iPadOS  → App Store
 *   Android       → Google Play
 *   Desktop / unknown → /partyroom  (QR code + both store links)
 *
 * Props
 *   appKey   – key from apps.js config (default "partyRoom")
 *   label    – button text (default "Get the App")
 *   className – extra Tailwind classes merged on the button
 *   size     – "lg" (default) | "sm"
 */
export default function GetAppButton({
  appKey = "partyRoom",
  label = "Get the App",
  className = "",
  size = "lg",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const app = getApp(appKey);
    const platform = detectPlatform();

    if (isMobilePlatform(platform)) {
      const url = buildStoreUrl(app, platform, window.location.search);
      if (url) {
        window.location.href = url;
        return;
      }
    }

    // Desktop / unknown → QR + store links page
    navigate("/partyroom");
  };

  const isLg = size === "lg";

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center gap-2.5 font-black rounded-2xl
        bg-[#FF3D6E] hover:bg-[#FF1F55] active:scale-95
        text-white transition-all duration-200 shadow-lg shadow-[#FF3D6E]/30
        hover:shadow-[#FF3D6E]/50 hover:scale-[1.03]
        focus:outline-none focus:ring-2 focus:ring-[#FF3D6E] focus:ring-offset-2 focus:ring-offset-[#0d0b12]
        ${isLg ? "px-8 py-4 text-lg" : "px-5 py-2.5 text-sm"}
        ${className}
      `}
    >
      {/* Download arrow icon */}
      <svg
        className={isLg ? "w-5 h-5" : "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {label}
    </button>
  );
}
