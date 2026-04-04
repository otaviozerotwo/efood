import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const BackGroundImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 384px;
  width: 100%;
  padding: 40px 0;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 284px;

    h2 {
      font-size: 28px;
      padding: 0 24px;
    }
  }
`
