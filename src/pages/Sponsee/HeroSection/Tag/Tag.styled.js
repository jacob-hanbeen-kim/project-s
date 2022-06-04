import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 2.5em;
    height: 2.5em;
    border: 1px dashed black;
    border-radius: 50%;
`

export const Text = styled.p`
    font-size: 0.5em;
`

export const Image = styled.img`
    object-fit: cover;
`