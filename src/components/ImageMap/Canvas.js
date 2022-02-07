import { useEffect, useState, useRef } from 'react';
import { useCanvas } from './CanvasContext';

import {
    CanvasContainer
} from './ImageMap.styled'

const Canvas = ({
    width,
    height
}) => {
    const {
        init,
        canvasHoverRef,
        canvasBgRef,
        canvasSelectedRef,
        drawBg,
        drawHover,
        drawSelected,
        clearCanvas,
        clearBg,
        clearSelected,
        resize
    } = useCanvas();

    useEffect(() => {
        init(width, height);
    }, [width, height])

    return (
        <>
            <CanvasContainer ref={canvasBgRef} />
            <CanvasContainer ref={canvasSelectedRef} />
            <CanvasContainer ref={canvasHoverRef} />
        </>
    )
}

export default Canvas;