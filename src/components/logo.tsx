import { SystemProps, x } from '@xstyled/styled-components'

export const Logo = ({ ...props }: SystemProps) => {
  return (
    <x.span fontSize="xl" fontWeight="bold" {...props}>
      xStyled <x.span color="primary-600">UI</x.span>
    </x.span>
  )
}
