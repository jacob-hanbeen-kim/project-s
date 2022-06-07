import styled from 'styled-components';

export const OnboardingContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ActionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    align-items: center;

    margin-bottom: 20px;
`

export const ActionItem = styled.p`
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`

export const OnboardingCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 50px 0px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`