import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@/icons'
import GithubIcon from '@/icons/github-icon'

const socialMediaLinks = [
  {
    iconComponent: <FacebookIcon />,
    url: 'https://www.facebook.com/groups/3792300160870421',
  },
  {
    iconComponent: <InstagramIcon />,
    url: 'https://www.instagram.com/devstock.pl/',
  },
  {
    iconComponent: <LinkedinIcon />,
    url: 'https://www.linkedin.com/company/devstockspzoo/mycompany/',
  },
  { iconComponent: <YoutubeIcon />, url: 'https://www.youtube.com/@devstock' },
  { iconComponent: <GithubIcon />, url: 'https://github.com/Devstock-Academy' },
  {
    iconComponent: <TiktokIcon />,
    url: 'https://www.tiktok.com/@devstockacademy',
  },
]

const SocialMediaBar = () => {
  return (
    <div className='flex h-10 justify-end gap-8 bg-dark-brand px-10 py-2.5 '>
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {link.iconComponent}
        </a>
      ))}
    </div>
  )
}

export default SocialMediaBar
