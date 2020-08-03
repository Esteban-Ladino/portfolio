import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin: 0 20px;
  color: ${({ theme }) => theme.white};

  & nav {
    position: absolute;
    top: 0;
    left: -20px;
    width: 100vw;
    min-width: 320px;
    height: 390px;
    & ul {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 71px;
      background: rgba(11,12,13,0.92);
      list-style: none;
      & li a {
        margin-bottom: 58px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 4px;
        color: ${({ theme }) => theme.white};
        cursor: pointer;
      }
    }
  }

  & svg {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin: 0 35px;
    & nav {
      position: unset;
      display: flex;
      justify-content: flex-end;
      height: auto;
      & ul {
        position: unset;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
        background: none;
        & li {
          margin-right: 32px;
          margin-bottom: 0;
        }
      }
    }
    & svg {
      position: unset;
      width: 28px;
    }
  }
`

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.27em;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;

  color: ${({ theme }) => theme.white};
`
