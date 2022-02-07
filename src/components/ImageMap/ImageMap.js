import PropTypes from 'prop-types';

import React, { useEffect, useState, useRef } from 'react';

import { CanvasProvider } from './CanvasContext';
import Canvas from './Canvas'
import Area from './Area';


const ImageMap = ({
    image,
    children
}) => {

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const [xRatio, setXRatio] = useState(0);
    const [yRatio, setYRatio] = useState(0);

    const imageRef = useRef();

    const calcImageRatio = () => {
        setXRatio(imageWidth / imageRef.current.naturalWidth);
        setYRatio(imageHeight / imageRef.current.naturalHeight);
    }

    const handleResize = () => {
        // clearBg();
        // resize(canvasBgRef.current, e.target.width, e.target.height);
        // renderArea();
        setImageWidth(imageRef.current.width);
        setImageHeight(imageRef.current.width);
    }

    useEffect(() => {
        calcImageRatio();
    }, [imageWidth, imageHeight]);


    useEffect(() => {
        // onMount
        window.addEventListener('resize', handleResize)

        // cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <CanvasProvider>
            <img ref={imageRef} src={image} useMap="#image-map" id="uniform" />

            <Canvas />
            <map name="image-map">
                {
                    React.Children.map(children, (area) => {
                        return <Area area={area} xRatio={xRatio} yRatio={yRatio} />
                    })
                }
            </map>
        </CanvasProvider>
    )
}

ImageMap.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ImageMap
