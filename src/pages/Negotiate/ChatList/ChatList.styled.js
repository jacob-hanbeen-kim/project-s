import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    position: sticky;
    top: 0;

    overflow-y: scroll;
`

export const ChatItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 60px;

    &:hover {
        background-color: red;
    }
`