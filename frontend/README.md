# GameTic Frontend

Landing page impresionante para GameTic construido con React, Vite y Tailwind CSS.

## Características

### 🎨 Diseño Visual
- **Paleta de colores**: Primary #421d53, gradientes morados
- **Fuente**: Spline Sans
- **Efectos**: Glass panels con backdrop-blur, transiciones suaves
- **Iconos**: Material Icons

### 📱 Secciones del Landing

1. **Hero Section**
   - Título grande "GameTic" con gradiente
   - Subtítulo descriptivo
   - Overlay con gradiente sobre imagen de fondo
   - Botones CTA primarios y secundarios
   - Estadísticas en tarjetas con efecto glass

2. **Featured Games Section**
   - Grid responsive con 8 juegos destacados
   - Tarjetas con: cover image, título, géneros, puntuaciones
   - ScoreCircle para puntuaciones
   - Efectos hover elegantes

3. **Stats/Features Section**
   - 4 estadísticas destacadas
   - Cards con glass effect
   - Iconos de Material Icons
   - Números grandes y descriptivos

4. **Recent Reviews Section**
   - Grid de reviews recientes
   - ReviewCards con avatares de usuarios
   - Puntuaciones y comentarios
   - Datos mock de usuarios reales

5. **CTA Final Section**
   - Llamado a la acción para registrarse
   - Fondo con gradiente animado
   - Botones destacados
   - Trust badges

## 🚀 Inicio Rápido

### Instalación

```bash
cd frontend
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Build para Producción

```bash
npm run build
```

### Preview del Build

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ScoreCircle.tsx       # Círculo de puntuación
│   │   ├── game/
│   │   │   ├── GameCard.tsx          # Tarjeta de juego
│   │   │   └── ReviewCard.tsx        # Tarjeta de review
│   │   └── layout/
│   │       └── Hero.tsx              # Sección hero
│   ├── pages/
│   │   └── Landing.tsx               # Página principal
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🎨 Componentes

### ScoreCircle
Componente para mostrar puntuaciones con colores dinámicos:
- Verde: 8.0+
- Amarillo: 6.0-7.9
- Rojo: <6.0

### GameCard
Tarjeta de juego con:
- Imagen de portada
- Título con efecto hover
- Pills de géneros
- ScoreCircle
- Iconos de plataformas

### ReviewCard
Tarjeta de review con:
- Avatar de usuario
- Nombre y juego
- Puntuación con estrella
- Comentario (line-clamp-3)
- Fecha y botón "Helpful"

### Hero
Sección hero completa con:
- Fondo con imagen y overlays
- Título animado con gradiente
- Subtítulo
- Botones CTA
- Mini estadísticas

## 🛠️ Tecnologías

- **React 18.2**
- **Vite 5.2**
- **TypeScript 5.2**
- **Tailwind CSS 3.4**
- **Material Icons**
- **Spline Sans Font**

## 🎯 Características Técnicas

- Totalmente responsive (mobile-first)
- Efectos hover y transiciones suaves
- Glass morphism effects
- Gradientes dinámicos
- Animaciones CSS personalizadas
- TypeScript para type-safety
- Componentes reutilizables

## 📝 Notas

- Las imágenes usan Unsplash como placeholder
- Los datos son mock data para demostración
- Los avatares usan pravatar.cc
- Todos los efectos están optimizados para rendimiento
