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

const mockTask = {
  id: 'css-1',
  name: 'Zadanie CSS',
  targetUrl: '/target.png',
  requirements: 90,
  solutions: [],
  colors: ['#fff', '#000'],
  category: 'CSS',
  difficulty: 'EASY',
  description: 'Opis.',
  allSolutions: 0,
}

const mockFetchTask = vi.fn().mockResolvedValue(mockTask)
vi.mock('@/features/cssTask/components/useCssTask', () => ({
  default: () => ({
    fetchTask: mockFetchTask,
    result: 85,
    isLoading: false,
    isModalOpened: false,
    handleModalVisibility: vi.fn(),
    matchAction: vi.fn(),
  }),
}))

test('P-17: widok zadania CSS pobiera dane z api/css-tasks (mock useCssTask)', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CssTask />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie CSS')
  expect(mockFetchTask).toHaveBeenCalled()
  expect(screen.getByText('Zadanie CSS')).toBeTruthy()
})
