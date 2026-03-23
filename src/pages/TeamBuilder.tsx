import React from 'react';
import { Plus, X, Sparkles, Info, Shield, Zap, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import charactersData from '../data/characters.json';
import { Character } from '../types';

const elementsList = ['All', 'Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro', 'Cryo'];
const rolesList = ['All', 'Main DPS', 'Sub DPS', 'Support', 'Healer', 'Shielder', 'Buffer', 'Crowd Control', 'Battery'];

const RESONANCES: Record<string, { name: string; effect: string }> = {
  Pyro: {
    name: 'Fervent Flames',
    effect: 'Affected by Cryo for 40% less time. Increases ATK by 25%.',
  },
  Hydro: {
    name: 'Soothing Water',
    effect: 'Affected by Pyro for 40% less time. Increases Max HP by 25%.',
  },
  Anemo: {
    name: 'Impetuous Winds',
    effect: 'Decreases Stamina Consumption by 15%. Increases Movement SPD by 10%. Shortens Skill CD by 5%.',
  },
  Electro: {
    name: 'High Voltage',
    effect: 'Affected by Hydro for 40% less time. Electro-related reactions have a 100% chance to generate an Electro Particle (CD: 5s).',
  },
  Dendro: {
    name: 'Sprawling Greenery',
    effect: 'Elemental Mastery increased by 50. Triggering Dendro-related reactions further increases EM.',
  },
  Cryo: {
    name: 'Shattering Ice',
    effect: 'Affected by Electro for 40% less time. Increases CRIT Rate against enemies affected by Cryo by 15%.',
  },
  Geo: {
    name: 'Enduring Rock',
    effect: 'Increases shield strength by 15%. Shielded characters deal 15% more DMG and decrease enemy Geo RES.',
  },
};

const PROTECTIVE_CANOPY = {
  name: 'Protective Canopy',
  effect: 'All Elemental RES +15%, Physical RES +15%.',
};

export default function TeamBuilder() {
  const [team, setTeam] = React.useState<(Character | null)[]>([null, null, null, null]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeSlot, setActiveSlot] = React.useState<number | null>(null);
  const [search, setSearch] = React.useState('');
  const [elementFilter, setElementFilter] = React.useState('All');
  const [roleFilter, setRoleFilter] = React.useState('All');

  const addCharacter = (char: Character) => {
    if (activeSlot !== null) {
      const newTeam = [...team];
      newTeam[activeSlot] = char;
      setTeam(newTeam);
      setIsModalOpen(false);
      setActiveSlot(null);
      setSearch('');
      setElementFilter('All');
      setRoleFilter('All');
    }
  };

  const filteredCharacters = (charactersData as Character[]).filter((char) => {
    const matchesSearch = char.name.toLowerCase().includes(search.toLowerCase());
    const matchesElement = elementFilter === 'All' || char.element === elementFilter;
    const matchesRole = roleFilter === 'All' || 
      char.role.replace('-', ' ').includes(roleFilter.replace('-', ' '));
    return matchesSearch && matchesElement && matchesRole;
  });

  const removeCharacter = (index: number) => {
    const newTeam = [...team];
    newTeam[index] = null;
    setTeam(newTeam);
  };

  const selectedCount = team.filter(Boolean).length;
  
  const activeResonances = React.useMemo(() => {
    const activeChars = team.filter((c): c is Character => c !== null);
    if (activeChars.length < 4) return [];

    const elementCounts: Record<string, number> = {};
    activeChars.forEach(char => {
      elementCounts[char.element] = (elementCounts[char.element] || 0) + 1;
    });

    const resonances = [];
    const uniqueElements = Object.keys(elementCounts);

    if (uniqueElements.length === 4) {
      resonances.push(PROTECTIVE_CANOPY);
    } else {
      uniqueElements.forEach(el => {
        if (elementCounts[el] >= 2 && RESONANCES[el]) {
          resonances.push(RESONANCES[el]);
        }
      });
    }

    return resonances;
  }, [team]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Team Builder</h1>
        <p className="text-slate-500 text-lg">Plan your party and understand elemental synergies for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Team Slots */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((char, index) => (
              <div
                key={index}
                className={`relative aspect-[3/4] rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden ${
                  char
                    ? 'border-purple-200 bg-white shadow-sm'
                    : 'border-slate-200 bg-slate-50 hover:border-purple-300 hover:bg-purple-50/30'
                }`}
              >
                {char ? (
                  <>
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{char.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 bg-white/20 backdrop-blur-md rounded border border-white/20">
                          {char.element}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 bg-white/20 backdrop-blur-md rounded border border-white/20">
                          {char.role}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeCharacter(index)}
                      className="absolute top-4 right-4 p-2 bg-white/90 text-slate-900 rounded-xl shadow-sm hover:bg-red-50 hover:text-red-600 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setActiveSlot(index);
                      setIsModalOpen(true);
                    }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:border-purple-400 group-hover:text-purple-600 transition-all">
                      <Plus className="w-8 h-8" />
                    </div>
                    <span className="text-slate-400 font-bold group-hover:text-purple-600 transition-colors">Add Character</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Synergy Summary */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
              Team Synergy
            </h2>

            {selectedCount === 0 ? (
              <div className="text-center py-12">
                <Info className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Add characters to see team analysis and synergy tips.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center">
                    <Zap className="w-4 h-4 mr-1.5 text-purple-600" />
                    Elemental Resonance
                  </h3>
                  
                  {selectedCount < 4 ? (
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Add {4 - selectedCount} more character{4 - selectedCount > 1 ? 's' : ''} to unlock powerful elemental resonances!
                      </p>
                    </div>
                  ) : activeResonances.length > 0 ? (
                    <div className="space-y-3">
                      {activeResonances.map((res, idx) => (
                        <div key={idx} className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                          <h4 className="text-xs font-bold text-purple-900 mb-1 flex items-center">
                            {res.name === 'Protective Canopy' ? (
                              <Shield className="w-3 h-3 mr-1.5" />
                            ) : (
                              <Sparkles className="w-3 h-3 mr-1.5" />
                            )}
                            {res.name}
                          </h4>
                          <p className="text-[10px] text-purple-700 leading-relaxed">
                            {res.effect}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        No resonance active. Try adding 2 characters of the same element or 4 different elements.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Team Composition</h3>
                  <div className="space-y-3">
                    {team.filter(Boolean).map((char, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 font-medium">{char?.name}</span>
                        <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                          {char?.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Beginner Tips</h3>
                  <ul className="space-y-2">
                    <li className="text-xs text-slate-500 flex items-start">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 mr-2 shrink-0" />
                      Ensure you have a healer or shielder for survivability.
                    </li>
                    <li className="text-xs text-slate-500 flex items-start">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 mr-2 shrink-0" />
                      Try to include characters that can trigger elemental reactions.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Character Selection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-6 border-b border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Select a Character</h2>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSearch('');
                      setElementFilter('All');
                      setRoleFilter('All');
                    }}
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search characters..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Element Filter */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                        Element
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {elementsList.map((el) => (
                          <button
                            key={el}
                            onClick={() => setElementFilter(el)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                              elementFilter === el
                                ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300 hover:text-purple-600'
                            }`}
                          >
                            {el}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Role Filter */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                        Role
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {rolesList.map((role) => (
                          <button
                            key={role}
                            onClick={() => setRoleFilter(role)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                              roleFilter === role
                                ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300 hover:text-purple-600'
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 overflow-y-auto">
                {filteredCharacters.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredCharacters.map((char) => (
                      <button
                        key={char.id}
                        onClick={() => addCharacter(char)}
                        className="group flex flex-col items-center p-4 rounded-2xl border border-slate-100 hover:border-purple-400 hover:bg-purple-50/50 transition-all"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-slate-100 group-hover:border-purple-400">
                          <img src={char.image} alt={char.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 text-center truncate w-full">{char.name}</span>
                        <span className="text-[10px] text-slate-500">{char.element}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No characters found matching your criteria.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
