import styled from 'styled-components';

const useColor = (invert, customColor, invertColor, defaultColor) => {
    if (customColor) {
        return customColor;
    } else if (invert) {
        return invertColor;
    } else {
        return defaultColor
    }
}

export const TextWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    outline: none;
    border: none;

    text-transform: ${props => props.textTransform};
    text-align: ${props => props.textAlign};

    font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;

    & > * {
        margin: 10px;
        padding: 0px;

        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
            margin: 5px;
        }
    }

    & span {
        font-size: 1.5em;
        line-height: 1.2em;
        color: ${({ accentColor }) => accentColor ? accentColor : 'inherit'};
    }
`

export const Display1 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display1')};
    line-height: ${({ theme }) => theme.lineHeights.use('display1')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    
    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};

    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        font-size: ${({ theme }) => theme.fontSizes.use('display2')};
        line-height: ${({ theme }) => theme.lineHeights.use('display2')};
    } */
`

export const Display2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display2')};
    line-height: ${({ theme }) => theme.lineHeights.use('display2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
    
    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        font-size: ${({ theme }) => theme.fontSizes.use('display3')};
        line-height: ${({ theme }) => theme.lineHeights.use('display3')};
    } */
`

export const Display3 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display3')};
    line-height: ${({ theme }) => theme.lineHeights.use('display3')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
/* 
    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
        line-height: ${({ theme }) => theme.lineHeights.use('heading1')};
    } */
`


export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
    line-height: ${({ theme }) => theme.lineHeights.use('heading1')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        
    }
`

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('heading2')};
    line-height: ${({ theme }) => theme.lineHeights.use('heading2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('heading2')};
    line-height: ${({ theme }) => theme.lineHeights.use('heading2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('bolder')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onBackground)};
`

export const Body = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    line-height: ${({ theme }) => theme.lineHeights.use('standard')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontMuted)};
    opacity: 0.75;
`

export const Button = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    line-height: ${({ theme }) => theme.lineHeights.use('standard')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    text-transform: capitalize;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Caption = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('smallest')};
    line-height: ${({ theme }) => theme.lineHeights.use('smallest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontMuted)};
`
export const Overline = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('smallest')};
    line-height: ${({ theme }) => theme.lineHeights.use('smallest')};
    text-transform: uppercase;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.use('smaller')};
    line-height: ${({ theme }) => theme.lineHeights.use('smaller')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`