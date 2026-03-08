import { useTranslations } from 'next-intl'

import HeroImage from './hero-image'
import Content from './content'

const Landing = () => {
  const t = useTranslations('Landing')
  return (
    <div className='flex w-full flex-col items-center'>
      <HeroImage />
      <Content
        paragraphs={[t('paragraph1'), t('paragraph2')]}
        videoId='NKsma2XgjL4'
      />
    </div>
  )
}

export default Landing
