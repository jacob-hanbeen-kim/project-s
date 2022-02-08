import styled from 'styled-components';
import { Flex } from '../../styles/Flex.styled';
import { Button } from '../../styles/Button.styled';

export const Container = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;

    background-color: ${({ theme }) => theme.colors.background};
`

export const ContentContainer = styled.div`
    width: 100%;
`

export const HeaderContainer = styled.div`
    margin: 30px 0px;
    text-align: center;
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin: 0px;
`

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.default};
    margin: 0px;

    & > span {
        font-size: ${({ theme }) => theme.fontSizes.large};
        font-weight: bold;
    }
`


export const MembershipContainer = styled.div`
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