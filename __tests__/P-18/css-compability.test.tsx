import { readFileSync } from 'fs'
import { resolve } from 'path'
import { expect, test } from 'vitest'

const routePath = resolve(
  process.cwd(),
  'app/api/css-tasks/[...id]/route.ts'
)

test('P-18: route css-tasks/[...id] zawiera PUT i pixelmatch', () => {
  const source = readFileSync(routePath, 'utf-8')
  expect(source).toContain('export const PUT')
  expect(source).toContain('pixelmatch')
})
