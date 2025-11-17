import {
  ArrowLeft,
  Car,
  Coffee,
  Download,
  ExternalLink,
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

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { createPageUrl } from "../utils";
import haveYouEverIcon from "../assets/have-you-ever.png";

export default function HaveYouEver() {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Massive Question Library",
      description:
        "Over 30 categories with 1500+ questions for endless entertainment",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Questions for Friends",
      description:
        "Fun and engaging questions perfect for friend groups and parties",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Questions for Couples",
      description:
        "Romantic and intimate questions to deepen your relationship",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Spicy Questions",
      description: "Adult content and daring questions for mature audiences",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Create Custom Categories",
      description: "Build your own categories with personalized questions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI Question Generation",
      description: "Generate new questions with AI for fresh content anytime",
      color: "from-teal-500 to-blue-500",
    },
  ];

  const perfectFor = [
    {
      icon: <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Birthday parties and celebrations",
    },
    {
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Coffee dates and casual meetups",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Romantic date nights for couples",
    },
    {
      icon: <Car className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Road trips and travel entertainment",
    },
    {
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Family game nights and bonding",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Team building and icebreakers",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
          Party Game App
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          Have You Ever
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
            Party Game
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          A fun and interactive party game that brings people together through
          over 30 categories and 1500+ questions. Perfect for icebreakers,
          couples, families, and parties!
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-pink-100">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
                  App Store
                </div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3"
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
                <div className="text-xs text-purple-100">GET IT ON</div>
                <div className="text-sm sm:text-base font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
            <span className="font-semibold">4.9/5</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-3">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            <span className="font-semibold">30+ Categories</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Why Choose Have You Ever?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Packed with features that make every game night unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-4 sm:p-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            🎯 Perfect For
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Have You Ever is the perfect game for any occasion!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perfectFor.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-slate-700 font-medium text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
          Ready to Start Playing?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Download Have You Ever now and transform any gathering into an
          exciting adventure of discovery and laughter!
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3 opacity-75 cursor-not-allowed"
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
                <div className="text-xs text-pink-100">Coming Soon</div>
                <div className="text-sm sm:text-base font-semibold">
                  App Store
                </div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg w-full sm:w-auto rounded-lg flex items-center gap-3"
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
                <div className="text-xs text-purple-100">GET IT ON</div>
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
