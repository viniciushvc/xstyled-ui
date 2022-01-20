import { x } from '@xstyled/styled-components'
import { Container } from './container'

const STEPS = [
  {
    title: 'Find your template',
    text: 'Every template is embedded within an iframe, so you can easily check what they look like and test the responsive behaviour.'
  },
  {
    title: 'Copy the code',
    text: 'Click the code tab to see the actual source code of the template. Copy and paste it into your project and adjust it to your needs.'
  },
  {
    title: 'Enjoy your free time',
    text: "You've just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time, and build business features"
  }
]

export const GettingStarted = () => {
  return (
    <x.section py={10}>
      <Container>
        <x.h3
          fontSize={{ _: 'xl', md: '3xl' }}
          fontWeight="bold"
          color="text"
          textAlign="center"
        >
          Getting started in <x.u color="primary-500">3 easy steps</x.u>
        </x.h3>

        <x.div
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ _: 'center', md: 'flex-start' }}
          gap={4}
          mt={10}
        >
          {STEPS.map((step, index) => (
            <x.div
              key={step.title}
              display="flex"
              color="text"
              flexDirection="column"
              textAlign={{ _: 'left', md: 'center' }}
              alignItems={{ _: 'flex-start', md: 'center' }}
              gap={4}
              maxW={{ _: 'full', md: 'xs' }}
            >
              <x.div
                display="flex"
                w="40px"
                h="40px"
                bg="primary-500"
                color="white"
                fontWeight="bold"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                borderRadius="md"
              >
                0{index + 1}
              </x.div>

              <x.h2 fontSize="xl" fontWeight="bold" color="text" my={3}>
                {step.title}
              </x.h2>

              <x.span color="gray.500">{step.text}</x.span>
            </x.div>
          ))}
        </x.div>
      </Container>
    </x.section>
  )
}
