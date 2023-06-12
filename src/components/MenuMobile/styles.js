import { css } from '@emotion/react'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  z-index: 9999;
  position: fixed;
  top: 0;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-image: ${(props) =>
    props.changeBackground
      ? 'linear-gradient(to bottom, rgb(225 217 217), rgba(0, 0, 0, 0))'
      : 'none'};
  transition: background-image 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-image: none;
  }
`

export const LogoImg = styled.img`
  width: 30%;

  @media (max-width: 768px) {
    width: 40%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  /* Estilos para telas menores que 768px */
  @media (max-width: 768px) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(
      to bottom,
      rgb(225 217 217 / 80%),
      rgb(255 255 255 / 11%)
    );
    transition: background-image 0.6s ease-in-out;
    border-radius: 10px;
    width: 170px;
    height: 100px;
    list-style: none;
    gap: 10px;
    margin-top: 45px;
  }

  opacity: 10;
  pointer-events: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1100px) {
    font-size: 22px;
    &::after {
      bottom: 10px;
    }
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 870px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    &::after {
      bottom: -3px;
    }
  }
`

export const MenuToggle = styled.div`
  display: none; // Esconde o botão de hambúrguer em telas maiores

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 90%;
    position: fixed;
    top: 15px;
    right: 5%; // Reduzi o valor para melhorar o posicionamento
    z-index: 999;

    .menu-icon {
      margin-right: 10px;
      color: #fff;
    }

    .search-icon {
      margin-left: 10px;
      color: #fff;
    }
  }
`
