import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

export type ButtonProps = {
  as?: React.ElementType
} & SystemProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ as, children, ...props }: ButtonProps) => {
  return (
    <x.button
      as={as}
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="50px"
      color="white"
      bg={{ _: 'primary-500', hover: 'primary-600' }}
      borderRadius="md"
      px={5}
      transition
      {...props}
    >
      {children}
    </x.button>
  )
}
