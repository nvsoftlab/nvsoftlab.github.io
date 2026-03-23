import {
  ArrowLeft,
  Car,
  Dices,
  Download,
  Feather,
  GraduationCap,
  HelpCircle,
  Layers,
  Repeat,
  Shield,
  Smartphone,
  Smile,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import appIcon from "../assets/dice.png";

const ACCENT       = "from-violet-500 to-purple-600";
const ACCENT_HOVER = "hover:from-violet-600 hover:to-purple-700";
const BORDER       = "border-violet-500/20 hover:border-violet-500/40";
const CARD_BG      = "bg-[#0f001a]/80";
const GLOW         = "hover:shadow-violet-900/30";

export default function DiceRoll() {
  const features = [
    {
      icon: Dices,
      title: "All Essential Dice",
      description: "D4, D6, D8, D10, D12, D20 — every die for D&D, Pathfinder, and beyond.",
    },
    {
      icon: Layers,
      title: "Clean & Minimalist",
      description: "No ads, no clutter. Just dice and results.",
    },
    {
      icon: Zap,
      title: "Instant Rolls, No Lag",
      description: "Tap and get your number. Smooth haptic feedback on every roll.",
    },
    {
      icon: Repeat,
      title: "Quick Dice Switching",
      description: "Swap between dice types in a single tap. No menus, no friction.",
    },
    {
      icon: Feather,
      title: "Lightweight & Optimised",
      description: "Tiny app, big performance. Runs perfectly on any device.",
    },
    {
      icon: Sparkles,
      title: "Continuous Improvements",
      description: "Regular updates with new features driven by player feedback.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Die",
      description: "Select from d4, d6, d8, d10, d12, or d20 — all the dice you need in one place.",
    },
    {
      step: "2",
      title: "Roll It",
      description: "Tap the die or shake your phone. Instant result with satisfying haptic feedback.",
    },
    {
      step: "3",
      title: "Keep Playing",
      description: "Switch dice in a tap, roll again, and keep your game moving without missing a beat.",
    },
  ];

  const perfectFor = [
    { icon: Users, text: "Tabletop nights with friends" },
    { icon: Shield, text: "RPG campaigns (D&D, Pathfinder)" },
    { icon: Car, text: "Travel gaming & emergencies" },
    { icon: GraduationCap, text: "Classrooms and creative activities" },
    { icon: Smile, text: "Fun learning tools & family games" },
    { icon: HelpCircle, text: "Anytime you need a random number!" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("OtherApps")}
          className="inline-flex items-center gap-2 text-violet-300 hover:text-purple-300 transition-colors duration-300 group text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Other Apps
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center mb-12 sm:mb-16">
        {/* App icon */}
        <div className="flex justify-center mb-6">
          <img
            src={appIcon}
            alt="Dice Roll"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl shadow-violet-900/60 ring-2 ring-violet-500/30"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
          <span className="text-base sm:text-lg">🎲</span>
          The Dice Set That Fits in Your Pocket
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Dice Roll
          <span className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent block`}>
            Your Pocket Dice Set
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-violet-100/80 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          D4 through D20, instant rolls, zero clutter. Built for tabletop gamers who left their dice at home — or just want something faster.
        </p>

        {/* Store buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button asChild size="lg"
            className={`bg-gradient-to-r ${ACCENT} ${ACCENT_HOVER} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}>
            <a href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-violet-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button asChild size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-purple-100">GET IT ON</div>
                <div className="text-sm sm:text-base font-bold">Google Play</div>
              </div>
            </a>
          </Button>
        </div>

        {/* Meta row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-violet-200/80 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">4.8 / 5</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-violet-500/30" />
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-violet-400" />
            <span className="font-semibold">2K+ Downloads</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-violet-500/30" />
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-purple-400" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">How It Works</h2>
          <p className="text-violet-200/70">Tap. Roll. Done.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((item, index) => (
            <Card key={index} className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}>
              <CardContent className="p-6 sm:p-8">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-black text-xl sm:text-2xl">{item.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-violet-100/70 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Built for Gamers</h2>
          <p className="text-violet-200/70">Everything you need, nothing you don't</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}>
              <CardContent className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-violet-100/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Made For</h2>
          <p className="text-violet-200/70">Whether you're rolling for initiative or just need a number</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perfectFor.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 sm:gap-4 ${CARD_BG} border ${BORDER} p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${ACCENT} rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-violet-100/80 font-medium text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <div className={`text-center bg-gradient-to-br from-violet-950/60 to-purple-950/40 border ${BORDER} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12`}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to Roll?</h2>
        <p className="text-violet-100/70 mb-8 max-w-2xl mx-auto">Download Dice Roll and never scramble for dice again.</p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button asChild size="lg"
            className={`bg-gradient-to-r ${ACCENT} ${ACCENT_HOVER} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}>
            <a href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-violet-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button asChild size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-purple-100">GET IT ON</div>
                <div className="text-sm sm:text-base font-bold">Google Play</div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
