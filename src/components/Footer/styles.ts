import styled from 'styled-components'
import variables from '../../styles/variables'
import { breakpoints } from '../../styles'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 298px;
  width: 100%;
  background-color: ${variables.antiqueWhite};
  padding: 40px 0px;
`

export const Links = styled.ul`
  display: flex;
`

export const Icon = styled.a`
  cursor: pointer;
  margin-right: 8px;
`

export const Copyright = styled.p`
  font-size: 10px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`
