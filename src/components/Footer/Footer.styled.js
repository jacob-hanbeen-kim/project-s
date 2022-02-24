import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.onSecondary};
  padding: 100px 0 60px;

  /* ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.onSecondary};
  }

  p {
    text-align: right;
    color: ${({ theme }) => theme.colors.onSecondary};
  }

  img {
      width: 10%;
  }

  @media (max-width: ${({ theme }) => theme.screen.sizeM}) {
    text-align: center;
    
    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  } */
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;

  @media (max-width: ${({ theme }) => theme.screen.sizeM}) {
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const ImgWrap = styled.div`
  max-width: 150px;

  @media (max-width: ${({ theme }) => theme.screen.sizeM}) {
    margin: 10px 0px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-right: 0;
`