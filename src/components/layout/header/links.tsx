import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { headerLinks } from 'config/header-links'

export const HeaderLinks = () => {
  return (
    <>
      {headerLinks?.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <x.a color={{ _: 'currentColor', hover: 'primary-700' }}>
            {link.label}
          </x.a>
        </Link>
      ))}
    </>
  )
}
