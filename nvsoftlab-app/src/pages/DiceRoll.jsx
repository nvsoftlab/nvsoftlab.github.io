import {
  ArrowLeft,
  Car,
  Dices,
  Download,
  ExternalLink,
  Feather,
  GraduationCap,
  Heart,
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

// Removed unused import

export default function DiceRoll() {
  const features = [
    {
      icon: Dices,
      title: "All Essential Dice",
      description:
        "Includes d4, d6, d8, d10, d12, and d20 for D&D, Pathfinder, and all your favorite TTRPGs.",
    },
    {
      icon: Layers,
      title: "Clean & Minimalist",
      description:
        "A sleek, distraction-free UI that keeps the focus on your game, not the app.",
    },
    {
      icon: Zap,
      title: "Instant Rolls, No Lag",
      description:
        "Enjoy fast, responsive feedback for smooth, uninterrupted gaming sessions.",
    },
    {
      icon: Repeat,
      title: "Quick Dice Switching",
      description:
        "Easily switch between different dice types with just a single tap.",
    },
    {
      icon: Feather,
      title: "Lightweight & Optimized",
      description:
        "Battery-friendly and runs smoothly on all devices, even older ones.",
    },
    {
      icon: Sparkles,
      title: "Continuous Improvements",
      description:
        "We release regular updates with new features and improvements based on user feedback.",
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

  // const reviews = [
  //   {
  //     name: "Sarah M.",
  //     rating: 5,
  //     text: "Best dice app I've ever used! The animations are gorgeous and it's perfect for our weekly board game nights.",
  //   },
  //   {
  //     name: "Mike R.",
  //     rating: 5,
  //     text: "Simple, beautiful, and works perfectly. Exactly what I needed for D&D sessions.",
  //   },
  //   {
  //     name: "Lisa K.",
  //     rating: 5,
  //     text: "Love the haptic feedback! Makes rolling dice feel so satisfying.",
  //   },
  // ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 group text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="text-base sm:text-lg">🎲</span>
          <span className="hidden sm:inline">Your Virtual Dice Roller for Every Game!</span>
          <span className="sm:hidden">Virtual Dice Roller!</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          Dice Roll: RPG & Board Games
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 font-normal mt-2">
            🎮 Perfect for RPGs, board games, and everyday fun!
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Forgot your dice at home? Dice Roll is your all-in-one digital dice
          solution. Minimalist, elegant, fast, and always in your pocket — made
          by gamers, for gamers!
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold w-full sm:w-auto"
          >
            <a
              href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download on App Store</span>
              <span className="sm:hidden">App Store</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-teal-300 text-teal-700 hover:bg-teal-50 px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold w-full sm:w-auto"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Get it on Google Play</span>
              <span className="sm:hidden">Google Play</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
            <span className="font-semibold">4.8/5</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-3">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            <span className="font-semibold">2K+ Downloads</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            ✨ Key Features
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Packed with features that make every roll special
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
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
            Whether you're a hardcore gamer or just need a random number
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perfectFor.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-100 to-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
          Ready to Roll?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Download Dice Roll now and never be without dice again! Perfect for gaming on the go.
        </p>
        
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold w-full sm:w-auto"
          >
            <a
              href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download on App Store</span>
              <span className="sm:hidden">App Store</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-teal-300 text-teal-700 hover:bg-teal-50 px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold w-full sm:w-auto"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Get it on Google Play</span>
              <span className="sm:hidden">Google Play</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
