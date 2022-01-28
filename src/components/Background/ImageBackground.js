import {
    BackgroundContainer,
    ImageBg
} from './Background.styled';

const ImageBackground = ({ src }) => {
    return (
        <BackgroundContainer>
            <ImageBg src={src} />
        </BackgroundContainer>
    )
}

export default ImageBackground;