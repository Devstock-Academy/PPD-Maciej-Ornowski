import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { Sprint } from '@/features/sprint'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({ useParams: vi.fn() }))
vi.mock('@tanstack/react-query', () => ({ useQuery: vi.fn() }))

test('Sprint renderuje widok z data-testid sprint-container', async () => {
  vi.mocked(useParams).mockReturnValue({ sprintId: 'sprint-1' } as never)
  vi.mocked(useQuery).mockReturnValue({
    data: { name: 'Sprint 1', activities: [] },
    isLoading: false,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId, getByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Sprint />
    </NextIntlClientProvider>
  )

  expect(getByTestId('sprint-container')).toBeTruthy()
  expect(getByText('Sprint 1')).toBeTruthy()
})

test('Sprint pokazuje loader i sprint-error', async () => {
  vi.mocked(useParams).mockReturnValue({ sprintId: 'sprint-1' } as never)
  vi.mocked(useQuery).mockReturnValue({
    data: null,
    isLoading: true,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Sprint />
    </NextIntlClientProvider>
  )

  expect(getByTestId('loader')).toBeTruthy()
})

test('Sprint pokazuje błąd przy isError', async () => {
  vi.mocked(useParams).mockReturnValue({ sprintId: 'sprint-1' } as never)
  vi.mocked(useQuery).mockReturnValue({
    data: null,
    isLoading: false,
    isError: true,
  } as never)

  const messages = await getTranslation()
  const { getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Sprint />
    </NextIntlClientProvider>
  )

  expect(getByTestId('sprint-error')).toBeTruthy()
})
