import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  width: 60%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 2px;
    border-radius: 15px;
    width: 3%;
    height: 5%;
    background: #f5f5f5;
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 55%;
    padding: 20px;
  }
  @media (max-width: 445px) {
    width: 90%;
    height: 40%;
    padding: 20px;
  }
  @media (max-width: 390px) {
    width: 90%;
    height: 40%;
    padding: 20px;
  }
`

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
