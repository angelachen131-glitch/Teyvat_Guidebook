import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, MapPin, Sword, Sparkles, Info } from 'lucide-react';
import { Character } from '../types';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

const elementColors: Record<string, string> = {
  Pyro: 'text-red-500 bg-red-50 border-red-100',
  Hydro: 'text-blue-500 bg-blue-50 border-blue-100',
  Anemo: 'text-teal-500 bg-teal-50 border-teal-100',
  Electro: 'text-purple-500 bg-purple-50 border-purple-100',
  Dendro: 'text-green-500 bg-green-50 border-green-100',
  Cryo: 'text-sky-500 bg-sky-50 border-sky-100',
  Geo: 'text-amber-500 bg-amber-50 border-amber-100',
};

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  if (!character) return null;

  // Derive the full portrait URL from the icon URL
  const fullImageUrl = character.image.replace('/characters/', '/characters/full/');

  return (
    <AnimatePresence>
      {character && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8 min-h-[300px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-purple-500/10" />
              <img
                src={fullImageUrl}
                alt={character.name}
                className="relative z-0 max-w-full max-h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold border shadow-sm ${elementColors[character.element]}`}>
                  {character.element}
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-white text-slate-700 border border-slate-100 shadow-sm">
                  {character.rarity}★
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 overflow-y-auto">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">{character.name}</h2>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 text-purple-500" />
                    {character.nation}
                  </span>
                  <span className="flex items-center">
                    <Sword className="w-4 h-4 mr-1.5 text-purple-500" />
                    {character.weapon}
                  </span>
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-1.5 text-purple-500" />
                    {character.role}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                    <Info className="w-3.5 h-3.5 mr-2" />
                    Background
                  </h3>
                  <p className="text-slate-600 leading-relaxed italic">
                    "{character.description}"
                  </p>
                </section>

                <section className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Recommended Build
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Artifact Set</p>
                      <p className="text-slate-900 font-semibold">{character.recommendedArtifactSet}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sands</p>
                        <p className="text-xs text-slate-900 font-semibold">{character.recommendedArtifactStats.sands}</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Goblet</p>
                        <p className="text-xs text-slate-900 font-semibold">{character.recommendedArtifactStats.goblet}</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Circlet</p>
                        <p className="text-xs text-slate-900 font-semibold">{character.recommendedArtifactStats.circlet}</p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Recommended Weapon</p>
                      <div className="flex justify-between items-center">
                        <p className="text-slate-900 font-semibold">{character.recommendedWeapon}</p>
                        <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                          {character.recommendedWeaponStat}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Beginner Tips
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-600 flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-3 flex-shrink-0" />
                      Focus on leveling up their {character.weapon} to increase base attack.
                    </li>
                    <li className="text-sm text-slate-600 flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-3 flex-shrink-0" />
                      Pair with other {character.element} characters for elemental resonance.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
