import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'


export const HeroContainer = styled.div`
    height: 50vh;
    padding: 30px 100px;
    width: 100vw;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        padding: 100px 0;
    }
`

export const HeroWrapper = styled.div`
    display: flex;
    z-index: 2;
    /* width: inherit; */
    height: inherit;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* height: inherit; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        /* grid-template-areas: 'col1 col1' 'col2 col2'; */
        flex-direction: column;
    }
`

export const ProfileInfoWrapper = styled.div`
    margin: 0px;
    padding: 0 15px;
`

export const ProfileInfoFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
        /* justify-content: center; */
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

export const BioWrapper = styled.div`
    margin: 0px;
    padding: 0 15px;
`

export const TagWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    /* justify-items: center; */
    flex: 1 1 auto;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        justify-content: center;
    }
`


export const Img = styled.img`
    border-radius: 50%;
    object-fit: cover;
    padding: 5px;
    margin: 0px 10px;
    width: ${({ size }) => size ? size : '2rem'};
    height: ${({ size }) => size ? size : '2rem'};

    /* filter: ${({ theme }) => theme.colors.onSurface}; */
    /* background-color: ${({ theme }) => theme.colors.onSurface}; */
    background-color: #f0f6fc;
`

export const TagContainer = styled.div`
    margin: 0px;
    margin-left: ${({ isLeft }) => isLeft ? '0px' : '10px'};
    margin-right: ${({ isLeft }) => isLeft ? '10px' : '0px'};
    padding: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const VerticalLine = styled.div`
    border-left: 2px solid ${({ theme }) => theme.colors.onSurface + 'ab'};
    height: 30px;
    margin: 0px;
`

export const Details = styled.p`
    /* max-width: 440px; */
    margin: 0px;
    font-size: 1rem;
    /* line-height: 24px; */
    text-align: start;
    overflow-y: scroll;
    max-height: 300px;
    max-width: 600px;
    min-width: 300px;
    
    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        text-align: center;
    }
`

export const SponsorList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    overflow-x: scroll;
    max-width: 600px;
    min-width: 300px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        max-width: 300px;
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        max-width: 600px;
    }
    /* width: 300px; */
`

export const SponsorItem = styled.div`
    width: 100%;
    height: 100%;
`