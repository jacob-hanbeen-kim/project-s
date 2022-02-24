import {
    Display1,
    Display2,
    Display3,
    H1,
    H2,
    Subtitle,
    Body,
    Button,
    Caption,
    Overline,
    Label,
    TextWrapper
} from './Text.styled';
import PropTypes from 'prop-types'

const defaultVariantMapping = {
    display1: 'h2',
    display2: 'h2',
    display3: 'h2',
    h1: 'h1',
    h2: 'h2',
    subtitle: 'h6',
    body: 'p',
    button: 'span',
    caption: 'p',
    overline: 'p',
    label: 'span',
}

const Text = ({ variant, children, invert, transform, color }) => {

    const getVariant = () => {
        switch (variant) {
            case "display1": return <Display1 invert={invert} color={color}>{children}</Display1>
            case "display2": return <Display2 invert={invert} color={color}>{children}</Display2>
            case "display3": return <Display3 invert={invert} color={color}>{children}</Display3>
            case "h1": return <H1 invert={invert} color={color}>{children}</H1>
            case "h2": return <H2 invert={invert} color={color}>{children}</H2>
            case "subtitle": return <Subtitle invert={invert} color={color}>{children}</Subtitle>
            case "body": return <Body invert={invert} color={color}>{children}</Body>
            case "button": return <Button invert={invert} color={color}>{children}</Button>
            case "caption": return <Caption invert={invert} color={color}>{children}</Caption>
            case "overline": return <Overline invert={invert} color={color}>{children}</Overline>
            case "label": return <Label invert={invert} color={color}>{children}</Label>
            default: return <Body invert={invert} color={color}>{children}</Body>
        }
    }

    return (
        <TextWrapper transform={transform}>
            {getVariant()}
        </TextWrapper>
    )
}

Text.propTypes = {
    variant: PropTypes.oneOf([
        'body',
        'button',
        'caption',
        'display1',
        'display2',
        'display3',
        'h1',
        'h2',
        'subtitle',
        'overline',
        'label',
    ]),
}

export default Text