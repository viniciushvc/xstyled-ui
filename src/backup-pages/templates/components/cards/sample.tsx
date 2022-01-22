import { x } from '@xstyled/styled-components'

export default function Sample() {
  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div w="full" maxW="350px" py={6}>
        <x.div boxShadow="md" borderRadius="md" overflow="auto">
          <x.div>
            <x.img
              src="https://picsum.photos/200/300"
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
