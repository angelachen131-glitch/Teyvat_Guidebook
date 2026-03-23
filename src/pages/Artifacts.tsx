import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ArtifactCard from '../components/ArtifactCard';
import artifactsData from '../data/artifacts.json';
import { cn } from '../lib/utils';

const regions = ['All', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan'];

export default function Artifacts() {
  const [search, setSearch] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('All');
  const [selectedBonus, setSelectedBonus] = React.useState('All');

  const bonusTypes = React.useMemo(() => {
    const types = new Set(artifactsData.map(art => art.bonusType));
    return ['All', ...Array.from(types).sort()];
  }, []);

  const filteredArtifacts = artifactsData.filter((art) => {
    const matchesSearch = art.name.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || art.region === selectedRegion;
    const matchesBonus = selectedBonus === 'All' || art.bonusType === selectedBonus;
    return matchesSearch && matchesRegion && matchesBonus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Artifacts</h1>
        <p className="text-slate-500 text-lg">Master your equipment and optimize your character builds.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-sm mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search artifact sets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-purple-50 text-purple-600 rounded-2xl font-bold text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>{filteredArtifacts.length} Results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1.5" />
              Region
            </label>
            <div className="flex flex-wrap gap-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    selectedRegion === reg
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1.5" />
              Bonus Type
            </label>
            <div className="flex flex-wrap gap-2">
              {bonusTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedBonus(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    selectedBonus === type
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtifacts.map((art) => (
            <div key={art.id}>
              <ArtifactCard artifact={art} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-purple-200">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No artifacts found</h3>
          <p className="text-slate-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
