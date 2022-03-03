import styled from 'styled-components';
import { FaRegHandPointer, FaHandPointer } from 'react-icons/fa';

export const AnimationBox = styled.div`
    position: absolute;

    left: ${({ startX }) => startX ? startX : '50%'};
    top: ${({ startY }) => startY ? startY : '50%'};

    z-index: 2;

    animation: translateMouse linear forwards;
    animation-duration: ${({ duration }) => duration ? duration : '3s'};
    animation-iteration-count: infinite;

    @keyframes translateMouse {
        0% {
            opacity: 0;
            /* transform: translate(0, 0); */
        }

        10% {
            opacity: 1;
        }

        60% {
            opacity: 1;
            /* transform: ${({ x, y }) => `translate(${x}, ${y})`}; */
            left: ${({ destX }) => destX};
            top: ${({ destY }) => destY};
        }

        90% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            /* transform: ${({ x, y }) => `translate(${x}, ${y})`}; */
            left: ${({ destX }) => destX};
            top: ${({ destY }) => destY};
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        /* left: 50vw; */
    }
`

export const StyledMousePointer = styled(FaRegHandPointer)`
    z-index: 3;
    font-size: 2rem;
    
`

export const MousePointerBg = styled(FaHandPointer)`
    z-index: 2;
    font-size: 2rem;
    /* width: inherit; */
    /* animation: translateMouse 3s linear forwards infinite; */
    /* animation-delay: 5s; */
    color: white;

    /* @keyframes translateMouse {
        0% {
            opacity: 0;
            transform: translate(0, 0);
        }

        10% {
            opacity: 1;
        }

        60% {
            opacity: 1;
            transform: ${({ x, y }) => `translate(${x}, ${y})`};
        }

        90% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: ${({ x, y }) => `translate(${x}, ${y})`};
        }
    } */
`