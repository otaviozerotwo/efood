import styled from 'styled-components'
import { Props } from '.'

export const Image = styled.img<Props>`
  display: block;
  padding: ${(props) => props.padding};
`
