import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'


export const HeroContainer = styled.div`
    height: 350px;
    /* width: 100%; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        padding: 100px 0;
    }
`

export const HeroWrapper = styled.div`
    display: flex;
    z-index: 1;
    /* width: inherit; */
    height: inherit;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const HeroFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: auto;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
        justify-content: center;
    }
`

export const DetailFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Row = styled.div`
    /* display: grid; */
    /* grid-auto-columns: minmax(auto, 1fr); */
    /* grid-template-areas: 'col1 col2'; */
    /* grid-template-areas: 'col1 col1 col2 col2'; */

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: auto;
    align-items: center;
    /* height: inherit; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        /* grid-template-areas: 'col1 col1' 'col2 col2'; */
        flex-direction: column;
    }
`

export const Column = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin: 0px;
    padding: 0 15px;
    /* grid-area: ${({ gridArea }) => gridArea}; */
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    justify-items: center;
`

export const TopLine = styled.h1`
    color: ${({ theme }) => theme.colors.onBackground};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
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

export const TagWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        justify-content: center;
    }
`

export const Img = styled.img`
    border-radius: 50%;
    object-fit: cover;
    margin: 0px 10px;
    padding: 5px;
    width: ${({ size }) => size ? size : '2rem'};
    height: ${({ size }) => size ? size : '2rem'};

    /* filter: ${({ theme }) => theme.colors.onSurface}; */
    /* background-color: ${({ theme }) => theme.colors.onSurface}; */
    background-color: #f0f6fc;
`

export const TeamTag = styled.div`
    margin: 0px;
    margin-right: 10px;
    padding: 0px;
`

export const SportsTag = styled.div`
    margin: 0px;
    margin-left: 10px;
    padding: 0px;
`

export const VerticalLine = styled.div`
    border-left: 2px solid ${({ theme }) => theme.colors.onSurface + 'ab'};
    height: 30px;
    margin: 0px;
`

export const SponsorList = styled.div`
    display: flex;
    padding: 0px 15px;
    overflow-x: scroll;
    max-width: 460px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 20px;
    /* margin-bottom: 30px; */

`