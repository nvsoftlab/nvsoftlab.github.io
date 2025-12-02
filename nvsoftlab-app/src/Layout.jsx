import { Gamepad2, Heart, Home, Menu, MessageCircle, Moon, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import nvSoftLabIcon from "/favicon.png";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${currentPageName === "StrangeTruths" ? "bg-[#050510]" : "bg-gradient-to-br from-slate-50 via-teal-50 to-purple-50"}`}>
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
              onClick={closeMobileMenu}
            >
              <img
                src={nvSoftLabIcon}
                alt="NVSoftLab Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:to-purple-700 transition-all duration-300">
                  NVSoftLab
                </h1>
                <p className="text-xs text-slate-500 -mt-1 hidden sm:block">
                  Mobile App Studio
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 sm:gap-6">
              <Link
                to={createPageUrl("Home")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base ${
                  currentPageName === "Home"
                    ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link
                to={createPageUrl("ExposedAI")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base ${
                  currentPageName === "ExposedAI"
                    ? "bg-gradient-to-r from-red-100 to-pink-100 text-red-700"
                    : "text-slate-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <Heart className="w-4 h-4" />
                <span className="font-medium">Exposed AI</span>
              </Link>
              
              <Link
                to={createPageUrl("StrangeTruths")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base ${
                  currentPageName === "StrangeTruths"
                    ? "bg-gradient-to-r from-red-900 to-black text-white"
                    : "text-slate-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Strange Truths</span>
              </Link>
              
              <Link
                to={createPageUrl("HaveYouEver")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-sm sm:text-base ${
                  currentPageName === "HaveYouEver"
                    ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700"
                    : "text-slate-600 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">Have You Ever</span>
              </Link>
              
              <Link
                to={createPageUrl("DiceRoll")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base ${
                  currentPageName === "DiceRoll"
                    ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span className="font-medium">Dice Roll</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-slate-200/50">
              <div className="flex flex-col gap-2 pt-3 sm:pt-4">
                <Link
                  to={createPageUrl("Home")}
                  className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base ${
                    currentPageName === "Home"
                      ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700"
                      : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Home</span>
                </Link>
                
                <Link
                  to={createPageUrl("ExposedAI")}
                  className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base ${
                    currentPageName === "ExposedAI"
                      ? "bg-gradient-to-r from-red-100 to-pink-100 text-red-700"
                      : "text-slate-600 hover:text-red-600 hover:bg-red-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Exposed AI</span>
                </Link>
                
                <Link
                  to={createPageUrl("StrangeTruths")}
                  className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base ${
                    currentPageName === "StrangeTruths"
                      ? "bg-gradient-to-r from-red-900 to-black text-white"
                      : "text-slate-600 hover:text-red-600 hover:bg-red-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Strange Truths</span>
                </Link>
                
                <Link
                  to={createPageUrl("HaveYouEver")}
                  className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-sm sm:text-base ${
                    currentPageName === "HaveYouEver"
                      ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700"
                      : "text-slate-600 hover:text-pink-600 hover:bg-pink-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Have You Ever</span>
                </Link>
                
                <Link
                  to={createPageUrl("DiceRoll")}
                  className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base ${
                    currentPageName === "DiceRoll"
                      ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700"
                      : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Dice Roll</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-white/60 backdrop-blur-md border-t border-slate-200/50 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <p className="text-sm sm:text-base text-slate-600">
            © 2025 NVSoftLab. Crafting mobile experiences with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
