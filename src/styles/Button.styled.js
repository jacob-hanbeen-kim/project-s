import styled from 'styled-components'

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color, theme }) => color || theme.colors.primary};


    &:hover {
    opacity: 0.9;
    transform: scale(0.98);
}
`