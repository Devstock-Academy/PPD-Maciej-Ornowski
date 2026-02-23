import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import Sprint from '@/features/sprint/components/Sprint'
import { Kanban } from '@/features/kanban'

import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({ useParams: vi.fn() }))
vi.mock('@tanstack/react-query', () => ({ useQuery: vi.fn() }))

test('P-21: Sprint renderuje widok z Kanban (sprint-container, Lista zadań)', async () => {
  vi.mocked(useParams).mockReturnValue({ sprintId: 'sprint-1' } as never)
  vi.mocked(useQuery).mockReturnValue({
    data: { name: 'Sprint 1', duration: 40, progress: 0, difficultyLevel: '1', activities: [] },
    isLoading: false,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getByTestId, getByText, getAllByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Sprint />
    </NextIntlClientProvider>
  )

  expect(getByTestId('sprint-container')).toBeTruthy()
  expect(getByText('Sprint 1')).toBeTruthy()
  expect(getAllByText('Lista zadań').length).toBeGreaterThanOrEqual(1)
})

test('P-21: Kanban wyświetla zakładkę Lista zadań', async () => {
  vi.mocked(useQuery).mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
  } as never)

  const messages = await getTranslation()
  const { getAllByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Kanban activities={[]} />
    </NextIntlClientProvider>
  )

  expect(getAllByText('Lista zadań').length).toBeGreaterThanOrEqual(1)
})
