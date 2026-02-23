import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { SocialMediaIconPicker } from '@/components'

test('SocialMediaIconPicker renderuje link z przekazanym url', () => {
  const { getByRole } = render(<SocialMediaIconPicker url="https://github.com" />)
  const link = getByRole('link')
  expect(link.getAttribute('href')).toBe('https://github.com')
})
