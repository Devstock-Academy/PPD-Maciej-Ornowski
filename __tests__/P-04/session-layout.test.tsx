import React from 'react'
import { afterEach, expect, vi, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { getServerSession } from 'next-auth'

import Home from '@/app/[locale]/page'

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}))

afterEach(() => cleanup())

vi.mock('@/features/signInLayout/layout', () => ({
  default: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="sign-in-layout">{children}</div>
  )),
}))

vi.mock('@/features/singOutLayout/layout', () => ({
  default: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="sign-out-layout">{children}</div>
  )),
}))

vi.mock('@/features/landing', () => ({
  Landing: vi.fn(() => <div data-testid="landing-component" />),
}))

test('Bez sesji renderuje SignOutLayout i Landing', async () => {
  ;(getServerSession as ReturnType<typeof vi.fn>).mockResolvedValueOnce(null)

  const { getByTestId } = render(await Home())

  expect(getByTestId('sign-out-layout')).toBeTruthy()
  expect(getByTestId('landing-component')).toBeTruthy()
})

test('Z sesją renderuje SignInLayout i Landing', async () => {
  ;(getServerSession as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
    user: { name: 'John Doe' },
  })

  const { getByTestId, getAllByTestId } = render(await Home())

  expect(getByTestId('sign-in-layout')).toBeTruthy()
  expect(getAllByTestId('landing-component').length).toBeGreaterThanOrEqual(1)
})
