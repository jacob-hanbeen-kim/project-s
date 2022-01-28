import {
    BackgroundContainer,
    VideoBg
} from './Background.styled';

const VideoBackground = ({ src }) => {
    return (
        <BackgroundContainer>
            <VideoBg autoPlay logo muted src={src} type='video/mp4' />
        </BackgroundContainer>
    )
}

export default VideoBackground;