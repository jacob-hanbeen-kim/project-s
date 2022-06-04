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

export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 150px;
    margin-right: 150px;
`

export const ProgressLine = styled.div`
    width: 200px;
    height: 13px;
    border-bottom: 1px solid #c4c4c4;
`

export const ProgressCurrent = styled.div`
    height: 25px;
    width: 25px;
    background-color: #ae7acc;
    border-radius: 50%;
    display: inline-block;
`

export const ProgressBarCircle = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
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