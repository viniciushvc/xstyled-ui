/* eslint-disable @typescript-eslint/no-var-requires */

import { x } from '@xstyled/styled-components'

import { CodeBlock, a11yDark } from 'react-code-blocks'

import { Category, SubCategory, Template } from '../../data/types'

type CodeSampleProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

export const CodeSample = ({
  template,
  category,
  subCategory
}: CodeSampleProps) => {
  const code =
    require(`!!raw-loader!../../pages/templates/${category.id}/${subCategory.id}/${template.filename}`).default

  return (
    <x.div fontFamily="mono" fontSize="sm" position="relative">
      <CodeBlock
        text={code}
        language="tsx"
        theme={a11yDark}
        showLineNumbers={false}
      />
    </x.div>
  )
}
