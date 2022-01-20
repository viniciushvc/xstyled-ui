import { createGlobalStyle } from '@xstyled/styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: bg;
    color: text;
    transition: background-color 0.3s ease;
  }
  body {
    font-family: 'Asap', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none
  }
`
