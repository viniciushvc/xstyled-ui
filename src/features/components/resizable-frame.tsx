import { useEffect, useRef, useState } from 'react'

import { x } from '@xstyled/styled-components'

import { Resizable } from 're-resizable'

import { getExampleUrl } from '@/utils/getExampleUrl'

import type { Category, Template } from '@/models'

type IframeProps = {
  template: Template
  category: Category
}

const MIN_HEIGHT = 300

export const ResizableFrame = ({ template, category }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [exampleUrl, setExampleUrl] = useState('')

  useEffect(() => {
    setExampleUrl(getExampleUrl(category, template))
  }, [category, template])

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight

    setHeight(frameHeight)
  }

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT

  return (
    <x.div bg="gray-200">
      <Resizable
        bounds="parent"
        minWidth={MIN_HEIGHT}
        minHeight={getHeight()}
        maxHeight={getHeight()}
      >
        <x.iframe
          ref={ref}
          w="full"
          h={getHeight()}
          src={exampleUrl}
          onLoad={syncHeight}
          loading="lazy"
        />
      </Resizable>
    </x.div>
  )
}
