import styled from 'styled-components'

const themes = {
    light: {
        background: 'light',
        color: 'primary'
    },
    dark: {
        background: 'primary',
        color: 'light',
    }
}

export const Button = styled.button`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${({ dark, theme }) => dark ? theme.colors[themes['dark'].color] : theme.colors[themes['light'].color]};
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};

    cursor: pointer;

    font-size: ${({ big }) => big ? '20px' : '16px'};
    font-weight: 700;

    background-color: ${({ dark, theme }) => dark ? theme.colors[themes['dark'].background] : theme.colors[themes['light'].background]};
    color: ${({ dark, theme }) => dark ? theme.colors[themes['dark'].color] : theme.colors[themes['light'].color]};

    &:hover {
    opacity: 0.9;
    transform: scale(0.98);
}
`