import styled from 'styled-components';
import { FaPaperPlane, FaRegPaperPlane } from 'react-icons/fa';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MessageContainer = styled.div`
    position: relative;
    overflow-y: scroll;
    
    padding: 10px 10px;
`

export const Messages = styled.div`
    height: 100%;
`

export const Form = styled.form`
    width: 100%;
    height: 50px;
    /* width: 100%; */
    /* max-width: 728px; */
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};

    border-top: 1px solid ${({ theme }) => theme.colors.border};

    /* & button {
        width: 20%;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.onPrimary};
    } */
`

export const Input = styled.input`
    /* line-height: 1.5; */
    width: 100%;
    font-size: inherit;
    background: transparent;
    /* color: ${({ theme }) => theme.colors.surface}; */
    outline: none;
    border: none;
    padding: 0 15px;
`

export const SendButton = styled.div`
    height: 50px;
    width: 50px;
    padding: 15px;
`

export const SendIcon = styled(FaPaperPlane)`
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
`