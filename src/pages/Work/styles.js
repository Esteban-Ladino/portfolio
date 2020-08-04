import styled from 'styled-components'

export const Main = styled.main`
  & h2 {
    margin-top: 16px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.white};
  }
  & ul {
    margin-top: 35px;
    margin-bottom: 80px;
    & li {
      margin-bottom: 25px;
    }
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 16px;
    }
    & ul li {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    & h2 {
      font-size: 24px;
    }
    & ul {
      margin-top: 60px;
      & li {
        margin-bottom: 60px;
      }
    }
  }
`
