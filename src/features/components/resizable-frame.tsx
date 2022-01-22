import { useEffect, useRef, useState } from 'react'

import { useColorMode, x } from '@xstyled/styled-components'

import { Resizable } from 're-resizable'

import { getExampleUrl } from '@/utils/getExampleUrl'

import { Category, SubCategory, Template } from '../../data/types'

type IframeProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

const MIN_HEIGHT = 300

export const ResizableFrame = ({
  template,
  category,
  subCategory
}: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null)
  const [colorMode] = useColorMode()
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [exampleUrl, setExampleUrl] = useState('')

  useEffect(() => {
    setExampleUrl(getExampleUrl(category, subCategory, template))
  }, [category, subCategory, template])

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight

    setHeight(frameHeight)
  }

  // Reload iframe content when theme and colorMode changes
  useEffect(() => {
    ref.current?.contentWindow?.location.reload()
  }, [colorMode])

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT

  return (
    <x.div bg="gray-500">
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
