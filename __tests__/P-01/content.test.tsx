import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import Content from '@/features/landing/components/Content'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('react-lite-youtube-embed', () => ({
  default: () => <div data-testid="lite-youtube-embed">LiteYouTubeEmbed</div>,
}))

test('Content renderuje paragrafy z pageContent i miejsce na video (LiteYouTubeEmbed)', async () => {
  const messages = await getTranslation()

  const pageContent = {
    firstParagraph: 'Pierwszy akapit',
    secondParagraph: 'Drugi akapit',
  }

  const { getByText, getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Content pageContent={pageContent} />
    </NextIntlClientProvider>
  )

  expect(getByText('Pierwszy akapit')).toBeTruthy()
  expect(getByText('Drugi akapit')).toBeTruthy()
  expect(getByTestId('lite-youtube-embed')).toBeTruthy()
})
