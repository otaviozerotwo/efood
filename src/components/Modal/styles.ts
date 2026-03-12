import styled from 'styled-components'
import variables from '../../styles/variables'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  background-color: ${variables.lobisterPink};
  position: relative;
  z-index: 2;
  padding: 32px;

  > div {
    display: flex;
    flex-direction: column;
  }

  h4,
  p {
    color: ${variables.white};
    margin-bottom: 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;
`
