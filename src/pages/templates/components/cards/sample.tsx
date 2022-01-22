import { x } from '@xstyled/styled-components'

import { useColorModeValue } from '@/hooks/use-color-mode'

export default function Sample() {
  const borderColor = useColorModeValue('gray-100', 'gray-700')

  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div w="full" maxW="350px" py={6}>
        <x.div
          border="1px solid"
          borderColor={borderColor}
          borderRadius="md"
          overflow="auto"
        >
          <x.div>
            <x.img
              src="https://source.unsplash.com/random"
              w="full"
              h="200"
              backgroundSize="cover"
              objectFit="cover"
            />
          </x.div>

          <x.div spaceY={3} px={5} py={3}>
            <x.h1 fontSize="xl" fontWeight="bold">
              Hello World
            </x.h1>

            <x.p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, nisl sit amet consectetur interdum, nisi erat
              euismod nunc, eget egestas urna urna eu nisi.
            </x.p>
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  )
}
