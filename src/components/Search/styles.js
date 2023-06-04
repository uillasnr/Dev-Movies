import styled from 'styled-components'

export const Container = styled.div`
  input {
    width: 300px;
    height: 40px;
  }
`
export const Img = styled.img`
  width: 80px;
  height: 100px;
  padding: 10px;
`

export const Pesquiza = styled.div`
  cursor: pointer;
  display: flex;
  color: #fff;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
    gap: 10px;
    width: 270px;
    font-size: 14px;
  }

  div {
    width: 300px;
    background: red;
    position: absolute;
  }
  image {
    width: 80px;
    height: 100px;
    padding: 10px;
  }
`
