import { createGlobalStyle } from 'styled-components'
import { APP_ROOT } from '../utils/constants'
import reset from 'styled-reset'
import { centerFlex } from './includes'

export const lightTheme = {
  colors: {
    browserBackground: '#fafafa',
    containerBackground: 'linear-gradient(to bottom, #f5f5f5 80%, #ffffff)',
    gray: '#d8d8d8',
    black: '#000000',
    white: '#ffffff',
    sectionTitle: '#8175a3',
    subscriptionName: '#8175a3'
  },
  includes: {
    centerFlex,
  },
  logosColor : {
    netflix: '#e50914'
  }
}

export const darkTheme = {
  colors: {
    browserBackground: '#000',
    background: 'pink'
  },
  includes: {
    centerFlex,
  }
}

export const GlobalStyle = createGlobalStyle`
  ${ reset }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 10px;
  }

  #${ APP_ROOT } {
    height: 100%;
    background-color: ${ ({ theme }) => theme.colors.browserBackground };
    font-size: 1.5rem;
  }
`
