import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import HeroImage from '@/features/landing/components/HeroImage'

import { getTranslation } from '../helpers/translationHelpers'

test('HeroImage renderuje treść i ma data-testid hero-image', async () => {
  const messages = await getTranslation()

  const { getByTestId, getByRole } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <HeroImage />
    </NextIntlClientProvider>
  )

  expect(getByTestId('hero-image')).toBeTruthy()
  expect(getByRole('heading', { level: 1 })).toBeTruthy()
})
