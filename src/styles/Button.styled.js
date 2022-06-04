import styled from 'styled-components'

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    cursor: pointer;

    /* font-size: ${({ big }) => big ? '20px' : '16px'}; */
    font-size: ${props => props.big ? props.theme.fontSizes.use('larger') : props.theme.fontSizes.use('standard')};
    /* font-weight: 700; */
    font-weight: ${({ theme }) => theme.fontWeights.use('bolder')};

    background-color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    color: ${props => props.invert ? props.theme.colors.onInvert : props.theme.colors.onPrimary};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        font-size: ${props => props.big ? props.theme.fontSizes.use('standard') : props.theme.fontSizes.use('h5')};
    }
`