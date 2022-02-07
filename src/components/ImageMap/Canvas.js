import { useEffect, useState, useRef } from 'react';
import { useCanvas } from './CanvasContext';

import {
    CanvasContainer
} from './ImageMap.styled'

const Canvas = ({
}) => {
    const {
        // init,
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

    const selected = useRef(null);

    // const markArea = (e) => {
    //     e.preventDefault(); // prevent href

    //     // clear any selection
    //     if (selected.current) {
    //         clearSelected(e);
    //     }

    //     // draw if not current seelection
    //     if (selected.current != e.target.href) {
    //         drawSelected(e.target.coords, e.target.shape);

    //         // set to current selection
    //         selected.current = e.target.href;
    //     } else {
    //         selected.current = null;
    //     }
    // }


    // const onLoad = (e) => {
    //     init(e);
    //     renderArea(e);
    // }

    return (
        <>
            <CanvasContainer ref={canvasBgRef} />
            <CanvasContainer ref={canvasSelectedRef} />
            <CanvasContainer ref={canvasHoverRef} />
        </>
    )
}

export default Canvas;