import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 100%;
    max-width: 200px;
    height: auto;
  }

  h3 {
    color: #fff;
    margin-top: 15px;
    font-size: 0.7rem;
    display: flex;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  /*  @media (max-width: 660px) {
    width: 50%;
  } */
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 50%;
  }
  @media (max-width: 390px) {
    width: 50%;
    border-radius: 15px;
  }
`
