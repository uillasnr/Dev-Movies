import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from {
    transform: scale(0)
}
to{
    transform: scale(1)
}

`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;

  @media (max-width: 1130px) {
    margin-left: -100px;
  }
  @media (max-width: 940px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 290px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111/ 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 1025px) {
    img {
      width: 55%;
      margin-left: 133px;
    }
  }
  @media (max-width: 940px) {
    img {
      width: 20%;
      margin-left: 180px;
    }
  }
  @media (max-width: 715px) {
    margin-left: -80px;
  }
`
export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 1025px) {
    width: 65%;
  }
  @media (max-width: 715px) {
    width: 70%;
  }
  @media (max-width: 510px) {
    width: 70%;
    margin-left: 27px;
    h2 {
      font-size: 2.1rem;
    }
    p {
      font-size: 12px;
    }
  }
`
export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }
  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  iframe {
    border: none;
  }

  @media (max-width: 600px) {
    iframe {
      width: 85%;
      height: 324px;
    }
  }
`
