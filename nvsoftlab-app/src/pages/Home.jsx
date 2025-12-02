import {
  ArrowRight,
  Code,
  Download,
  ExternalLink,
  Heart,
  Instagram,
  Smartphone,
  Star,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import diceIcon from "../../src/assets/dice.png";
import exposedAIIcon from "../../src/assets/exposed-ai.png";
import haveYouEverIcon from "../../src/assets/have-you-ever.png";
import tikTokIcon from "../../src/assets/tiktok.png";
import strangeTruthsIcon from "../../src/assets/upside-down.png";

export default function Home() {
  const comingSoonApps = [
    {
      name: "Truth or Dare",
      description:
        "Classic party game with exciting challenges and revealing questions",
      status: "Design Phase",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Would You Rather?",
      description: "Thought-provoking dilemmas that will make you think twice",
      status: "Planning",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Two Truths and a Lie",
      description: "Discover secrets and lies in this classic icebreaker game",
      status: "Coming Soon",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "QuizBattle",
      description:
        "Competitive trivia battles with friends across multiple categories",
      status: "In Development",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "SparkTime",
      description: "Creative conversation starters for meaningful connections",
      status: "Design Phase",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">
            Mobile App Development Studio
          </span>
          <span className="sm:hidden">Mobile App Studio</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          We Build Apps That
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent block">
            People Love
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          We are two developers - <strong>Vladyslav Vaskov</strong> and{" "}
          <strong>Nazar Dzys</strong>. We build simple and fun apps that bring
          people together.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none flex items-center gap-3"
          >
            <a
              href="https://instagram.com/nvsoftlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Follow on Instagram</span>
              <span className="sm:hidden">Instagram</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>

          <Button
            asChild
            className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none flex items-center gap-3"
          >
            <a
              href="https://tiktok.com/@nvsoftlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tikTokIcon}
                alt="TikTok Icon"
                className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              />
              <span className="hidden sm:inline">Follow on TikTok</span>
              <span className="inline sm:hidden">TikTok</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3 bg-white/70 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            <span className="font-medium text-slate-700">
              Flutter Development
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-3 bg-white/70 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <span className="font-medium text-slate-700">
              Crafted with Love
            </span>
          </div>
        </div>
      </div>

      {/* Featured Apps Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Our Apps
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Available and coming soon
          </p>
        </div>

        {/* Exposed AI App Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-red-600 to-pink-700 p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full translate-y-6 sm:translate-y-8 lg:translate-y-12 -translate-x-6 sm:-translate-x-8 lg:-translate-x-12"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={exposedAIIcon}
                      alt="Exposed AI Icon"
                      className="w-10 h-10 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Exposed AI
                  </h3>
                  <p className="text-red-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    An Ideal Start for Two - 700+ questions to deepen your
                    connection, spark intimacy, and fill your evenings with
                    laughter and real conversations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2"
                    >
                      <a
                        href="https://apps.apple.com/us/app/exposed-game-have-you-ever/id6751416602"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-red-100">
                            Download on the
                          </div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2 opacity-75 cursor-not-allowed"
                      disabled
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 pointer-events-none"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-pink-100">
                            Coming Soon
                          </div>
                          <div className="text-sm font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium text-sm sm:text-base">
                      Perfect for Couples
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        700+ questions to deepen your connection
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Choose from Romantic, Spicy, or create your own
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Share hilarious and unforgettable stories
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Create custom categories and inside jokes
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        AI-powered questions keep every round unique
                      </span>
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("ExposedAI")}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-pink-600 font-semibold transition-colors duration-300 group text-sm sm:text-base"
                  >
                    Learn more about Exposed AI
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strange Truths App Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group mt-6 sm:mt-8">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-[#050510] p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#B71C1C]/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#B71C1C]/10 rounded-full translate-y-6 sm:translate-y-8 lg:translate-y-12 -translate-x-6 sm:-translate-x-8 lg:-translate-x-12"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-black/80 border border-[#B71C1C]/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={strangeTruthsIcon}
                      alt="Strange Truths Icon"
                      className="w-10 h-10 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Strange Truths
                  </h3>
                  <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Explore bizarre facts that test your knowledge. Choose your category and guess the truth. Is it real or fake? Face strange truths with shocking twists.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2 opacity-75 cursor-not-allowed"
                      disabled
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 pointer-events-none"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-white/90">
                            Coming Soon
                          </div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-[#B71C1C] hover:bg-[#B71C1C]/90 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2 opacity-75 cursor-not-allowed"
                      disabled
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 pointer-events-none"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-white/90">
                            Coming Soon
                          </div>
                          <div className="text-sm font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium text-sm sm:text-base">
                      Coming Soon
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 text-base sm:text-lg mb-2">Uncover Bizarre Facts</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Explore bizarre facts that test your knowledge
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Choose your category and guess the truth
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Is it real or fake? Face strange truths with shocking twists
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Reveal secrets and see who knows the strangest truths
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Create custom categories
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#B71C1C] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base font-semibold">
                        One-Time Purchase: Pay once, learn forever
                      </span>
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("StrangeTruths")}
                    className="inline-flex items-center gap-2 text-[#B71C1C] hover:text-[#B71C1C]/80 font-semibold transition-colors duration-300 group text-sm sm:text-base"
                  >
                    Learn more about Strange Truths
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Have You Ever App Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group mt-6 sm:mt-8">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full translate-y-6 sm:translate-y-8 lg:translate-y-12 -translate-x-6 sm:-translate-x-8 lg:-translate-x-12"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={haveYouEverIcon}
                      alt="Have You Ever Icon"
                      className="w-14 h-14 lg:w-14 lg:h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Have You Ever
                  </h3>
                  <p className="text-pink-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    A fun and interactive party game that brings people together
                    through over 30 categories and 1500+ questions. Perfect for
                    icebreakers, couples, families, and parties!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2 opacity-75 cursor-not-allowed"
                      disabled
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 pointer-events-none"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-pink-100">
                            Coming Soon
                          </div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2"
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nvsoftlab.haveyouever"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-purple-100">
                            GET IT ON
                          </div>
                          <div className="text-sm font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium text-sm sm:text-base">
                      Perfect for Parties & Gatherings
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        30+ categories with 1500+ questions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Questions for friends and couples
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Spicy questions for adults
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Create custom categories
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        AI-powered question generation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Perfect icebreaker for any occasion
                      </span>
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("HaveYouEver")}
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold transition-colors duration-300 group text-sm sm:text-base"
                  >
                    Learn more about Have You Ever
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dice Roll App Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group mt-6 sm:mt-8">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-teal-600 to-purple-700 p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full translate-y-6 sm:translate-y-8 lg:translate-y-12 -translate-x-6 sm:-translate-x-8 lg:-translate-x-12"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={diceIcon}
                      alt="Dice Icon"
                      className="w-10 h-10 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Dice Roll: RPG & Board Games
                  </h3>
                  <p className="text-teal-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Your Pocket Dice - The most beautiful and intuitive dice
                    rolling app. Perfect for board games, decision making, and
                    fun moments.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2"
                    >
                      <a
                        href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-teal-100">
                            Download on the
                          </div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 sm:px-6 py-3 h-auto text-sm sm:text-base rounded-lg flex items-center gap-2"
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L13.5 12l4.199-2.491zM5.864 2.658L16.802 8.99l-8.635 8.635-2.303-2.302 8.635-8.635z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-purple-100">
                            GET IT ON
                          </div>
                          <div className="text-sm font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium text-sm sm:text-base">
                      4.8/5 Average Rating
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Beautiful Dice animations
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Full RPG Dice set (d4, d6, d8, d10, d12, d20 included!)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Just Shake to Roll
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Easy Dice switching
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Perfect for board game nights
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        Configurable Roll History
                      </span>
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("DiceRoll")}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-purple-600 font-semibold transition-colors duration-300 group text-sm sm:text-base"
                  >
                    Learn more about Dice Roll
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Apps */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            More Apps Coming Soon
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We're constantly working on new exciting projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {comingSoonApps.map((app, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-slate-100 text-slate-600"
                  >
                    {app.status}
                  </Badge>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
          About NVSoftLab
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
          We're passionate about creating mobile applications that make people's
          lives easier and more enjoyable. Our focus is on clean design, smooth
          performance, and delightful user experiences. Every app we build is
          crafted with attention to detail and genuine care for our users.
        </p>

        {/* Social Media Section */}
        <div className="mb-6 sm:mb-8">
          <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Follow our journey on social media:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://instagram.com/nvsoftlab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              Instagram
            </a>

            <a
              href="https://tiktok.com/@nvsoftlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-slate-900 hover:to-black transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <img
                src={tikTokIcon}
                alt="TikTok Icon"
                className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              />
              TikTok
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-slate-600 text-sm sm:text-base">
              Developers
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              6+
            </div>
            <div className="text-slate-600 text-sm sm:text-base">Apps</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-slate-600 text-sm sm:text-base">
              Ideas Brewing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
