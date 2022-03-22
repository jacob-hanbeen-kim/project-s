import {
    BackgroundContainer,
    ImageBg
} from './Background.styled';

const ImageBackground = ({
    src,
    backgroundColor,
    offset,
    opacity,
    noMask,
    blur,
    bgPositionX,
    bgPositionY
}) => {

    return (
        <BackgroundContainer backgroundColor={backgroundColor} offset={offset}>
            <ImageBg src={src} opacity={opacity} blur={blur} noMask={noMask} bgPositionX={bgPositionX} bgPositionY={bgPositionY} />
        </BackgroundContainer>
    )
}

export default ImageBackground;