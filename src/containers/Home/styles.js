import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 1.9rem;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 1.9rem;
      width: 450px;
      width: 385px;
      display: flex;
      text-align: center;
    }
    p {
      font-size: 16px;
      width: 450px;
      display: flex;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.9rem;
      width: 450px;
      width: 385px;
      display: flex;
      text-align: center;
    }
    p {
      font-size: 13px;
      width: 395px;
      display: flex;
      text-align: center;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 1.5rem;
      width: 303px;
      display: flex;
      text-align: center;
    }
    p {
      font-size: 12px;
      width: 330px;
      display: flex;
      text-align: center;
    }
  }
`
export const Poster = styled.div`
  z-index: 2;
  img {
    width: 290px;
    border-radius: 30px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
