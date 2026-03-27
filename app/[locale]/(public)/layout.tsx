import React from 'react'

import SignOutLayout from '@/features/sign-out-layout/layout'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SignOutLayout>{children}</SignOutLayout>
}
