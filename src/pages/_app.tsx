import type { AppProps } from 'next/app'

import Head from 'next/head'

import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import { DefaultLayout } from '@/layout/default'

import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/global'

const AppPage = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />

        <GlobalStyles />

        <Head>
          <title>xStyled UI</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="xStyled UI" />
        </Head>

        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default AppPage
