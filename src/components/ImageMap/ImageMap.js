import PropTypes from 'prop-types';

import React, { useEffect, useState, useRef } from 'react';

import { CanvasProvider } from './CanvasContext';
import Canvas from './Canvas'
import Area from './Area';


const ImageMap = ({
    image,
    children
}) => {

    const [xRatio, setXRatio] = useState(0);
    const [yRatio, setYRatio] = useState(0);

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const imageRef = useRef();

    const selected = useRef(null);

    const calcImageRatio = () => {
        setXRatio(imageWidth / imageRef.current.naturalWidth);
        setYRatio(imageHeight / imageRef.current.naturalHeight);
    }

    const handleResize = () => {
        // clearBg();
        // resize(canvasBgRef.current, e.target.width, e.target.height);
        // renderArea();
        setImageWidth(imageRef.current.width);
        setImageHeight(imageRef.current.height);
        console.log("Resize", imageRef.current.width, imageRef.current.height);
    }

    useEffect(() => {
        // onMount
        window.addEventListener('resize', handleResize);

        // cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        calcImageRatio();
        console.log('in image display', imageRef.current.width, imageRef.current.height);
        console.log('in image natural', imageRef.current.naturalWidth, imageRef.current.naturalHeight);
        console.log('in image ratio', xRatio, yRatio);
    }, [imageWidth, imageHeight]);

    return (
        <CanvasProvider>
            <Canvas width={imageWidth} height={imageHeight} />
            <img ref={imageRef} src={image} useMap="#image-map" id="uniform" onLoad={handleResize} />
            <map name="image-map">
                {
                    React.Children.map(children, (area) => {
                        return <Area area={area} xRatio={xRatio} yRatio={yRatio} selected={selected} />
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
