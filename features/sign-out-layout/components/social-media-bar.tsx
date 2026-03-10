import SocialMediaIconPicker from '@/features/sign-out-layout/components/social-media-icon-picker'

const socialMediaLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/groups/3792300160870421',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/devstock.pl/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/devstockspzoo/mycompany/',
  },
  { name: 'youtube', url: 'https://www.youtube.com/@devstock' },
  { name: 'github', url: 'https://github.com/Devstock-Academy' },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@devstockacademy',
  },
]

const SocialMediaBar = () => {
  return (
    <div className='flex h-10 justify-end gap-8 bg-rich-black px-10 py-2.5 '>
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='size-5 text-white'>
            <SocialMediaIconPicker name={link.name} />
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialMediaBar
