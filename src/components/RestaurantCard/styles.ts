import styled from 'styled-components'
import variables from '../../styles/variables'

export const Title = styled.h3`
  display: block;
  font-size: 18px;
`

export const Description = styled.p`
  color: ${variables.lobisterPink};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 8px;
`
