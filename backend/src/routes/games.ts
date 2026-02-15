import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = Router();

// GET /api/games
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { genre, platform, search, page = '1', limit = '12' } = req.query;

    const pageNum = Math.max(1, parseInt(page as string));
    const limitNum = Math.min(50, Math.max(1, parseInt(limit as string)));
    const skip = (pageNum - 1) * limitNum;

    const where: Record<string, unknown> = {};

    if (genre) {
      where.genres = { has: genre as string };
    }

    if (platform) {
      where.platform = { has: platform as string };
    }

    if (search) {
      where.title = { contains: search as string, mode: 'insensitive' };
    }

    const [games, total] = await Promise.all([
      prisma.game.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { score: 'desc' },
        include: {
          _count: { select: { reviews: true } },
        },
      }),
      prisma.game.count({ where }),
    ]);

    res.json({
      games,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// GET /api/games/featured
router.get('/featured', async (_req: Request, res: Response): Promise<void> => {
  try {
    const games = await prisma.game.findMany({
      take: 8,
      orderBy: { score: 'desc' },
      include: {
        _count: { select: { reviews: true } },
      },
    });

    res.json(games);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// GET /api/games/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id as string);

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const game = await prisma.game.findUnique({
      where: { id },
      include: {
        reviews: {
          include: { user: { select: { id: true, username: true } } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!game) {
      res.status(404).json({ error: 'Juego no encontrado' });
      return;
    }

    res.json(game);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
