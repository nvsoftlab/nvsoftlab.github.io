import {
  ArrowLeft,
  MessageCircle,
  Settings,
  Smartphone,
  Star,
  Users,
  Zap,
  Lock,
  Heart,
  Tv,
  Bed,
  Car,
  Gamepad2,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import appIcon from "../assets/upside-down.png";

const ACCENT = "from-amber-600 to-orange-600";
const ACCENT_HOVER = "hover:from-amber-700 hover:to-orange-700";
const BORDER = "border-amber-500/20 hover:border-amber-500/40";
const CARD_BG = "bg-[#1a0f00]/80";
const GLOW = "hover:shadow-amber-900/30";

export default function StrangeTruths() {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Bizarre Facts & Questions",
      description:
        "Hundreds of facts so wild you won't believe they're real - until you see the proof.",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Fun Game Modes",
      description:
        "Multiple categories and custom decks so every session feels different.",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Debate & Laugh",
      description:
        "The reveal is where it gets loud. Defend your guess or admit you had no idea.",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Custom Categories",
      description: "Add your own facts and inside jokes to stump your friends.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Infinite Replayability",
      description:
        "New facts added regularly - you'll never run out of surprises.",
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Lifetime Access",
      description:
        "One purchase, everything unlocked. No subscriptions, no limits.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Category",
      description:
        "Browse themed decks or build your own - from science to history to the downright bizarre.",
    },
    {
      step: "2",
      title: "Make Your Guess",
      description:
        "Swipe right for true, left for false. Sounds easy - until the facts get weird.",
    },
    {
      step: "3",
      title: "Face the Truth",
      description:
        "See the real answer and watch the room erupt. Wrong guesses lead to the best arguments.",
    },
  ];

  const perfectFor = [
    {
      icon: <Tv className="w-6 h-6 text-white" />,
      title: "Watch Parties",
      desc: "Perfect way to kill time while waiting for the new season",
    },
    {
      icon: <Bed className="w-6 h-6 text-white" />,
      title: "Sleepovers",
      desc: "Turn off the lights and make the night a little spookier",
    },
    {
      icon: <Car className="w-6 h-6 text-white" />,
      title: "Road Trips",
      desc: "Play offline anywhere - even in the middle of nowhere",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Ice Breakers",
      desc: "Find out who in your group knows the strangest truths",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("OtherApps")}
          className="inline-flex items-center gap-2 text-amber-300 hover:text-orange-300 transition-colors duration-300 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Other Apps
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center mb-16 sm:mb-20">
        {/* App icon */}
        <div className="flex justify-center mb-6">
          <img
            src={appIcon}
            alt="Strange Truths"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl shadow-amber-900/60 ring-2 ring-amber-500/30"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          Trivia & Facts
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Strange Truths
          <span
            className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent block`}
          >
            Can You Handle the Truth?
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-amber-100/80 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Swipe through jaw-dropping facts and decide - is it real or completely
          made up? The kind of trivia that sparks heated debates, wild theories,
          and makes everyone question everything.
        </p>

        {/* Store buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className={`bg-gradient-to-r ${ACCENT} hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}
          >
            <a
              href="https://apps.apple.com/us/app/strange-truths-80s-party-game/id6755719086"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-amber-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            disabled
            className="bg-gradient-to-r from-orange-700 to-amber-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3 opacity-60 cursor-not-allowed"
          >
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 justify-center pointer-events-none">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-orange-200">Coming Soon</div>
                <div className="text-sm sm:text-base font-bold">Google Play</div>
              </div>
            </a>
          </Button>
        </div>

        {/* Meta row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-amber-200/80 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">Available on App Store</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-amber-500/30" />
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <span className="font-semibold">Bizarre Facts & Questions</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-amber-500/30" />
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            How It Works
          </h2>
          <p className="text-amber-200/70">Swipe. Guess. Get shocked.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((item, index) => (
            <Card
              key={index}
              className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}
            >
              <CardContent className="p-6 sm:p-8">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-black text-xl sm:text-2xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-amber-100/70 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Perfect For
          </h2>
          <p className="text-amber-200/70">Works anywhere, anytime</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {perfectFor.map((item, index) => (
            <Card
              key={index}
              className={`${CARD_BG} border ${BORDER} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${ACCENT} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-100/70">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            What Makes It Addictive
          </h2>
          <p className="text-amber-200/70">
            The kind of details that keep you coming back
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}
            >
              <CardContent className="p-4 sm:p-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-amber-100/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <div
        className={`text-center bg-gradient-to-br from-amber-950/60 to-orange-950/40 border ${BORDER} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12`}
      >
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
          Think You Know Everything?
        </h2>
        <p className="text-amber-100/70 mb-8 max-w-2xl mx-auto">
          Download Strange Truths and prove it. Fair warning - you'll be wrong
          more than you think.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className={`bg-gradient-to-r ${ACCENT} hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}
          >
            <a
              href="https://apps.apple.com/us/app/strange-truths-80s-party-game/id6755719086"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-amber-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            disabled
            className="bg-gradient-to-r from-orange-700 to-amber-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3 opacity-60 cursor-not-allowed"
          >
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 justify-center pointer-events-none">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-orange-200">Coming Soon</div>
                <div className="text-sm sm:text-base font-bold">Google Play</div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
