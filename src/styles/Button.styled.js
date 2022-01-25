import styled from 'styled-components'

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${({ color, theme }) => color || theme.colors.primary};
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    
    cursor: pointer;

    font-size: ${({ big }) => big ? '20px' : '16px'};
    font-weight: 700;
    
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color, theme }) => color || theme.colors.primary};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`