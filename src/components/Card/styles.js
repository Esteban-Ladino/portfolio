import styled from 'styled-components'

export const Article = styled.article`
  position: relative;
  width: 330px;
  height: 276px;
  margin: 0 auto;
  border-radius: 5px;
  background: ${({ theme }) => theme.regularGray};
  & h2 {
    position: absolute;
    z-index: 1;
    width: 100%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 4px;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.7);
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
  }
  & figure {
    height: 100%;
    & img {
      height: 100%;
      width: 100%;
      border-radius: 3px;
      object-fit: cover;
    }
    &:before {
      content:'';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.4);
    }
  }

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 454px;
    & h2 {
      margin-top: 25px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 845px;
    height: 705px;
    & h2 {
      margin-top: 40px;
      font-size: 24px;
    }
  }
`
