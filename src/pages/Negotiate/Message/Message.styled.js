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
    text-align: center;

    color: ${({ isSender }) => isSender ? 'white' : 'black'};
    background: ${props => props.isSender ? props.theme.colors.primary : '#e5e5ea'};
    align-self: ${({ isSender }) => !isSender && 'flex-end'};

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