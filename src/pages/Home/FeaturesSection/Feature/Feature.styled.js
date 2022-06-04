import styled from 'styled-components';

export const Conatiner = styled.div`
    width: 100vw;
    height: 90vh;
`

export const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    grid-auto-columns: minmax(auto, 1fr);
    grid-template-columns: ${({ imageFirst }) => imageFirst ? `50vw 30vw` : `30vw 50vw;`};
    grid-template-areas: ${({ imageFirst }) => imageFirst ? `'col2 col1'` : `'col1 col2'`};
    grid-gap: 5vw;

    width: 100%;
    height: 100%;

    /* padding: 6vh 15vw; */
    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        grid-gap: 0;
        grid-template-columns: 40vw 40vw;
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const TextContainer = styled.div`
    
    /* padding: 0px 20px; */
    grid-area: col1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;

    overflow: auto;

    & span {
        color: black;
    }
`

export const ImageContainer = styled.div`
    grid-area: col2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    & img {
        height: 100%;
        max-height: 70%;
    }
`