import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { ToggleTheme } from './toggle-theme'

import { useColorModeValue } from 'hooks/use-color-mode'

export const Header = () => {
  const bgColor = useColorModeValue('gray-100', 'gray-900')

  const textColor = useColorModeValue('gray-700', 'gray-300')

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
            <x.a color={textColor}>
              <x.span fontSize="xl" fontWeight="medium">
                xStyled UI
              </x.span>
            </x.a>
          </Link>

          <x.ul
            display={{ _: 'none', md: 'flex' }}
            alignItems="center"
            color={textColor}
            gap={5}
          >
            <x.li fontWeight="medium">
              <Link href="/components" passHref>
                <x.a color={{ _: 'currentColor', hover: 'primary-500' }}>
                  Components
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
