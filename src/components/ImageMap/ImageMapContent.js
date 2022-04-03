import React, { useEffect, useState, useRef } from 'react';
import { useCanvas } from './CanvasContext';

import {
    StyledCanvas,
    Img,
    Area
} from './ImageMap.styled'

const ImageMapContent = ({
    id,
    image,
    onClick,
    noBg,
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

    const [canvasCoords, setCanvasCoords] = useState(React.Children.map(children, (a) => a.props.coords));
    const imageRef = useRef();
    const selected = useRef(null);

    const fadeEffet = useRef(null);

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
            case 'poly':
            case 'rect':
                for (let i = 0; i < coordinates.length; i++) {
                    if (i % 2 === 0) { // x
                        newCoord.push(coordinates[i] * xRatio);
                    } else { // y
                        newCoord.push(coordinates[i] * yRatio);
                    }
                }
                return newCoord.join(',');
            // case 'polygon':
            //     console.log('polygon', newCoord);
            default: return prevCoords;
        }
    }

    const updateCoords = (init = false) => {
        let updatedCoords = [];
        React.Children.map(children, (a) => {
            const coords = calculateResponsiveCoords(a.props.coords, a.props.shape);

            if (init && !noBg) drawBg(coords, a.props.shape);
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

    const onAreaClick = (e) => {
        if (onClick) {
            onClick();
        }

        if (noBg === null || !noBg) {
            markArea(e);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const onImageClick = () => {
        if (fadeEffet.current === null) {

            React.Children.map(children, (a, i) => {
                drawHover(canvasCoords[i], a.props.shape)
            })

            setTimeout(function () {
                const fadeTarget = canvasHoverRef.current;

                fadeEffet.current = setInterval(function () {
                    if (!fadeTarget.style.opacity) {
                        fadeTarget.style.opacity = 1;
                    }
                    if (fadeTarget.style.opacity > 0) {
                        fadeTarget.style.opacity -= 0.02;
                    } else {
                        canvasHoverRef.current.style.opacity = 1;
                        clearInterval(fadeEffet.current);
                        fadeEffet.current = null;
                        clearCanvas();
                    }
                }, 20)
            }, 0.5);
        }
    }

    const onAreaHover = (e) => {
        if (fadeEffet.current !== null) {
            canvasHoverRef.current.style.opacity = 1;
            clearInterval(fadeEffet.current);
            fadeEffet.current = null;
            clearCanvas();
        }

        drawHover(e.target.coords, e.target.shape);
    }

    return (
        <>
            <StyledCanvas ref={canvasBgRef} />
            <StyledCanvas ref={canvasSelectedRef} />
            <StyledCanvas ref={canvasHoverRef} />
            <Img ref={imageRef} src={image} useMap={`#${id}`} id={id} onLoad={onLoad} onClick={onImageClick} />
            <map name={id}>
                {
                    React.Children.map(children, (a, i) => {
                        return (
                            <Area
                                href={a.props.href}
                                coords={canvasCoords[i]}
                                shape={a.props.shape}
                                onMouseOver={onAreaHover}
                                onMouseOut={clearCanvas}
                                onClick={onAreaClick}
                                key={a.props.href}
                            />
                        )
                    })
                }
            </map>
        </>
    )
}

ImageMapContent.defaultProps = {
    noBg: false
}
export default ImageMapContent;