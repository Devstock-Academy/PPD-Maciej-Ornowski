'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { DevstockLogo, DevstockText, SmallArrowIcon } from '@/icons'
import { NavButton } from '@/components'

const HeroImage = () => {
  const t = useTranslations('HeroImage')
  return (
    <section
      data-testid='hero-image'
      className='relative flex h-120 w-full flex-col overflow-hidden text-white'
    >
      <Image
        src='/HeroImage.webp'
        alt='hero-image'
        fill
        sizes='100vw'
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 flex items-center justify-center bg-hero-overlay/90'>
        <div className='z-10 flex flex-col items-center justify-center gap-3'>
          <h1>{t('headLine')}</h1>
          <p className='text-2xl font-extralight'>by</p>
          <div className='flex items-center gap-2'>
            <DevstockLogo />
            <DevstockText />
          </div>
          <span className='whitespace-pre-line text-center text-2xl font-extralight'>
            {t('heroSupportingTextLine1')}
            {'\n'}
            {t('heroSupportingTextLine2')}
          </span>
          <div className='flex w-full items-center justify-center gap-8'>
            <NavButton className='w-50 rounded-md bg-red-700 px-5 py-3 text-white hover:bg-red-800'>
              <span className='pr-2'>{t('buttonStartLearning')}</span>
              <SmallArrowIcon />
            </NavButton>
            <NavButton className='w-50 border border-white bg-transparent px-5 py-3 hover:border-gray-100 hover:bg-gray-50 hover:text-primary-600'>
              {t('buttonExploreAcademy')}
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroImage
