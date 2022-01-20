import { x } from '@xstyled/styled-components'

import { Container } from './container'

export const Footer = () => {
  return (
    <x.footer color="text" bg="bg" py={10}>
      <Container textAlign={{ _: 'center', md: 'right' }}>
        xStyled UI © {new Date().getFullYear()} All rights reserved.
      </Container>
    </x.footer>
  )
}
