import { x } from '@xstyled/styled-components'

const Header = () => {
  return (
    <x.div my={5}>
      <x.header bg="gray-800">
        <x.div container mx="auto" px={3}>
          <x.nav
            display="flex"
            h="80px"
            justifyContent="space-between"
            alignItems="center"
          >
            <x.a color="text">
              <x.span fontSize="xl" fontWeight="bold">
                xStyled <x.span color="primary-600">UI</x.span>
              </x.span>
            </x.a>

            <x.ul
              display={{ _: 'none', md: 'flex' }}
              alignItems="center"
              color="text"
              gap={5}
            >
              <x.li fontWeight="medium">
                <x.a color={{ _: 'currentColor', hover: 'primary-700' }}>
                  Home
                </x.a>
              </x.li>

              <x.li fontWeight="medium">
                <x.a color={{ _: 'currentColor', hover: 'primary-700' }}>
                  Components
                </x.a>
              </x.li>

              <x.li fontWeight="medium">
                <x.a color={{ _: 'currentColor', hover: 'primary-700' }}>
                  Playground
                </x.a>
              </x.li>

              <x.li fontWeight="medium">
                <x.a
                  href="https://github.com/gregberge/xstyled"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={{ _: 'currentColor', hover: 'primary-700' }}
                >
                  Github
                </x.a>
              </x.li>
            </x.ul>
          </x.nav>
        </x.div>
      </x.header>
    </x.div>
  )
}

export default Header
