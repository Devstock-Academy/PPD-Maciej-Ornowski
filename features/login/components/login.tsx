'use client'

import Image from 'next/image'

import LoginForm from '@/features/login/components/login-form'

const Login = () => {
  return (
    <section className='pt-25 relative flex h-[778px] w-full flex-col overflow-hidden text-white'>
      <Image
        src='/HeroImage.webp'
        alt='hero-image'
        fill
        sizes='100vw'
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 flex items-center justify-center bg-hero-overlay/90'>
        <div className='z-10 flex flex-col items-center justify-center gap-3 '>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login
