import PropTypes from 'prop-types';

import { CanvasProvider } from './CanvasContext';
import ImageMapContent from './ImageMapContent';

import {
    ImageMapContainer
} from './ImageMap.styled'


const ImageMap = ({
    id,
    image,
    children,
    onClick,
    noBg
}) => {
    return (
        <CanvasProvider>
            <ImageMapContainer>
                <ImageMapContent id={id} image={image} onClick={onClick} noBg={noBg}>{children}</ImageMapContent>
            </ImageMapContainer>
        </CanvasProvider>
    )
}

ImageMap.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default ImageMap