import styled from 'styled-components'

export const ImageMapContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: inherit;
`
export const CanvasContainer = styled.div`
    width: 100px;
    height: 100px;
`

export const StyledCanvas = styled.canvas`
    pointer-events: none;       /* make the canvas transparent to the mouse - needed since canvas is position infront of image */

    width:100%;
    height:100%;

    position:absolute;

    /* background-color: rgba(255,0,0,.1); */
    background-color: ${({ theme }) => theme.colors.background + '12'};
`

export const Img = styled.img`
    border-radius: inherit;
`