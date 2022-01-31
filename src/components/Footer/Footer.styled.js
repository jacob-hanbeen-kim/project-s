import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
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
  }
`