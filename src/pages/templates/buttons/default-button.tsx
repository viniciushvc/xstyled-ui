import { x, SystemProps } from '@xstyled/styled-components'

type ButtonProps = {
  children: React.ReactNode
} & SystemProps

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <x.div h="100vh" display="flex" justifyContent="center" alignItems="center">
      <x.button
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
        {/* {children} */}
        Default Button
      </x.button>
    </x.div>
  )
}

export default Button
