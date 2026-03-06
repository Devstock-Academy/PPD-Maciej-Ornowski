import React from 'react'

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
  GithubIcon,
  SocialMediaIcons,
} from '@/icons'

type SocialMediaIconPickerProps = {
  name: SocialMediaIcons
}

const SocialMediaIconPicker = ({ name }: SocialMediaIconPickerProps) => {
  const icons: Record<SocialMediaIcons, React.JSX.Element> = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedinIcon />,
    tiktok: <TiktokIcon />,
    youtube: <YoutubeIcon />,
    github: <GithubIcon />,
  }

  return icons[name] || null
}

export default SocialMediaIconPicker
