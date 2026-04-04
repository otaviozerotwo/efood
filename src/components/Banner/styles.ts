import styled from 'styled-components'
import colors from '../../styles/colors'

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
    background-color: ${colors.black};
    opacity: 0.5;
  }

  .container {
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
    color: ${colors.white};
  }

  h2 {
    font-weight: 100;
    color: ${colors.white};
  }
`
