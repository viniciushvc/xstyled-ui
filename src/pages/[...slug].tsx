/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { x } from '@xstyled/styled-components'

import { DefaultLayout } from '@/layout/default'

import { Container } from '@/components/layout/container'

import { Example } from '@/features/components/example'

import { data } from 'data'
import { Category, SubCategory, Template } from '../data/types'
import { NextSeo } from 'next-seo'

type PageProps = {
  category: Category
  subCategory: SubCategory
  templates?: Template[]
}

const TemplatesPage: NextPage<PageProps> = ({
  category,
  subCategory,
  templates
}) => {
  return (
    <>
      <NextSeo title={subCategory.name} />

      <DefaultLayout>
        <Container my={20}>
          <x.div mb={10}>
            <x.h1 fontSize="3xl" fontWeight="bold">
              {subCategory.name}
            </x.h1>

            {subCategory.description && (
              <x.p color={'gray-600'}>{subCategory.description}</x.p>
            )}
          </x.div>

          <x.div spaceY={12}>
            {templates?.map((template) => (
              <Example
                key={template.filename}
                template={template}
                category={category}
                subCategory={subCategory}
              />
            ))}
          </x.div>
        </Container>
      </DefaultLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: string[] }
> = async ({ params }) => {
  const category = params!.slug[0]
  const subCategory = params!.slug[1]

  const categoryData = data.filter((c) => c.id === category)[0]
  const subCategoryData = categoryData.children!.filter(
    (s) => s.id === subCategory
  )[0]
  const templates = subCategoryData.children

  return {
    props: {
      category: categoryData,
      subCategory: subCategoryData,
      templates
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO get rid of ! operator and make more failsafe
  const paths = data
    .map((category) =>
      category
        .children!.map((subCategory) => ({
          params: {
            slug: [category.id, subCategory.id]
          }
        }))
        .flat()
    )
    .flat()

  return {
    paths: paths,
    fallback: false
  }
}

export default TemplatesPage
