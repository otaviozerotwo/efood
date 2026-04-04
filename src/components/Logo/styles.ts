import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Image = styled.img`
  display: block;
  height: 57.5px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 44px;
  }
`
