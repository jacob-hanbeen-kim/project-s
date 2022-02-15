import styled from 'styled-components';
import { Button } from '../../styles/Button.styled';

export const FileUploadContainer = styled.div`
    display: flex;
    width: 40%;
    /* width: 100%; */
    padding: 10px;
    flex-direction: column;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        /* position: absolute; */
    }
`

export const UploadFileInput = styled.input`
    display: none;
    
`

export const UploadFileButton = styled(Button)`
    margin: 10px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        justify-content: flex-start;
        /* display:none */
        /* position: absolute */
    }
`

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
