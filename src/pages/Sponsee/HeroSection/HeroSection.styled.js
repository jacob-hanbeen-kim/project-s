import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'


export const HeroContainer = styled.div`
    height: 350px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        padding: 100px 0;
    }
`

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    height: inherit;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const HeroFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* grid-template-areas: 'col1 col2'; */
    grid-template-areas: 'col1 col1 col2 col2';

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column = styled.div`
    margin: 0px;
    padding: 0 15px;
    grid-area: ${({ gridArea }) => gridArea};
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    padding: 0px;
    align-items: center;
    justify-content: center;
    justify-items: center;
`

export const MembershipStatus = styled.p`
    color: #000;
    font-size: 13px;
    line-height: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const TopLine = styled.h1`
    color: #000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const AccountId = styled.p`
    color: #454545;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 16px 0px;
`

export const Details = styled.p`
    max-width: 440px;
    margin: 0px;
    font-size: 18px;
    line-height: 24px;
    text-align: start;
    
    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        text-align: center;
    }
`