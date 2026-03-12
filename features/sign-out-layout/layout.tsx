import React from 'react'

import {
  SignOutTopbar,
  SocialMediaBar,
  Footer,
} from '@/features/sign-out-layout/components'

type SignOutLayoutProps = {
  children: React.ReactNode
}

const SignOutLayout = ({ children }: SignOutLayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <SocialMediaBar />
      <SignOutTopbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default SignOutLayout
