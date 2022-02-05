import PropTypes from 'prop-types';

import { CanvasProvider } from './CanvasContext';
import Canvas from './Canvas'


const ImageMap = ({
    image,
    // areas
}) => {

    const areas = [
        {
            href: 'chest', shape: 'rect', coords: '74,90,151,121'
        },
        {
            href: "lowerback", coords: "302,180,371,157", shape: "rect"
        },
        {
            href: "rightchest", coords: "84,75,12", shape: "circle"
        },
        {
            href: "leftchest", coords: "141,74,12", shape: "circle"
        },
        {
            href: "back", coords: "302,83,370,153", shape: "rect"
        },
        {
            href: "upperback", coords: "301,57,371,79", shape: "rect"
        },
        {
            href: "rightleg", coords: "59,376,12", shape: "circle"
        },
        {
            href: "leftleg", coords: "157,376,12", shape: "circle"
        },
        {
            href: "shoulder", coords: "552,120,508,85", shape: "rect"
        },
        {
            href: "sleeve", coords: "512,131,551,146", shape: "rect"
        },
        {
            href: "neckline", coords: "316,33,357,42", shape: "rect"
        },
    ]
    return (
        <CanvasProvider>
            <Canvas src={image} areas={areas}></Canvas>
        </CanvasProvider>
    )
}

ImageMap.propTypes = {
    // title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    areas: PropTypes.arrayOf(PropTypes.object)
}

export default ImageMap
