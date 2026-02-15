import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/game/GameCard';
import { allGames } from '../data/gamesData';

const Games: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');

  // Obtener todos los géneros únicos
  const allGenres = ['Todos', ...new Set(allGames.flatMap(game => game.genres))];

  // Filtrar juegos por búsqueda y género
  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Todos' || game.genres.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

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

            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="material-icons">home</span>
              <span>Inicio</span>
            </Link>
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
              Explora nuestra colección de {allGames.length} juegos increíbles
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
                {allGenres.map(genre => (
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
              Mostrando <span className="text-[#b794f4] font-semibold">{filteredGames.length}</span> juegos
              {searchTerm && ` para "${searchTerm}"`}
              {selectedGenre !== 'Todos' && ` en ${selectedGenre}`}
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
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
