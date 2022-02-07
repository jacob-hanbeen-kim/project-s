import styled from 'styled-components'

export const CanvasContainer = styled.canvas`
    pointer-events: none;       /* make the canvas transparent to the mouse - needed since canvas is position infront of image */
    position: absolute;

    display: block;
    overflow: hidden;
`