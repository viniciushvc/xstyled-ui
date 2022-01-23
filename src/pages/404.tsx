import Link from 'next/link'

import { x } from '@xstyled/styled-components'

import { NextSeo } from 'next-seo'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { Button } from '@/components/button'

export const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="Not Found" />

      <x.div
        h="100vh"
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <x.div
          display="flex"
          alignItems="center"
          textAlign="center"
          maxW="500px"
          bg={useColorModeValue('gray-200', 'gray-900')}
          borderRadius="xl"
          spaceY={5}
          flexDirection="column"
          p={8}
        >
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
    </>
  )
}

export default NotFoundPage
