import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
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

    background-color: ${({ theme }) => theme.colors.surface};
`

export const ImageWrapper = styled.div`
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;

    height: 15vw;
    width: 15vw;
`