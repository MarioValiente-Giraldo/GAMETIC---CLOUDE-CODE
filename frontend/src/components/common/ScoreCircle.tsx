import React from 'react';

interface ScoreCircleProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, size = 'md', className = '' }) => {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'from-green-400 to-emerald-500';
    if (score >= 6) return 'from-yellow-400 to-amber-500';
    return 'from-red-400 to-rose-500';
  };

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-xl'
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${getScoreColor(
        score
      )} flex items-center justify-center font-bold text-white shadow-lg transform transition-transform hover:scale-110 ${className}`}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      }}
    >
      {score.toFixed(1)}
    </div>
  );
};

export default ScoreCircle;
