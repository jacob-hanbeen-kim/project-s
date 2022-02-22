import {
    BackgroundContainer,
    ImageBg
} from './Background.styled';

const ImageBackground = ({ src, opacity }) => {

    return (
        <BackgroundContainer>
            <ImageBg src={src} opacity={opacity} />
        </BackgroundContainer>
    )
}

export default ImageBackground;