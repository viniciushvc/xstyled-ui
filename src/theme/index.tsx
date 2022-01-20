import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif'
  },
  colors: {
    discord: '#7289da'
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
  }
})
