import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { Modules } from '@/features/modules'
import Sprint from '@/features/sprint/components/Sprint'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({ useParams: vi.fn() }))
vi.mock('@tanstack/react-query', () => ({ useQuery: vi.fn() }))

const mockModulesFromBe = [
  { id: 'mod-1', name: 'Podstawy', moduleIndex: 1, sprints: [], input: '', output: '' },
  { id: 'mod-2', name: 'React', moduleIndex: 2, sprints: [], input: '', output: '' },
]

const mockSprintFromBe = {
  name: 'Sprint 1',
  duration: 40,
  progress: 25,
  difficultyLevel: '1',
  activities: ['task-1', 'task-2'],
}

test('P-22: lista modułów wyświetla dane z BE (module-container)', async () => {
  vi.mocked(useQuery).mockReturnValue({
    data: mockModulesFromBe,
    isLoading: false,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId, getByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Modules />
    </NextIntlClientProvider>
  )

  expect(getByTestId('module-container')).toBeTruthy()
  expect(getByText(/Podstawy/)).toBeTruthy()
  expect(getByText(/React/)).toBeTruthy()
})

test('P-22: widok sprintu wyświetla dane z BE (sprint-container, Kanban)', async () => {
  vi.mocked(useParams).mockReturnValue({ sprintId: 'sprint-1' } as never)
  vi.mocked(useQuery).mockReturnValue({
    data: mockSprintFromBe,
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
  expect(getByText('Lista zadań')).toBeTruthy()
})
