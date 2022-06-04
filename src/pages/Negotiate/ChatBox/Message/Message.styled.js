import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    flex-direction: ${({ isSender }) => isSender ? 'row-reverse' : 'row'};

    & > * {
        margin: 10px;
    }
`

export const TextContainer = styled.div`
    max-width: 500px;
    /* margin-bottom: 12px; */
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    text-align: ${({ isSender }) => isSender ? 'left' : 'right'};;
    color: ${({ isSender, theme }) => isSender ? theme.colors.onPrimary : theme.colors.onSurface};
    background: ${props => props.isSender ? props.theme.colors.primary : 'transparent'};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    align-self: ${({ isSender }) => !isSender && 'flex-end'};

    ${({ isSender }) => isSender && `
        margin-left: 60px;
    `};;

    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    margin: 0px;
    padding: 0px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    * {
        margin: 10px 5px;
        margin-bottom: 0px;
    }
`