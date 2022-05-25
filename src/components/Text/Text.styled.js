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

    /* font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; */

    & > * {
        margin: 10px 0px;
        padding: 0px;

        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
            margin: 5px 0px;
        }
    }

    /* & span {
        font-size: 1.5em;
        line-height: 1.2em;
        color: ${({ accentColor }) => accentColor ? accentColor : 'inherit'};
    } */
`


export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.use('h1')};
    line-height: ${({ theme }) => theme.lineHeights.use('h1')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        
    }
`

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('h2')};
    line-height: ${({ theme }) => theme.lineHeights.use('h2')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`

export const H3 = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.use('h3')};
    line-height: ${({ theme }) => theme.lineHeights.use('h3')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('bolder')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onBackground)};
`

export const H4 = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.use('h4')};
    line-height: ${({ theme }) => theme.lineHeights.use('h4')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('bolder')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onBackground)};
`

export const H5 = styled.h5`
    font-size: ${({ theme }) => theme.fontSizes.use('h5')};
    line-height: ${({ theme }) => theme.lineHeights.use('h5')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('standard')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onBackground)};
`

export const H6 = styled.h6`
    font-size: ${({ theme }) => theme.fontSizes.use('h6')};
    line-height: ${({ theme }) => theme.lineHeights.use('h6')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('standard')};

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
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('boldest')};
    text-transform: capitalize;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Caption = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('h6')};
    line-height: ${({ theme }) => theme.lineHeights.use('h6')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontMuted)};
`
export const Overline = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('h6')};
    line-height: ${({ theme }) => theme.lineHeights.use('h6')};
    text-transform: uppercase;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.use('h5')};
    line-height: ${({ theme }) => theme.lineHeights.use('h5')};
    font-weight: ${({ theme, fontWeight }) => fontWeight ? fontWeight : theme.fontWeights.use('boldest')};

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`