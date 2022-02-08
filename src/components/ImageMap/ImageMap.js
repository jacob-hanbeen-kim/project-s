import PropTypes from 'prop-types';

import { CanvasProvider } from './CanvasContext';
import ImageMapContent from './ImageMapContent';

import {
    ImageMapContainer
} from './ImageMap.styled'


const ImageMap = ({
    image,
    children
}) => {
    return (
        <CanvasProvider>
            <ImageMapContainer>
                <ImageMapContent image={image}>{children}</ImageMapContent>
            </ImageMapContainer>
        </CanvasProvider>
    )
}

ImageMap.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ImageMap