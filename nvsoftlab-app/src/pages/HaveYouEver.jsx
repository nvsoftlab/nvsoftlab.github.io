import {
  ArrowLeft,
  Car,
  Coffee,
  Gamepad2,
  Heart,
  Home,
  MessageCircle,
  PartyPopper,
  Settings,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import appIcon from "../assets/have-you-ever.png";

const ACCENT       = "from-purple-500 to-pink-600";
const ACCENT_HOVER = "hover:from-purple-600 hover:to-pink-700";
const BORDER       = "border-pink-500/20 hover:border-pink-500/40";
const CARD_BG      = "bg-[#1a0030]/80";
const GLOW         = "hover:shadow-pink-900/30";

export default function HaveYouEver() {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Massive Question Library",
      description: "1500+ questions across 30+ categories. You'll never repeat one.",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Questions for Friends",
      description: "The kind of questions that make you say 'wait, YOU did that?'",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Questions for Couples",
      description: "Go beyond Netflix. Actually learn something about each other.",
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Spicy Questions",
      description: "For groups that can handle the truth. Adults only.",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Create Custom Categories",
      description: "Add your own questions and inside jokes for your crew.",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "AI Question Generation",
      description: "Run out of questions? The AI writes new ones on the spot.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Pick a Category",
      description: "30+ themed decks — Friends, Couples, Spicy, Family, and way more.",
    },
    {
      step: "2",
      title: "Read the Question",
      description: "Someone reads a 'Have You Ever\u2026' question. The room goes quiet.",
    },
    {
      step: "3",
      title: "Answer & React",
      description: "Hands go up. Stories come out. Friendships are tested. Everyone laughs.",
    },
  ];

  const perfectFor = [
    { icon: <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Birthday parties that people actually remember" },
    { icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Casual hangouts that turn into all-night sessions" },
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Date nights that skip the awkward silence" },
    { icon: <Car className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Road trips where nobody touches their phone" },
    { icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Family nights that bring everyone closer" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: "Icebreakers that actually work" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("OtherApps")}
          className="inline-flex items-center gap-2 text-pink-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base"
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
            alt="Have You Ever"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl shadow-pink-900/60 ring-2 ring-pink-500/30"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          Party Game App
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Have You Ever
          <span className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent block`}>
            The Party Starter
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-pink-100/80 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          1500+ questions across 30+ categories that turn any hangout into a night to remember. From hilarious confessions to jaw-dropping reveals — this is the game everyone talks about the next day.
        </p>

        {/* Store buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button asChild size="lg" disabled
            className={`bg-gradient-to-r ${ACCENT} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3 opacity-60 cursor-not-allowed`}>
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 justify-center pointer-events-none">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-pink-100">Coming Soon</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button asChild size="lg"
            className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}>
            <a href="https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-pink-200/80 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">4.9 / 5</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-pink-500/30" />
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-pink-400" />
            <span className="font-semibold">30+ Categories</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-pink-500/30" />
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
          <p className="text-pink-200/70">Dead simple. Endlessly fun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((item, index) => (
            <Card key={index} className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}>
              <CardContent className="p-6 sm:p-8">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-black text-xl sm:text-2xl">{item.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-pink-100/70 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Why Everyone's Playing</h2>
          <p className="text-pink-200/70">Built for real moments, not small talk</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`${CARD_BG} backdrop-blur-sm border ${BORDER} shadow-lg ${GLOW} hover:shadow-xl transition-all duration-300 group`}>
              <CardContent className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${ACCENT} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-pink-100/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Made For Every Occasion</h2>
          <p className="text-pink-200/70">Any group, any vibe, any time</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perfectFor.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 sm:gap-4 ${CARD_BG} border ${BORDER} p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${ACCENT} rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <p className="text-pink-100/80 font-medium text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <div className={`text-center bg-gradient-to-br from-pink-950/60 to-purple-950/40 border ${BORDER} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12`}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">The Best Nights Start with One Question</h2>
        <p className="text-pink-100/70 mb-8 max-w-2xl mx-auto">Download Have You Ever and find out what your friends have really been up to.</p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" disabled
            className={`bg-gradient-to-r ${ACCENT} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3 opacity-60 cursor-not-allowed`}>
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 justify-center pointer-events-none">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-pink-100">Coming Soon</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button asChild size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center">
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
