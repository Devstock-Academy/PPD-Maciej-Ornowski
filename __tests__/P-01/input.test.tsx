import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { Input } from '@/components'

test('Input renderuje label, placeholder i opcjonalny błąd', () => {
  const { getByText, getByRole, queryByText } = render(
    <Input
      label="Email"
      type="email"
      placeholder="name@example.com"
      errorMessage={undefined}
    />
  )
  expect(getByText('Email')).toBeTruthy()
  expect(getByRole('textbox').getAttribute('placeholder')).toBe('name@example.com')
  expect(queryByText(/error/i)).toBeNull()
})

test('Input pokazuje komunikat błędu gdy errorMessage jest ustawiony', () => {
  const { getByText } = render(
    <Input
      label="Email"
      type="email"
      placeholder="name@example.com"
      errorMessage="Nieprawidłowy format"
    />
  )
  expect(getByText('Nieprawidłowy format')).toBeTruthy()
})

test('Input z testId ma data-testid na polu i data-testid z sufiksem Error na błędzie', () => {
  const { getByTestId } = render(
    <Input
      label="Email"
      type="email"
      testId="email"
      errorMessage="Błąd walidacji"
    />
  )
  expect(getByTestId('email')).toBeTruthy()
  expect(getByTestId('emailError')).toBeTruthy()
})
