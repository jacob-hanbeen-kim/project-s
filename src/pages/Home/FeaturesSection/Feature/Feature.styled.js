import styled from 'styled-components';

export const Conatiner = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    grid-auto-columns: minmax(auto, 1fr);
    grid-template-columns: 30vw 30vw;
    grid-template-areas: ${({ imageFirst }) => imageFirst ? `'col2 col1'` : `'col1 col2'`};
    grid-gap: 10vw;

    padding: 6vh 15vw;
`

export const TextContainer = styled.div`
    
    /* padding: 0px 20px; */
    grid-area: col1;

    & span {
        color: black;
    }
`

export const ImageContainer = styled.div`
    grid-area: col2;
    /* padding: 0px 20px; */
    
    
    & img {
        /* height: 350px; */
        /* width: 450px; */
        /* height: 100%; */
        /* width: 100%; */
    }
`