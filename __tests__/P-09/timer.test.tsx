import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { NextIntlClientProvider } from 'next-intl'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Timer } from '@/components'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('react-page-visibility', () => ({
  usePageVisibility: vi.fn(() => true),
}))

beforeEach(async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Timer />
    </NextIntlClientProvider>
  )
})

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

it('Timer ma zakładki Odliczanie i Stoper, pole countdown ma testId countdownInput', () => {
  fireEvent.click(screen.getByRole('button'))
  fireEvent.click(screen.getByText('Odliczanie'))
  fireEvent.click(screen.getByText('Reset'))
  fireEvent.click(screen.getByText('Odliczanie'))
  expect(screen.getByTestId('countdownInput')).toBeTruthy()
})

it('Timer wyświetla przycisk trigger (otwiera popover)', () => {
  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBeGreaterThanOrEqual(1)
})
