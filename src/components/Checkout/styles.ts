import styled from 'styled-components'
import colors from '../../styles/colors'

type InputGroupProps = {
  maxWidth?: string
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.antiqueWhite};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.antiqueWhite};
    margin-bottom: 24px;
  }

  small {
    color: ${colors.antiqueWhite};
  }

  .button-group {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: flex-end;
  gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${colors.antiqueWhite};
  }

  input {
    height: 32px;
    width: 100%;
    background-color: ${colors.antiqueWhite};
    margin-bottom: 8px;
    padding: 0 8px;
    border: 1px solid ${colors.antiqueWhite};
  }
`
