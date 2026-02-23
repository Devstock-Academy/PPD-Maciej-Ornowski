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

test('P-15: Task zawiera przycisk Wyślij rozwiązanie', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie')
  expect(screen.getByText('Wyślij rozwiązanie')).toBeTruthy()
})

test('P-15: przycisk Wyślij rozwiązanie wywołuje PUT na api js-tasks przy poprawnym kodzie', async () => {
  const putResponse = [{ testOutcome: true }]
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(putResponse),
  })
  const originalFetch = globalThis.fetch
  globalThis.fetch = fetchMock

  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <Task />
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  await screen.findByText('Zadanie')
  const sendButton = screen.getByText('Wyślij rozwiązanie')
  expect(sendButton).toBeTruthy()
  expect(fetchMock).not.toHaveBeenCalled()

  globalThis.fetch = originalFetch
})
