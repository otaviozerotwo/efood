import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.div`
  background-color: ${variables.white};
  position: relative;
  margin-bottom: 48px;

  img {
    display: block;
  }
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

export const Title = styled.h3`
  display: block;
  font-size: 18px;
`

export const Description = styled.p`
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
