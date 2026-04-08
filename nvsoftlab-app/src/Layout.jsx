import { Gamepad2, Menu, Smartphone, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import nvSoftLabIcon from "/favicon.png";

const NAV_LINKS = [
  {
    key: "PartyDeck",
    label: "Party Deck",
    Icon: Gamepad2,
    activeColor: "text-orange-300 bg-gradient-to-r from-orange-500/20 to-purple-500/20",
  },
  {
    key: "OtherApps",
    label: "Other Apps",
    Icon: Smartphone,
    activeColor: "text-white bg-white/10",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/nvsoftlab";
const TIKTOK_URL    = "https://www.tiktok.com/@nvsoftlab";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#0f0a1e] font-nunito">

      {/* ── Navbar ── */}
      <nav className="bg-[#0f0a1e]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to={createPageUrl("PartyDeck")}
              className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0f0a1e] rounded-lg"
              onClick={closeMobileMenu}
            >
              <img
                src={nvSoftLabIcon}
                alt="NVSoftLab Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-lg sm:text-xl font-black bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent leading-none">
                  NVSoftLab
                </h1>
                <p className="text-xs text-purple-400 mt-0.5 hidden sm:block leading-none">Mobile App Studio</p>
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0f0a1e] ${
                      isActive ? link.activeColor : "text-purple-300 hover:text-white hover:bg-white/5"
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
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0f0a1e] transition-colors duration-200"
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
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        isActive ? link.activeColor : "text-purple-300 hover:text-white hover:bg-white/5"
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
      <footer className="bg-[#0f0a1e] border-t border-white/10 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NVSoftLab on Instagram"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white/80 font-bold text-sm hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              {/* Instagram gradient icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig-footer" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f9a825"/>
                    <stop offset="50%" stopColor="#e91e63"/>
                    <stop offset="100%" stopColor="#9c27b0"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-footer)" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="url(#ig-footer)" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-footer)"/>
              </svg>
              Instagram
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NVSoftLab on TikTok"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white/80 font-bold text-sm hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              {/* TikTok icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.14 8.14 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z"/>
              </svg>
              TikTok
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-purple-400">
              © 2026 NVSoftLab · Crafting games that bring people together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
