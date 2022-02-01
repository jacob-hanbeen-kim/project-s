import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa'

export const Icon = styled(FaRegUserCircle)`
    font-size: ${({ size }) => size ? size : '2rem'};
    transition: all 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.background};
    opacity: 0.6;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: ${({ size }) => size ? size : '2rem'};
    height: ${({ size }) => size ? size : '2rem'};
`