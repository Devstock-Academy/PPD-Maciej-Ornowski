import React from 'react'
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import CssTask from '@/features/cssTask/components/CssTask'

vi.mock('@/features/cssTask/components/OutputView', () => ({
  default: () => <div data-testid="output-view">Wynik kodu</div>,
}))

import ReactQueryProvider from '../providers/ReactQueryProvider'
import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({ id: 'css-1' })),
  useRouter: vi.fn(() => ({ push: vi.fn() })),
}))
vi.mock('next-auth/react', () => ({
  useSession: vi.fn(() => ({
    data: { user: { id: 'user-1' } },
    status: 'authenticated',
  })),
}))
vi.mock('notistack', () => ({ enqueueSnackbar: vi.fn() }))

const mockCssTask = {
  id: 'css-1',
  name: 'Zadanie CSS',
  targetUrl: '/target.png',
  requirements: 80,
  solutions: [],
  colors: ['#fff', '#000'],
  category: 'CSS',
  difficulty: 'EASY',
  description: 'Opis zadania CSS.',
  allSolutions: 0,
}

vi.mock('@/features/cssTask/components/useCssTask', () => ({
  default: () => ({
    fetchTask: vi.fn().mockResolvedValue(mockCssTask),
    result: 0,
    isLoading: false,
    isModalOpened: false,
    handleModalVisibility: vi.fn(),
    matchAction: vi.fn(),
  }),
}))

test('P-16: widok zadania CSS wyświetla dane zadania i layout (górny pasek, edytor, podgląd)', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CssTask />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie CSS')
  expect(screen.getByText('Zadanie CSS')).toBeTruthy()
  expect(screen.getByText('poprzednie zadanie')).toBeTruthy()
  expect(screen.getByText('następne zadanie')).toBeTruthy()
  expect(screen.getByTestId('output-view')).toBeTruthy()
})

test('P-16: widok zawiera sekcję wyniku kodu (mock OutputView – slider w pełnym renderze)', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CssTask />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie CSS')
  expect(screen.getByTestId('output-view')).toBeTruthy()
  expect(screen.getByText('Wynik kodu')).toBeTruthy()
})
