import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.surface};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 50px 10px;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
`

export const ImageContainer = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;

    height: 15vw;
    width: 15vw;
`