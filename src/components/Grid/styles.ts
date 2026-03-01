import styled from 'styled-components'
import { Props } from '.'

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  column-gap: ${(props) => props.gap};
  margin-top: 80px;
  margin-bottom: 120px;
`
