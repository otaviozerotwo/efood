import styled, { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.seashell};
    color: ${colors.lobisterPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.lobisterPink};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
`

export default GlobalStyle
