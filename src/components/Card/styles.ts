import styled from 'styled-components'
import variables from '../../styles/variables'
import { Props } from '.'

export const CardContainer = styled.div<Omit<Props, 'padding'>>`
  background-color: ${(props) => props.bgColor ?? variables.antiqueWhite};
  position: relative;
  margin-bottom: 48px;
`

export const CardBody = styled.div`
  padding: 8px;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  border-color: ${variables.lobisterPink};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
  }
`

export const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
