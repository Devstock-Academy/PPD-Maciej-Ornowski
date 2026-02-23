import React from 'react'
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextIntlClientProvider } from 'next-intl'

import Task from '@/features/jsTask/components/Task'

import ReactQueryProvider from '../providers/ReactQueryProvider'
import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({ id: 'task-1' })),
  useRouter: vi.fn(() => ({ push: vi.fn() })),
}))
vi.mock('next-auth/react', () => ({
  useSession: vi.fn(() => ({
    data: { user: { id: 'user-1' } },
    status: 'authenticated',
  })),
}))
vi.mock('notistack', () => ({ enqueueSnackbar: vi.fn() }))
vi.mock('@/features/jsTask/components/useTask', () => ({
  default: () => ({
    fetchTask: vi.fn().mockResolvedValue({
      id: 'task-1',
      name: 'Zadanie testowe',
      category: 'JS',
      difficultyLevel: 'EASY',
      descriptionStart: 'Opis zadania.',
      sampleInput: [],
      sampleOutput: [],
      submissions: 0,
      tests: [{ input: [1], output: 2 }],
      solutions: [],
    }),
  }),
}))

test('P-07: widok /task ma górny pasek z poprzednie/następne zadanie, Timer, fullscreen', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie testowe')
  expect(screen.getByText(/poprzednie zadanie/i)).toBeTruthy()
  expect(screen.getByText(/następne zadanie/i)).toBeTruthy()
  expect(screen.getByTestId('editor')).toBeTruthy()
  expect(screen.getByText('Uruchom kod')).toBeTruthy()
  expect(screen.getByText('Wyślij rozwiązanie')).toBeTruthy()
})

test('P-07: lewa kolumna ma opis zadania i okno testowe (zakładki Testy / Szybkie testy)', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie testowe')
  expect(screen.getByText(/Opis zadania\./)).toBeTruthy()
  expect(screen.getByText('Testy')).toBeTruthy()
  expect(screen.getByText('Szybkie testy')).toBeTruthy()
})

test('P-07: po kliknięciu fullscreen lewa kolumna znika, prawa zajmuje całą szerokość', async () => {
  const messages = await getTranslation()
  const user = userEvent.setup()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie testowe')
  const fullscreenButton = screen.getAllByRole('button').find(
    (el) => el.querySelector('svg') && el.closest('.flex.flex-row.gap-4')
  )
  expect(fullscreenButton).toBeDefined()
  if (fullscreenButton) {
    await user.click(fullscreenButton)
    const leftColumn = document.querySelector('.w-0.pr-0.opacity-0')
    expect(leftColumn).toBeTruthy()
  }
})
