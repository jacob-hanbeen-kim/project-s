import React, { useContext, useRef, createContext } from 'react';
import { useTheme } from 'styled-components';

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
    const canvasHoverRef = useRef(null);
    const contextHoverRef = useRef(null);

    const canvasBgRef = useRef(null);
    const contextBgRef = useRef(null);

    const canvasSelectedRef = useRef(null);
    const contextSelectedRef = useRef(null);

    const theme = useTheme();

    const init = () => {
        prepareCanvas(canvasBgRef, contextBgRef);
        prepareCanvas(canvasHoverRef, contextHoverRef);
        prepareCanvas(canvasSelectedRef, contextSelectedRef);
    }

    const prepareCanvas = (canvasRef, contextRef) => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const context = canvas.getContext("2d");
        context.scale(1, 1);

        context.lineCap = "round";
        context.lineWidth = 2;

        contextRef.current = context;
    }

    function drawPolygon(coOrdStr, context, isHover) {
        var mCoords = coOrdStr.split(',');
        var i, n;
        n = mCoords.length;

        context.moveTo(mCoords[0] - 0, mCoords[1] - 0);
        for (i = 2; i < n; i += 2) {
            context.lineTo(mCoords[i] - 0, mCoords[i + 1] - 0);
        }
        context.lineTo(mCoords[0] - 0, mCoords[1] - 0);

        if (!isHover) {
            context.fill();
        } else {
            context.stroke();
        }
    }

    function drawRect(coOrdStr, context, isHover) {
        var mCoords = coOrdStr.split(',');
        var top, left, bot, right;
        left = mCoords[0];
        top = mCoords[1];
        right = mCoords[2];
        bot = mCoords[3];

        // isHover ?
        //     context.strokeRect(left, top, right - left, bot - top) :
        //     context.fillRect(left, top, right - left, bot - top);

        const x = left - 0;
        const y = top - 0;
        const width = right - left;
        const height = bot - top;

        drawRoundRect(context, x, y, width, height, 5, isHover, isHover);
    }

    /**
     * Draws a rounded rectangle using the current state of the canvas.
     * If you omit the last three params, it will draw a rectangle
     * outline with a 5 pixel border radius
     * @param {CanvasRenderingContext2D} ctx
     * @param {Number} x The top left x coordinate
     * @param {Number} y The top left y coordinate
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Number} [radius = 5] The corner radius; It can also be an object 
     *                 to specify different radii for corners
     * @param {Number} [radius.tl = 0] Top left
     * @param {Number} [radius.tr = 0] Top right
     * @param {Number} [radius.br = 0] Bottom right
     * @param {Number} [radius.bl = 0] Bottom left
     * @param {Boolean} [fill = false] Whether to fill the rectangle.
     * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
     */
    function drawRoundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke === 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        if (typeof radius === 'number') {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        } else {
            var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }

        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);

        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }

    function drawCircle(coordon, context, isHover) {
        var coord = coordon.split(',');
        context.arc(coord[0], coord[1], coord[2], 0, 2 * Math.PI);
        if (!isHover) {
            context.fill();
        } else {
            context.stroke();
        }
    }

    function drawBg(coordStr, shape) {
        draw(coordStr, shape, contextBgRef.current, canvasBgRef.current, 1);
    }

    function drawSelected(coordStr, shape) {
        draw(coordStr, shape, contextSelectedRef.current, canvasSelectedRef.current, 2);
    }

    function drawHover(coordStr, shape) {
        draw(coordStr, shape, contextHoverRef.current, canvasHoverRef.current, 3);
    }

    function draw(coordStr, shape, context, canvas, drawType) {

        // calculate screen resize offset
        let coords = coordStr.split(',');
        coords = coords.map((c) => {
            return c * (canvas.width / canvas.clientWidth);
        })
        coordStr = coords.join(',');

        // determine drawtype
        if (drawType === 1) {
            context.fillStyle = theme.colors.primary + '40';
            context.strokeStyle = theme.colors.primary + '40';
        } else if (drawType === 2) {
            context.fillStyle = theme.colors.secondary + '90';
            context.strokeStyle = theme.colors.secondary + '90';
        } else {
            context.fillStyle = theme.colors.primary;
            context.strokeStyle = theme.colors.primary;
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

        context.closePath();
    }

    const clearCanvas = () => {
        const canvas = canvasHoverRef.current;
        contextHoverRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

    const clearBg = () => {
        const canvas = canvasBgRef.current;
        contextBgRef.current.clearRect(0, 0, canvas.width, canvas.height);
        // contextBgRef.current.scale(2 * xRatio, 2 * yRatio);
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
                clearSelected,
            }}
        >
            {children}
        </CanvasContext.Provider>
    )
}

export const useCanvas = () => useContext(CanvasContext);