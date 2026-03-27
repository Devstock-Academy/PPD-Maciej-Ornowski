'use client'

import RegisterForm from '@/features/register/components/register-form'

const Register = () => {
  return (
    <div className='relative w-full flex-1 items-center justify-center bg-hero-image bg-cover bg-center py-16'>
      <div className='absolute inset-0 bg-hero-overlay/90 ' />
      <div className='relative z-10 flex w-full items-center justify-center '>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
