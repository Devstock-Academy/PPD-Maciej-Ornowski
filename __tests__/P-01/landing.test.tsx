import React from 'react'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { expect, test, vi } from 'vitest'

import Landing from '@/features/landing/components/Landing'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('react-lite-youtube-embed', () => ({
  default: () => <div data-testid="lite-youtube-embed">LiteYouTubeEmbed</div>,
}))

test('Landing renderuje HeroImage, Content i treść z tłumaczeń (next-intl)', async () => {
  const messages = await getTranslation()

  const { getByText, getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Landing />
    </NextIntlClientProvider>
  )

  expect(getByTestId('hero-image')).toBeTruthy()
  expect(getByTestId('lite-youtube-embed')).toBeTruthy()
  const translatedText =
    'Codebusters pozwoli Ci poznawać i w praktyce ćwiczyć technologie Front-end, takie jak HTML5, CSS oraz JavaScript!'
  expect(getByText(translatedText)).toBeTruthy()
})
