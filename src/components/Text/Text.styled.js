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

    text-transform: ${props => props.transform};

    font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;

    & > * {
        margin: 10px;
        padding: 0px;

        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
            margin: 5px;
        }
    }
`

export const Display1 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display1')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 4.75rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        font-size: ${({ theme }) => theme.fontSizes.use('display3')};
    }
`

export const Display2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 4rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`

export const Display3 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('display3')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 3rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`


export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 1.75rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.use('heading2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 1.5rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontDefault)};
`

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('heading2')};
    font-weight: ${({ theme }) => theme.fontWeights.use('bolder')};
    line-height: 1.5rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onBackground)};
`

export const Body = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    line-height: 1.25rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.fontMuted)};
    opacity: 0.75;
`

export const Button = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 1.25rem;
    text-transform: capitalize;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Caption = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('smallest')};
    line-height: 1rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Overline = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.use('smallest')};
    line-height: 1rem;
    text-transform: uppercase;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`
export const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.use('smaller')};
    font-weight: ${({ theme }) => theme.fontWeights.use('boldest')};
    line-height: 1.25rem;

    color: ${props => useColor(props.invert, props.color, props.theme.colors.onInvert, props.theme.colors.onPrimary)};
`