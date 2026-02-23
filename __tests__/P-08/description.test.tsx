import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import Description from '@/features/jsTask/components/Description'

import { getTranslation } from '../helpers/translationHelpers'

const mockTask = {
  id: '1',
  name: 'Sample JS Task',
  category: 'JS',
  difficultyLevel: 'EASY' as const,
  descriptionStart: 'Sample description.',
  descriptionEnd: '',
  sampleInput: ['input1'],
  sampleOutput: ['output1'],
  submissions: 4,
  tests: [],
  solutions: [],
}

test('Description renderuje tytuł, opis, kategoria, trudność i sample input/output', async () => {
  const messages = await getTranslation()

  const { getByText } = render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <Description data={mockTask} />
    </NextIntlClientProvider>
  )

  expect(getByText('Sample JS Task')).toBeTruthy()
  expect(getByText('Sample description.')).toBeTruthy()
  expect(getByText(/Kategoria: JS/)).toBeTruthy()
  expect(getByText(/Stopień: łatwy/)).toBeTruthy()
  expect(getByText('input1')).toBeTruthy()
  expect(getByText('output1')).toBeTruthy()
})
