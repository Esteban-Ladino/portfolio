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
  & h1 {
    margin-top: 45px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 4px;
    color: #798594;
  }
  & article {
    margin: 50px 20px;
    & h3 {
      margin-bottom: 25px;
      text-align: center;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: 4px;
      text-decoration-line: underline;
      color: ${({ theme }) => theme.white};
    }
    & p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      text-align: justify;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.white};
    }
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 16px;
    }
    & article {
      max-width: 490px;
      justify-self: center;
    }
    & div {
      display: grid;
      grid-template: repeat(2, 1fr)/repeat(2, 1fr);
      grid-row-gap: 25px;
      align-items: center;
      max-width: 1092px;
      margin: 30px auto 0;
      & h1 {
        margin: 0;
      }
    }
    & ul {
      margin: 0;
      padding-left: 30px;
    }
  }
  @media screen and (min-width: 1440px) {
    & h2 {
      font-size: 24px;
    }
    & article {
      justify-self: center;
      margin: 0;
      & h3 {
        font-size: 22px;
        line-height: 24px;
      }
      & p {
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 4px;
      }
    }
    & div {
      grid-row-gap: 75px;
      grid-column-gap: 100px;
      margin-top: 50px;
    }
    & h1 {
      font-size: 96px;
      line-height: 103px;
      text-align: left;
    }
    & ul {
      justify-self: start;
      padding: 0;
      & h3 {
        font-size: 20px;
        line-height: 24px;
      }
      & li p {
        font-size: 14px;
      line-height: 15px;
      }
    }
  }
`

export const List = styled.ul`
  justify-self: center;
  width: 100%;
  max-width: 445px;
  margin: 0 20px 50px;
  list-style: none;

  & h3 {
    margin-bottom: 25px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.white};
  }
  & li {
    margin-bottom: 15px;

    & p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 13px;
      letter-spacing: 4px;
      color: ${({ theme }) => theme.white};
    }

    & progress[value] {
      width: 90%;
      height: 5px;
      border: none;
      background-color: ${({ theme }) => theme.gray};
      animation: progressBar 1.5s ease-in-out;

      &::-webkit-progress-bar {
        background-color: transparent;
      }

      &::-webkit-progress-value {
        background-color: ${({ theme }) => theme.white};
      }

      &::-moz-progress-bar {
        border: 0;
        background-size: 35px 20px, 100% 100%, 100% 100%;
        background-color: ${({ theme }) => theme.white};
      }
    }

    @keyframes progressBar {
      0% {
        padding-right: 100%;
      }
      100% {
        padding-right: 0;
      }
    }
  }
`

export const Download = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 60px;
  margin: 0 auto 85px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.white};
  background: none;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 106.9%;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin: 0;
    justify-self: center;
  }
`
