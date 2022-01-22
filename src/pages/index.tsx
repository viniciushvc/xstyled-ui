import { DefaultLayout } from '@/layout/default'

import { Hero } from '@/features/home/hero'
import { GettingStarted } from '@/features/home/getting-started'
import { ExploreTemplates } from 'features/home/explore-templates'

const HomePage = () => {
  return (
    <DefaultLayout>
      <Hero />

      <GettingStarted />

      <ExploreTemplates />
    </DefaultLayout>
  )
}

export default HomePage
