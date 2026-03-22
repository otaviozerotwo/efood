import styled from 'styled-components'
import variables from '../../styles/variables'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${variables.antiqueWhite};
  }

  input {
    height: 32px;
    width: 100%;
    background-color: ${variables.antiqueWhite};
    margin-bottom: 8px;
    padding: 0 8px;
    border: 1px solid ${variables.antiqueWhite};
  }
`
