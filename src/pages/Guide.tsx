import React from 'react';
import { BookOpen, Zap, Sparkles, Shield, MapPin, Star } from 'lucide-react';
import guideData from '../data/guide.json';

const sections = [
  { id: 'quick-start', title: 'Quick Start Tips', icon: Zap, data: guideData.quickStart },
  { id: 'resin', title: 'Resin Management', icon: Sparkles, data: guideData.resinManagement },
  { id: 'farming', title: 'Farming Strategy', icon: Shield, data: guideData.farmingTips },
];

export default function Guide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Beginner Guide</h1>
        <p className="text-slate-500 text-lg">Essential knowledge for every new traveler starting their journey in Teyvat.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block space-y-2">
          <div className="p-6 bg-white rounded-3xl border border-purple-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contents</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-all"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <section.icon className="text-purple-600 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.data.map((tip, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-3xl border border-purple-50 shadow-sm hover:shadow-md transition-all flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Additional Resources */}
          <section className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
              <p className="text-purple-100 mb-8 max-w-2xl">
                Ready to dive deeper? Check out these community-trusted resources for advanced builds, interactive maps, and theorycrafting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://genshin-impact-map.appsample.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center space-x-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">Interactive Map</span>
                </a>
                <a
                  href="https://paimon.moe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center space-x-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-bold">Paimon.moe Database</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
