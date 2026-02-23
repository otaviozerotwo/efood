import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  display: inline-block;
  background-color: ${variables.lobisterPink};
  padding: 4px 6px;
  color: ${variables.antiqueWhite};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${variables.lobisterPink};
  padding: 4px 6px;
  color: ${variables.antiqueWhite};
  font-size: 14px;
  font-weight: bold;
`
