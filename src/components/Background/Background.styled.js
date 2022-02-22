import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: inherit;
    overflow: hidden;
`

export const ImageBg = styled.div`
    background-image: ${({ src }) => src && `url(${src}), url(${process.env.PUBLIC_URL}/images/account/background.jpeg)`};
    background-size: cover;
    background-position: center center;
    opacity: ${({ opacity }) => opacity ? opacity : '0.4'};
    height: inherit;
    filter: blur(1px);
    mask: linear-gradient(#fff, transparent);
`

export const VideoBg = styled.video`
    width: 100%;
    height: inherit;
    object-fit: cover;
    background: #232a34;
`