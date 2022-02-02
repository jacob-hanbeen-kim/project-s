import styled from 'styled-components';
import { Flex } from '../../styles/Flex.styled';
import { Button } from '../../styles/Button.styled';

export const LoginContainer = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    margin-top: 24px;
    width: 500px;
    
    * {
        text-align: left;
    }

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 72px;

    width: 500px;
`

export const WalletList = styled.ul`
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.colors.surface};

    margin: 0px;

    padding-left: 0px;
    list-style-type: none;

    li:not(:last-child){        
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.border};
    }

    li:first-child > button {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    li:not(:last-child):not(:first-child) > button {
        border-radius: 0px;
    }

    li:last-child > button {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

`

export const Wallet = styled(Button)`
    width: 100%;
    border: none;
    overflow: hidden;

    padding: 16px;

    display: inline-flex;
    align-items: center;
    text-align: left;
    
    background: inherit;
    color: ${({ theme }) => theme.colors.onSurface};

    font-weight: 600;
    font-size: 100%;
    font-family: inherit;

    appearance: button;
    cursor: pointer;

    &:disabled,
    &[disabled] {
        cursor: default;
        opacity: 0.5;
        &:hover {
            transform: scale(1.0);
        }
    }
`

export const WalletName = styled.div`
    align-self: stretch;
    flex: 1 1 auto;
    flex-flow: column;
    justify-content: center;
    margin-right: 16px;
    font-size: 16px;
    align-items: flex-start;
    display: flex;
`

export const WalletLogo = styled.div`
    margin-right: 16px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;

    & > img {
        object-fit: contain;
        width: 24px;
        height: 24px;
    }
`