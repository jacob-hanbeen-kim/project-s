import styled from 'styled-components'

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    cursor: pointer;

    font-size: ${({ big }) => big ? '20px' : '16px'};
    font-weight: 700;

    background-color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    color: ${props => props.invert ? props.theme.colors.onInvert : props.theme.colors.onPrimary};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
    }
`