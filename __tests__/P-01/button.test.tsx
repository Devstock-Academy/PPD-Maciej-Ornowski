import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'

import { Button } from '@/components'

test('Button renderuje tekst i reaguje na klik', () => {
  const onClick = vi.fn()
  const { getByRole } = render(
    <Button name="Zapisz" type="button" onClick={onClick} variant="primary" />
  )
  const button = getByRole('button', { name: /Zapisz/i })
  expect(button).toBeTruthy()
  button.click()
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('Button z testId ma data-testid', () => {
  const { getByTestId } = render(
    <Button name="Zapisz" type="button" testId="submit-btn" variant="primary" />
  )
  expect(getByTestId('submit-btn')).toBeTruthy()
})
