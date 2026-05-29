import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Users, Clock, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import useScrollReveal from "../hooks/useScrollReveal";

import heroImg from "../assets/welcome-screen.png";
import aliasImg from "../assets/game_alias.jpg";

import impostorImg from "../assets/impostor.jpg";

const HERO_IMG = heroImg;
const ALIAS_IMG = aliasImg;
const IMPOSTOR_IMG = impostorImg;

// ── Data ──────────────────────────────────────────────────────────────────────

const PREVIEW_GAMES = [
  {
    name: "Never Have I Ever",
    emoji: "🙋",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Truth or Dare",
    emoji: "🎯",
    gradient: "from-orange-500 to-red-600",
  },
  { name: "Alias", emoji: "💬", gradient: "from-yellow-400 to-orange-500" },
  { name: "Impostor", emoji: "🕵️", gradient: "from-purple-500 to-violet-700" },
  {
    name: "Draw Stories",
    emoji: "✏️",
    gradient: "from-blue-400 to-indigo-600",
  },
  { name: "Charades Up", emoji: "🤣", gradient: "from-green-400 to-teal-600" },
];

const FEATURED_GAMES = [
  {
    name: "Alias",
    tagline: "The ultimate word-guessing race",
    description:
      "Race against the clock! One player describes words without saying them - teammates guess as many as possible before time runs out. The fastest talkers win!",
    players: "2 - 10 players",
    duration: "20 - 60 min",
    category: "Word Game",
    categoryColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    gradient: "from-yellow-400 to-orange-500",
    emoji: "💬",
    img: ALIAS_IMG,
    accent: "text-orange-400",
    glow: "shadow-orange-500/30",
  },
  {
    name: "Impostor",
    tagline: "One of you is lying. Find them.",
    description:
      "Everyone gets the same secret word - except one Impostor who gets something different. They must bluff their way through discussion without being caught. Can you spot the liar?",
    players: "3 - 10 players",
    duration: "15 - 30 min",
    category: "Social Deduction",
    categoryColor: "bg-red-500/20 text-red-300 border-red-500/30",
    gradient: "from-red-700 to-rose-600",
    emoji: "🕵️",
    img: IMPOSTOR_IMG,
    accent: "text-red-400",
    glow: "shadow-red-500/30",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StoreCards({ centered = false }) {
  return (
    <div
      className={`flex flex-row items-center gap-3 sm:gap-4 flex-wrap ${
        centered ? "justify-center" : "justify-center lg:justify-start"
      }`}
    >
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-70 cursor-not-allowed"
        disabled
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 justify-center pointer-events-none"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className="text-xs text-orange-100">Coming Soon</div>
            <div className="text-sm sm:text-base font-semibold">App Store</div>
          </div>
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-70 cursor-not-allowed"
        disabled
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 justify-center pointer-events-none"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
          </svg>
          <div className="text-left">
            <div className="text-xs text-purple-100">Coming Soon</div>
            <div className="text-sm sm:text-base font-semibold">
              Google Play
            </div>
          </div>
        </a>
      </Button>
    </div>
  );
}

function GameSpotlight({ game, reversed }) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`w-full lg:w-1/2 ${
          reversed ? "reveal-right" : "reveal-left"
        }`}
      >
        {game.img ? (
          <img
            src={game.img}
            alt={game.name}
            className={`w-full max-w-sm mx-auto rounded-3xl shadow-2xl ${game.glow} card-hover`}
          />
        ) : (
          <div
            className={`w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl bg-gradient-to-br ${game.gradient} flex flex-col items-center justify-end p-8 shadow-2xl card-hover`}
          >
            <span className="text-8xl mb-4">{game.emoji}</span>
            <span className="text-white font-black text-3xl">{game.name}</span>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className={`w-full lg:w-1/2 ${
          reversed ? "reveal-left" : "reveal-right"
        }`}
      >
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-bold mb-4 ${game.categoryColor}`}
        >
          {game.category}
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          {game.name}
        </h3>
        <p className={`text-lg font-bold mt-1 ${game.accent}`}>
          {game.tagline}
        </p>
        <p className="text-purple-200 mt-4 leading-relaxed text-base sm:text-lg">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-4 py-2">
            <Users className="w-4 h-4 text-purple-300" />
            <span className="text-white font-bold text-sm">{game.players}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-4 py-2">
            <Clock className="w-4 h-4 text-purple-300" />
            <span className="text-white font-bold text-sm">
              {game.duration}
            </span>
          </div>
        </div>

        <Link
          to={createPageUrl("PartyDeck")}
          className={`inline-flex items-center gap-2 mt-6 font-black text-lg ${game.accent} hover:opacity-80 transition`}
        >
          Play in Party Deck →
        </Link>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollReveal();

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden px-4 pt-16 pb-12 sm:pt-24 sm:pb-16"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, #2d1060 0%, #0f0a1e 65%)",
        }}
      >
        {/* Decorative glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="anim-fade-in-down d-0 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-bold text-purple-200 mb-6">
                🏆 #1 Party App · 500,000+ Players Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                <span className="anim-fade-in-up d-200 block">No more</span>
                <span className="anim-fade-in-up d-300 block shimmer-text">
                  "so… what should
                  <br className="hidden sm:block" /> we do?"
                </span>
              </h1>

              <p className="anim-fade-in-up d-500 text-lg sm:text-xl text-purple-200 font-semibold mt-5 max-w-lg mx-auto lg:mx-0">
                Loads of party games, ready in seconds. Zero planning needed.
              </p>

              {/* App info pills */}
              <div className="anim-fade-in-up d-600 flex flex-wrap gap-3 justify-center lg:justify-start mt-5">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-bold text-purple-200">
                  <Users className="w-3.5 h-3.5" /> 2 - 10 Players
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-bold text-purple-200">
                  🎮 10+ Games
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-bold text-purple-200">
                  ✨ Free to Play
                </span>
              </div>

              <div className="anim-fade-in-up d-700 mt-8">
                <StoreCards />
              </div>

              <div className="anim-fade-in d-1000 mt-6">
                <Link
                  to={createPageUrl("OtherApps")}
                  className="text-purple-400 hover:text-white font-semibold text-sm transition"
                >
                  See our other apps →
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="flex-1 flex justify-center lg:justify-end anim-scale-in d-400">
              {HERO_IMG ? (
                <img
                  src={HERO_IMG}
                  alt="Party Deck"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl anim-float drop-shadow-2xl"
                />
              ) : (
                /* Fallback: floating game card mosaic */
                <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                  {PREVIEW_GAMES.slice(0, 4).map((g, i) => {
                    const positions = [
                      "top-0 left-0",
                      "top-0 right-0",
                      "bottom-0 left-0",
                      "bottom-0 right-0",
                    ];
                    const delays = [
                      "anim-float d-0",
                      "anim-float-alt d-200",
                      "anim-float d-400",
                      "anim-float-alt d-600",
                    ];
                    return (
                      <div
                        key={g.name}
                        className={`absolute w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br ${g.gradient} flex flex-col items-start justify-end p-3 ${positions[i]} ${delays[i]} shadow-xl`}
                      >
                        <span className="text-3xl">{g.emoji}</span>
                        <span className="text-white font-black text-xs leading-tight mt-1">
                          {g.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-[#1a0f3a]/80 border-y border-white/10 py-6">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-14">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">500K+</p>
            <p className="text-xs text-purple-300 mt-0.5">Players Worldwide</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-yellow-400">
              ★★★★★
            </p>
            <p className="text-xs text-purple-300 mt-0.5">4.9 Rating</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">10+</p>
            <p className="text-xs text-purple-300 mt-0.5">Party Games</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">2-10</p>
            <p className="text-xs text-purple-300 mt-0.5">Players per Game</p>
          </div>
        </div>
      </div>

      {/* ── Games preview grid ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            10+ Games. One App.
          </h2>
          <p className="text-purple-300 mt-3">
            Every game your party needs, always in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 stagger-children reveal">
          {PREVIEW_GAMES.map((game) => (
            <div
              key={game.name}
              className={`relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br ${game.gradient} card-hover cursor-default`}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div />
                <div>
                  <span className="text-4xl sm:text-5xl block mb-2">
                    {game.emoji}
                  </span>
                  <p className="font-black text-white text-xs sm:text-sm leading-tight">
                    {game.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <Link
            to={createPageUrl("PartyDeck")}
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-black text-lg transition"
          >
            See all 12 games →
          </Link>
        </div>
      </section>

      {/* ── Featured Game Spotlights ── */}
      <section className="max-w-5xl mx-auto px-4 py-8 pb-16">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full px-4 py-1.5 text-xs font-bold mb-4">
            FEATURED GAMES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pick your game. Start the fun.
          </h2>
          <p className="text-purple-300 mt-3 max-w-xl mx-auto">
            From word-guessing races to social deduction - every game is built
            for unforgettable moments.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {FEATURED_GAMES.map((game, i) => (
            <GameSpotlight key={game.name} game={game} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="max-w-4xl mx-auto px-4 pb-16 reveal-scale">
        <div className="bg-[#1a0f3a]/60 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-7 h-7 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-purple-200 italic text-lg max-w-md mx-auto">
            "Absolute must-have for game nights. We fire it up every single
            time."
          </p>
          <p className="text-purple-400 text-sm mt-3">- Mia 🎉</p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-3xl font-black text-white">🏆</span>
            <div className="text-left">
              <p className="text-white font-black text-lg leading-tight">
                500,000+ Players
              </p>
              <p className="text-purple-300 text-sm">#1 Party Game App</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="text-center px-4 pb-20 reveal">
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Ready to start the party?
        </h2>
        <p className="text-purple-200 mt-3 text-lg">
          Free to download. No account needed.
        </p>
        <div className="flex justify-center mt-8">
          <StoreCards />
        </div>
        <Link
          to={createPageUrl("PartyDeck")}
          className="inline-block text-orange-400 hover:text-orange-300 font-black text-lg mt-6 transition"
        >
          Explore all games →
        </Link>
      </section>
    </div>
  );
}
