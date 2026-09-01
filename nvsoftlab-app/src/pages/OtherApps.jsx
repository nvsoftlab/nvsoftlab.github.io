import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

import exposedAIIcon from "../assets/exposed-ai.png";
import haveYouEverIcon from "../assets/have-you-ever.png";
import strangeTruthsIcon from "../assets/upside-down.png";
import diceIcon from "../assets/dice.png";

const OTHER_APPS = [
  {
    name: "Exposed AI",
    tagline: "For Couples",
    gradient: "from-rose-700 to-fuchsia-800",
    border: "border-rose-500/20 hover:border-rose-500/50",
    glow: "hover:shadow-rose-900/40",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/20",
    accent: "text-rose-400",
    route: "ExposedAI",
    platform: "App Store & Google Play",
    tags: ["Couples", "700+ Questions", "AI-Powered"],
    description:
      "700+ intimate questions designed to go beyond small talk. Rediscover each other, spark deeper conversations, and turn a quiet evening into something unforgettable.",
    icon: exposedAIIcon,
  },
  {
    name: "Have You Ever",
    tagline: "Party Game",
    gradient: "from-purple-600 to-pink-600",
    border: "border-purple-500/20 hover:border-purple-500/50",
    glow: "hover:shadow-purple-900/40",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    accent: "text-purple-400",
    route: "HaveYouEver",
    platform: "Google Play",
    tags: ["Friends & Couples", "30+ Categories", "1500+ Questions"],
    description:
      "The party game that never gets old. 1500+ questions across 30+ categories - from laugh-out-loud funny to surprisingly personal. Works for any group, any vibe.",
    icon: haveYouEverIcon,
  },
  {
    name: "Strange Truths",
    tagline: "Mind-Bending Facts",
    gradient: "from-amber-700 to-orange-900",
    border: "border-amber-500/20 hover:border-amber-500/50",
    glow: "hover:shadow-amber-900/40",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/20",
    accent: "text-amber-400",
    route: "StrangeTruths",
    platform: "App Store",
    tags: ["Trivia", "Bizarre Facts", "True or False"],
    description:
      "Swipe through genuinely shocking facts and decide - real or fake? The kind of trivia that starts arguments and makes everyone feel smarter (or dumber).",
    icon: strangeTruthsIcon,
  },
  {
    name: "Dice Roll",
    tagline: "Your Pocket Dice Set",
    gradient: "from-violet-600 to-purple-700",
    border: "border-violet-500/20 hover:border-violet-500/50",
    glow: "hover:shadow-violet-900/40",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/20",
    accent: "text-violet-400",
    route: "DiceRoll",
    platform: "App Store & Google Play",
    tags: ["D&D", "Tabletop RPG", "All Dice Types"],
    description:
      "D4 through D20, always in your pocket. Clean design, instant rolls, zero distractions - for when the dungeon master calls and your dice bag is at home.",
    icon: diceIcon,
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/party_room_app";
const TIKTOK_URL = "https://www.tiktok.com/@party_room_app";

export default function OtherApps() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-14 anim-fade-in-up">
          <span className="inline-block bg-[#FF3D6E]/10 border border-[#FF3D6E]/20 text-[#FF3D6E]/80 rounded-full px-4 py-1.5 text-[11px] font-bold mb-5 tracking-widest uppercase">
            NVSoftLab
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Our Apps
          </h1>
          <p className="text-white/50 text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            We're a small indie studio driven by one goal: building
            simple, fun apps that bring people together.
          </p>

          {/* Social links */}
          <div className="flex gap-3 justify-center mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f9a825 0%, #e91e63 50%, #9c27b0 100%)" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111] border border-white/15 rounded-xl px-4 py-2 text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.14 8.14 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>

        {/* Apps list */}
        <div className="flex flex-col gap-5">
          {OTHER_APPS.map((app, i) => (
            <Link
              key={app.name}
              to={createPageUrl(app.route)}
              className={`group flex gap-5 sm:gap-6 bg-white/5 backdrop-blur-sm border ${app.border} rounded-2xl p-4 sm:p-5 shadow-lg ${app.glow} hover:shadow-xl transition-all duration-300 reveal-pop`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Square icon */}
              <div
                className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${app.gradient} overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300`}
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-white leading-tight">
                      {app.name}
                    </h2>
                    <p
                      className={`text-xs font-bold uppercase tracking-wide mt-0.5 ${app.accent}`}
                    >
                      {app.tagline}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-bold border rounded-full px-2.5 py-1 ${app.badge}`}
                  >
                    {app.platform}
                  </span>
                </div>

                <p className="text-purple-200/80 text-sm mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {app.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className={`hidden sm:flex flex-shrink-0 items-center ${app.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              >
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
