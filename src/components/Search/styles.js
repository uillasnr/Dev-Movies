import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
  padding-left: 90px;
  width: 280px;
  max-width: 100%;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }

  @media (max-width: 768px) {
    display: ${({ showInput }) => (showInput ? 'block' : 'none')};
    width: 100%;
    padding-left: 16px;
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  left: 20px; /* Posicione a imagem no canto esquerdo do input */
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  z-index: 9;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-left: auto;
    margin-right: 10px;
    margin-top: 5px;
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
  max-width: 300px;

  top: 100%;
  left: 0;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
    gap: 10px;
    width: 270px;
    font-size: 14px;
  }

  div {
    width: 100%;
    max-width: 300px;
    background-color: #ffffff;
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
