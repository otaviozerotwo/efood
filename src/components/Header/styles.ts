import styled from 'styled-components'
import bgImage from '../../assets/images/hero_background.svg'
import variables from '../../styles/variables'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  height: 164px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 144px;

    h2 {
      display: none;
    }
  }
`

export const CartButton = styled.a`
  text-decoration: none;
  color: ${variables.lobisterPink};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
