import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useCanvas } from './CanvasContext';

const Area = ({ area, xRatio, yRatio, selected }) => {

    const [transArea, setTransArea] = useState(area);
    const [coords, setCoords] = useState(area.props.coords);
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
        renderArea();
        // setCoords(calculateResponsiveCoords(coords, area.props.shape));
        // console.log('rerendering', xRatio, yRatio);
    }, [xRatio, yRatio]);

    useEffect(() => {
        renderArea();
    }, []);

    const markArea = (e) => {
        e.preventDefault(); // prevent href

        // clear any selection
        if (selected.current) {
            clearSelected(e);
        }

        // draw if not current seelection
        if (selected.current != e.target.href) {
            drawSelected(e.target.coords, e.target.shape);

            // set to current selection
            selected.current = e.target.href;
        } else {
            selected.current = null;
        }
    }


    const calculateResponsiveCoords = (prevCoords, shape) => {
        let coordinates = prevCoords.split(',');
        let newCoord = [];

        switch (shape) {
            case 'circle':
                newCoord.push(Math.floor(coordinates[0] * xRatio));
                newCoord.push(Math.floor(coordinates[1] * yRatio));
                newCoord.push(Math.floor(coordinates[2] * xRatio));
                return newCoord.join(',');
            case 'rect':
                for (let i = 0; i < coordinates.length; i++) {
                    if (i % 2 === 0) { // x
                        newCoord.push(Math.floor(coordinates[i] * xRatio));
                    } else { // y
                        newCoord.push(Math.floor(coordinates[i] * yRatio));
                    }
                }
                return newCoord.join(',');
            case 'polygon':
            default: return coords;
        }
    }

    const renderArea = () => {
        const coords = calculateResponsiveCoords(area.props.coords, area.props.shape);
        // const coords = area.props.coords;

        drawBg(coords, area.props.shape);
        setTransArea(<area
            key={area.props.href}
            href={area.props.href}
            coords={coords}
            shape={area.props.shape}
            onMouseOver={() => drawHover(coords, area.props.shape)}
            onMouseOut={clearCanvas}
            onClick={markArea}
        />);
    }

    return (
        <>
            {transArea}

        </>
    )
}

export default Area
