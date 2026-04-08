import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Users, Clock, Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";
import useScrollReveal from "../hooks/useScrollReveal";

// ── Image assets ─────────────────────────────────────────────────────────────
import splashImg from "../assets/pro-screen.png";
import nhieImg from "../assets/nhie.jpg";
import todImg from "../assets/tod.jpg";
import aliasImg from "../assets/game_alias.jpg";
import impostorImg from "../assets/impostor.jpg";
import drawImg from "../assets/draw_stories.jpg";
import charadesImg from "../assets/charades.jpg";
import wyrImg from "../assets/would_you_rather.jpg";
import wldrshImg from "../assets/wldrsh.jpg";
import bombImg from "../assets/bomb.jpg";
import mltImg from "../assets/most_likely_to.jpg";
import funnyImg from "../assets/funny_answers.jpg";
import waveLengthImg from "../assets/wavelength.jpg";
import tabooImg from "../assets/taboo.jpg";
import whosTheLiarImg from "../assets/whos_the_liar.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

const GAMES = [
  {
    name: "Never Have I Ever",
    desc: "Reveal secrets & spark wild confessions",
    img: nhieImg,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Truth or Dare",
    desc: "Answer honestly or accept the challenge",
    img: todImg,
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Alias",
    desc: "Race the clock - describe without saying",
    img: aliasImg,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Impostor",
    desc: "One liar, one word - can you find them?",
    img: impostorImg,
    gradient: "from-purple-500 to-violet-700",
  },
  {
    name: "Draw Stories",
    desc: "Sketch a story, watch it go off the rails",
    img: drawImg,
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    name: "Charades Up",
    desc: "Act it out - no words allowed",
    img: charadesImg,
    gradient: "from-green-400 to-teal-600",
  },
  {
    name: "Would You Rather",
    desc: "Pick a side - no easy answers here",
    img: wyrImg,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Most Likely To",
    desc: "Vote for who'd actually do it",
    img: mltImg,
    gradient: "from-violet-500 to-purple-700",
  },
  {
    name: "Funny Answers",
    desc: "The silliest answer wins every time",
    img: funnyImg,
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    name: "Word Rush",
    desc: "Spell fast, think faster - letters flying, time running out",
    img: wldrshImg,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    name: "Bomb",
    desc: "Pass it quick - the bomb explodes when time runs out",
    img: bombImg,
    gradient: "from-red-600 to-rose-800",
  },
  {
    name: "Wavelength",
    desc: "Get on the same frequency as your team",
    img: waveLengthImg,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Taboo Words",
    desc: "Describe it without saying the obvious",
    img: tabooImg,
    gradient: "from-red-700 to-pink-800",
  },
  {
    name: "Who's the Liar",
    desc: "Spot the fake before the group falls apart",
    img: whosTheLiarImg,
    gradient: "from-slate-600 to-gray-800",
  },
];

