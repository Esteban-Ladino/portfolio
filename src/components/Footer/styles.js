import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  font-size: 30px;
  & ul {
    display: flex;
    justify-content: space-between;
    width: 200px;
    list-style: none;
    & li a {
      color: ${({ theme }) => theme.white};

      & svg {
        filter: drop-shadow(0px 0px 3px #131313);
      }
    }
  }

  @media screen and (min-width: 835px) {
    left: 38px;
    bottom: 45px;
    transform: translateX(0);
    font-size: 25px;
    & ul {
      flex-direction: column;
      width: auto;
      height: 200px;
    }
  }
`
