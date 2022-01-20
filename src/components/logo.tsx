import { SystemProps, x } from '@xstyled/styled-components'

export const Logo = ({ ...props }: SystemProps) => {
  return (
    <x.span fontSize="xl" fontWeight="medium" {...props}>
      xStyled UI
    </x.span>
  )
}
