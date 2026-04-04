import styled from 'styled-components'
import colors from '../../styles/colors'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  display: inline-block;
  background-color: ${colors.antiqueWhite};
  width: 100%;
  height: 24px;
  color: ${colors.lobisterPink};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: none;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${colors.antiqueWhite};
  width: 100%;
  height: 24px;
  color: ${colors.lobisterPink};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: none;
`
