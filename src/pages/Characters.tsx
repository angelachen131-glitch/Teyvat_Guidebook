import React from 'react';
import { Search, Filter, SlidersHorizontal, Users } from 'lucide-react';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import charactersData from '../data/characters.json';
import { cn } from '../lib/utils';
import { Character } from '../types';

const elements = ['All', 'Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo'];
const weapons = ['All', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];
const nations = ['All', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'Snezhnaya', 'Other'];

export default function Characters() {
  const [search, setSearch] = React.useState('');
  const [selectedElement, setSelectedElement] = React.useState('All');
  const [selectedWeapon, setSelectedWeapon] = React.useState('All');
  const [selectedNation, setSelectedNation] = React.useState('All');
  const [selectedCharacter, setSelectedCharacter] = React.useState<Character | null>(null);

  const filteredCharacters = (charactersData as Character[]).filter((char) => {
    const matchesSearch = char.name.toLowerCase().includes(search.toLowerCase());
    const matchesElement = selectedElement === 'All' || char.element === selectedElement;
    const matchesWeapon = selectedWeapon === 'All' || char.weapon === selectedWeapon;
    const matchesNation = selectedNation === 'All' || char.nation === selectedNation;
    return matchesSearch && matchesElement && matchesWeapon && matchesNation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Characters</h1>
        <p className="text-slate-500 text-lg">Explore the heroes of Teyvat and find your perfect companions.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-sm mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search characters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-purple-50 text-purple-600 rounded-2xl font-bold text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>{filteredCharacters.length} Results</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1.5" />
              Element
            </label>
            <div className="flex flex-wrap gap-2">
              {elements.map((el) => (
                <button
                  key={el}
                  onClick={() => setSelectedElement(el)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    selectedElement === el
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1.5" />
              Weapon
            </label>
            <div className="flex flex-wrap gap-2">
              {weapons.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeapon(w)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    selectedWeapon === w
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1.5" />
              Nation
            </label>
            <div className="flex flex-wrap gap-2">
              {nations.map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedNation(n)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    selectedNation === n
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredCharacters.map((char) => (
            <div key={char.id}>
              <CharacterCard 
                character={char} 
                onClick={() => setSelectedCharacter(char)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-purple-200">
          <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No characters found</h3>
          <p className="text-slate-500">Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Modal */}
      <CharacterModal 
        character={selectedCharacter} 
        onClose={() => setSelectedCharacter(null)} 
      />
    </div>
  );
}
