import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};
    width: 100%;

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`