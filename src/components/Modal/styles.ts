import styled from 'styled-components'
import variables from '../../styles/variables'
import { breakpoints } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

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

  .add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 218px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;

    .add-to-cart {
      width: 100%;
    }
  }
`

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 24px;
    margin-right: 0;
  }
`
