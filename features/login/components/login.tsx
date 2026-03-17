'use client'

import Image from 'next/image'

import LoginForm from '@/features/login/components/login-form'

const Login = () => {
  return (
    <div className='relative w-full flex-1 items-center justify-center bg-hero-image bg-cover bg-center py-16'>
      <div className='absolute inset-0 bg-hero-overlay/90 ' />
      <div className='relative z-10 flex w-full items-center justify-center '>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
