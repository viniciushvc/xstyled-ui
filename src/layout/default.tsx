import { x } from '@xstyled/styled-components'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <x.main>{children}</x.main>
      <Footer />
    </>
  )
}
