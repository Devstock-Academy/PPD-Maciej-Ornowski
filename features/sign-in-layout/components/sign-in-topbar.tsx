'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import { Divider, TextLink } from '@/components'
import { DevstockAcademyLogo } from '@/icons'

const SignInTopbar = () => {
  const t = useTranslations('TopBar')

  return (
    <div className=' flex h-20 w-full items-center justify-between bg-dark-brand px-10 drop-shadow-md '>
      <Link href='/'>
        <DevstockAcademyLogo />
      </Link>
      <div className=' flex items-center gap-x-10 '>
        <TextLink className='text-white' href='/'>
          <span>Devstock.pl</span>
        </TextLink>
        <Divider />
        <Image src='/Avatar.webp' alt='avatar-image' fill priority />
        <TextLink className='text-white' href='/'>
          <span>{t('sign-out')}</span>
        </TextLink>
      </div>
    </div>
  )
}

export default SignInTopbar
