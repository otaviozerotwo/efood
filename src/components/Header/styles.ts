import styled from 'styled-components'
import bgImage from '../../assets/images/hero_background.svg'
import variables from '../../styles/variables'

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

  h1 {
    font-size: 18px;
    font-weight: 900;
  }

  img {
    display: block;
    height: 57.5px;
  }
`

export const CartButton = styled.a`
  text-decoration: none;
  color: ${variables.lobisterPink};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`
