import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { ToggleTheme } from './toggle-theme'

export const Header = () => {
  return (
    <x.header bg="bg">
      <x.div container mx="auto" px={3}>
        <x.nav
          display="flex"
          h="80px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <x.a color="white">
              <x.span fontSize="xl" fontWeight="medium">
                xStyled UI
              </x.span>
            </x.a>
          </Link>

          <x.ul
            display={{ _: 'none', md: 'flex' }}
            alignItems="center"
            color="text"
            gap={5}
          >
            <x.li fontWeight="medium">
              <Link href="/components" passHref>
                <x.a color={{ hover: 'red-500' }}>Components</x.a>
              </Link>
            </x.li>

            <x.li fontWeight="medium">
              <x.a
                href="https://github.com/gregberge/xstyled"
                target="_blank"
                rel="noopener noreferrer"
                color={{ hover: 'red-500' }}
              >
                Github
              </x.a>
            </x.li>

            <x.li fontWeight="medium">
              <ToggleTheme p={2} />
            </x.li>
          </x.ul>
        </x.nav>
      </x.div>
    </x.header>
  )
}
