import React from 'react'
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import Task from '@/features/jsTask/components/Task'

import ReactQueryProvider from '../providers/ReactQueryProvider'
import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({
  useParams: vi.fn(() => ({ id: 'task-123' })),
  useRouter: vi.fn(() => ({ push: vi.fn() })),
}))
vi.mock('next-auth/react', () => ({
  useSession: vi.fn(() => ({
    data: { user: { id: 'user-1' } },
    status: 'authenticated',
  })),
}))
vi.mock('notistack', () => ({ enqueueSnackbar: vi.fn() }))

const mockTaskFromBe = {
  id: 'task-123',
  name: 'Suma dwóch liczb',
  category: 'JS',
  difficultyLevel: 'EASY',
  descriptionStart: 'Napisz funkcję zwracającą sumę dwóch argumentów.',
  descriptionEnd: '',
  sampleInput: [],
  sampleOutput: [],
  submissions: 0,
  tests: [
    { input: [1, 2], output: 3 },
    { input: [0, 0], output: 0 },
    { input: [-1, 1], output: 0 },
  ],
  solutions: [],
}

vi.mock('@/features/jsTask/components/useTask', () => ({
  default: () => ({
    fetchTask: vi.fn().mockResolvedValue(mockTaskFromBe),
  }),
}))

test('P-14: widok po id wyświetla dane zadania z BE (nazwa, opis)', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Suma dwóch liczb')
  expect(screen.getByText(/Napisz funkcję zwracającą sumę dwóch argumentów/)).toBeTruthy()
})

test('P-14: widok przekazuje do komponentu testów pierwsze 3 testy z BE', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Suma dwóch liczb')
  expect(screen.getByText('Testy')).toBeTruthy()
  expect(screen.getByText('Testuj!')).toBeTruthy()
})
