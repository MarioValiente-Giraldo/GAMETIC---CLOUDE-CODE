import { Router, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middlewares/auth';

const router = Router();

const createReviewSchema = z.object({
  gameId: z.number().int().positive(),
  rating: z.number().min(1).max(10),
  comment: z.string().min(10, 'Mínimo 10 caracteres').max(1000),
});

// GET /api/reviews/game/:gameId
router.get('/game/:gameId', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const gameId = parseInt(req.params.gameId as string);

    if (isNaN(gameId)) {
      res.status(400).json({ error: 'ID de juego inválido' });
      return;
    }

    const reviews = await prisma.review.findMany({
      where: { gameId },
      include: { user: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.json(reviews);
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// POST /api/reviews (autenticado)
router.post('/', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const data = createReviewSchema.parse(req.body);

    const game = await prisma.game.findUnique({ where: { id: data.gameId } });

    if (!game) {
      res.status(404).json({ error: 'Juego no encontrado' });
      return;
    }

    const existingReview = await prisma.review.findFirst({
      where: { userId: req.userId!, gameId: data.gameId },
    });

    if (existingReview) {
      res.status(409).json({ error: 'Ya has dejado una reseña para este juego' });
      return;
    }

    const review = await prisma.review.create({
      data: {
        rating: data.rating,
        comment: data.comment,
        userId: req.userId!,
        gameId: data.gameId,
      },
      include: { user: { select: { id: true, username: true } } },
    });

    // Actualizar score promedio del juego
    const avg = await prisma.review.aggregate({
      where: { gameId: data.gameId },
      _avg: { rating: true },
    });

    if (avg._avg.rating) {
      await prisma.game.update({
        where: { id: data.gameId },
        data: { score: Math.round(avg._avg.rating * 10) / 10 },
      });
    }

    res.status(201).json(review);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
