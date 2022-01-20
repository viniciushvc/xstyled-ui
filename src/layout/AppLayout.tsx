import { x } from '@xstyled/styled-components'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <x.main>{children}</x.main>
      <Footer />
    </>
  )
}
