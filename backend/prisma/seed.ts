import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const steamCover = (appId: string) =>
  `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;

const games = [
  // === 24 juegos originales ===
  { title: 'Cyberpunk 2077', steamAppId: '1091500', genres: ['RPG', 'Action', 'Open World'], score: 8.5, platform: ['PC', 'PlayStation'] },
  { title: 'The Witcher 3', steamAppId: '292030', genres: ['RPG', 'Fantasy', 'Adventure'], score: 9.3, platform: ['PC', 'PlayStation'] },
  { title: 'Red Dead Redemption 2', steamAppId: '1174180', genres: ['Action', 'Adventure', 'Western'], score: 9.1, platform: ['PC', 'PlayStation'] },
  { title: 'Elden Ring', steamAppId: '1245620', genres: ['RPG', 'Souls-like', 'Fantasy'], score: 9.5, platform: ['PC', 'PlayStation'] },
  { title: 'God of War', steamAppId: '1593500', genres: ['Action', 'Adventure', 'Mythology'], score: 9.4, platform: ['PC', 'PlayStation'] },
  { title: 'Horizon Zero Dawn', steamAppId: '1151640', genres: ['Action', 'RPG', 'Sci-Fi'], score: 8.8, platform: ['PC', 'PlayStation'] },
  { title: 'Baldurs Gate 3', steamAppId: '1086940', genres: ['RPG', 'Strategy', 'Fantasy'], score: 9.6, platform: ['PC'] },
  { title: 'Starfield', steamAppId: '1716740', genres: ['RPG', 'Sci-Fi', 'Space'], score: 7.8, platform: ['PC'] },
  { title: 'Hogwarts Legacy', steamAppId: '990080', genres: ['RPG', 'Action', 'Adventure'], score: 8.4, platform: ['PC', 'PlayStation'] },
  { title: 'Spider-Man Remastered', steamAppId: '1817070', genres: ['Action', 'Adventure', 'Superhero'], score: 9.0, platform: ['PC', 'PlayStation'] },
  { title: 'Resident Evil 4', steamAppId: '2050650', genres: ['Horror', 'Action', 'Survival'], score: 9.2, platform: ['PC', 'PlayStation'] },
  { title: 'Hades', steamAppId: '1145360', genres: ['Roguelike', 'Action', 'Indie'], score: 9.3, platform: ['PC', 'PlayStation'] },
  { title: 'Dark Souls III', steamAppId: '374320', genres: ['RPG', 'Souls-like', 'Dark Fantasy'], score: 9.0, platform: ['PC', 'PlayStation'] },
  { title: 'Sekiro', steamAppId: '814380', genres: ['Action', 'Souls-like', 'Adventure'], score: 9.1, platform: ['PC', 'PlayStation'] },
  { title: 'Death Stranding', steamAppId: '1850570', genres: ['Action', 'Adventure', 'Sci-Fi'], score: 8.2, platform: ['PC', 'PlayStation'] },
  { title: 'Monster Hunter World', steamAppId: '582010', genres: ['Action', 'RPG', 'Co-op'], score: 8.6, platform: ['PC', 'PlayStation'] },
  { title: 'Final Fantasy VII Remake', steamAppId: '1462040', genres: ['RPG', 'Action', 'Fantasy'], score: 8.9, platform: ['PC', 'PlayStation'] },
  { title: 'Persona 5 Royal', steamAppId: '1687950', genres: ['RPG', 'JRPG', 'Turn-Based'], score: 9.4, platform: ['PC', 'PlayStation'] },
  { title: 'Ghost of Tsushima', steamAppId: '2215430', genres: ['Action', 'Adventure', 'Open World'], score: 9.0, platform: ['PC', 'PlayStation'] },
  { title: 'The Last of Us Part I', steamAppId: '1888930', genres: ['Action', 'Adventure', 'Survival'], score: 9.2, platform: ['PC', 'PlayStation'] },
  { title: 'Doom Eternal', steamAppId: '782330', genres: ['FPS', 'Action', 'Horror'], score: 8.8, platform: ['PC', 'PlayStation'] },
  { title: 'Control', steamAppId: '870780', genres: ['Action', 'Adventure', 'Supernatural'], score: 8.5, platform: ['PC', 'PlayStation'] },
  { title: 'Disco Elysium', steamAppId: '632470', genres: ['RPG', 'Detective', 'Indie'], score: 9.4, platform: ['PC', 'PlayStation'] },
  { title: 'Hollow Knight', steamAppId: '367520', genres: ['Metroidvania', 'Platformer', 'Indie'], score: 9.2, platform: ['PC', 'PlayStation'] },

  // === Juegos adicionales (25-59) ===
  { title: 'Alan Wake 2', steamAppId: '2774580', genres: ['Horror', 'Action', 'Thriller'], score: 8.9, platform: ['PC', 'PlayStation'] },
  { title: 'Lies of P', steamAppId: '1627720', genres: ['Souls-like', 'Action', 'RPG'], score: 8.5, platform: ['PC', 'PlayStation'] },
  { title: 'Armored Core VI', steamAppId: '1888160', genres: ['Action', 'Mecha', 'Sci-Fi'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Sea of Stars', steamAppId: '1244090', genres: ['RPG', 'JRPG', 'Indie'], score: 8.8, platform: ['PC', 'PlayStation'] },
  { title: 'It Takes Two', steamAppId: '1426210', genres: ['Adventure', 'Co-op', 'Platformer'], score: 9.1, platform: ['PC', 'PlayStation'] },
  { title: 'Celeste', steamAppId: '504230', genres: ['Platformer', 'Indie', 'Precision'], score: 9.3, platform: ['PC'] },
  { title: 'Stardew Valley', steamAppId: '413150', genres: ['Simulation', 'RPG', 'Farming'], score: 9.5, platform: ['PC'] },
  { title: 'Terraria', steamAppId: '105600', genres: ['Sandbox', 'Adventure', 'Survival'], score: 9.2, platform: ['PC'] },
  { title: 'Half-Life 2', steamAppId: '220', genres: ['FPS', 'Action', 'Sci-Fi'], score: 9.6, platform: ['PC'] },
  { title: 'Portal 2', steamAppId: '620', genres: ['Puzzle', 'FPS', 'Co-op'], score: 9.7, platform: ['PC'] },
  { title: 'Left 4 Dead 2', steamAppId: '550', genres: ['FPS', 'Co-op', 'Zombie'], score: 9.0, platform: ['PC'] },
  { title: 'Civilization VI', steamAppId: '289070', genres: ['Strategy', '4X', 'Turn-Based'], score: 8.8, platform: ['PC'] },
  { title: 'XCOM 2', steamAppId: '268500', genres: ['Strategy', 'Tactical', 'Turn-Based'], score: 8.6, platform: ['PC'] },
  { title: 'Total War: Warhammer III', steamAppId: '1142710', genres: ['Strategy', 'RTS', 'Fantasy'], score: 8.3, platform: ['PC'] },
  { title: 'Hitman 3', steamAppId: '1659040', genres: ['Stealth', 'Action', 'Sandbox'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Metal Gear Solid V', steamAppId: '287700', genres: ['Stealth', 'Action', 'Open World'], score: 9.0, platform: ['PC', 'PlayStation'] },
  { title: 'Yakuza 0', steamAppId: '638970', genres: ['Action', 'Adventure', 'Beat-em-up'], score: 9.1, platform: ['PC', 'PlayStation'] },
  { title: 'Subnautica', steamAppId: '264710', genres: ['Survival', 'Adventure', 'Open World'], score: 9.1, platform: ['PC'] },
  { title: 'No Mans Sky', steamAppId: '275850', genres: ['Survival', 'Exploration', 'Sci-Fi'], score: 8.4, platform: ['PC', 'PlayStation'] },
  { title: 'Deep Rock Galactic', steamAppId: '548430', genres: ['FPS', 'Co-op', 'Mining'], score: 9.2, platform: ['PC'] },
  { title: 'Cuphead', steamAppId: '268910', genres: ['Platformer', 'Indie', 'Action'], score: 9.0, platform: ['PC'] },
  { title: 'Ori and the Will of the Wisps', steamAppId: '1057090', genres: ['Metroidvania', 'Platformer', 'Indie'], score: 9.3, platform: ['PC'] },
  { title: 'Dead Cells', steamAppId: '588650', genres: ['Roguelike', 'Metroidvania', 'Action'], score: 9.0, platform: ['PC'] },
  { title: 'Rocket League', steamAppId: '252950', genres: ['Sports', 'Racing', 'Competitive'], score: 8.6, platform: ['PC', 'PlayStation'] },
  { title: 'Outer Wilds', steamAppId: '753640', genres: ['Adventure', 'Exploration', 'Puzzle'], score: 9.5, platform: ['PC'] },
  { title: 'Divinity: Original Sin 2', steamAppId: '435150', genres: ['RPG', 'Strategy', 'Co-op'], score: 9.4, platform: ['PC'] },
  { title: 'Bioshock Infinite', steamAppId: '8870', genres: ['FPS', 'Action', 'Story-Rich'], score: 9.1, platform: ['PC'] },
  { title: 'Titanfall 2', steamAppId: '1237970', genres: ['FPS', 'Action', 'Mecha'], score: 9.0, platform: ['PC'] },
  { title: 'Vampire Survivors', steamAppId: '1794680', genres: ['Roguelike', 'Action', 'Indie'], score: 9.0, platform: ['PC'] },
  { title: 'Valheim', steamAppId: '892970', genres: ['Survival', 'Co-op', 'Open World'], score: 8.8, platform: ['PC'] },
  { title: 'Hades II', steamAppId: '1145350', genres: ['Roguelike', 'Action', 'Early Access'], score: 8.9, platform: ['PC'] },
  { title: 'Returnal', steamAppId: '1649240', genres: ['Roguelike', 'Action', 'Sci-Fi'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Ni no Kuni: Wrath of the White Witch', steamAppId: '798460', genres: ['RPG', 'JRPG', 'Adventure'], score: 8.5, platform: ['PC'] },
  { title: 'Slay the Spire', steamAppId: '646570', genres: ['Roguelike', 'Card Game', 'Strategy'], score: 9.4, platform: ['PC'] },
  { title: 'Into the Breach', steamAppId: '590380', genres: ['Strategy', 'Tactical', 'Indie'], score: 9.0, platform: ['PC'] },

  // === Juegos adicionales (60-100) ===
  { title: 'Factorio', steamAppId: '427520', genres: ['Simulation', 'Strategy', 'Automation'], score: 9.7, platform: ['PC'] },
  { title: 'RimWorld', steamAppId: '294100', genres: ['Simulation', 'Strategy', 'Colony Sim'], score: 9.5, platform: ['PC'] },
  { title: 'Undertale', steamAppId: '391540', genres: ['RPG', 'Indie', 'Story-Rich'], score: 9.3, platform: ['PC'] },
  { title: 'The Binding of Isaac: Rebirth', steamAppId: '250900', genres: ['Roguelike', 'Action', 'Indie'], score: 9.1, platform: ['PC'] },
  { title: 'Satisfactory', steamAppId: '526870', genres: ['Simulation', 'Open World', 'Automation'], score: 9.0, platform: ['PC'] },
  { title: 'Dying Light 2', steamAppId: '534380', genres: ['Action', 'Open World', 'Zombie'], score: 7.9, platform: ['PC', 'PlayStation'] },
  { title: 'A Plague Tale: Requiem', steamAppId: '1182900', genres: ['Adventure', 'Action', 'Story-Rich'], score: 8.6, platform: ['PC', 'PlayStation'] },
  { title: 'Sifu', steamAppId: '2138710', genres: ['Action', 'Beat-em-up', 'Martial Arts'], score: 8.4, platform: ['PC', 'PlayStation'] },
  { title: 'Inscryption', steamAppId: '1092790', genres: ['Card Game', 'Horror', 'Indie'], score: 9.2, platform: ['PC'] },
  { title: 'Tunic', steamAppId: '553420', genres: ['Adventure', 'Action', 'Indie'], score: 8.8, platform: ['PC'] },
  { title: 'Psychonauts 2', steamAppId: '607080', genres: ['Platformer', 'Adventure', 'Action'], score: 8.9, platform: ['PC', 'PlayStation'] },
  { title: 'Deathloop', steamAppId: '1252330', genres: ['FPS', 'Action', 'Stealth'], score: 8.3, platform: ['PC', 'PlayStation'] },
  { title: 'Prey', steamAppId: '480490', genres: ['FPS', 'Sci-Fi', 'Horror'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Dishonored 2', steamAppId: '403640', genres: ['Stealth', 'Action', 'FPS'], score: 8.8, platform: ['PC', 'PlayStation'] },
  { title: 'Tomb Raider', steamAppId: '203160', genres: ['Action', 'Adventure', 'Platformer'], score: 8.6, platform: ['PC', 'PlayStation'] },
  { title: 'Rise of the Tomb Raider', steamAppId: '391220', genres: ['Action', 'Adventure', 'Open World'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Shadow of the Tomb Raider', steamAppId: '750920', genres: ['Action', 'Adventure', 'Stealth'], score: 8.4, platform: ['PC', 'PlayStation'] },
  { title: 'Deus Ex: Mankind Divided', steamAppId: '337000', genres: ['RPG', 'Stealth', 'Sci-Fi'], score: 8.3, platform: ['PC', 'PlayStation'] },
  { title: 'Blasphemous 2', steamAppId: '2114740', genres: ['Metroidvania', 'Souls-like', 'Indie'], score: 8.6, platform: ['PC'] },
  { title: 'Dave the Diver', steamAppId: '1868140', genres: ['Adventure', 'Simulation', 'Indie'], score: 9.0, platform: ['PC'] },
  { title: 'Lethal Company', steamAppId: '1966720', genres: ['Horror', 'Co-op', 'Indie'], score: 9.1, platform: ['PC'] },
  { title: 'Palworld', steamAppId: '1623730', genres: ['Survival', 'Open World', 'Co-op'], score: 8.0, platform: ['PC'] },
  { title: 'Manor Lords', steamAppId: '1363080', genres: ['Strategy', 'Simulation', 'Medieval'], score: 8.2, platform: ['PC'] },
  { title: 'Helldivers 2', steamAppId: '553850', genres: ['FPS', 'Co-op', 'Action'], score: 8.5, platform: ['PC', 'PlayStation'] },
  { title: 'Like a Dragon: Infinite Wealth', steamAppId: '2072450', genres: ['RPG', 'JRPG', 'Adventure'], score: 9.2, platform: ['PC', 'PlayStation'] },
  { title: 'Warhammer 40K: Space Marine 2', steamAppId: '2183900', genres: ['Action', 'FPS', 'Co-op'], score: 8.4, platform: ['PC', 'PlayStation'] },
  { title: 'Black Myth: Wukong', steamAppId: '2358720', genres: ['Action', 'RPG', 'Mythology'], score: 9.0, platform: ['PC', 'PlayStation'] },
  { title: 'Metaphor: ReFantazio', steamAppId: '2679460', genres: ['RPG', 'JRPG', 'Fantasy'], score: 9.3, platform: ['PC', 'PlayStation'] },
  { title: 'Dragon Age: The Veilguard', steamAppId: '1845910', genres: ['RPG', 'Action', 'Fantasy'], score: 7.8, platform: ['PC', 'PlayStation'] },
  { title: 'Astro Bot', steamAppId: '2573020', genres: ['Platformer', 'Action', 'Adventure'], score: 9.4, platform: ['PlayStation'] },
  { title: 'Balatro', steamAppId: '2379780', genres: ['Card Game', 'Roguelike', 'Indie'], score: 9.5, platform: ['PC'] },
  { title: 'Animal Well', steamAppId: '813230', genres: ['Metroidvania', 'Puzzle', 'Indie'], score: 9.1, platform: ['PC'] },
  { title: 'Raft', steamAppId: '648800', genres: ['Survival', 'Co-op', 'Open World'], score: 8.3, platform: ['PC'] },
  { title: 'The Forest', steamAppId: '242760', genres: ['Survival', 'Horror', 'Open World'], score: 8.7, platform: ['PC', 'PlayStation'] },
  { title: 'Sons of the Forest', steamAppId: '1326470', genres: ['Survival', 'Horror', 'Co-op'], score: 8.1, platform: ['PC'] },
  { title: 'Phasmophobia', steamAppId: '739630', genres: ['Horror', 'Co-op', 'Indie'], score: 8.8, platform: ['PC'] },
  { title: 'Rust', steamAppId: '252490', genres: ['Survival', 'Open World', 'Multiplayer'], score: 8.2, platform: ['PC', 'PlayStation'] },
  { title: 'Nier: Automata', steamAppId: '524220', genres: ['RPG', 'Action', 'Sci-Fi'], score: 9.3, platform: ['PC', 'PlayStation'] },
  { title: 'Monster Hunter Rise', steamAppId: '1446780', genres: ['Action', 'RPG', 'Co-op'], score: 8.5, platform: ['PC'] },
  { title: 'Cult of the Lamb', steamAppId: '1313140', genres: ['Roguelike', 'Simulation', 'Indie'], score: 8.7, platform: ['PC'] },
  { title: 'Noita', steamAppId: '881100', genres: ['Roguelike', 'Action', 'Pixel Art'], score: 8.9, platform: ['PC'] },
];

async function main() {
  console.log('Seeding database...');

  for (const game of games) {
    await prisma.game.create({
      data: {
        title: game.title,
        coverImage: steamCover(game.steamAppId),
        genres: game.genres,
        score: game.score,
        platform: game.platform,
        steamAppId: game.steamAppId,
      },
    });
  }

  console.log(`Seeded ${games.length} games successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
