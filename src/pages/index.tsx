import { AppLayout } from '@/layout/AppLayout'

import { Hero } from '@/components/hero'
import { GettingStarted } from '@/components/getting-started'
import { ExploreTemplates } from '@/components/explore-templates'

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />

      <GettingStarted />

      <ExploreTemplates />
    </AppLayout>
  )
}

export default HomePage
