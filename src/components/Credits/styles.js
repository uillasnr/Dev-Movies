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
    width: auto;
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    img {
      height: 160px;
      width: auto;
      max-width: 100%;
      object-fit: cover;
    }

    div {
      max-height: 250px;
      overflow: hidden;
    }
  }
  @media (max-width: 535px) {
    img {
      height: 120px;
      width: auto;
      max-width: 100%;
      object-fit: cover;
    }

    div {
      max-height: 250px;
      overflow: hidden;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 80px;
      width: auto;
      max-width: 100%;
      object-fit: cover;
    }

    div {
      max-height: 250px;
      overflow: hidden;
    }
  }

  @media (max-width: 300px) {
    img {
      height: 120px;
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

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`
