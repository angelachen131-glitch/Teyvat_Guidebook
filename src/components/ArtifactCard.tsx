import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Users } from 'lucide-react';

interface Artifact {
  id: string;
  name: string;
  twoPiece: string;
  fourPiece: string;
  idealUsers: string[];
  location: string;
  region: string;
}

interface ArtifactCardProps {
  artifact: Artifact;
}

export default function ArtifactCard({ artifact }: ArtifactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{artifact.name}</h3>
          </div>
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
            {artifact.region}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">2-Piece Bonus</span>
            <p className="text-sm text-slate-700 mt-1">{artifact.twoPiece}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">4-Piece Bonus</span>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{artifact.fourPiece}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-50 border-t border-purple-50 space-y-4">
        <div>
          <div className="flex items-center text-xs font-bold text-slate-900 mb-2">
            <Users className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
            Ideal Users
          </div>
          <div className="flex flex-wrap gap-1.5">
            {artifact.idealUsers.map((user) => (
              <span key={user} className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-100">
                {user}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center text-xs font-bold text-slate-900 mb-1">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
            Location
          </div>
          <p className="text-xs text-slate-500">{artifact.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
