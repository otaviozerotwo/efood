import styled from 'styled-components'
import { Container } from '../../styles'
import variables from '../../styles/variables'

export const BackGroundImage = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${variables.black};
    opacity: 0.5;
  }

  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0px 32px 0px;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: ${variables.white};
  z-index: 1;
`

export const Category = styled.h2`
  font-weight: 100;
  font-size: 32px;
  color: ${variables.white};
  z-index: 2;
`
