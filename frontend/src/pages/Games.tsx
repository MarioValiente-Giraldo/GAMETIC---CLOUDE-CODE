import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/game/GameCard';
import { getGames, type Game } from '../lib/api';
import { useAuth } from '../context/AuthContext';

const Games: React.FC = () => {
  const { user, logout } = useAuth();
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const genres = ['Todos', 'RPG', 'Action', 'Adventure', 'FPS', 'Horror', 'Indie', 'Strategy', 'Platformer', 'Roguelike', 'Survival', 'Simulation', 'Souls-like', 'Metroidvania', 'Co-op', 'Stealth', 'Puzzle', 'JRPG'];

  // Debounce search term (300ms)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchGames = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getGames({
        search: debouncedSearch || undefined,
        genre: selectedGenre !== 'Todos' ? selectedGenre : undefined,
        page,
        limit: 12,
      });
      setGames(data.games);
      setTotalPages(data.pagination.totalPages);
      setTotal(data.pagination.total);
    } catch {
      setGames([]);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, selectedGenre, page]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, selectedGenre]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2a] to-[#0a0015]" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1a0a2a]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="material-icons text-[#b794f4] text-3xl group-hover:scale-110 transition-transform">
                videogame_asset
              </span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#b794f4] bg-clip-text text-transparent">
                GameTic
              </h1>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="material-icons">home</span>
                <span>Inicio</span>
              </Link>
              {user ? (
                <>
                  <span className="text-gray-400 text-sm">{user.username}</span>
                  <button onClick={logout} className="px-3 py-1 text-sm text-gray-300 hover:text-white border border-white/20 hover:border-[#b794f4] rounded-full transition-all">
                    Salir
                  </button>
                </>
              ) : (
                <Link to="/login" className="px-4 py-2 text-sm text-white bg-gradient-to-r from-[#b794f4] to-[#421d53] rounded-full hover:opacity-90 transition-opacity">
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#b794f4]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#421d53]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Todos los <span className="bg-gradient-to-r from-[#b794f4] to-[#421d53] bg-clip-text text-transparent">Juegos</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explora nuestra colección de {total} juegos increíbles
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <span className="material-icons absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                search
              </span>
              <input
                type="text"
                placeholder="Buscar juegos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#b794f4] transition-colors"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <span className="material-icons absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                filter_list
              </span>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#b794f4] transition-colors appearance-none cursor-pointer min-w-[200px]"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-[#1a0a2a]">
                    {genre}
                  </option>
                ))}
              </select>
              <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                arrow_drop_down
              </span>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-400">
              Mostrando <span className="text-[#b794f4] font-semibold">{games.length}</span> de <span className="text-[#b794f4] font-semibold">{total}</span> juegos
              {searchTerm && ` para "${searchTerm}"`}
              {selectedGenre !== 'Todos' && ` en ${selectedGenre}`}
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-[#b794f4] text-xl animate-pulse">Cargando juegos...</div>
            </div>
          ) : games.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-icons text-gray-600 text-6xl mb-4">
                search_off
              </span>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No se encontraron juegos</h3>
              <p className="text-gray-500">Intenta ajustar tu búsqueda o filtros</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGenre('Todos');
                }}
                className="mt-6 px-6 py-3 bg-[#b794f4] hover:bg-[#421d53] rounded-full text-white font-semibold transition-colors"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-5 py-2 bg-white/5 border border-white/20 rounded-full text-white hover:border-[#b794f4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-icons text-sm">chevron_left</span>
              Anterior
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all ${
                      page === pageNum
                        ? 'bg-gradient-to-r from-[#b794f4] to-[#421d53] text-white'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:border-[#b794f4] border border-white/20'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-5 py-2 bg-white/5 border border-white/20 rounded-full text-white hover:border-[#b794f4] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Siguiente
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2026 GameTic. Hecho con <span className="text-red-500">♥</span> para gamers de todo el mundo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Games;
