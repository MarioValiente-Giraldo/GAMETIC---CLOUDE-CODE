import React from 'react';

interface ReviewCardProps {
  userName: string;
  userAvatar: string;
  gameName: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  userAvatar,
  gameName,
  rating,
  comment,
  date
}) => {
  return (
    <div className="group relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-[#b794f4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#421d53]/20">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={userAvatar}
              alt={userName}
              className="w-12 h-12 rounded-full border-2 border-[#b794f4]/30 object-cover"
            />
            <div>
              <h4 className="text-white font-semibold">{userName}</h4>
              <p className="text-sm text-gray-400">{gameName}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-[#421d53]/40 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="material-icons text-yellow-400 text-sm">star</span>
            <span className="text-white font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Comment */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
          {comment}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{date}</span>
          <button className="flex items-center gap-1 text-gray-400 hover:text-[#b794f4] transition-colors">
            <span className="material-icons text-sm">thumb_up</span>
            <span>Útil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
