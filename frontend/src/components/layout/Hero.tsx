import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80"
          alt="Gaming Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#421d53]/90 via-[#1a0a2a]/85 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#b794f4]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#421d53]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
          <span className="material-icons text-[#b794f4] text-sm">stars</span>
          <span className="text-sm font-medium text-white">La Mejor Comunidad de Gamers</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
          <span className="bg-gradient-to-r from-white via-[#b794f4] to-[#421d53] bg-clip-text text-transparent">
            GameTic
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Descubre, reseña y conéctate con millones de gamers en todo el mundo.
          Tu próxima aventura gaming comienza aquí.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/games" className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 hover:border-[#b794f4] rounded-full font-semibold text-white transition-all duration-300 hover:bg-white/10">
              <span>Empezar a Explorar</span>
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          {[
            { number: '50K+', label: 'Juegos' },
            { number: '2M+', label: 'Reseñas' },
            { number: '10M+', label: 'Gamers' }
          ].map((stat, index) => (
            <div key={index} className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-[#b794f4] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <span className="material-icons text-white/60 text-4xl">keyboard_arrow_down</span>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
