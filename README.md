# GameTic

Plataforma de catálogo y reseñas de videojuegos construida como una Single Page Application (SPA) con un diseño moderno en tonos púrpura oscuro y efectos de glass morphism.

## Características

- **Landing page** con sección hero y juegos destacados
- **Catálogo de juegos** con 24 títulos, incluyendo portadas oficiales de Steam
- **Tarjetas de juego** con puntuación, géneros y plataformas
- **Tarjetas de reseñas** para valoraciones de usuarios
- **Diseño responsive** adaptado a móvil, tablet y escritorio
- **Efectos visuales** con glass morphism, gradientes y animaciones suaves

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** como bundler y dev server
- **Tailwind CSS 3** con tema personalizado
- **React Router v7** para navegación SPA

## Estructura del proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/       # Componentes reutilizables (ScoreCircle)
│   │   ├── game/         # Componentes de juego (GameCard, ReviewCard)
│   │   └── layout/       # Secciones de layout (Hero)
│   ├── data/             # Datos mock de juegos
│   ├── pages/            # Páginas (Landing, Games)
│   ├── App.tsx           # Rutas principales
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globales y utilidades CSS
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Instalación y uso

```bash
cd frontend
npm install
npm run dev       # Servidor de desarrollo en http://localhost:3000
npm run build     # Build de producción
npm run lint      # Linting con ESLint
```

## Capturas

La aplicación utiliza un tema púrpura oscuro (#421d53) con efectos de glass morphism (`backdrop-blur` + fondos semi-transparentes), tipografía Spline Sans y sombras con glow para crear una experiencia visual inmersiva.
