import type React from 'react'
import type { NextIntlClientProvider } from 'next-intl'

export type IntlMessages = NonNullable<
  React.ComponentProps<typeof NextIntlClientProvider>['messages']
>

export const getTranslation = async (): Promise<IntlMessages> => {
  try {
    return (await import('../../messages/pl.json')).default as IntlMessages
  } catch {
    return {}
  }
}
