import styled from 'styled-components'
import bgImage from '../../assets/images/hero_background.svg'
import variables from '../../styles/variables'
import { Container } from '../../styles'

export const HeaderBar = styled.header`
  height: 164px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
  }

  h1 {
    font-size: 18px;
    font-weight: 900;
  }

  img {
    display: block;
    height: 57.5px;
  }
`

export const LinkCart = styled.a`
  text-decoration: none;
  color: ${variables.lobisterPink};
  font-size: 18px;
  font-weight: 900;
`
