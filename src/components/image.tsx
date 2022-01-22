import NextImage from 'next/image'

import { SystemProps, x } from '@xstyled/styled-components'

type ImageProps = {
  src: string
  alt: string
} & SystemProps

export const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <x.div w="full" h="full" position="relative" {...props}>
      <NextImage src={src} alt={alt} objectFit="cover" layout="fill" />
    </x.div>
  )
}
