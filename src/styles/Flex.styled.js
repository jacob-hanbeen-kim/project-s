import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
        text-align: center;
    }
`