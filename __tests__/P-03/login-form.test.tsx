import React from 'react'
import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextIntlClientProvider } from 'next-intl'

import Login from '@/features/login/components/Login'

import { AppRouterContextProviderMock } from '../providers/AppRouterContextProviderMock'
import { getTranslation, type IntlMessages } from '../helpers/translationHelpers'

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

vi.mock('next-auth/react', () => ({
  signIn: vi.fn().mockResolvedValue({ ok: true, error: null }),
}))
vi.mock('notistack', () => ({
  enqueueSnackbar: vi.fn(),
}))

afterEach(() => cleanup())

const Wrapper = ({
  messages,
  children,
}: {
  messages: IntlMessages
  children: React.ReactNode
}) => (
  <AppRouterContextProviderMock router={{ push: () => { } }}>
    <NextIntlClientProvider locale="pl" messages={messages}>
      {children}
    </NextIntlClientProvider>
  </AppRouterContextProviderMock>
)

test('Walidacja logowania – błędy przy pustym submit', async () => {
  const messages = await getTranslation()

  const user = userEvent.setup()
  const { getByTestId, queryByTestId } = render(
    <Wrapper messages={messages}>
      <Login />
    </Wrapper>
  )

  await user.click(getByTestId('submit'))

  expect(getByTestId('emailError')).toBeTruthy()
  expect(getByTestId('passwordError')).toBeTruthy()
})

test('Po wpisaniu email i hasła błędy znikają', async () => {
  const messages = await getTranslation()

  const user = userEvent.setup()
  const { getByTestId, queryByTestId } = render(
    <Wrapper messages={messages}>
      <Login />
    </Wrapper>
  )

  await user.type(getByTestId('email'), 'test@example.com')
  await user.type(getByTestId('password'), '123456')
  await user.click(getByTestId('submit'))

  expect(queryByTestId('emailError')).toBeNull()
  expect(queryByTestId('passwordError')).toBeNull()
})

test('Link "Zarejestruj się" prowadzi na /register', async () => {
  const messages = await getTranslation()

  const { getAllByRole } = render(
    <Wrapper messages={messages}>
      <Login />
    </Wrapper>
  )

  const links = getAllByRole('link')
  const registerLink = links.find((l) => l.getAttribute('href') === '/register')
  expect(registerLink).toBeTruthy()
  expect(registerLink?.getAttribute('href')).toBe('/register')
})
