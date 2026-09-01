import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Settings,
  Smartphone,
  Star,
  Users,
  Zap,
  Lock,
  Sparkles,
  Moon,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import appIcon from "../assets/exposed-ai.png";

const ACCENT = "from-rose-600 to-fuchsia-600";
const ACCENT_HOVER = "hover:from-rose-700 hover:to-fuchsia-700";
const BORDER = "border-rose-500/20 hover:border-rose-500/40";
const CARD_BG = "bg-[#1a0020]/80";
const GLOW = "hover:shadow-rose-900/30";

export default function ExposedAI() {
  const features = [
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "700+ Questions",
      description:
        "From sweet to spicy - every question designed to spark something real.",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Mood-Based Categories",
      description:
        "Romantic, playful, or daring. Pick the vibe that fits your night.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Share Your Stories",
      description:
        "The best moments happen when someone says 'okay, let me explain\u2026'",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Custom Categories",
      description: "Add your own questions and inside jokes. Make it personal.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "AI-Powered Questions",
      description:
        "Fresh questions every time - the AI keeps it unpredictable.",
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Access All Categories",
      description:
        "Unlock everything. Romantic, spicy, exclusive - it's all yours.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Mood",
      description:
        "Romantic, playful, or spicy - set the mood for your evening.",
    },
    {
      step: "2",
      title: "Answer Honestly",
      description:
        "Both swipe honestly. Green if you've done it, red if not - no hiding allowed.",
    },
    {
      step: "3",
      title: "Share Your Stories",
      description:
        "The stories that come out are the best part. Laugh, blush, and learn something new.",
    },
  ];

  const perfectFor = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Date Nights",
      desc: "Transform any evening into an adventure",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Anniversaries",
      desc: "Celebrate with conversations that actually matter",
    },
    {
      icon: <Moon className="w-6 h-6 text-white" />,
      title: "Long Distance",
      desc: "Stay connected from anywhere in the world",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "New Couples",
      desc: "Skip the small talk, get to the real stuff",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("OtherApps")}
          className="inline-flex items-center gap-2 text-rose-300 hover:text-fuchsia-300 transition-colors duration-300 text-sm sm:text-base"
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
            alt="Exposed AI"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl shadow-rose-900/60 ring-2 ring-rose-500/30"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          Couples Game App
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Exposed AI
          <span
            className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent block`}
          >
            Spice Up Date Night
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-rose-100/80 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          700+ questions that go way beyond 'how was your day.' Designed for
          couples who want deeper conversations, unexpected confessions, and
          nights they'll actually remember.
        </p>

        {/* Store buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className={`bg-gradient-to-r ${ACCENT} ${ACCENT_HOVER} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}
          >
            <a
              href="https://apps.apple.com/us/app/exposed-game-have-you-ever/id6751416602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-rose-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className={`bg-gradient-to-r from-fuchsia-700 to-rose-800 hover:from-fuchsia-800 hover:to-rose-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-fuchsia-200">GET IT ON</div>
                <div className="text-sm sm:text-base font-bold">
                  Google Play
                </div>
              </div>
            </a>
          </Button>
        </div>

        {/* Meta row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-rose-200/80 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">Available Now</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-rose-500/30" />
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-rose-400" />
            <span className="font-semibold">700+ Questions</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-rose-500/30" />
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-fuchsia-400" />
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
          <p className="text-rose-200/70">Three steps to a better date night</p>
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
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-rose-100/70 leading-relaxed">
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
          <p className="text-rose-200/70">Every stage of your relationship</p>
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
                <p className="text-xs text-rose-100/70">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Why Couples Love It
          </h2>
          <p className="text-rose-200/70">
            Everything you need for unforgettable evenings
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
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-rose-100/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <div
        className={`text-center bg-gradient-to-br from-rose-950/60 to-fuchsia-950/40 border ${BORDER} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12`}
      >
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
          Your Best Date Night Starts Here
        </h2>
        <p className="text-rose-100/70 mb-8 max-w-2xl mx-auto">
          Download Exposed AI and turn any evening into something you'll both
          remember.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className={`bg-gradient-to-r ${ACCENT} ${ACCENT_HOVER} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3`}
          >
            <a
              href="https://apps.apple.com/us/app/exposed-game-have-you-ever/id6751416602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-rose-100">Download on the</div>
                <div className="text-sm sm:text-base font-bold">App Store</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-fuchsia-700 to-rose-800 hover:from-fuchsia-800 hover:to-rose-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-xl flex items-center gap-3"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-fuchsia-200">GET IT ON</div>
                <div className="text-sm sm:text-base font-bold">
                  Google Play
                </div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
