import { beforeEach, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import CodeEditorWrapper from '@/features/jsTask/components/editor/CodeEditorWrapper'
import { CodeEditorProvider } from '@/context'

import ReactQueryProvider from '../providers/ReactQueryProvider'
import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({ useParams: vi.fn(() => ({ id: 'test-task-id' })) }))

beforeEach(async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CodeEditorProvider>
          <CodeEditorWrapper />
        </CodeEditorProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )
})

test('Edytor ma data-testid editor i przyciski Uruchom kod, Wyślij rozwiązanie', () => {
  expect(screen.getByTestId('editor')).toBeTruthy()
  expect(screen.getByText('Uruchom kod')).toBeTruthy()
  expect(screen.getByText('Wyślij rozwiązanie')).toBeTruthy()
})
