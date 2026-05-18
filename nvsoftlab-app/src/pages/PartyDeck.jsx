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
import mafiaImg from "../assets/mafia.jpg";
import scribbleImg from "../assets/scribble.jpg";
import unspokenImg from "../assets/unspoken.jpg";
import guessTheAgeImg from "../assets/guess_the_age.jpg";
import guessTheNumberImg from "../assets/guess_the_number.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

const GAMES = [
  {
    name: "Impostor",
    desc: "Trust no one. Suspect everyone.",
    img: impostorImg,
    gradient: "from-purple-500 to-violet-700",
  },
  {
    name: "Who's the Liar",
    desc: "Spot the lies hiding in plain sight",
    img: whosTheLiarImg,
    gradient: "from-slate-600 to-gray-800",
  },
  {
    name: "Mafia",
    desc: "The classic, in your pocket",
    img: mafiaImg,
    gradient: "from-gray-700 to-slate-900",
  },
  {
    name: "Alias",
    desc: "Describe fast. Guess faster.",
    img: aliasImg,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Word Rush",
    desc: "Quick-fire words. Say it, score it, next one.",
    img: wldrshImg,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    name: "Taboo",
    desc: "The right word is on the card - so is everything you can't say",
    img: tabooImg,
    gradient: "from-red-700 to-pink-800",
  },
  {
    name: "Charades",
    desc: "Hold the phone to your forehead. Let the chaos begin.",
    img: charadesImg,
    gradient: "from-green-400 to-teal-600",
  },
  {
    name: "Draw Stories",
    desc: "Telephone, but with drawings",
    img: drawImg,
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    name: "Scribble",
    desc: "Quick draws. Quick guesses. Quick laughs.",
    img: scribbleImg,
    gradient: "from-indigo-400 to-blue-700",
  },
  {
    name: "Funny Answers",
    desc: "Write the funniest answer. Let the table decide.",
    img: funnyImg,
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    name: "Wavelength",
    desc: "Find the same wavelength as the table",
    img: waveLengthImg,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Never Have I Ever",
    desc: "The classic - for any group, any age, any vibe",
    img: nhieImg,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Truth or Dare",
    desc: "Hundreds of fresh prompts, no awkward silences",
    img: todImg,
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Would You Rather",
    desc: "Two choices. No right answer. Hours of laughing about why.",
    img: wyrImg,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Unspoken",
    desc: "The questions that turn dinner into a real conversation",
    img: unspokenImg,
    gradient: "from-fuchsia-500 to-indigo-600",
  },
  {
    name: "Most Likely To",
    desc: "The funniest, most accurate person at the table - exposed",
    img: mltImg,
    gradient: "from-violet-500 to-purple-700",
  },
  {
    name: "Guess the Age",
    desc: "How old does each person sound? Time to find out.",
    img: guessTheAgeImg,
    gradient: "from-amber-500 to-orange-700",
  },
  {
    name: "Guess the Number",
    desc: "One secret number. A lot of bad guesses.",
    img: guessTheNumberImg,
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    name: "Bomb",
    desc: "The timer is ticking. The phone is in your hand. Pass it. Fast.",
    img: bombImg,
    gradient: "from-red-600 to-rose-800",
  },
];

