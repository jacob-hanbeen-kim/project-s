import styled from 'styled-components'

const getColor = (props) => {
    if (props.invert) {
        return props.theme.colors.onInvert;
    } else if (props.color) {
        return props.color;
    } else {
        return props.theme.colors.onPrimary
    }
}

const getBgColor = (props) => {
    if (props.invert) {
        return props.theme.colors.invert;
    } else if (props.bgColor) {
        return props.bgColor;
    } else {
        return props.theme.colors.primary
    }
}

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${props => getBgColor(props)};
    
    padding: ${({ padding }) => padding ? padding : '12px 30px'};
    cursor: pointer;
    
    font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSizes.use('standard')};
    font-weight: ${({ theme }) => theme.fontWeights.use('bolder')};

    background-color: ${props => getBgColor(props)};
    color: ${props => getColor(props)};

    ${props => props.height && `height: ${props.height}`};
    ${props => props.width && `width: ${props.width}`};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        font-size: ${props => props.big ? props.theme.fontSizes.use('standard') : props.theme.fontSizes.use('h5')};
    }
`