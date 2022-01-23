import { x } from '@xstyled/styled-components'

import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'

const Login = () => {
  return (
    <x.div
      minH="100vh"
      bg="gray-100"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={3}
      py={10}
    >
      <x.div color="gray-700" textAlign="center" spaceY={5}>
        <x.h2 fontSize="3xl" fontWeight="bold">
          Sign in to your account
        </x.h2>

        <x.p>
          Don&apos;t have an account?{' '}
          <x.a href="#" color={{ _: 'primary-600', hover: 'primary-700' }}>
            Start free trial
          </x.a>
        </x.p>
      </x.div>

      <x.div
        w="full"
        maxW="400"
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        my={10}
        p={{ _: 5, sm: 10 }}
      >
        <x.div spaceY={5}>
          <x.div spaceY={2}>
            <x.label
              htmlFor="email"
              color="gray-600"
              fontSize="sm"
              fontWeight="medium"
            >
              E-mail
            </x.label>

            <x.input
              id="email"
              type="email"
              appearance="none"
              w="full"
              borderRadius="md"
              h="40px"
              border="1px solid"
              borderColor="gray-300"
              px={5}
            />
          </x.div>

          <x.div spaceY={2}>
            <x.label
              htmlFor="password"
              color="gray-600"
              fontSize="sm"
              fontWeight="medium"
            >
              Password
            </x.label>

            <x.input
              id="password"
              type="password"
              appearance="none"
              w="full"
              borderRadius="md"
              h="40px"
              border="1px solid"
              borderColor="gray-300"
              px={5}
            />
          </x.div>

          <x.button
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="40px"
            w="full"
            color="white"
            bg={{ _: 'primary-600', hover: 'primary-700' }}
            borderRadius="md"
            px={5}
            transition
          >
            Login
          </x.button>

          <x.div display="flex" alignItems="center" color="gray-300">
            <x.div flex="1">
              <x.hr h="1" bg="currentcolor" />
            </x.div>

            <x.span px="3" color="gray-600" fontWeight="medium">
              or continue with
            </x.span>

            <x.div flex="1">
              <x.hr h="1" bg="currentcolor" />
            </x.div>
          </x.div>

          <x.div display="flex" spaceX={5}>
            <x.a
              href="#"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
              h="40px"
              color="gray-600"
              bg={{ _: 'transparent', hover: 'gray-200' }}
              border
              borderColor="gray-300"
              borderRadius="md"
              textAlign="center"
              transition
            >
              <BsFacebook />
            </x.a>

            <x.a
              href="#"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
              h="40px"
              color="gray-600"
              bg={{ _: 'transparent', hover: 'gray-200' }}
              border
              borderColor="gray-300"
              borderRadius="md"
              textAlign="center"
              transition
            >
              <BsGoogle />
            </x.a>

            <x.a
              href="#"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
              h="40px"
              color="gray-600"
              bg={{ _: 'transparent', hover: 'gray-200' }}
              border
              borderColor="gray-300"
              borderRadius="md"
              textAlign="center"
              transition
            >
              <BsGithub />
            </x.a>
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  )
}

export default Login
