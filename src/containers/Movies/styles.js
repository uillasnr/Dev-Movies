import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 40px;
  gap: 3rem 2rem;
  row-gap: 3rem;
  padding: 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 210px;
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 0.9rem;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 20px;
    row-gap: 2rem;

    img {
      width: 150px;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    column-gap: 15px;
    row-gap: 1.5rem;

    img {
      width: 120px;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    column-gap: 10px;
    row-gap: 1rem;

    img {
      width: 100px;
    }

    p {
      font-size: 0.6rem;
    }
  }
`
