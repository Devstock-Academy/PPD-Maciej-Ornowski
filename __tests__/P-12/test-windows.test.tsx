import React from 'react'
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
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
      name: 'Zadanie',
      category: 'JS',
      difficultyLevel: 'EASY',
      descriptionStart: 'Opis.',
      sampleInput: [],
      sampleOutput: [],
      submissions: 0,
      tests: [{ input: [1], output: 2 }],
      solutions: [],
    }),
  }),
}))

test('P-12: okno testowe ma zakładki Testy i Szybkie testy oraz przycisk Testuj', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie')
  expect(screen.getByText('Testy')).toBeTruthy()
  expect(screen.getByText('Szybkie testy')).toBeTruthy()
  expect(screen.getByText('Testuj!')).toBeTruthy()
})

test('P-12: okno wyników testów ma zakładkę Wyniki testów', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie')
  expect(screen.getByText('Wyniki testów')).toBeTruthy()
})