const FEATURED_GAMES = [
  {
    name: "Alias",
    tagline: "The ultimate word-guessing showdown",
    description:
      "One player describes, the rest guess - but the clock is ticking. The faster you talk, the more you score. Teams go head-to-head in a battle of quick thinking and even quicker tongues.",
    players: "2 – 10 players",
    duration: "20 – 60 min",
    category: "Word Game",
    categoryColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    gradient: "from-yellow-400 to-orange-500",
    img: aliasImg,
    accent: "text-orange-400",
    glow: "shadow-orange-500/40",
    howToPlay: [
      "Split into two or more teams",
      "One player describes words - no saying the word itself",
      "Teammates guess as many as they can before time runs out",
      "Switch turns and see who scores the most",
    ],
  },
  {
    name: "Impostor",
    tagline: "Trust no one. Suspect everyone.",
    description:
      "Everyone sees the same secret word - except one person. The Impostor has to bluff their way through the conversation without getting caught. One wrong clue and it's game over.",
    players: "3 – 10 players",
    duration: "15 – 30 min",
    category: "Social Deduction",
    categoryColor: "bg-red-500/20 text-red-300 border-red-500/30",
    gradient: "from-red-700 to-rose-600",
    img: impostorImg,
    accent: "text-red-400",
    glow: "shadow-red-500/40",
    howToPlay: [
      "Everyone gets the same word - except the Impostor",
      "Go around the table giving one-word clues",
      "Discuss, debate, and vote on who's faking it",
      "Impostor wins by staying hidden - the group wins by catching them",
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StoreCards() {
  return (
    <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
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
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-14 items-center`}
    >
      <div
        className={`w-full lg:w-5/12 ${
          reversed ? "reveal-right" : "reveal-left"
        }`}
      >
        <img
          src={game.img}
          alt={game.name}
          className={`w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl shadow-2xl ${game.glow} card-hover`}
        />
      </div>

      <div
        className={`w-full lg:w-7/12 ${
          reversed ? "reveal-left" : "reveal-right"
        }`}
      >
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-bold mb-3 ${game.categoryColor}`}
        >
          {game.category}
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          {game.name}
        </h3>
        <p className={`text-base font-bold mt-1 ${game.accent}`}>
          {game.tagline}
        </p>
        <p className="text-purple-200 mt-4 leading-relaxed text-base sm:text-lg">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
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

        <div className="mt-6">
          <p className="text-purple-400 text-xs font-black uppercase tracking-wider mb-3">
            How to Play
          </p>
          <ol className="space-y-2">
            {game.howToPlay.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${game.gradient} flex items-center justify-center text-white font-black text-xs`}
                >
                  {idx + 1}
                </span>
                <span className="text-purple-200 text-sm leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PartyDeck() {
  useScrollReveal();

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden text-center px-4 py-10 sm:py-14"
        style={{
          background:
            "radial-gradient(ellipse at top, #2d1060 0%, #0f0a1e 70%)",
        }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="anim-fade-in-down d-0 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-xs font-bold text-purple-200 mb-5">
            <Sparkles className="w-3.5 h-3.5" /> The Ultimate Party Game
            Collection
          </div>

          <div className="anim-scale-in d-200 mb-6">
            <img
              src={splashImg}
              alt="Party Deck"
              className="w-full max-w-xs sm:max-w-sm mx-auto anim-float drop-shadow-2xl rounded-3xl"
            />
          </div>

          <div className="anim-fade-in-up d-100 mt-2 mb-6">
            <StoreCards />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            <span className="anim-fade-in-up d-200 block">Party Deck -</span>
            <span className="anim-fade-in-up d-300 block text-orange-400">
              14 games, one app.
            </span>
          </h1>

          <p className="anim-fade-in-up d-400 text-base sm:text-lg text-purple-200 font-semibold mt-4 max-w-xl mx-auto leading-relaxed">
            Open it, pick a game, and start playing - your crew does the rest.
          </p>

          <div className="anim-fade-in-up d-500 flex flex-wrap gap-2 justify-center mt-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs font-bold text-purple-200">
              <Users className="w-3 h-3" /> 2 – 10 Players
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs font-bold text-purple-200">
              🎮 14 Games
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs font-bold text-purple-200">
              📱 iOS & Android
            </span>
          </div>

          <Link
            to={createPageUrl("OtherApps")}
            className="anim-fade-in d-700 inline-block text-purple-400 hover:text-orange-300 font-semibold text-sm mt-5 transition"
          >
            Explore our other apps →
          </Link>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[#1a0f3a]/80 border-y border-white/10 py-8">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-3xl font-black text-yellow-400">★★★★★</p>
            <p className="text-sm text-purple-300 mt-1">Top Rated</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-black text-white">14</p>
            <p className="text-sm text-purple-300 mt-1">Games & Growing</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-black text-white">2–10</p>
            <p className="text-sm text-purple-300 mt-1">Players per Game</p>
          </div>
        </div>
      </div>

      {/* ── All Games ── */}
      <section id="games" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase">
            Game Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pick a game. Any game.
          </h2>
          <p className="text-purple-300 mt-3 max-w-lg mx-auto text-lg">
            From icebreakers to all-night classics - every game is built for
            laughs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GAMES.map((game, i) => (
            <div
              key={game.name}
              className="flex items-stretch bg-[#1a0f3a]/70 border border-white/10 rounded-2xl overflow-hidden card-hover reveal-pop group"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Photo or gradient fallback */}
              <div className="w-28 sm:w-32 flex-shrink-0 overflow-hidden">
                {game.img ? (
                  <img
                    src={game.img}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${game.gradient} flex items-center justify-center text-3xl`}
                  >
                    {game.emoji}
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="flex flex-col justify-center p-4 min-h-[6rem]">
                <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                  {game.name}
                </h3>
                <p className="text-purple-300/80 text-xs sm:text-[13px] leading-snug mt-1">
                  {game.desc}
                </p>
              </div>
            </div>
          ))}

          {/* More games soon */}
          <div
            className="flex items-center justify-center bg-white/5 border border-dashed border-white/20 rounded-2xl overflow-hidden reveal-pop min-h-[6rem]"
            style={{ transitionDelay: `${GAMES.length * 0.06}s` }}
          >
            <div className="text-center px-4 py-5">
              <div className="text-2xl mb-1">✨</div>
              <p className="text-white font-extrabold text-sm">More games</p>
              <p className="text-purple-400 text-xs mt-0.5">coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Game Spotlights ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase">
            Fan Favourites
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Meet the games everyone loves
          </h2>
          <p className="text-purple-300 mt-3 max-w-xl mx-auto text-lg">
            Two of our most-played games - and we're just getting started.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {FEATURED_GAMES.map((game, i) => (
            <GameSpotlight key={game.name} game={game} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="max-w-4xl mx-auto px-4 pb-16 reveal-scale">
        <div className="bg-gradient-to-br from-[#2d1060] to-[#1a0f3a] border border-white/10 rounded-3xl p-8 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to play?
          </h2>
          <p className="text-purple-200 mt-4 text-lg max-w-lg mx-auto leading-relaxed">
            Grab your phone, gather your crew, and let Party Deck handle the
            rest.
          </p>
          <div className="mt-8">
            <StoreCards />
          </div>
        </div>
      </section>
    </div>
  );
}
