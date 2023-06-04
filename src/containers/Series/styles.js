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
    cursor: pointer;
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
`
