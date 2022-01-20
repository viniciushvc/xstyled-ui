import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { Button } from '@/components/button'

export const NotFound = () => {
  return (
    <x.div
      display="flex"
      alignItems={'center'}
      justifyContent={'center'}
      h="100vh"
      color="white"
      w="full"
    >
      <x.div
        bg="bg"
        borderRadius="xl"
        p={8}
        spaceX={6}
        maxW="500px"
        alignItems="center"
        textAlign="center"
      >
        <x.div spaceY={2}>
          <x.h1 fontSize="3xl" fontWeight="bold">
            Page not found
          </x.h1>

          <x.p>
            This page was not found. You may have mistyped the address or the
            page may have moved.
          </x.p>

          <Link href="/" passHref>
            <Button as="a">Take me to the home page</Button>
          </Link>
        </x.div>
      </x.div>
    </x.div>
  )
}

export default NotFound
