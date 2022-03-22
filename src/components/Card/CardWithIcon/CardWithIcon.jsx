import PropTypes from 'prop-types'
import {
    CardContainer,
    CardWrapper,
    IconWrapper,
    Image,
    Icon,
    CardContent,
    Title,
    Detail
} from './CardWithIcon.styled'

const CardWithIcon = ({
    icon,
    image,
    title,
    detail,
    backgroundColor,
    color,
    layout,
    children
}) => {
    return (
        <CardContainer>
            <CardWrapper backgroundColor={backgroundColor} layout={layout}>
                <IconWrapper layout={layout}>
                    {image ?
                        <Image>
                            <img src={image} alt="" />
                        </Image> :
                        <Icon>
                            {icon}
                        </Icon>
                    }
                </IconWrapper>
                <CardContent color={color}>
                    {title && <Title>{title}</Title>}
                    {detail && <Detail>{detail}</Detail>}
                    {children}
                </CardContent>
            </CardWrapper>
        </CardContainer>
    )
}

CardWithIcon.defaultProps = {
    buttonTxt: 'Learn More',
    layout: 'column'
}

CardWithIcon.propTypes = {
    // title: PropTypes.string.isRequired,
}


export default CardWithIcon
