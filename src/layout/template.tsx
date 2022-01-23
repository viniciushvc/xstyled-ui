import { createGlobalStyle, x } from '@xstyled/styled-components'

interface TemplateLayoutProps {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: transparent;

  }
`

export const TemplateLayout = ({ children }: TemplateLayoutProps) => {
  return (
    <>
      <GlobalStyles />

      <x.main>{children}</x.main>
    </>
  )
}
