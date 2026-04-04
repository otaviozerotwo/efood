import styled from 'styled-components'
import colors from '../../styles/colors'
import trashIcon from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.antiqueWhite};
    text-align: center;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.antiqueWhite};
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.antiqueWhite};
  position: relative;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${trashIcon});
    position: absolute;
    bottom: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
