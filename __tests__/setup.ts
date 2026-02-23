import { vi } from 'vitest'

vi.mock('bcrypt', () => ({
  default: { hash: async () => '', compare: async () => true },
}))

vi.mock('@prisma/client', () => ({
  PrismaClient: vi.fn().mockImplementation(() => ({
    user: {
      count: vi.fn().mockResolvedValue(0),
      findMany: vi.fn().mockResolvedValue([]),
    },
    $disconnect: vi.fn().mockResolvedValue(undefined),
  })),
  Category: { LOOP: 'LOOP', FUNCTION: 'FUNCTION' },
  DifficultyLevel: { EASY: 'EASY', MEDIUM: 'MEDIUM', HARD: 'HARD' },
  CssCategory: { SHAPES: 'SHAPES' },
}))
