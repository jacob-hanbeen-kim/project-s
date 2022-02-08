import PropTypes from 'prop-types';

import React, { useEffect, useState, useRef } from 'react';

import { CanvasProvider } from './CanvasContext';
import Canvas from './Canvas'
import Area from './Area';

import debounce from '../../debounce';

import {
    ImageMapContainer
} from './ImageMap.styled'


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
        // setXRatio(imageWidth / imageRef.current.naturalWidth);
        // setYRatio(imageHeight / imageRef.current.naturalHeight);

        setXRatio(imageRef.current.width / imageRef.current.naturalWidth);
        setYRatio(imageRef.current.height / imageRef.current.naturalHeight);

        console.log(xRatio, yRatio);
    }

    const handleResize = () => {
        setImageWidth(imageRef.current.width);
        setImageHeight(imageRef.current.height);
    }

    useEffect(() => {
        // onMount
        window.addEventListener('resize', handleResize);
        // setImageWidth(imageRef.current.width);
        // setImageHeight(imageRef.current.height);
        // cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        calcImageRatio();
    }, [imageWidth, imageHeight]);

    return (
        <CanvasProvider>
            <ImageMapContainer>
                {/* <CanvasContainer> */}
                <Canvas width={imageWidth} height={imageHeight} xRatio={xRatio} yRatio={yRatio} />
                {/* </CanvasContainer> */}
                <img ref={imageRef} src={image} useMap="#image-map" id="uniform" onLoad={calcImageRatio} />
                <map name="image-map">
                    {
                        React.Children.map(children, (area) => {
                            return <Area area={area} xRatio={xRatio} yRatio={yRatio} selected={selected} />
                        })
                    }
                </map>
            </ImageMapContainer>
        </CanvasProvider>
    )
}

ImageMap.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ImageMap


/*
render parent
render a
render b

layout cleanup a
layout cleanup b
layout cleanup parent

layout effect a
layout effect b
layout effect parent

effect cleanup a
effect  a

effect cleanup b
effect  b

effect cleanup parent
effect  parent
*/