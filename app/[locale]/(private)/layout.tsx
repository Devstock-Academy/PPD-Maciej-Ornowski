import React from 'react'

import SignInLayout from '@/features/sign-in-layout/layout'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SignInLayout>{children}</SignInLayout>
}
