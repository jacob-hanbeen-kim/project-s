import styled from 'styled-components';

export const Icon = styled.div`
    font-size: ${({ size }) => size ? size : '2rem'};
    transition: all 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.onBackground};
    opacity: 0.6;

    /* max-width:100%;
    max-height:100%; */
    ${({ hasBorder }) => hasBorder &&
        `border: ${({ borderSize }) => borderSize ? borderSize : '5px'} solid ${({ borderColor }) => borderColor ? borderColor : 'white'};`}

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    object-fit: cover;
    min-width: ${({ size }) => size ? size : '2rem'};
    width: ${({ size }) => size ? size : '2rem'};
    min-height: ${({ size }) => size ? size : '2rem'};
    height: ${({ size }) => size ? size : '2rem'};

    ${({ hasBorder, borderSize, borderColor }) => hasBorder &&
        `border: ${borderSize} solid ${borderColor}`
    }
`