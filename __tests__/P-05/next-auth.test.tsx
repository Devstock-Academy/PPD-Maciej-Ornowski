import { expect, test } from 'vitest'

import { authOptions } from '@/lib/authOptions'

test('authOptions zawiera providery github i credentials', () => {
  const providers = authOptions.providers?.map((p) => p?.id) ?? []
  expect(providers).toContain('github')
  expect(providers).toContain('credentials')
})
