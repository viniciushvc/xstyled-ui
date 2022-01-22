import { Hero } from '@/features/home/hero'
import { GettingStarted } from '@/features/home/getting-started'
import { ExploreTemplates } from 'features/home/explore-templates'

const HomePage = () => {
  return (
    <>
      <Hero />

      <GettingStarted />

      <ExploreTemplates />
    </>
  )
}

export default HomePage
