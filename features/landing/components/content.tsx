'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useTranslations } from 'next-intl'
import { Card } from 'flowbite-react'

import { TextLink } from '@/components'

type ContentProps = {
  headLine: string
  descriptionLines?: string[]
  videoId?: string
}

const Content = ({
  headLine,
  descriptionLines = [],
  videoId,
}: ContentProps) => {
  const t = useTranslations('Content')
  const hasDescription = descriptionLines.length > 0
  const hasVideo = !!videoId
  const showVariantA = hasDescription && hasVideo
  const showVariantB =
    (hasDescription && !hasVideo) || (!hasDescription && hasVideo)
  return (
    <div className='mx-10 mb-10 flex flex-col content-center items-center gap-y-10 bg-white'>
      {showVariantA && (
        <div className='flex max-w-content flex-col items-center justify-between gap-8 py-15 xl:flex-row xl:gap-x-30'>
          <div className='flex flex-1 flex-col items-center justify-center gap-8.1875'>
            <h1 className='text-black'>{headLine}</h1>
            {hasDescription &&
              descriptionLines.map((text, i) => (
                <p key={i} className='text-xl font-extralight text-black'>
                  {text}
                </p>
              ))}
          </div>
          {videoId && (
            <div className='relative w-full max-w-video'>
              <div className='aspect-video w-full overflow-hidden rounded-lg drop-shadow-xl'>
                <div className='relative h-full w-full'>
                  <LiteYouTubeEmbed
                    id={videoId}
                    title='Video'
                    poster='hqdefault'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {showVariantB && (
        <div className='flex max-w-content flex-col items-center justify-between gap-8 py-15 xl:flex-row xl:gap-x-30'>
          {videoId && (
            <div className='relative w-full max-w-video'>
              <div className='aspect-video w-full overflow-hidden rounded-lg drop-shadow-xl'>
                <div className='relative h-full w-full'>
                  <LiteYouTubeEmbed
                    id={videoId}
                    title='Video'
                    poster='hqdefault'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {hasDescription && (
            <div className='flex flex-1 flex-col gap-8.1875'>
              {descriptionLines.map((text, i) => (
                <p key={i} className='text-xl font-extralight text-black'>
                  {text}
                </p>
              ))}
            </div>
          )}
          <div className='flex flex-1 flex-col items-center justify-center gap-8.1875'>
            <h1 className='text-black'>{headLine}</h1>
          </div>
        </div>
      )}

      <Card className='w-197.5'>
        <h1 className='text-3xl font-extralight text-gray-900'>
          {t('bottomCardTitle')}
        </h1>
        <p className='text-lg font-extralight text-gray-500'>
          {t('bottomCardText')}
        </p>
        <TextLink
          className='font-medium leading-normal text-primary-600'
          href='/'
        >
          {t('bottomCardLink')} {'>'}
        </TextLink>
      </Card>
    </div>
  )
}

export default Content
