import React from 'react'

import { Sidebar, SignInTopbar } from '@/features/sign-in-layout/components'
import { SocialMediaBar } from '@/features/sign-out-layout/components'

type SignOutLayoutProps = {
  children: React.ReactNode
}

const SignInLayout = ({ children }: SignOutLayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <SocialMediaBar />
      <SignInTopbar />
      <main className='flex flex-1 flex-col'>{children}</main>
    </div>
  )
}

export default SignInLayout
