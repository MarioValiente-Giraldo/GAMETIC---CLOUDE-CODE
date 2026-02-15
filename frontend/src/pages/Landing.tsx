import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import GameCard from '../components/game/GameCard';
import ReviewCard from '../components/game/ReviewCard';
import { getFeaturedGames, type Game } from '../lib/api';
import { useAuth } from '../context/AuthContext';

const Landing: React.FC = () => {
  const { user, logout } = useAuth();
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedGames()
      .then(setFeaturedGames)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Mock data for reviews
  const recentReviews = [
    {
      userName: 'Alex Gaming',
      userAvatar: 'https://i.pravatar.cc/150?img=1',
      gameName: 'Baldurs Gate 3',
      rating: 9.5,
      comment: '¡Una obra maestra absoluta! La narrativa es fenomenal y cada decisión importa. El mejor RPG en años.',
      date: 'Hace 2 días'
    },
    {
      userName: 'Sarah Chen',
      userAvatar: 'https://i.pravatar.cc/150?img=5',
      gameName: 'Elden Ring',
      rating: 9.0,
      comment: 'Desafiante pero increíblemente gratificante. El diseño del mundo es impresionante y la exploración se siente significativa.',
      date: 'Hace 5 días'
    },
    {
      userName: 'Mike Rodriguez',
      userAvatar: 'https://i.pravatar.cc/150?img=8',
      gameName: 'Cyberpunk 2077',
      rating: 8.5,
      comment: 'Después de las actualizaciones, este juego es increíble. Night City es impresionante y la historia es cautivadora.',
      date: 'Hace 1 semana'
    },
    {
      userName: 'Emma Thompson',
      userAvatar: 'https://i.pravatar.cc/150?img=9',
      gameName: 'The Witcher 3',
      rating: 9.5,
      comment: 'Sigue siendo perfecto. Los DLCs son el mejor contenido que he jugado jamás.',
      date: 'Hace 1 semana'
    }
  ];

  // Stats data
  const stats = [
    {
      icon: 'videogame_asset',
      number: '50,000+',
      label: 'Juegos en la Base de Datos',
      description: 'Desde joyas indie hasta títulos AAA'
    },
    {
      icon: 'rate_review',
      number: '2M+',
      label: 'Reseñas de Usuarios',
      description: 'Opiniones honestas de gamers reales'
    },
    {
      icon: 'groups',
      number: '10M+',
      label: 'Usuarios Activos',
      description: 'Únete a nuestra comunidad próspera'
    },
    {
      icon: 'emoji_events',
      number: '500K+',
      label: 'Listas de Juegos',
      description: 'Colecciones curadas y recomendaciones'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2a] to-[#0a0015]" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
      {/* Auth Bar */}
      <div className="absolute top-4 right-6 z-50 flex items-center gap-3">
        {user ? (
          <>
            <span className="text-gray-300 text-sm">Hola, <span className="text-[#b794f4] font-semibold">{user.username}</span></span>
            <button onClick={logout} className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/20 hover:border-[#b794f4] rounded-full transition-all">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/20 hover:border-[#b794f4] rounded-full transition-all">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="px-4 py-2 text-sm text-white bg-gradient-to-r from-[#b794f4] to-[#421d53] rounded-full hover:opacity-90 transition-opacity">
              Registrarse
            </Link>
          </>
        )}
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Featured Games Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Juegos <span className="bg-gradient-to-r from-[#b794f4] to-[#421d53] bg-clip-text text-transparent">Destacados</span>
            </h2>
            <p className="text-gray-400 text-lg">Descubre los títulos más populares y aclamados por la crítica</p>
          </div>

          {/* Games Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="text-[#b794f4] text-xl animate-pulse">Cargando juegos...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/games" className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 hover:border-[#b794f4] rounded-full font-semibold text-white transition-all duration-300 hover:bg-white/10">
              <span>Ver Todos los Juegos</span>
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#421d53]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Por Qué Elegir <span className="bg-gradient-to-r from-[#b794f4] to-[#421d53] bg-clip-text text-transparent">GameTic</span>?
            </h2>
            <p className="text-gray-400 text-lg">La plataforma definitiva para gamers, hecha por gamers</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#b794f4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#421d53]/30 hover:-translate-y-2"
              >
                {/* Glass effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#b794f4] to-[#421d53] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-icons text-white text-2xl">{stat.icon}</span>
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-[#b794f4] mb-1">{stat.label}</div>

                  {/* Description */}
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reseñas <span className="bg-gradient-to-r from-[#b794f4] to-[#421d53] bg-clip-text text-transparent">Recientes</span>
            </h2>
            <p className="text-gray-400 text-lg">Mira lo que dice nuestra comunidad</p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* View All Reviews Button */}
          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 hover:border-[#b794f4] rounded-full font-semibold text-white transition-all duration-300 hover:bg-white/10 flex items-center gap-2 mx-auto">
              <span>Leer Más Reseñas</span>
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#421d53] via-[#2a1a3a] to-[#1a0a2a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#b794f4]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#421d53]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#b794f4] to-[#421d53] mb-6 shadow-lg shadow-[#b794f4]/50">
            <span className="material-icons text-white text-4xl">rocket_launch</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Listo para Subir de Nivel en Tu <br />
            <span className="bg-gradient-to-r from-[#b794f4] via-white to-[#b794f4] bg-clip-text text-transparent">Experiencia Gaming?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Únete a millones de gamers descubriendo su próximo juego favorito, compartiendo reseñas y conectando con una comunidad apasionada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="group relative px-10 py-5 bg-white text-[#421d53] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>Crear Cuenta Gratis</span>
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>

            <Link to="/games" className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white hover:bg-white/20 rounded-full font-bold text-white text-lg transition-all duration-300 flex items-center gap-2">
              <span className="material-icons">info</span>
              <span>Ver Catálogo</span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-400">check_circle</span>
              <span>100% Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-400">verified_user</span>
              <span>Seguro y Privado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-400">speed</span>
              <span>Sin Tarjeta de Crédito</span>
            </div>
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

export default Landing;
