import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, MapPin, Sword } from 'lucide-react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const elementColors: Record<string, string> = {
  Pyro: 'bg-red-50 text-red-600 border-red-100',
  Hydro: 'bg-blue-50 text-blue-600 border-blue-100',
  Anemo: 'bg-teal-50 text-teal-600 border-teal-100',
  Electro: 'bg-purple-50 text-purple-600 border-purple-100',
  Dendro: 'bg-green-50 text-green-600 border-green-100',
  Cryo: 'bg-sky-50 text-sky-600 border-sky-100',
  Geo: 'bg-amber-50 text-amber-600 border-amber-100',
};

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-purple-500/10" />
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          style={{ imageRendering: 'auto' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border shadow-sm ${elementColors[character.element]}`}>
            {character.element}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-base font-black text-slate-900 leading-tight group-hover:text-purple-600 transition-colors truncate">
            {character.name}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 truncate">
            {character.role}
          </p>
        </div>

        <div className="flex items-center text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100">
          <MapPin className="w-3 h-3 mr-1.5 text-purple-400 shrink-0" />
          <span className="truncate">{character.nation}</span>
        </div>
      </div>
    </motion.div>
  );
}
