import { useTranslations } from 'next-intl'

import HeroImage from './hero-image'
import Content from './content'

const Landing = () => {
  const t = useTranslations('Content')
  return (
    <div className='flex w-full flex-col items-center'>
      <HeroImage />
      <Content
        headLine={t('headLine')}
        descriptionLines={[t('descriptionMain'), t('descriptionSupport')]}
      />
    </div>
  )
}

export default Landing
