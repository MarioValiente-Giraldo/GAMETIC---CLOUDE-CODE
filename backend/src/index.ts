import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import gamesRoutes from './routes/games';
import reviewsRoutes from './routes/reviews';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/reviews', reviewsRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`GameTic API running on http://localhost:${PORT}`);
});
