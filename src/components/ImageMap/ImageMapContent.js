import { useEffect, useState, useRef } from 'react';
import { useCanvas } from './CanvasContext';

import {
    StyledCanvas
} from './ImageMap.styled'

const ImageMapContent = ({
    image,
    children
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
    } = useCanvas();

    const [canvasCoords, setCanvasCoords] = useState(children.map((a) => a.props.coords));
    const imageRef = useRef();
    const selected = useRef(null);

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
        let orgW = imageRef.current.naturalWidth;
        let orgH = imageRef.current.naturalHeight;

        let displayW = imageRef.current.width;
        let displayH = imageRef.current.height;

        let xRatio = displayW / orgW;
        let yRatio = displayH / orgH;

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
                        newCoord.push(coordinates[i] * xRatio);
                    } else { // y
                        newCoord.push(coordinates[i] * yRatio);
                    }
                }
                return newCoord.join(',');
            case 'polygon':
            default: return prevCoords;
        }
    }

    const updateCoords = (init = false) => {
        let updatedCoords = [];
        children.map((a) => {
            const coords = calculateResponsiveCoords(a.props.coords, a.props.shape);

            if (init) drawBg(coords, a.props.shape);
            updatedCoords.push(coords);
        })

        setCanvasCoords(updatedCoords);
    }

    const onLoad = () => {
        init();
        updateCoords(true);
    }

    function handleResize() {
        updateCoords();
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <StyledCanvas ref={canvasBgRef} />
            <StyledCanvas ref={canvasSelectedRef} />
            <StyledCanvas ref={canvasHoverRef} />
            <img ref={imageRef} src={image} useMap="#image-map" id="uniform" onLoad={onLoad} />
            <map name="image-map">
                {
                    children.map((a, i) => {
                        return (
                            <area
                                href={a.props.href}
                                coords={canvasCoords[i]}
                                shape={a.props.shape}
                                onMouseOver={(e) => { drawHover(e.target.coords, e.target.shape) }}
                                onMouseOut={clearCanvas}
                                onClick={markArea}
                                key={a.props.href}
                            />
                        )
                    })
                }
            </map>
        </>
    )
}

export default ImageMapContent;