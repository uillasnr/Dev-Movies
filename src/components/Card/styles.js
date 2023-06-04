import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 200px;
    height: 100%;
  }
  h3 {
    color: #fff;
    margin-top: 15px;
    font-size: 0.7rem;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 65%;
  }
`
