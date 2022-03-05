import {
    BackgroundContainer,
    FixedBg
} from './Background.styled';

const FixedBackground = ({ src, opacity, maskColor }) => {

    return (
        <BackgroundContainer maskColor={maskColor}>
            <FixedBg src={src} opacity={opacity} />
        </BackgroundContainer>
    )
}

export default FixedBackground;