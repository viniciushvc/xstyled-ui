import React, { Fragment, useState } from 'react'

import { x } from '@xstyled/styled-components'

import { MdDesktopMac, MdOutlineSmartphone, MdTabletMac } from 'react-icons/md'

import { useColorModeValue } from '@/hooks/use-color-mode'

import { ResizableFrame } from '@/features/components/resizable-frame'
import { CodeSample } from '@/features/components/code-sample'

import { Category, SubCategory, Template } from '../../data/types'

type ExampleProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

const TABS = ['Preview', 'Code']

export const Example = ({ template, category, subCategory }: ExampleProps) => {
  const [viewWidth, setviewWidth] = useState('full')
  const [tabIndex, setTabIndex] = useState(0)

  const options = [
    {
      label: 'smart phone',
      width: '380px',
      icon: <MdOutlineSmartphone />
    },
    {
      label: 'Tablet',
      width: '600px',
      icon: <MdTabletMac />
    },
    {
      label: 'PC',
      width: 'full',
      icon: <MdDesktopMac />
    }
  ]

  return (
    <x.div
      h="full"
      borderRadius="md"
      border="1px solid"
      borderColor={useColorModeValue('gray-200', 'gray-900')}
      id={template.filename}
    >
      <x.div color="green-599">
        <x.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ _: 'column', md: 'row' }}
          border="1px solid"
          py={3}
          px={4}
        >
          <x.span fontWeight="medium" mb={{ _: 4, md: 0 }}>
            {template.name}
          </x.span>

          <x.div display="flex" alignItems="center" spaceX={4}>
            {options.map((option) => (
              <Fragment key={option.label}>
                <x.label htmlFor={`${option.label}-${option.width}`}>
                  <x.input
                    id={`${option.label}-${option.width}`}
                    type="radio"
                    name="displaySize"
                    value={option.width}
                    onChange={() => setviewWidth(option.width)}
                    hidden
                  />

                  {option.icon}
                </x.label>
              </Fragment>
            ))}

            {TABS.map((tab) => (
              <x.button
                key={tab}
                h="20px"
                color="white"
                bg="primary-500"
                fontSize="xs"
                fontWeight="medium"
                borderRadius="full"
                px={5}
                onClick={() => setTabIndex(TABS.indexOf(tab))}
              >
                {tab}
              </x.button>
            ))}

            <x.button
              h="20px"
              color="white"
              bg="primary-500"
              fontSize="xs"
              fontWeight="medium"
              borderRadius="full"
              px={5}
              onClick={() => {
                alert('TODO: copy code to clipboard')
              }}
            >
              Copy
            </x.button>
          </x.div>
        </x.div>

        <x.div borderRadius="2xl">
          {tabIndex === 0 && (
            <x.div
              display="flex"
              w="full"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <x.div w={viewWidth}>
                <ResizableFrame
                  category={category}
                  subCategory={subCategory}
                  template={template}
                />
              </x.div>
            </x.div>
          )}

          {tabIndex === 1 && (
            <x.div>
              <CodeSample
                category={category}
                subCategory={subCategory}
                template={template}
              />
            </x.div>
          )}
        </x.div>
      </x.div>
    </x.div>
  )
}
