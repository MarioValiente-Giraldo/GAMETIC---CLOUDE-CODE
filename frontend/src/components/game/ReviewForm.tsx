import React, { useState } from 'react';
import { createReview } from '../../lib/api';

interface ReviewFormProps {
  gameId: number;
  onReviewCreated: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ gameId, onReviewCreated }) => {
  const [rating, setRating] = useState(8);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (comment.length < 10) {
      setError('El comentario debe tener al menos 10 caracteres');
      return;
    }

    setLoading(true);
    try {
      await createReview(gameId, rating, comment);
      setComment('');
      setRating(8);
      onReviewCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la reseña');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Deja tu reseña</h3>

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Puntuación: <span className="text-[#b794f4] font-bold">{rating}</span>/10
        </label>
        <input
          type="range"
          min="1"
          max="10"
          step="0.5"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          className="w-full h-2 bg-[#421d53] rounded-lg appearance-none cursor-pointer accent-[#b794f4]"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1</span>
          <span>5</span>
          <span>10</span>
        </div>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">Comentario</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="¿Qué te pareció el juego? (mínimo 10 caracteres)"
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b794f4] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gradient-to-r from-[#b794f4] to-[#421d53] rounded-xl text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Publicar Reseña'}
      </button>
    </form>
  );
};

export default ReviewForm;
