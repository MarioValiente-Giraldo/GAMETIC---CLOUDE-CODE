export interface Game {
  id: number;
  title: string;
  coverImage: string;
  genres: string[];
  score: number;
  platform: string[];
}

// URLs de portadas oficiales verificables
export const allGames: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
    genres: ['RPG', 'Action', 'Open World'],
    score: 8.5,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 2,
    title: 'The Witcher 3',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg',
    genres: ['RPG', 'Fantasy', 'Adventure'],
    score: 9.3,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 3,
    title: 'Red Dead Redemption 2',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg',
    genres: ['Action', 'Adventure', 'Western'],
    score: 9.1,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 4,
    title: 'Elden Ring',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
    genres: ['RPG', 'Souls-like', 'Fantasy'],
    score: 9.5,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 5,
    title: 'God of War',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg',
    genres: ['Action', 'Adventure', 'Mythology'],
    score: 9.4,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 6,
    title: 'Horizon Zero Dawn',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg',
    genres: ['Action', 'RPG', 'Sci-Fi'],
    score: 8.8,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 7,
    title: 'Baldurs Gate 3',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
    genres: ['RPG', 'Strategy', 'Fantasy'],
    score: 9.6,
    platform: ['PC']
  },
  {
    id: 8,
    title: 'Starfield',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg',
    genres: ['RPG', 'Sci-Fi', 'Space'],
    score: 7.8,
    platform: ['PC']
  },
  {
    id: 9,
    title: 'Hogwarts Legacy',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg',
    genres: ['RPG', 'Action', 'Adventure'],
    score: 8.4,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 10,
    title: 'Spider-Man Remastered',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg',
    genres: ['Action', 'Adventure', 'Superhero'],
    score: 9.0,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 11,
    title: 'Resident Evil 4',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg',
    genres: ['Horror', 'Action', 'Survival'],
    score: 9.2,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 12,
    title: 'Hades',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg',
    genres: ['Roguelike', 'Action', 'Indie'],
    score: 9.3,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 13,
    title: 'Dark Souls III',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg',
    genres: ['RPG', 'Souls-like', 'Dark Fantasy'],
    score: 9.0,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 14,
    title: 'Sekiro',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg',
    genres: ['Action', 'Souls-like', 'Adventure'],
    score: 9.1,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 15,
    title: 'Death Stranding',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    score: 8.2,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 16,
    title: 'Monster Hunter World',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg',
    genres: ['Action', 'RPG', 'Co-op'],
    score: 8.6,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 17,
    title: 'Final Fantasy VII Remake',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg',
    genres: ['RPG', 'Action', 'Fantasy'],
    score: 8.9,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 18,
    title: 'Persona 5 Royal',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg',
    genres: ['RPG', 'JRPG', 'Turn-Based'],
    score: 9.4,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 19,
    title: 'Ghost of Tsushima',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg',
    genres: ['Action', 'Adventure', 'Open World'],
    score: 9.0,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 20,
    title: 'The Last of Us Part I',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg',
    genres: ['Action', 'Adventure', 'Survival'],
    score: 9.2,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 21,
    title: 'Doom Eternal',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg',
    genres: ['FPS', 'Action', 'Horror'],
    score: 8.8,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 22,
    title: 'Control',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg',
    genres: ['Action', 'Adventure', 'Supernatural'],
    score: 8.5,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 23,
    title: 'Disco Elysium',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg',
    genres: ['RPG', 'Detective', 'Indie'],
    score: 9.4,
    platform: ['PC', 'PlayStation']
  },
  {
    id: 24,
    title: 'Hollow Knight',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    genres: ['Metroidvania', 'Platformer', 'Indie'],
    score: 9.2,
    platform: ['PC', 'PlayStation']
  }
];

export const featuredGames = allGames.slice(0, 8);
