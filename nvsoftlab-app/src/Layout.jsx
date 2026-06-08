import { Gamepad2, Menu, Smartphone, X } from "lucide-react"; // X kept for mobile menu toggle
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import nvSoftLabIcon from "/favicon.png";
import partyRoomIcon from "./assets/partyroom.png";
import GetAppButton from "./components/GetAppButton";

// Paths where the banner SHOULD show (main page only)
const BANNER_ALLOWED_PATHS = new Set(["/"]);

const NAV_LINKS = [
  {
    key: "PartyDeck",
    label: "Party Room",
    Icon: Gamepad2,
    activeColor: "text-[#FF3D6E] border border-[#FF3D6E]/30 bg-[#FF3D6E]/8",
  },
  {
    key: "OtherApps",
    label: "Other Apps",
    Icon: Smartphone,
    activeColor: "text-white border border-white/20 bg-white/8",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/party_room_app";
const TIKTOK_URL    = "https://www.tiktok.com/@party_room_app";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBannerVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const hideBanner =
    !BANNER_ALLOWED_PATHS.has(typeof window !== "undefined" ? window.location.pathname : "");

  return (
    <div className="min-h-screen font-nunito" style={{ background: "radial-gradient(ellipse at 50% 0%, #1e0d1a 0%, #0d0b12 55%)" }}>

      {/* ── Navbar ── */}
      <nav className="bg-[#1a1a1a] sticky top-0 z-50 border-b border-white/10" style={{ backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to={createPageUrl("PartyDeck")}
              className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF3D6E] focus:ring-offset-2 focus:ring-offset-[#0d0b12] rounded-lg"
              onClick={closeMobileMenu}
            >
              <img
                src={nvSoftLabIcon}
                alt="NVSoftLab Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-xl ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-base sm:text-lg font-black text-white leading-none tracking-tight">
                  NVSoftLab
                </h1>
                <p className="text-[11px] text-white/50 mt-0.5 hidden sm:block leading-none font-semibold tracking-wide uppercase">Mobile App Studio</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2">
              {NAV_LINKS.map((link) => {
                const NavIcon = link.Icon;
                const isActive = currentPageName === link.key;
                return (
                  <Link
                    key={link.key}
                    to={createPageUrl(link.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#FF3D6E] focus:ring-offset-2 focus:ring-offset-[#0d0b12] ${
                      isActive ? link.activeColor : "text-[#a0a0a8] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <NavIcon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF3D6E] focus:ring-offset-2 focus:ring-offset-[#0d0b12] transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              }
            </button>
          </div>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-white/10">
              <div className="flex flex-col gap-1 pt-3">
                {NAV_LINKS.map((link) => {
                  const NavIcon = link.Icon;
                  const isActive = currentPageName === link.key;
                  return (
                    <Link
                      key={link.key}
                      to={createPageUrl(link.key)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#FF3D6E] ${
                        isActive ? link.activeColor : "text-[#a0a0a8] hover:text-white hover:bg-white/5"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <NavIcon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className={`bg-[#111116] border-t border-white/10 mt-16 sm:mt-20 ${bannerVisible && !hideBanner ? "pb-28" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NVSoftLab on Instagram"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #f9a825 0%, #e91e63 50%, #9c27b0 100%)" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
              </svg>
              Instagram
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NVSoftLab on TikTok"
              className="flex items-center gap-2 bg-[#111] border border-white/15 rounded-xl px-4 py-2.5 text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.14 8.14 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z"/>
              </svg>
              TikTok
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#7a7a82]">
              © 2026 NVSoftLab · Crafting games that bring people together.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Download Banner ── */}
      {bannerVisible && !hideBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:pb-4 banner-enter">
          <div className="max-w-lg mx-auto bg-[#111116] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 backdrop-blur-md flex items-center gap-3 px-4 py-3">

            {/* App icon — attention bounce */}
            <img
              src={partyRoomIcon}
              alt="Party Room"
              className="w-12 h-12 rounded-xl flex-shrink-0 ring-1 ring-white/10 banner-icon-pop"
            />

            {/* Text */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className="text-white font-black text-sm leading-none whitespace-nowrap">Party Room</p>
              <p className="text-white/50 text-xs mt-0.5 leading-tight whitespace-nowrap truncate">Game night sorted</p>
            </div>

            {/* Smart download button — glow pulse */}
            <GetAppButton
              appKey="partyRoom"
              label="Get the App"
              size="sm"
              className="flex-shrink-0 !rounded-xl !px-4 !py-2.5 !text-xs !gap-1.5 banner-btn-glow"
            />
          </div>
        </div>
      )}
    </div>
  );
}
