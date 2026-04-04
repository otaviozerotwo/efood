import styled from 'styled-components'
import colors from '../../styles/colors'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${colors.lobisterPink};
  padding: 6px 4px;
  color: ${colors.antiqueWhite};
  font-size: 12px;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 8px;
  }
`
