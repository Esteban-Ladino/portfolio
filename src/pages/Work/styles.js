import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-top: 16px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.white};
  }
  & ul {
    display: grid;
    grid-row-gap: 75px;
    margin-top: 50px;
    margin-bottom: 80px;
    list-style: none;
  }
  & canvas {
    position: fixed;
    top: 0;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 20px;
    }
    & ul { 
      grid-template-columns: repeat(2, 344px);
      grid-column-gap: 25px;
      margin-top: 70px;
    }
  }

  @media screen and (min-width: 1440px) {
    & h2 {
      font-size: 35px;
      font-weight: lighter;
      line-height: normal;
    }
    & ul {
      grid-template-columns: repeat(3, 344px);
      grid-template-rows: repeat(8, 100px);
      grid-row-gap: 0;
      margin-top: 90px;
      & li {
        grid-row-end: span 9;
      }
      & li:nth-child(2) {
        grid-column: 2;
        grid-row: 2 / span 9;
      }
    }
  }
`
