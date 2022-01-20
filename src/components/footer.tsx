import { x } from '@xstyled/styled-components'

import { useColorModeValue } from 'hooks/use-color-mode'

import { Container } from '@/components/container'

export const Footer = () => {
  const bgColor = useColorModeValue('gray-100', 'gray-900')
  const textColor = useColorModeValue('gray-700', 'gray-300')

  return (
    <x.footer bg={bgColor} color={textColor} py={10}>
      <Container textAlign={{ _: 'center', md: 'right' }}>
        xStyled UI © {new Date().getFullYear()} All rights reserved.
      </Container>
    </x.footer>
  )
}
