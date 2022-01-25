import Link from 'next/link'

import { useDown, x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { Logo } from '@/components/logo'
import { Container } from '@/components/layout/container'
import { ToggleTheme } from '@/components/toggle-theme'

import { HeaderMobile } from './mobile'
import { HeaderDesktop } from './desktop'

export const Header = () => {
  const downMd = useDown('md')

  return (
    <x.header bg={useColorModeValue('gray-100', 'gray-900')}>
      <Container>
        <x.nav
          h="80px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <x.a color="text">
              <Logo />
            </x.a>
          </Link>

          <x.div display="flex" alignItems="center" gap={5}>
            <x.div display="flex" order={{ _: 2, md: 1 }}>
              {downMd ? <HeaderMobile /> : <HeaderDesktop />}
            </x.div>

            <x.div display="flex" order={{ _: 1, md: 2 }}>
              <ToggleTheme p={2} />
            </x.div>
          </x.div>
        </x.nav>
      </Container>
    </x.header>
  )
}
