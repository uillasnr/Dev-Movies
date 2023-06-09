import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  span {
    padding: 8px 18px;
    border: 2px solid #ffffff;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    background-color: #0f0f0f;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 8px;

    span {
      padding: 6px 14px;
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6px;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 30px;
    span {
      padding: 4px 12px;
      font-size: 9px;
    }
  }
`
