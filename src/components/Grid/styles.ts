import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  column-gap: ${(props) => props.gap};
  margin-top: 80px;
  margin-bottom: 120px;

  li {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
