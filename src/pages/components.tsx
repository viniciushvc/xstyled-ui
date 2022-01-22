import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { Container } from '@/components/layout/container'

const ComponentsPage = () => {
  const items = [{ title: 'Cards', path: 'components/cards' }]

  const borderColor = useColorModeValue('gray-100', 'gray-700')

  return (
    <Container>
      <x.div display="flex" flexDirection="column" my={20}>
        <x.div textAlign="center" spaceY={5}>
          <x.span color="primary-500" fontWeight="medium">
            xStyled UI
          </x.span>

          <x.h1 fontSize="4xl" fontWeight="bold">
            Components
          </x.h1>

          <x.p fontSize="xl">
            If you use xStyled, this is the next level. With Pro, we&apos;ve put
            in the work to create high-quality components.
          </x.p>
        </x.div>

        <x.div
          display="grid"
          gridTemplateColumns={{ _: 1, sm: 2, md: 3 }}
          gap={5}
          mt={10}
        >
          {items.map((item, index) => (
            <Link key={item.title} href={item.path} passHref>
              <x.a color="text">
                <x.article
                  display="flex"
                  flexDirection="column"
                  bg="gray.50"
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="lg"
                  boxShadow="sm"
                  overflow="auto"
                >
                  <x.div w="full" h="200px" bg="gray-200" borderRadius="xl">
                    <x.img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
                      w="full"
                      h="full"
                      backgroundSize="cover"
                      backgroundPosition="center"
                      objectFit="cover"
                    />
                  </x.div>
                  <x.div p={4}>
                    <x.h2 fontSize="lg" fontWeight="bold">
                      {item.title}
                    </x.h2>

                    <x.p fontSize="md">{index + 1} components</x.p>
                  </x.div>
                </x.article>
              </x.a>
            </Link>
          ))}
        </x.div>
      </x.div>
    </Container>
  )
}

export default ComponentsPage
