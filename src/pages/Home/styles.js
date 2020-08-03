import styled from 'styled-components'

export const Main = styled.main`
  min-height: 400px;
  min-width: 320px;
  & canvas {
    position: absolute;
    top: 0;
  }
`

export const Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Montserrat;
  font-style: normal;
  font-weight: 200;
  font-size: 46px;
  line-height: 57px;
  text-align: center;
  letter-spacing: 0.27em;
  color: ${({ theme }) => theme.lightCyan};
  text-shadow: 0px 0px 5px ${({ theme }) => theme.lightCyan};

  @media screen and (min-width: 375px) {
    font-size: 53px;
  }

  @media screen and (min-width: 590px) {
    font-size: 82px;
    line-height: 86px;
  }

  @media screen and (min-width: 835px) {
    font-size: 120px;
    line-height: 128px;
  }
`
