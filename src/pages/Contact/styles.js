import styled from 'styled-components'

export const Main = styled.main`
  & h2 {
    margin-top: 40px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.white};
  }
  & a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.white};
  }
  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 16px;
    }
    & a {
      font-size: 25px;
    }
  }
  @media screen and (min-width: 1440px) {
    & h2 {
      font-size: 24px;
    }
  }
`
