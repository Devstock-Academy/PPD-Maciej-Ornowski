import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

const TextLink = ({ href, children, className }: TextLinkProps) => {
  return (
    <Link className={clsx('cursor-pointer', className)} href={href}>
      {children}
    </Link>
  )
}

export default TextLink
