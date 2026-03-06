import styled from 'styled-components'
import { Container } from '../../styles'
import variables from '../../styles/variables'

export const BackGroundImage = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
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

  h1,
  h2 {
    font-size: 32px;
    z-index: 1;
  }

  h1 {
    font-weight: 900;
    color: ${variables.white};
  }

  h2 {
    font-weight: 100;
    color: ${variables.white};
  }
`
