import React from 'react'
import Link from 'next/link'

type TextLinkProps = {
  href: string
  children: React.ReactNode
}

const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <Link className='cursor-pointer text-white' href={href}>{children}</Link>
  )
}

export default TextLink