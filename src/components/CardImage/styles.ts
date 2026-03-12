import styled from 'styled-components'
import { Props } from '.'

export const Image = styled.img<Props>`
  display: block;
  width: 100%;
  height: 217px;
  padding: ${(props) => props.padding};
  object-fit: cover;
`
