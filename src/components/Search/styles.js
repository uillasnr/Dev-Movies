import styled from 'styled-components'

export const Container = styled.div`
  input {
    font-size: 14px;
    color: #202124;
    display: flex;
    z-index: 3;
    height: 44px;
    background: white;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    padding-left: 30px; /* Aumente o padding para criar espaço para a imagem */
    margin: 0 auto;
    width: 280px;
    max-width: 224px;
  }

  input:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
  img {
    position: absolute;
    left: 10px; /* Posicione a imagem no canto esquerdo do input */
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }
`
export const Img = styled.img`
  width: 80px;
  height: 100px;
  padding: 10px;
`

export const ContainerSearch = styled.div`
  cursor: pointer;
  display: flex;
  color: #fff;
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
    width: 300px;
    background: red;
    position: absolute;
    z-index: 10000;
  }
  image {
    width: 80px;
    height: 100px;
    padding: 10px;
  }

  .href {
  }
`
