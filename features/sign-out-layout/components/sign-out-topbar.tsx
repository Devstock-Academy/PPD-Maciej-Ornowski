'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { NavButton, Divider, TextLink } from '@/components'
import { DevstockAcademyLogo } from '@/icons'

const SignOutTopbar = () => {
  const t = useTranslations('TopBar')
  return (
    <div className=' flex h-20 w-full items-center justify-between bg-dark-brand px-10 '>
      <Link href='/'>
        <DevstockAcademyLogo />
      </Link>
      <div className=' flex items-center justify-evenly gap-x-10 '>
        <TextLink href='/'>
          <span>Devstock.pl</span>
        </TextLink>
        <Divider />
        <TextLink href='/'>
          <span>{t('login')}</span>
        </TextLink>
        <NavButton>{t('sign-up')}</NavButton>
      </div>
    </div>
  )
}

export default SignOutTopbar
