import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { Checkbox } from '@/components'

test('Checkbox renderuje label i opcjonalny link', () => {
  const { getByText, getByRole } = render(
    <Checkbox label="Akceptuję regulamin" linkName="Regulamin" href="/terms" />
  )
  expect(getByText('Akceptuję regulamin')).toBeTruthy()
  const link = getByRole('link', { name: /Regulamin/i })
  expect(link.getAttribute('href')).toBe('/terms')
  expect(getByRole('checkbox')).toBeTruthy()
})