const FEATURED_GAMES = [
  {
    name: "Mafia",
    tagline: "A classic, in your pocket.",
    description:
      "The full Mafia experience - roles, night phases, day votes - guided by the app. One player is the Game Master and runs the table; everyone else gets a secret role and tries to survive until dawn.",
    players: "5 – 20 players",
    duration: "30 – 60 min",
    category: "Social Deduction",
    categoryColor: "bg-slate-500/20 text-slate-200 border-slate-500/30",
    gradient: "from-gray-700 to-slate-900",
    img: mafiaImg,
    accent: "text-slate-300",
    glow: "shadow-slate-500/40",
    howToPlay: [
      "One player acts as Game Master and hands the phone around to deal secret roles.",
      "At night, the app wakes each role in turn - Mafia, Detective, Doctor, and more - to make their move.",
      "By day, the village debates who looks suspicious and votes someone out.",
      "Play continues night-by-day until either the Mafia is wiped out or they outnumber the village.",
    ],
  },
  {
    name: "Impostor",
    tagline: "Trust no one. Suspect everyone.",
    description:
      "Everyone at the table sees the same secret word - except one person. The Impostor has to bluff their way through the round without giving themselves away. One careful clue can save you; one wrong word and the table turns.",
    players: "3 – 12 players",
    duration: "20 – 45 min",
    category: "Social Deduction",
    categoryColor: "bg-red-500/20 text-red-300 border-red-500/30",
    gradient: "from-red-700 to-rose-600",
    img: impostorImg,
    accent: "text-red-400",
    glow: "shadow-red-500/40",
    howToPlay: [
      "Each player privately checks their card. Almost everyone sees the secret word; one or two see only a hint.",
      "Go around the circle, each person saying a single word that hints at the secret.",
      "Discuss who sounded off, then vote on who you think is the Impostor.",
      "Reveal the roles. If the group catches the Impostor, the group wins. If they bluff their way through, they win.",
    ],
  },
  {
    name: "Guess the Age",
    tagline: "How old does each person sound? Time to find out.",
    description:
      "Each player is secretly assigned a random age. Through casual questions and conversation, the table tries to guess everyone else's secret age - without giving away their own. Equal parts deduction, performance, and accidental impressions of your grandparents.",
    players: "2 – 12 players",
    duration: "15 – 30 min",
    category: "Deduction Game",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    gradient: "from-amber-500 to-orange-700",
    img: guessTheAgeImg,
    accent: "text-amber-400",
    glow: "shadow-amber-500/40",
    howToPlay: [
      "Each player secretly receives a random age.",
      "Take turns asking each other questions. Answer in character - without revealing your number.",
      "After the conversation, each player guesses everyone else's age.",
      "Exact guesses score big as Detective. Players who fooled the table score as Actors.",
    ],
  },
  {
    name: "Alias",
    tagline: "Describe fast. Guess faster.",
    description:
      "Two teams race to guess as many words as possible before the timer runs out. The describer can say almost anything - except the word itself. Pure laughter when someone fumbles for a synonym and the team yells out wild guesses.",
    players: "2 – 8 teams",
    duration: "20 – 40 min",
    category: "Team Word Game",
    categoryColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    gradient: "from-yellow-400 to-orange-500",
    img: aliasImg,
    accent: "text-orange-400",
    glow: "shadow-orange-500/40",
    howToPlay: [
      "Split into two or more teams. Pick a round length and a target score.",
      "One describer per team has 60 seconds to make their teammates guess as many words as possible.",
      "No saying the word, no translations, no pointing. Skip a word any time - but it costs you a point.",
      "Teams swap. First team to hit the target score wins.",
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
        className="bg-[#FF3D6E] hover:bg-[#FF1F55] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-70 cursor-not-allowed"
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
            <div className="text-xs text-white/70">Coming Soon</div>
            <div className="text-sm sm:text-base font-semibold">App Store</div>
          </div>
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="bg-[#1B7DF2] hover:bg-[#0B6CE0] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-70 cursor-not-allowed"
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
            <div className="text-xs text-white/70">Coming Soon</div>
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
        <p className="text-[#c8c8d0] mt-4 leading-relaxed text-base sm:text-lg">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-4 py-2">
            <Users className="w-4 h-4 text-[#a0a0a8]" />
            <span className="text-white font-bold text-sm">{game.players}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-4 py-2">
            <Clock className="w-4 h-4 text-[#a0a0a8]" />
            <span className="text-white font-bold text-sm">
              {game.duration}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[#7a7a82] text-xs font-black uppercase tracking-wider mb-3">
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
                <span className="text-[#c8c8d0] text-sm leading-relaxed">
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
        className="relative overflow-hidden text-center px-4 py-10 sm:py-14 bg-[#0a0a0a]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-72 bg-[#FF3D6E]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="anim-fade-in-down d-0 inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-3 py-1.5 text-xs font-bold text-white/80 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" /> The Ultimate
            Party Game Collection
          </div>

          <div className="anim-scale-in d-200 mb-6">
            <img
              src={splashImg}
              alt="Party Room"
              className="w-full max-w-xs sm:max-w-sm mx-auto drop-shadow-2xl rounded-3xl"
            />
          </div>

          <div className="anim-fade-in-up d-100 mt-2 mb-6">
            <StoreCards />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            <span className="anim-fade-in-up d-200 block">Party Room -</span>
            <span className="anim-fade-in-up d-300 block text-[#FF3D6E]">
              19+ party games. Zero planning.
            </span>
          </h1>

          <p className="anim-fade-in-up d-400 text-base sm:text-lg text-white/75 font-semibold mt-4 max-w-xl mx-auto leading-relaxed">
            One app for every kind of get-together - game nights, road trips,
            dinner parties, long weekends with family. Pick a game, grab your
            people, and you're in.
          </p>

          <div className="anim-fade-in-up d-500 flex flex-wrap gap-2 justify-center mt-4">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-white/80">
              <Users className="w-3 h-3" /> 1 – 20 Players
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-white/80">
              🎮 19+ Games
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-white/80">
              🌍 6+ Languages
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-white/80">
              📱 iOS & Android
            </span>
          </div>

          <Link
            to={createPageUrl("OtherApps")}
            className="anim-fade-in d-700 inline-block text-[#a0a0a8] hover:text-[#FF3D6E] font-semibold text-sm mt-5 transition"
          >
            Explore our other apps →
          </Link>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[#1a1a1a]/80 border-y border-white/10 py-8">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-3xl font-black text-[#FFE600]">★★★★★</p>
            <p className="text-sm text-[#a0a0a8] mt-1">Top Rated</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#FFE600]">19+</p>
            <p className="text-sm text-[#a0a0a8] mt-1">Games & Growing</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#FF3D6E]">1–20</p>
            <p className="text-sm text-[#a0a0a8] mt-1">Players per Game</p>
          </div>
        </div>
      </div>

      {/* ── Featured Game Spotlights ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#FF3D6E]/15 border border-[#FF3D6E]/40 text-[#FF6E8E] rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase">
            Fan Favourites
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Meet the games everyone loves
          </h2>
          <p className="text-[#a0a0a8] mt-3 max-w-xl mx-auto text-lg">
            A few of our most-played games - and we're just getting started.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {FEATURED_GAMES.map((game, i) => (
            <GameSpotlight key={game.name} game={game} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ── All Games ── */}
      <section id="games" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-[#FFE600]/15 border border-[#FFE600]/40 text-[#FFE600] rounded-full px-4 py-1.5 text-xs font-bold mb-4 tracking-widest uppercase">
            Game Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pick a game. Any game.
          </h2>
          <p className="text-[#a0a0a8] mt-3 max-w-lg mx-auto text-lg">
            From icebreakers to all-night classics - every game is built for
            laughs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GAMES.map((game, i) => (
            <div
              key={game.name}
              className="flex items-stretch bg-[#1a1a1a]/70 border border-white/10 rounded-2xl overflow-hidden card-hover reveal-pop group"
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
                <p className="text-[#9a9aa3] text-xs sm:text-[13px] leading-snug mt-1">
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
              <p className="text-[#7a7a82] text-xs mt-0.5">coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="max-w-4xl mx-auto px-4 pb-16 reveal-scale">
        <div className="relative overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 sm:p-16 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-[#FF3D6E]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to play?
          </h2>
          <p className="text-[#c8c8d0] mt-4 text-lg max-w-lg mx-auto leading-relaxed">
            Open the app, pick a game, and the table is alive again. No
            accounts, no logins, no rulebooks.
          </p>
          <div className="mt-8">
            <StoreCards />
          </div>
        </div>
      </section>
    </div>
  );
}
