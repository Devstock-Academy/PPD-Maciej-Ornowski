import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import Footer from '@/features/singOutLayout/components/Footer'

import { getTranslation } from '../helpers/translationHelpers'

test('Footer renderuje linki: Devstock.pl, Polityka prywatności, Kontakt', async () => {
  const messages = await getTranslation()

  const { getAllByRole } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Footer />
    </NextIntlClientProvider>
  )

  const links = getAllByRole('link')
  expect(links.length).toBeGreaterThanOrEqual(3)
  expect(links[0].getAttribute('href')).toBe('https://devstock.pl')
  expect(links[0].children[0].textContent).toContain('Devstock.pl')
  expect(links[1].getAttribute('href')).toBe('/')
  expect(links[1].children[0].textContent).toContain('Polityka prywatności')
  expect(links[2].getAttribute('href')).toBe('/')
  expect(links[2].children[0].textContent).toContain('Kontakt')
})
