'use client'

import { useTranslations } from 'next-intl'

import { Divider, TextLink } from '@/components'

const Footer = () => {
const t = useTranslations('Footer')
  return (
    <div className='py-6.5 shadow-footer flex w-full items-center justify-between bg-dark-brand px-10 text-white'>
      <div className='flex items-center gap-x-10'>
        <p>Devstock.pl</p>
        <Divider />
        <TextLink href='/'>{t('privacyPolicy')}</TextLink>
        <Divider />
        <TextLink href='/'>{t('contact')}</TextLink>
      </div>
      <p>💛 Devstock © 2023</p>
    </div>
  )
}

export default Footer
