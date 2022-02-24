import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    /* flex-direction: ${props => props.invert ? 'row-reverse' : 'column'}; */
    flex-direction: column;
    
    padding: 10vw;

    background-color: ${props => props.invert ? props.theme.colors.surface : props.theme.colors.background};

    & h2 {
        @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
            font-size: ${({ theme }) => theme.fontSizes.use('display3')};
            line-height: ${({ theme }) => theme.lineHeights.use('display3')};
        }

        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
            font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
            line-height: ${({ theme }) => theme.lineHeights.use('heading1')};
        }
    }

    & h1 {
        
        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
            font-size: ${({ theme }) => theme.fontSizes.use('heading2')};
            line-height: ${({ theme }) => theme.lineHeights.use('heading2')};
        }
    }
`

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [r, g, b].join();
}

const getGradient = (color, layout) => {
    color = hexToRgb(color.substring(1));

    let deg = '90deg';

    if (layout === 'center') deg = '180deg'
    else if (layout === 'right') deg = '-90deg';

    return `linear-gradient(${deg}, rgba(${color},1) 0%, rgba(${color},0.8) 65%, rgba(${color},0) 100%)`;
    // return `linear-gradient(180deg, rgba(${color},1) 0%, rgba(${color},0.8) 65%, rgba(${color},0) 100%)`;
}

export const TextContainer = styled.div`
    /* flex: 1; */

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${(props) => {
        if (props.layout === 'center') return 'center'
        else if (props.layout === 'right') return 'flex-end'
        else return 'flex-start'
    }};

    margin: 0px;
    padding: 0px;

    max-width: 100%;

    white-space: pre-wrap;
    word-break: keep-all;
    word-wrap: break-word;
    
    transform: translate3d(0px, 90px, 0px);
    animation: 0.5s ease-in-out 0s 1 normal forwards running animation-1x3fevv;    

    z-index: 2;
`

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: inherit;

    margin-bottom: 30px;
    max-width: 50%;

    text-align: ${(props) => {
        if (props.layout === 'center') return 'center'
        else if (props.layout === 'right') return 'right'
        else return 'left'
    }};

    background: ${props => props.invert ? getGradient(props.theme.colors.surface, props.layout) : getGradient(props.theme.colors.background, props.layout)};
`

export const ImageContainer = styled.div`
    /* flex: 3; */
    z-index: 1;
`

export const ImgWrap = styled.div`
    display: flex;
    justify-content: ${(props) => {
        if (props.layout === 'center') return 'center'
        else if (props.layout === 'right') return 'flex-start'
        else return 'flex-end'
    }};

    padding: 30px;
    margin-bottom: 30px;
`

export const Img = styled.div`
    width: 70vw;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`