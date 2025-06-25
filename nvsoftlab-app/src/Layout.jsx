import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Home } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 group transition-all duration-300"
            >
              <img
                src="public/favicon.png"
                alt="NVSoftLab Logo"
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:to-purple-700 transition-all duration-300">
                  NVSoftLab
                </h1>
                <p className="text-xs text-slate-500 -mt-1">
                  Mobile App Studio
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                to={createPageUrl("Home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPageName === "Home"
                    ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-white/60 backdrop-blur-md border-t border-slate-200/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-600">
            © 2025 NVSoftLab. Crafting mobile experiences with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
