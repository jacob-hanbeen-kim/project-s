import {
    BackgroundContainer,
    FixedBg
} from './Background.styled';

const FixedBackground = ({ src, opacity }) => {

    return (
        <BackgroundContainer>
            <FixedBg src={src} opacity={opacity} />
        </BackgroundContainer>
    )
}

export default FixedBackground;