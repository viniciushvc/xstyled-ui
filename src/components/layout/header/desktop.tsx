import { x } from '@xstyled/styled-components'

import { HeaderLinks } from './links'

export const HeaderDesktop = () => {
  return (
    <x.div display="flex" spaceX={5}>
      <HeaderLinks />
    </x.div>
  )
}
