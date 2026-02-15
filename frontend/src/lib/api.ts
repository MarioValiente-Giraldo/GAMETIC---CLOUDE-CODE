const API_URL = 'http://localhost:4000/api';

function getToken(): string | null {
  return localStorage.getItem('token');
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers as Record<string, string>,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Error de conexión' }));
    throw new Error(error.error || `Error ${res.status}`);
  }

  return res.json();
}

// Types
export interface Game {
  id: number;
  title: string;
  coverImage: string;
  genres: string[];
  score: number;
  platform: string[];
  steamAppId: string | null;
  description: string;
  reviews?: Review[];
  _count?: { reviews: number };
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  createdAt: string;
  user: { id: number; username: string };
}

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface GamesResponse {
  games: Game[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Games
export function getGames(params?: { search?: string; genre?: string; page?: number; limit?: number }) {
  const query = new URLSearchParams();
  if (params?.search) query.set('search', params.search);
  if (params?.genre && params.genre !== 'Todos') query.set('genre', params.genre);
  if (params?.page) query.set('page', String(params.page));
  if (params?.limit) query.set('limit', String(params.limit));
  const qs = query.toString();
  return request<GamesResponse>(`/games${qs ? `?${qs}` : ''}`);
}

export function getFeaturedGames() {
  return request<Game[]>('/games/featured');
}

export function getGame(id: number) {
  return request<Game>(`/games/${id}`);
}

// Auth
export function login(email: string, password: string) {
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export function register(email: string, username: string, password: string) {
  return request<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, username, password }),
  });
}

// Reviews
export function getGameReviews(gameId: number) {
  return request<Review[]>(`/reviews/game/${gameId}`);
}

export function createReview(gameId: number, rating: number, comment: string) {
  return request<Review>('/reviews', {
    method: 'POST',
    body: JSON.stringify({ gameId, rating, comment }),
  });
}
