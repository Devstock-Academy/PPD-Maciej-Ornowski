import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useQuery } from '@tanstack/react-query'

import { Modules } from '@/features/modules'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('@tanstack/react-query', () => ({ useQuery: vi.fn() }))

const mockModules = [
  { id: '1', name: 'Moduł 1', moduleIndex: 1 },
  { id: '2', name: 'Moduł 2', moduleIndex: 2 },
]

test('Modules renderuje listę z data-testid module-container', async () => {
  vi.mocked(useQuery).mockReturnValue({
    data: mockModules,
    isLoading: false,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId, getByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Modules />
    </NextIntlClientProvider>
  )

  const container = getByTestId('module-container')
  expect(container).toBeTruthy()
  expect(container.children.length).toBe(mockModules.length)
  expect(getByText(/Moduł 1/)).toBeTruthy()
  expect(getByText(/Moduł 2/)).toBeTruthy()
})

test('Modules pokazuje loader przy isLoading', async () => {
  vi.mocked(useQuery).mockReturnValue({
    data: [],
    isLoading: true,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Modules />
    </NextIntlClientProvider>
  )

  expect(getByTestId('loader')).toBeTruthy()
})

test('Modules pokazuje błąd przy isError', async () => {
  vi.mocked(useQuery).mockReturnValue({
    data: [],
    isLoading: false,
    isError: true,
  } as never)

  const messages = await getTranslation()
  const { getByTestId } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Modules />
    </NextIntlClientProvider>
  )

  expect(getByTestId('modules-error')).toBeTruthy()
})
