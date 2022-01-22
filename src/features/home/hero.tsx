import Link from 'next/link'

import { SystemProps, x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/button'

export const Hero = ({ ...props }: SystemProps) => {
  return (
    <x.section
      display="flex"
      alignItems="center"
      h={{ _: '100%', lg: 'calc(100vh - 80px)' }}
      py={10}
      {...props}
    >
      <Container>
        <x.div display="grid" spaceY={5}>
          <x.h2
            color="text"
            fontSize={{ _: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            maxW="2xl"
          >
            <x.u color="primary-500">Production-ready</x.u> xStyled UI for
            developers
          </x.h2>

          <x.p color="text" fontSize={{ md: 'lg' }} maxW="2xl">
            A growing collection of hand-crafted & responsive xStyled UI ready
            to drop into your React project.
          </x.p>

          <x.div display="flex" spaceX={{ _: 6, sm: 12 }}>
            <x.ul color="text" spaceY={4}>
              <x.li>Responsive Demos</x.li>
              <x.li>Easy Customizable</x.li>
              <x.li>Written in Typescript</x.li>
            </x.ul>

            <x.ul color="text" spaceY={4}>
              <x.li>100% Open Source</x.li>
              <x.li>1 Templates</x.li>
              <x.li>2 Categories</x.li>
            </x.ul>
          </x.div>

          <x.div
            display="flex"
            flexDirection={{ _: 'column', md: 'row' }}
            gap={8}
            pt={10}
          >
            <Link href="/components" passHref>
              <Button as="a">Browse Components</Button>
            </Link>

            <Button
              as="a"
              color={useColorModeValue('gray-700', 'white')}
              href="https://xstyled.dev"
              target="_blank"
              rel="noopener noreferrer"
              bg={{ _: 'transparent', hover: 'primary-600-a20' }}
            >
              Suggest Template
            </Button>
          </x.div>
        </x.div>
      </Container>
    </x.section>
  )
}
