import { x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { Container } from 'components/layout/container'

export const Footer = () => {
  return (
    <x.footer
      bg={useColorModeValue('gray-100', 'gray-900')}
      color={useColorModeValue('gray-700', 'gray-300')}
      py={10}
    >
      <Container textAlign={{ _: 'center', md: 'right' }}>
        xStyled UI © {new Date().getFullYear()} All rights reserved.
      </Container>
    </x.footer>
  )
}
