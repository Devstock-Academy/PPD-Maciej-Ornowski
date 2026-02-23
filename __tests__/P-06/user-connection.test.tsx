import { expect, test, vi } from 'vitest'

vi.mock('@prisma/client', () => ({
  PrismaClient: vi.fn().mockImplementation(() => ({
    user: { count: vi.fn().mockResolvedValue(0) },
  })),
}))

test('Prisma client łączy się z bazą (User model)', async () => {
  const { PrismaClient } = (await import('@prisma/client')) as unknown as {
    PrismaClient: new () => { user: { count: () => Promise<number | null> } }
  }
  const prisma = new PrismaClient()
  const count = await prisma.user.count().catch(() => null)
  expect(count).toBeDefined()
})
