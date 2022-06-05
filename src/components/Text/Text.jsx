import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Body,
    Button,
    Caption,
    Overline,
    Label,
    TextWrapper
} from './Text.styled';
import PropTypes from 'prop-types'

const Text = ({
    variant,
    children,
    invert,
    textTransform,
    textAlign,
    color,
    accentColor,
    fontWeight
}) => {

    const getVariant = () => {
        switch (variant) {
            case "h1": return <H1 invert={invert} color={color} fontWeight={fontWeight}>{children}</H1>
            case "h2": return <H2 invert={invert} color={color} fontWeight={fontWeight}>{children}</H2>
            case "h3": return <H3 invert={invert} color={color} fontWeight={fontWeight}>{children}</H3>
            case "h4": return <H4 invert={invert} color={color} fontWeight={fontWeight}>{children}</H4>
            case "h5": return <H5 invert={invert} color={color} fontWeight={fontWeight}>{children}</H5>
            case "h6": return <H6 invert={invert} color={color} fontWeight={fontWeight}>{children}</H6>
            case "body": return <Body invert={invert} color={color} fontWeight={fontWeight}>{children}</Body>
            case "button": return <Button invert={invert} color={color} fontWeight={fontWeight}>{children}</Button>
            case "caption": return <Caption invert={invert} color={color} fontWeight={fontWeight}>{children}</Caption>
            case "overline": return <Overline invert={invert} color={color} fontWeight={fontWeight}>{children}</Overline>
            case "label": return <Label invert={invert} color={color} fontWeight={fontWeight}>{children}</Label>
            default: return <Body invert={invert} color={color} fontWeight={fontWeight}>{children}</Body>
        }
    }

    return (
        <TextWrapper textTransform={textTransform} textAlign={textAlign} accentColor={accentColor}>
            {getVariant()}
        </TextWrapper>
    )
}

Text.propTypes = {
    variant: PropTypes.oneOf([
        'body',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'overline',
        'label',
    ]),
}

export default Text