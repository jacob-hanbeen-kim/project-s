import styled, { keyframes } from 'styled-components';
import { Flex } from '../../../styles/Flex.styled'


export const SectionFlex = styled(Flex)`
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%); */
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(50,50,50,0.8) 100%), linear-gradient(180deg, rgba(50,50,50,0.1) 0%, transparent 100%);
        z-index: 2;
    }
`
export const animation = keyframes`
    0% {opacity: 0; transform: translateY(-10px); filter: blur(10px);}
    100% {opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

export const ConentContainer = styled.div`
    /* max-width: 360px; */
    z-index: 3;
    gap: 30px;
    display: grid;
    text-align: center;
    justify-items: center;

    & > * {
        opacity: 0;
        animation: ${animation} 1s forwards;

        :nth-child(1) {
            animation-delay: 0s;
        }

        :nth-child(2) {
            animation-delay: 0.2s;
        }

        :nth-child(3) {
            animation-delay: 0.4s;
        }
    }

    & > button {
        width: 15%;
        margin-top: 20px;
    }
`

export const Title = styled.h1`
    margin: 0px;
    font-size: 3rem;

    /* color: ${({ theme }) => theme.colors.primary}; */
    color: #fff;
    background: linear-gradient(180deg, #EEF7FB 0%, #7BC2E0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    
    span {
        background: linear-gradient(180deg, #EEF7FB 0%, #449DD1 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    @media (max-width: 785px) {
        font-size: 2.5rem;
    }
`

export const Description = styled.p`
    margin: 0px;
    color: #a0a0a0;
`

export const ImageContainer = styled.div`

`

export const Background = styled.div`
    /* width: 100%;
    position: absolute;
    overflow: hidden; */

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    object-fit: cover;
    background: #232a34;
`