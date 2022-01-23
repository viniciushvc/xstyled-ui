import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & SystemProps &
  ButtonTypes

export const Button = forwardRef<ButtonTypes, ButtonProps>(
  ({ as, children, ...props }, ref) => {
    return (
      <x.button
        ref={ref}
        as={as}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="50px"
        color="white"
        bg={{ _: 'primary-600', hover: 'primary-700' }}
        borderRadius="md"
        px={5}
        transition
        {...props}
      >
        {children}
      </x.button>
    )
  },
)

Button.displayName = 'Button'
