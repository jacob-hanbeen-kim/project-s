import styled from 'styled-components';
import { Button } from '../../../styles/Button.styled'

import { FaCheckCircle } from 'react-icons/fa';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-width: 270px;
    max-width: 270px;
    min-height: 340px;
    /* max-height: 340px; */
    
    text-align: center;

    background-color: ${({ theme }) => theme.colors.surface};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};

    margin: 0px 10px;
    padding: 20px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        width: 100%;
        min-height: 100px;
        margin: 10px 0px;
    }

`

export const ContentContainer = styled.div`
    margin-bottom: 10px;
    width:100%;
`

export const Header = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    /* text-transform: uppercase; */
    color: ${({ theme }) => theme.colors.onSurface};
    /* margin: 0px; */
`
export const ImageContainer = styled.div`
    width: 180px;
`

export const BtnWrapper = styled.div`
    margin: 0px;
    margin-top: 20px;

    button {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

        &:disabled,
        &[disabled] {
            cursor: default;
            opacity: 0.5;

            &:hover {
                transform: scale(1.0);
            }
        }
    }
`

export const ButtonItems = styled(Button)`
    background-color: #ae7acc;
`

export const SaveTag = styled.div`
    
`