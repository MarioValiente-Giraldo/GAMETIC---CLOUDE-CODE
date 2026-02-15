import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGame, type Game, type Review } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import ScoreCircle from '../components/common/ScoreCircle';
import ReviewForm from '../components/game/ReviewForm';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchGame = async () => {
    try {
      const data = await getGame(Number(id));
      setGame(data);
    } catch {
      setError('No se pudo cargar el juego');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGame();
  }, [id]);

  const handleReviewCreated = () => {
    fetchGame();
  };

  const userAlreadyReviewed = game?.reviews?.some((r: Review) => r.user.id === user?.id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2a] to-[#0a0015] flex items-center justify-center">
        <div className="text-[#b794f4] text-xl animate-pulse">Cargando...</div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2a] to-[#0a0015] flex items-center justify-center">
        <div className="text-center">
          <span className="material-icons text-gray-600 text-6xl mb-4">error_outline</span>
          <h2 className="text-2xl font-bold text-gray-400 mb-4">{error || 'Juego no encontrado'}</h2>
          <Link to="/games" className="text-[#b794f4] hover:underline">Volver al catálogo</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2a] to-[#0a0015]" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1a0a2a]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="material-icons text-[#b794f4] text-3xl group-hover:scale-110 transition-transform">videogame_asset</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#b794f4] bg-clip-text text-transparent">GameTic</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/games" className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                <span className="material-icons">sports_esports</span>
                <span>Catálogo</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Game Hero */}
      <section className="relative">
        <div className="h-72 md:h-96 overflow-hidden relative">
          <img src={game.coverImage} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0015] via-[#0a0015]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Cover */}
            <div className="w-48 md:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img src={game.coverImage} alt={game.title} className="w-full h-auto" />
            </div>

            {/* Info */}
            <div className="flex-1 pt-4">
              <div className="flex items-start gap-4 mb-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white">{game.title}</h1>
                <ScoreCircle score={game.score} size="lg" />
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {game.genres.map((genre, i) => (
                  <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-[#421d53]/60 text-[#b794f4] border border-[#b794f4]/30">
                    {genre}
                  </span>
                ))}
              </div>

              {/* Platforms */}
              <div className="flex gap-3 mb-6">
                {game.platform.map((p, i) => (
                  <div key={i} className="flex items-center gap-1 text-gray-300">
                    <span className="material-icons text-lg">
                      {p === 'PC' ? 'computer' : p === 'PlayStation' ? 'sports_esports' : 'videogame_asset'}
                    </span>
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="backdrop-blur-md bg-white/5 rounded-xl px-6 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-[#b794f4]">{game.reviews?.length || 0}</div>
                  <div className="text-xs text-gray-400">Reseñas</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 rounded-xl px-6 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-[#b794f4]">{game.score.toFixed(1)}</div>
                  <div className="text-xs text-gray-400">Puntuación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              Reseñas <span className="text-gray-500">({game.reviews?.length || 0})</span>
            </h2>

            {game.reviews && game.reviews.length > 0 ? (
              <div className="space-y-4">
                {game.reviews.map((review: Review) => (
                  <div key={review.id} className="backdrop-blur-md bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b794f4] to-[#421d53] flex items-center justify-center text-white font-bold">
                          {review.user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <span className="text-white font-semibold">{review.user.username}</span>
                          <p className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString('es-ES')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#421d53]/40 px-3 py-1 rounded-full">
                        <span className="material-icons text-yellow-400 text-sm">star</span>
                        <span className="text-white font-bold">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 backdrop-blur-md bg-white/5 rounded-xl border border-white/10">
                <span className="material-icons text-gray-600 text-5xl mb-3">rate_review</span>
                <p className="text-gray-400">Aún no hay reseñas. ¡Sé el primero!</p>
              </div>
            )}
          </div>

          {/* Review Form / Login Prompt */}
          <div>
            {user ? (
              userAlreadyReviewed ? (
                <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <span className="material-icons text-green-400 text-4xl mb-2">check_circle</span>
                  <p className="text-gray-300">Ya dejaste tu reseña para este juego</p>
                </div>
              ) : (
                <ReviewForm gameId={game.id} onReviewCreated={handleReviewCreated} />
              )
            ) : (
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <span className="material-icons text-[#b794f4] text-4xl mb-3">lock</span>
                <p className="text-gray-300 mb-4">Inicia sesión para dejar tu reseña</p>
                <Link
                  to="/login"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#b794f4] to-[#421d53] rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Iniciar Sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2026 GameTic. Hecho con <span className="text-red-500">♥</span> para gamers de todo el mundo.</p>
        </div>
      </footer>
    </div>
  );
};

export default GameDetail;
