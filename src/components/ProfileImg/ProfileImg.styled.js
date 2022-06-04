import styled from 'styled-components';

const getFontSize = (props) => {
    let fontSize = '1.5em';
    if (props.size) {
        fontSize = props.size;
    }

    if (props.maxSize) {
        fontSize = `max(${props.maxSize}, ${fontSize})`;
    }

    return fontSize;
}
export const Icon = styled.div`
    font-size: ${(props) => getFontSize(props)};
    color: ${({ theme }) => theme.colors.onBackground};

    ${({ hasBorder }) => hasBorder &&
        `border: ${({ borderSize }) => borderSize ? borderSize : '5px'} solid ${({ borderColor }) => borderColor ? borderColor : 'white'};`}
`

export const Image = styled.img`
    border-radius: 50%;
    object-fit: cover;

    ${({ size }) => size ? `
        width: ${size};
        height: ${size};
    ` : `
        width: 1.5em;
        height: 1.5em;
    `};

    ${({ minSize }) => minSize ? `
        min-width: ${minSize};
        min-height: ${minSize};
    ` : `
        min-width: 1.5em;
        min-height: 1.5em;
    `}

    ${({ maxSize }) => maxSize && `
        max-width: ${maxSize};
        max-height: ${maxSize};
    `}

    ${({ hasBorder, borderSize, borderColor }) => hasBorder &&
        `border: ${borderSize} solid ${borderColor}`
    }
`