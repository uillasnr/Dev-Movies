import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-image: ${(props) =>
    props.changeBackground
      ? 'linear-gradient(to bottom, rgb(225 217 217), rgba(0, 0, 0, 0))'
      : 'none'};
  transition: background-image 0.6s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`

export const LogoImg = styled.img`
  width: 30%;

  @media (max-width: 768px) {
    width: 50%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 1020px) {
    font-size: 22px;
    gap: 30px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    gap: 20px;
  }

  /* Estilos para telas menores que 768px */
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: center;
  }
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
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1020px) {
    font-size: 22px;
  }
`
