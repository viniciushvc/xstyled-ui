import React, { useState } from 'react'

import styled, { x } from '@xstyled/styled-components'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { BsList, BsX } from 'react-icons/bs'

import { VisuallyHidden } from '@/components/visually-hidden'

import { HeaderLinks } from './links'

const OverlayStyled = styled(DialogPrimitive.Overlay)({
  background: 'rgba(0, 0, 0, 0.9)',
  position: 'fixed',
  inset: 0,
})

const ContentStyled = styled(DialogPrimitive.Content)({
  display: 'flex',
  align: 'center',
  justify: 'center',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  inset: 0,
})

const OpenIcon = styled(DialogPrimitive.Trigger)({
  appearance: 'none',
  background: 'none',
  color: 'text',
  fontSize: '2xl',
  cursor: 'pointer',
  border: 0,
})

const CloseIcon = styled(OpenIcon)({
  position: 'absolute',
  top: '10',
  right: '10',
  fontSize: '4xl',
})

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={() => setIsOpen((e) => !e)}
    >
      <OpenIcon>
        <BsList />

        <VisuallyHidden>Open menu</VisuallyHidden>
      </OpenIcon>

      <DialogPrimitive.Portal>
        <OverlayStyled />

        <ContentStyled onInteractOutside={(e) => e.preventDefault()}>
          <CloseIcon>
            <BsX />

            <VisuallyHidden>Close menu</VisuallyHidden>
          </CloseIcon>

          <x.div
            w="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            fontSize="3xl"
            fontWeight="medium"
            spaceY={10}
          >
            <HeaderLinks />
          </x.div>
        </ContentStyled>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
