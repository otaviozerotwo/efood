import styled from 'styled-components'
import colors from '../../styles/colors'

export const Title = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: 900;
  color: ${colors.antiqueWhite};
`

export const Description = styled.p`
  color: ${colors.antiqueWhite};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
