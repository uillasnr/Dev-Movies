import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  input {
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
    max-width: 224px;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 10px;
      display: ${(props) => (props.showInput ? 'block' : 'none')};
    }

    &:hover {
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
      border-color: rgba(223, 225, 229, 0);
    }
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  left: 20px; /* Posicione a imagem no canto esquerdo do input */
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`

export const Img = styled.img`
  width: 80px;
  height: 100px;
  padding: 10px;
`

export const ContainerSearch = styled.div`
  position: relative;
  display: block;
  align-items: center;
  padding: 10px;

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
    background-color: #ffffff; /* Defina o estilo de fundo desejado */
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    z-index: 10000;
  }
`
export const Button = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`
