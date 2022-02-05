import { useCanvas } from './CanvasContext';
import { useEffect, useState, useRef } from 'react';
import {
    CanvasContainer
} from './ImageMap.styled'

const Canvas = ({
    src,
    areas
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
        clearSelected
    } = useCanvas();

    const [areaElements, setAreaElements] = useState(null);
    const selected = useRef(null);
    const imageSize = useRef(null);

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

    const calculateResponsiveCoords = (image, coords, shape) => {
        let orgW = image.naturalWidth;
        let orgH = image.naturalHeight;

        let displayW = image.width;
        let displayH = image.height;

        let xRatio = displayW / orgW;
        let yRatio = displayH / orgH;

        let coordinates = coords.split(',');
        let newCoord = [];

        if (shape === 'circle') {
            newCoord.push(coordinates[0] * xRatio);
            newCoord.push(coordinates[1] * yRatio);
            newCoord.push(coordinates[2] * xRatio);
        } else if (shape === 'rect') {
            for (let i = 0; i < coordinates.length; i++) {
                if (i % 2 === 0) { // x
                    newCoord.push(coordinates[i] * xRatio);
                } else { // y
                    newCoord.push(coordinates[i] * yRatio);
                }
            }
        } else {

        }

        return newCoord.join(',');
    }


    const renderArea = (e) => {
        if (!e) {
            e = imageSize.current;
        } else {
            imageSize.current = e;
        }

        let createdAreas = [];
        areas.map((a) => {
            const coords = calculateResponsiveCoords(e.target, a.coords, a.shape);

            drawBg(coords, a.shape);
            createdAreas.push(<area
                href={a.href}
                coords={coords}
                shape={a.shape}
                onMouseOver={() => drawHover(coords, a.shape)}
                onMouseOut={clearCanvas}
                onClick={markArea}
                key={a.href}
            />);
        })

        setAreaElements(createdAreas);
    }

    const onLoad = (e) => {
        init(e);
        renderArea(e);
    }

    function handleResize() {
        clearBg();
        renderArea();
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <CanvasContainer ref={canvasBgRef} />
            <CanvasContainer ref={canvasSelectedRef} />
            <CanvasContainer ref={canvasHoverRef} />
            <img src={src} useMap="#image-map" id="uniform" onLoad={onLoad} />
            <map name="image-map">
                {
                    areaElements && areaElements.map((area) => {
                        return area;
                    })
                }
            </map>
        </>
    )
}

export default Canvas;