import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #ffffff;
  }
  img {
    height: 180px;
  }
  @media (max-width: 700px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`
