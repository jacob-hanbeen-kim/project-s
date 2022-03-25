import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 80vh;
`
export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 100px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}){
        margin-left:120px;
        margin-right:120px;
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
        margin-left: 30px;
        margin-right: 30px;

        & * {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        margin-left: 0px;
        margin-right: 0px;

        & * {
            font-size: 1.4rem;
        }
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 95vw;
    overflow-x: auto;

    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){

        & > div {
            margin: 40px 0px;
        }
    } */
`