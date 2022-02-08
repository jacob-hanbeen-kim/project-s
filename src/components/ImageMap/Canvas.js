import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useCanvas } from './CanvasContext';

import {
    StyledCanvas
} from './ImageMap.styled'

const Canvas = ({
    width,
    height,
    xRatio,
    yRatio
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
        // initialize canvas on mount
        init(width, height);
    }, [])

    // useEffect(() => {
    //     // init(width, height);
    //     // console.log('here');
    //     // clearBg();
    //     // resize(xRatio, yRatio);
    //     console.log('resize');
    //     // resize(canvasHoverRef.current, width, height);
    //     // resize(canvasBgRef.current, width, height);
    //     // resize(canvasSelectedRef.current, width, height);
    //     // clearBg();
    //     // resize(canvasBgRef.current, e.target.width, e.target.height);
    //     // renderArea();

    //     // return () => clearBg();
    // }, [xRatio, yRatio])

    return (
        <>
            <StyledCanvas ref={canvasBgRef} />
            <StyledCanvas ref={canvasSelectedRef} />
            <StyledCanvas ref={canvasHoverRef} />
        </>
    )
}

export default Canvas;