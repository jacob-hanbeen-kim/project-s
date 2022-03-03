import styled from 'styled-components'

export const Container = styled.div`
    padding: 10vw;
    height: 80vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.surface};

    .transition-enter {
        opacity: 0;
    }

    .transition-enter-active {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }

    .transition-exit {
        opacity: 1;
    }

    .transition-exit-active {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        flex-direction: column;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 2;
    align-items: flex-start;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        flex: 1;
    }
`

export const TextWrap = styled.div`
    margin-bottom: 30px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        margin-bottom: 10px;
    }
`

export const ImageContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        flex: 3;
        align-items: flex-start;
        margin-top: 20px;
    }
`

export const ImgWrap = styled.div`
    padding-left:30px;
`

export const Img = styled.div`
    position: relative;
    border-radius: 16px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15), -20px 20px rgba(214, 233, 255, 1), -20px 25px 10px rgba(0, 0, 0, 0.15);
`

export const DottedLine = styled.hr`
    height: 1px;
    width: 100vw;
    background-image: linear-gradient(90deg, #000, #000 75%, transparent 75%, transparent 100%);
    background-size: 10px 1px;
    border: none;
`