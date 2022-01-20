import type { AppProps } from 'next/app'

import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'

import { theme as oldTheme } from '../theme'

import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />

        <GlobalStyles />

        <ChakraProvider theme={oldTheme}>
          <Head>
            <title>xStyled UI</title>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#06092B" />
            <meta name="description" content="xStyled UI" />
          </Head>

          <Component {...pageProps} />
        </ChakraProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
