import React from 'react'
import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useSession } from 'next-auth/react'

import { TasksList } from '@/components'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next-auth/react', () => ({ useSession: vi.fn() }))

const mockTasks = [
  { id: '1', name: 'Task 1', category: 'Category 1', difficultyLevel: 'Easy', descriptionEnd: '', descriptionStart: '', sampleInput: [], sampleOutput: [], tests: [], solutions: [] },
  { id: '2', name: 'Task 2', category: 'Category 2', difficultyLevel: 'Medium', descriptionEnd: '', descriptionStart: '', sampleInput: [], sampleOutput: [], tests: [], solutions: [] },
]

test('TasksList renderuje listę z data-testid tasks-lists-container', async () => {
  vi.mocked(useSession).mockReturnValue({
    data: { user: { id: 'user1' } },
    status: 'authenticated',
  } as never)

  const messages = await getTranslation()
  const setLimit = vi.fn()
  const { getByTestId, getByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <TasksList data={mockTasks} setLimit={setLimit} />
    </NextIntlClientProvider>
  )

  const container = getByTestId('tasks-lists-container')
  expect(container).toBeTruthy()
  expect(container.children.length).toBe(mockTasks.length)
  expect(getByText('Task 1')).toBeTruthy()
  expect(getByText('Task 2')).toBeTruthy()
})

test('TasksList renderuje przycisk Więcej zadań', async () => {
  const messages = await getTranslation()
  const setLimit = vi.fn()
  const { getAllByRole } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <TasksList data={mockTasks} setLimit={setLimit} />
    </NextIntlClientProvider>
  )

  const buttons = getAllByRole('button', { name: /Więcej zadań/i })
  expect(buttons.length).toBeGreaterThanOrEqual(1)
})
