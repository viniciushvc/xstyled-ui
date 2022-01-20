import { x } from '@xstyled/styled-components'
import Link from 'next/link'

import { IoArrowForward } from 'react-icons/io5'
import { Button } from './button'

import { Container } from './container'

export const ExploreTemplates = () => {
  return (
    <x.div bg="bg">
      <Container py={{ _: 14, sm: 20, md: 32 }}>
        <x.div
          bg="red-500-a30"
          borderRadius="xl"
          color="white"
          px={{ _: 4, md: 10 }}
          py={10}
        >
          <x.div
            display="grid"
            gridTemplateColumns={{ _: 1, md: 2 }}
            spaceY={{ _: 8, md: 0 }}
          >
            <x.div>
              <x.h3 fontSize="4xl" fontWeight="bold" mb={2}>
                Explore many production-ready Templates
              </x.h3>

              <x.p fontSize="lg">
                and start building beautiful websites & webapps today!
              </x.p>
            </x.div>

            <x.div
              display="flex"
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="/components" passHref>
                <Button as="a">
                  Browse Components <IoArrowForward />
                </Button>
              </Link>
            </x.div>
          </x.div>
        </x.div>
      </Container>
    </x.div>
  )
}
