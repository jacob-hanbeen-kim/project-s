import { useEffect, useState, useRef } from 'react'
import { useCanvas } from './CanvasContext';

const Area = ({ area, xRatio, yRatio, selected }) => {

    const [transArea, setTransArea] = useState(area)
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
        console.log('rerendered', xRatio, yRatio);
        renderArea();
    }, [xRatio, yRatio]);

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


    const calculateResponsiveCoords = (coords, shape) => {
        let coordinates = coords.split(',');
        let newCoord = [];

        switch (shape) {
            case 'circle':
                newCoord.push(coordinates[0] * xRatio);
                newCoord.push(coordinates[1] * yRatio);
                newCoord.push(coordinates[2] * xRatio);
                return newCoord.join(',');
            case 'rect':
                for (let i = 0; i < coordinates.length; i++) {
                    if (i % 2 === 0) { // x
                        newCoord.push(coordinates[i] * xRatio);
                    } else { // y
                        newCoord.push(coordinates[i] * yRatio);
                    }
                }
                return newCoord.join(',');
            case 'polygon':
            default: return coords;
        }
    }

    const renderArea = () => {
        const coords = calculateResponsiveCoords(area.props.coords, area.props.shape);

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
