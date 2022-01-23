import { x } from '@xstyled/styled-components'

import { NextSeo } from 'next-seo'

import type { Category, Template } from '@/models'

import { DefaultLayout } from '@/layout/default'

import { Container } from '@/components/layout/container'

import { Example } from '@/features/components/example'

import { samples } from '@/code-samples'

type ComponentsPageProps = {
  category: Category
  templates: Template[]
}

const TemplatesPage = ({ category, templates }: ComponentsPageProps) => {
  return (
    <>
      <NextSeo title={category.name} />

      <DefaultLayout>
        <Container my={20}>
          <x.div spaceY={5}>
            <x.h1 fontSize="3xl" fontWeight="bold">
              {category.name}
            </x.h1>

            {category.description && <x.p>{category.description}</x.p>}
          </x.div>

          <x.div spaceY={12} mt={10}>
            {templates?.map((template) => (
              <Example
                key={template.filename}
                category={category}
                template={template}
              />
            ))}
          </x.div>
        </Container>
      </DefaultLayout>
    </>
  )
}

type PageProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: PageProps) => {
  const category = samples.find((sample) => sample.id === params.slug)

  const templates = category?.items

  return {
    props: {
      category,
      templates,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

export const getStaticPaths = async () => {
  const paths = samples.map((sample) => {
    return {
      params: {
        slug: sample.id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default TemplatesPage
