import { x, SystemProps } from '@xstyled/styled-components'

export type ContainerProps = {
  children: React.ReactNode
} & SystemProps

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <x.div container mx="auto" px={{ _: 3, md: 0 }} {...props}>
      {children}
    </x.div>
  )
}
