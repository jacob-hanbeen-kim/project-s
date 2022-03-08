import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
`

export const SidebarContainer = styled.div`
    flex: 1;
    position: relative;
    /* border-right: 1px solid ${({ theme }) => theme.colors.border}; */
    border-right: 1px solid black;
`

export const ContentContainer = styled.div`
    flex: 4;
    position: relative;
    height: 100vh;
`