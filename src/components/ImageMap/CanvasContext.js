import React, { useContext, useRef, createContext } from 'react';

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
    const canvasHoverRef = useRef(null);
    const contextHoverRef = useRef(null);

    const canvasBgRef = useRef(null);
    const contextBgRef = useRef(null);

    const canvasSelectedRef = useRef(null);
    const contextSelectedRef = useRef(null);

    const init = () => {
        prepareCanvas(canvasHoverRef, contextHoverRef);
        prepareCanvas(canvasBgRef, contextBgRef);
        prepareCanvas(canvasSelectedRef, contextSelectedRef);
    }

    const prepareCanvas = (canvasRef, contextRef) => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.scale(2, 2);

        context.lineCap = "round";
        context.lineWidth = 2;

        contextRef.current = context;
    }

    function drawPolygon(coOrdStr, context) {
        var mCoords = coOrdStr.split(',');
        var i, n;
        n = mCoords.length;

        context.moveTo(mCoords[0], mCoords[1]);
        for (i = 2; i < n; i += 2) {
            context.lineTo(mCoords[i], mCoords[i + 1]);
        }
        context.lineTo(mCoords[0], mCoords[1]);
    }

    function drawRect(coOrdStr, context, isHover) {
        var mCoords = coOrdStr.split(',');
        var top, left, bot, right;
        left = mCoords[0];
        top = mCoords[1];
        right = mCoords[2];
        bot = mCoords[3];

        isHover ?
            context.strokeRect(left, top, right - left, bot - top) :
            context.fillRect(left, top, right - left, bot - top);
    }

    function drawCircle(coordon, context, isHover) {
        var coord = coordon.split(',');
        context.arc(coord[0], coord[1], coord[2], 0, 2 * Math.PI);
        !isHover && context.fill();
    }

    function drawBg(coordStr, shape) {
        draw(coordStr, shape, contextBgRef.current, 1);
    }

    function drawSelected(coordStr, shape) {
        draw(coordStr, shape, contextSelectedRef.current, 2);
    }

    function drawHover(coordStr, shape) {
        draw(coordStr, shape, contextHoverRef.current, 3);
    }

    function draw(coordStr, shape, context, drawType) {
        if (drawType === 1) {
            context.fillStyle = '#535dcaab';
            context.strokeStyle = '#535dcaab';
        } else if (drawType === 2) {
            context.fillStyle = '#000';
            context.strokeStyle = '#000';
        } else {
            context.fillStyle = 'red';
            context.strokeStyle = 'red';
        }

        let isHover = drawType === 3;

        context.beginPath();

        if (shape === 'rect') {
            drawRect(coordStr, context, isHover);
        } else if (shape === 'circle') {
            drawCircle(coordStr, context, isHover);
        } else {
            drawPolygon(coordStr, context, isHover);
        }

        context.stroke();
        context.closePath();
    }

    const clearCanvas = () => {
        const canvas = canvasHoverRef.current;
        contextHoverRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

    const clearBg = () => {
        const canvas = canvasBgRef.current;
        contextBgRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

    const clearSelected = () => {
        const canvas = canvasSelectedRef.current;
        contextSelectedRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
        <CanvasContext.Provider
            value={{
                canvasHoverRef,
                contextHoverRef,
                canvasBgRef,
                contextBgRef,
                canvasSelectedRef,
                contextSelectedRef,
                init,
                draw,
                drawBg,
                drawHover,
                drawSelected,
                clearCanvas,
                clearBg,
                clearSelected
            }}
        >
            {children}
        </CanvasContext.Provider>
    )
}

export const useCanvas = () => useContext(CanvasContext);