import styled from 'styled-components';

export const Container = styled.div`
    width: 25px;
    height: 25px;
`

export const Wrapper = styled.div`
    width: inherit;
    height: inherit;
    border-radius: ${({ theme }) => theme.border.radius};
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: inherit;
    height: inherit;

    color: #8C8C8C;
`