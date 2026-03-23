import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Shield, BookOpen, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
  {
    title: 'Characters',
    description: 'Explore the diverse cast of Teyvat, their elements, and recommended builds.',
    icon: Users,
    color: 'bg-blue-500',
    link: '/characters',
  },
  {
    title: 'Artifacts',
    description: 'Learn about powerful equipment sets and where to farm them.',
    icon: Shield,
    color: 'bg-purple-500',
    link: '/artifacts',
  },
  {
    title: 'Team Builder',
    description: 'Plan your perfect party and understand elemental synergies.',
    icon: Sparkles,
    color: 'bg-amber-500',
    link: '/team-builder',
  },
  {
    title: 'Beginner Guide',
    description: 'Essential tips and tricks for new travelers starting their journey.',
    icon: BookOpen,
    color: 'bg-emerald-500',
    link: '/guide',
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
              Traveler's Companion
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Your Journey Through <span className="text-purple-600">Teyvat</span> Starts Here
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Teyvat Guidebook is your ultimate beginner-friendly companion for Genshin Impact. Plan your teams, master artifacts, and explore characters with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/characters"
                className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all flex items-center group"
              >
                Explore Characters
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/guide"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all"
              >
                Beginner Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Master the basics and build powerful teams with our curated guides and tools designed specifically for new players.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={feature.link}
                className="block h-full p-8 bg-white rounded-3xl border border-purple-50 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg", feature.color)}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-purple-600 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              New to Genshin Impact?
            </h2>
            <p className="text-purple-100 text-lg mb-10 leading-relaxed">
              Genshin Impact is a massive open-world action RPG with a deep elemental combat system. It can be overwhelming at first, but don't worry—we've got you covered. From understanding resin to building your first team, Teyvat Guidebook is here to help you every step of the way.
            </p>
            <Link
              to="/guide"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-purple-50 transition-colors"
            >
              Read the Quick Start Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
