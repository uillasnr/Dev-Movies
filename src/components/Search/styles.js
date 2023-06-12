import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`
export const Input = styled.input`
  font-size: 14px;
  color: #202124;
  z-index: 3;
  height: 44px;
  background: white;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  width: 280px;
  max-width: 100%;
  margin: 0px 20px;
  text-align: center;

  &::placeholder {
    text-align: center;
    color: #b0b0b0;
  }

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
  @media (max-width: 930px) {
    width: 100%;
    padding-left: 16px;
  }
  @media (max-width: 768px) {
    /*  display: ${({ showInput }) => (showInput ? 'none' : 'block')};
    width: 100%;
    padding-left: 16px; */
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  z-index: 9;

  @media (max-width: 768px) {
    display: flex;
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: 10px;
    margin-top: auto;
    padding: 0;
  }
`

export const Img = styled.img`
  width: 80px;
  height: 100px;
  padding: 10px;
`

export const ContainerSearch = styled.div`
  position: absolute;
  display: block;
  align-items: center;
  padding: 10px;
  width: 100%;

  top: 100%;
  left: 0;

  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: white;
    gap: 10px;
    width: 270px;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    background-image: linear-gradient(
      to bottom,
      rgb(0 0 0),
      rgb(255 255 255 / 11%)
    );
    transition: background-image 0.6s ease-in-out;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    z-index: 10000;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para telas com largura máxima de 768px (versão mobile) */
    p {
      width: auto;
      font-size: 12px;
    }

    div {
      max-width: 100%;
    }
  }
`
