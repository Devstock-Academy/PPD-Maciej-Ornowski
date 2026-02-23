import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { NavButton } from '@/components'

test('NavButton renderuje link z route i tekstem', () => {
  const { getByRole } = render(
    <NavButton route="/register" name="Rejestracja" variant="primary" />
  )
  const link = getByRole('link', { name: /Rejestracja/i })
  expect(link.getAttribute('href')).toBe('/register')
  expect(link.textContent).toContain('Rejestracja')
})
