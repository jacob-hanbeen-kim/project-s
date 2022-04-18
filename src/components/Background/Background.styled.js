import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    position: absolute;
    top: ${({ offset }) => offset ? offset : '0'};
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: inherit;
    overflow: hidden;

    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'transparent'};
`

export const ImageBg = styled.div`
    background-image: ${({ src }) => src && `url(${src})`};
    background-size: cover;
    background-position-x: ${({ bgPositionX }) => bgPositionX ? bgPositionX : 'center'};
    background-position-y: ${({ bgPositionY }) => bgPositionY ? bgPositionY : 'center'};;
    opacity: ${({ opacity }) => opacity ? opacity : '0.4'};
    height: inherit;
    filter: ${({ blur }) => blur ? 'blur(' + blur + ')' : 'blur(1px)'};
    ${({ noMask }) => !noMask || noMask === null && `
        mask: linear-gradient(#fff, transparent);
    `}
`

export const FixedBg = styled(ImageBg)`
    background-repeat: no-repeat;
    background-attachment: fixed;
`

export const VideoBg = styled.video`
    width: 100%;
    height: inherit;
    object-fit: cover;
    background: #232a34;
`