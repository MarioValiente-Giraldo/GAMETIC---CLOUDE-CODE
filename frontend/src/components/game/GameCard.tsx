import React from 'react';
import ScoreCircle from '../common/ScoreCircle';

interface GameCardProps {
  id: number;
  title: string;
  coverImage: string;
  genres: string[];
  score: number;
  platform?: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  coverImage,
  genres,
  score,
  platform = []
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#2a1a3a] to-[#1a0a2a] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Cover Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Score Circle */}
        <div className="absolute top-3 right-3">
          <ScoreCircle score={score} size="sm" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 backdrop-blur-sm bg-black/30">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#b794f4] transition-colors">
          {title}
        </h3>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-3">
          {genres.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-[#421d53]/60 text-[#b794f4] border border-[#b794f4]/30 backdrop-blur-sm"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Platforms */}
        {platform.length > 0 && (
          <div className="flex gap-2 text-gray-400 text-sm">
            {platform.map((p, index) => (
              <span key={index} className="material-icons text-base">
                {p === 'PC' ? 'computer' : p === 'PlayStation' ? 'sports_esports' : 'videogame_asset'}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 border-2 border-[#b794f4]/0 group-hover:border-[#b794f4]/50 rounded-xl transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default GameCard;
