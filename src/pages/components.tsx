import { x } from '@xstyled/styled-components'

import { AppLayout } from '@/layout/AppLayout'

import { Container } from '@/components/container'

const ComponentsPage = () => {
  const items = [
    { title: 'Banners' },
    { title: 'Cards' },
    { title: 'Form Layouts' },
    { title: 'Headers' },
    { title: 'Lists' },
    { title: 'Notifications' },
    { title: 'User Cards' },
    { title: 'Page Examples' }
  ]

  return (
    <AppLayout>
      <Container>
        <x.div display="flex" flexDirection="column" textAlign="center">
          <x.h1 fontSize="4xl" fontWeight="bold">
            Components
          </x.h1>

          <x.p fontSize="xl">
            If you use Chakra UI, this is the next level. With Pro, we&apos;ve
            put in the work to create high-quality components.
          </x.p>

          <x.div display="grid" gridTemplateColumns={3} gap={5}>
            {items.map((item) => (
              <x.div
                key={item.title}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p="4"
                border="1px solid"
                borderColor="gray-100"
                borderRadius="lg"
                bg="gray.50"
              >
                <x.h2 fontSize="lg" fontWeight="bold">
                  {item.title}
                </x.h2>

                <x.p fontSize="md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse euismod, nisi eget consectetur sagittis, nisl nunc
                  euismod nisi, euismod aliquam nisl nunc euismod nisi.
                </x.p>
              </x.div>
            ))}
          </x.div>
        </x.div>
      </Container>
    </AppLayout>
  )
}

export default ComponentsPage
