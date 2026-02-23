import styled from 'styled-components'
import bgImage from '../../assets/images/hero_background.svg'
import variables from '../../styles/variables'

export const HeaderBar = styled.header`
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 900;
`

export const LinkCart = styled.a`
  text-decoration: none;
  color: ${variables.lobisterPink};
  font-size: 18px;
  font-weight: 900;
`
