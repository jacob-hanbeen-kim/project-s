import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
    padding: 50px;

    /* z-index: 1; */
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%), linear-gradient(180deg, rgba(255,235,187,0.5) 20%, rgba(255,253,248,1) 100%);
    /* #FFEBBB; rgba(255,235,187,1)*/
    /* #FFFDF8; rgba(255,253,248,1)*/

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        flex-direction: column-reverse;
    }
`

export const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: left;

    padding: 0px 50px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        padding: 0px;
        text-align: center;
    }
`

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0px 50px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        display: none;
        /* padding: 0px;
        margin: 0px;
        width: 20vw;
        flex: 0; */
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.center ? 'center' : 'left'};
`

export const CallToAction = styled.div`
    margin-top: 50px;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        /* display: none; */
        margin-top: 20px;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`