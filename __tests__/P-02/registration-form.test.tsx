import React from 'react'
import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextIntlClientProvider } from 'next-intl'

import RegistrationForm from '@/features/registration/components/RegistrationForm'
import { AppRouterContextProviderMock, ReactQueryProvider } from '../providers'
import { getTranslation, type IntlMessages } from '../helpers/translationHelpers'

afterEach(() => cleanup())

const Wrapper = ({
  messages,
  children,
}: {
  messages: IntlMessages
  children: React.ReactNode
}) => (
  <ReactQueryProvider>
    <AppRouterContextProviderMock router={{ push: () => {} }}>
      <NextIntlClientProvider locale="pl" messages={messages}>
        {children}
      </NextIntlClientProvider>
    </AppRouterContextProviderMock>
  </ReactQueryProvider>
)

test('Walidacja formularza rejestracji – błędy przy pustym submit', async () => {
  const messages = await getTranslation()

  const user = userEvent.setup()
  const { getByTestId, getByRole } = render(
    <Wrapper messages={messages}>
      <RegistrationForm />
    </Wrapper>
  )

  await user.click(getByTestId('registrationSubmit'))

  expect(getByTestId('emailError')).toBeTruthy()
  expect(getByTestId('passwordError')).toBeTruthy()
})

test('Po poprawnej rejestracji wyświetla się modal z data-testid modal', async () => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({}),
  } as unknown as Response)

  const messages = await getTranslation()

  const user = userEvent.setup()
  const { getByTestId, getByRole } = render(
    <Wrapper messages={messages}>
      <RegistrationForm />
    </Wrapper>
  )

  await user.type(getByTestId('email'), 'test@example.com')
  await user.type(getByTestId('password'), 'Validpassword!1')
  await user.type(getByTestId('confirmPassword'), 'Validpassword!1')
  await user.type(getByTestId('nick'), 'TestNick')
  await user.type(getByTestId('name'), 'TestName')
  await user.type(getByTestId('lastName'), 'TestLastName')
  await user.click(getByRole('checkbox'))
  await user.click(getByTestId('registrationSubmit'))

  await waitFor(() => {
    expect(getByTestId('modal')).toBeTruthy()
  })
})

test('Link "Zaloguj się" prowadzi na /login', async () => {
  const messages = await getTranslation()

  const { getAllByRole } = render(
    <Wrapper messages={messages}>
      <RegistrationForm />
    </Wrapper>
  )

  const links = getAllByRole('link')
  const loginLink = links.find((l) => l.getAttribute('href') === '/login')
  expect(loginLink).toBeTruthy()
  expect(loginLink?.getAttribute('href')).toBe('/login')
})
