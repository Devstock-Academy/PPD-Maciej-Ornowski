import { useTranslations } from 'next-intl'

import HeroImage from './hero-image'

const Landing = () => {
  const t = useTranslations('Landing')
  return (
    <div className='mb-10 flex w-full flex-col items-center gap-20'>
      <HeroImage />
    </div>
  )
}

export default Landing
