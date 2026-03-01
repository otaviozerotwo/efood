import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  display: inline-block;
  background-color: ${variables.antiqueWhite};
  width: 100%;
  padding: 4px 0px;
  color: ${variables.lobisterPink};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: none;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${variables.antiqueWhite};
  width: 100%;
  padding: 4px 0px;
  color: ${variables.lobisterPink};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: none;
`
