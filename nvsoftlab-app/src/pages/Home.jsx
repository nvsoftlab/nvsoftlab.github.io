import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import {
  ExternalLink,
  Smartphone,
  Code,
  Heart,
  ArrowRight,
  Star,
  Download,
  Instagram,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Home() {
  const comingSoonApps = [
    {
      name: "Have You Ever",
      description:
        "Thousands of questions for instant fun and surprising conversations",
      status: "In Development",
      color: "from-pink-500 to-rose-500",
    },
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
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Smartphone className="w-4 h-4" />
          Mobile App Development Studio
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          We Build Apps That
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent block">
            People Love
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          We are two mobile app developers — <strong>Vladyslav Vaskov</strong>{" "}
          and <strong>Nazar Dzys</strong>. We build simple and fun apps using
          Flutter.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
          >
            <a
              href="https://instagram.com/nvsoftlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            <a
              href="https://tiktok.com/@nvsoftlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../src/assets/tiktok.png"
                alt="TikTok Icon"
                className="h-6 w-6 object-contain"
              />{" "}
              Follow on TikTok
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Code className="w-5 h-5 text-teal-600" />
            <span className="font-medium text-slate-700">
              Flutter Development
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Heart className="w-5 h-5 text-purple-500" />
            <span className="font-medium text-slate-700">
              Crafted with Love
            </span>
          </div>
        </div>
      </div>

      {/* Featured App Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Featured App
          </h2>
          <p className="text-lg text-slate-600">
            Currently available on all platforms
          </p>
        </div>

        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-teal-600 to-purple-700 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {/* Replaced dice emoji with placeholder image */}
                    <img
                      src="src/assets/dice.png"
                      alt="Dice Icon"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Dice Roll: RPG & Board Games
                  </h3>
                  <p className="text-teal-100 mb-8 text-lg leading-relaxed">
                    Your Pocket Dice - The most beautiful and intuitive dice
                    rolling app. Perfect for board games, decision making, and
                    fun moments.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-6 py-3 h-auto"
                    >
                      <a
                        href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        App Store
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 h-auto"
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Google Play
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium">
                      4.8/5 Average Rating
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Beautiful Dice animations
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Full RPG Dice set (d4, d6, d8, d10, d12, d20 included!)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">Just Shake to Roll</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Easy Dice switching
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Perfect for board game nights
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">
                        Configurable Roll History
                      </span>
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("DiceRoll")}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-purple-600 font-semibold transition-colors duration-300 group"
                  >
                    Learn more about Dice Roll
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Apps */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            More Apps Coming Soon
          </h2>
          <p className="text-lg text-slate-600">
            We're constantly working on new exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonApps.map((app, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-slate-100 text-slate-600"
                  >
                    {app.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          About NVSoftLab
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          We're passionate about creating mobile applications that make people's
          lives easier and more enjoyable. Our focus is on clean design, smooth
          performance, and delightful user experiences. Every app we build is
          crafted with attention to detail and genuine care for our users.
        </p>

        {/* Social Media Section */}
        <div className="mb-8">
          <p className="text-slate-600 mb-4">
            Follow our journey on social media:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/nvsoftlab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>

            <a
              href="https://tiktok.com/@nvsoftlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-all duration-300 font-medium"
            >
              <img
                src="../../src/assets/tiktok.png"
                alt="TikTok Icon"
                className="h-6 w-6 object-contain"
              />
              TikTok
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-slate-600">Developers</div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              1+
            </div>
            <div className="text-slate-600">Published Apps</div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-slate-600">Ideas Brewing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
