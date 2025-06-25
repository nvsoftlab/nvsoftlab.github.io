import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Star,
  Smartphone,
  Zap,
  Heart,
  Users,
  Dices,
  Layers,
  Repeat,
  Feather,
  Sparkles,
  Shield,
  Car,
  GraduationCap,
  Smile,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

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
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="text-lg">🎲</span>
          Your Virtual Dice Roller for Every Game!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Dice Roll: RPG & Board Games
          <span className="block text-3xl md:text-4xl text-slate-600 font-normal mt-2">
            🎮 Perfect for RPGs, board games, and everyday fun!
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Forgot your dice at home? Dice Roll is your all-in-one digital dice
          solution. Minimalist, elegant, fast, and always in your pocket — made
          by gamers, for gamers!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-8 py-4 h-auto text-lg font-semibold"
          >
            <a
              href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download on App Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-4 h-auto text-lg font-semibold"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Get it on Google Play
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-slate-600">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-semibold">4.8/5</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-emerald-500" />
            <span className="font-semibold">2K+ Downloads</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-teal-500" />
            <span className="font-semibold">iOS & Android</span>
          </div>
        </div>
      </div>

      {/* App Preview */}
      <div className="mb-20">
        <Card className="bg-gradient-to-br from-teal-600 to-purple-700 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <div className="text-8xl mb-6">🎲</div>
              <h3 className="text-2xl font-bold mb-4">
                Beautiful Dice Animation
              </h3>
              <p className="text-teal-100 text-lg leading-relaxed">
                Experience the most realistic dice rolling on your mobile
                device. Watch as your dice tumble and roll with stunning physics
                simulation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            ✨ Key Features
          </h2>
          <p className="text-lg text-slate-600">
            Packed with features that make every roll special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-teal-200 group-hover:to-purple-200 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            🧙 Perfect For...
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {perfectFor.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-md"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-slate-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Built by Devs Section */}
      <div className="mb-20">
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-12 h-12 text-white fill-current" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Built by Passionate Developers
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Created by two indie devs who love games as much as you do. We
                understand what players need because we're players too, and
                we're dedicated to delivering the best experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 text-center mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Loved by Users Worldwide
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <div className="text-2xl font-bold text-slate-900">4.8/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Download className="w-6 h-6 text-green-500" />
              2K+
            </div>
            <div className="text-slate-600">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Users className="w-6 h-6 text-blue-500" />
              1K+
            </div>
            <div className="text-slate-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Heart className="w-6 h-6 text-red-500" />
              99%
            </div>
            <div className="text-slate-600">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* User Reviews
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Users Say
          </h2>
          <p className="text-lg text-slate-600">Real reviews from real users</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-semibold text-slate-900">
                  {review.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-teal-600 to-purple-700 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">📲 Download Dice Roll now!</h2>
        <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
          Never be without your dice again! This app is your pocket-sized
          companion for every roll, whether you're a dungeon master, casual
          gamer, or teacher.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 h-auto text-lg font-semibold"
          >
            <a
              href="https://apps.apple.com/us/app/dice-roll-your-pocket-dice/id6746415571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              App Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 h-auto text-lg font-semibold"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nvsoftlab.dice_roller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Google Play
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
