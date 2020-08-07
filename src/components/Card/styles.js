import styled from 'styled-components'

export const Article = styled.article`
  width: 344px;
  margin: 0 auto;
  padding: 0 27px;
  border-radius: 5px;
  box-sizing: border-box;
  & figure {
    height: 100%;
    width: fit-content;
    margin: 0 auto;
    filter: drop-shadow(9px 13px 13px rgba(36, 42, 58, 0.25));
    & img {
      height: 100%;
      width: 290px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  & h2 {
    width: 100%;
    margin: 42px 0 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.7);
    color: ${({ theme }) => theme.white};
  }
  & p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12.7px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 4.2px;
    color: #F3F6FF;
  }

  @media screen and (min-width: 1440px) { 
    & h2 {
      font-size: 31px;
      font-weight: lighter;
      line-height: 34px;
      text-transform: capitalize;
    }
    & p {
      margin-bottom: 80px;
    }
  }
`
