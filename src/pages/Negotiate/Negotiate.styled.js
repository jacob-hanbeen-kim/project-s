import styled from 'styled-components';

export const Container = styled.div`
    height: 95%;
    width: 95%;
    
    display: flex;
    flex-direction: column;
    
    justify-content: flex-end;
`

export const MessageContainer = styled.div`
    padding: 10px;
    /* height: 80vh; */
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    /* background-color:  ${({ theme }) => theme.colors.onBackground}; */
    /* background-color: red; */

    /* &::-webkit-scrollbar {
        width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    &::-webkit-scrollbar-thumb {
        background: #6649b8;
    } */
`

export const Form = styled.form`
    height: 5vh;
    /* width: 100%; */
    /* max-width: 728px; */
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};

    & button {
        width: 20%;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.onPrimary};
    }
`

export const Input = styled.input`
    line-height: 1.5;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.use('larger')};
    background: ${({ theme }) => theme.colors.onSurface};
    color: ${({ theme }) => theme.colors.surface};
    outline: none;
    border: none;
    padding: 0 10px;
`