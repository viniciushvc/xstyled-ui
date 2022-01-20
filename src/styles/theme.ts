import { defaultTheme } from '@xstyled/styled-components'

export const theme = {
  ...defaultTheme,
  defaultColorModeName: 'dark',
  colors: {
    ...defaultTheme.colors,
    bg: '#fff',
    inverseBg: '#10171d',
    text: '#333',
    inverseText: '#dfdfdf',
    modes: {
      dark: {
        bg: '#10171d',
        inverseBg: '#fff',
        text: '#dfdfdf',
        inverseText: '#333'
      }
    }
  }
}
