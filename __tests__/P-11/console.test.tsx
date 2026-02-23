import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import Console from '@/features/jsTask/components/Console'
import { CodeEditorProvider } from '@/context'

import ReactQueryProvider from '../providers/ReactQueryProvider'
import { getTranslation } from '../helpers/translationHelpers'

vi.mock('next/navigation', () => ({ useParams: vi.fn(() => ({ id: 'task-1' })) }))
vi.mock('notistack', () => ({ enqueueSnackbar: vi.fn() }))
afterEach(() => cleanup())

test('P-11: Konsola renderuje zakładkę Konsola i jest w kontekście CodeEditor', async () => {
  const messages = await getTranslation()
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CodeEditorProvider>
          <Console />
        </CodeEditorProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  expect(screen.getByText('Konsola')).toBeTruthy()
})

test('P-11: edytor z konsolą ma przycisk Uruchom kod (Context łączy edytor z konsolą)', async () => {
  const messages = await getTranslation()
  const { default: CodeEditorWrapper } = await import(
    '@/features/jsTask/components/editor/CodeEditorWrapper'
  )
  render(
    <NextIntlClientProvider locale="pl" messages={messages}>
      <ReactQueryProvider>
        <CodeEditorProvider>
          <CodeEditorWrapper refetch={vi.fn()} />
          <Console />
        </CodeEditorProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  )

  expect(screen.getByText('Uruchom kod')).toBeTruthy()
  expect(screen.getAllByText('Konsola').length).toBeGreaterThanOrEqual(1)
})
