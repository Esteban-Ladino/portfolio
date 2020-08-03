import styled from 'styled-components'

export const Main = styled.main`
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
  width: 762px;
  height: 256px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 200;
  font-size: 120px;
  line-height: 128px;

  text-align: center;
  letter-spacing: 0.27em;

  /* lightCyan */
  color: #00FFFF;

  /* titleShadow */
  text-shadow: 0px 0px 15px #00FFFF;
`
