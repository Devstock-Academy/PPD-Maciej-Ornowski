'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavButton, Divider, TextLink } from '@/components'
import { DevstockAcademyLogo } from '@/icons'

const SignOutTopbar = () => {
  const t = useTranslations('TopBar')
  const pathname = usePathname()
  const isRegisterPage = pathname.includes('/register')

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
        <TextLink className='text-white' href='/'>
          <span>{t('login')}</span>
        </TextLink>
        <NavButton
          href='/register'
          color={isRegisterPage ? 'orange' : 'primary'}
          className='w-34 rounded-md  px-3 py-2 text-xs leading-6 '
        >
          {t('sign-up')}
        </NavButton>
      </div>
    </div>
  )
}

export default SignOutTopbar
