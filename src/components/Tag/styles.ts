import styled from 'styled-components'
import variables from '../../styles/variables'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${variables.lobisterPink};
  padding: 6px 4px;
  color: ${variables.antiqueWhite};
  font-size: 12px;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 8px;
  }
`
