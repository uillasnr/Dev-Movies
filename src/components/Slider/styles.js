import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  padding: 0 20px;
  margin-bottom: 60px;
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 50px 0 20px 20px;
  }
  .swiper-wrapper {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`
