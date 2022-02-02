import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.onSecondary};
  padding: 100px 0 60px;

  ul {
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
  }
`