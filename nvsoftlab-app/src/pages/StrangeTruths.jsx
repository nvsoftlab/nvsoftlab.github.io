import {
  ArrowLeft,
  Download,
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

export default function StrangeTruths() {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Bizarre Facts & Questions",
      description:
        "Test your knowledge with questions designed to spark debates and reveal secrets.",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Fun Game Modes",
      description:
        "Select from different categories or create your own deck for a unique experience.",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Debate & Laugh",
      description:
        "When the truth is revealed, defend your answer! Hear hilarious excuses and shocking admissions.",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Custom Categories",
      description: "Create your own custom categories and add inside jokes for your friends.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Infinite Replayability",
      description:
        "Create custom questions to keep every round unique, fun, and intriguing.",
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Lifetime Access",
      description:
        "Unlock all mysteries with a simple one-time purchase. No subscriptions.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Category",
      description:
        "Pick from a variety of categories or create your own custom deck that matches your party's vibe.",
    },
    {
      step: "2",
      title: "Make Your Guess",
      description:
        "Swipe RIGHT for \"True\" or LEFT for \"False\". Is the fact real or fake? Be honest — friends don't lie!",
    },
    {
      step: "3",
      title: "Face the Truth",
      description:
        "Read the answer! This is where the debates start — shocking twists and hilarious scenarios that test your knowledge.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 bg-black/80 text-white/90 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#B71C1C]/30">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          Party Game App
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Strange Truths
          <span className="text-[#B71C1C] block">
            Uncover Bizarre Facts
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Explore bizarre facts that test your knowledge. Choose your category and guess the truth. Is it real or fake? Face strange truths with shocking twists.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-white/90">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
                  App Store
                </div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-white/90">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#B71C1C]" />
            <span className="font-semibold">Coming Soon</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#B71C1C]" />
            <span className="font-semibold">Bizarre Facts & Questions</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#B71C1C]" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Three simple steps to test your knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {howItWorks.map((item, index) => (
            <Card
              key={index}
              className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#B71C1C] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#B71C1C] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Perfect For
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Whether you are a trivia master or just love strange facts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Watch Parties
              </h3>
              <p className="text-sm text-white/90">
                The perfect way to kill time while waiting for the new season.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Sleepovers
              </h3>
              <p className="text-sm text-white/90">
                Turn off the lights and make the night a little spookier.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Road Trips
              </h3>
              <p className="text-sm text-white/90">
                Play offline anywhere — even in the middle of nowhere.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Ice Breakers
              </h3>
              <p className="text-sm text-white/90">
                Find out who in your group knows the strangest truths.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Why Choose Strange Truths?
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Packed with bizarre facts that make every game night unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/80 border border-[#B71C1C]/30 shadow-lg hover:shadow-xl hover:border-[#B71C1C]/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#B71C1C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#B71C1C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center bg-black/80 border border-[#B71C1C]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Ready to Uncover the Truth?
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Download Strange Truths now and transform your hangouts into exciting adventures of bizarre facts, laughter, and fun!
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-white/90">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
                  App Store
                </div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-white/90">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
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

