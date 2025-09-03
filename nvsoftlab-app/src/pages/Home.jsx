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
import haveYouEverIcon from "../../src/assets/have-you-ever.png";
import tikTokIcon from "../../src/assets/tiktok.png";

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
          <span className="hidden sm:inline">Mobile App Development Studio</span>
          <span className="sm:hidden">Mobile App Studio</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          We Build Apps That
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent block">
            People Love
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          We are two mobile app developers — <strong>Vladyslav Vaskov</strong>{" "}
          and <strong>Nazar Dzys</strong>. We build simple and fun apps using
          Flutter.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            variant="outline"
            className="flex items-center justify-center gap-3 rounded-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none"
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
            variant="outline"
            className="flex items-center gap-3 rounded-full border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none"
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

        {/* Have You Ever App Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
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
                      className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Have You Ever
                  </h3>
                  <p className="text-pink-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    A fun and interactive party game that brings people together through over 30 categories 
                    and 1500+ questions. Perfect for icebreakers, couples, families, and parties!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-white text-pink-700 hover:bg-pink-50 font-semibold px-2 py-1 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base"
                    >
                      <a
                        href="https://apps.apple.com/us/app/have-you-ever-party-game/id1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        App Store
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold px-2 py-1 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base"
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nvsoftlab.have_you_ever"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        Google Play
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
                      className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-2 py-1 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base"
                    >
                      <a
                        href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        App Store
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold px-2 py-1 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base"
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        Google Play
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
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
                      <span className="text-slate-700 text-sm sm:text-base">Just Shake to Roll</span>
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
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              Instagram
            </a>

            <a
              href="https://tiktok.com/@nvsoftlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-slate-900 transition-all duration-300 font-medium text-sm sm:text-base w-full sm:w-auto justify-center"
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
            <div className="text-slate-600 text-sm sm:text-base">Developers</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-slate-600 text-sm sm:text-base">Apps</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-slate-600 text-sm sm:text-base">Ideas Brewing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
