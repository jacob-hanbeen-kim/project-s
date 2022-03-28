import styled from 'styled-components'

export const Container = styled.div`
    height: 80vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    padding: 7vh 7vw;

    z-index: 1;
`

export const ContentWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`

export const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 30px 0px;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        margin-top: 20px;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 10px 0px;
`