import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
`
export const SidebarContainer = styled.div`
    flex: 1;
    height: 100%;

    position: relative;
`

export const ChatContainer = styled.div`
    flex: 3;
    height: 100%;

    border-right: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 1px solid ${({ theme }) => theme.colors.border};
`

export const PreviewContainer = styled.div`
    flex: 2;
    height: 100%;
`