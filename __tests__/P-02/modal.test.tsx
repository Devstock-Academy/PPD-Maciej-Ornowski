import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'

import { Modal } from '@/components'

afterEach(() => cleanup())

test('Modal renderuje tytuł, paragrafy, przycisk i ma wrapper z data-testid modal', () => {
  const handleClick = vi.fn()
  const { getByRole, getAllByRole, getByTestId } = render(
    <Modal
      title="Rejestracja zakończona"
      firstParagraph="Pierwszy akapit."
      secondParagrah="Drugi akapit."
      buttonName="OK"
      handleClick={handleClick}
    />
  )

  expect(getByTestId('modal')).toBeTruthy()
  expect(getByRole('heading', { level: 1 }).textContent).toBe('Rejestracja zakończona')
  const paragraphs = getAllByRole('heading', { level: 3 })
  expect(paragraphs[0].textContent).toBe('Pierwszy akapit.')
  expect(paragraphs[1].textContent).toBe('Drugi akapit.')
  const button = getByRole('button', { name: 'OK' })
  expect(button).toBeTruthy()
  button.click()
  expect(handleClick).toHaveBeenCalled()
})

test('Modal po rejestracji wyświetla email z formularza w treści', () => {
  const handleClick = vi.fn()
  const email = 'user@example.com'
  const { getByTestId, getByText } = render(
    <Modal
      title="Rejestracja zakończona"
      firstParagraph={`Wysłaliśmy link na adres ${email}. Sprawdź skrzynkę.`}
      secondParagrah=""
      buttonName="OK"
      handleClick={handleClick}
    />
  )

  expect(getByTestId('modal')).toBeTruthy()
  expect(getByText(/user@example\.com/)).toBeTruthy()
})
