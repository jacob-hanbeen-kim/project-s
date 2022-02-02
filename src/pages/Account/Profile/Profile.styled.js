import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'


export const ProfileContainer = styled.div`
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ProfileWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* grid-template-areas: 'col1 col2'; */
    grid-template-areas: 'col1 col1';

    @media screen and (max-width: 760px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({ gridArea }) => gridArea};
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
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
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`