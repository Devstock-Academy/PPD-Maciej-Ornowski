'use client'

import { useTranslations } from 'next-intl'

import { Divider, TextLink } from '@/components'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <div className='shadow-footer flex h-20 w-full items-center justify-between bg-dark-brand px-10 py-6.5 text-white'>
      <div className='flex items-center gap-x-10'>
        <TextLink className='text-white' href='/'>
          Devstock.pl
        </TextLink>
        <Divider />
        <TextLink className='text-white' href='/'>
          {t('privacy')}
        </TextLink>
        <Divider />
        <TextLink className='text-white' href='/'>
          {t('contact')}
        </TextLink>
      </div>
      <p>💛 Devstock © 2023</p>
    </div>
  )
}

export default Footer
