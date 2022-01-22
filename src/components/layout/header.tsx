import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { ToggleTheme } from '@/components/toggle-theme'

export const Header = () => {
  const bgColor = useColorModeValue('gray-100', 'gray-900')

  return (
    <x.header bg={bgColor}>
      <x.div container mx="auto" px={3}>
        <x.nav
          display="flex"
          h="80px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <x.a color="text">
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
              <Link href="/" passHref>
                <x.a color={{ _: 'currentColor', hover: 'primary-500' }}>
                  Home
                </x.a>
              </Link>
            </x.li>

            <x.li fontWeight="medium">
              <Link href="/components" passHref>
                <x.a color={{ _: 'currentColor', hover: 'primary-500' }}>
                  Components
                </x.a>
              </Link>
            </x.li>

            <x.li fontWeight="medium">
              <Link href="/playground" passHref>
                <x.a color={{ _: 'currentColor', hover: 'primary-500' }}>
                  Playground
                </x.a>
              </Link>
            </x.li>

            <x.li fontWeight="medium">
              <x.a
                href="https://github.com/gregberge/xstyled"
                target="_blank"
                rel="noopener noreferrer"
                color={{ _: 'currentColor', hover: 'primary-500' }}
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
