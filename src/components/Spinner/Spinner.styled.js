
import styled from 'styled-components';

export const StyledSpinner = styled.svg`
    width: 24px;
    height: 24px;
    transform: rotate(-90);
    stroke-linecap: round;
    stroke-width: 4;
    fill: none;
`;

export const InnerCircle = styled.circle`
    stroke: rgb(32, 129, 226);
    stroke-dasharray: 187;
    animation: 1s ease-in-out 0s infinite normal none running inner;
    stroke-dashoffset: 0;
    transform-origin: center center;

    @keyframes inner {
        0% {
            stroke-dashoffset: 187;
        }

        25% {
            stroke-dashoffset: 80;
        }

        100% {
            stroke-dashoffset: 187;
            transform: rotate(360deg);
        }
    }
`

export const OuterCircle = styled.circle`
    stroke: rgb(229, 232, 235);
    animation: 1s linear 0s infinite normal none running outer;
    stroke-dasharray: 312;
    stroke-dashoffset: 0;
    transform-origin: center center;

    @keyframes outer {
        0% {
            stroke-dashoffset: 312;
            transform: rotate(70deg);
        }

        25% {
            stroke-dashoffset: -312;
        }

        100% {
            stroke-dashoffset: -312;
            transform: rotate(450deg);
        }
    }
`